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

const isInDate = (startDate, endDate, date) => {
  return dateToTimeStamp(startDate) <= dateToTimeStamp(date) && dateToTimeStamp(date) <= dateToTimeStamp(endDate)
}

const fixWeek = week => {
  const { weekStartDate, weekEndDate } = week
  const [ weekStartDateArray, weekEndDateArray ] = [ weekStartDate.split('-'), weekEndDate.split('-') ]
  const [
    weekStartYear,
    weekStartMonth,
    weekStartDay,
    weekEndYear,
    weekEndMonth,
    weekEndDay
  ] = [
    Number(weekStartDateArray[0]),
    Number(weekStartDateArray[1]),
    Number(weekStartDateArray[2]) - 1,
    Number(weekEndDateArray[0]),
    Number(weekEndDateArray[1]),
    Number(weekEndDateArray[2]) - 1
  ]
  week.weekStartDate = weekStartYear + '-' + weekStartMonth + '-' + weekStartDay
  week.weekEndDate = weekEndYear + '-' + weekEndMonth + '-' + weekEndDay
  return week
}

export {
  getCurrentDate,
  dateToTimeStamp,
  isInDate,
  fixWeek
}
