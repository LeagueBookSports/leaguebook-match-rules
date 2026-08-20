"use strict";
// Baseball (MLB via API-Sports) — status short-codes + league priority stub.
// One source of truth: both leaguebook-frontend and leaguebook-mobile
// consume this file. Do not duplicate these lists back into either app.
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASEBALL_NOT_PLAYED_STATUSES = exports.BASEBALL_UPCOMING_STATUSES = exports.BASEBALL_FINISHED_STATUSES = exports.BASEBALL_LIVE_STATUSES = void 0;
exports.isBaseballLive = isBaseballLive;
exports.isBaseballFinished = isBaseballFinished;
exports.isBaseballUpcoming = isBaseballUpcoming;
exports.isBaseballNotPlayed = isBaseballNotPlayed;
exports.getBaseballMatchState = getBaseballMatchState;
exports.getBaseballMatchStatusOrder = getBaseballMatchStatusOrder;
exports.getBaseballLeaguePriority = getBaseballLeaguePriority;
// The inning codes previously lived here as bare numbers ('1'...'9'), which
// never matched anything: API-Sports emits 'IN1'...'IN9'. Every in-progress
// game therefore failed both the live and finished checks and was classified
// as upcoming — cards rendered "vs" plus a kickoff time for a game already at
// Inning 7, and live-only feeds filtered them out entirely. Verified against
// GET /api/v1/baseball/games, which returns only NS, IN1-IN9, FT and POST.
exports.BASEBALL_LIVE_STATUSES = [
    'IN1',
    'IN2',
    'IN3',
    'IN4',
    'IN5',
    'IN6',
    'IN7',
    'IN8',
    'IN9',
    // Retained from the original list — not observed in provider responses,
    // but harmless to keep matching.
    'LIVE',
    'IN',
    'TOP',
    'BOT',
    'EX',
    'HT',
];
exports.BASEBALL_FINISHED_STATUSES = [
    'FT',
    'AET',
    'PEN',
    'FINAL',
    'FINISHED',
];
exports.BASEBALL_UPCOMING_STATUSES = ['NS'];
// Only 'POST' is confirmed in provider responses; the rest mirror the
// football list so a called-off game never reads as a real fixture.
exports.BASEBALL_NOT_PLAYED_STATUSES = [
    'POST',
    'CANC',
    'ABD',
    'INTR',
];
function isBaseballLive(status) {
    return !!status && exports.BASEBALL_LIVE_STATUSES.includes(status);
}
function isBaseballFinished(status) {
    return !!status && exports.BASEBALL_FINISHED_STATUSES.includes(status);
}
function isBaseballUpcoming(status) {
    return !!status && exports.BASEBALL_UPCOMING_STATUSES.includes(status);
}
function isBaseballNotPlayed(status) {
    return !!status && exports.BASEBALL_NOT_PLAYED_STATUSES.includes(status);
}
function getBaseballMatchState(status) {
    if (isBaseballLive(status))
        return 'live';
    if (isBaseballFinished(status))
        return 'finished';
    if (isBaseballNotPlayed(status))
        return 'notPlayed';
    if (isBaseballUpcoming(status))
        return 'upcoming';
    return 'unknown';
}
// Live → upcoming → finished → called off.
function getBaseballMatchStatusOrder(status) {
    if (isBaseballLive(status))
        return 0;
    if (isBaseballNotPlayed(status))
        return 3;
    if (isBaseballFinished(status))
        return 2;
    return 1;
}
// Kept for parity with NFL/Basketball. Baseball uses pinned order
// primarily, so this always returns the "unknown-priority" bucket.
// When we start seeding league IDs here (MLB, NPB, KBO, Liga MX
// Béisbol), extend the same way the basketball helper does.
function getBaseballLeaguePriority(_leagueId, _leagueName) {
    return 999;
}
