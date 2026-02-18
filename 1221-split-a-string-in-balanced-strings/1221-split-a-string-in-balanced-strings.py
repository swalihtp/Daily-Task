class Solution:
    def balancedStringSplit(self, s: str) -> int:
        count=0
        i=0
        s=list(s)
        while i <len(s):
            temp=s[:i+1]
            r=temp.count('R')
            l=temp.count('L')
            
            count+=1 if r==l  else 0
            i+=1

        return count
        