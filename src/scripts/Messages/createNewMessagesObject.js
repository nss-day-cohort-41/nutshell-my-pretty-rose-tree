// creates object when user makes a new message to POST

const createMessageObject = (userId, message) => {
    return {
        "userId": parseInt(userId),
        "message": message,
        "date": Date.now()
    }
}

export default createMessageObject