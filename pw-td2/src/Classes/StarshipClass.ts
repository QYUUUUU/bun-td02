import { StarshipStatus } from "../Enum/StarshipStatusEnum";

export class Starship {
    // Déclaration des attributs
    ref: string;
    speed: number;
    status: StarshipStatus;
  
    // Constructeur pour initialiser les attributs
    constructor(ref: string, speed: number) {
      this.ref = ref;
      this.speed = speed;
      this.status =  StarshipStatus.PARKED;
    }
  
    // Méthode pour afficher les informations du vaisseau
    displayInfo(): void {
      console.log(`Starship Ref: ${this.ref}, Speed: ${this.speed} km/s, Status: ${this.status}`);
    }

    takeOff(): void{
        if(this.status == StarshipStatus.PARKED){
            this.status = StarshipStatus.TAKING_OFF;
        }else{
            throw new Error("Un vaisseau spatial non stationné ne peut pas s'envoler");
            
        }
    }

    park(): void{
        if(this.status == StarshipStatus.LANDING){
            this.status = StarshipStatus.PARKED;
        }else{
            throw new Error("Un vaisseau spatial qui n'est pas en train d'atterir ne peut pas se garer");
        }
    }

    fly(): void{
        if(this.status == StarshipStatus.TAKING_OFF){
            this.status = StarshipStatus.FLYING;
        }else{
            throw new Error("Un vaisseau spatial qui ne s'envole pas ne peux pas voler.");
            
        }
    }

    land(): void{
        if(this.status == StarshipStatus.FLYING){
            this.status = StarshipStatus.LANDING;
        }else{
            throw new Error("Un vaisseau spatial qui ne vole pas ne peut pas atterir.");
            
        }
    }


}
  