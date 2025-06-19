// vehicule.js
export class Vehicule {
  #marque;
  #modele;
  #annee;

  constructor(marque, modele, annee) {
    this.#marque = marque; // 🔸 utiliser le champ privé !
    this.#modele = modele;
    this.#annee = annee;
  }

  // getters / setters (facultatifs mais propres)
  get marque() {
    return this.#marque;
  }
  get modele() {
    return this.#modele;
  }
  get annee() {
    return this.#annee;
  }

  set marque(v) {
    this.#marque = v;
  }
  set modele(v) {
    this.#modele = v;
  }
  set annee(v) {
    this.#annee = v;
  }

  afficherInfos() {
    console.log(`${this.#marque} ${this.#modele} (${this.#annee})`);
  }
}
