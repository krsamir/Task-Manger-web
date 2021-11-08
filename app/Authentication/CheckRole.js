export const ISADMIN = (req, res, next) => {
  if (req.role === "ADMIN") {
    next();
  } else {
    res.status(401).send({ status: "Unauthorised Access!" });
  }
};
