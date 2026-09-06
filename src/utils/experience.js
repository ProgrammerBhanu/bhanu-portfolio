const CAREER_START = {
  year: 2022,
  month: 2,
  day: 21
};

export function getCompletedExperienceYears(today = new Date()) {
  let years = today.getFullYear() - CAREER_START.year;
  const anniversaryHasPassed =
    today.getMonth() > CAREER_START.month ||
    (today.getMonth() === CAREER_START.month &&
      today.getDate() >= CAREER_START.day);

  if (!anniversaryHasPassed) {
    years -= 1;
  }

  return Math.max(0, years);
}
