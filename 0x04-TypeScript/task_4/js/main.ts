export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();
export const cTeacher: Subjects.Teacher = {
    firstName: 'Dennis',
    lastName: 'Ritchie',
    experienceTeachingC: 10,
};

// Set the teacher for C++
cpp.setTeacher(cTeacher);
console.log('C++ Requirements:', cpp.getRequirements());
console.log('C++ Available Teacher:', cpp.getAvailableTeacher());

// Set the teacher for Java
java.setTeacher(cTeacher);
console.log('Java Requirements:', java.getRequirements());
console.log('Java Available Teacher:', java.getAvailableTeacher());

// Set the teacher for React
react.setTeacher(cTeacher);
console.log('React Requirements:', react.getRequirements());
console.log('React Available Teacher:', react.getAvailableTeacher());
