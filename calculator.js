"use strict";
let displayValue = document.getElementById('displayValue');
let operations = document.querySelectorAll('#operators div');
let number = document.querySelectorAll('#num');
let clear = document.querySelectorAll('#clear');
let equal = document.querySelectorAll('.equal');
let dot = document.querySelectorAll('#dot');

let valueStrInMemory = null;
let operatorInMemory = null;
let newNumChecker = false;
let newValueNum = 0;
//let lastnum = 1;

function numberOnClick() {
	let currentDisplay = displayValue.innerHTML
  //console.log(newNumChecker);
	if(currentDisplay === '0'){
  	//console.log("zero");
  	displayValue.innerHTML = this.innerHTML;
  } else if( operatorInMemory != null & newNumChecker === false){ 
  	newNumChecker = true;
  	//console.log(operatorInMemory);
  	displayValue.innerHTML = this.innerHTML;
  } else{
  	//console.log("non zero or newnumchecker true");
  	displayValue.innerHTML += this.innerHTML;
  };
}

function operationOnClick() {
	let currentValueNum = parseFloat(displayValue.innerHTML);
  newNumChecker = false;
  operatorInMemory = this.innerHTML;

  //console.log('valuestrinmemory:' + valueStrInMemory);
	switch(this.innerHTML){
  
  case '+':
  	console.log(newValueNum);
		newValueNum =+ urrentValueNum;
    console.log(newValueNum);
    valueStrInMemory = currentValueNum;
    displayValue.innerHTML = newValueNum;
    break;
  
  case '-':
  	newValueNum -= currentValueNum;
    valueStrInMemory = currentValueNum;
    displayValue.innerHTML = newValueNum;
  	break;
  
  case 'x':
  	valueStrInMemory = currentValueNum * valueStrInMemory;
  	break;
  
  case '/':
  	newValueNum = currentValueNum / valueStrInMemory;
  	break; 
  };
}

function equalOnClick() {
	newNumChecker = false;
  if(valueStrInMemory){
  
  }
  displayValue.innerHTML += this.innerHTML;
}


function clearOnClick() {
  displayValue.innerHTML = '0';
  valueStrInMemory = null;
	operatorInMemory = null;
	newNumChecker = false;
  //lastnum = 1;
  
}

function dotOnClick() {
  let currentDisplay = displayValue.innerHTML
	if(currentDisplay.includes('.')){} else{
  	displayValue.innerHTML += this.innerHTML;}
}


document.addEventListener('DOMContentLoaded', function() {

  let num_btn = number;
  let operation_btn = operations;
  let equal_btn = equal;
  let clear_btn = clear;
  let dot_btn = dot;
  
  for (let i = 0; i < clear_btn.length; i++) {
    clear_btn[i].addEventListener('click', clearOnClick);
  };
  
  for (let i = 0; i < num_btn.length; i++) {
    num_btn[i].addEventListener('click', numberOnClick);
  };
  
  for (let i = 0; i < operation_btn.length; i++) {
    operation_btn[i].addEventListener('click', operationOnClick);
  };
  
  for (let i = 0; i < equal_btn.length; i++) {
    equal_btn[i].addEventListener('click', equalOnClick);
  };
  
  for (let i = 0; i < dot_btn.length; i++) {
    dot_btn[i].addEventListener('click', dotOnClick);
  };
})