class Solution:
    def countPartitions(self, nums: List[int]) -> int:
        count=0
        n=len(nums)
        for i in range(n-1):
            left=nums[:i+1]
            right=nums[i+1:n]

            if (sum(left)-sum(right))%2==0:
                count+=1

        return count