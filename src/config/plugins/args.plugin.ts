

import { argv } from 'process';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'

export const yarg = yargs (hideBin(process.argv)) 
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
})
.option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Multiplicar hasta este número'
})
.option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en consola'
})
.option('n', {
    alias: 'name',
    type: 'string',
    default: 'table',
    describe: 'Multiplication table'
})
.option('d', {
    alias: 'destination',
    type: 'string',
    default: 'outputs',
    describe: 'file destination'
})
.check((argv) =>{

    if(argv.b < 1) throw 'Error:  base  must be a number';
    return true;
})
.parseSync()




