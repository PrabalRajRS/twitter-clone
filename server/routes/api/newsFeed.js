const express = require("express");
const router = express.Router();
const NewsFeed = require("../../models/NewsFeed");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "../client/public/uploads");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})

const upload = multer({ storage: storage });

router.get('/', async (req, res) => {
    try {
        const newsFeed = await NewsFeed.find({}).populate("Users");
        res.send({ newsFeed })
    } catch (err) {
        res.status(400).send({ error: err });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const newsFeed = await NewsFeed.findById(req.params.id);
        res.send({ newsFeed });
    } catch (err) {
        res.status(404).send({ message: 'News Feed not found!' });
    }
});

router.post("/", upload.single("image"), async (req, res) => {
    try {
        const newsFeed = await NewsFeed.create({
            content: req.body.content,
            likes: req.body.likes,
            reTweets: req.body.retweets,
            comments: req.body.comments,
            image: req.file.originalname
        });
        res.send({ newsFeed });
    } catch (err) {
        res.status(400).send({ error: err });
    }
})

router.put('/:id', upload.single("image"), async (req, res) => {
    try {
        const updatedNewsFeed = await NewsFeed.findByIdAndUpdate(req.params.id, req.body);
        res.send({ message: 'The NewsFeed was updated' });
    } catch (err) {
        res.status(400).send({ error: err });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const removeNewsFeed = await NewsFeed.findByIdAndRemove(req.params.id);
        res.send({ message: 'The NewsFeed was removed' });
    } catch (err) {
        res.status(400).send({ error: err });
    }
});

module.exports = router;