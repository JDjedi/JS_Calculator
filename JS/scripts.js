"use strict";

var inputArray = [];
var displayInput = [];

function userSelect1() {
	var input = document.getElementById('1').innerHTML;
	userInput(input);
}

function userSelect2() {
	var input = document.getElementById('2').innerHTML;
	userInput(input);
}

function userSelect3() {
	var input = document.getElementById('3').innerHTML;
	userInput(input);
}

function userSelect4() {
	var input = document.getElementById('4').innerHTML;
	userInput(input);
}

function userSelect5() {
	var input = document.getElementById('5').innerHTML;
	userInput(input);
}

function userSelect6() {
	var input = document.getElementById('6').innerHTML;
	userInput(input);
}

function userSelect7() {
	var input = document.getElementById('7').innerHTML;
	userInput(input);
}

function userSelect8() {
	var input = document.getElementById('8').innerHTML;
	userInput(input);
}

function userSelect9() {
	var input = document.getElementById('9').innerHTML;
	userInput(input);
}

function userSelect0() {
	var input = document.getElementById('0').innerHTML;
	userInput(input);
}

function userSelectMultiply() {
	var input = document.getElementById('*').innerHTML;
	userInput(input);
}

function userSelectSubtract() {
	var input = document.getElementById('-').innerHTML;
	userInput(input);
}

function userSelectAdd() {
	var input = document.getElementById('+').innerHTML;
	userInput(input);
}

function userSelectDivide() {
	var input = document.getElementById('/').innerHTML;
	userInput(input);
}

function userSelectClear() {
	inputArray = [];
	displayInput = [];
	document.getElementById('screen-output').innerHTML = displayInput;
}

function userInput(input) {
	inputArray.push(input);
	displayInput.push(input);
	document.getElementById('screen-output').innerHTML = displayInput.join('');
}

function userSelectEqual() {
	var operators = /[+-/*]/

	if(inputArray.length > 0) {
		for(var index in inputArray){
			if(inputArray[index].match(operators)){
				arithmaticMaker(inputArray);
				return operators
			} else {
				inputArray = inputArray;
			}
		}
	} else {
		inputArray = [];
	}
}

function arithmaticMaker (arg) {
	arg = arg.join('');

	if(arg.match(/[+-/*]{2,}/)) {
		arg = [];
		var errorMessage = "Error";
		document.getElementById('screen-output').innerHTML = errorMessage;
	} else {
		if(arg.match(/[+]/)) {
			arg = arg.split('+');
			add(arg[0], arg[1]);
		} else if(arg.match(/[-]/)){
			arg = arg.split('-');
			subtract(arg[0], arg[1]);
		} else if(arg.match(/[/]/)){
			arg = arg.split('/');
			divide(arg[0], arg[1]); 
		} else if(arg.match(/[*]/)){
			arg = arg.split('*');
			multiply(arg[0], arg[1]);
		} else {
			console.log("Error");
		}
	}
}

function add(arg, arg1) {
  var answer = Number(arg) + Number(arg1);
  document.getElementById('screen-output').innerHTML = answer;
}

function subtract(arg, arg1) {
  var answer = Number(arg) - Number(arg1);
  document.getElementById('screen-output').innerHTML = answer;
}

function multiply(arg, arg1) {
  var answer = Number(arg) * Number(arg1);
  document.getElementById('screen-output').innerHTML = answer;
}

function divide(arg, arg1) {
  var answer = Number(arg) / Number(arg1);
  document.getElementById('screen-output').innerHTML = answer;
}














