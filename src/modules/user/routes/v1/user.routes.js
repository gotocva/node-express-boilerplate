


const PREFIX = '/user';
const VERSION = '/api/v1';
const DEFAULT_PATH = VERSION+PREFIX;
/**
 * 
 * @param {*} app 
 */
export const routes = (app) => {
    
    app.get(DEFAULT_PATH, (req, res) => {res.send('user list'); });
}