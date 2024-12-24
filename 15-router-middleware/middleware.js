module.exports = reqFilter = (req, resp, next) => {
  // console.log("Middleware chla bhai abhi");
  if (!req.query.age) resp.send("Please provide age");
  else {
    if (req.query.age > 18) next();
    else resp.send("You are not eligible for this site");
  }
  next();
};
