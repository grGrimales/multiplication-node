
import fs from 'fs';

import {yarg} from './config/plugins/args.plugin';

console.log(yarg)

const {b, l, s} = yarg;

const message = 'Hello World';

console.log(message);

const titleHeader = '====== Tabla del 555 ======';
let outputMessage = '';

// Tabla del 5 con un ciclo for
for (let i = 1; i <= l; i++) {
outputMessage += (`${b} x ${i} = ${b * i}\n`);
}

outputMessage = titleHeader + '\n' + outputMessage;

if(s) console.log(outputMessage);


// Escritura de un archivo
fs.writeFileSync(`outputs/tabla-5.txt`, outputMessage);

console.log('file created!')