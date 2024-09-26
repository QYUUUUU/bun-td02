import type { Starship } from '../Classes/StarshipClass';
import type { Planet } from '../Types/PlanetType';
import type { Unit } from '../Types/UnitType';
export function calculateFlightDurationFromEarth(planet: Planet, starship: Starship, unity?: Unit){
    try{
        let dureeTrajet = planet.distanceFromEarth / starship.speed;
        if(unity && unity === "jour"){
            return dureeTrajet/24;
        }
        return dureeTrajet;
    }catch(e){
        let result = (e as Error).message;
        console.log(result);
        return 0;
    }
}

