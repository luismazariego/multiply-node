const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('list', 'Displays on Console the multiply table', options)
    .command('create', 'Create a file with the multiply table', options)
    .help()
    .argv;

module.exports = {
    argv
}
