class Solution:
    def minimumBoxes(self, apple: List[int], capacity: List[int]) -> int:
        total_apples=sum(apple)
        capacity.sort(reverse=True)
        for i in range(len(capacity)):
            temp=sum(capacity[:i+1])
            if   temp >= total_apples:
                return i+1