class Solution:
    def trafficSignal(self, timer: int) -> str:
        match timer:
            case 0:
                return 'Green'
            case 30:
                return "Orange"
            case _ if timer > 30 and timer <= 90:
                return "Red"
            case _ :
                return "Invalid"