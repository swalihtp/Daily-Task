class MinStack:

    def __init__(self):
        self.values = []
        self.min = []

    def push(self, value: int) -> None:

        self.values.append(value)

        if len(self.min) == 0:
            self.min.append(value)
        elif value < self.min[-1]:
            self.min.append(value)
        else:
            self.min.append(self.min[-1])
        

    def pop(self) -> None:
        self.values.pop()
        self.min.pop()

    def top(self) -> int:
        return self.values[-1]

    def getMin(self) -> int:
        if len(self.min) == 0:
            return None
        else:
            return self.min[-1]

        return self.min


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(value)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()