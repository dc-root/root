'use stric'

let sumNumberInArg=0;
const flagJSON = process.argv;

flagJSON.forEach((flag) => {
	if(flagJSON.indexOf(flag) >= 2) {
		sumNumberInArg += Number(flag);
	}
});

console.log(sumNumberInArg);
