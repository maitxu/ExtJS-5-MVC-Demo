Ext.define('Test.view.data.DataToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.datatoolbar',
    defaults: {
        xtype: 'button',
        ui: 'default-small',
        scale: 'small'
    },
    items: [
        {
            text: 'Back to Menu',
            navTo: 'menuCard'
        },
        {
            text: 'Grid View',
            name: 'viewAsGrid',
            toggleGroup: 'displayOption',
            pressed: true
        },
        {
            text: 'Template View',
            name: 'viewAsTemplate',
            toggleGroup: 'displayOption'
        }
    ]
});
