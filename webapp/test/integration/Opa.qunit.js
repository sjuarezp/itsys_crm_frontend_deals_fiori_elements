sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/itsys/sjp/crm/itsyscrmdeals/test/integration/pages/MainListReport' ,
        'com/itsys/sjp/crm/itsyscrmdeals/test/integration/pages/MainObjectPage',
        'com/itsys/sjp/crm/itsyscrmdeals/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/itsys/sjp/crm/itsyscrmdeals') + '/index.html'
        });

        
        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
        
    }
);