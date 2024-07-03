import { Utilisateur } from "./utilisateur";

export class Demande{
    id:number;
    description:string;
    client:Utilisateur
    prest:Utilisateur
    enAttent:boolean
    etat:boolean
}