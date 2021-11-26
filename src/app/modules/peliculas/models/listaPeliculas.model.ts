import { pelicula } from "./pelicula.model";

export class listaPeliculas {
    page: number;
    results: pelicula[];
    total_pages: number;
    total_results: number;
}