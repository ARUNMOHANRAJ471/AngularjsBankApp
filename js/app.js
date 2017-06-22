var app = angular.module("myApp",['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when("/",{
    templateUrl : "../templates/login.html",
    controller: "loginController"
  })
  .when("/personal",{
    templateUrl : "../templates/personal.html",
    controller: "personalController"
  })
  .when("/account",{
    templateUrl : "../templates/account.html",
    controller: "accountController"
  })
  .when("/deposit",{
    templateUrl : "../templates/deposit.html",
    controller: "depositController"
  })
});
