app.controller("loginController",function($scope){
  console.log($scope);
    console.log($scope.emailData);

  $scope.redirectToHome = function (){
    console.log("redirect function");
    console.log($scope.emailData +" ... "+$scope.passwordData);

  if($scope.emailData == "arun" && $scope.passwordData == "123"){
    console.log("redirect if");
    window.location = "home.html";
  }
  }
});
