class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        dic={}
        s=s.split()
        items = []

        if len(pattern) != len(s):
            return False

        for i,value in enumerate(pattern):
            if value in dic:
                if s[i] == dic[value]:
                    continue
                else:
                    return False
            elif s[i] not in items:
                dic[value]=s[i]
                items.append(s[i])
            else:
                return False

        return True