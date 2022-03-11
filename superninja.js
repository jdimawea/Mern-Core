class Ninja {
    constructor(name){
        this.name = name
        this.health = 100
        this.speed = 3
        this.strength = 3
    }
    sayName(){
        console.log(this.name)
        return this
    }
    showStats(){
        console.log(`Name is ${this.name}` )
        console.log(`Health is ${this.health}`)
        console.log(`Speed is ${this.speed}`) 
        console.log(`Strength is ${this.strength}`) 
        return this
    }
    drinkSake(){
        this.health += 10;
        console.log(`Health is ${this.health}`)
        return this
    }
}

const ninja1 = new Ninja("Itachi");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

console.log(' ')

class Sensei extends Ninja{
    constructor(name){
        super(name)
        this.health = 210
        this.speed = 10
        this.strength = 10
        this.wisdom = 10
    }
    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"