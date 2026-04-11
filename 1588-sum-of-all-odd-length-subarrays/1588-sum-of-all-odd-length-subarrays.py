class Solution:
    def sumOddLengthSubarrays(self, arr: list[int]) -> int:
        t=0
        n=len(arr)
        i=0
        j=i+1
        flag=True
        while flag:
            temp=arr[i:j]
            print(temp)
            if len(temp)%2!=0:
                t+=sum(temp)
                j+=1
            else:
                j+=1
            if i==n-1:
                return t
            if j==n+1:
                i+=1
                j=i+1
            
          
        
                
        