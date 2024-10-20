namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }

    export class Java extends Subjects.Subject {
        getRequirements = () => 'Here is the list of requirements for Java';

        getAvailableTeacher = () => {
            if (!this.teacher?.experienceTeachingC) {
                return 'No available teacher';
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}
