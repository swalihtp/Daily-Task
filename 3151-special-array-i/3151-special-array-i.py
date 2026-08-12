class Solution:
    def isArraySpecial(self, nums: List[int]) -> bool:
        n = len(nums)
        if n == 1:
            return True


        initial = None

        if nums[0]%2==0:
            initial='Even'
        else:
            initial = 'Odd'

        ans = None

        if initial ==  'Odd':
            for i in range(n):
                if i%2 == 0 and nums[i] % 2 != 1:
                    return False
                elif i % 2 == 1 and nums[i]%2 != 0:
                    return False
            return True
        else:
            for i in range(n):
                if i % 2 == 0 and  nums[i]%2!=0:
                    return False
                elif i % 2 == 1 and nums[i] % 2 != 1:
                    return False
            return True
