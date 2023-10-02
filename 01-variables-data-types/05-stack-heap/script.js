// Values stored on stack
const name='john'
const age=40

//values stored in heap
const person={
    name:"Bradley",
    age:41
}

let newName=name
newName="Jonathan"

let newPerson=person;
newPerson.name="may"


console.log(newPerson);