import React, { useEffect, useRef } from 'react';

const asset = (name) => `/assets/${name}`;

const panels = [
  {
    id: 'lab',
    eyebrow: 'THE SCIENCE BEHIND THE FUEL',
    heading: 'THE PLUSONETHREE LAB.',
    body: 'The science behind the product, the decisions behind the formula, and why every ingredient is there.',
    visual: 'hero',
  },
  {
    id: 'athletes',
    eyebrow: '01 / PURPOSE',
    heading: 'BUILT FOR INDIAN ENDURANCE ATHLETES.',
    body: 'Heat, humidity, long sessions and fueling confusion shaped what we chose to build.',
    visual: 'athletes',
  },
  {
    id: 'overview',
    eyebrow: '02 / THE FORMULA',
    heading: 'THREE SYSTEMS. ONE FUEL.',
    body: 'Carbs for the work, electrolytes for what sweat takes, and caffeine + theanine for focus.',
    visual: 'overview',
  },
  {
    id: 'carbs',
    eyebrow: '03 / CARB SYSTEM',
    heading: 'CARBS ARE SEXY.',
    body: 'Your body relies more on carbohydrates as intensity and duration rise.',
    visual: 'carbs',
  },
  {
    id: 'pathways',
    eyebrow: '04 / CARB SYSTEM',
    heading: 'TWO SOURCES. TWO PATHWAYS.',
    body: 'Glucose uses SGLT1. Fructose uses GLUT5. That’s why we use a dual-source carb system instead of relying on one pathway.',
    visual: 'pathways',
  },
  {
    id: 'caffeine',
    eyebrow: '05 / CAFFEINE SYSTEM',
    heading: 'CAFFEINE WORKS.',
    body: 'It can support alertness, focus and perceived effort when used deliberately.',
    visual: 'caffeine',
  },
  {
    id: 'ratio',
    eyebrow: '06 / CAFFEINE SYSTEM',
    heading: '100 MG + 200 MG.',
    body: '100 mg caffeine paired with 200 mg L-theanine for a steadier, more controlled caffeine experience.',
    visual: 'ratio',
  },
  {
    id: 'sweat',
    eyebrow: '07 / ELECTROLYTE SYSTEM',
    heading: 'SWEAT ISN’T JUST WATER.',
    body: 'Every time you sweat, you lose fluid and electrolytes, and those losses increase as the session gets longer or hotter.',
    visual: 'sweat',
  },
  {
    id: 'sodium',
    eyebrow: '08 / ELECTROLYTE SYSTEM',
    heading: 'SODIUM COMES FIRST.',
    body: 'Sodium makes up the largest share of electrolytes typically lost in sweat, so it leads the hydration system.',
    visual: 'sodium',
  },
  {
    id: 'hierarchy',
    eyebrow: '09 / ELECTROLYTE SYSTEM',
    heading: 'SODIUM LEADS.',
    body: 'Potassium and magnesium follow in support, giving the formula a hierarchy based on what sweat actually takes.',
    visual: 'hierarchy',
  },
  {
    id: 'together',
    eyebrow: '10 / THE WHOLE SYSTEM',
    heading: 'BUILT TO WORK TOGETHER.',
    body: 'Dual-source carbs, sodium-led electrolytes and caffeine + theanine are designed as one system for the full effort.',
    visual: 'together',
  },
];

const scienceImages = {
  athletes: { file: 'plusonethree_lab_visual_02.png', alt: 'Sweat on an endurance athlete after training' },
  overview: { file: 'plusonethree_lab_visual_03.png', alt: 'Three ingredient textures linked by a fine circular line' },
  carbs: { file: 'plusonethree_lab_visual_04.png', alt: 'Close-up of torn bread with crumbs in motion' },
  pathways: { file: 'plusonethree_lab_visual_05.png', alt: 'Two translucent spheres, one clear and one amber' },
  caffeine: { file: 'plusonethree_lab_visual_06.png', alt: 'Endurance athlete moving at speed' },
  ratio: { file: 'plusonethree_lab_visual_07.png', alt: 'Copper and translucent ingredient forms side by side' },
  sweat: { file: 'plusonethree_lab_visual_08.png', alt: 'Water droplets on an athlete’s shoulder' },
  sodium: { file: 'plusonethree_lab_visual_01.png', alt: 'Liquid and bubbles inside a clear glass vessel' },
  hierarchy: { file: 'plusonethree_lab_visual_09.png', alt: 'Three translucent mineral forms' },
  together: { file: 'plusonethree_lab_visual_10.png', alt: 'Clear endurance fuel sachet with a copper-colored mixture' },
};

