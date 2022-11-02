const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsFeedSchema = new Schema({
    user_id: {
        type: String,
        ref: 'User'
    },
    content: {
        type: String,
        required: true
    },
    reTweets: {
        type: Number,
        default: 0
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: Array,
    image: {
        type: String,
        default: ""
    },
    date: {
        type: Date,
        default: Date.now
    }
},
    {
        versionKey: false,
        timestamps: true,
    });
module.exports = NewsFeed = mongoose.model("NewsFeed", NewsFeedSchema);