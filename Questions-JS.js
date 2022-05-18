const userData = [
  {
    id: "111",
    name: "Peter",
    favorites: {
      food: ["burgers", "pizza"],
      activites: ["basketball", "baseball"],
    },
  },
  {
    id: "222",
    name: "John",
    favorites: {
      food: ["burgers", "tacos"],
      activites: ["football", "golf"],
    },
  },
  {
    id: "333",
    name: "Mary",
    favorites: {
      food: ["pizza", "tacos", "fried chicken"],
      activites: ["volleyball", "softball"],
    },
  },
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

const sumOfFavoriteFoods = userData.map((e) => {
  return { id: e.id, favoriteFoods: e.favorites["food"].length };
});

console.log(sumOfFavoriteFoods);
////////////////////
// EXTRA CREDIT:
///////////////////

// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

const likesPizza = userData.reduce((arr, next, i) => {
  if (next.favorites["food"].includes("pizza")) {
    arr.push(next.name);
  }
  return arr;
}, []);

console.log(likesPizza);

// 7. Show us an example of a switch statement being used
const firstName = userData[0].name;
const newName = "Thomas";

function usersName(firstName) {
  switch (firstName) {
    case "Peter":
      console.log("Hello Peter!");
      break;
    case "John":
      console.log("Hello John");
      break;
    case "Mary":
      console.log("Hello Mary!");
      break;
    default:
      console.log("Not a user yet.");
      break;
  }
}

usersName(firstName);
usersName(newName);
