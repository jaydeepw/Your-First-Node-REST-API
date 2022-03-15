const mongoose = require('mongoose')

const loanSchema = new mongoose.Schema({
  loanTitle: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: false
  },
  subscribeDate: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('LoanV4', loanSchema)