class Solution:
    def distributeCandies(self, candyType: List[int]) -> int:
        n_2 = len(candyType) // 2
        c_unique_type = len(set(candyType))

        if c_unique_type < n_2:
            return c_unique_type
        else:
            return n_2