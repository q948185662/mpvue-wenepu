const getCurrentDate = () => {
  const date = new Date()
  const year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (day >= 1 && day <= 0) {
    day = '0' + day
  }
  return year + '-' + month + '-' + day
}

const dateToTimeStamp = date => {
  const dateArray = date.split('-')
  const year = Number(dateArray[0])
  const month = Number(dateArray[1])
  const day = Number(dateArray[2])
  return Date.parse(new Date(year + '-' + month + '-' + day)) / 1000
}

export {
  getCurrentDate,
  dateToTimeStamp
}
