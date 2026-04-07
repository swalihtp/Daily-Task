class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        nums.sort()
        t=0

        for i in range(0,len(nums)-1,2):
            t+=min(nums[i],nums[i+1])
           
     
        return t