function VisualFrame({ kind }) {
  let content;
  if (kind === 'hero') {
    content = <img className="hero-image" src={asset('hero-athlete.png')} alt="PlusOneThree endurance fuel pouches on a blue laboratory bench with glassware" />;
  } else {
    const image = scienceImages[kind];
    content = <img className="editorial-image" src={asset(image.file)} alt={image.alt} />;
  }
  return <div className={`visual-frame visual-${kind}`}>{content}</div>;
}

function LabCTA({ duplicate }) {
  return <div className="cta-group"><button type="button" disabled aria-describedby={duplicate ? undefined : 'product-link-status'}>EXPLORE THE PRODUCT <span aria-hidden="true">↗</span></button><span id={duplicate ? undefined : 'product-link-status'}>Product link coming soon</span></div>;
}

function LabPanel({ panel, index, duplicate = false, loopClass = '' }) {
  const Heading = index === 0 && !duplicate ? 'h1' : 'h2';
  return <article className={`lab-panel panel-${panel.id} ${loopClass}`} id={duplicate ? undefined : panel.id} aria-label={duplicate ? undefined : `${index + 1} of ${panels.length}: ${panel.heading}`} aria-hidden={duplicate ? 'true' : undefined} inert={duplicate ? true : undefined}>
    <div className="panel-inner">
      <div className="panel-copy">
        <span className="eyebrow">{panel.eyebrow}</span>
        <Heading>{panel.heading}</Heading>
        <p>{panel.body}</p>
        {panel.id === 'lab' && <LabCTA duplicate={duplicate} />}
      </div>
      <VisualFrame kind={panel.visual} />
    </div>
  </article>;
}

function StoryWave() {
  return <div className="story-wave" aria-hidden="true"><img src={asset('gradient.png')} alt="" /></div>;
}

