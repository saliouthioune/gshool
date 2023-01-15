import { Classe } from "../classe/Classe";
import { Matiere } from "../matiere/Matiere";
import { Professeur } from "../prof/prof";
import { Salle } from "../salle/Salle";
import { Semestre } from "../semestre/semestre";

export class Cour{
    classId:number;
    classe=new Classe();
    id:number;
    semestre=new Semestre();
    matiere=new Matiere();
    salle=new Salle();
    prof=new Professeur();
    hdebut:string;
    hfin:string;
    datec:Date
    constructor(){}
}