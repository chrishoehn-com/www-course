class Person {
	constructor(fullName, favColor) {
		this.name = fullName;
		this.favoriteColor = favColor;
	};
	
	greet() {
		console.log("Hi there " + this.name + " and my fav Color is " + this.favoriteColor + ".");
	}
}

module.exports = Person;

