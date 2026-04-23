class Solution:
    def categorizeBox(self, length: int, width: int, height: int, mass: int) -> str:
        volume=length*width*height
        ten_four=10**4
        ten_nine=10**9

        if (length >= ten_four or width >= ten_four or height >= ten_four or volume>= ten_nine) and mass >= 100:
            return 'Both'
        elif mass >= 100:
            return 'Heavy'
        elif length >= ten_four or width >= ten_four or height >= ten_four or volume>= ten_nine:
            return 'Bulky'
        else:
            return 'Neither'
        