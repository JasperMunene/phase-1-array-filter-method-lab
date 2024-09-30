// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(drivers, driver) {
    const result = drivers.filter((name) => name.toLowerCase() === driver.toLowerCase())
    return result
}

function fuzzyMatch(drivers, driver) {
    const result = drivers.filter((name) => name.slice(0, 2).toLowerCase() === driver.toLowerCase())
    return result
}



function matchName(drivers, driver) {
    const result = drivers.filter(({name}) => name.toLowerCase() === driver.toLowerCase())
    return result
}

