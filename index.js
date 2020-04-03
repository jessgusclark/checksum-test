const rskjs = require('./node_modules/rskjs-util/index.js');

const ethAddress = '0x283Af0B28c62C092C9727F1Ee09c02CA627EB7F5';
const rskTestAddr = '0x3dD03d7d6c3137f1Eb7582bA5957B8a2E26f304A';
const rskMainAddr = '0x3DD03d7d6c3137f1EB7582bA5957b8A2e26F304A';
const localAddr = '0x3Dd03d7d6c3137f1Eb7582Ba5957b8A2e26f304A';

console.log(ethAddress);
console.log(rskjs.toChecksumAddress(ethAddress, 1));
console.log(ethAddress === rskjs.toChecksumAddress(ethAddress, 1)); // false
console.log(ethAddress === rskjs.toChecksumAddress(ethAddress, null));  // true

console.log('-------------------------');

console.log(rskTestAddr);
console.log(rskjs.toChecksumAddress(rskTestAddr, 31));
console.log(rskTestAddr === rskjs.toChecksumAddress(rskTestAddr, 31));  // true

console.log('-------------------------');
console.log(rskMainAddr === rskjs.toChecksumAddress(rskMainAddr, 30));  // true

console.log('-------------------------');
console.log(localAddr);
console.log(rskjs.toChecksumAddress(localAddr, 8545));
console.log(localAddr === rskjs.toChecksumAddress(localAddr, 8545));  // false
console.log(localAddr === rskjs.toChecksumAddress(localAddr, null));  // true
