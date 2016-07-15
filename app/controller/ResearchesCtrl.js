/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.controller('ResearchesCtrl', ['$scope','$location','$state',ResearchesCtrl]);

function ResearchesCtrl ($scope,$location,$state) {
    $scope.goOil = function(){
        $location.path('/research')
    } ;
        
}

