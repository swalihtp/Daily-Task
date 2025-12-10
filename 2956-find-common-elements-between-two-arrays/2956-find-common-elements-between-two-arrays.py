class Solution(object):
    def findIntersectionValues(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
        count1=0
        count2=0
        for num in nums1:
            if num in nums2:
                count1+=1
        for num in nums2:
            if num in nums1:
                count2+=1
        return [count1,count2]
        