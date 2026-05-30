class Solution:
    def topStudents(self, positive_feedback: List[str], negative_feedback: List[str], report: List[str], student_id: List[int], k: int) -> List[int]:
        positive_feedback = set(positive_feedback)
        negative_feedback = set(negative_feedback)
        students = {}
        for i in range(len(student_id)):
            st_id =  student_id[i]
            rpt = report[i].split()

            for word in rpt:
                if word in positive_feedback:
                    if student_id[i] in students:
                        students[student_id[i]] =  students[student_id[i]]+3

                    else:
                        students[student_id[i]] = 3
                elif word in negative_feedback:
                    if student_id[i] in students:
                        students[student_id[i]] =  students[student_id[i]]-1

                    else:
                        students[student_id[i]] = -1
                else:
                    if student_id[i] in students:
                        students[student_id[i]] =  students[student_id[i]]
                    else:
                        students[student_id[i]] = 0

        s = list(sorted(students.items(), key=lambda item:(-item[1],item[0])))[:k]
        ans= [student_id for student_id, score in s]
        return ans