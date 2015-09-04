Ext.define('Test.store.People', {
    extend: 'Ext.data.Store',
    model: 'Test.model.Person',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url : 'app/store/Mock_People.json',
        reader: {type: 'json'}
    }
});
