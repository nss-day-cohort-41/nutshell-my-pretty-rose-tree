const createNewEventObj = (userId, name, date, location) => {
  return {
    userId: parseFloat(userId),
    name,
    date,
    location
  }
}

export default createNewEventObj;