export class Performance {
   
    constructor(userId, kind, data) {
        this.id = userId
        this.kind = kind
        this.data = data
    }
  
    translateKind = (item) => {
      switch (item) {
        case 'cardio':
          return 'Cardio';
        case 'energy':
          return 'Energie';
        case 'endurance':
          return 'Endurance';
        case 'strength':
          return 'Force';
        case 'speed':
          return 'Vitesse';
        case 'intensity':
          return 'Intensité';
        default:
          return '';
      }
    };
  
    formatPerformance = () => {
      return this.data.map((item) => ({
        subject: this.translateKind(this.kind[item.kind]),
        value: item.value,
        fullMark: 210,
      }));
    };
  }
  