class Solution:
    def countSegments(self, s: str) -> int:
        import re
        s=re.sub(r"\s+", " ", s).strip()

        if len(s)==0:
            return 0

        s=s.split(" ")
        print(s)
        return len(s)
        