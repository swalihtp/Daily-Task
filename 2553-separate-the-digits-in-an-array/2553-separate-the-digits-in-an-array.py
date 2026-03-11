class Solution:
    def separateDigits(self, nums: List[int]) -> List[int]:
        answer=[]
        for i in range(len(nums)):
            if nums[i] >9:
                temp=str(nums[i])
                for j in range(len(temp)):
                    answer.append(int(temp[j]))
            else:
                answer.append(nums[i])

        return answer