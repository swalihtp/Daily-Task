class Solution:
    def reverseStr(self, s: str, k: int) -> str:
        
        for i in range(0,len(s),k*2):
            temp=s[i:i+k][::-1]
            s=s[:i]+temp+s[i+k:]


        return s
