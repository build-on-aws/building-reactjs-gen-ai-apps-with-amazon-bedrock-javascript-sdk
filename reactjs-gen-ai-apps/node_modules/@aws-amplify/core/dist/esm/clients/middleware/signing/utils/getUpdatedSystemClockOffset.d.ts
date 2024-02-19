/**
 * Returns the difference between clock time and the current system time if clock is skewed.
 *
 * @param clockTimeInMilliseconds Clock time in milliseconds.
 * @param currentSystemClockOffset Current system clock offset in milliseconds.
 *
 * @internal
 */
export declare const getUpdatedSystemClockOffset: (clockTimeInMilliseconds: number, currentSystemClockOffset: number) => number;
