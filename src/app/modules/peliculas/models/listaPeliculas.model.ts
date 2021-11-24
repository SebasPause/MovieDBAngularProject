import { pelicula } from "./pelicula.model";

export interface listaPeliculas {
    id: number;
    page: number;
    results: pelicula[];
    total_pages: number;
    total_results: number;
}