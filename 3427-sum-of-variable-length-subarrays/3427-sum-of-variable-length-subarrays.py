class Solution:
    def subarraySum(self, nums: List[int]) -> int:
        ls=[]
        i=0
        for n in nums:
            temp=nums[max(0,i-nums[i]):i+1]
            ls.append(temp)
            i+=1

        ans=0
        for l in ls:
            ans+=sum(l)

        return ans
        