// for ApiUser
import caloriesIcon from './../assets/calories-icon.png';
import carbsIcon from './../assets/carbs-icon.png';
import fatIcon from './../assets/fat-icon.png';
import proteinIcon from './../assets/protein-icon.png';

const User = ( keyData ) => {
  const getKeyDataTitle = (type) => {
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

  const getKeyDataIcon = (type) => {
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

  const formattedKeyDatas = [];

  for (const [key, value] of Object.entries(keyData)) {
    const formattedKeyData = {
      icon: getKeyDataIcon(key),
      count: value,
      unit: key === 'calorieCount' ? 'kCal' : 'g',
      title: getKeyDataTitle(key),
    };
    formattedKeyDatas.push(formattedKeyData);
  }  
  
  return formattedKeyDatas;
}
export default User