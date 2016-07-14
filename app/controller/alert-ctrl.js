/**
 * Alerts Controller
 */

app.controller('AlertsCtrl', ['$scope', AlertsCtrl]);

function AlertsCtrl($scope) {
     $scope.alerts = [{
        type: 'success',
        msg: 'Welcome back Clinton! It has been 3 days since we last saw you!'
    }
    //, {
    //     type: 'danger',
    //     msg: 'Found a bug? Create an issue with as many details as you can.'
    // }, {
    //     type: 'hello',
    //     msg: 'Welcome back Clinton! It has been 3 days since we last saw you!'
    //}
    ];
    $scope.addAlert = function() {
        $scope.alerts.push({
            msg: 'Another alert!'
        });
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };

    $scope.getHello = function(){
         for (var i = alerts.length - 1; i >= 0; i--) {
                if(alerts[i].type == "hello"){
                    return alerts[i];
                }
        }
    };
}