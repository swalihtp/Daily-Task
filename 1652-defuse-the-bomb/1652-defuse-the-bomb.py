class Solution:
    def decrypt(self, code: List[int], k: int) -> List[int]:
        ans = []
        n = len(code)
        for i in range(n):
            if k > 0:
                temp =0
                for j in range(1,k+1):
                    temp+=code[(i+j)%n]
                ans.append(temp)
            elif k < 0:
                temp = 0
                for j in range(1,abs(k)+1):
                    temp+=code[(i-j)%n]
                ans.append(temp)
            else:
                ans.append(0)

        return ans

  