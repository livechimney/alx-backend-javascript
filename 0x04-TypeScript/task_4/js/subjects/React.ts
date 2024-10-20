namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
    }

    export class React extends Subjects.Subject {
        getRequirements = () => 'Here is the list of requirements for React';

        getAvailableTeacher = () => {
            if (!this.teacher?.experienceTeachingReact) {
                return 'No available teacher';
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}
