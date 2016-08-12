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
