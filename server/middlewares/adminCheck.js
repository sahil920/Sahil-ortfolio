export const isAdmin = async (req, res, next) => {
    try {
      const user = await adminModel.findById(req.user._id);
      if (user.role !== 1) {
        return res.status(409).send({
          success: false,
          message: "UnAuthorized Access",
        });
      } else {
        next();
      }
    } catch (error) {
      console.log(error);
      res.status(401).send({
        success: false,
        error,
        message: "Error in admin middelware",
      });
    }
  };