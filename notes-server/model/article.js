const mongoose = require('mongoose')
const Schema = mongoose.Schema

const article = new mongoose.Schema({
    title: String,
    content: String,
    contentText: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'category'
    },
    readNumber: {
        type: String,
        default: 0
    },
    commondNumber: {
        type: String,
        default: 0
    }
}, {versionKey: false, timestamps: {createdAt: 'createdTime', updatedAt: 'updatedTime'}})

module.exports = mongoose.model('article', article)