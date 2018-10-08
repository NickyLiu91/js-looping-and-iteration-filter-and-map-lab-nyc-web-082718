// Code your solution here:
function driversWithRevenueOver(drivers, revenueArg) {
return drivers.filter(function(driver) {
  return driver.revenue > revenueArg
})
}

function driverNamesWithRevenueOver(drivers, revenueArg) {
  return driversWithRevenueOver(drivers, revenueArg).map(function(driver){
    return driver.name
  })
}

function exactMatch(drivers, object) {
  return drivers.filter(function(driver) {
    return driver[Object.keys(object)[0]] === Object.values(object)[0]
  })
}

function exactMatchToList(drivers, object) {
  return exactMatch(drivers, object).map(function(driver){
    return driver.name
  })
}
