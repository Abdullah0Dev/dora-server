const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const doraSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Post title is required'],
        trim: true,
        minlength: 3
    },
    prompt: {
        type: String,
        trim: true,
        minlength: 9
    },
    video: {
        type: String,
        required: [true, 'Make sure to select the Vid'],
    },
    thumbnail: {
        type: String,
        required: [true, 'Make sure to select the thumbnail'],
    },
    creator: {
        email: {
            type: String,
            required: [true, 'Creator email is required'],
        },
        name: {
            type: String,
            required: [true, 'Creator name is required'],
        },
        avatar: {
            type: String,
            required: [true, 'Creator avatar is required'],
        }
    }



}, { timestamps: true })

module.exports = mongoose.model('Dora', doraSchema)