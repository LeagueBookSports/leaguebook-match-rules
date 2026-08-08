"use strict";
// American football (NFL) — API-NFL status short-codes + league priority.
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFL_LEAGUE_PRIORITY = exports.NFL_FINISHED_STATUSES = exports.NFL_LIVE_STATUSES = void 0;
exports.isNflLive = isNflLive;
exports.isNflFinished = isNflFinished;
exports.getNflMatchStatusOrder = getNflMatchStatusOrder;
exports.getNflLeaguePriority = getNflLeaguePriority;
exports.NFL_LIVE_STATUSES = [
    'Q1',
    'Q2',
    'Q3',
    'Q4',
    'OT',
    'HT',
    'BT',
];
exports.NFL_FINISHED_STATUSES = ['FT', 'AOT'];
function isNflLive(status) {
    return !!status && exports.NFL_LIVE_STATUSES.includes(status);
}
function isNflFinished(status) {
    return (!!status && exports.NFL_FINISHED_STATUSES.includes(status));
}
function getNflMatchStatusOrder(status) {
    if (isNflLive(status))
        return 0;
    if (isNflFinished(status))
        return 1;
    return 2;
}
// League IDs ordered by display priority.
exports.NFL_LEAGUE_PRIORITY = [1, 2, 3, 4, 5];
// Name-based fallback in case the backend returns an unexpected ID.
const NFL_PRIORITY_NAMES = ['nfl', 'ncaa', 'cfl', 'aaf', 'xfl'];
function getNflLeaguePriority(id, name) {
    const idIdx = exports.NFL_LEAGUE_PRIORITY.indexOf(id);
    if (idIdx !== -1)
        return idIdx;
    if (name) {
        const idx = NFL_PRIORITY_NAMES.indexOf(name.toLowerCase());
        if (idx !== -1)
            return idx;
    }
    return 9999;
}
