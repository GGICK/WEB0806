// import _ from "lodash";
// import cube from "./modules.js";
// console.log(cube(2, 4));

// import { arrs2, arrs, getName } from "./modules.js";

// import * as R from "./modules.js";

// console.log(_.camelCase("hello world"));
// console.log(R.arrs);
// console.log(R.arrs2);
// console.log(R.getName());

// const user = {
//   name: "mingss",
//   age: 20,
//   emails: ["designmj2105gmail.com"],
// };
// const copyUser = user;
// console.log(copyUser === user);

// user.age = 22;
// console.log("user", user);
// console.log("copyUser", copyUser);

// const copyUser = Object.assign({}, user);
// console.log(copyUser === user);

// user.age = 22;
// console.log(user);
// console.log(copyUser);

// const copyUser = { ...user };
// console.log(copyUser === user);

// user.age = 22;
// console.log(user);
// console.log(copyUser);

// user.emails.push("mingss02@gmail.com");
// console.log(user.emails === copyUser.emails);
// console.log(user);
// console.log(copyUser);

// const copyUser = _.cloneDeep(user);
// console.log(copyUser === user);

// user.age = 22;
// console.log(user);
// console.log(copyUser);

// user.emails.push("mingss02@gmail.com");
// console.log(user.emails === copyUser.emails);
// console.log(user);
// console.log(copyUser);

// const userA = [
//   { userId: "1", name: "Mingss" },
//   { userId: "2", name: "Neo" },
// ];

// const userB = [
//   { userId: "3", name: "Mingss" },
//   { userId: "4", name: "sun" },
// ];

// const userC = userA.concat(userB);
// console.log(userC);
// console.log(_.uniqBy(userC, "userId"));

// const userD = _.unionBy(userA, userB, "userId");
// console.log(userD);

// const users = [
//   { userId: "1", name: "Mingss" },
//   { userId: "2", name: "Neo" },
//   { userId: "3", name: "Amy" },
//   { userId: "4", name: "Jane" },
// ];

// const foundUser = _.find(users, { name: "Amy" });
// console.log(foundUser);
// const foundUserIndex = _.findIndex(users, { naem: "Amy" });
// console.log(foundUserIndex);

// _.remove(users, { name: "Mingss" });
// console.log(users);

// let array = [1, 2, 3, 4];
// console.log(array);
// let evens = _.remove(array, function (n) {
//   return n % 2 === 0;
// });

// console.log(array);
// console.log(evens);

// let myFriend = [
//   { name: "Kim", active: false },
//   { name: "Lee", active: false },
// ];

// console.log(_.every(myFriend, { name: "Kim", active: false }));
// console.log(_.every(myFriend, ["active", false]));
// console.log(_.every(myFriend, "active"));

// let mySister = [
//   { name: "Kim", age: 22, city: "Seoul" },
//   { name: "Kim", age: 22, city: "Daegu" },
//   { name: "Lee", age: 23, city: "Busan" },
//   { name: "Park", age: 24, city: "Seoul" },
// ];

// console.log(_.filter(mySister, { age: 22, name: "Kim" }));
// console.log(_.filter(mySister, { city: "Busan" }));
// console.log(_.filter(mySister, (sister) => sister.age === 24));

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
