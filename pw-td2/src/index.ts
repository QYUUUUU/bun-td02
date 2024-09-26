// import { Starship } from "./Classes/StarshipClass";
// import { v4 as uuidv4 } from 'uuid';  // Importer la version 4 d'UUID
// import type { Planet } from './Types/PlanetType';
// import { calculateFlightDurationFromEarth } from "./utils/flightCalculator";
import { Citron } from "./Classes/Products/CitronClass";
import { TomateCerise } from "./Classes/Products/TomateCeriseClass";
import { HuileOlive } from "./Classes/Products/HuileOliveClass";
import { Sucre } from "./Classes/Products/SucreClass";
import { Cart } from "./Classes/CartClass";
 
// const Prometheus = new Starship('Prometheus', 100000, uuidv4());
// Prometheus.displayInfo();
// Prometheus.takeOff();
// Prometheus.displayInfo();
// Prometheus.fly();
// Prometheus.displayInfo();
// Prometheus.land();
// Prometheus.displayInfo();
// Prometheus.park();
// Prometheus.displayInfo();
// try{
//     Prometheus.park();
// }catch(e){
//     let result = (e as Error).message;
//     console.log(result);
// }

// let planets:Planet[] = [];

// planets.push(
//     { name: 'Jupiter', distanceFromEarth: 658700000 },
//     { name: 'Arrakis', distanceFromEarth: 65400000 },
//     { name: 'Uranus', distanceFromEarth: 63800000 },
//     { name: 'Tatooine', distanceFromEarth: 500000000 },
//     { name: 'Pandora', distanceFromEarth: 750000000 },
//     { name: 'Meirrion', distanceFromEarth: 3000000000 },
//     { name: 'Abraxar', distanceFromEarth: 4000000000 } 
// );

// //Distance de la Terre
// planets.sort((a, b) => a.distanceFromEarth - b.distanceFromEarth);
// console.log(planets);

// //Ordre alphabétique croissant 🥐
// planets.sort((a, b) => a.name.localeCompare(b.name));
// console.log(planets);

// let totalDistances = 0;
// let planetCount = 0;

// planets.forEach(planet => {
//     totalDistances += planet.distanceFromEarth;
//     planetCount++;
// });

// if(planetCount != 0){
//     console.log("La distance moyenne est de " + totalDistances/planetCount)
// }

// let unity = "heures";
// let meirion = { name: 'Meirrion', distanceFromEarth: 300000 };
// let dureeTrajetEnHeures= calculateFlightDurationFromEarth(meirion ,Prometheus, unity);
// console.log("Le trajet prendra "+dureeTrajetEnHeures+" "+unity+ " pour arriver à "+meirion.name);



// unity = "jour";
// dureeTrajetEnHeures= calculateFlightDurationFromEarth(meirion ,Prometheus, unity);
// console.log("Le trajet prendra "+dureeTrajetEnHeures+" "+unity+ " pour arriver à "+meirion.name);


// Créer des produits
const citron = new Citron(0.5);
const huileOlive = new HuileOlive(5);
const tomatesCerise = new TomateCerise(3.5);
const sucre = new Sucre();

// Créer un panier
const cart = new Cart();
cart.add(citron, 2);
cart.add(huileOlive, 1.5);
cart.add(sucre, 0.5);
cart.add(citron, 5);
cart.add(sucre, 3);
cart.add(tomatesCerise, 1.5);

// Afficher les détails du panier
console.log(cart.displayDetails());
console.log(`Montant total tomates :${cart.calculateAmountByProduct(tomatesCerise)} €`);
console.log(cart.getProductTypesCount());
console.log(`Montant total: ${cart.calculateAmount()} €`);