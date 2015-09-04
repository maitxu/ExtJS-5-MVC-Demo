Ext.define('Test.view.main.MenuTiles', {
    extend: 'Ext.view.View',
    alias: 'widget.menutiles',
    height: 200,
    reference: 'menucard',
    name: 'menuTiles',
    layout: 'anchor',
    store: 'Test.store.MenuItems',
    tpl:
        '<tpl for=".">'+
            '<div class="tile-wrap">'+
                '<img src="{src}" width=100/>'+
                '<br/><span>{caption}</span>'+
            '</div>'+
        '</tpl>',
    itemSelector: 'div.tile-wrap',
    emptyText: 'No images available'
});
