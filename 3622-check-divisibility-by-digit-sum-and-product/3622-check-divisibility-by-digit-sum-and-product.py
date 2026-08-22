class Solution:
    def checkDivisibility(self, n: int) -> bool:
        digits = []
        temp = n

        while temp:
            digits.append(temp%10)
            temp = temp // 10
        
        total = sum(digits) + (self.product(digits))
        return n % total == 0

    def product(self, nums):
        result = 1
        for num in nums:
            result *= num
        return result