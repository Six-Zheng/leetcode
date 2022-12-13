/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
	const length = sentence.length;
	
	if (26 <= length) {
		const exist = new Array(26).fill(false);
		
		for (let i = 0; i < length; i++) {
			const c = sentence[i];
			exist[c.charCodeAt() - 'a'.charCodeAt()] = true;
		}
		
		for (const x of exist) {
			if (!x) {
				return false;
			}
		}
		
		return true;
	} else {
		return false;
	}
};
