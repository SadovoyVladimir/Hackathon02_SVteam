export function getMembersIdInLocalStorage(localStorageKey) {
  let members = []
  const dataFromLocalStorage = localStorage.getItem(localStorageKey)

  if (dataFromLocalStorage) {
    return (members = dataFromLocalStorage.split(','))
  }
  return members
}

function sendDataToLS(localStorageKey, newArray) {
  localStorage.setItem(localStorageKey, newArray)
}

function addToLS(id) {
  let actualArr = getMembersIdInLocalStorage('favourites2')
  actualArr.push(id)
  sendDataToLS('favourites2', actualArr)
}

function removeToLS(id) {
  let actualArr = getMembersIdInLocalStorage('favourites2')
  const updateArr = actualArr.filter((el) => el !== id)
  sendDataToLS('favourites2', updateArr)
}

export function toggleMemberToLocalStorage(id) {
  let membersIds = getMembersIdInLocalStorage('favourites2')
  const findStatus = membersIds.find((el) => el == id)

  if (!findStatus) {
    addToLS(id)
  } else {
    removeToLS(id)
  }
}
