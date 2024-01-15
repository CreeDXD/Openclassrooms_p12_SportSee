export class Activity {
  
    constructor(userId, activities) {
      this.id = userId
      this.activities = activities
    }
  
    formatActivities() {
      return this.activities.map((activity) => ({
        ...activity,
        day: activity.day.substring(activity.day.length - 1),
      }));
    }
  }
  