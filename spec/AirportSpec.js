describe('Airport', function() {
  var airport;
  var plane;
  beforeEach(function() {
    airport = new Airport();
    plane = {};
  });
  describe('an instance of airport', function() {
    it('can land a plane', function() {
      airport.landPlane(plane);
      expect(airport.hangar).toContain(plane);
    });
  });
});
