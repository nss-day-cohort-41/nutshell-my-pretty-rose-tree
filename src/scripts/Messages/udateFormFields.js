const updateFormFields = message => {
    const hiddenMessageID = document.querySelector('#hiddenMessageId')
    const messageInput = document.querySelector('messageEntry')

    hiddenMessageID.value = message.id 
    messageInput.value = message.message
}


export default updateFormFields