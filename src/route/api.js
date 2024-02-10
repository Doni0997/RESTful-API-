import express from "express";
import userController from "../controller/user-controller.js";
import contactController from "../controller/contact-controller.js";
import addressController from "../controller/address-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";


const userRouter = new express.Router();
userRouter.use(authMiddleware);

// API User
userRouter.get('/api/Users/current', userController.get);
userRouter.patch('/api/Users/current', userController.update);
userRouter.delete('/api/Users/logout', userController.logout);

// API Contact
userRouter.post('/api/contacts', contactController.create);
userRouter.get('/api/contacts/:contactId', contactController.get);
userRouter.put('/api/contacts/:contactId', contactController.update);
userRouter.delete('/api/contacts/:contactId', contactController.removed);
userRouter.get('/api/contacts', contactController.search);

// API Address
userRouter.post('/api/contacts/:contactId/addresses', addressController.create);
userRouter.get('/api/contacts/:contactId/addresses/:addressId', addressController.get);
userRouter.put('/api/contacts/:contactId/addresses/:addressId', addressController.update);
userRouter.delete('/api/contacts/:contactId/addresses/:addressId', addressController.removed);
userRouter.get('/api/contacts/:contactId/addresses', addressController.list);



export {
    userRouter
}