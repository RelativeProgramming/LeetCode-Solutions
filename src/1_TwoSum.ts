
function twoSum(nums: number[], target: number): number[] {
    for(let i = 0; i < nums.length; i++) {
        let rest = target - nums[i];
        let index = nums.indexOf(rest);
        if (index !== -1 && index !== i) {
            return [i, index];
        }
    }
    return [-1, -1];
};
