class Solution:
    def clearDigits(self, s: str) -> str:
        ans = ""

        for i in range(len(s)):
            if s[i].isdigit():
                if len(ans) > 0:
                    ans = ans[:-1]
            else:
                ans+=s[i]

        return ans