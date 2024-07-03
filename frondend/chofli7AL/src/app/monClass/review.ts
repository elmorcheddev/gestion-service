import { Competance } from "./Competance";
import { Utilisateur } from "./utilisateur";

export class Review {
    id: string;
    dateCreation: string;
    content: string;
    start: number;
    client: Utilisateur;
    competance: Competance;
}