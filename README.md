# kinny
Instead of build express app from start every time you have new project. Use this instead it will save you a lot of time.
# root_project/config.js
module.exports = {

    mongoURI :{
      development: 'mongodb://localhost:27017/your_app',
      test: 'mongodb://localhost:27017/your_test'
    },
    base_url:'http://localhost:3000',
    conf:{
      maxAge: '0',
      cacheExpire:10,
      env:'development',
    }
  }
