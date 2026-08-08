// American football (NFL) — API-NFL status short-codes + league priority.

export const NFL_LIVE_STATUSES = [
  'Q1',
  'Q2',
  'Q3',
  'Q4',
  'OT',
  'HT',
  'BT',
] as const

export const NFL_FINISHED_STATUSES = ['FT', 'AOT'] as const

export type NflStatusShort =
  | (typeof NFL_LIVE_STATUSES)[number]
  | (typeof NFL_FINISHED_STATUSES)[number]
  | 'NS'

export function isNflLive(status: string | null | undefined): boolean {
  return !!status && (NFL_LIVE_STATUSES as readonly string[]).includes(status)
}

export function isNflFinished(status: string | null | undefined): boolean {
  return (
    !!status && (NFL_FINISHED_STATUSES as readonly string[]).includes(status)
  )
}

export function getNflMatchStatusOrder(
  status: string | null | undefined,
): number {
  if (isNflLive(status)) return 0
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
