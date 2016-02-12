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
  $('#mem-plus').on('click', memAdd);
  $('#mem-minus').on('click', memSub);
  $('#mem-recall').on('click', memDisplay);
  $('#mem-clear').on('click', memClear);



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
    calculator.reset();
    display.text(0);
    lastOperation = 'clear';
  }

  function memAdd(){
    var displayText = display.text();
    var memNew = parseFloat(displayText);
    calculator.addToMemory(memNew);
    display.text(0);
    console.log(calculator.memory);
    lastOperation = '+= num';
  }

  function memSub(){
    var displayText = display.text();
    var memNew = parseFloat(displayText);
    calculator.memory(memNew);
    display.text(0);
    console.log(calculator.memory);
    lastOperation = '-= num';
  }

  function memClear(){
    calculator.memClear();
    display.text(0);
    lastOperation = 'memClear';
  }

  function memDisplay(){
    var mem = calculator.getMemory();
    display.text(mem);
    lastOperation = 'memDisplay';
  }



});
