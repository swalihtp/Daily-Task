class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        x={}
        i=0
        for n in nums:
            needed=target-n
            if needed in x:
                return [x[needed],i]
            x[n]=i
            i+=1
s1=Solution()
print(s1.twoSum([2,7,11,15],9))