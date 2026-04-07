class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        temp=[]
        nums.sort()

        for i in range(0,len(nums)-1,2):
            temp.append([nums[i],nums[i+1]])
           
        t=0
        for i in temp:
            t+=min(i)
        return t