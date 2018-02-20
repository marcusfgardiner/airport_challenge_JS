describe('Airport', function() {
  var airport;
  var plane;
  var weather;
  beforeEach(function() {
    airport = new Airport();
    weather =  new Weather();
    plane = {};
  });
  describe('.land', function() {
    it('can land a plane into the hangar', function() {
      spyOn(weather, 'isStormy').and.returnValue(false);
      airport.land(plane, weather);
      expect(airport.hangar).toContain(plane);
    });
    it("won't land a plane when stormy", function() {
      spyOn(weather, 'isStormy').and.returnValue(true);
      expect( function() {airport.land(plane, weather);}).toThrow('The weather is crazy');
    });
  });
  describe('.takeOff', function() {
    it('can take off a plane removes it from the hangar', function() {
      // spyOn(Math, 'random').and.returnValue(0.1);
      spyOn(weather, 'isStormy').and.returnValue(false);
      airport.land(plane, weather);
      airport.takeOff(plane, weather);
      expect(airport.hangar).not.toContain(plane);
    });
    it("won't take off when stormy", function() {
      // TODO: hacking the spyOn so that it can be used twice...
      spyOn(Math, 'random').and.returnValue(0.1);
      airport.land(plane, weather);
      // spyOn(Math, 'random').and.returnValue(0.8);
      spyOn(weather, 'isStormy').and.returnValue(true);
      expect( function(){ airport.takeOff(plane, weather); } ).toThrow('The weather is crazy');
    });
  });

});
