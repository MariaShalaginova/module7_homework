const obj = {
  city: "Moscow",
  age: 20
 }
 

function showOwnKeysAndValue (obj) {
  for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`);
}
}

showOwnKeysAndValue(obj)




