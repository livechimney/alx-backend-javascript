export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else this._name = name;

    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else this._length = length;

    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array of strings');
    } else {
      for (const element of students) {
        if (typeof element !== 'string') {
          throw new TypeError('Students must be an array of strings');
        }
      }
      this._students = students;
    }
  }

  // name
  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else this._name = name;
  }

  // length
  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else this._length = length;
  }

  // students
  get students() {
    return this._students;
  }

  set students(students) {
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array of strings');
    } else {
      for (const element of students) {
        if (typeof element !== 'string') {
          throw new TypeError('Students must be an array of strings');
        }
      }
      this._students = students;
    }
  }
}
