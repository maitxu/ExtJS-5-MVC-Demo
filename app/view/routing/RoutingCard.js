Ext.define('Test.view.routing.RoutingCard', {
    extend: 'Ext.panel.Panel',
    requires: [
    ],
    alias: 'widget.routingcard',
    reference: 'routingcard',
    itemId: 'routingCard',
    autoScroll: true,
    layout: 'anchor',
    items: [
        {
            xtype: 'basetoolbar'
        },
        {
            xtype: 'tabpanel',
            items: [
                {
                    title: 'Home Page',
                    itemId: 'Home',
                    padding: 20,
                    html: "This is a page that people want to bookmark, or use browser navigation between."
                },
                {
                    title: 'Other Page',
                    itemId: 'Other',
                    padding: 20,
                    html: "This is <b>another</b> page that people want to bookmark, or use browser navigation between."
                }
            ]
        }
    ]
});
