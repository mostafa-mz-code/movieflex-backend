import { prisma } from "../lib/db";

export type Movie = {
  title: string;
  searchTerm: string;
  posterUrl: string;
  movieId: string;
  count: number;
};

export class MovieRepository {
  async getAllMovies() {
    return prisma.movie.findMany();
  }

  async getMovie(movieId: string) {
    return prisma.movie.findUnique({ where: { movieId } });
  }

  async createMovie(movie: Movie) {
    return prisma.movie.create({ data: movie });
  }

  async updateMovie(id: number, data: Movie) {
    return prisma.movie.update({
      where: { id },
      data: { ...data },
    });
  }
}

export default new MovieRepository();
