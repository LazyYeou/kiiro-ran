function copyObjects(source, target) {
  for (let k in source) {
    target[k] = source[k];
  }
}

let user = {
  name: "john",
  key1: "key1",
  key2: "key2",
  key3: "key3",
};

let admin = {};
copyObjects(user, admin);
console.log(user);

admin.name = " peter";
console.log(admin);

for (let k in user) {
  console.log(admin[k] === user[k], admin[k], user[k]);
}

console.log(user === admin);
