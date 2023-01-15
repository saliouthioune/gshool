import { AnneAcad } from "../annees/Annee";
import { Etudiant } from "../etudiant/Etudiant";
import { Inscrire } from "../inscrire/Inscrire";

export class Paiement{
    paiementId:number;
    montant:number;
    mois:string;
    datep:Date;
    typep:string;
    inscrire=new Inscrire();
    promo:string;
    name:string;
    prenom:string;
    email:string;
    phone:number;
    sexe:string;
    address:string;
    etudiant=new Etudiant();
    constructor(){}
}