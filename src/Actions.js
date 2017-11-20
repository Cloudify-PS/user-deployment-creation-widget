/**
 * Created by Tamer on 06/11/2017.
 */

/**
 * @class Actions
 */
export default class Actions {
  /**
   * Creates an instance of Actions.
   * 
   * @param {object} 
   * @memberof Actions
   * @access public
   */
  constructor(o) {
    this.toolbox = o.toolbox;
    this.deploymentId = o.deploymentId;
    this.blueprintId = o.blueprintId;
  }

  /**
   * get output data
   * 
   * @returns 
   * @memberof Actions
   * @access public
   */
  doGetDeployment() {
    return Promise.resolve([
      {
        id: 'os',
        type: 'dropdown',
        flex: 100,
        position: 50,
        params: {
          label: 'Operating System',
          placeholder: 'Please Select the OS',
          multiple: false,
          options: [
            { text: 'Windows', value: 'windows' },
            { text: 'Linux', value: 'linux' }
          ]
        }
      },
      {
        id: 'my_button',
        type: 'button',
        flex: 100,
        position: 101,
        params: {
          label: 'My Button',
          circular: false,
          icon: 'facebook', // list of icons https://react.semantic-ui.com/elements/icon label will overwrite
          color: 'green', // red, orange, yellow, olive, green, teal, blue, violet, purple, pink, brown, grey, black,
          action: 'createDeployment'
        },
      },
      {
        id: 'my_input',
        type: 'input',
        flex: 33,
        position: 99,
        params: {
          label: 'My Input',
          default: 'Hello Input',
          placeholder: 'Please Enter Your Data',
          isPassword: false
        }
      },
      {
        id: 'my_checkbox',
        type: 'checkbox',
        flex: 33,
        position: 99,
        params: {
          label: 'My Checkbox',
          default: true
        }
      },
      {
        id: 'my_toggle',
        type: 'toggle',
        flex: 33,
        position: 99,
        params: {
          label: 'My Toggle',
          default: true
        }
      },
      {
        id: 'my_radio',
        type: 'radio',
        flex: 33,
        position: 99,
        params: {
          label: 'My Radio',
          default: 'op1',
          options: [
            { text: 'Option 1', value: 'op1' },
            { text: 'Option 2', value: 'op2' },
            { text: 'Option 3', value: 'op3' }
          ]
        }
      },
      {
        id: 'my_dropdown',
        type: 'dropdown',
        flex: 33,
        position: 99,
        params: {
          label: 'My Dropdown',
          placeholder: 'Hello Dropdown',
          multiple: true,
          default: ['op1'],
          options: [
            { text: 'Option 1', value: 'op1' },
            { text: 'Option 2', value: 'op2' },
            { text: 'Option 3', value: 'op3' }
          ]
        }
      },
      {
        id: 'my_range',
        type: 'range',
        flex: 33,
        position: 99,
        params: {
          label: 'My Range',
          default: 20,
          step: 1,
          min: 0,
          max: 100
        }
      },
      {
        type: 'message',
        flex: 33,
        position: 99,
        params: {
          label: 'Hello i am a Message',
          color: 'green'
        }
      },
      {
        id: 'my_selectbox',
        type: 'selectbox',
        flex: 100,
        position: 97,
        params: {
          label: 'My SelectBox',
          template: '<h1>{{text}}</h1><p>{{value}}</p>',
          style: 1, // 1 or 2
          default: '2b',
          options: [
            { text: 'x-small', value: '1m' },
            { text: 'small', value: '2b' },
            { text: 'medium', value: '3m' },
            { text: 'large', value: '5l' }
          ]
        }
      }
    ]);
    // return this.toolbox.getManager().doGet(`/deployments/${this.deploymentId}`);
  }

  doGetInputDescriptor(path = 'input_descriptor.yaml') {
    console.log({path})
    return this.doGetFilesTree(this.blueprintId).then(files => {
      let file = files.children[0].children.find(item => item.title === path);
      if(file){
        return this.doGetFileContent(file.key);
      }else{
        return Promise.reject(`${path} not found.`);
      }
    })
  }

  doGetBlueprintId(deploymentId) {
    return this.toolbox.getManager().doGet(`/deployments/${deploymentId}?_include=id,blueprint_id`);
  }

  doGetFilesTree(blueprintId) {
    return this.toolbox.getInternal().doGet(`/source/browse/${blueprintId}/archive`);
  }

  doGetFileContent(path) {
    return this.toolbox.getInternal().doGet('/source/browse/file', { path });
  }
}
