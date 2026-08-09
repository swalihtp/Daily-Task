class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = set()
        for i in range(len(nums)):
            if i == 0:
                seen.add(nums[i])
                continue
            need = target - nums[i]
            if need in seen:
                return [nums.index(need),i]
            else:
                seen.add(nums[i])