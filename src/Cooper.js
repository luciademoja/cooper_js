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
  var rangeOne = obj.age >= 13 && obj.age <= 14;
  var rangeTwo = obj.age >= 15 && obj.age <= 16;
  var rangeThree = obj.age >= 17 && obj.age <= 20;
  var rangeFour = obj.age >= 21 && obj.age <= 29;
  var rangeFive = obj.age >= 30 && obj.age <= 39;
  var rangeSix = obj.age >= 40 && obj.age <= 49;
  var rangeSeven = obj.age >= 50;
  var mDistanceOne = obj.distance >= 2700;
  // var mDistanceTwo = obj.distance >= 2400 && <= 2699;
  // var mDistanceThree = obj.distance >= 2200 && <= 2399;
  // var mDistanceFour = obj.distance >= 2100 && <= 2199;
  // var mDistanceFive = obj.distance <= 2100;

  if(rangeOne) {
    if(obj.distance >= 2700) {
      obj.message = "Very Good";
    }
  }
  if(rangeTwo && mDistanceOne) {
    obj.message = "Good";
  }
}
