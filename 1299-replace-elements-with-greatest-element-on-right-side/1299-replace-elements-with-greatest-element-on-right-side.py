class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        m = arr[-1]
        n = len(arr)-1
        for i in range(n,0,-1):
            if arr[i] > m:
                temp = arr[i]
                arr[i] = m
                m = temp
            else:
                arr[i] = m
        arr[0] = m
        arr[-1] = -1
        return arr
