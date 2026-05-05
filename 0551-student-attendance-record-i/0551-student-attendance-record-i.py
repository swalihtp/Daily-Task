class Solution:
    def checkRecord(self, s: str) -> bool:
        late = 0
        absent = 0

        for i in s:
            if i =='A':
                absent+=1
            elif i =='L':
                late+=1

            if i == "A" or i =='P':
                late = 0

            

            if absent>=2:
                return False
            if late >=3 :
                return False

        return True