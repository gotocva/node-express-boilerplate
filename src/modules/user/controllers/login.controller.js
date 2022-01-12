import { _login } from "../services/user.service"


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns Object
 */
export const login = async (req, res) => {
    const user = await _login({email:req.body.email, password: req.body.password}).catch((errorMsg) => res.ERROR({}, errorMsg))
    return res.JSON(user, 'Logged in successfully');
}