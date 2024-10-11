namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;
    }

    export class Cpp extends Subjects.Subject {
        getRequirements = () => 'Here is the list of requirements for Cpp';

        getAvailableTeacher = () => {
            if (!this.teacher?.experienceTeachingC) {
                return 'No available teacher';
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}
