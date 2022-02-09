/**
 * Given a list of appointment bookings with beginning and end times, expressed as hours from 0 to 23,
 * write a function that returns a list of all the unique appointments that are in conflict with each other,
 * i.e. have overlapping start and end times
 */
function findScheduleConflicts(schedules) {
  let sorted = schedules.sort((a, b) => a[0] - b[0]);
  let conflicts = new Set();

  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i + 1][0] < sorted[i][1]) {
      conflicts.add(sorted[i]);
    } else {
      conflicts.add(sorted[i + 1]);
    }
  }

  return conflicts;
}

let schedule = [
  [2, 3],
  [1, 2],
  [3, 5],
  [4, 6],
];

console.log(findScheduleConflicts(schedule));
