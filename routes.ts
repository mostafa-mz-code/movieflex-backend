import express from "express";
import movieController from "./controllers/movie.controller";

const router = express.Router();

router.get("/api/movies/", movieController.getMovies);

router.post("/api/movies/", movieController.updateMovie);

export default router;
