"use strict";
// Basketball — API-Basketball status short-codes + league priority.
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASKETBALL_LEAGUE_PRIORITY = exports.BASKETBALL_NOT_PLAYED_STATUSES = exports.BASKETBALL_UPCOMING_STATUSES = exports.BASKETBALL_FINISHED_STATUSES = exports.BASKETBALL_LIVE_STATUSES = void 0;
exports.isBasketballLive = isBasketballLive;
exports.isBasketballFinished = isBasketballFinished;
exports.isBasketballUpcoming = isBasketballUpcoming;
exports.isBasketballNotPlayed = isBasketballNotPlayed;
exports.getBasketballMatchStatusOrder = getBasketballMatchStatusOrder;
exports.getBasketballLeaguePriority = getBasketballLeaguePriority;
exports.BASKETBALL_LIVE_STATUSES = [
    'Q1',
    'Q2',
    'Q3',
    'Q4',
    'OT',
    'BT',
    'HT',
];
exports.BASKETBALL_FINISHED_STATUSES = [
    'FT',
    'AOT',
];
exports.BASKETBALL_UPCOMING_STATUSES = ['NS'];
exports.BASKETBALL_NOT_PLAYED_STATUSES = [
    'CANC',
    'SUSP',
    'POST',
    'ABD',
];
function isBasketballLive(status) {
    return !!status && exports.BASKETBALL_LIVE_STATUSES.includes(status);
}
function isBasketballFinished(status) {
    return !!status && exports.BASKETBALL_FINISHED_STATUSES.includes(status);
}
function isBasketballUpcoming(status) {
    return !!status && exports.BASKETBALL_UPCOMING_STATUSES.includes(status);
}
function isBasketballNotPlayed(status) {
    return !!status && exports.BASKETBALL_NOT_PLAYED_STATUSES.includes(status);
}
function getBasketballMatchStatusOrder(status) {
    if (isBasketballLive(status))
        return 0;
    if (isBasketballFinished(status))
        return 1;
    return 2;
}
// League IDs ordered by display priority (NBA always first).
exports.BASKETBALL_LEAGUE_PRIORITY = [
    12, // NBA
    13, // WNBA (NBA W)
    120, // EuroLeague
    117, // NBL (Australia)
    116, // BSL (Turkey)
    119, // Liga ACB (Spain)
    118, // LNB Pro A (France)
    124, // BBL (Germany)
];
// Name-based fallback in case the backend returns an unexpected ID.
const BASKETBALL_PRIORITY_NAMES = [
    'nba',
    'wnba',
    'nba w',
    'euroleague',
    'nbl',
    'bsl',
    'liga acb',
    'lnb',
    'bbl',
];
function getBasketballLeaguePriority(id, name) {
    const idIdx = exports.BASKETBALL_LEAGUE_PRIORITY.indexOf(id);
    if (idIdx !== -1)
        return idIdx;
    if (name) {
        const nameIdx = BASKETBALL_PRIORITY_NAMES.findIndex((n) => n === name.toLowerCase());
        if (nameIdx !== -1)
            return nameIdx;
    }
    // Unknown leagues sort after all known ones.
    return 9999;
}
