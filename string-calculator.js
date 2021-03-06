var expect = require('chai').expect;

//Normal mode: addition for "zero" to "nine"
//BEAST mode: addition, subtraction, multiplication, and division
//NIGHTMARE mode: five lines or less?
function toNumber(word){
  if ( word === "zero" ){
    return 0;
  }
  if( word === "one" ){
    return 1;
  }
  if( word === "two" ){
    return 2;
  }
  if( word === "three" ){
    return 3;
  }
  if( word === "four" ){
    return 4;
  }
  if( word === "five" ){
    return 5;
  }
  if( word === "six" ){
    return 6;
  }
  if( word === "seven" ){
    return 7;
  }
  if( word === "eight" ){
    return 8;
  }
  if( word === "nine" ){
    return 9;
  }
}
//@param {string} English number word, e.g. "one"
//@retun {Number} the numeric value of "word"
/*
function toNumber(word)
var numbers = ["zero", "one", "two",]
*/

function plus(a, b){
  var a = toNumber(a);
  var b = toNumber(b);
  return a + b;
}

function plus (a, b){
  if (toNumber(0) + toNumber(0)){
    return 0;
  }
  else{
    return a + b;
  }
}

function subtract(c, d){
  var c = toNumber(c);
  var d = toNumber(d);
  return c - d;
}

function multiply(e, f){
  var e = toNumber(e);
  var f = toNumber(f);
  return e * f;
}

function divide(g, h){
//  var g = toNumber(g);
//  var h = toNumber(h);
  if (toNumber(h) === 0 && toNumber(g) === 0){
    return NaN;
  }
  else if (toNumber(h) === 0){
    return Infinity;
  }
  else{
   return toNumber(g) / toNumber(h);
  }
}

//@param {string} a
//@param {string} b
//return {string} Infinity or 0
/*
function divide(a, b){
  if (b === "zero"){
    return Infinity;
  }
  else{
    return (a / b)
  }
}
*/
/*
var numbers = [ "zero", "one", "two" ];
var item, index = 0;
while ( index < numbers.length ){
  item = numbers[index];
  //do something
  index = index + 1;
}
for (var index = 1; index < numbers.length; index = index + 1){
  //do something
}
for (var iteration = 0; iteration < 4; iteration = iteration + 1;{
  //do something
}
for (var iteration = 0; iteration < 4; iteration++){
  //do someting
}
numbers.forEach(function(item, index, all)){
}
*/

expect(toNumber).to.exist;
expect(toNumber("zero")).to.equal(0);
expect(toNumber("one")).to.equal(1);
expect(toNumber("two")).to.equal(2);
expect(toNumber("three")).to.equal(3);
expect(toNumber("four")).to.equal(4);
expect(toNumber("five")).to.equal(5);
expect(toNumber("six")).to.equal(6);
expect(toNumber("seven")).to.equal(7);
expect(toNumber("eight")).to.equal(8);
expect(toNumber("nine")).to.equal(9);

expect(plus).to.exist;
expect(plus("zero", "zero")).to.equal(0);
expect(plus("zero", "one")).to.equal(1);
expect(plus("zero", "two")).to.equal(2);
expect(plus("zero", "three")).to.equal(3);
expect(plus("zero", "four")).to.equal(4);
expect(plus("zero", "five")).to.equal(5);
expect(plus("zero", "six")).to.equal(6);
expect(plus("zero", "seven")).to.equal(7);
expect(plus("zero", "eight")).to.equal(8);
expect(plus("zero", "nine")).to.equal(9);

expect(plus("one", "zero")).to.equal(1);
expect(plus("one", "one")).to.equal(2);
expect(plus("one", "two")).to.equal(3);
expect(plus("one", "three")).to.equal(4);
expect(plus("one", "four")).to.equal(5);
expect(plus("one", "five")).to.equal(6);
expect(plus("one", "six")).to.equal(7);
expect(plus("one", "seven")).to.equal(8);
expect(plus("one", "eight")).to.equal(9);
expect(plus("one", "nine")).to.equal(10);

expect(plus("two", "zero")).to.equal(2);
expect(plus("two", "one")).to.equal(3);
expect(plus("two", "two")).to.equal(4);


expect(subtract).to.exist;
expect(subtract("zero", "zero")).to.equal(0);
expect(subtract("zero", "one")).to.equal(-1);
expect(subtract("zero", "two")).to.equal(-2);

expect(multiply).to.exist;
expect(multiply("zero", "zero")).to.equal(0);
expect(multiply("zero", "one")).to.equal(0);

expect(multiply("one", "one")).to.equal(1);
expect(multiply("one", "two")).to.equal(2);

expect(multiply("two", "one")).to.equal(2);
expect(multiply("two", "two")).to.equal(4);

expect(divide).to.exist;
expect(divide("zero", "zero")).to.equal(NaN);
//NaN === NaN is Boolean false
expect(divide("one", "zero")).to.equal(Infinity);

expect(divide("two", "one")).to.equal(2);
