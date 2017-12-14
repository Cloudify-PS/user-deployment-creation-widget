/**
 * Created by Tamer on 19/10/2017.
 */
import YAML from './utils/YAML';
import base10to64 from './utils/base10to64';
import SelectBox from './components/SelectBox';

/**
 * @class List
 * @extends {Component}
 */
export default class List extends React.Component {
  /**
   * Creates an instance of List.
   * @param {any} props 
   * @param {any} context 
   */
  constructor(props, context) {
    super(props, context);

    this.state = {
      form: {},
      visual_data: {},
      errors: {},
      success: null,
      deploymentTitle: '',
      loading: false,
      yamlError: null
    };
  }

  componentWillMount() {
    let data = this.props.data;
    this.props.toolbox.getEventBus().on('devmode:render', res => res.widgetId === this.props.widget.id && this.renderJSON2YAML(res.data), this);
    this.props.toolbox.getEventBus().trigger('devmode:update', data, this.props.widget);
    
    this.updateDeploymentName();
    this.renderJSON2YAML(data);
  }
  componentWillUnmount() {
    this.props.toolbox.getEventBus().off('devmode:render', this._devmode, this);
  }

  updateDeploymentName(){
    const user = this.props.toolbox.getManager().getCurrentUsername();
    const blueprint = this.props.widget.configuration.blueprintId;
    const time64 = base10to64(Math.floor(Date.now() / 1000));
    const deploymentTitle = `admin deployment ${user}_${blueprint}_${time64}`;
    this.setState({deploymentTitle});
  }

  renderJSON2YAML(value) {
    this.setState({ yamlError: null })
    try {
      let data = YAML.parse(value);
      this.prepareData(data);
    } catch (e) {
      this.setState({ yamlError: e.message })
    }
  }

  prepareData(data) {

    // extract available inputs to the loop
    const visual_data = data.filter(e => [
      'button',
      'input',
      'textarea',
      'checkbox',
      'toggle',
      'radio',
      'dropdown',
      'range',
      'message',
      'selectbox'
    ].includes(e.type));

    console.log({ visual_data })

    // sort items by position
    visual_data.sort((a, b) => a.position - b.position);

    // set default data
    let form = {};
    visual_data.forEach(item => {
      if (item.id && item.type !== 'button') {
        form[item.id] = item.params.default;
      }
    })
    this.setState({ form, visual_data });
  }

  handleChange = (id, value) => {
    // TODO: before submit check for arrays to join them
    this.setState({ form: Object.assign(this.state.form, { [id]: value }) });
    console.log('form state', this.state.form);
  }

  _createDeployment = () => {
    let errors = {};
    Object.keys(this.state.form).forEach(item => {
      // TODO: add more validations methods, by default now is required
      if (_.isNil(this.state.form[item]) || this.state.form[item] === '') {
        errors[item] = 'required';
      }
    });
    if (Object.keys(errors).length !== 0) {
      errors.error = 'Please check errors given below';
    }
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {

      const blueprint = this.props.widget.configuration.blueprintId;
      const deployment = this.state.deploymentTitle;
      const privateResource = false;
      const skipPluginsValidation = false;
      
      const blueprint_id = this.state.form.blueprint_id || 'service';
      let deployment_inputs = this.state.form;
      if(deployment_inputs.blueprint_id){
        delete deployment_inputs.blueprint_id;
      }

      const inputs = {
        blueprint_id,
        deployment_inputs
      }
      console.log('inputs', inputs);
      this.setState({ loading: true });
      var actions = new Stage.Common.BlueprintActions(this.props.toolbox);
      actions.doDeploy({ id: blueprint }, deployment, inputs, privateResource, skipPluginsValidation)
        .then((deployment) => {
          this.updateDeploymentName();
          this.setState({ loading: false, errors: {}, success: 'Your request has been submitted and awaiting approval' });
          const onFinishRedirect = this.props.widget.configuration.onFinishRedirect;
          const template = this.props.widget.configuration.template;
          if (onFinishRedirect) {
            this.props.toolbox.drillDown(this.props.widget, template, { deploymentId: deployment.id }, deployment.id);
          }
        })
        .catch((err) => {
          this.setState({ loading: false, errors: { error: err.message } });
        });
    }
  }

