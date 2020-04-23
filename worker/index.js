const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000
});

const sub = redisClient.duplicate();

const slowFib = (index) => {
   if(index < 2)return 1;
   return slowFib(index - 1) + slowFib(index -2);
};

const fib = (index) => {
    if (index < 0) return 1;
    let dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= index; ++i) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[index];
};

sub.on('message', (channel, message) => {
    //calculate the fib and then set to redis
    redisClient.hset('values', message, slowFib(parseInt(message))); 
});

sub.subscribe("insert");