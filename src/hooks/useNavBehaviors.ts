import { useCallback, useEffect, useState } from 'react';
import type { MouseEvent as ReactMouseEvent } from 'react';

export function useNavBehaviors(pathname: string) {
  const [navHidden, setNavHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProdekteOpen, setMobileProdekteOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>(() => window.location.hash);

  // Navbar hide on scroll-down / show on scroll-up (original inline script)
  useEffect(() => {
    let prev = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > prev && y > 70) {
        setNavHidden(true);
        // original also closes the collapse on scroll
        setMobileOpen(false);
        setMobileProdekteOpen(false);
      } else {
        setNavHidden(false);
      }
      prev = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Custom scrollspy: highlight the nav link of the section nearest the top
  // (original updateActiveNav used navbarHeight + 50 offset).
  useEffect(() => {
    const ids = ['aboutus', 'studium', 'references', 'Publikation'];
    const update = () => {
      const navbarHeight = 56;
      const offset = navbarHeight + 50;
      let current = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const rectTop = el.getBoundingClientRect().top;
          if (rectTop - offset <= 0) current = id;
        }
      }
      setActiveHash(current ? `#${current}` : '');
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const closeMenu = useCallback(() => {
    setMobileOpen(false);
    setMobileProdekteOpen(false);
  }, []);

  // Clicking outside the collapse closes it (original handler, also removed
  // .show from the mobile dropdown).
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const collapse = document.querySelector('.navbar-collapse');
      const toggler = document.querySelector('.navbar-toggler');
      if (!collapse || !toggler) return;
      const target = e.target as Node;
      const insideMenu = collapse.contains(target);
      const onToggler = toggler.contains(target);
      if (!insideMenu && !onToggler) closeMenu();
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, [closeMenu]);

  /** Nav-link click: rewrite URL to path#targetId (original rewrote to index.php#id),
   *  smooth-scroll, and close the collapse on mobile. */
  const onNavLinkClick = useCallback(
    (e: ReactMouseEvent<HTMLAnchorElement>, targetId: string) => {
      const url = `${pathname}#${targetId}`;
      window.history.pushState(null, '', url);
      setActiveHash(`#${targetId}`);
      const el = document.getElementById(targetId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
      if (window.innerWidth < 992) closeMenu();
    },
    [pathname, closeMenu],
  );

  /** Mobile dropdown toggle for the "produkte-dropdown" item (original logic). */
  const onDropdownToggle = useCallback(
    (e: ReactMouseEvent<HTMLAnchorElement>) => {
      if (window.innerWidth < 992) {
        e.preventDefault();
        e.stopPropagation();
        setMobileProdekteOpen((v) => !v);
      }
    },
    [],
  );

  const toggleMenu = useCallback(() => {
    setMobileOpen((v) => !v);
    setMobileProdekteOpen(false);
  }, []);

  return {
    navHidden,
    mobileOpen,
    mobileProdekteOpen,
    activeHash,
    onNavLinkClick,
    onDropdownToggle,
    toggleMenu,
    closeMenu,
  };
}
