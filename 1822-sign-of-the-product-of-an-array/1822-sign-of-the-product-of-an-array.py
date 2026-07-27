from functools import reduce
import operator

class Solution:
    def arraySign(self, nums: List[int]) -> int:
        result = reduce(operator.mul,nums)
        if result > 0:
            return 1
        elif result < 0:
            return -1
        else:
            return 0