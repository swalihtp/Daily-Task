class Solution:
    def checkString(self, s: str) -> bool:
        n = len(s)
        for i in range(n-1):
            if ord(s[i]) > ord(s[i+1]):
                return False
        return True