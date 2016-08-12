describe("Person", function() {
  var person;
  beforeEach(function() {
  person = new Person({gender: 'male', age: 14, distance: 2800});
  });

  describe("Person Characteristics", function() {
      it("Gender is defined and equals male", function() {
        expect(person.gender).toBe('male');
      });

      it("Age is defined and equals 14", function() {
        expect(person.age).toBe(14);
      });

      it("Distance is defined and set to 2800", function() {
        expect(person.distance).toBe(2800);
      });
  });
});

describe("Cooper Test: Male", function() {
  score = new CooperTest();

  it("Access the male score table when gender equals male", function() {
    score.testResults(person);
    expect(person.message).toBeDefined();
  });

  describe("Age range 13-14", function() {
    person = new Person({gender: 'male', age: 13, distance: 2800});

    it("Assess Very Good result when running 2800m or more", function() {
      score.testResults(person);
      expect(person.message).toBe('Very Good');
    });
  });

  describe("Age range 15-16", function() {
    person = new Person({gender: 'male', age: 15, distance: 2700});

    it("Assess Good result when running 2700m", function() {
      score.testResults(person);
      expect(person.message).toBe('Good');
    });

  });
});
