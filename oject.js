let person = {
  name: "Antonia Francesca",
  age: 30,
  profession: "Software Engineer",
  hobbies: ["reading", "playing guitar", "hiking"],
  address: {
    street: "123 Camino Real",
    city: "Santa Rosa",
    country: "Honduras"
  },
  isEmployed: true,
  greet: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

console.log(person["hobbies"][1]) // Bracket Notation
console.log(person.address.street) // Dot Notation


let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];
let namesB = names.filter(name => name.charAt(0) === 'B');
console.log(namesB)