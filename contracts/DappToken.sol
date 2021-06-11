pragma solidity >=0.4.22 <0.9.0;

contract DappToken {
    //name
    string public name = "Dapp Token";
    //symbol
    string public symbol = "Dapp";
    //standard
    string public standard = "Dapp Token v1.0";

    uint256 public totalSupply;
    // transfer event
    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    //approve
    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );

    // balance store in keyvalue pair
    mapping(address => uint256) public balanceOf;

    //allowance
    mapping(address => mapping(address =>uint256)) public allowance;

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

    function transfer(address _to, uint256 _value)
        public
        returns (bool success)
    {
        require(balanceOf[msg.sender] >= _value);
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;

        emit Transfer(msg.sender, _to, _value);

        return true;
    }

    //approved
    //transferForm

    function approve(address _spender, uint256 _value)
        public
        returns (bool success)
    {
        // allowance

        allowance[msg.sender][_spender]= _value;
        

        // approve event
        emit Approval(msg.sender, _spender, _value);
        return true;
    }
}
