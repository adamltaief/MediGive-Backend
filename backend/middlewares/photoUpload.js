const path = require("path");
const multer = require("multer");

// Photo Storage (Disk Storage fallback if Cloudinary credentials not present)
const photoStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../images"));
  },
  filename: function (req, file, cb) {
    if (file) {
      cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
    } else {
      cb(null, false);
    }
  },
});

// Photo Upload Middleware
const photoUpload = multer({
  storage: photoStorage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith("image")) {
      cb(null, true);
    } else {
      cb({ message: "Unsupported file format. Images only." }, false);
    }
  },
  limits: { fileSize: 1024 * 1024 * 5 }, // 5 megabytes max
});

module.exports = photoUpload;
