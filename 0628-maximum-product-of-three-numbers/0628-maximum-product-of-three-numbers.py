class Solution:
    def maximumProduct(self, nums: List[int]) -> int:
        nums.sort()

        opt_1 = nums[-1]*nums[-2]*nums[-3]
        opt_2 = nums[0]*nums[1]*nums[-1]

        return max(opt_1,opt_2)