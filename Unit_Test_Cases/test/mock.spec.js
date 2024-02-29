const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const { Marks } = require('../controller/studentCon');
const marksObj = new Marks();

// describe('This is Mock-Stub methods', () => {

//     it('internal function count', () => {
//         let mock = sinon.mock(marksObj);

//         let expt = mock.expects('getExternal');
//         marksObj.finalMarks(40);
//         expt.exactly(1);
//         expt.withArgs(40);

//         mock.verify();
//     });

// });