  /*
  |--------------------------------------------------------------------------
  | React Renderer
  |--------------------------------------------------------------------------
  */
  render() {
    if (this.state.loading) {
      return <Stage.Basic.Loading />;
    }

    const {Button, Input, Checkbox, Dropdown, Message, Card} = Stage.Basic;

    /**
     * charts visual output
     */
    const visuals = this.state.visual_data.map((item, idx) => <div className='chart-box' key={idx} style={{ flexBasis: (item.flex || 33) + '%' }}>

      {item.type === 'button' && <Button
        fluid={!item.params.circular}
        color={item.params.color}
        circular={item.params.circular}
        icon={item.params.label ? false : item.params.icon}
        onClick={() => {
          item.params.action === 'createDeployment' && this._createDeployment.call(this);
        } }
        >
        {item.params.label}
      </Button>}

      {item.type === 'input' && <Input
        fluid
        type={item.params.isPassword ? 'password' : 'text'}
        label={item.params.label}
        placeholder={item.params.placeholder}
        value={this.state.form[item.id]}
        onChange={(proxy, options) => this.handleChange.call(this, item.id, options.value)}
        />}

      {item.type === 'checkbox' && <Checkbox
        label={item.params.label}
        checked={this.state.form[item.id]}
        onChange={(proxy, options) => this.handleChange.call(this, item.id, options.checked)}
        />}

      {item.type === 'toggle' && <Checkbox
        toggle
        label={item.params.label}
        checked={this.state.form[item.id]}
        onChange={(proxy, options) => this.handleChange.call(this, item.id, options.checked)}
        />}

      {item.type === 'radio' && <div>
        <b>{item.params.label}</b>
        <br />
        <br />
        {item.params.options.map((option, idx) => <div key={idx}>
          <Checkbox
            radio
            name={item.id}
            label={option.text}
            value={option.value}
            checked={this.state.form[item.id] === option.value}
            onChange={(proxy, options) => this.handleChange.call(this, item.id, options.value)}
            />
        </div>)}
      </div>}

      {item.type === 'dropdown' && <div>
        <b>{item.params.label}</b>
        <br />
        <br />
        <Dropdown
          fluid
          selection
          multiple={item.params.multiple}
          placeholder={item.params.placeholder}
          options={item.params.options}
          value={this.state.form[item.id]}
          onChange={(proxy, options) => this.handleChange.call(this, item.id, options.value)}
          />
      </div>}

      {item.type === 'range' && <div>
        <b>{item.params.label}</b>
        <br />
        <br />
        <input
          type="range"
          step={item.params.step || 1}
          min={item.params.min || 0}
          max={item.params.max || 100}
          value={this.state.form[item.id]}
          onChange={proxy => this.handleChange.call(this, item.id, proxy.target.value)}
          style={{ width: '100%' }}
          />
      </div>}

      {item.type === 'message' && <Message
        color={item.params.color}
        >{item.params.label}</Message>}

      {item.type === 'selectbox' && <div>
        <b>{item.params.label}</b>
        <br /><SelectBox
          style={item.params.style}
          template={item.params.template}
          options={item.params.options}
          value={this.state.form[item.id]}
          onChange={value => this.handleChange.call(this, item.id, value)}
          />
      </div>}

      {
        this.state.errors[item.id] &&
        this.state.errors[item.id].split(',').includes('required') &&
        <div className='err'>Please Fill {item.params.label || 'Field'}{' '}its Required</div>
      }

    </div>);

    const errorMessage = this.state.errors.error && (<Message color="red" onDismiss={() => this.setState({ errors: Object.assign(this.state.errors, { error: null }) })} >
      {this.state.errors.error}
    </Message>);

    const successMessage = this.state.success && <Message color="green" onDismiss={() => this.setState({ success: null })} >
      {this.state.success}
    </Message>;
    const yamlError = this.state.yamlError && <Message color="yellow" onDismiss={() => this.setState({ yamlError: null })} >
      {this.state.yamlError}
    </Message>;

    const allowNameEdit = this.props.widget.configuration.allowNameEdit;

    return <div>
      {errorMessage}
      {successMessage}
      {yamlError}

      {!this.state.success && allowNameEdit && <Input
        fluid
        type={'text'}
        label="Deployment Title"
        placeholder="Please Enter Your Deployment Title, should be unique name"
        value={this.state.deploymentTitle}
        onChange={(proxy, options) => this.setState({ deploymentTitle: options.value })}
        />}

      <div className='deployment-visual-creation'>
        {!this.state.success && visuals}
      </div>
    </div>;
  }
}
