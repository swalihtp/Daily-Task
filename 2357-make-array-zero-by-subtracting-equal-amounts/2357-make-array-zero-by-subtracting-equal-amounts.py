class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        temp=[num for num in nums if num>0]
        temp=set(temp)
        return len(temp)