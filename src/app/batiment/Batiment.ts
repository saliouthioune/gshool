import { Salle } from "../salle/Salle";

export class Batiment{
    batimentId:number;
    nom:string;
    salle=new Salle();
    constructor(){}
}