const formatDates = (aDate) => {
  const newDate = new Date(aDate).toLocaleString()
  return newDate.slice(0, 17)
}

const formatBool = (val) => {
  return val ? "Y" : "N"
}

const getOportunities = (val) => {
  return val.oportunities?.items ? val.oportunities.items.length : 0
}

export { formatDates, formatBool, getOportunities}