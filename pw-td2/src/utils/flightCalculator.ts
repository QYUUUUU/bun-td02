import type { Starship } from '../Classes/StarshipClass';
import type { Planet } from '../Types/PlanetType';
export function calculateFlightDurationFromEarth(planet: Planet, starship: Starship, unity?: string){
    let dureeTrajet = planet.distanceFromEarth / starship.speed;
    if(unity && unity === "jour"){
        return dureeTrajet/24;
    }
    return dureeTrajet;
}

