/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      var input ='3.3G';
      assert.equal(convertHandler.getNum(input),3.3);
      done();
    });
    
    test('Fractional Input', function(done) {
      var input = '1/2Mi';
      assert.equal(convertHandler.getNum(input),.5);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      var input = '1/25mi';
      assert.equal(convertHandler.getNum(input),.04);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      var input = '1/2/2mi';
      assert.equal(convertHandler.getNum(input),NaN);
      done();
    });
    
    test('No Numerical Input', function(done) {
      var input ='mi';
      assert.equal(convertHandler.getNum(input),1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        //assert
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      var input = "asdf";
      assert.equal(convertHandler.getReturnUnit(input),null);
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gallons','liters','kilograms','pounds','miles','kilometers'];
      var expect = ['liters', 'gallons', 'pounds', 'kilograms', 'miles', 'kilometers'];
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      var input =[2, 'l'];
      var expected = 0.52834;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
    });
    
    test('Mi to Km', function(done) {
      var input =[2, 'mi'];
      var expected = 3.21868;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
    });
    
    test('Km to Mi', function(done) {
      var input =[2, 'km'];
      var expected = 1.24275;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
    });
    
    test('Lbs to Kg', function(done) {
      var input =[2, 'lbs'];
      var expected = 0.90718;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
    });
    
    test('Kg to Lbs', function(done) {
      var input =[1, 'kg'];
      var expected = 2.20462;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
    });
    
  });

});