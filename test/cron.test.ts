import { CronOptions, Cron } from '../src';

describe('Cron', () => {
  test('cron expression for running every minute', () => {
    expect(Cron.everyMinute().expressionString).toEqual('* * * * *');
  });

  test('cron expression for running every hour', () => {
    expect(Cron.hourly().expressionString).toEqual('0 * * * *');
  });

  test('cron expression for running every day', () => {
    expect(Cron.daily().expressionString).toEqual('0 0 * * *');
  });

  test('cron expression for running every week', () => {
    expect(Cron.weekly().expressionString).toEqual('0 0 * * 0');
  });

  test('cron expression for running every month', () => {
    expect(Cron.monthly().expressionString).toEqual('0 0 1 * *');
  });

  test('cron expression for running every year', () => {
    expect(Cron.annually().expressionString).toEqual('0 0 1 1 *');
  });

  test('custom schedule cron expression', () => {
    const expression: CronOptions = {
      minute: '5',
      hour: '*',
      day: '2',
      month: '*',
      weekDay: '*',
    };
    expect(Cron.schedule(expression).expressionString).toEqual('5 * 2 * *');
  });

  test('custom schedule cron expression using default initialization', () => {
    const cron = new Cron();
    expect(cron.expressionString).toEqual('* * * * *');
  });

  test('custom schedule cron expression using initialization', () => {
    const expression: CronOptions = {
      minute: '5',
      hour: '*',
      day: '2',
      month: '*',
      weekDay: '*',
    };

    const cron = new Cron(expression);
    expect(cron.expressionString).toEqual('5 * 2 * *');
  });
});