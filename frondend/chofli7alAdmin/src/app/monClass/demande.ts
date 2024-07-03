import { Utilisateur } from "./utilisateur";

export class Demande {
        id:number;
    description:string;
   etat:boolean;
   enAttent:boolean;
    client:Utilisateur;
    prest:Utilisateur;
}