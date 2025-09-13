
// add fetchStick after the declaration of two or more objects
// const sanju ={
//     name: "Sanjana Singhania",
//     gender: "F",
//     age: 1,
//     vaccinated: false,
//     owner: "Unknown",
//     breed: "Ballabgarhi",


//     bark(){
//         console.log(this.name, "says bhaw bhaw!!!");
//     }

// } 


// const krish ={
//     name: "Krish singh",
//     gender: "M",
//     age: 12,
//     vaccinated: false,
//     owner: "Dagar",
//     breed: "Ballabgarhi",

//     bark(){
//         console.log(this.name, "says bhaw bhaw!!!");
//     }

// } 


// const rampal ={
//     name: "rampal",
//     gender: "M",
//     age: 13,
//     vaccinated: true,
//     owner: "Unknown",
//     breed: "Unknown",

//     bark(){
//         console.log(this.name, "says bhaw bhaw!!!");
//     }

// } 


// console.log(sanju.gender)
// sanju.bark();


// class Dog{
//     constructor(name, age, gender, vaccinated, owner, breed){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.vaccinated = vaccinated;
//         this.owner = owner;
//         this.breed = breed;
//     }

//     bark(){
//         console.log(this.name, "says bhaw bhaw!");
//     }

//     fetchStick(){
//         console.log(this.name, `is on ${this.gender=="F"? "her": "his"} way to fetch the thrown stick!`);
//     }
// }

// const sanju = new Dog("Sanjana Singhania", 12, "F", false, "Unknown", "Ballabgarhi");

// const krish = new Dog("Krish", 13, "M", true, "Sanju", "Ballabgarhi");

// console.log(sanju.gender, krish.gender)
// sanju.bark();
// krish.bark();

// sanju.fetchStick();
// krish.fetchStick();

class Animal{
    constructor(hasOwner){
        this.hasOwner = hasOwner;
        this.canBreathe = true;
        this.isLiving = true;
    }
}

class Dog extends Animal{
    constructor(name, owner, hasOwner){
        super(hasOwner);
        this.name = name;
        this.owner = owner;
    }
}

const rampal = new Dog("Rampal", "Dharmpal", true);
console.log(rampal.owner);
console.log(rampal.isLiving);
console.log(rampal.hasOwner);