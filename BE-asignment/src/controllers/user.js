import User from "../models/user"

export const userById = async(req, res, next, id) => {
    try {
        const user = await User.findById(id).exec()
        if (!user) {
            return res.status(400).json({
                message: "Khong tim thay user"
            })
        }
        console.log('user', user);
        user.password = undefined;
        req.profile = user
        next()
        console.log("req.profile", req.profile);
    } catch (error) {

    }
}