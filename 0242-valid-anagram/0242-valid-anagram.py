class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        if len(s)!=len(t):
            return False

        lst=[0 for i in range(26)]

        for i,ch in enumerate(s):
            lst[ord(s[i])-97]+=1
            lst[ord(t[i])-97]-=1
            
        for value in lst:
            if value>0:
                return False
        return True
        