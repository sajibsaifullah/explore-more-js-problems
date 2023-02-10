/* const names = ['abul', 'babul', 'cabul', 'kabul', 'abul', 'kabul', 'abul'];

function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++){
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}
const uniqueName = removeDuplicate(names);
console.log(uniqueName); */

const names = ['abul', 'babul', 'kabul', 'dabul', 'abul', 'habul', 'babul', 'kabul'];
function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++){
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}
const uniqueName = removeDuplicate(names);
console.log(uniqueName);