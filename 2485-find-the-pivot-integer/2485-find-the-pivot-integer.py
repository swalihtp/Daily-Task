class Solution:
    def pivotInteger(self, n: int) -> int:
        if n < 2:
            return 1
        prefix = [0] * n
        prefix[0]  = 1
        
        for i in range(1,n):
            prefix[i] = prefix[i-1] +i+1

        
        for i in range(n):
            if prefix[i] == prefix[-1] - prefix[i-1]:
                return i+1

        return -1