function HorizontalLabStory() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const widthQuery = window.matchMedia('(min-width: 1024px)');
    let frame = 0;
    let travel = 0;
    let active = false;
    let mobileLooping = false;
    let mobileFirst = 0;
    let mobileCycle = 0;
    let mobileInitialized = false;

    const storyStart = () => section.getBoundingClientRect().top + window.scrollY;

    const render = () => {
      frame = 0;
      if (mobileLooping && mobileCycle && document.activeElement?.id !== 'after-story' && window.location.hash !== '#after-story') {
        const position = window.scrollY - mobileFirst;
        if (position < 0 || position >= mobileCycle) {
          const wrapped = ((position % mobileCycle) + mobileCycle) % mobileCycle;
          window.scrollTo(0, mobileFirst + wrapped);
        }
        return;
      }
      if (!active) return;
      const start = storyStart();
      const distance = Math.max(0, Math.min(travel, window.scrollY - start));
      track.style.transform = `translate3d(${-distance}px, 0, 0)`;
      section.style.setProperty('--scroll-fraction', travel ? String(Math.sin(Math.PI * distance / travel)) : '0');
    };

    const requestRender = () => { if (!frame) frame = window.requestAnimationFrame(render); };

    const measure = () => {
      active = widthQuery.matches && !motionQuery.matches && window.innerHeight >= 620;
      const wasMobileLooping = mobileLooping;
      mobileLooping = !widthQuery.matches && !motionQuery.matches;
      section.classList.toggle('is-horizontal', active);
      section.classList.toggle('is-mobile-looping', mobileLooping);
      if (active) {
        const firstPanel = track.querySelector('.lab-panel:not([aria-hidden])');
        const firstDuplicate = track.querySelector('.desktop-loop');
        travel = Math.max(0, firstDuplicate.offsetLeft - firstPanel.offsetLeft);
        section.style.height = `${window.innerHeight + travel}px`;
      } else {
        travel = 0;
        section.style.removeProperty('height');
        section.style.removeProperty('--scroll-fraction');
        track.style.removeProperty('transform');
      }
      if (mobileLooping) {
        const previousFirst = mobileFirst;
        const firstPanel = track.querySelector('.lab-panel:not([aria-hidden])');
        const trailingPanel = track.querySelector('.mobile-loop-trailing');
        mobileFirst = storyStart() + firstPanel.offsetTop;
        mobileCycle = trailingPanel.offsetTop - firstPanel.offsetTop;
        if (!mobileInitialized || !wasMobileLooping) {
          mobileInitialized = true;
          if (!window.location.hash) window.scrollTo(0, mobileFirst);
        } else if (previousFirst && Math.abs(mobileFirst - previousFirst) > 1) {
          window.scrollTo(0, window.scrollY + mobileFirst - previousFirst);
        }
      } else {
        mobileInitialized = false;
        mobileCycle = 0;
      }
      requestRender();
    };

    const observer = new ResizeObserver(measure);
    observer.observe(track);
    observer.observe(document.documentElement);
    window.addEventListener('scroll', requestRender, { passive: true });
    const wrap = (direction, amount) => {
      if (!active || !travel || document.activeElement?.id === 'after-story') return false;
      const start = storyStart();
      const position = window.scrollY - start;
      if (direction > 0 && position >= travel - 2) {
        window.scrollTo({ top: start + Math.min(Math.max(amount, 1), travel - 1), behavior: 'instant' });
        requestRender();
        return true;
      }
      if (direction < 0 && position <= 2) {
        window.scrollTo({ top: start + Math.max(1, travel + Math.min(amount, -1)), behavior: 'instant' });
        requestRender();
        return true;
      }
      return false;
    };
    const onWheel = (event) => {
      if (event.ctrlKey || event.metaKey || !event.deltaY) return;
      if (wrap(Math.sign(event.deltaY), event.deltaY)) event.preventDefault();
    };
    const onKeyDown = (event) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.target !== document.body) return;
      const direction = event.key === 'ArrowDown' || event.key === 'PageDown' || (event.key === ' ' && !event.shiftKey) ? 1
        : event.key === 'ArrowUp' || event.key === 'PageUp' || (event.key === ' ' && event.shiftKey) ? -1 : 0;
      if (direction && wrap(direction, direction * window.innerHeight * .8)) event.preventDefault();
    };
    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', measure, { passive: true });
    widthQuery.addEventListener('change', measure);
    motionQuery.addEventListener('change', measure);
    document.fonts?.ready.then(measure);
    [...track.querySelectorAll('img')].forEach((img) => img.addEventListener('load', measure));
    measure();

    const focusIn = (event) => {
      if (!active) return;
      const panel = event.target.closest('.lab-panel');
      if (!panel) return;
      const destination = section.getBoundingClientRect().top + window.scrollY + panel.offsetLeft;
      window.scrollTo({ top: Math.min(destination, section.offsetTop + travel), behavior: 'instant' });
    };
    track.addEventListener('focusin', focusIn);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', requestRender);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', measure);
      widthQuery.removeEventListener('change', measure);
      motionQuery.removeEventListener('change', measure);
      track.removeEventListener('focusin', focusIn);
      [...track.querySelectorAll('img')].forEach((img) => img.removeEventListener('load', measure));
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <section className="lab-story" ref={sectionRef} aria-label="The PlusOneThree Lab story">
    <StoryWave />
    <div className="story-viewport">
      <div className="story-track" ref={trackRef}>
        <LabPanel key="mobile-loop-leading" panel={panels[panels.length - 1]} index={panels.length - 1} duplicate loopClass="mobile-loop mobile-loop-leading" />
        {panels.map((panel, index) => <LabPanel key={panel.id} panel={panel} index={index} />)}
        <LabPanel key="mobile-loop-trailing" panel={panels[0]} index={0} duplicate loopClass="mobile-loop mobile-loop-trailing" />
        {panels.slice(0, 2).map((panel, index) => <LabPanel key={`${panel.id}-desktop-loop`} panel={panel} index={index} duplicate loopClass="desktop-loop" />)}
      </div>
    </div>
  </section>;
}

export default function LabPage() {
  return <main>
    <a className="skip-story" href="#after-story">Skip the Lab story</a>
    <HorizontalLabStory />
    <div id="after-story" className="after-story" tabIndex="-1" />
  </main>;
}
