// The names are for seeding the data with random names
const names = [
  "Liam",
  "Noah",
  "Oliver",
  "Elijah",
  "William",
  "James",
  "Benjamin",
  "Lucas",
  "Henry",
  "Alexander",
  "Mason",
  "Michael",
  "Ethan",
  "Daniel",
  "Jacob",
  "Logan",
  "Jackson",
  "Levi",
  "Sebastian",
  "Mateo",
  "Jack",
  "Owen",
  "Theodore",
  "Aiden",
  "Samuel",
  "Joseph",
  "John",
  "David",
  "Wyatt",
  "Matthew",
  "Luke",
  "Asher",
  "Carter",
  "Julian",
  "Grayson",
  "Leo",
  "Jayden",
  "Gabriel",
  "Isaac",
  "Lincoln",
  "Anthony",
  "Hudson",
  "Dylan",
  "Ezra",
  "Thomas",
  "Charles",
  "Christopher",
  "Jaxon",
  "Maverick",
  "Josiah",
  "Isaiah",
  "Andrew",
  "Elias",
  "Joshua",
  "Nathan",
  "Caleb",
  "Ryan",
  "Adrian",
  "Miles",
  "Eli",
  "Nolan",
  "Christian",
  "Aaron",
  "Cameron",
  "Ezekiel",
  "Colton",
  "Luca",
  "Landon",
  "Hunter",
  "Jonathan",
  "Santiago",
  "Axel"
];
// The thoughtTexts are for seeding the data with random thoughts
const thoughtTexts = [
  "This is my first thought!",
  "I love coding!",
  "JavaScript is awesome!",
  "MongoDB makes life easier.",
  "React is powerful.",
  "Express.js for the win!",
  "Node.js is great!",
  "Seeding databases is fun!",
  "Random thoughts...",
  "Another day, another code.",
  "Debugging is part of the process.",
  "Learning new things every day.",
  "Code, eat, sleep, repeat.",
  "Hacking away!",
  "Building cool projects.",
  "Testing is important.",
  "Always refactor your code.",
];
// The reactionBodies are for seeding the data with random reactions
const reactionBodies = [
  "Nice thought!",
  "I agree with you.",
  "Interesting point.",
  "Well said!",
  "Couldn't have said it better.",
  "Absolutely!",
  "That's awesome.",
  "Keep it up!",
  "You're right!",
  "Great insight.",
  "I never thought of it that way.",
  "Good job!",
  "Excellent!",
  "Totally!",
  "Cool!",
  "Indeed.",
];
// This function will return a random item from an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
// This function will return a random name from the names array
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;
// This function will return an array of random thoughts
const getRandomThoughts = (num) => {
  const thoughts = [];
  for (let i = 0; i < num; i++) {
    thoughts.push({
      thoughtText: getRandomArrItem(thoughtTexts),
      username: getRandomName(),
    });
  }
  return thoughts;
};
// This function will return an array of random reactions
const getRandomReactions = (num) => {
  const reactions = [];
  for (let i = 0; i < num; i++) {
    reactions.push({
      reactionBody: getRandomArrItem(reactionBodies),
      username: getRandomName(),
    });
  }
  return reactions;
};
// Export the functions
module.exports = { getRandomName, getRandomThoughts, getRandomReactions };
