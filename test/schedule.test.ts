import { Duration, Schedule } from '../src';

describe('schedule', () => {
  test('cron expressions day and dow are mutex: given weekday', () => {
    // Run every 10 minutes Monday through Friday
    expect('cron(0/10 * ? * MON-FRI *)').toEqual(Schedule.cron({
      minute: '0/10',
      weekDay: 'MON-FRI',
    }).expressionString);
  });

  test('cron expressions day and dow are mutex: given month day', () => {
    // Run at 8:00 am (UTC) every 1st day of the month
    expect('cron(0 8 1 * ? *)').toEqual(Schedule.cron({
      minute: '0',
      hour: '8',
      day: '1',
    }).expressionString);
  });

  test('cron expressions day and dow are mutex: given neither', () => {
    // Run at 10:00 am (UTC) every day
    expect('cron(0 10 * * ? *)').toEqual(Schedule.cron({
      minute: '0',
      hour: '10',
    }).expressionString);
  });

  test('rate cannot be 0', () => {
    expect(() => {
      Schedule.rate(Duration.days(0));
    }).toThrow(/Duration cannot be 0/);
  });

  test('rate cannot be negative', () => {
    expect(() => {
      Schedule.rate(Duration.minutes(-2));
    }).toThrow(/Duration amounts cannot be negative/);
  });

  test('rate can be in minutes', () => {
    expect('rate(10 minutes)').toEqual(
      Schedule.rate(Duration.minutes(10))
        .expressionString);
  });

  test('rate can be in days', () => {
    expect('rate(10 days)').toEqual(
      Schedule.rate(Duration.days(10))
        .expressionString);
  });

  test('rate can be in hours', () => {
    expect('rate(10 hours)').toEqual(
      Schedule.rate(Duration.hours(10))
        .expressionString);
  });

  test('rate can be in seconds', () => {
    expect('rate(2 minutes)').toEqual(
      Schedule.rate(Duration.seconds(120))
        .expressionString);
  });
});

describe('fractional minutes checks', () => {
  test('rate cannot be a fractional amount of minutes (defined with seconds)', () => {
    expect(() => {
      Schedule.rate(Duration.seconds(150));
    }).toThrow(/cannot be converted into a whole number of/);
  });

  test('rate cannot be a fractional amount of minutes (defined with minutes)', () => {
    expect(()=> {
      Schedule.rate(Duration.minutes(5/3));
    }).toThrow(/must be a whole number of/);
  });

  test('rate cannot be a fractional amount of minutes (defined with hours)', () => {
    expect(()=> {
      Schedule.rate(Duration.hours(1.03));
    }).toThrow(/cannot be converted into a whole number of/);
  });

  test('rate cannot be less than 1 minute (defined with seconds)', () => {
    expect(() => {
      Schedule.rate(Duration.seconds(30));
    }).toThrow(/'30 seconds' cannot be converted into a whole number of minutes./);
  });

  test('rate cannot be less than 1 minute (defined with minutes as fractions)', () => {
    expect(() => {
      Schedule.rate(Duration.minutes(1/2));
    }).toThrow(/must be a whole number of/);
  });

  test('rate cannot be less than 1 minute (defined with minutes as decimals)', () => {
    expect(() => {
      Schedule.rate(Duration.minutes(0.25));
    }).toThrow(/must be a whole number of/);
  });
});