const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const { Marks } = require('../controller/studentCon');
const marksObj = new Marks();

// describe('This is Sinon-Stub methods', () => {

//     it('internal function check', () => {
//         let stubObj = sinon.stub(marksObj,'getExternal');
//         stubObj.withArgs(40).returns(5); // asume karte hai ye return karega jaruri nhi jo hai wahi karega

//         expect(marksObj.finalMarks(40)).to.be.equal(54)
//     });

// });