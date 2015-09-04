Ext.define('Test.view.sandbox.SandboxCard', {
    extend: 'Ext.panel.Panel',
    requires: [

    ],
    alias: 'widget.sandboxcard',
    itemId: 'sandboxCard',
    autoScroll: true,
    layout: 'anchor',
    items: [
        {
            xtype: 'basetoolbar'
        },
        {
            xtype: 'panel',
            ui: 'crazy',
            title: 'Change code in SandboxCard.js to modify this page',
            margin: 20,
            bodyPadding: 20,
            collapsible: true,
            frame: true,
            html: 'This is the body of the panel'
        }
    ]
});
