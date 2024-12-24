const express = require("express");
const multer = require("multer");
const app = express();

const uploadFile = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "myUploads");
    },
    filename: function (req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}.jpg`);
    },
  }),
}).single("user_file");

app.use(uploadFile);

app.post("/upload", async (req, resp) => {
  resp.send("File Uploaded");
});

app.listen(5300);
