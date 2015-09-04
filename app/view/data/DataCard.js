/* Spotlight Example adapted from: http://dev.sencha.com/ext/5.1.0/examples/core/spotlight.html */

Ext.define('Test.view.data.DataCard', {
    extend: 'Ext.container.Container',
    requires: [
        'Test.view.data.DataToolbar'
    ],
    alias: 'widget.datacard',
    reference: 'datacard',
    itemId: 'dataCard',
    layout: 'border',
    items: [
        {
            xtype: 'datatoolbar',
            region: 'north'
        },
        {
            xtype: 'panel',
            name: 'toggleCard',
            region: 'center',
            layout: 'card',
            items: [
                {
                    xtype: 'gridpanel',
                    itemId: 'grid',
                    store: 'Test.store.People',
                    viewConfig: {
                        stripeRows: true
                    },
                    columns: [
                        {text: "Last", dataIndex: 'last_name', flex: 1},
                        {text: "First", dataIndex: 'first_name', flex: 1},
                        {text: "E-mail", dataIndex: 'email', flex: 2}
                    ]
                },
                {
                    xtype: 'dataview',
                    autoScroll: true,
                    itemId: 'template',
                    layout: 'anchor',
                    store: 'Test.store.People',
                    tpl:
                        '<tpl for=".">'+
                            '<div class="row">'+
                                '<div class="name">{first_name} {last_name}</div>'+
                                '<div class="email">{email}</div>'+
                            '</div>'+
                        '</tpl>',
                    itemSelector: 'div.row',
                    emptyText: 'No data available'
                }
            ]
        }
    ]
});
