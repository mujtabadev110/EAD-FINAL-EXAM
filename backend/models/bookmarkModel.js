const mongoose =require('mongoose');

const bookmarkSchema = mongoose.Schema({

    text:{
        type: 'string',
        required: [true, 'Please add a text field']
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Bookmark', bookmarkSchema )