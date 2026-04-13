class Solution:
    def isSameAfterReversals(self, num: int) -> bool:
        reverse1 = str(num)[::-1].lstrip('0')

        if reverse1=="":
            reverse1='0'
        
        reverse2=reverse1[::-1].lstrip('0')
        if reverse2=='':
            reverse2='0'
        
        return num==int(reverse2)

        