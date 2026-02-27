import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  // console.log("inside middle nw");
  // console.log(req.headers);
  // const token = req.headers.authorization.split(" ")[1];
  // // const { token } = req.headers;
  // // console.log(req.body);
  // console.log("in mddle");
  // console.log(token);

  // if (!token) {
  //   return res.json({ success: false, message: "Not Authorized Login Again" });
  // }
  // try {
  //   const token_decode = jwt.verify(token, process.env.JWT_SECRET);
  //   console.log(token_decode);

  //   console.log(`token decode id : ${token_decode._id}`);

  //   req.params.id = token_decode._id || token_decode.id;

  //   // console.log();
  //   // console.log("out now");

  //   // you can use req.user to body the token_decode
  //   next();
  // } catch (error) {
  //   console.log(error);
  //   res.json({ success: false, message: "Error" });
  // }

  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized, login again",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user
    req.user = decoded;
    req.userId = decoded._id || decoded.id;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

export default authMiddleware;
