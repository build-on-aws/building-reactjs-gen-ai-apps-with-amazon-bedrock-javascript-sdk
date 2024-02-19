import { spawnBehavior } from 'xstate';
import useConstant from './useConstant';
/**
 * React hook that spawns an `ActorRef` with the specified `behavior`.
 * The returned `ActorRef` can be used with the `useActor(actorRef)` hook.
 *
 * @param behavior The actor behavior to spawn
 * @returns An ActorRef with the specified `behavior`
 */
export function useSpawn(behavior) {
    var actorRef = useConstant(function () {
        return spawnBehavior(behavior);
    });
    return actorRef;
}
