app.controller("loginController",function($scope, $log){
  $scope.showWarning = { status: false};
  $scope.redirectToHome = function (){
    console.log("redirect function");

  if(($scope.emailData == "arun@example.com" && $scope.passwordData == "123") || ($scope.emailData == "bala@example.com" && $scope.passwordData == "123")){
    console.log("redirect if",$scope.emailData);
    $log.email = $scope.emailData;
    window.location = "/#/personal";
  }else{
      $scope.showWarning.status = true;
  }
  }
});

app.controller("personalController",function($scope, $log){
  console.log($log.email);
  var personalDataCollection = [
    {
      name: "Arun Mohan Raj B",
      address:"TamilNadu, India",
      mail:"arun@example.com",
      dob:"May 09, 1995",
      image: "http://www.cashforkids.uk.com/wp-content/uploads/2013/08/Happy-Kid-Stock.jpg"
    },{
      name: "Bala Vignesh B",
      address:"TamilNadu, India",
      mail:"bala@example.com",
      dob:"oct 17, 1998",
      image: "http://lh5.ggpht.com/_S0f-AWxKVdM/S5TpU6kRmUI/AAAAAAAAL4Y/wrjx3_23kw4/d_silhouette%5B2%5D.jpg?imgmax=800"
    }];

    var personalDataX = [];
    for (var i = 0; i < personalDataCollection.length; i++) {
      if(personalDataCollection[i].mail == $log.email) {
        personalDataX.push(personalDataCollection[i]);
      }
    }
    $scope.personalData = personalDataX;
});

app.controller("accountController",function($scope,$log){
  console.log("checking "+$scope.emailData +" ... "+$scope.passwordData);

  var accountDataCollection = [
    {
      mail: "arun@example.com",
      accntNum: "1234567890123",
      branch:"Bangalore",
      balance:"58,421.76 Rs",
      loanAmnt:"3000",
      image: "http://ichef.bbci.co.uk/images/ic/960xn/p04h5n1h.png"
    },{
      mail: "bala@example.com",
      accntNum: "9876543210987",
      branch:"Coimbatore",
      balance:"12,652.59 Rs",
      loanAmnt:"1000",
      image: "http://ichef.bbci.co.uk/images/ic/960xn/p04h5n1h.png"
    }];

        var accountDataX = [];
        for (var i = 0; i < accountDataCollection.length; i++) {
          if(accountDataCollection[i].mail == $log.email) {
            accountDataX.push(personalDataCollection[i]);
          }
        }
        $scope.accountData = accountDataX;
});
