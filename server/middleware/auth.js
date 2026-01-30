import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  console.log("inside middle nw");
  console.log(req.headers);
  const token = req.headers.authorization.split(" ")[1];
  // const { token } = req.headers;
  // console.log(req.body);
  console.log("in mddle");
  console.log(token);

  if (!token) {
    return res.json({ success: false, message: "Not Authorized Login Again" });
  }
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log(token_decode);

    console.log(`token decode id : ${token_decode._id}`);

    req.params.id = token_decode._id || token_decode.id;

    console.log(req.params.id);

    // console.log();
    // console.log("out now");

    // you can use req.user to body the token_decode
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export default authMiddleware;
