from functools import reduce

class Solution:
    def minElement(self, nums: List[int]) -> int:
        temp=[]
        for i in nums:
            string = str(i)
            numsum = reduce(lambda total, value: total + int(value), string,0)
            temp.append(numsum)

        return min(temp)

