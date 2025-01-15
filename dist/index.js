"use strict";
// Implémenter la classe Voiture
class Voiture {
    // Constructeur pour initialiser les propriétés
    constructor(marque, modèle, année) {
        this.marque = marque;
        this.modèle = modèle;
        this.année = année;
    }
    // Implémentation de la méthode démarrer
    démarrer() {
        console.log("Moteur de la voiture démarré");
    }
}
// Créer une instance de la classe Voiture
const maVoiture = new Voiture("Renault", "Clio", 2022);
// Appeler la méthode démarrer
maVoiture.démarrer();
