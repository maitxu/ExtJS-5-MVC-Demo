/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('Test.Application', {
    extend: 'Ext.app.Application',

    name: 'Test',

    stores: [
        'Test.store.MenuItems',
        'Test.store.People'
    ],

    controllers: [
        'Test.controller.MainController',
        'Test.controller.DataController',
        'Test.controller.RoutingController'

    ],

    //Add Sencha Inspector init to launch function
    launch: function () {
        // <debug>
        try {
            //SenchaInspector.init();
            /**
             * if you connected app.json via a machine name or IP address,
             * you'll need to configure that here too
             */
            // SenchaInspector.init('http://MyComputerName:3000');
        } catch (e) { }
        // </debug>
    }
});
