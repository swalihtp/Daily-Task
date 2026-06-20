class Solution:
    def arrangeCoins(self, n: int) -> int:
        row = 0
        i=1
        while i<=n:
            row+=1
            n-=i
            i+=1
        return row