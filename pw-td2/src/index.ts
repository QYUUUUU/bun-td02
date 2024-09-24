import { Starship } from "./Classes/StarshipClass";

const Prometheus = new Starship('Prometheus', 100000);
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