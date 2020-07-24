const fs = require('fs');
const colors = require('colors');

const createFile = (base, limit) => {
    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject('Input is not a number');
            return;
        }
        
        let data = '';

        for (let index = 1; index <= limit; index++) {
            data +=`${base} * ${index} = ${base*index}\n`; 
        }

        fs.writeFile(`files/table-${base}-to-${limit}.txt`, data, (err) => {

            if (err) 
                reject(err);
            else
                resolve(`table-${base}-to-${limit}.txt`)
            
        });
    })
}

const listOutTable = (base, limit) => {

    console.log('====================='.green);
    console.log(`Table of ${base}`.green);
    console.log('====================='.green);

    for (let i = 1; i <= limit; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }

}

module.exports = {
    createFile,
    listOutTable
}
