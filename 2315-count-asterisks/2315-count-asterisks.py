class Solution:
    def countAsterisks(self, s: str) -> int:
        c = 0
        pc = 0

        for i in range(len(s)):
            if s[i] == '*' and pc % 2 == 0:
                c+=1

            if s[i] == '|':
                pc+=1
        
        return c