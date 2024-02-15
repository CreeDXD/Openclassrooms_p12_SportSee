const Performance = (kind,data) =>{
  const translateKind = (item) => {
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

  
  return (
    
       data.map((item) => ({
        subject: translateKind(kind[item.kind]),
        value: item.value,
        fullMark: 210,
      }))
    
  )
}
export default Performance