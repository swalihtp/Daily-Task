class Solution:
    def digitFrequencyScore(self, n: int) -> int:
        score = 0

        while n > 0:
            l = n%10
            score+=l
            n = n//10
            
        return score