// Baseball (MLB via API-Sports) — status short-codes + league priority stub.
// One source of truth: both leaguebook-frontend and leaguebook-mobile
// consume this file. Do not duplicate these lists back into either app.

export type BaseballStatusShort =
  // live / in-progress — the provider spells innings 'IN1'...'IN9'
  | 'IN1'
  | 'IN2'
  | 'IN3'
  | 'IN4'
  | 'IN5'
  | 'IN6'
  | 'IN7'
  | 'IN8'
  | 'IN9'
  | 'LIVE'
  | 'IN'
  | 'TOP'
  | 'BOT'
  | 'EX'
  | 'HT'
  // finished
  | 'FT'
  | 'AET'
  | 'PEN'
  | 'FINAL'
  | 'FINISHED'
  // not started
  | 'NS'
  // not played (postponed / cancelled / abandoned / interrupted)
  | 'POST'
  | 'CANC'
  | 'ABD'
  | 'INTR'

export type BaseballMatchState =
  | 'live'
  | 'finished'
  | 'upcoming'
  | 'notPlayed'
  | 'unknown'

// The inning codes previously lived here as bare numbers ('1'...'9'), which
// never matched anything: API-Sports emits 'IN1'...'IN9'. Every in-progress
// game therefore failed both the live and finished checks and was classified
// as upcoming — cards rendered "vs" plus a kickoff time for a game already at
// Inning 7, and live-only feeds filtered them out entirely. Verified against
// GET /api/v1/baseball/games, which returns only NS, IN1-IN9, FT and POST.
export const BASEBALL_LIVE_STATUSES: BaseballStatusShort[] = [
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
]

export const BASEBALL_FINISHED_STATUSES: BaseballStatusShort[] = [
  'FT',
  'AET',
  'PEN',
  'FINAL',
  'FINISHED',
]

export const BASEBALL_UPCOMING_STATUSES: BaseballStatusShort[] = ['NS']

// Only 'POST' is confirmed in provider responses; the rest mirror the
// football list so a called-off game never reads as a real fixture.
export const BASEBALL_NOT_PLAYED_STATUSES: BaseballStatusShort[] = [
  'POST',
  'CANC',
  'ABD',
  'INTR',
]

export function isBaseballLive(status: string | null | undefined): boolean {
  return !!status && (BASEBALL_LIVE_STATUSES as string[]).includes(status)
}

export function isBaseballFinished(status: string | null | undefined): boolean {
  return !!status && (BASEBALL_FINISHED_STATUSES as string[]).includes(status)
}

export function isBaseballUpcoming(status: string | null | undefined): boolean {
  return !!status && (BASEBALL_UPCOMING_STATUSES as string[]).includes(status)
}

export function isBaseballNotPlayed(
  status: string | null | undefined,
): boolean {
  return !!status && (BASEBALL_NOT_PLAYED_STATUSES as string[]).includes(status)
}

export function getBaseballMatchState(
  status: string | null | undefined,
): BaseballMatchState {
  if (isBaseballLive(status)) return 'live'
  if (isBaseballFinished(status)) return 'finished'
  if (isBaseballNotPlayed(status)) return 'notPlayed'
  if (isBaseballUpcoming(status)) return 'upcoming'
  return 'unknown'
}

// Live → upcoming → finished → called off.
export function getBaseballMatchStatusOrder(
  status: string | null | undefined,
): number {
  if (isBaseballLive(status)) return 0
  if (isBaseballNotPlayed(status)) return 3
  if (isBaseballFinished(status)) return 2
  return 1
}

// Kept for parity with NFL/Basketball. Baseball uses pinned order
// primarily, so this always returns the "unknown-priority" bucket.
// When we start seeding league IDs here (MLB, NPB, KBO, Liga MX
// Béisbol), extend the same way the basketball helper does.
export function getBaseballLeaguePriority(
  _leagueId: number,
  _leagueName: string,
): number {
  return 999
}
