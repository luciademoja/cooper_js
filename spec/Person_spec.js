describe("Person", function() {
  var person;

describe("Person Characteristics", function() {
    beforeEach(function() {
      person = new Person({gender: 'male', age: 14});
    });

    it("should be a male", function() {
      expect(person.gender).toEqual('male');
    });

    it("should be 14 years old", function() {
      expect(person.age).toEqual(14);
    })
});
});
