function distanceFromHqInBlocks(location) {
  return Math.abs(location - 42);
}

function distanceFromHqInFeet(location) {
  return Math.abs(location - 42) * 264;
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(end - start) * 264;
}

function convertCentToDollarsAndCents(cents) {
  let dollars = Math.floor(cents / 100);
  let remainingCents = cents % 100;
  let results = ${dollars}.${remainingCents.toString().padStart(2, "0")};

  return parseFloat(results);
}

function calculatesFarePrice(start, end) {
  const distance = distanceTravelledInFeet(start, end);
  if (distance < 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return convertCentToDollarsAndCents((distance - 400) * 2);
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}