class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        temp=list(s)
        for i in t:
            if i not in temp:
                return i

            else:
                temp.remove(i)

                