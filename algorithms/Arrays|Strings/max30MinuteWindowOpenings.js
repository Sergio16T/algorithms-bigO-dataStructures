
const config = {
  startTime: '09:00',
  endTime: '17:00',
};
const meetings = [
  {
    startTime: '09:15',
    duration: 30,
  },
  {
    startTime: '10:00',
    duration: 60,
  },
  {
    startTime: '11:30',
    duration: 60,
  },
  {
    startTime: '13:00',
    duration: 60,
  },
  {
    startTime: '15:00',
    duration: 90,
  },
];

// 5 available meetings

const maxAvailableMeetings = (meetings, config) => {
  let prev = (Number(config.startTime.substring(0, 2)) * 60 ) + Number(config.startTime.substring(3));
  const end = (Number(config.endTime.substring(0, 2)) * 60) + Number(config.endTime.substring(3));
  let maxAvailableMeetings = 0;

  for (let i = 0; i < meetings.length; i++) {
    const appointment = meetings[i];
    const startTimeInMinutes =  (Number(appointment.startTime.substring(0, 2)) * 60) + Number(appointment.startTime.substring(3));
    maxAvailableMeetings += determineNumberOfOpenings(startTimeInMinutes, prev);
    prev = startTimeInMinutes + appointment.duration;
  }
  maxAvailableMeetings += determineNumberOfOpenings(end, prev);

  return maxAvailableMeetings;
}

/**
 * @function determineNumberOfOpenings
 * @param {*} t1 upper bound
 * @param {*} t2 lower bound
 * @returns number of 30 minute openings between t1 & t2
 */
function determineNumberOfOpenings(t1, t2) {
  const gapBetweenMeetings = t1 - t2;
  return Math.floor(gapBetweenMeetings / 30);
}


console.log(maxAvailableMeetings(meetings, config)); // 5