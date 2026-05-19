class Solution:
    def getCommon(self, nums1: List[int], nums2: List[int]) -> int:
        common_elements = set(nums1) & set(nums2)

        return min(common_elements) if common_elements else  -1