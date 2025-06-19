// voiture.js
import { Vehicule } from "./vehicule.js"; // ❌ PAS d’accent

export class Voiture extends Vehicule {
  #couleur;

  constructor(marque, modele, annee, couleur) {
    super(marque, modele, annee); // on passe seulement 3 arguments au parent
    this.#couleur = couleur;
  }

  get couleur() {
    return this.#couleur;
  }
  set couleur(nouvelle) {
    this.#couleur = nouvelle;
  }

  afficherDetail() {
    super.afficherInfos(); // marque / modèle / année
    console.log(`Couleur : ${this.#couleur}`);
  }
}
