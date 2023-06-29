export interface IYearMonthDate {
  date: number;
  month: number;
  year: number;
}

export const useDateTime = () => {
  const yearMonthDate = (date: Date): IYearMonthDate => {
    return {
      date: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
    };
  };
  const isEqual = (
    a: IYearMonthDate,
    b: IYearMonthDate,
    minus: number
  ): boolean => {
    return (
      a.month === b.month && a.year === b.year && a.date - minus === b.date
    );
  };
  const returnDateFormat = (item: Date): string => {
    const date = new Date();
    const arg = new Date(item);
    const argDate = yearMonthDate(arg);
    const now = yearMonthDate(date);
    if (isEqual(now, argDate, 0)) return "오늘";
    if (isEqual(now, argDate, 1)) return "어제";
    return arg.toISOString().substring(0, 10);
  };
  return { yearMonthDate, isEqual, returnDateFormat };
};
