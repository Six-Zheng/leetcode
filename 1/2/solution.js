/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	const hashMap = new Map();
	
	for (let i = 0, n = nums.length; i < n ; i++) {
		const j = target - nums[i];
		
		if (hashMap.has(j)) {
			return [i, hashMap.get(j)];
		} else {
			hashMap.set(nums[i], i);
		}
	}
	
	return [];
};
