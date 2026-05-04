class Solution:
    def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
        ans = []
        for i in arr2:
            temp = [i for num in arr1 if num==i]
            ans.extend(temp)

        not_in = [num for num in arr1 if num not in arr2]
        not_in.sort()
        ans.extend(not_in)
        return ans