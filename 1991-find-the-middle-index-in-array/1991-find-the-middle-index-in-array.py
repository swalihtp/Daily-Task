class Solution:
    def findMiddleIndex(self, nums: List[int]) -> int:
        n = len(nums)
        prefix = [0]*n
        prefix[0] = nums[0]

        for i in range(1,n):
            prefix[i] = prefix[i-1]+nums[i]

        for i in range(n):
            if i == 0:
                left =0
                right = prefix[-1] - prefix[0]
            elif i == n-1:
                left = prefix[i-1]
                right = 0
            else:
                left = prefix[i-1]
                right = prefix[-1] - prefix[i] 

            if left == right:
                
                return i
        return -1
