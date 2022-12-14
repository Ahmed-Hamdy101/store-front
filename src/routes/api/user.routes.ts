//Router-express 
import { Router } from "express";
import authenticationMiddleware from "../../Middleware/Auth/auth";
// import controllers
import  * as handlers from "../../handlers/userControllers";
// create intance from  routes
const usrRouts = Router();
// add Routers assined to first Endpoint 
usrRouts.route('/all').get( authenticationMiddleware,handlers.GetAllUsers);
usrRouts.route( '/:id').get( authenticationMiddleware,handlers.GetSpecificUser);
usrRouts.route('/register').post(handlers.CreateRecordUser)
usrRouts.route('/:id/edit').patch( authenticationMiddleware,handlers.UpdateRecordUser);
usrRouts.route('/:id/delete').delete( authenticationMiddleware,handlers.DeleteUser);

// CREATE Auth
usrRouts.route('/signin').post( authenticationMiddleware,handlers.authentication)

export default usrRouts; 
