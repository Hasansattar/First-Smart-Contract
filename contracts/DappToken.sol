pragma solidity >=0.4.22 <0.9.0;

contract DappToken {
  //name
    string public name = "Dapp Token";
   //symbol
    string public symbol = "Dapp";
     //standard
    string public standard = "Dapp Token v1.0";

    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;

    // constructor
    //set the total number of tokens
    //Read the total number of tokens
    constructor(uint256 _initialToken) public {
        balanceOf[msg.sender] = _initialToken;
        totalSupply = _initialToken;
    }

    //transfer
    //exception if account doesnot have enough
    //return a boolean
    //transfer event

    function transfer(address _to ,uint256 _value) public returns(bool success){
           
    }
}
