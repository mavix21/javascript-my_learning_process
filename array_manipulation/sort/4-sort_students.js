#!/usr/bin/node

function sortStudents (students) {
  return students.sort((firstStudent, secondStudent) => {
    if (firstStudent.graduated !== secondStudent.graduated) {
      return firstStudent.graduated ? -1 : 1;
    }

    return (secondStudent.grade - firstStudent.grade);
  });
}

module.exports = sortStudents;
