class Solution:
    def flipAndInvertImage(self, image: List[List[int]]) -> List[List[int]]:
        ans=[]
        n=len(image)
        for i in range(n):
            temp=[1 if x==0 else 0 for x in image[i][::-1]]
            ans.append(temp)

        return ans

        