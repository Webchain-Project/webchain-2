const SHA256 = require('crypto-js/sha256');

class block{
    constructor(index, timestamp, pollname, ip, previousHash=''){
        this.index = index;
        this.timestamp = timestamp;
        this.pollname = pollname;
        this.ip = ip;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + this.pollname + this.ip);
    }

    saveInDB(){
        //Function to save block data in database
    }

}

class blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock(){
        return new block(0, "3/15/23", "Genesis Block", "0");
    }

    getLastBlock(){
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock){
        newBlock.previousHash = this.getLastBlock.hash();
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isValidChain(){
        for(let i = 1; i < this.chain.length; i++){
            const currBlock = this.chain[i];
            const prevBlock = this.chain[i - 1];
            if(currBlock.hash !== currBlock.calculateHash()) return false;
            if(currBlock.previousHash !== prevBlock.hash) return false;
        } return true;
    }
}




