/* ---------------------------------------------------------------------------
    Exercise One

    Creating a plant

    In order to keep track of your plants, you need to store them in your program.
    Complete the createPlant() function, which returns an object representing a plant.
    It should include all of the properties listed in the comment above the function.
*/
/**
 * createPlant - Produces an object respresenting a plant.  It should have the following properties:
 * @param {string} type - The Type of plant.  Possible values are [ "rose", "orchid", "lily", "lavender", "poppy", "begonia", "snapdragon", "marigold"]
 * @param {boolean} isPerennial - A boolean showing if the plant is a perennial or not
 * @param {string} leafDescription - A visual description of the leaves
 * @param {string} leafColor - A string representing the leaf color
 * @param {string} flowerColor - A string representing the color of the flower
 * @param {string} flowerDescription - A visual description of the flower
 * @param {number} gallonsWaterPerWeek - 0.0 to 3.0, representing the number of gallons of water needed per week for the plant
 * @param {number} amountOfSunNeeded - 0 to 10, representing the amount of sun needed
 */
class Plant {
  constructor(
    type,
    isPerennial,
    leafDescription,
    leafColor,
    flowerColor,
    flowerDescription,
    gallonsWaterPerWeek,
    amountOfSunNeeded
  ) {
    this.type = type;
    this.isPerennial = isPerennial;
    this.leafDescription = leafDescription;
    this.leafColor = leafColor;
    this.flowerColor = flowerColor;
    this.flowerDescription = flowerDescription;
    this.gallonsWaterPerWeek = gallonsWaterPerWeek;
    this.amountOfSunNeeded = amountOfSunNeeded;
  }
  describe() {
    let description = `A ${this.type} has a leaf ${this.leafDescription}. Its flower is ${this.flowerColor}`;

    // Create a plant object, populate it with all of the values from the arguments, and return it.
    // Hint: You can name every key in your object the same as the variable from the argument to this function.
    return description;
  }
  clone() {
    return new plant(
      this.type,
      this.isPerennial,
      this.leafDescription,
      this.leafColor,
      this.flowerColor,
      this.flowerDescription,
      this.gallonsWaterPerWeek,
      this.amountOfSunNeeded
    );
  }
}
class Garden {
  constructor(listOfPlants, name) {
    this.listOfPlants = listOfPlants;
    this.name = name;
  }
  describe() {
    let description = `The ${this.name} has ${this.listOfPlants.length} types of plants in it. It contains: `;
    for (let plant of this.listOfPlants) {
      description += plant.describe();
    }
    return description;
  }
}
// arrays represent the gardens construct gardens by passing in names of plants
//.listofplants added because they are a class and need it to access array
class Estate {
  constructor() {
    this.roseArbor = new Garden("Rose Arbor", []);
    this.perennialGarden = new Garden("PerennialGarden", []);
    this.slopePlanters = new Garden("Slope Planters", []);
  }
  addPlant(plant) {
    if (plant.type === "rose") {
      this.roseArbor.listOfPlants.push(plant);
    } else if (plant.isPerennial && plant.amountOfSunNeeded < 5) {
      this.perennialGarden.listOfPlants.push(plant);
    } else {
      this.slopePlanters.listOfPlants.push(plant);
    }
  }
  describeEstate() {
    let description = "The estate has 3 gardens they are: ";
    for (let gardenKey in this) {
      let garden = this[gardenKey];
      description += garden.describe();
      return description;
    }
  }
  //math.floor rounds the numbers
  calculateWaterUsagePerWeek() {
    let numGallons = 0;

    for (let gardenKey in this) {
      let garden = this[gardenKey];
      for (let plant of garden.listOfPlants) {
        numGallons += plant.gallonsWaterPerWeek;
      }
    }
    return Math.floor(numGallons);
  }
  cloneAllTheRoses() {
    let clonedRoses = [];
    for (let rose of this.roseArbor.listOfPlants) {
      let clonedRose = rose.clone();
      clonedRoses.push(clonedRose);
    }
    this.roseArbor.listOfPlants = this.roseArbor.listOfPlants.concat(
      clonedRoses
    );
  }
}
// TEST CODE!!!!!!

let myEstate = new Estate();

let firstPlant = new Plant(
  "rose",
  true,
  "rounded with a point",
  "green",
  "red",
  "concentric circles of pedals",
  0.8,
  4
);
myEstate.addPlant(firstPlant);

let secondPlant = new Plant(
  "orchid",
  true,
  "long and wide with a point at the end",
  "green",
  "fuscia",
  "pedals surrounding a central mouth",
  1.2,
  2
);
myEstate.addPlant(secondPlant);

let thirdPlant = new Plant(
  "marigold",
  false,
  "thin and jagged along branches",
  "green",
  "yellow and orange",
  "rounded pedals in groups of five with a darker orange center",
  0.8,
  4
);
myEstate.addPlant(thirdPlant);

myEstate.describe(); // This should print the whole description of the estate.

myEstate.calculateWaterUsagePerWeek(); // This should print 2.8

myEstate.cloneAllTheRoses(); // This should clone the rose and make a second one.
console.log(myEstate.roseArbor.plants.length == 2);
