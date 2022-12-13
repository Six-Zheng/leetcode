/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
	let state = 0;
	
	for (let i = 0, n = sentence.length; i < n; i++) {
		const c = sentence[i];
	
		state |= 1 << (c.charCodeAt() - 'a'.charCodeAt());
	}
	
	return state == (1 << 26) - 1;
};
