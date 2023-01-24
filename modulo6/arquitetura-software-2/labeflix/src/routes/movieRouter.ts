import express from 'express';
import { MovieController } from '../controller/MovieController';

export const movieRouter = express.Router();

const movieController = new MovieController();

movieRouter.get("/movie", movieController.getAll)

movieRouter.post("/create", movieController.create)