// waits for the document to be ready before loading the JS. otherwise it will take action on nothing
$(document).ready(function(){
  var cball = 1000;
  var sball = 1000;
  var cball_input = $("#cbal");
  var sball_input = $("#sbal");
  $("#cresult").text(cball);
  $("#sresult").text(sball);


  function cchangeColors(){
    switch(true){
      case (cball == 0):
        $("#cbox").css("background-color", "rgba(255,64,64,0.5)");
        break;
      case (cball < 200):
        $("#cbox").css("background-color", "rgba(255,222,64,0.5)");
        break;
      case (cball >= 200):
        $("#cbox").css("background-color", "rgba(200,200,208,0.5)");
        break;      
    }
  }
  
  function schangeColors(){
    switch(true){
      case (sball == 0):
        $("#sbox").css("background-color", "rgba(255,64,64,0.5)");
        break;
      case (sball < 200):
        $("#sbox").css("background-color", "rgba(255,222,64,0.5)");
        break;
    }
  }

  $("#cwith").on("click", checking_withdrawal);
  $("#cdep").on("click", checking_deposit);
  $("#swith").on("click", savings_withdrawal);
  $("#sdep").on("click", savings_deposit);

  function checking_withdrawal(event){
    event.preventDefault();

    var cchange = parseInt(cball_input.val());
    if (cchange > cball) {
      if (cchange > (cball + sball)) {
        alert("You don't have enough funds sir");
      } else {
        var cdiff = cchange - cball;
        alert('Overdraft Successful: ' + cdiff)
        cball = 0;
        sball = sball - cdiff;
        $("#sresult").text(sball);
      }
    } else {
      cball = cball - cchange;
    }
    cchangeColors();
    schangeColors();
    console.log(cball, cchange);
    $("#cresult").text(cball);

  }

  function checking_deposit(event){
    event.preventDefault();

    var cchange = parseInt(cball_input.val());
    cball = cball + cchange;
    cchangeColors();
    schangeColors();

    console.log(cball, cchange);
    $("#cresult").text(cball);

  }

  function savings_withdrawal(event){
    event.preventDefault();

    var schange = parseInt(sball_input.val());
    if (schange > sball) {
      alert("You don't have enough funds sir");
    } else {
      sball = sball - schange;
    }
    cchangeColors();
    schangeColors();
    console.log(cball, schange);
    $("#sresult").text(sball);

  }

  function savings_deposit(event){
    event.preventDefault();

    var schange = parseInt(sball_input.val());
    sball = sball + schange;
    cchangeColors();
    schangeColors();
    console.log(cball, schange);
    $("#sresult").text(sball);

  }

});