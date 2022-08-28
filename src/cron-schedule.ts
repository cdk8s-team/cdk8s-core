/**
 * Represents a cron schedule
 */
export class CronSchedule {
  /**
   * Create a cron schedule which runs every minute
   */
  public static everyMinute(): CronSchedule {
    return CronSchedule.custom({ minute: '*', hour: '*', day: '*', month: '*', weekDay: '*' });
  }

  /**
   * Create a cron schedule which runs every hour
   */
  public static hourly(): CronSchedule {
    return CronSchedule.custom({ minute: '0', hour: '*', day: '*', month: '*', weekDay: '*' });
  }

  /**
   * Create a cron schedule which runs every day at midnight
   */
  public static daily(): CronSchedule {
    return CronSchedule.custom({ minute: '0', hour: '0', day: '*', month: '*', weekDay: '*' });
  }

  /**
   * Create a cron schedule which runs every week on Sunday
   */
  public static weekly(): CronSchedule {
    return CronSchedule.custom({ minute: '0', hour: '0', day: '*', month: '*', weekDay: '0' });
  }

  /**
   * Create a cron schedule which runs first day of every month
   */
  public static monthly(): CronSchedule {
    return CronSchedule.custom({ minute: '0', hour: '0', day: '1', month: '*', weekDay: '*' });
  }

  /**
   * Create a cron schedule which runs first day of January every year
   */
  public static annually(): CronSchedule {
    return CronSchedule.custom({ minute: '0', hour: '0', day: '1', month: '1', weekDay: '*' });
  }

  /**
   * Create a custom cron schedule from a set of cron fields
   */
  public static custom(options: CronOptions): CronSchedule {
    return new CronSchedule(options);
  };

  /**
   * Retrieve the expression for this schedule
   */
  public readonly expressionString: string;

  constructor(cronOptions: CronOptions = {}) {
    const minute = fallback(cronOptions.minute, '*');
    const hour = fallback(cronOptions.hour, '*');
    const month = fallback(cronOptions.month, '*');
    const day = fallback(cronOptions.day, '*');
    const weekDay = fallback(cronOptions.weekDay, '*');

    this.expressionString = `${minute} ${hour} ${day} ${month} ${weekDay}`;
  }
}

/**
 * Options to configure a cron expression
 *
 * All fields are strings so you can use complex expressions. Absence of
 * a field implies '*'
 */
export interface CronOptions {
  /**
   * The minute to run this rule at
   *
   * @default - Every minute
   */
  readonly minute?: string;

  /**
   * The hour to run this rule at
   *
   * @default - Every hour
   */
  readonly hour?: string;

  /**
   * The day of the month to run this rule at
   *
   * @default - Every day of the month
   */
  readonly day?: string;

  /**
   * The month to run this rule at
   *
   * @default - Every month
   */
  readonly month?: string;

  /**
   * The day of the week to run this rule at
   *
   * @default - Any day of the week
   */
  readonly weekDay?: string;
}

function fallback<T>(x: T | undefined, def: T): T {
  return x ?? def;
}