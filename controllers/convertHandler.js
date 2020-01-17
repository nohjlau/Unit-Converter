/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result = input.match(/^[\d\/\.]*/)[0];
    
    if(result == 0) { result = 1 };
    return eval(result);
  };
  
  this.getUnit = function(input) {
    var result = input.match(/[a-z]+/i)[0];
    result = result.toLowerCase();
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch(initUnit) {
      case "gal":
        result = "l";
        break;
      case "l":
        result = "gal";
        break;
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      default:
        result = "error";
        break;
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch (unit) {
      case "gal":
        result = "gallons";
        break;
      case "l":
        result = "liters";
        break;
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometers";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
      default:
        result = "error";
        break;
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    switch(initUnit) {
      
      case "gal":
        result = initNum*galToL;
        break;
      case "l":
        result = initNum/galToL;
        break;
      case "lbs":
        result = initNum*lbsToKg;
        break;
      case "kg":
        result = initNum/lbsToKg;
        break;
      case "mi":
        result = initNum*miToKm;
        break;
      case "km":
        result = initNum/miToKm;
        break;
      default:
        result = "error";
        break;
    }
    return roundNumber(result);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    var validNum = true, validUnit = true;
    if( initNum == NaN || returnNum == NaN) {
      validNum = false;
    }
    if( initUnit == "error" || returnUnit == "error" ) {
      validUnit = false;
    }
    
    if( validNum == false && validUnit == false) {
      result = "invalid number and unit";
    } else if (validNum == false) {
      result = "invalid number";
    } else if (validUnit == false) {
      result = "invalid unit";
    } else {
        result = initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum + " " + this.spellOutUnit(returnUnit);
    }
    
    return result;
  };
  
}

module.exports = ConvertHandler;

function roundNumber(num) {
  return Math.round(num * 100000)/100000;
}