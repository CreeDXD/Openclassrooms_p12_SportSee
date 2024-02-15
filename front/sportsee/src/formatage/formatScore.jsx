 //for ApiUser
 const formatScore = (score) => {
    // need to render 2 pies to display score in %
    const newScore = [ 
        {
            name: 'score',
            value: score * 100,
            fill: '#ff0000',
          },
          {
            name: 'full',
            value: 100 - score * 100,
            fill: '#fbfbfb',
          },
        ]
    return newScore
  }
  export default formatScore