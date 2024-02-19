"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSpawn = void 0;
var xstate_1 = require("xstate");
var useConstant_1 = require("./useConstant");
/**
 * React hook that spawns an `ActorRef` with the specified `behavior`.
 * The returned `ActorRef` can be used with the `useActor(actorRef)` hook.
 *
 * @param behavior The actor behavior to spawn
 * @returns An ActorRef with the specified `behavior`
 */
function useSpawn(behavior) {
    var actorRef = (0, useConstant_1.default)(function () {
        return (0, xstate_1.spawnBehavior)(behavior);
    });
    return actorRef;
}
exports.useSpawn = useSpawn;
