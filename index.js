function Phone(brand, price, color, country) {
  this.brand = brand;
  this.price = price;
  this.color = color;
  this.country = country;
}

Phone.prototype.printInfo = function() {
  console.log("The phone brand is " + this.brand +  ", color is " + this.color + " , the price is " + this.price + " and made in " + this.country + ".");
}
Phone.prototype.countryMade = function() {
  console.log("Made in " + this.country + ".");
}
var phone1 = new Phone('Samsung Galaxy S6', 3000, 'blue', 'Japan');
var phone2 = new Phone('IPhone 6s', 4000, 'green', 'China');
var phone3 = new Phone('OnePlus One', 5000, 'red', 'Senegal');
phone1.printInfo();
phone2.printInfo();
phone3.printInfo();
phone1.countryMade();
phone2.countryMade();
phone3.countryMade();