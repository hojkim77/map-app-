const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  email: {
    type: String,
    required: true, // 필수
    unique: true
  },
  todo:{
    type: Array,
    required: true, // 필수
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  lockYn: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Todo", todoSchema); // 모델로 내보내서 사용한다.