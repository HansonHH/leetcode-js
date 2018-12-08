/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let bigArr = [...nums1, ...nums2].sort((a, b) => a - b);
    let len = bigArr.length;

    if (!len) return 0;

    let idx = Math.floor((len - 1) / 2);
    let ret = bigArr[idx];

    if (len % 2 === 0) {
        ret = (ret + bigArr[idx + 1]) / 2;
    }

    return ret;
};
