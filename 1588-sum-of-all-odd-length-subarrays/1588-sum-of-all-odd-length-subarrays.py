class Solution:
    def sumOddLengthSubarrays(self, arr: List[int]) -> int:
        t=0
        n=len(arr)
        for i in range(n):
            for j in range(i,n):
                temp=arr[i:j+1]
                x=len(temp)
                if x%2!=0:
                    t+=sum(temp)
        return t
                
        