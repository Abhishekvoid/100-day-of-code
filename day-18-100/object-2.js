const tinderUser = {}

tinderUser.id = "yokoso234@"
tinderUser.name = "hammy"
tinderUser.isLoggedIn = "true"

const regularUser ={

    email: "somebuddy@134",
    fullname: {
        userfullname:{
            firstname: "hitesh",
            lastname: "yoyo"
        }
    }
}

console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

const obj3 = { ...obj1, ...obj2}
console.log(obj3);

const traget = Object.assign({}, obj1, obj2);

console.log(traget);

const users = [
    {
        id: 1,
        email: "h@133"
    },

    {
        id: 2,
        email: "y@231"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));