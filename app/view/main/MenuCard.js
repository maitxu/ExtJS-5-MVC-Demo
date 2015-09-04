//The MenuCard is the first card in the main deck, giving the user options to navigate the app

Ext.define('Test.view.main.MenuCard', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Test.view.main.MenuTiles'
    ],
    alias: 'widget.menucard',

    itemId: 'menuCard',
    autoScroll: true,
    layout: 'anchor',
    items: [
        {
            xtype: 'container',
            minWidth: 425,
            cls: 'center',
            defaults: {
                cls: 'center'
            },
            items: [
                {
                    xtype: 'container',
                    width: 396,
                    html: '<img src="resources/images/Headspring_logo.png"/>',
                    padding: '80 0 30 0'
                },
                {
                    xtype: 'panel',
                    cls: 'title',
                    html: 'ExtJS Demo App',
                    height: 100
                },
                {
                    xtype: 'menutiles'
                }
            ]
        }
    ]
});
