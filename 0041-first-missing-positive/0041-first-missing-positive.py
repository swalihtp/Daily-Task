class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        m=max(nums)
        nums=[num for num in nums if num>0]
        nums=list(set(nums))

        if not nums:
            return 1 

        nums.sort()
        temp=1

        for i in nums:
            if i==temp:
                temp+=1
            else:
                return temp
        return m+1 