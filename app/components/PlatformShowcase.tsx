"use client";

import { useEffect, useMemo, useState } from "react";

type Platform = "mac" | "ipad" | "iphone";

const platforms: Record<
  Platform,
  { label: string; note: string; images: { src: string; alt: string }[] }
> = {
  mac: {
    label: "Mac",
    note: "Three panes, one repository",
    images: [
      {
        src: "/screenshots/mac-editor.webp",
        alt: "Together Notes on Mac showing folders, a notes list, and the Website Redesign note",
      },
    ],
  },
  ipad: {
    label: "iPad",
    note: "Your whole repository, touch-first",
    images: [
      { src: "/screenshots/ipad-folders.webp", alt: "Together Notes folders on iPad" },
      { src: "/screenshots/ipad-notes.webp", alt: "Together Notes note list on iPad" },
      { src: "/screenshots/ipad-editor.webp", alt: "Together Notes editor on iPad" },
    ],
  },
  iphone: {
    label: "iPhone",
    note: "Every commit, in your pocket",
    images: [
      { src: "/screenshots/iphone-folders.webp", alt: "Together Notes folders on iPhone" },
      { src: "/screenshots/iphone-notes.webp", alt: "Together Notes note list on iPhone" },
      { src: "/screenshots/iphone-editor.webp", alt: "Together Notes editor on iPhone" },
      { src: "/screenshots/iphone-history.webp", alt: "Together Notes git history on iPhone" },
    ],
  },
};

const order: Platform[] = ["mac", "ipad", "iphone"];

export function PlatformShowcase() {
  const [platform, setPlatform] = useState<Platform>("mac");
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (window.innerWidth < 680) setPlatform("iphone");
    else if (window.innerWidth < 1024) setPlatform("ipad");
  }, []);

  const active = useMemo(() => platforms[platform], [platform]);

  function choose(next: Platform) {
    setPlatform(next);
    setSlide(0);
  }

  function moveSlide(direction: number) {
    const nextSlide = slide + direction;

    if (nextSlide >= 0 && nextSlide < active.images.length) {
      setSlide(nextSlide);
      return;
    }

    const currentPlatform = order.indexOf(platform);
    const nextPlatform = order[
      (currentPlatform + direction + order.length) % order.length
    ];

    setPlatform(nextPlatform);
    setSlide(direction > 0 ? 0 : platforms[nextPlatform].images.length - 1);
  }

  return (
    <div className="showcase" id="demo">
      <div className="showcase-controls">
        <div
          className="platform-tabs"
          role="tablist"
          aria-label="Choose a device"
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") moveSlide(-1);
            if (event.key === "ArrowRight") moveSlide(1);
          }}
        >
          {order.map((key) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={platform === key}
              className={platform === key ? "active" : ""}
              onClick={() => choose(key)}
            >
              {platforms[key].label}
            </button>
          ))}
        </div>
      </div>

      <div className={`device-stage device-stage--${platform}`}>
        <button
          type="button"
          className="carousel-arrow carousel-arrow--previous"
          aria-label="Previous screenshot"
          onClick={() => moveSlide(-1)}
        >
          ←
        </button>
        <div className={`device-frame device-frame--${platform}`}>
          <img
            key={active.images[slide].src}
            src={active.images[slide].src}
            alt={active.images[slide].alt}
            width={platform === "mac" ? 1440 : platform === "ipad" ? 1032 : 660}
            height={platform === "mac" ? 900 : platform === "ipad" ? 1376 : 1434}
          />
        </div>
        <button
          type="button"
          className="carousel-arrow carousel-arrow--next"
          aria-label="Next screenshot"
          onClick={() => moveSlide(1)}
        >
          →
        </button>
      </div>

      <div className="showcase-caption">
        <span>{active.note}</span>
        {active.images.length > 1 && (
          <div className="slide-dots" aria-label={`${active.label} screenshots`}>
            {active.images.map((image, index) => (
              <button
                type="button"
                key={image.src}
                aria-label={`Show screenshot ${index + 1}`}
                aria-current={slide === index}
                onClick={() => setSlide(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
