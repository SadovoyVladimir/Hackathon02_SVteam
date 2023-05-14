const LOCAL_STORAGE_KEY = 'favourite'

export function getMembersIdInLocalStorage() {
  let members = []
  const dataFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY)

  if (dataFromLocalStorage) {
    return (members = dataFromLocalStorage.split(','))
  }
  return members
}

function sendDataToLS(newArray) {
  localStorage.setItem(LOCAL_STORAGE_KEY, newArray)
}

function addToLS(id) {
  let actualArr = getMembersIdInLocalStorage()
  actualArr.push(id)
  sendDataToLS(actualArr)
}

function removeFromLS(id) {
  let actualArr = getMembersIdInLocalStorage()
  const updateArr = actualArr.filter((el) => el !== id)
  if (updateArr.length) {
    sendDataToLS(updateArr)
  } else {
    localStorage.removeItem(LOCAL_STORAGE_KEY)
  }
}

export function toggleMemberToLocalStorage(id) {
  let membersIds = getMembersIdInLocalStorage()
  const findStatus = membersIds.find((el) => el === id)

  if (!findStatus) {
    addToLS(id)
  } else {
    removeFromLS(id)
  }
}
