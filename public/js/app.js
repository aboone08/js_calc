$(document).ready(function(){
  var calculator = Object.create(Calculator);
  var display = $('#display');
  var lastOperation = '';
  var number = $('#number');

  $('#clear').on('click', clear);
  $('#plus').on('click', plus);
  $('#equal').on('click', equal);
  $('#subtract').on('click', subtract);
  $('#multiply').on('click', multiply);
  $('#divide').on('click', divide);
  $('.num').on('click', updateDisplay);
  $('mem-plus').on('click', memAdd);
  $('mem-minus').on('click', memSub);
  $('mem-recall').on('click', memDisplay);
  $('mem-clear').on('click', memClear);



  function updateDisplay(){
    var numVal = $(this).text();
    if (display.text() === '0'){
      display.text(numVal);
    }else if (display.text().length < 8) {
      display.text(display.text() + numVal);
    }else{
      display.text(display.text());
    }

  }


  function divide(){
    var displayText = display.text();
    var num = parseFloat(displayText);
    calculator.add(num);
    display.text(0);
    lastOperation = '/';
  }


  function multiply(){
    var displayText = display.text();
    var num = parseFloat(displayText);
    calculator.add(num);
    display.text();
    lastOperation = '*';
  }


  function subtract(){
    var displayText = display.text();
    var num = parseFloat(displayText);
    calculator.add(num);
    display.text(0);
    lastOperation = '-';
  }

  function equal(){
    var displayText = display.text();
    var num = parseFloat(displayText);

    if(lastOperation === '+'){
      calculator.add(num);
  }
    if(lastOperation === '-'){
      calculator.subtract(num);
  }
    if(lastOperation === '*'){
      calculator.multiply(num);
  }
    if(lastOperation === '/'){
      calculator.divide(num);
  }
    var result = calculator.result();
    display.text(result);
    calculator.reset();
  }


  function plus(){
    var displayText = display.text();
    var num = parseFloat(displayText);
    calculator.add(num);
    display.text(0);
    lastOperation = '+';
  }

  function clear(){
    var displayText = display.text();
    var num = parseFloat(displayText);
    calculator.reset();
    display.text(0);
  }

  function memAdd(){
    $('#mem-plus').on('click', mem-plus);
    return
  }

  function memSub(){
    $('#mem-minus').on('click', mem-minus);
    return
  }

  function memClear(){
    $('#mem-clear').on('#mem-clear');
    return
  }

  function memDisplay(){
    $('#mem-recall').on('click', mem-recall);
    return
  }



});
