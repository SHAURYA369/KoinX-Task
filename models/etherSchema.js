const mongoose = require('mongoose');

      const Schema = mongoose.Schema;
      
      const etherSchema = new Schema({

        value: {
                type: Number,
                required: [true]
            },

      });
      
      module.exports = mongoose.model('Transaction', etherSchema);