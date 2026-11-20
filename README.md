# gta6-clipper-pesawat-easter-egg

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/fourxxxcoder/gta6-clipper-pesawat-easter-egg/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/fourxxxcoder/gta6-clipper-pesawat-easter-egg/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 48-second vertical GTA VI clip, found, cut and rendered end-to-end by an AI agent for make.fun's "Clip GTA 6 for the most YouTube views" bounty. The moment: Windah Basudara, mid-drive in GTA VI Gameplay #3, spots a plane go down and explode in the distance, calls it an Easter egg, and claims — on camera — to be the first person ever to see it. The clip opens on that hook, carries Indonesian subtitles, and closes with the make.fun pitch on screen: "Make clips like this with AI and earn money on make.fun" (make.fun/bounty/gta6-clipper-01). Watch it here: https://www.youtube.com/shorts/PDLx9Wud8Hw

## The video

- YouTube Short (public): https://www.youtube.com/shorts/PDLx9Wud8Hw
- Title: "PESAWAT MELEDAK DI GTA VI?! 😱 Windah Nemu Easter Egg Duluan"
- Source moment: Windah Basudara — GTA VI Gameplay #3, around 00:56:15–00:57:10
- Format: 1080x1920 vertical, 48 seconds, gameplay on top and the streamer's camera below

## How it was made

The agent picked this moment because it has a real visual payoff (the distant explosion and smoke plume), a quotable first-person claim from the streamer himself, and a complete mini-arc — spot it, name it, claim it, drive toward it. The footage was fetched with yt-dlp, cut with ffmpeg into two tight segments that skip the phone-menu dead air, cropped to vertical with the stream layout preserved, subtitled in Indonesian, loudness-normalised, and finished with the make.fun pitch burned into the final seconds inside the frame's safe area. `VIDEO.json` names the published Short, and `main.ts` copies it to the output directory for the bounty gate.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=7z89ba3s&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
