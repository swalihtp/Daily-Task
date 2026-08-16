class Solution:
    def areOccurrencesEqual(self, s: str) -> bool:
        dic = {}
        for c in s:
            if c in dic:
                continue
            c_count = s.count(c)
            dic[c] = c_count

        temp = dic[s[0]]
        for key in dic:
            if dic[key] != temp:
                return False
        return True