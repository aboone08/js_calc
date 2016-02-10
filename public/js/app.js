$(document).ready(function(){
  var calculator = $('#calculator');
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
    var thing = $(this).text();
    display.append(thing);
    console.log(thing);
  }


  function divide(){
    var divide = $('#divide').text();
    display.append(divide);
    console.log(divide);
  }


  function multiply(multiply){
    $('#multiply').on('click', multiply);
    return number * number;
  }


  function subtract(subtract){
    $('#subtract').on('click', subtract);
    return number - number;
  }

  function equal(equal){
    $('#equal').on('click', equal);
    return
  }

  function plus(plus){
    $('#plus').on('click', plus);
    return number + number;
  }

  function clear(C){
    $('#clear').on('click', clear);
    return
  }

  function memAdd(memPlus){
    $('#mem-plus').on('click', mem-plus);
    return
  }

  function memSub(memMinus){
    $('#mem-minus').on('click', mem-minus);
    return
  }

  function memClear(memClear){
    $('#mem-clear').on('#mem-clear');
    return
  }

  function memDisplay(memDisplay){
    $('#mem-recall').on('click', mem-recall);
    return
  }



});
