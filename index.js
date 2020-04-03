const rskjs = require('./node_modules/rskjs-util/index.js');

const ethAddress = '0x283Af0B28c62C092C9727F1Ee09c02CA627EB7F5';

console.log(ethAddress);
console.log(rskjs.toChecksumAddress(ethAddress, 1));
console.log(ethAddress === rskjs.toChecksumAddress(ethAddress, 1));
console.log(ethAddress === rskjs.toChecksumAddress(ethAddress, null));
