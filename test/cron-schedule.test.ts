import { CronOptions, CronSchedule } from '../src';

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

  test('custom cron expression', () => {
    const expression: CronOptions = {
      minute: '5',
      hour: '*',
      day: '2',
      month: '*',
      weekDay: '*',
    };
    expect(CronSchedule.custom(expression).expressionString).toEqual('5 * 2 * *');
  });

  test('custom cron expression using default initialization', () => {
    const cronSchedule = new CronSchedule();
    expect(cronSchedule.expressionString).toEqual('* * * * *');
  });

  test('custom cron expression using initialization', () => {
    const expression: CronOptions = {
      minute: '5',
      hour: '*',
      day: '2',
      month: '*',
      weekDay: '*',
    };

    const cronSchedule = new CronSchedule(expression);
    expect(cronSchedule.expressionString).toEqual('5 * 2 * *');
  });
});