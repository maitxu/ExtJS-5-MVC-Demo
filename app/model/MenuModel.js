Ext.define('Test.model.MenuModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'src', type: 'string' },
        { name: 'caption', type: 'string' },
        { name: 'navTo', type: 'string'}
    ]
});
