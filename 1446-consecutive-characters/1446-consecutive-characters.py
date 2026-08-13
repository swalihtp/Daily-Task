class Solution:
    def maxPower(self, s: str) -> int:
        if len(s) == 1:
            return 1

        great = 1
        current = 1
        temp = s[0]

        for i in range(1,len(s)):
            if s[i] != temp[-1]:
                temp = s[i]
                current = 1
            elif s[i] == temp[-1]:
                temp+=s[i]
                current+=1
            if current > great:
                great+=1
        return great

