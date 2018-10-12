var testInput=false; 

$("document").ready(function() {


  $(".number").click(insertArguments);
  
  $("#equals").click(function() {
    var op = getOperation();

    var res = calculate(op);
    op=op.substr(1);
    $("#result").append("<br>" + op +" " + " = " + res);
    $("#screen").val(res);


  })

  $("#clear").click(function() {
    $("#screen").val("");
  })


  $(".showCalculator").click(function() {
    $(".calculator").css("display","block");
    $(".home").css("display","none");
        $("#result").css("display","none");

  })

  $("#back").click(function () {
    $(".calculator").css("display","none");
    $(".home").css("display","block");
        $("#result").css("display","none");

  })

  $(".operations").click(function () {
    $(".home").css("display","none");

    $("#result").css("display","block");
      $(".calculator").css("display","none");

  })

})


function calculate(tab) {
  tab = plusSplit(tab);
  //console.log(tab);
  for (var i = tab.length - 1; i >= 0; i--) {
    tab[i]=minusSplit(tab[i]);
    //console.log(tab[i]);
    for (var j = tab[i].length - 1; j >= 0; j--) {
      tab[i][j] = multipleSplit(tab[i][j]);
      //console.log(tab[i][j]);
      for (var k = tab[i][j].length - 1; k >= 0; k--) {
        tab[i][j][k] = divideSplit(tab[i][j][k]);
        
        tab[i][j][k]=division(tab[i][j][k]);
        //console.log(tab[i][j][k]);
      }
      tab[i][j] = multiplication(tab[i][j]);
    }
    tab[i]=substraction(tab[i]);

  }
tab = addition(tab);
if(isNaN(tab))
  return "Syntax Error!";
return tab;
//console.log(tab);
}



function division(arg) {
  var res = parseFloat(arg[0]); 
  for (var i = 1; i < arg.length; i++) {
    res /= parseFloat(arg[i]);
  }
  return res;
}

function multiplication(arg) {
  var res = 1 ;
  for (var i = arg.length - 1; i >= 0; i--) {
    res *= parseFloat(arg[i]);
  }
  return res;
}
function substraction(arg) {
  var res =parseFloat(arg[0]); 
  for (var i = 1; i < arg.length; i++) {
    res -= parseFloat(arg[i]);
  }
  return res; 
}

function addition(arg) {
  var res = 0 ; 
  for (var i = arg.length - 1; i >= 0; i--) {
    res += parseFloat(arg[i]);
  }
  return res; 
}



function plusSplit(arg) {
  var res = arg.split('+');
  return res;
}

function minusSplit(arg) {
  var res = arg.split('-');
  return res;
}

function divideSplit(arg) {
  var res = arg.split('/');
  return res;
}

function multipleSplit(arg) {
  var res = arg.split('*');
  return res;
}


function insertArguments() {
  
  if(!testInput || (parseFloat($(this).val())>=0 && parseFloat($(this).val())<=9))
      $("#screen").val( $("#screen").val() + $(this).val());
   

    switch($(this).val()){
      case "+" : testInput=true;break;
      case "-" : testInput=true;break;
      case "/" : testInput=true;break;
      case "*" : testInput=true;break;
      case "." : testInput=true;break;
      default : testInput=false;
    }
  }

function getOperation() {
    var op = $("#screen").val();
    return "0" + op;
  }








