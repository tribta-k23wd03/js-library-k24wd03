const express = require("express");
const multer = require("multer");
const Image = require("../models/Image");
const router = express.Router();

const streamifier = require("streamifier");
const { cloudinary } = require("../config/cloudinary");

/** 1️⃣  Sử dụng memoryStorage để nhận Buffer thay vì ghi tệp ra đĩa */
const upload = multer({ storage: multer.memoryStorage() });

/** 2️⃣  Hàm helper: upload Buffer lên Cloudinary bằng upload_stream */
function uploadBufferToCloudinary(buffer, folder = "image-review-app") {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder }, // tuỳ chọn: đặt folder trên Cloudinary
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
    streamifier.createReadStream(buffer).pipe(stream);
  });
}

/** 3️⃣  Route POST /api/upload */
router.post("/", upload.single("image"), async (req, res) => {
  try {
    // không có file?
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, error: "No file uploaded" });
    }

    // 3.1 Upload Buffer -> Cloudinary
    const result = await uploadBufferToCloudinary(req.file.buffer);

    /* 3.2 Lưu thông tin vào MongoDB
       Tuỳ schema của bạn, thêm / bớt trường cho phù hợp.
       Ví dụ: public_id, url (secure_url), originalname… */
    const image = new Image({
      originalname: req.file.originalname,
      public_id: result.public_id,
      secure_url: result.secure_url,
      width: result.width,
      height: result.height,
      format: result.format,
      bytes: result.bytes,
      // Nếu muốn kèm thêm phiên bản nhỏ: result.eager[0].secure_url …
    });

    await image.save();

    return res.json({
      success: true,
      image,
      url: result.secure_url, // Frontend dùng trực tiếp URL này
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
