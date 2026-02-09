const Wallet = require("./wallet");
const NFT = require("./nft");
const Exchange = require("./exchange");
const Earn = require("./earn");

console.log("🚀 INFRALLET starting...");

Wallet.init();
NFT.init();
Exchange.init();
Earn.init();

console.log("✅ All modules loaded.");
