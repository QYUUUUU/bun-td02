import { Starship } from "./Classes/StarshipClass";
import { v4 as uuidv4 } from 'uuid';  // Importer la version 4 d'UUID
import type { Planet } from './Types/PlanetType';
import { calculateFlightDurationFromEarth } from "./utils/flightCalculator";

const Prometheus = new Starship('Prometheus', 100000, uuidv4());
Prometheus.displayInfo();
Prometheus.takeOff();
Prometheus.displayInfo();
Prometheus.fly();
Prometheus.displayInfo();
Prometheus.land();
Prometheus.displayInfo();
Prometheus.park();
Prometheus.displayInfo();
try{
    Prometheus.park();
}catch(e){
    let result = (e as Error).message;
    console.log(result);
}

let planets:Planet[] = [];

planets.push(
    { name: 'Jupiter', distanceFromEarth: 658700000 },
    { name: 'Arrakis', distanceFromEarth: 65400000 },
    { name: 'Uranus', distanceFromEarth: 63800000 },
    { name: 'Tatooine', distanceFromEarth: 500000000 },
    { name: 'Pandora', distanceFromEarth: 750000000 },
    { name: 'Meirrion', distanceFromEarth: 3000000000 },
    { name: 'Abraxar', distanceFromEarth: 4000000000 } 
);

//Distance de la Terre
planets.sort((a, b) => a.distanceFromEarth - b.distanceFromEarth);
console.log(planets);

//Ordre alphabétique croissant 🥐
planets.sort((a, b) => a.name.localeCompare(b.name));
console.log(planets);

let totalDistances = 0;
let planetCount = 0;

planets.forEach(planet => {
    totalDistances += planet.distanceFromEarth;
    planetCount++;
});

if(planetCount != 0){
    console.log("La distance moyenne est de " + totalDistances/planetCount)
}

let unity = "heures";
let meirion = { name: 'Meirrion', distanceFromEarth: 300000 };
let dureeTrajetEnHeures= calculateFlightDurationFromEarth(meirion ,Prometheus, unity);
console.log("Le trajet prendra "+dureeTrajetEnHeures+" "+unity+ " pour arriver à "+meirion.name);



unity = "jour";
dureeTrajetEnHeures= calculateFlightDurationFromEarth(meirion ,Prometheus, unity);
console.log("Le trajet prendra "+dureeTrajetEnHeures+" "+unity+ " pour arriver à "+meirion.name);