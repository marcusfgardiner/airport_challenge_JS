describe('Weather', function() {
  var weather;
  beforeEach(function() {
    weather = new Weather();
  });
  describe('.isStormy', function(){
    it('randomly returns true 1/4 of the time', function(){
      spyOn(Math, 'random').and.returnValue(0.8);
      expect(weather.isStormy()).toBeTruthy();
    });
    it('randomly returns false 3/4 of the time', function(){
      spyOn(Math, 'random').and.returnValue(0.2);
      expect(weather.isStormy()).toBeFalsy();
    });
  });
});
