/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 'this' is the value of the window or console when used in the global scope.

* 2. when a function is called after a dot, 'this' refers to the item left of the dot.

* 3. 'this' refers to the specific part of the object that is being created with a constructor function

* 4. this is explicitly defined when using the call or apply method
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function dog(breed) {
    console.log(this);
    return breed;
};
dog('dalmatian');

// Principle 2

// code example for Implicit Binding
const myDog = {
    name: 'Blitz',
    breed: 'small munsterlander',
    sound: 'woof',
    woof: function(name){
        console.log(`${name} says ${this.sound}`)
    }
}
myDog.woof('Blitz');

// Principle 3

// code example for New Binding

function TravelDestination(destination){
    this.start = 'Ticket to';
    this.destination = destination;
    this.ticketFor = function(){
        console.log(`${this.start} ${this.destination}!`)
    }
}
const japan = new TravelDestination("Japan")
const hawaii = new TravelDestination("Hawaii")
japan.ticketFor();
hawaii.ticketFor();
// Principle 4

// code example for Explicit Binding

function whatDoTheyWant(){
    console.log(`${this.name} wants ${this.thing}`);
}

const friend = {
    name: 'Ben',
    thing: 'ice cream',
}
whatDoTheyWant.call(friend);