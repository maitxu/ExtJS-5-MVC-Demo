Ext.define('Test.view.component.BaseToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.basetoolbar',
    items: [
        {
            xtype: 'button',
            ui: 'default-small',
            scale: 'small',
            text: 'Back to Menu',
            navTo: 'menuCard'
        }
    ]
});
