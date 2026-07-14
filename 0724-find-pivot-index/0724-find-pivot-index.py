class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        n = len(nums)
        prefix = [0]*n
        prefix[0] = nums[0]

        for i in range(1,n):
            prefix[i] = prefix[i-1]+nums[i]

        

        for i in range(n):
            left = 0 if i == 0 else prefix[i-1]
            right = 0 if i == n-1 else prefix[-1] - prefix[i]
            if left == right:
                return i
        
        return -1
