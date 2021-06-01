const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Applicationlist');
const Schema = mongoose.Schema;



const ApprovedSchema = new Schema({
  id: String,
  type: String,
  name: String,
  email: String,
  phone: String,
  qualification: String,
  skillset: String,


  appliedcourse: String,

});
const Approvedlist = mongoose.model('approvedlist', ApprovedSchema);


module.exports = Approvedlist;
