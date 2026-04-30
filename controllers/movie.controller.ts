import z from "zod";
import type { Movie } from "../repositories/movie.repository";
import movieService from "../services/movie.service";
import type { Request, Response } from "express";

const movieSchema = z.object({
  title: z.string(),
  searchTerm: z.string(),
  posterUrl: z.string(),
  movieId: z.string(),
});

class MovieController {
  async getMovies(req: Request, res: Response) {
    try {
      const { limit, order } = req.query;

      const safeOrder = order === "asc" || order === "desc" ? order : "desc";

      const safeLimit =
        typeof limit === "string"
          ? parseInt(limit, 10)
          : Array.isArray(limit) && typeof limit[0] === "string"
            ? parseInt(limit[0], 10)
            : 5;

      const movies = await movieService.getMovies(safeLimit, safeOrder);

      return res.json(movies);
    } catch (error) {
      console.error("Error, can't find movies: ", error);
      return res.status(404).json({ error: "Can't find movies" });
    }
  }

  async updateMovie(req: Request, res: Response) {
    try {
      const parsedResults = movieSchema.safeParse(req.body);

      if (!parsedResults.success) {
        const error = z.treeifyError(parsedResults.error);
        return res.status(400).json({ error });
      }

      const updatedMovie = await movieService.updateMovie({
        ...parsedResults.data,
        count: 1, // or set an appropriate default or value
      });

      return res.json({ movie: updatedMovie });
    } catch (error) {
      console.log("Can't update movie: ", error);
      return res.status(400).json({ error: "Can't update the movie" });
    }
  }
}

export default new MovieController();
