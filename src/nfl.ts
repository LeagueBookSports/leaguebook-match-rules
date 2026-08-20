// American football (NFL) — API-NFL status short-codes + league priority.
// One source of truth: both leaguebook-frontend and leaguebook-mobile
// consume this file. Do not duplicate these lists back into either app.

export type NflStatusShort =
  // live / in-progress
  | 'Q1'
  | 'Q2'
  | 'Q3'
  | 'Q4'
  | 'OT'
  | 'HT'
  | 'BT'
  // finished
  | 'FT'
  | 'AOT'
  // not started
  | 'NS'
  // not played (postponed / cancelled / abandoned)
  | 'PST'
  | 'CANC'
  | 'ABD'

export type NflMatchState =
  | 'live'
  | 'finished'
  | 'upcoming'
  | 'notPlayed'
  | 'unknown'

export const NFL_LIVE_STATUSES: NflStatusShort[] = [
  'Q1',
  'Q2',
  'Q3',
  'Q4',
  'OT',
  'HT',
  'BT',
]

export const NFL_FINISHED_STATUSES: NflStatusShort[] = ['FT', 'AOT']

export const NFL_UPCOMING_STATUSES: NflStatusShort[] = ['NS']

// NOTE: unverified against live provider responses. The NFL endpoint is
// plan-limited to a three-day window around today and there were no games in
// it when this was written, so none of the codes in this module have been
// observed end-to-end — these mirror the football and basketball lists. An
// unused entry is inert, but if a called-off game ever renders as a normal
// fixture, check the real short code before assuming this list is complete.
export const NFL_NOT_PLAYED_STATUSES: NflStatusShort[] = [
  'PST',
  'CANC',
  'ABD',
]

export function isNflLive(status: string | null | undefined): boolean {
  return !!status && (NFL_LIVE_STATUSES as string[]).includes(status)
}

export function isNflFinished(status: string | null | undefined): boolean {
  return !!status && (NFL_FINISHED_STATUSES as string[]).includes(status)
}

export function isNflUpcoming(status: string | null | undefined): boolean {
  return !!status && (NFL_UPCOMING_STATUSES as string[]).includes(status)
}

export function isNflNotPlayed(status: string | null | undefined): boolean {
  return !!status && (NFL_NOT_PLAYED_STATUSES as string[]).includes(status)
}

export function getNflMatchState(
  status: string | null | undefined,
): NflMatchState {
  if (isNflLive(status)) return 'live'
  if (isNflFinished(status)) return 'finished'
  if (isNflNotPlayed(status)) return 'notPlayed'
  if (isNflUpcoming(status)) return 'upcoming'
  return 'unknown'
}

// Live → finished → upcoming → called off.
//
// The live/finished/upcoming order here is deliberately UNCHANGED from
// before: NFL and basketball sort finished above upcoming, while football and
// baseball sort upcoming above finished. That split predates this module and
// is a product decision, not an oversight to fix silently — changing it would
// reorder every NFL section in both apps. Called-off games are new, and go
// last so they never sit among real fixtures.
export function getNflMatchStatusOrder(
  status: string | null | undefined,
): number {
  if (isNflLive(status)) return 0
  if (isNflNotPlayed(status)) return 3
  if (isNflFinished(status)) return 1
  return 2
}

// League IDs ordered by display priority.
export const NFL_LEAGUE_PRIORITY: number[] = [1, 2, 3, 4, 5]

// Name-based fallback in case the backend returns an unexpected ID.
const NFL_PRIORITY_NAMES: string[] = ['nfl', 'ncaa', 'cfl', 'aaf', 'xfl']

export function getNflLeaguePriority(id: number, name?: string): number {
  const idIdx = NFL_LEAGUE_PRIORITY.indexOf(id)
  if (idIdx !== -1) return idIdx

  if (name) {
    const idx = NFL_PRIORITY_NAMES.indexOf(name.toLowerCase())
    if (idx !== -1) return idx
  }

  return 9999
}
