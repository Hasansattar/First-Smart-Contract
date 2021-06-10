// eslint-disable-next-line no-undef
const DappToken= artifacts.require("./DappToken.sol");

// eslint-disable-next-line no-undef
contract('DappToken', function(accounts){
     
     var tokenInstance;
it('initializes the contract with the correct values', function(){
    return DappToken.deployed().then(function(instance){
        tokenInstance= instance;
        return tokenInstance.name();
    }).then(function(name){
        // eslint-disable-next-line no-undef
        assert.equal(name,'Dapp Token', 'has the correct name');
        return tokenInstance.symbol();
    }).then(function(symbol){
        // eslint-disable-next-line no-undef
        assert.equal(symbol,'Dapp','has correct symbol');
        return tokenInstance.standard();
    }).then(function(standard){
        // eslint-disable-next-line no-undef
        assert.equal(standard,'Dapp Token v1.0','has the correct standard')
    });
});
   



    it('sets the total supply upon deployment', function(){
          return DappToken.deployed().then(function(instance){
          // eslint-disable-next-line no-undef
          tokenInstance= instance;
          // eslint-disable-next-line no-undef
          return tokenInstance.totalSupply();
          }).then(function(totalSupply){
          // eslint-disable-next-line no-undef
          assert.equal(totalSupply.toNumber(),1000000,'sets the total supply to 1,000,000');
 
             return tokenInstance.balanceOf(accounts[0]);

         
        }).then(function(adminBalance){
            // eslint-disable-next-line no-undef
            assert.equal(adminBalance.toNumber(),1000000,'it alloctaes the initial supply to admin account')
        });
    });

     it('transfers token owbership', function(){
         return DappToken.deployed().then(function(instance){
             tokenInstance=instance;
             return tokenInstance.transfer.call(accounts[1], 999999999999999999999);

         // eslint-disable-next-line no-undef
         }).then(assert.fail).catch(function(error){
             // eslint-disable-next-line no-undef
             assert(error.message.indexOf('revert') >=0,'error message must contain revert');
         }) 
     });




});