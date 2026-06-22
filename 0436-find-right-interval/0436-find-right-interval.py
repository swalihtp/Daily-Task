from bisect import bisect_left

class Solution:
    def findRightInterval(self, intervals: List[List[int]]) -> List[int]:
        # Store (start, original_index)
        starts = []

        for i, interval in enumerate(intervals):
            starts.append((interval[0], i))

        # Sort by start value
        starts.sort()

        # Extract only start values
        start_values = [start for start, _ in starts]

        result = []

        # Process every interval
        for start, end in intervals:

            # Find first start >= end
            pos = bisect_left(start_values, end)

            # No suitable interval
            if pos == len(starts):
                result.append(-1)

            # Get original index
            else:
                result.append(starts[pos][1])

        return result