class Node:
    def __init__(self,val):
        self.value = val
        self.next = None



class MyLinkedList:

    def __init__(self):
        self.head = None

        

    def get(self, index: int) -> int:
        if self.head is None:
            return -1
        
        i = 0
        current = self.head

        while current:
            if i == index:
                return current.value
            else:
                i+=1
                current = current.next

        return -1
        

    def addAtHead(self, val: int) -> None:
        node =  Node(val)
        if self.head is None:
            self.head = node
        else:
            node.next = self.head
            self.head = node
            

    def addAtTail(self, val: int) -> None:
        node = Node(val)
        if self.head is None:
            self.head = node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = node

    def addAtIndex(self, index: int, val: int) -> None:
        node = Node(val)

        if index == 0:
            node.next = self.head
            self.head = node
            return

        if self.head is None:
            return

        current = self.head
        i = 0

        while current and i < index - 1:
            current = current.next
            i += 1

        if current is None:
            return

        node.next = current.next
        current.next = node
            
    def deleteAtIndex(self, index: int) -> None:

        if self.head is None:
            return
        elif index == 0 and self.head and self.head.next:
            self.head = self.head.next
        elif index == 0 and self.head:
            self.head = None
        else:
            i = 1
            current = self.head.next
            previous = self.head

            while current:
                if i == index:
                    previous.next = current.next
                    break
                else:
                    i+=1
                    previous = current
                    current = current.next
        


# Your MyLinkedList object will be instantiated and called as such:
# obj = MyLinkedList()
# param_1 = obj.get(index)
# obj.addAtHead(val)
# obj.addAtTail(val)
# obj.addAtIndex(index,val)
# obj.deleteAtIndex(index)