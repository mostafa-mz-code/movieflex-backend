import { prisma } from "../lib/db";

type Movie = {
  title: string;
  searchTerm: string;
  posterUrl: string;
  movieId: string;
};

export class MovieRepository {
  async getMovies() {
    return prisma.movie.findMany();
  }

  async createMovie(movie: Movie) {
    return prisma.movie.create({ data: movie });
  }

  async updateMovie(id: number, count: number) {
    return prisma.movie.update({
      where: { id },
      data: { count },
    });
  }
}

export default new MovieRepository();
