function Phone(brand, price, color) {
  this.brand = brand;
  this.price = price;
  this.color = color;
}
Phone.prototype.printInfo = function() {
  console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}
var phone1 = new Phone('Samsung Galaxy S6', 3000, 'blue');
var phone2 = new Phone('IPhone 6s', 4000, 'green');
var phone3 = new Phone('OnePlus One', 5000, 'red');
phone1.printInfo();
phone2.printInfo();
phone3.printInfo();