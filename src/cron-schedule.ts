/**
 * Represents a cron schedule
 */
export abstract class CronSchedule {

  /**
   * Create a cron schedule which runs every minute
   */
  public static everyMinute(): CronSchedule {
    const minute = '*';
    const hour = '*';
    const day = '*';
    const month = '*';
    const weekDay = '?';

    return new class extends CronSchedule {
      public readonly expressionString: string = `${minute} ${hour} ${day} ${month} ${weekDay}`;
      public _bind() {
        return new LiteralSchedule(this.expressionString);
      }
    };
  }

  /**
   * Create a cron schedule which runs every hour
   */
  public static hourly(): CronSchedule {
    const minute = 0;
    const hour = '*';
    const day = '*';
    const month = '*';
    const weekDay = '?';

    return new class extends CronSchedule {
      public readonly expressionString: string = `${minute} ${hour} ${day} ${month} ${weekDay}`;
      public _bind() {
        return new LiteralSchedule(this.expressionString);
      }
    };
  }

  /**
   * Create a cron schedule which runs every day at midnight
   */
  public static daily(): CronSchedule {
    const minute = 0;
    const hour = 0;
    const day = '*';
    const month = '*';
    const weekDay = '?';

    return new class extends CronSchedule {
      public readonly expressionString: string = `${minute} ${hour} ${day} ${month} ${weekDay}`;
      public _bind() {
        return new LiteralSchedule(this.expressionString);
      }
    };
  }

  /**
   * Create a cron schedule which runs every week on Sunday
   */
  public static weekly(): CronSchedule {
    const minute = 0;
    const hour = 0;
    const day = '?';
    const month = '*';
    const weekDay = 0;

    return new class extends CronSchedule {
      public readonly expressionString: string = `${minute} ${hour} ${day} ${month} ${weekDay}`;
      public _bind() {
        return new LiteralSchedule(this.expressionString);
      }
    };
  }

  /**
   * Create a cron schedule which runs first day of every month
   */
  public static monthly(): CronSchedule {
    const minute = 0;
    const hour = 0;
    const day = 1;
    const month = '*';
    const weekDay = '?';

    return new class extends CronSchedule {
      public readonly expressionString: string = `${minute} ${hour} ${day} ${month} ${weekDay}`;
      public _bind() {
        return new LiteralSchedule(this.expressionString);
      }
    };
  }

  /**
   * Create a cron schedule which runs first day of January every year
   */
  public static annually(): CronSchedule {
    const minute = 0;
    const hour = 0;
    const day = 1;
    const month = 1;
    const weekDay = '?';

    return new class extends CronSchedule {
      public readonly expressionString: string = `${minute} ${hour} ${day} ${month} ${weekDay}`;
      public _bind() {
        return new LiteralSchedule(this.expressionString);
      }
    };
  }

  /**
   * Create a custom cron schedule from a set of cron fields
   */
  public static custom(options: CronOptions): CronSchedule {
    if (options.weekDay !== undefined && options.day !== undefined) {
      throw new Error('Cannot supply both \'day\' and \'weekDay\', use at most one');
    }

    const minute = fallback(options.minute, '*');
    const hour = fallback(options.hour, '*');
    const month = fallback(options.month, '*');


    // Weekday defaults to '?' if not supplied. If it is supplied, day must become '?'
    const day = fallback(options.day, options.weekDay !== undefined ? '?' : '*');
    const weekDay = fallback(options.weekDay, '?');

    return new class extends CronSchedule {
      public readonly expressionString: string = `${minute} ${hour} ${day} ${month} ${weekDay}`;
      public _bind() {
        return new LiteralSchedule(this.expressionString);
      }
    };
  }

  /**
   * Retrieve the expression for this schedule
   */
  public abstract readonly expressionString: string;

  protected constructor() {}

  /**
   *
   * @internal
   */
  public abstract _bind(): void;
}

/**
 * Options to configure a cron expression
 *
 * All fields are strings so you can use complex expressions. Absence of
 * a field implies '*' or '?', whichever one is appropriate.
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

class LiteralSchedule extends CronSchedule {
  constructor(public readonly expressionString: string) {
    super();
  }

  public _bind() {}
}

function fallback<T>(x: T | undefined, def: T): T {
  return x ?? def;
}