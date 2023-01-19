import express from 'express';

export const movieRouter = express.Router();

const movieController = new MovieController();

movieRouter.post("/create", movieController.create)