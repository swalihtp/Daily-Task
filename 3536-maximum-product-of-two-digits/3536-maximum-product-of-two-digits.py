class Solution:
    def maxProduct(self, n: int) -> int:
        large = 0
        second_large = 0

        while n > 0:
            digit = n%10
            n = n // 10
            
            if digit >= large:
                second_large = large
                large = digit
            elif digit > second_large:
                second_large = digit



        return large*second_large

