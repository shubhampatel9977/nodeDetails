const express = require("express");
const router = express.Router();
const redisClient = require('../config/redisDB');

// Define routes
router.post('/add', async(req, res) => {
    try{
        const { key, value, time } = req.body;
        const result = await redisClient.set(key, JSON.stringify(value), {EX: parseInt(time)});

        if(result){
            res.status(201).json({ message: "Redis Add Successfully" });
        }
    } catch (err) {
        console.log('Redis Add Error', err.message);
    }
});

router.get('/get', async(req, res) => {
    try{
        const { key } = req.body;
        const result = await redisClient.get(key);

        if(result){
            res.status(200).json({ message: JSON.parse(result) });
        }
        res.status(200).json({ message: 'Not Found Key' });
    } catch (err) {
        console.log('Redis Get Error', err.message);
    }
});

module.exports = router;
