require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remember honey hockey clinic sun tree'; 
let testAccounts = [
"0x8d8000174b4889ee426eb646225f447e429bdac55e410c37ee5fb5a799cf77d5",
"0x963b65afe393d79affe5357286b7c187a68389753ae0f6244c3f469b60e709dc",
"0x2c2a680eea71d4edf090c42c05e4592100f47a4fcb9de7e8256bb17d9bc38c2d",
"0x6dab6b0d1f66ec615f7f3461bf82b940eb523f4199229c93f22c7e87cccb7422",
"0x6973ad82676eebd9180eee591f9e95051061e3faa80170a8578aabcd6628d841",
"0x6a3332bf4b376882334b731d0277c46c7587994eb54b073153e2159114fc33cc",
"0x9076ae1ffc0a2c736598473044a99b3cf4478871029fc73ddffa6e1dd3390428",
"0x9a74bc4c8606cefcd532e510006f63c6935922264464c8b0d470b40a5f5f2447",
"0xafbf055258f1da1cdbd4e1f2842a60c8c1d61a7d36465b757542c1f8af3c81fe",
"0x05800b23b7d44e376d9ec2dba1e317f6f0d22a455ccf3d61c8efe367d2e6340c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

