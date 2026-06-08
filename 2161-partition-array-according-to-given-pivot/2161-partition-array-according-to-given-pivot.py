class Solution:
    def pivotArray(self, nums: List[int], pivot: int) -> List[int]:
        b = [num for num in nums if num < pivot]
        e = [num for num in nums if num == pivot]
        a = [num for num in nums if num > pivot]

        ans = [*b,*e, *a]
        return ans