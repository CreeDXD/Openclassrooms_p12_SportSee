import caloriesIcon from './../assets/calories-icon.png';
import carbsIcon from './../assets/carbs-icon.png';
import fatIcon from './../assets/fat-icon.png';
import proteinIcon from './../assets/protein-icon.png';

export class User {

  constructor(userId, userInfos, score, keyData) {
    this.id = userId
    this.userInfos = userInfos
    this.score = score
    this.keyData = keyData
  }

  userInfos() {
    return this.userIfos;
  }

    /**
     * Get score data for Pie Chart
     * @returns {Object[]} The score data formated for pie chart
     */
  formatScore() {
    // need to render 2 pies to display score in %
    return [
      {
        name: 'score',
        value: this.score * 100,
        fill: '#ff0000',
      },
      {
        name: 'full',
        value: 100 - this.score * 100,
        fill: '#fbfbfb',
      },
    ];
  }


  getKeyDataTitle(type) {
    switch (type) {
      case 'calorieCount':
        return 'Calories';
      case 'proteinCount':
        return 'Proteines';
      case 'carbohydrateCount':
        return 'Glucides';
      case 'lipidCount':
        return 'Lipides';
      default:
        return '';
    }
  }


  getKeyDataIcon(type) {
    switch (type) {
      case 'calorieCount':
        return caloriesIcon;
      case 'proteinCount':
        return proteinIcon;
      case 'carbohydrateCount':
        return carbsIcon;
      case 'lipidCount':
        return fatIcon;
      default:
        return '';
    }
  }

  formatKeyData() {
    const formattedKeyDatas = [];
    for (const [key, value] of Object.entries(this.keyData)) {
      const formattedKeyData = {
        icon: this.getKeyDataIcon(key),
        count: value,
        unit: key === 'calorieCount' ? 'kCal' : 'g',
        title: this.getKeyDataTitle(key),
      };
      formattedKeyDatas.push(formattedKeyData);
    }
    return formattedKeyDatas;
  }
}
