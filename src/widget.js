/**
 * Created by Tamer on 19/10/2017.
 */

import Actions from './Actions'
import List from './List'

Stage.defineWidget({
  id: 'visual-input',
  name: 'Visualization Deployment Creation Input',
  description: 'Visualization Deployment Creation Input Widget',
  initialWidth: 12,
  initialHeight: 16,
  color: 'purple',
  hasStyle: true,
  isReact: true,

  permission: Stage.GenericConfig.CUSTOM_WIDGET_PERMISSIONS.CUSTOM_ALL,
  categories: [Stage.GenericConfig.CATEGORY.SYSTEM_RESOURCES],

  initialConfiguration: [
    { id: 'blueprintId', name: 'Blueprint Id', default: 'COV', type: Stage.Basic.GenericField.STRING },
    { id: 'allowNameEdit', name: 'Allow User to change Deployment Name', default: true, type: Stage.Basic.GenericField.BOOLEAN_TYPE },

    { id: 'onFinishRedirect', name: 'Redirect to Page on finish', default: false, type: Stage.Basic.GenericField.BOOLEAN_TYPE },
    { id: 'template', name: 'Template to Redirect to, after finish', default: 'deployment', type: Stage.Basic.GenericField.STRING_TYPE }
  ],

  fetchData(widget, toolbox, params) {
    let actions = new Actions(Object.assign({ toolbox }, widget.configuration));

    return actions.doGetInputDescriptor();
  },

  render: function (widget, data, error, toolbox) {

    if (_.isEmpty(data)) {
      return <Stage.Basic.Loading />;
    }

    let actions = new Actions(Object.assign({ toolbox }, widget.configuration));


    return (
      <List
        widget={widget}
        data={data}
        toolbox={toolbox}
        actions={actions}
        />
    );
  }
});