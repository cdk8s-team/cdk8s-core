import { CronSchedule } from '../src';

describe('CronSchedule', () => {
  test('cron expression for running every minute', () => {
    expect('* * * * ?').toEqual(CronSchedule.everyMinute().expressionString);
  });

  test('cron expression for running every hour', () => {
    expect('0 * * * ?').toEqual(CronSchedule.hourly().expressionString);
  });

  test('cron expression for running every day', () => {
    expect('0 0 * * ?').toEqual(CronSchedule.daily().expressionString);
  });

  test('cron expression for running every week', () => {
    expect('0 0 ? * 0').toEqual(CronSchedule.weekly().expressionString);
  });

  test('cron expression for running every month', () => {
    expect('0 0 1 * ?').toEqual(CronSchedule.monthly().expressionString);
  });

  test('cron expression for running every year', () => {
    expect('0 0 1 1 ?').toEqual(CronSchedule.annually().expressionString);
  });

  test('cron expressions day and dow are mutex: given weekday', () => {
    // Run every 10 minutes Monday through Friday
    expect('0/10 * ? * MON-FRI').toEqual(CronSchedule.custom({
      minute: '0/10',
      weekDay: 'MON-FRI',
    }).expressionString);
  });

  test('cron expressions day and dow are mutex: given month day', () => {
    // Run at 8:00 am (UTC) every 1st day of the month
    expect('0 8 1 * ?').toEqual(CronSchedule.custom({
      minute: '0',
      hour: '8',
      day: '1',
    }).expressionString);
  });

  test('cron expressions day and dow are mutex: given neither', () => {
    // Run at 10:00 am (UTC) every day
    expect('0 10 * * ?').toEqual(CronSchedule.custom({
      minute: '0',
      hour: '10',
    }).expressionString);
  });
});