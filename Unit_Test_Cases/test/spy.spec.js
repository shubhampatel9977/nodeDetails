const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const { Student }= require('../controller/studentCon');
const studentObj = new Student();

// describe('Spy mthods check', () => {
//     it('userId return check', () => {
//         expect(studentObj.userId()).to.be.equal(12);
//     });

//     // it('function run count', () => {
//     //     let spyObj = sinon.spy(studentObj, 'getInfo');
//     //     studentObj.home(10,20);

//     //     expect(spyObj.calledOnce).to.be.true;  // if getInfo function call one time
//     //     // expect(spyObj.calledTwice).to.be.true; // if getInfo function call two time
//     // });

//     it('function Argument check', () => {
//         let spyObj = sinon.spy(studentObj, 'getInfo');
//         studentObj.home(10,20);

//         expect(spyObj.calledWith(10,20)).to.be.true;
//     });
        
// })