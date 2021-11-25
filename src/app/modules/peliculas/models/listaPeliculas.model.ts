import { pelicula } from "./pelicula.model";

export interface listaPeliculas {
    page: number;
    results: pelicula[];
    total_pages: number;
    total_results: number;
}