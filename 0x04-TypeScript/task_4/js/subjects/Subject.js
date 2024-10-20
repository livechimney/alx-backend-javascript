/// <regerence path="Teacher.ts" />

namespace Subjects {
    export class Subject{
        teacher: Subjects.Teacher;

        setTeacher = (teacher: Teacher) => {
            this.teacher = teacher;
        }
    }
}
