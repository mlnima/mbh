import { useI18n, indexT } from '../i18n';
import { useNavBehaviors } from '../hooks/useNavBehaviors';

interface NavbarProps {
  pathname: string;
  onNavigateHome: (hash?: string) => void;
  onNavigatePartnership: () => void;
}

// Nav items in original order: partnerschaft, aboutus, studium, references,
// Publikation, language switch. The "Interviews & Medien" label is identical
// in the DE and EN originals (index.php L406), so it is kept static.
const NAV_ITEMS: { id: string; line: number | null; label?: string }[] = [
  { id: 'aboutus', line: 403 },
  { id: 'studium', line: 405 },
  { id: 'references', line: null, label: 'Interviews & Medien' },
  { id: 'Publikation', line: 408 },
];

export function Navbar({ pathname, onNavigateHome, onNavigatePartnership }: NavbarProps) {
  const { lang, setLang, text } = useI18n();
  const {
    navHidden,
    mobileOpen,
    activeHash,
    onNavLinkClick,
    toggleMenu,
  } = useNavBehaviors(pathname);

  const isHome = pathname === '/' || pathname === '/index.php';

  return (
    <nav
      id="navbar"
      className={`navbar navbar-expand-lg navbar-dark bg-black fixed-top${
        navHidden ? ' nav-hidden' : ''
      }`}
    >
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`collapse navbar-collapse${mobileOpen ? ' show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="/partnership.php"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigatePartnership();
                }}
              >
                {text(indexT, 400)}
              </a>
            </li>
            {NAV_ITEMS.map((item) => (
              <li className="nav-item" key={item.id}>
                <a
                  className={`nav-link${activeHash === `#${item.id}` ? ' active' : ''}`}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    if (!isHome) {
                      e.preventDefault();
                      onNavigateHome(`#${item.id}`);
                    } else {
                      onNavLinkClick(e, item.id);
                    }
                  }}
                >
                  {item.line != null ? text(indexT, item.line) : (item.label ?? '')}
                </a>
              </li>
            ))}
            <li className="nav-item">
              <a
                className="nav-link lang-switch"
                href={lang === 'de' ? '?lang=en' : '?lang=de'}
                onClick={(e) => {
                  e.preventDefault();
                  setLang(lang === 'de' ? 'en' : 'de');
                }}
              >
                <img
                  src={
                    lang === 'de'
                      ? 'https://flagcdn.com/24x18/gb.png'
                      : 'https://flagcdn.com/24x18/de.png'
                  }
                  width={24}
                  height={18}
                  alt={lang === 'de' ? 'English' : 'Deutsch'}
                  title={lang === 'de' ? 'English' : 'Deutsch'}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
