Ext.define('Test.controller.MainController', {
    extend: 'Ext.app.Controller',

    alias: 'controller.main',

    init: function () {
        var me = this;
        me.listen({
            component: {
                'dataview[name=menuTiles]': {
                    itemclick: me.changeCard
                },
                'button[navTo=menuCard]': {
                    click: me.changeCard
                }
            },
            controller: {

            },
            store: {

            }
        });
    },

    changeCard: function (tile) {
        var newCard = tile.navTo || tile.selection.data.navTo;
        tile.up('maindeck').getLayout().setActiveItem(newCard);
    }
});
