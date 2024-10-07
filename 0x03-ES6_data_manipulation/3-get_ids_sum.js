/**
 * Retrieves the sum of all student IDs
 * @param {*} arr
 * @returns the sum of all IDs
 */


export default function getStudentIdsSum(students) {
    /* Extract student IDs from the list */
    const studentIds = students.map(student => student.id);

    /* Calculate the sum using reduce */
    const totalSum = studentIds.reduce((accumulator,
        currentId) => accumulator + currentId, 0);

    return totalSum;
}
