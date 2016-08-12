describe("Cooper Test: Female", function() {
  var score = new CooperTest();
  var person;

  beforeEach(function() {
    person = new Person({gender: 'female', age: 13, distance: 2700});
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
    it("Assess Good result when running 2500m", function() {
      person.distance = 2500;
      score.testResults(person);
      expect(person.message).toBe('Good');
    });
    it("Assess Average result when running 2350m", function() {
      person.distance = 2350;
      score.testResults(person);
      expect(person.message).toBe('Average');
    });
    it("Assess Bad result when running 2100m", function() {
      person.distance = 2100;
      score.testResults(person);
      expect(person.message).toBe('Bad');
    });
    it("Assess Very Bad result when running less than 2100m", function() {
      person.distance = 2000;
      score.testResults(person);
      expect(person.message).toBe('Very Bad');
    });
  });

  describe("Age range 15-16", function() {
    beforeEach(function() {
      person.age = 15;
    });
    it("Assess Very Good result when running 2800m or more", function() {
      person.distance = 2800;
      score.testResults(person);
      expect(person.message).toBe('Very Good');
    });
    it("Assess Good result when running 2700m", function() {
      score.testResults(person);
      expect(person.message).toBe('Good');
    });
    it("Assess Average result when running 2350m", function() {
      person.distance = 2350;
      score.testResults(person);
      expect(person.message).toBe('Average');
    });
    it("Assess Bad result when running 2200m", function() {
      person.distance = 2200;
      score.testResults(person);
      expect(person.message).toBe('Bad');
    });
    it("Assess Very Bad result when running less than 2200m", function() {
      person.distance = 2000;
      score.testResults(person);
      expect(person.message).toBe('Very Bad');
    });
  });

  describe("Age range 17-20", function() {
    beforeEach(function() {
      person.age = 18;
    });
    it("Assess Very Good result when running 3000m or more", function() {
      person.distance = 3000;
      score.testResults(person);
      expect(person.message).toBe('Very Good');
    });
    it("Assess Good result when running 2700m", function() {
      score.testResults(person);
      expect(person.message).toBe('Good');
    });
    it("Assess Average result when running 2550m", function() {
      person.distance = 2550;
      score.testResults(person);
      expect(person.message).toBe('Average');
    });
    it("Assess Bad result when running 2400m", function() {
      person.distance = 2400;
      score.testResults(person);
      expect(person.message).toBe('Bad');
    });
    it("Assess Very Bad result when running less than 2300m", function() {
      person.distance = 2000;
      score.testResults(person);
      expect(person.message).toBe('Very Bad');
    });
  });

  describe("Age range 21-29", function() {
    beforeEach(function() {
      person.age = 24;
    });
    it("Assess Very Good result when running 2800m or more", function() {
      person.distance = 3000;
      score.testResults(person);
      expect(person.message).toBe('Very Good');
    });
    it("Assess Good result when running 2700m", function() {
      score.testResults(person);
      expect(person.message).toBe('Good');
    });
    it("Assess Average result when running 2300m", function() {
      person.distance = 2300;
      score.testResults(person);
      expect(person.message).toBe('Average');
    });
    it("Assess Bad result when running 2100m", function() {
      person.distance = 2100;
      score.testResults(person);
      expect(person.message).toBe('Bad');
    });
    it("Assess Very Bad result when running less than 1600m", function() {
      person.distance = 1500;
      score.testResults(person);
      expect(person.message).toBe('Very Bad');
    });
  });

  describe("Age range 30-39", function() {
    beforeEach(function() {
      person.age = 34;
    });
    it("Assess Very Good result when running 2700m or more", function() {
      person.distance = 3000;
      score.testResults(person);
      expect(person.message).toBe('Very Good');
    });
    it("Assess Good result when running 2600m", function() {
      person.distance = 2600;
      score.testResults(person);
      expect(person.message).toBe('Good');
    });
    it("Assess Average result when running 2200m", function() {
      person.distance = 2200;
      score.testResults(person);
      expect(person.message).toBe('Average');
    });
    it("Assess Bad result when running 1800m", function() {
      person.distance = 1800;
      score.testResults(person);
      expect(person.message).toBe('Bad');
    });
    it("Assess Very Bad result when running less than 1500m", function() {
      person.distance = 1300;
      score.testResults(person);
      expect(person.message).toBe('Very Bad');
    });
  });

  describe("Age range 40-49", function() {
    beforeEach(function() {
      person.age = 42;
    });
    it("Assess Very Good result when running 2500m or more", function() {
      person.distance = 2600;
      score.testResults(person);
      expect(person.message).toBe('Very Good');
    });
    it("Assess Good result when running 2400m", function() {
      person.distance = 2400;
      score.testResults(person);
      expect(person.message).toBe('Good');
    });
    it("Assess Average result when running 1800m", function() {
      person.distance = 1800;
      score.testResults(person);
      expect(person.message).toBe('Average');
    });
    it("Assess Bad result when running 1500m", function() {
      person.distance = 1500;
      score.testResults(person);
      expect(person.message).toBe('Bad');
    });
    it("Assess Very Bad result when running less than 1400m", function() {
      person.distance = 1300;
      score.testResults(person);
      expect(person.message).toBe('Very Bad');
    });
  });

  describe("Age range over 50", function() {
    beforeEach(function() {
      person.age = 42;
    });
    it("Assess Very Good result when running 2400m or more", function() {
      person.distance = 2500;
      score.testResults(person);
      expect(person.message).toBe('Very Good');
    });
    it("Assess Good result when running 2300m", function() {
      person.distance = 2300;
      score.testResults(person);
      expect(person.message).toBe('Good');
    });
    it("Assess Average result when running 1800m", function() {
      person.distance = 1800;
      score.testResults(person);
      expect(person.message).toBe('Average');
    });
    it("Assess Bad result when running 1500m", function() {
      person.distance = 1500;
      score.testResults(person);
      expect(person.message).toBe('Bad');
    });
    it("Assess Very Bad result when running less than 1300m", function() {
      person.distance = 1200;
      score.testResults(person);
      expect(person.message).toBe('Very Bad');
    });
  });
});
