class Solution(object):
    def findMissingElements(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        lst=[]
        i=min(nums)
        large=max(nums)
        while i<large:
            if i not  in nums:
                lst.append(i)
            i+=1
        if lst:
            return lst
        else:
            return []
        
        