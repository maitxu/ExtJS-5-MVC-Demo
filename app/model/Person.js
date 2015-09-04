Ext.define('Test.model.Person', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'string' },
        { name: 'first_name', type: 'string' },
        { name: 'last_name', type: 'string'},
        { name: 'email', type: 'string'}
    ]
});
