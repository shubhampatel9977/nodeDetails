const { default: axios } = require("axios");

class Student {
    constructor() {

    }

    home(per1, per2){
        let data = this.getInfo(per1,per2)
        return data + 5;
    }

    userId() {
        return 12;
    }

    getInfo(arg1, arg2){
        return arg1+arg2;
    }
}

class Marks {
    constructor() {

    }

    finalMarks(total) {
        let external = this.getExternal(total)
        let internal = this.getInternal(total)
        let finalSum = external + internal + 10;
        return finalSum;
    }

    getExternal(total) {
        return total + 1;
    }

    getInternal(total) {
        return total - 1;
    }

    dbData(){
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(10),2000)
        })
    }

    thirdPartyApi() {
        return new Promise((resolve, reject) => {
            axios.get('https://jsonplaceholder.typicode.com/users/1')
                .then((response) => {
                    resolve(response.data);
                }).catch((error) => {
                    reject(error);
                })
        })
    }

}

module.exports = { Student, Marks };