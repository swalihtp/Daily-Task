class Solution:
    def mostFrequentEven(self, nums: List[int]) -> int:
        even_numbers = [ i for i in nums if i % 2 == 0]
        freq = {}
        for i in even_numbers:
            if i in freq:
                freq[i] = freq[i]+1
            else:
                freq[i]=1

        ans = []
        for i in freq:
            if len(ans) == 0:
                ans.append((int(i),freq[i]))

            elif freq[i] > ans[-1][1]:
                ans = [(int(i),freq[i])]

            elif freq[i] == ans[-1][1]:
                ans.append((int(i),freq[i]))
            else:
                continue
        lg_of_ans = len(ans)
        if lg_of_ans == 0:
            return -1
        elif lg_of_ans > 1:
            temp = [ i[0] for i in ans]
            return min(temp)
        else:
            return ans[0][0]

        