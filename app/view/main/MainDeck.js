//The main view is a deck (card layout) of the available sections within this application

Ext.define('Test.view.main.MainDeck', {
    extend: 'Ext.container.Container',
    requires: [
        'Test.view.main.MenuCard',
        'Test.view.data.DataCard',
        'Test.view.routing.RoutingCard',
        'Test.view.sandbox.SandboxCard',
        'Test.view.component.BaseToolbar'
    ],
    referenceHolder: true,
    xtype: 'maindeck',
    layout: 'card',

    items: [
        { xtype: 'menucard' },
        { xtype: 'datacard' },
        { xtype: 'routingcard' },
        { xtype: 'sandboxcard' }
    ]
});
