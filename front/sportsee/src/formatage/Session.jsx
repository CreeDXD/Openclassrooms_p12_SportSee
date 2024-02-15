// export class Session {

//     constructor(userId, sessions) {
//     //   (this.id = userId), (this.sessions = sessions);
//     this.id = userId
//     this.sessions = sessions
//     }

//     getDay(number) {
//       const days = {
//         1: 'L',
//         2: 'M',
//         3: 'M',
//         4: 'J',
//         5: 'V',
//         6: 'S',
//         7: 'D',
//       };
//       return days[number];
//     }
  
//     formatSessions = () => {
//       return this.sessions.map((session) => ({
//         ...session,
//         day: this.getDay(session.day),
//       }));
//     };
//   }
  const Session = (sessions) =>{
    const getDay=(number) =>{
      const days = {
        1: 'L',
        2: 'M',
        3: 'M',
        4: 'J',
        5: 'V',
        6: 'S',
        7: 'D',
      };
      return days[number];
    }
  
    return(
      sessions.map((session) => ({
        ...session,
        day: getDay(session.day),
      }))
    )
  }
  export default Session