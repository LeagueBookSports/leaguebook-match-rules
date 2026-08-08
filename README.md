# leaguebook-match-rules

**Shared match-status rules for LeagueBook.** One source of truth for
the four sports (football, basketball, NFL, baseball) across:

- [leaguebook-frontend](https://github.com/LeagueBookSports/leaguebook-frontend)
- [leaguebook-mobile](https://github.com/LeagueBookSports/leaguebook-mobile)

Every new sport we add (cricket, hockey, rugby, tennis) belongs here so
the status lists cannot drift between the two apps.

## Install

Both apps consume this package directly from GitHub via `npm`. No
registry setup is needed.

```jsonc
// package.json in the consuming app
{
  "dependencies": {
    "leaguebook-match-rules": "github:LeagueBookSports/leaguebook-match-rules#v0.1.0"
  }
}
```

Pin to a tag (recommended) or to `main` if you want to always follow
the latest commit.

## Use

```ts
import {
  isFootballLive,
  isFootballFinished,
  isFootballNotPlayed,
  getFootballMatchState,
  FOOTBALL_LIVE_STATUSES,
} from 'leaguebook-match-rules'

if (isFootballNotPlayed(fixture.status.short)) {
  // Postponed / cancelled / abandoned — don't render a kickoff countdown.
}
```

Sport-specific imports also work:

```ts
import { isBasketballLive } from 'leaguebook-match-rules/dist/basketball'
```

## Sports covered

- **Football (soccer)** — `FootballStatusShort`, live/finished/upcoming/
  not-played lists, `isFootballLive/…`, `getFootballMatchState`,
  `getFootballMatchStatusOrder`.
- **Basketball** — same shape.
- **American football (NFL)** — live/finished lists, order helper.
- **Baseball** — live/finished lists, order helper.

## Add a new sport

1. Create `src/<sport>.ts` following the football module as a template.
2. Re-export from `src/index.ts`.
3. Bump the version in `package.json`, tag it, push.
4. Update both consuming apps to point at the new tag.

## Bumping the version

```bash
npm version patch      # 0.1.0 → 0.1.1
git push --follow-tags
```

Both consuming apps then bump the tag in their `package.json`.
