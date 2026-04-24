class Solution:
    def divideArray(self, nums: List[int]) -> bool:
        n=len(nums)

        if n % 2 != 0:
            return False
        
        for i in nums:
            count_of_element = nums.count(i)
            if count_of_element%2!=0:
                return False

        return True
        