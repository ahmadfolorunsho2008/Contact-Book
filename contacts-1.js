// contacts.js — Contact Book

// 1. Array of contact objects
const contacts = [
  { name: "Yunus Fawaz", phone: "09020269841", relationship: "friend" },
  { name: "Tunde Bello", phone: "08029876543", relationship: "family" },
  { name: "Chioma Okafor", phone: "07065432109", relationship: "colleague" },
  { name: "Ibrahim Musa", phone: "09012345678", relationship: "friend" },
  { name: "Funke Adeyemi", phone: "08134567890", relationship: "family" },
  { name: "David Eze", phone: "08056781234", relationship: "colleague" },
];

// 2. Filter contacts by relationship
function findByRelationship(list, relationship) {
  return list.filter(
    (contact) => contact.relationship === relationship.toLowerCase()
  );
}
console.log("Friends:", findByRelationship(contacts, "friend"));

// 3. Return just the names
function getNames(list) {
  return list.map((contact) => contact.name);
}
console.log("All names:", getNames(contacts));
console.log("Family names:", getNames(findByRelationship(contacts, "family")));

// 4. Fetch a random joke safely
async function fetchRandomJoke() {
  try {
    const res = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    const joke = await res.json();
    console.log("Setup:", joke.setup);
    console.log("Punchline:", joke.punchline);
  } catch (error) {
    console.error("Could not fetch joke:", error.message);
  }
}
fetchRandomJoke();
