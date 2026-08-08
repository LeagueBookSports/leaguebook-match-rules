"use strict";
// Football (soccer) — API-Football status short-codes.
// One source of truth: both leaguebook-frontend and leaguebook-mobile
// consume this file. Do not duplicate these lists back into either app.
Object.defineProperty(exports, "__esModule", { value: true });
exports.FOOTBALL_NOT_PLAYED_STATUSES = exports.FOOTBALL_UPCOMING_STATUSES = exports.FOOTBALL_FINISHED_STATUSES = exports.FOOTBALL_LIVE_STATUSES = void 0;
exports.isFootballLive = isFootballLive;
exports.isFootballFinished = isFootballFinished;
exports.isFootballUpcoming = isFootballUpcoming;
exports.isFootballNotPlayed = isFootballNotPlayed;
exports.getFootballMatchState = getFootballMatchState;
exports.getFootballMatchStatusOrder = getFootballMatchStatusOrder;
exports.FOOTBALL_LIVE_STATUSES = [
    '1H',
    'HT',
    '2H',
    'ET',
    'BT',
    'P',
    'LIVE',
    'INT',
    'SUSP',
];
exports.FOOTBALL_FINISHED_STATUSES = [
    'FT',
    'AET',
    'PEN',
    'AWD',
    'WO',
];
exports.FOOTBALL_UPCOMING_STATUSES = ['TBD', 'NS'];
exports.FOOTBALL_NOT_PLAYED_STATUSES = [
    'PST',
    'CANC',
    'ABD',
];
function isFootballLive(status) {
    return !!status && exports.FOOTBALL_LIVE_STATUSES.includes(status);
}
function isFootballFinished(status) {
    return !!status && exports.FOOTBALL_FINISHED_STATUSES.includes(status);
}
function isFootballUpcoming(status) {
    return !!status && exports.FOOTBALL_UPCOMING_STATUSES.includes(status);
}
function isFootballNotPlayed(status) {
    return !!status && exports.FOOTBALL_NOT_PLAYED_STATUSES.includes(status);
}
function getFootballMatchState(status) {
    if (isFootballLive(status))
        return 'live';
    if (isFootballFinished(status))
        return 'finished';
    if (isFootballUpcoming(status))
        return 'upcoming';
    if (isFootballNotPlayed(status))
        return 'notPlayed';
    return 'unknown';
}
// Sort order: live → upcoming → finished → not-played/unknown.
function getFootballMatchStatusOrder(status) {
    if (isFootballLive(status))
        return 0;
    if (isFootballUpcoming(status))
        return 1;
    if (isFootballFinished(status))
        return 2;
    return 3;
}
