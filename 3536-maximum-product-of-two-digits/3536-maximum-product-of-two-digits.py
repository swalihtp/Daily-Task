class Solution:
    def maxProduct(self, n: int) -> int:
        
        nums = []

        while n > 9:
            temp = n%10
            nums.append(temp)
            n = n // 10
            
        nums.append(n)
        
        products = []
        length = len(nums)
        for i in range(length):
            for j in range(i+1,length):
                products.append(nums[i]*nums[j])
        
        return max(products)