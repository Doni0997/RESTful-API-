import express from "express";
import userController from "../controller/user-controller.js";


const publicRouter = new express.Router();
publicRouter.post('/api/Users', userController.register);
publicRouter.post('/api/Users/login', userController.login);

export {
    publicRouter
}