
#### index.js

```javascript
#!/usr/bin/env node

const spells = [
  "Whisper of the Forgotten – A spell that allows one to hear voices from the past.",
  "The Black Veil – Creates an unseeable shadow that follows the caster, hiding them from sight.",
  "Curse of the Hollow – Slowly drains the soul of the target, leaving them an empty husk.",
  "Echoes of the Abyss – A chant that summons creatures from beyond reality to do the caster’s bidding.",
  "The Last Word – An incantation that erases a single person’s name from existence, as if they never lived."
];

function getRandomSpell() {
  return spells[Math.floor(Math.random() * spells.length)];
}

console.log("Welcome to Grimoire of the Elders!");
console.log("Here is a forbidden spell and its power:");
console.log(getRandomSpell());
