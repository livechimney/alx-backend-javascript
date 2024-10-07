/**
 * Retrieves a list of student locations
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String,
 * }[]} students - the list of students
 * @param {string} city - the location
 * @Return an array of objects located in a specific city
 */

export default function getStudentsByLocation(students, city) {
    return students.filter(student => student.location === city);
}
