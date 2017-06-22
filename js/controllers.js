app.controller("loginController",function($scope, $log){
  $scope.showWarning = { status: false};
  $scope.redirectToHome = function (){

  if(($scope.emailData == "arun@example.com" && $scope.passwordData == "123") || ($scope.emailData == "bala@example.com" && $scope.passwordData == "123")){
    $log.email = $scope.emailData;
    window.location = "/#/personal";
  }else{
      $scope.showWarning.status = true;
  }
  }
});

app.controller("personalController",function($scope, $log){
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
      image: "http://cdn.wallpapersafari.com/55/83/BDgveA.jpg"
    }];

    var personalDataX = [];
    var accountHolders = [];
    for (var i = 0; i < personalDataCollection.length; i++) {
      if(personalDataCollection[i].mail == $log.email) {
        personalDataX.push(personalDataCollection[i]);
      }
      accountHolders.push(personalDataCollection[i].mail);
    }
    $scope.personalData = personalDataX;
    $log.accountHoldersData = accountHolders;
});

app.controller("accountController",function($scope,$log){

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
            accountDataX.push(accountDataCollection[i]);
          }
        }
        $scope.accountData = accountDataX;
});
app.controller("depositController",function($scope, $log){
  $scope.showMessage = {status: false};
  $scope.typeOfDeposit = ["pay-in-slip", "cheque"];
   $scope.typeOfPerson = $log.accountHoldersData;
   $scope.alertForDeposit = function(){
     if($scope.amountDeposited != undefined){
     $scope.showMessage.status = true;
   }
 }
});
