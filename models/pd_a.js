const mongoose = require("mongoose");

const pd_aSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    pdusername: String,
    idpd: String,
    adminuser: String,
    adminid: String,
    time: String
});

module.exports = mongoose.model("PrimeiraDama", pd_aSchema);