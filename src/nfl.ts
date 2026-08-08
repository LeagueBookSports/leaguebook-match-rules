// American football (NFL) — API-NFL status short-codes.

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
