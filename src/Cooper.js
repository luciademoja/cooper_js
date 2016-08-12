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

function maleResults (obj) {
  var ranges = getRanges(obj);

  var mDistanceOne = obj.distance >= 2700;
  // var mDistanceTwo = obj.distance >= 2400 && <= 2699;
  // var mDistanceThree = obj.distance >= 2200 && <= 2399;
  // var mDistanceFour = obj.distance >= 2100 && <= 2199;
  // var mDistanceFive = obj.distance <= 2100;

  if(ranges.one) {
    if(obj.distance >= 2700) {
      obj.message = "Very Good";
    }
  }
  if(ranges.two && mDistanceOne) {
    obj.message = "Good";
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
