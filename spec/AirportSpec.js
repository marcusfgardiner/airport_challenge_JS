describe('Airport', function() {
  var airport;
  beforeEach(function() {
    airport = new Airport();
  });
  describe('an instance of airport', function() {
    it('can land a plane', function() {
      airport.landPlane();
      expect(airport.hangar()).toContain(plane);
    });
  });
});
