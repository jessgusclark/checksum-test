# Checksum testing

According to the [Address Validator]() the address `0x283Af0B28c62C092C9727F1Ee09c02CA627EB7F5` is valid for Ethereum. However, using the `rskjs-utils` package, the checksum is returned differently.

## install and run

```
yarn install
node index.js
```
## output:

```
0x283Af0B28c62C092C9727F1Ee09c02CA627EB7F5
0x283Af0B28C62c092C9727F1ee09C02Ca627eb7F5
false
```

## helpful links:

- [Address Validator](https://address-validator.rsk.co/)
- [rskjs-utils](https://www.npmjs.com/package/rskjs-util)
