const should = require('should');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../app');
chai.use(chaiHttp);

describe('Index routes', function(){
    beforeEach((done)=>{
        console.log('before');
        console.log(process.env.NODE_ENV);

        done();
    })
    afterEach((done) =>{
        console.log('after each');
        done();

    })
    it('should return status 200',(done) =>{
       chai.request(server)
       .get('/')
       .end(function(err, resp){
           should.not.exist(err);
           should.exist(resp);
           resp.status.should.equal(200);
           done();
       })
    })
})
