# The PlusOneThree Lab

Local React + JavaScript implementation of the eleven-panel Lab sequence.

## Run

```sh
npm install
npm run dev
```

Open the Local URL printed by Vite. For a production build, run `npm run build`.

Desktop vertical scrolling moves through the pinned horizontal story. At either end, continued scrolling wraps between the last science panel and the opening; the first two panels are repeated visually to keep the forward transition continuous. Below 1024px, the panels stack vertically and loop in both directions using visual-only copies of the end panels. The skip-story link remains available to leave either loop. With reduced motion enabled, panels stack vertically once in their original order.

The opening product photograph is saved locally from Figma. The ten science panels use the supplied `plusonethree_lab_visual_01.png` through `_10.png` images, assigned by subject. The supplied `gradient.png` stays fixed to the bottom of the viewport on desktop and mobile. The black CTA sits in the opening panel and remains disabled until a product URL is supplied.

Typography uses installed Archivo Condensed ExtraBold and JUST Sans through local font lookup. On devices without those licensed fonts, the CSS falls back to Arial Narrow/Impact for headings and Arial for body text. Font files are not redistributed with this preview.
