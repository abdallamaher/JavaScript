/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    const map: Map<number, number> = new Map();
    let result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        const match = map.get(target - cur);
        if (match != undefined) {
            result = [match, i];
        }
        map.set(cur, i);
    }

    return result;
};
// @lc code=end

