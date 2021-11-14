this.myVar = 10;
console.log('This is: ', this);

function myFunction(x) {
    console.log('This is normal function, x is', x, this)
}

//myFunction(5);

function Person(name, age) {
    console.log('In Person function', this);
    this.name = name;
    this.age = age;
}

let john = new Person('John Doe', 55);
console.log(john);

function printName() {
    console.log(this.name);
}

const printNameArrow = () => {
    console.log('Arrow - My name is ', this.name)
}

const trainer = {
    name: 'Aleksandar',
    printName,
    printNameArrow,
    printNameArrowInner: () => {
        console.log("Inner Arrow My name is ", this.name)
    }
}

trainer.printName();
printName();
trainer.printNameArrow();
trainer.printNameArrowInner();

const myObj = {message: 'Hello this!!!'}
myFunction.call(myObj, 10);

const myFunctionBound = myFunction.bind(myObj);
myFunctionBound(15);

class Car {
    constructor(brand, fuelType) {
        this.brand = brand;
        this.fuelType = fuelType;
    }

    printInfo() {
        console.log('Car info', this.brand, this.fuelType)
    }

    carBrand = () => console.log(this.brand);
 }

 const myCar = new Car('Ford' , 'Diesel');
 const yourCar = new Car('Mercedes', 'Diesel');

 myCar.printInfo();
 yourCar.printInfo();
 myCar.carBrand();
 myCar.car = yourCar;
 myCar.car.carBrand();