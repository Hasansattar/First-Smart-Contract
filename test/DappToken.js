// eslint-disable-next-line no-undef
const DappToken= artifacts.require("./DappToken.sol");

// eslint-disable-next-line no-undef
contract('DappToken', function(accounts){

    it('sets the total supply upon deployment', function(){
          return DappToken.deployed().then(function(instance){
          // eslint-disable-next-line no-undef
          tokenInstance= instance;
          // eslint-disable-next-line no-undef
          return tokenInstance.totalSupply();
          }).then(function(totalSupply){
          // eslint-disable-next-line no-undef
          assert.equal(totalSupply.toNumber(),1000000,'sets the total supply to 1,000,000')
          });
    });
})