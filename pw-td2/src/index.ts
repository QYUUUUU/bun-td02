import { Starship } from "./Classes/StarshipClass";
import { v4 as uuidv4 } from 'uuid';  // Importer la version 4 d'UUID

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