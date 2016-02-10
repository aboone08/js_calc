$(document).ready(function(){
  var calculator = Object.create(Calculator);
  var $display = $('#display');
  var lastOperation = '';


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
    $('.num').text;
    $display.this;
    console.log(this);
  }

  function divide('divide'){
    return number / number;
  }

  function multiply('multiply'){
    return number * number;
  }

  function subtract('subtract'){
    return number - number;
  }

  function equal('equal'){
    return
  }

  function plus('add'){
    return number + number;
  }

  function clear('C'){
    return
  }

  function memAdd('mem-plus'){
    return
  }

  function memSub('mem-minus'){
    return
  }

  function memClear('mem-clear'){
    return
  }

  function memDisplay(){
    return
  }



});
