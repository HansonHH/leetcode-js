/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const m = new Map()

    for (let i = 0; i < nums.length; i++) {
        const r = target - nums[i]
        if (m.has(r)) {
            return [m.get(r), i]
        }
        m.set(nums[i], i)
    }
};