//WHAT IT IS

function Car(make, model, year, honkSound) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.honkSound = honkSound;
  // this.honk = function(){
  //     console.log(this.honkSound)
  // }
}

var jeep = new Car("Jeep", "Cherokee", 1995, "MEEERRRP");
var mazda = new Car("Mazda", "3 hatchback", 2015, "BLAAARP");

// Prototype ...WHAT IT DOES
Car.prototype.honk = function () {
  console.log(this.honkSound);
};

jeep.honk();
mazda.honk();
