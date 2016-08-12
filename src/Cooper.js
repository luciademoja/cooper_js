function CooperTest(){
};

CooperTest.prototype.testResults = function (obj) {
  var gender = obj.gender;
  var age = obj.age;
  var distance = obj.distance;

  if(obj.gender === 'male'){
    maleResults(obj);
  }else {
    femaleResults(obj);
  }
};

Number.prototype.between = function(a, b) {
  var min = Math.min.apply(Math, [a, b]),
    max = Math.max.apply(Math, [a, b]);
  return this >= min && this <= max;
};

function maleResults (obj) {
  var ranges = getRanges(obj);
  var distance = obj.distance;
  var mDistances = {
    one: distance >= 2700,
    two: distance.between(2400, 2699),
    three: distance.between(2200, 2399),
    four: distance.between(2100, 2199),
    five: distance <= 2100
  };

  if(ranges.one) {
    if(mDistances.one) {
      obj.message = "Very Good";
    }
  }
  if(ranges.two && mDistances.one) {
    obj.message = "Good";
  }
  if(ranges.three && mDistances.two) {
    obj.message = "Average";
  }
}

function getRanges(obj) {
  return {
    one: obj.age >= 13 && obj.age <= 14,
    two: obj.age >= 15 && obj.age <= 16,
    three: obj.age >= 17 && obj.age <= 20,
    four: obj.age >= 21 && obj.age <= 29,
    five: obj.age >= 30 && obj.age <= 39,
    six: obj.age >= 40 && obj.age <= 49,
    seven: obj.age >= 50
  };
}
