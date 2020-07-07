const createNewsObj = (userId, name, date, location) => {
    return {
      userId: parseFloat(userId),
      name,
      date: new Date(date.split('-')).toLocaleDateString(),
      location
    }
  }
  
export default createNewsObj