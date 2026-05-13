class Solution:
    def removeStars(self, s: str) -> str:
        if '*' not in s:
            return s
        index=s.index('*')
        while index:
            s=s[:index-1]+s[index+1:]
            try:
                index=s.index('*')
            except:
                return s

    