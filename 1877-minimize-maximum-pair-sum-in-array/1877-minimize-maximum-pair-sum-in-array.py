class Solution:
    def minPairSum(self, nums: List[int]) -> int:
        nums.sort()

        right=len(nums)-1
        left=0
        max=0

        while right-left>0:
            temp=nums[right]+nums[left]
            if temp>max:
                max=temp

            left+=1
            right-=1

        return max
        