/**
 * Date format returned shall be in format DD-MM-YYYY
 * @param date current date
 */
export const MAX_DAYS = 30;
export function getDateForNext30Days(date: Date): string[] {
  const datesArray: Date[] = [];

  for (let i = 0; i < MAX_DAYS; i++) {
    datesArray.push(new Date(date.getTime() + (i * 24 * 60 * 60 * 1000)));
  }

  return datesArray.map((nextDate) => {

    const d = nextDate.getDate();
    const m = nextDate.getMonth() + 1; // Month from 0 to 11
    const y = nextDate.getFullYear();
    return `${d <= 9 ? '0' + d : d}-${m <= 9 ? '0' + m : m}-${y}`;
  });
}
