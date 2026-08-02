class Solution:
    def stoneGame(self, piles: List[int]) -> bool:
        return len(piles)%2 == 0