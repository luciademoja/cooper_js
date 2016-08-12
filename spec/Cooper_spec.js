describe("Cooper Test: Male", function() {
  var score = new CooperTest();
  var person;

  beforeEach(function() {
    person = new Person({gender: 'male', age: 13, distance: 2700});
  });

  it("Access the male score table when gender equals male", function() {
    score.testResults(person);
    expect(person.message).toBeDefined();
  });

  describe("Age range 13-14", function() {
    it("Assess Very Good result when running 2700m or more", function() {
      score.testResults(person);
      expect(person.message).toBe('Very Good');
    });
  });

  describe("Age range 15-16", function() {
    it("Assess Good result when running 2700m", function() {
      person.age = 15;
      score.testResults(person);
      expect(person.message).toBe('Good');
    });
  });

  describe("Age range 17-20", function() {
    it("Assess Average result when running 2550m", function(){
      person.age = 18;
      person.distance = 2550;
      score.testResults(person);
      expect(person.message).toBe('Average');
    });
  });

});
