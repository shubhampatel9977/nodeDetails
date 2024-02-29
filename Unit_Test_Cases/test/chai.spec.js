const chai = require('chai');
const assert = chai.assert;
const should = chai.should;
const expect = chai.expect;

should();


// ******************* Assert ********************

// describe('This is chai test case and Use Assert', () => {
//     const userName = 'Hello How Are You';
//     const list = [1,2,3,4,5,6,7];
//     const user = {
//         name: 'demo',
//         skill: ['react', 'node']
//     }

//     it('its a first case-Assert', () => {
//         assert.typeOf(userName, 'string');
//     });

//     it('equal match to-Assert', () => {
//         assert.equal(userName, 'Hello How Are You');
//     });

//     it('check length of list-Assert', () => {
//         assert.lengthOf(list, 7);
//         assert.lengthOf(user.skill, 2);
//     })
// });



// ******************* should *****************************

// describe('This is chai test case and Use should', () => {
//     const userName = 'Hello How Are You';
//     const list = [1,2,3,4,5,6,7];
//     const user = {
//         name: 'demo',
//         skill: ['react', 'node']
//     }

//     it('its a first case-should', () => {
//         userName.should.be.a('string');
//     });

//     it('equal match to-should', () => {
//         userName.should.be.equal('Hello How Are You');
//     });

//     it('check length of list-should', () => {
//         list.should.have.lengthOf(7);
//         user.should.have.property('skill').with.lengthOf(2);
//     });
// });



// ******************* expect *****************************

// describe('This is chai test case and Use expect', () => {
//     const userName = 'Hello How Are You';
//     const list = [1,2,3,4,5,6,7];
//     const user = {
//         name: 'demo',
//         skill: ['react', 'node'],
//         address: {
//             country: 'india',
//             phoneNo: ['123456890', '1234512345']
//         }
//     }

//     it('its a first case-expect', () => {
//         expect(userName).to.be.a('string');
//     });

//     it('equal match to-expect', () => {
//         expect(userName).to.equal('Hello How Are You');
//     });

//     it('check length of list-expect', () => {
//         expect(list).to.lengthOf(7);
//         expect(user.skill).to.lengthOf(2);
//     });

//     it('object length -expect', () => {
//         expect(user).to.have.property('skill').with.lengthOf(2);
//     });

//     it('api object match', () => {
//         expect(user).to.have.all.keys('name', 'skill', "address");
//     });

//     it('phone no ', () => {
//         expect(user).to.have.nested.property('address.phoneNo').with.lengthOf(2)
//     });

//     it('country name and phone number ', () => {
//         expect(user).to.have.nested.include({'address.country': "india"})

//         expect(user).to.have.nested.include({'address.phoneNo[1]': "1234512345"})
//     });
// });