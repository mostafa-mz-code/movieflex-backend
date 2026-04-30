import type { Movie } from "../repositories/movie.repository";
import movieRepository from "../repositories/movie.repository";

class MovieService {
  async getMovies(limit: number = 5, order: "asc" | "desc" = "desc") {
    try {
      const movies = await movieRepository.getAllMovies();
      movies.sort(
        order === "desc"
          ? (a, b) => b.count - a.count
          : (a, b) => a.count - b.count,
      );
      return movies.slice(0, Number(limit));
    } catch (error) {
      console.error("Error getting movies:", error);
      throw new Error("Failed to get all the movies");
    }
  }

  async updateMovie(movie: Movie) {
    try {
      const existingMovie = await movieRepository.getMovie(movie.movieId);

      if (!existingMovie) {
        const newMovie = await movieRepository.createMovie(movie);
        return await movieRepository.updateMovie(newMovie.id, {
          ...newMovie,
          count: 1,
        });
      } else {
        return await movieRepository.updateMovie(existingMovie.id, {
          ...existingMovie,
          count: Number(existingMovie.count) + 1,
        });
      }
    } catch (error) {
      console.log("can't update movie count!");
      throw new Error("can't update movie count!");
    }
  }
}

export default new MovieService();
