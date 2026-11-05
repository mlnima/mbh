import { useEffect } from 'react';

/**
 * Replicates the original inline script (index.php L251-275) exactly: one
 * IntersectionObserver (threshold 0.2) over EVERY .animated-text element in
 * the document. Elements fade in (opacity 1 / translateY(0)) while ≥20% of
 * them are visible and reset to hidden (opacity 0 / translateY(20px)) when
 * they leave the viewport. The inline transition set here (1.5s ease-out)
 * overrides the 3s transition declared in style.css.
 *
 * Elements whose markup comes from the raw i18n dictionary (e.g. the
 * <p class="fs-5 animated-text lh-base"> paragraphs of the Wikipedia card)
 * are covered here; the AnimatedText component's own effect observes the
 * React-managed wrappers idempotently (same class, same observer logic).
 */
export function useAnimatedText(deps: unknown[] = []) {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.animated-text');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            // Show and animate element when it enters the viewport
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            el.style.transition = 'opacity 1.5s ease-out, transform 1.5s ease-out';
          } else {
            // Hide and reset position when it leaves the viewport
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
          }
        });
      },
      { threshold: 0.2 },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
