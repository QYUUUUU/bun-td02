import { Starship } from "./Classes/StarshipClass";
import { v4 as uuidv4 } from 'uuid';  // Importer la version 4 d'UUID
import type { Planet } from './Types/PlanetType';

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
    { name: 'Mercury', distanceFromEarth: 92000000 },   // 92 million km
    { name: 'Venus', distanceFromEarth: 41000000 },     // 41 million km
    { name: 'Mars', distanceFromEarth: 78000000 },      // 78 million km
    { name: 'Jupiter', distanceFromEarth: 628000000 },  // 628 million km
    { name: 'Saturn', distanceFromEarth: 1275000000 },  // 1.275 billion km
    { name: 'Uranus', distanceFromEarth: 2724000000 },  // 2.724 billion km
    { name: 'Neptune', distanceFromEarth: 4351000000 }  // 4.351 billion km
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