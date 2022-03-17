// Spread Destructuring Exercise
// 1a
const mcuShows = ["Loki", "Moon Knight"];
console.log(mcuShows);

// 1b
const starWarsShows = ["The Mandalorian", "The Book of Boba Fett"];
console.log(starWarsShows);

// 1c
const disneyPlusShows = [...mcuShows, ...starWarsShows, "The Beatles: Get Back"];

// 1d
console.log(disneyPlusShows);

// 2a
const netflixMovies = {action: "Extraction", crime: "The Irishman"};
console.log(netflixMovies);

// 2b
const amazonPrimeMovies = {action: "The Tomorrow War", drama: "One Night in Miami"}
console.log(amazonPrimeMovies);

// 2c
const streamingMovies = {...amazonPrimeMovies, ...netflixMovies,
musical: "Hamilton"
}

// 2d
console.log(streamingMovies); // Takes 2nd key because there are 2 keys that are the same.

// 3a
const disneyJunior = ["Mickey Mouse Clubhouse", "Spidey and His Amazing Friends"];
console.log(disneyJunior);

// 3b
const [mickey, spidey] = disneyJunior

// 3c
console.log(mickey, spidey);

// 4a
const avengers = {warMachine: "James Rhodes", theHulk: "Bruce Banner"};
console.log(avengers);

// 4b
const {warMachine, theHulk} = avengers;

// 4c
console.log(warMachine, theHulk);

// 4d
const moreAvengers = {blackWidow: "Natasha Romanoff", hawkeye: "Clint Barton", ironMan: "Tony Stark"};
console.log(moreAvengers);

// 4e

const {blackWidow: nat, ...others} = moreAvengers

// 4f
console.log(nat, others);

// Bonus
const bonus = {
    first: [1, 2, 3],
    second: [4, 5, 6],
    third: [7, 8, 9]
  };

  // 5a

const {first, second, third} = bonus;
const all = [...first, ...second, ...third];
console.log(all);

// or
/*
const first = bonus.first;
const second = bonus.second;
const third = bonus.third
const all = [...first, ...second, ...third];
console.log(all);
*/
// or
/*
const all = [
  ...bonus.first,
  ...bonus.second,
  ...bonus.third
];
console.log(all)
*/
//or

// const all = [
  // ...bonus[`first`],
  // ...bonus [`second`],
  // ...bonus[`third`]
// ];
// console.log(all)

// 5b
// const [one, two, three, four, five, six, seven, eight, nine] = all;
// Each number how has its own variable

const [one, two, three] = bonus.first;
const [four, five, six] = bonus.second;
const [seven, eight, nine] = bonus.third;

console.log(one, two, three, four, five, six, seven, eight, nine);







  



