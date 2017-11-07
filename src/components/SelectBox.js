/**
 * Created by Tamer on 19/10/2017.
 */
import Render from '../utils/mustache';


/**
 * @class List
 * @extends {Component}
 */
export default class SelectBox extends React.Component {
  /**
   * Creates an instance of List.
   * @param {any} props 
   * @param {any} context 
   */
  constructor(props, context) {
    super(props, context);
    this.state = {
      formData: {}
    };
  }

  /*
  |--------------------------------------------------------------------------
  | React Renderer
  |--------------------------------------------------------------------------
  */
  render() {
    let {options, template, onChange, value, style} = this.props;

    return <div className={'selectbox-style'+(style || 1)}>
      {options.map((item, idx) =>
        <div
          key={idx}
          className={['item', (item.value === value && 'active')].join(' ')}
          onClick={() => item.value !== value && onChange(item.value)}
          dangerouslySetInnerHTML={{ __html: Render(template, item) }}
          />)}
    </div>;
  }
}
