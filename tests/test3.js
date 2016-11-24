'use strict'

var chai = require('chai');
var expect = require('chai').expect;

var lib = require('../app/library3.js');









describe("Fizz Buzz tests ", function() {

  it("should return `Fizz` for number divisible by 3", function() {
    expect(lib.fizzBuzz(3)).to.be.'Fizz';
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(lib.fizzBuzz(5)).to.be('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(lib.fizzBuzz(15)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(lib.fizzBuzz(45)).to.Be('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(lib.fizzBuzz(90)).toBe('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(lib.fizzBuzz(63)).toBe('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(lib.fizzBuzz(7)).toBe(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(lib.fizzBuzz(101)).toBe(101);
  });
});