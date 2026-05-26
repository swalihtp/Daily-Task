class Solution:
    def greatestLetter(self, s: str) -> str:
        ls = []

        for i in s:
            if i.lower() in s and i.upper() in s:
                ls.append(i.upper())

        if len(ls)> 0:
            ls.sort()
            return ls[-1]

        return ""
                    
        