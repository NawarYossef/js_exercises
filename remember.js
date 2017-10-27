function remember(str) {
	let repeatArr = [];
	let r = str.split('').map(function(letter){
		str.lastIndexOf(letter) !== str.indexOf(letter) ? letter : null;
	})
	return r 
}



remember("apple") => returns ["p"]
remember("apPle") => returns []          # no repeats, "p" != "P"
remember("pippi") => returns ["p","i"]   # show "p" only once
remember('Pippi') => returns ["p","i"]   # "p" is repeated first