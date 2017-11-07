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
    color : 'purple',
    hasStyle: true,
    isReact: true,
    
    permission: Stage.GenericConfig.CUSTOM_WIDGET_PERMISSIONS.CUSTOM_ALL,
    categories: [Stage.GenericConfig.CATEGORY.SYSTEM_RESOURCES],

    initialConfiguration: [
      { id: 'deploymentId', name: 'Deployment Id', default: 'cloudify-deployment-visualization-widget-sample', type: Stage.Basic.GenericField.STRING },      
    ],

    fetchData (widget, toolbox, params) {
        let actions = new Actions ({
          toolbox,
          ...widget.configuration,
        });
        
        return actions.doGetDeployment ();
    },

    render: function (widget, data, error, toolbox) {
        
        if (_.isEmpty (data)) {
          return <Stage.Basic.Loading />;
        }
    
        let actions = new Actions ({
          toolbox,
          ...widget.configuration,
        });

    
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