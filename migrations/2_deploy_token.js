var Yoozy = artifacts.require("./Yoozy.sol");

module.exports = function (deployer) {
  const _name = 'Yoozy';
  const _symbol = 'UZ'
  
  deployer.deploy(Yoozy, _name, _symbol);
};
