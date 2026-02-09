module.exports = {
  init() {
    console.log("Wallet module ready.");
  },

  create() {
    return "wallet-address";
  },

  balance() {
    return 0;
  }
};
