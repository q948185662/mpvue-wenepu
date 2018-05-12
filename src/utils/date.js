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

export {
  getCurrentDate
}
