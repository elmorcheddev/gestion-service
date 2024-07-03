import { Utilisateur } from "./utilisateur";
 
export interface Payment {
    id     : number;
    client : Utilisateur;
    prest  : Utilisateur;
    price  : string;
    paymentMethod: string;
}