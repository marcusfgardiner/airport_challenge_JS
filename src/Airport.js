var Airport = function() {
  this.hangar = []
};

Airport.prototype.landPlane = function (plane) {
  return this.hangar.push(plane);
};
