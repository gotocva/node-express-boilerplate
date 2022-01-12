import { store } from "../services/user.service"


export const register = async (req, res) => {
    const user = await store(req.body).catch((errorMsg) => res.ERROR({}, errorMsg));
    console.log(user, 'user');
    return res.JSON(user, 'account created successfully');
}