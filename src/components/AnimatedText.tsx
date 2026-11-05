import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';

interface AnimatedTextProps {
  className?: string;
  style?: CSSProperties;
  /** Render as <p> (original markup) instead of the default <div>. */
  tag?: 'div' | 'p';
  children: ReactNode;
}

/**
 * Wrapper for the original <div class="animated-text …"> elements. The
 * fade-in / fade-out behaviour itself is implemented by useAnimatedText in
 * App (one IntersectionObserver over all .animated-text elements, exactly
 * like the original inline script at index.php L251-275); this component
 * only provides the element with the initial hidden styles from style.css.
 */
export function AnimatedText({ className, style, tag = 'div', children }: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.style.opacity = '1';
            target.style.transform = 'translateY(0)';
            target.style.transition =
              'opacity 1.5s ease-out, transform 1.5s ease-out';
          } else {
            target.style.opacity = '0';
            target.style.transform = 'translateY(20px)';
          }
        });
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = tag;
  return (
    <Tag
      ref={ref}
      className={`animated-text${className ? ` ${className}` : ''}`}
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        transition: 'opacity 1.5s ease-out, transform 1.5s ease-out',
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
