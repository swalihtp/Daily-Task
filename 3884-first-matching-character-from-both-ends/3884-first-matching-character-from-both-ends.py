class Solution:
    def firstMatchingIndex(self, s: str) -> int:
        if len(s) == 1:
            return 0
        n=len(s)
        for i in range(n-1):
            if s[i] == s[n-i-1]:
                return i
        return -1