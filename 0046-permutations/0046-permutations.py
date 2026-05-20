class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        ans =[]
        def backtrack(current_path,used_elements):
            if len(current_path) == n:
                ans.append(current_path.copy())
                return 

            for num in nums:
                if num in used_elements:
                    continue
                current_path.append(num)
                used_elements.add(num)
                backtrack(current_path,used_elements)

                current_path.pop()
                used_elements.remove(num)

        backtrack([],set())
        return ans