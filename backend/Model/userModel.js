const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  verfied: {
    type: Boolean,
    default: false,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  blockStatus: {
    type: Boolean,
    default: false,
  },
  image: {
    type: Object,
  },
 
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = new mongoose.model("user", userSchema);
