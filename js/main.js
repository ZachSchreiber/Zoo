Animal.prototype = {
    getAge: function(bob) {
        var today = new Date();
        var getYear = today.getFullYear();
        var age = getYear - bob;
        return age;
    },
    makeAbility: function(steve) {
        switch (steve) {
            case "Lion":
                ability = "Roars";
                break;
            case "Penquin":
                ability = "Waddles";
                break;
            case "Zombeaver":
                ability = "Eats Brains";
                break;
            default:
                ability = "Eats Food";
                break;
        }
        return ability;
    },
    makeOffspring: function(sex, species) {
        var randomNumber = Math.random() >= 0.5;
        if (sex == "male") {
            offspring = "No offspring";
        } else if (sex == "female") {
            if (randomNumber === true) {
                switch (species) {
                    case "Lion":
                        offspring = "1 baby cub";
                        break;
                    case "Penquin":
                        offspring = "1 cute little chick";
                        break;
                    case "Zombeaver":
                        offspring = "1 Zombeaver/Human hybrid";
                        break;
                    default:
                        offspring = "No Offspring";
                }
            } else {
                offspring = "No offspring";
            }

        }
        return offspring;
    },

    toString: function() {
        var makeString = "A " + this.age + " years old " + this.sex + " " + this.species + " with " + this.offspring + ".";
        return makeString;
    },

};

function Animal(species, sex, age, offspring, stringMade) {
    this.info = {
        species: species,
        sex: sex,
        age: Animal.prototype.getAge(age),
        ability: Animal.prototype.makeAbility(species),
        offspring: Animal.prototype.makeOffspring(sex, species),
        stringMade: Animal.prototype.toString(),
    };

}

var Sally = new Animal("Zombeaver", "female", 1950);
var Bill = new Animal("lion", "male", 2006);
var Carlton = new Animal("Penquin", "female", 1975);

console.log(Sally);
console.log(Bill);
console.log(Carlton);
