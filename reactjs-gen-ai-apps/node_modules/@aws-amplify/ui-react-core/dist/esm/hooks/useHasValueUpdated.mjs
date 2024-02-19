import { isUndefined } from '@aws-amplify/ui';
import usePreviousValue from './usePreviousValue.mjs';

/**
 * @param value `value` to track for updates
 * @param ignoreFirstRender whether to ignore initial render. defaults to `false`
 * @returns a boolean representing whether the tracked `value` has updated between renders
 *
 * Returns `false`:
 * - on initial render when ignoring first render
 * - current and previous `value` are equal
 *
 * Returns `true`:
 * - on initial render when not ignoring first render (default behavior)
 * - current and previous `value` are not equal
 */
function useHasValueUpdated(value, ignoreFirstRender = false) {
    const previous = usePreviousValue(value);
    const shouldIgnoreChange = isUndefined(previous) && ignoreFirstRender;
    if (shouldIgnoreChange) {
        return false;
    }
    return previous !== value;
}

export { useHasValueUpdated as default };
