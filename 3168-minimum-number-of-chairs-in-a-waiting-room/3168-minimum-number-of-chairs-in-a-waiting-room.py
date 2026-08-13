class Solution:
    def minimumChairs(self, s: str) -> int:
        needed = 0
        current = 0
        for c in s:
            if c == 'E':
                current+=1
            else:
                current-=1

            if current > needed:
                needed+=1
        return needed
