const argv = require('./config/yargs').argv;
const colors = require('colors');
   
const { createFile, listOutTable } = require('./multiplication/multiply');

const command = argv._[0];

switch (command) {

    case 'list':
        listOutTable(argv.base, argv.limit);        
        break;

    case 'create':
        createFile(argv.base, argv.limit)
            .then(file => console.log(`File created: ${colors.blue(file)}`))
            .catch(e => console.log(e));        
        break;
    
    default: console.log('Command not recognized');
        break;
}

