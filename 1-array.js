const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = { id: 121, name: 'Agun' };
function add(num1, num2) {
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(typeof add);

// check array
const friends = [13, 14, 11, 17, 21, 26, 15, 20];
console.log(Array.isArray(friends));
console.log(friends.includes(19));
if (friends.indexOf(19) !== -1) {
    
}

//concat
const newFriendsAge = [12, 13, 11, 15];
const allFriendsAge = newFriendsAge.concat(friends);
console.log(allFriendsAge);
