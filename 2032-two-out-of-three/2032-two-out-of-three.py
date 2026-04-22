class Solution:
    def twoOutOfThree(self, nums1: List[int], nums2: List[int], nums3: List[int]) -> List[int]:
        # nums1=list(set(nums1))
        # nums2=list(set(nums2))
        # nums3=list(set(nums3))
        # nums1.extend(nums2)
        # nums1.extend(nums3)
        # freq={}
        # for i in nums1:
        #     if i in freq:
        #         freq[i]+=1
        #     else:
        #         freq[i]=1

        # ans=[ int(i) for i in freq if freq[i]>1]
        # return ans
        one_two=set(nums1).intersection(nums2)
        one_three=set(nums1).intersection(nums3)
        two_three=set(nums2).intersection(nums3)
        
        return list(set([*list(one_two),*list(one_three),*list(two_three),]))

        