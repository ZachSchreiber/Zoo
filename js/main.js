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
                ability = "Roaring";
                break;
            case "Penquin":
                ability = "Waddling";
                break;
            case "Zombeaver":
                ability = "Eating Brains";
                break;
            default:
                ability = "Eating Food";
                break;
        }
        return ability;
    },
    //If female, randomly picks if she has offspring.
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
                        offspring = "1 Zombeaver/Human hybrid Zombaby";
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

    makeString: function(birthYear, sex, species, ability, offspring) {
        var makeString =   "This " + birthYear + " year old " + sex + " " + species + " enjoys " + ability + ", and has " + offspring + ".";
        return makeString;
    },

};

function Animal(species, sex, birthYear, offspring, stringMade) {
    this.info = {
        species: species,
        sex: sex,
        birthYear: birthYear,
        age: Animal.prototype.getAge(birthYear),
        ability: Animal.prototype.makeAbility(species),
        offspring: Animal.prototype.makeOffspring(sex, species),
        stringMade: Animal.prototype.makeString(Animal.prototype.getAge(birthYear), sex, species, ability, Animal.prototype.makeOffspring(sex, species)),
    };

}

var Sally = new Animal("Zombeaver", "female", 1950);
var Bill = new Animal("Lion", "male", 2006);
var Carlton = new Animal("Penquin", "female", 1975);

console.log(Sally);
console.log(Bill);
console.log(Carlton);
