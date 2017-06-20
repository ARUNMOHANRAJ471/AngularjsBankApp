var app = angular.module("myApp",['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when("/",{
    templateUrl : "login.html",
    controller: "loginController"
  })
  .when("/personal",{
    templateUrl : "personal.html",
    controller: "personalController"
  })
  .when("/account",{
    templateUrl : "account.html",
    controller: "accountController"
  })
  .when("/deposit",{
    templateUrl : "deposit.html",
    controller: "depositController"
  })
});
