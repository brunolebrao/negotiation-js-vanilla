class DateHelper {
  constructor() {
    throw new Error('This class cannot be instantiated');
  }

  static dateForText(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }
  static textForDate(text) {
    if (!/\d{4}-\d{2}-\d{2}/.test(text))
      throw new Error('Date must be in format yyyy-MM-dd');
    return new Date(
      ...text.split('-').map((item, index) => (index === 1 ? item - 1 : item))
    );
  }
}
