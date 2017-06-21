app.controller("loginController",function($scope){
  console.log($scope);
    console.log($scope.emailData);

  $scope.showWarning = { status: false};
  $scope.redirectToHome = function (){
    console.log("redirect function");
    console.log($scope.emailData +" ... "+$scope.passwordData);

  if($scope.emailData == "arun" && $scope.passwordData == "123"){
    console.log("redirect if");
    window.location = "personal.html";
  }else{
      $scope.showWarning.status = true;
  }
  }
});

app.controller("personalController",function($scope){
  $scope.personalData = [
    {
      name: "Arun Mohan Raj B",
      address:"TamilNadu, India",
      mail:"arun@example.com",
      dob:"May 09, 1995",
      image: "http://lh5.ggpht.com/_S0f-AWxKVdM/S5TpU6kRmUI/AAAAAAAAL4Y/wrjx3_23kw4/d_silhouette%5B2%5D.jpg?imgmax=800"
    }]
});
