const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const { Marks } = require('../controller/studentCon');
const marksObj = new Marks();

const chaiAsPromise = require('chai-as-promised');
chai.use(chaiAsPromise);

describe('This is Promise-Stub methods', () => {

    it('normal function count', () => {
        this.timeout(2000); // etni der tak wait karta hai
        this.timeout(0); // unlimited time leta hai fail nhi karta
        marksObj.dbData().then((result) => {
            expect(result).to.be.equal(10);
        })
    });

    it('chai promised value function', () => {
        this.timeout(2000); // etni der tak wait karta hai
        this.timeout(0); // unlimited time leta hai fail nhi karta
        expect(marksObj.dbData()).to.eventually.equal(10)
    })

});