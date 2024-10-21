class Cat {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    speak() {
        return `${this.name} says meow!`;
    }
}

class Dog {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    speak() {
        return `${this.name} says woof!`;
    }
}

class Bird {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    speak() {
        if (this.sex === 'male') {
            return `It's me! ${this.name}, the parrot!`;
        } else {
            return `${this.name} says squawk!`;
        }
    }
}

// Example usage:
const cat = new Cat('Whiskers', 'male');
console.log(cat.speak()); // Whiskers says meow!

const dog = new Dog('Rex', 'male');
console.log(dog.speak()); // Rex says woof!

const bird1 = new Bird('Tweety', 'female');
console.log(bird1.speak()); // Tweety says squawk!

const bird2 = new Bird('Polly', 'male');
console.log(bird2.speak()); // It's me! Polly, the parrot!
