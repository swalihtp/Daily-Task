class Solution:
    def canBeEqual(self, target: List[int], arr: List[int]) -> bool:
        for num in target:
            if num not in arr:
                return False
            arr.remove(num)
        return True