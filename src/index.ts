// Définir l'interface Véhicule
interface Véhicule {
    marque: string;       // Marque du véhicule
    modèle: string;       // Modèle du véhicule
    année: number;        // Année de fabrication
    démarrer(): void;     // Méthode pour démarrer le véhicule
}

// Implémenter la classe Voiture
class Voiture implements Véhicule {
    marque: string;
    modèle: string;
    année: number;

    // Constructeur pour initialiser les propriétés
    constructor(marque: string, modèle: string, année: number) {
        this.marque = marque;
        this.modèle = modèle;
        this.année = année;
    }

    // Implémentation de la méthode démarrer
    démarrer(): void {
        console.log("Moteur de la voiture démarré");
    }
}

// Créer une instance de la classe Voiture
const maVoiture = new Voiture("Renault", "Clio", 2022);

// Appeler la méthode démarrer
maVoiture.démarrer();


