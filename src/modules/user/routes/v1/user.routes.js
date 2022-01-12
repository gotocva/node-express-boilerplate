import { login } from "../../controllers/login.controller";
import { register } from "../../controllers/register.controller";
import { registerValidator } from "../../validators/register.validator";

const PREFIX = '/user';
const VERSION = '/api/v1';
const DEFAULT_PATH = VERSION+PREFIX;
/**
 * 
 * @param {*} app 
 */
export const routes = (app) => {
    
    app.get(DEFAULT_PATH, (req, res) => {res.send('user list'); });

    app.post(DEFAULT_PATH+'/login', [], login);
    app.post(DEFAULT_PATH+'/register', [registerValidator], register);
}