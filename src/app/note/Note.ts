import { Etudiant } from "../etudiant/Etudiant";
import { Matiere } from "../matiere/Matiere";
import { Semestre } from "../semestre/semestre";

export class Note{
    matId:number;
    etudiant=new Etudiant();
    note:number;
    semestre=new Semestre();
    matiere=new Matiere();
    name:string;
    prenom:string;
    coef:number
    constructor(){}
}