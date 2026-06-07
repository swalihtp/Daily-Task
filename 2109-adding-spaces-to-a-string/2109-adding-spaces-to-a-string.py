class Solution:
    def addSpaces(self, s: str, spaces: List[int]) -> str:
        result = []
        prev = 0

        for sp in spaces:
            result.append(s[prev:sp])
            result.append(" ")
            prev = sp
        
        result.append(s[prev:])

        return "".join(result)



    