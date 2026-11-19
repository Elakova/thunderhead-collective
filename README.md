# Film portfolio

A Next.js portfolio for a director / cinematographer. All content is video-led.

## How it behaves

| Page | Content | Behaviour |
|---|---|---|
| Home | One frame per film, plus the closing footer | Muted loops play while on screen. Each film drifts gently against the scroll (parallax) while its title row stays pinned mid-screen. On phones, each film sits full-width with its details underneath. Click a film to open it. |
| Work: grid | Two-column cards | Cards rest on a still. On hover: plays muted, corner brackets appear, a `[PLAY]` label follows the cursor, and the caption swaps to duration and location. Cards fade in as you scroll. |
| Work: list | Numbered rows | The hovered row stays bright, indents, gains an underline and its arrow tilts. The other rows dim. |
| Project | One full-screen film | Starts paused. Click anywhere (or press Space) to play **with sound**, and click again to pause. While it plays, the whole frame is shown and a control bar appears. **Credits** appears once a project has details. |
| Story | Your story as a brand page | Full-screen video with a statement, a vision section, image and text sections that alternate sides, three value cards, a "giving back" feature, and a closing video with buttons. |
| Journal | A blog | A featured post, category filters, a 3-column grid and Load more. Each post has its own article page. |
| About | Bio, services, clients, contact | A small black-and-white portrait stays fixed in the corner. |
| Menu | Oversized numbered links over a blurred page | Opens from the top-right icon. Press Esc to close it. |

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in ./out
```

## Make it yours

- **Name, contact, socials, timezone, location, about text:** `lib/site.ts`
- **Projects:** `lib/projects.ts`. Each project also has a `format` (frame size) and `fps`, which drive the timecode display. Each project has a title, client, category, location, agency, duration, year, description, deliverables, production and credits.
- **Media:** each project uses three files in `public/media/`:
  - `<slug>.mp4`: the full film with sound, played on the project page.
  - `<slug>-loop.mp4`: an 8-second silent loop for the home reel and the work grid.
  - `<slug>.jpg`: the still shown before the video loads, and behind the credits.

  Your original exports live outside this project, in `~/Movies/Thunderhead Masters/`, so they're never pushed. Keep every file under 50 MB (GitHub warns above 50 MB and rejects files over 100 MB). If a master is already a web-friendly H.264/AAC MP4 under 50 MB, use it as it is, without re-encoding, which keeps its full quality: `ffmpeg -i "$M" -map 0:v:0 -map 0:a:0 -c copy -movflags +faststart public/media/my-film.mp4`. Otherwise export the three files like this (change `-ss 12` to where the loop should start, and set `-b:v` so the full film stays under 50 MB):
  ```bash
  M="$HOME/Movies/Thunderhead Masters/MyFilm.mp4"
  ffmpeg -i "$M" -vf "scale=1920:1080:flags=lanczos" -c:v libx264 -preset slow -b:v 900k -pass 1 -an -f null /dev/null
  ffmpeg -i "$M" -vf "scale=1920:1080:flags=lanczos" -c:v libx264 -preset slow -b:v 900k -pass 2 -c:a aac -b:a 128k -movflags +faststart public/media/my-film.mp4
  ffmpeg -ss 12 -i "$M" -t 8 -an -vf "scale=1920:1080:flags=lanczos,fps=25" -c:v libx264 -crf 23 -movflags +faststart public/media/my-film-loop.mp4
  ffmpeg -ss 12 -i "$M" -frames:v 1 -vf "scale=1920:1080:flags=lanczos" -q:v 2 public/media/my-film.jpg
  ```
  Change `-ss 12` to the second where the loop should start. Then add an entry to `lib/projects.ts`. Optional details (client, year, location, description, credits) stay hidden on the site until you fill them in.
- **Portrait:** `public/media/portrait.jpg`
- **Story page text and images:** `lib/story.ts`. Images go in `public/media/story/`.
- **Journal posts:** `lib/journal.ts`. Each post has a title, category, date, excerpt and body blocks (`p`, `h2`, `quote`, `img`). The cover goes in `public/media/journal/<slug>.jpg`. Mark one post `featured: true` to show it at the top.
- **Filters:** `categories` in `lib/site.ts`

## Deploy

`npm run build` writes a fully static site to `out/`. Deploy it to Vercel, Netlify (publish directory `out`) or any static host.
