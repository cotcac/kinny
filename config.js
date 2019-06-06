module.exports = {

  mongoURI: {
    development: 'mongodb://localhost:27017/your_app',
    test: 'mongodb://localhost:27017/your_test'
  },
  base_url: 'http://localhost:3000',
  conf: {
    maxAge: '0',
    cacheExpire: 10,
    env: 'development',
  }
}
