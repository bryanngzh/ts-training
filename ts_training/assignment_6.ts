// Attempt 1: Reverse Mapping
// enum DaysOfWeek {
//   Monday = 1,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
//   Sunday,
// }

// const currentDate: Date = new Date();

// function getDayOfWeek(date: Date): string {
//   return DaysOfWeek[date.getDay()];
// }

// console.log(getDayOfWeek(currentDate));

// Attempt 2: Enums
enum DaysOfWeek {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

const currentDate: Date = new Date();
const currentDay = `${currentDate.getDay()}`;

const getDayOfWeek = (day: string) => {
  switch (day) {
    case "1":
      return DaysOfWeek.Monday;
    case "2":
      return DaysOfWeek.Tuesday;
    case "3":
      return DaysOfWeek.Wednesday;
    case "4":
      return DaysOfWeek.Thursday;
    case "5":
      return DaysOfWeek.Friday;
    case "6":
      return DaysOfWeek.Saturday;
    case "7":
      return DaysOfWeek.Sunday;
  }
};

console.log(getDayOfWeek(currentDay));
