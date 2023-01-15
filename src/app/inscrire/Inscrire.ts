import { AnneAcad } from "../annees/Annee";
import { Classe } from "../classe/Classe";
import { Etudiant } from "../etudiant/Etudiant";
export class Inscrire{
    insId:number;
    classe=new Classe();
    etudiant=new Etudiant();
    annee=new AnneAcad();
    id:number;
    name:string;
    prenom:string;
    email:string;
    sexe:string;
    phone:number;
    address:string;
    constructor(){}
}