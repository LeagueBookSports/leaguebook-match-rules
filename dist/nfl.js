"use strict";
// American football (NFL) — API-NFL status short-codes + league priority.
// One source of truth: both leaguebook-frontend and leaguebook-mobile
// consume this file. Do not duplicate these lists back into either app.
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFL_LEAGUE_PRIORITY = exports.NFL_NOT_PLAYED_STATUSES = exports.NFL_UPCOMING_STATUSES = exports.NFL_FINISHED_STATUSES = exports.NFL_LIVE_STATUSES = void 0;
exports.isNflLive = isNflLive;
exports.isNflFinished = isNflFinished;
exports.isNflUpcoming = isNflUpcoming;
exports.isNflNotPlayed = isNflNotPlayed;
exports.getNflMatchState = getNflMatchState;
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
exports.NFL_UPCOMING_STATUSES = ['NS'];
// NOTE: unverified against live provider responses. The NFL endpoint is
// plan-limited to a three-day window around today and there were no games in
// it when this was written, so none of the codes in this module have been
// observed end-to-end — these mirror the football and basketball lists. An
// unused entry is inert, but if a called-off game ever renders as a normal
// fixture, check the real short code before assuming this list is complete.
exports.NFL_NOT_PLAYED_STATUSES = [
    'PST',
    'CANC',
    'ABD',
];
function isNflLive(status) {
    return !!status && exports.NFL_LIVE_STATUSES.includes(status);
}
function isNflFinished(status) {
    return !!status && exports.NFL_FINISHED_STATUSES.includes(status);
}
function isNflUpcoming(status) {
    return !!status && exports.NFL_UPCOMING_STATUSES.includes(status);
}
function isNflNotPlayed(status) {
    return !!status && exports.NFL_NOT_PLAYED_STATUSES.includes(status);
}
function getNflMatchState(status) {
    if (isNflLive(status))
        return 'live';
    if (isNflFinished(status))
        return 'finished';
    if (isNflNotPlayed(status))
        return 'notPlayed';
    if (isNflUpcoming(status))
        return 'upcoming';
    return 'unknown';
}
// Live → finished → upcoming → called off.
//
// The live/finished/upcoming order here is deliberately UNCHANGED from
// before: NFL and basketball sort finished above upcoming, while football and
// baseball sort upcoming above finished. That split predates this module and
// is a product decision, not an oversight to fix silently — changing it would
// reorder every NFL section in both apps. Called-off games are new, and go
// last so they never sit among real fixtures.
function getNflMatchStatusOrder(status) {
    if (isNflLive(status))
        return 0;
    if (isNflNotPlayed(status))
        return 3;
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
