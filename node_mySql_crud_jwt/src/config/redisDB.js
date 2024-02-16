const redis = require('redis');

const redisClient = redis.createClient({
    port: 6379,
    host: '127.0.0.1'
});

redisClient.on('connect', function(err) {
    console.log('Connected Redis')
})

redisClient.connect();

module.exports = redisClient;