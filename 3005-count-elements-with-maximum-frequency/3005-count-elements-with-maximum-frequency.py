class Solution:
    def maxFrequencyElements(self, nums: List[int]) -> int:
        f={}

        for n in nums:
            if str(n) in f:
                f[str(n)]=f[str(n)]+1
            else:
                f[str(n)]=1

        # print(f)


        m=max(f.values())
        count=0
        for item in f:
            if f[item]==m:
                count+=1

        return count*m

        