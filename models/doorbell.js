const mongoose = require('mongoose');

const DoorbellSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  channelARN: {
    type: String,
    required: true  
  },
  channelName: {
      type: String,
      required: true
  }
});

const Doorbell = mongoose.model('Doorbell', DoorbellSchema);

module.exports = Doorbell;