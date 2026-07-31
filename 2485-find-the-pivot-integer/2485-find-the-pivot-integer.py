class Solution:
    def pivotInteger(self, n: int) -> int:
        prefix = [0] * n
        prefix[0]  = 1
        
        for i in range(1,n):
            prefix[i] = prefix[i-1] +i+1

        total = prefix[-1]
        
        for i in range(n):

            left_sum = prefix[i]
            right_sum = total - (prefix[i-1] if i > 0 else 0)
            if left_sum == right_sum:
                return i+1

        return -1
