require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inner knife flush space strong random pizza pupil hunt option breeze team'; 
let testAccounts = [
"0xc1cd24c1a1cc9d0f0b24427cd710dc14539167cae58c2b88bf7b8a0741a46cde",
"0xb7333901c3f5bd31a5e41a444969ceadf5c066f6e726595cac0a8265773496e6",
"0x8108685c2009b4d9e35f9dc27e68d139e7034cec2d02bcde3c5ceaa4446540ac",
"0x99bc13dd617cbda87026fa7e9903f9d9d845311bb0a01ae7e9cba93275227a2c",
"0xab60916e231615d76c1006fcbff9f0354314a5b66cfd0f8685913d7c558eeeae",
"0x4089d4f80607407e18f84c1fc3b01d0b8cbabc955c392ef073d4a5cadbdc6a34",
"0xba3a87eb6500f38d9aa20e4122f2c41840d51df8cfa4b0e63b3856410c297a1d",
"0x19e7c1541277ae42b130d607b3055cb0d7bbadccb7817c6ec7f057e8a53c78b3",
"0x8779a85129940a87523bff22ee0da5747ac5c3d71e98f2b311277d4e6160b695",
"0x2aa233f8abd52e8c12ee7ffacd548c7af13da1a058e61d99d9be60f9670a8c5d"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


