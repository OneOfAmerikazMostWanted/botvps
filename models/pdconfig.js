const mongoose = require("mongoose");

const pdConfigSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    roleID: String,
    adminId: String,
    time: String
});

module.exports = mongoose.model("PDConfig", pdConfigSchema);