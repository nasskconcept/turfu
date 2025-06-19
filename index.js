// Importations
import { Voiture } from "./voiture.js";
import { Animal } from "./animal.js";
import { Chien } from "./chien.js";
import { Chat } from "./chat.js";

// ==== Tests Voiture / Héritage / Encapsulation ====
const v1 = new Voiture("Toyota", "Yaris", 2015, "rouge");
const v2 = new Voiture("Fiat", "500", 2020, "rose");
const v3 = new Voiture("Volvo", "XC40", 2022, "jaune");

console.log(`Couleur initiale : ${v3.couleur}`);
v3.couleur = "vert kaki"; // setter
console.log(`Nouvelle couleur : ${v3.couleur}\n`);

v1.afficherDetail();
v2.afficherDetail();
v3.afficherDetail();

// ==== Tests Polymorphisme ====
console.log("\n--- Animaux robots ---");
const animaux = [new Chien(), new Chat(), new Chien(), new Animal()];

for (const a of animaux) {
  a.faireDuBruit(); // même appel, sons différents
}
