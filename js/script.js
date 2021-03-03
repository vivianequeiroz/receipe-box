var app = angular.module('receipeBox', []);

app.controller('recipeBoxCtrl', function($scope){

    $scope.saved = localStorage.getItem('_msecrist_recipebox');
	$scope.recipeList = (localStorage.getItem('_msecrist_recipebox')!==null) ? JSON.parse($scope.saved) : [
        {
        title: "Pizza",
        ingredients: "Cheese, Ham, Tomato"
        }, {
        title: "Ice-cream",
        ingredients: "Milk, Chocolate, Sugar"
        }, {
        title: "Cheesecake",
        ingredients: "Milk, cream, buscuits, sugar"
        }, {
        title: "Cake",
        ingredients: "Milk, eggs, vanilla, chocolate"
        }];
});

localStorage.setItem('_msecrist_recipebox', JSON.stringify($scope.recipeList));