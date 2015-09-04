Ext.define('Test.store.MenuItems', {
    extend: 'Ext.data.Store',
    model: 'Test.model.MenuModel',
    storeId: 'menuItems',
    data: [
        { src: 'resources/images/data.png', caption: 'Data Views', navTo: 'dataCard' },
        { src: 'resources/images/routing.png', caption: 'Routing', navTo: 'routingCard' },
        { src: 'resources/images/edit.png', caption: 'Sandbox', navTo: 'sandboxCard' }
    ]
});
