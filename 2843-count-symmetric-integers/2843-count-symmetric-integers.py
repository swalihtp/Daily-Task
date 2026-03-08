class Solution:
    def countSymmetricIntegers(self, low: int, high: int) -> int:
        if high<11:
            return 0
        count=0
        for i in range(low,high+1):
            temp=str(i)
            if len(temp)%2==1:
                continue
            else:
                first_half=temp[:len(temp)//2]
                second_half=temp[len(temp)//2:len(temp)]
                if sum(map(int,first_half))==sum(map(int,second_half)):
                    count+=1
        return count


        