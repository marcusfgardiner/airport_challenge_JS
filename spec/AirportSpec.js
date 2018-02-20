describe('Airport', function() {
  var airport;
  var plane;
  beforeEach(function() {
    airport = new Airport();
    plane = {};
  });
  describe('Airport.land', function() {
    it('can land a plane', function() {
      airport.land(plane);
      expect(airport.hangar).toContain(plane);
    });
  });
  describe('Airport.takeOff', function() {
    it('can take off a plane', function(){
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.hangar).not.toContain(plane);
    });
  });
});
