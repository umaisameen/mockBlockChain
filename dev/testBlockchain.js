const Blockchain = require('./Blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(1234,'asdfghjkltyuiouytrertyuiuytr','sdfghjkjhgfdsdfghjkjhgf');

bitcoin.createNewBlock(098765,'zxcvbnm,nbvcxcvbnm,mnbvc','lkjhgfdsdfghjkjhgfdsdfghjk');

bitcoin.createNewBlock(1234,'mnbvcxzxcvnbvcxzcvbnmnbvcx','poiuytrertyuioiuytrsty');

bitcoin.createNewTransaction(100, 'Chris', 'Jenn');

bitcoin.createNewTransaction(50,'Jenn', 'Alex');

bitcoin.createNewTransaction(25,'Alex','Carsten');

bitcoin.createNewBlock(5676,'werfghnm,kiuygfdswertghj','pokjvcxzswedfgnm,loiuyhgfdswefghu');

const previousBlockHash = 'qazcdswedcvfrtgbnhyujmki';
const currentBlockData = [
	{
		amount : 10,
		sender : 'Chris',
		receiver : 'Jenn'
	},
	{
		amount : 50,
		sender : 'Jenn',
		receiver : 'Alex'
	}
];
const nounce = 100;

console.log(bitcoin.hashBlock(previousBlockHash,currentBlockData,nounce));


//console.log(bitcoin);

//console.log('----------------------------------------------------------');

//console.log(bitcoin.getLastBlock()['transactions']);


