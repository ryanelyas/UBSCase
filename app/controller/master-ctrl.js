/**
 * Master Controller
 */

app.controller('MasterCtrl', ['$scope', '$cookieStore', '$location', '$state','ngDialog', MasterCtrl]);

function MasterCtrl($scope, $cookieStore, $location, $state, ngDialog ) {
    /**
     * Sidebar Toggle & Cookie Control
     */
    var mobileView = 992;

    $scope.getWidth = function() {
        return window.innerWidth;
    };
    
    $scope.clickToOpen = function () {
        ngDialog.open({ template: 'templates/popup.html', className: 'ngdialog-theme-default' });
    };

    $scope.clickToOpenAns1 = function () {
        ngDialog.open({ template: 'templates/popupans1.html', className: 'ngdialog-theme-default' });
    };

    $scope.currentPath = $location.path();
    
    $scope.state = $state;

    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
        if (newValue >= mobileView) {
            if (angular.isDefined($cookieStore.get('toggle'))) {
                $scope.toggle = ! $cookieStore.get('toggle') ? false : true;
            } else {
                $scope.toggle = true;
            }
        } else {
            $scope.toggle = false;
        }

    });

    $scope.toggleSidebar = function() {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);
    };

    window.onresize = function() {
        $scope.$apply();
    };

}