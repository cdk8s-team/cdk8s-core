import { CronSchedule } from '../src';

describe('CronSchedule', () => {
  test('cron expression for running every minute', () => {
    expect(CronSchedule.everyMinute().expressionString).toEqual('* * * * *');
  });

  test('cron expression for running every hour', () => {
    expect(CronSchedule.hourly().expressionString).toEqual('0 * * * *');
  });

  test('cron expression for running every day', () => {
    expect(CronSchedule.daily().expressionString).toEqual('0 0 * * *');
  });

  test('cron expression for running every week', () => {
    expect(CronSchedule.weekly().expressionString).toEqual('0 0 * * 0');
  });

  test('cron expression for running every month', () => {
    expect(CronSchedule.monthly().expressionString).toEqual('0 0 1 * *');
  });

  test('cron expression for running every year', () => {
    expect(CronSchedule.annually().expressionString).toEqual('0 0 1 1 *');
  });

  test('cron expressions day and dow are mutex: given weekday', () => {
    // Run every 10 minutes Monday through Friday
    expect(CronSchedule.custom({
      minute: '0/10',
      weekDay: 'MON-FRI',
    }).expressionString).toEqual('0/10 * * * MON-FRI');
  });

  test('cron expressions day and dow are mutex: given month day', () => {
    // Run at 8:00 am (UTC) every 1st day of the month
    expect(CronSchedule.custom({
      minute: '0',
      hour: '8',
      day: '1',
    }).expressionString).toEqual('0 8 1 * *');
  });

  test('cron expressions day and dow are mutex: given neither', () => {
    // Run at 10:00 am (UTC) every day
    expect(CronSchedule.custom({
      minute: '0',
      hour: '10',
    }).expressionString).toEqual('0 10 * * *');
  });
});