'use strict'

var chai = require('chai');
var expect = chai.expect;

var lib = require('../app/library3.js');









describe("Fizz Buzz tests ", function() {

  it("should return `Fizz` for number divisible by 3", function() {
    expect(lib.fizzBuzz(3)).to.be.equal('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(lib.fizzBuzz(5)).to.be.equal('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(lib.fizzBuzz(15)).to.be.equal('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(lib.fizzBuzz(45)).to.be.equal('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(lib.fizzBuzz(90)).to.be.equal('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(lib.fizzBuzz(63)).to.be.equal('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(lib.fizzBuzz(7)).to.be.equal(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(lib.fizzBuzz(101)).to.be.equal(101);
  });
});