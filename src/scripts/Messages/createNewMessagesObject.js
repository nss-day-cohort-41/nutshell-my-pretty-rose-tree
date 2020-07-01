const createMessageObject = (userId, message) => {
    return {
        "userId": parseInt(userId),
        "message": message,
        "date": Date.now()
    }
}

export default createMessageObject