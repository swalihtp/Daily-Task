class Solution:
    def splitWordsBySeparator(self, words: List[str], separator: str) -> List[str]:
        ans = []

        for word in words:
            parts  = word.split(separator)

            for part in parts:
                if part != "":
                    ans.append(part)

        return ans