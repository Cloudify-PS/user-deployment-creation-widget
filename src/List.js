/**
 * Created by Tamer on 19/10/2017.
 */

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
      form: {}
    };
  }

  handleChange = (id, value) => {
    this.setState({ form: {...this.state.form, [id]: value} })
    console.log('form state', this.state.form);
  }

componentWillMount(){
  const data = this.props.data;

  // extract available inputs to the loop
  const visual_data = data.filter(e => [
    'button',
    'input',
    'checkbox',
    'toogle',
    'radio',
    'dropdown',
    'range',
    'message',
    'selectbox',

    'textarea',

  ].includes(e.type));

  console.log({ visual_data })

  // sort items by position
  visual_data.sort((a, b) => a.position - b.position);

  // set default data
  let form = {};
  visual_data.forEach(item => {
    form[item.id] = item.params.default;
  })
  this.setState({ form });

  // TODO: we need to add default values to the state and make the inputs read and write to state

  this.visual_data = visual_data;
}

/*
|--------------------------------------------------------------------------
| React Renderer
|--------------------------------------------------------------------------
*/
render() {
  const {Button, Input, Checkbox, Dropdown, Message} = Stage.Basic;

  /**
   * charts visual output
   */
  const visuals = this.visual_data.map((item, idx) => <div className='chart-box' key={idx} style={{ flexBasis: (item.flex || 33) + '%' }}>

    {item.type === 'button' && <Button
      fluid={!item.params.circular}
      color={item.params.color}
      circular={item.params.circular}
      icon={item.params.label ? false : item.params.icon}
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

    {item.type === 'toogle' && <Checkbox
      toggle
      label={item.params.label}
      checked={this.state.form[item.id]}
      onChange={(proxy, options) => this.handleChange.call(this, item.id, options.checked)}
      />}

    {item.type === 'radio' && <div>
      <b>{item.params.label}</b>
      <br />
      <br />
      {item.params.options.map(option => <div>
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

  </div>);

  return <div className='deployment-visual-creation'>
    {visuals}
  </div>;
}
}
