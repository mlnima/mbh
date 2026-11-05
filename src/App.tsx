import { useCallback, useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Publikation } from './components/Publikation';
import { References } from './components/References';
import { Studium } from './components/Studium';
import { Partnership } from './components/Partnership';
import { NachrichtButton } from './components/NachrichtButton';
import { MediaRibbon } from './components/MediaRibbon';
import { Footer } from './components/Footer';
import { references } from './data/references';
import { useAnimatedText } from './hooks/useAnimatedText';

function normalizePath(path: string): string {
  if (
    path === '' ||
    path === '/' ||
    path === '/index.html' ||
    path === '/index.php'
  ) {
    return '/';
  }
  if (path === '/partnership.php') return '/partnership.php';
  return path;
}

export default function App() {
  const [pathname, setPathname] = useState<string>(() =>
    normalizePath(window.location.pathname),
  );

  useEffect(() => {
    const onPop = () => setPathname(normalizePath(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const scrollToHash = useCallback((hash: string) => {
    if (!hash || hash === '#') return;
    const id = decodeURIComponent(hash.replace(/^#/, ''));
    window.setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 60);
  }, []);

  const navigate = useCallback(
    (to: string, hash?: string) => {
      const url = hash ? `${to}#${hash.replace(/^#/, '')}` : to;
      window.history.pushState(null, '', url);
      setPathname(normalizePath(to));
      if (hash) {
        scrollToHash(hash);
      } else {
        window.scrollTo({ top: 0 });
      }
    },
    [scrollToHash],
  );

  const onNavigateHome = useCallback(
    (hash?: string) => navigate('/', hash),
    [navigate],
  );
  const onNavigatePartnership = useCallback(
    () => navigate('/partnership.php'),
    [navigate],
  );

  // Scroll to the current hash when the page component changes (e.g. nav
  // link clicked from the other page).
  useEffect(() => {
    scrollToHash(window.location.hash);
  }, [pathname, scrollToHash]);

  // Re-arm the .animated-text IntersectionObserver whenever the page
  // component or language changes and new markup is mounted (mirrors the
  // original DOMContentLoaded observer over all .animated-text elements).
  useAnimatedText([pathname]);

  const isHome = pathname === '/';

  return (
    <>
      <Navbar
        pathname={pathname}
        onNavigateHome={onNavigateHome}
        onNavigatePartnership={onNavigatePartnership}
      />
      {isHome ? (
        <>
          <About />
          <Publikation />
          <References />
          <Studium />
        </>
      ) : (
        <Partnership />
      )}
      <NachrichtButton />
      <MediaRibbon items={isHome ? references : []} />
      <Footer onNavigatePartnership={onNavigatePartnership} />
    </>
  );
}
