/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.controller('ResearchCtrl', ['$scope','$location','$state',ResearchCtrl]);

function ResearchCtrl ($scope,$location,$state) {
    $scope.goDictionary = function(){
        $location.path('/dictionarymode')
    } ;
        
}