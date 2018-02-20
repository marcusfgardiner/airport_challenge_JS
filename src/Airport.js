var Airport = function() {
  this.hangar = [];
};

Airport.prototype.land = function (plane) {
  return this.hangar.push(plane);
};

Airport.prototype.takeOff = function (plane, weather) {
  if (weather.isStormy()) {
    throw 'The weather is crazy';
  } else {
    return this.hangar.pop();
  }
};
