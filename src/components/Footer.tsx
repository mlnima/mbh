import { withBase } from '../base';

interface FooterProps {
  onNavigatePartnership: () => void;
}

/** Footer (index.php L1444-1503). Content is identical in DE and EN. */
export function Footer({ onNavigatePartnership }: FooterProps) {
  return (
    <footer id="footer" className="py-5 bg-dark text-white bg-black">
      <div className="container">
        <div className="row">
          {/* Kontakt */}
          <div className="col-lg-6 col-md-6 mb-4 mb-lg-0">
            <h5 className="fw-bold">E-Mails</h5>
            <p className="mb-1">
              <a href="mailto:erfinder@mohsenbahmani.com">erfinder@mohsenbahmani.com</a>
            </p>
            <p className="mb-1">
              <a href="mailto:inventor@mohsenbahmani.com">inventor@mohsenbahmani.com</a>
            </p>
            <p className="mb-1">
              <a href="mailto:info@mohsenbahmani.com">info@mohsenbahmani.com</a>
            </p>
            <p className="mb-1">
              <a
                href={withBase('/partnership.php')}
                className="nav-link d-inline px-0 text-white"
                style={{ fontWeight: 500 }}
                id="id1"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigatePartnership();
                }}
              >
                {' Partnership & Collaboration '}
              </a>
            </p>
          </div>
          {/* Rechtliches */}
          <div className="col-lg-6 col-md-6 mb-4 mb-lg-0">
            <h5 className="fw-bold">FOLLOW ME</h5>
            <a
              href="https://www.instagram.com/m.bahmani"
              target="_blank"
              rel="noreferrer"
              style={{
                margin: '0 5px',
                height: '1.50em',
                width: '1.50em',
                verticalAlign: 'baseline',
                position: 'relative',
                top: '15px',
                color: '#e1306c',
              }}
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/share/12LWKQUqjKk/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              style={{
                height: '1.50em',
                width: '1.50em',
                verticalAlign: 'baseline',
                position: 'relative',
                top: '15px',
                color: '#1877f2',
              }}
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://linkedin.com/in/mohsen-bahmani-95b6ba128"
              target="_blank"
              rel="noreferrer"
              style={{
                margin: '0 5px',
                height: '1.50em',
                width: '1.50em',
                verticalAlign: 'baseline',
                position: 'relative',
                top: '15px',
                color: '#0a66c2',
              }}
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://www.youtube.com/@mohsen.bahmani"
              target="_blank"
              rel="noreferrer"
              style={{
                margin: '0 5px',
                height: '1.50em',
                width: '1.50em',
                verticalAlign: 'baseline',
                position: 'relative',
                top: '15px',
                color: '#e42724ff',
              }}
            >
              <i className="bi bi-youtube"></i>
            </a>

            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
            />

            <a
              href="https://www.tiktok.com/@mohsen.bahmani90"
              target="_blank"
              rel="noreferrer"
              style={{
                margin: '0 2px',
                height: '1.50em',
                width: '1.50em',
                verticalAlign: 'baseline',
                position: 'relative',
                top: '15px',
                color: '#000000',
              }}
            >
              <i className="fa-brands fa-tiktok" style={{ color: '#ffffff' }}></i>
            </a>

            <a
              href="https://x.com/mohsen1bahmani"
              target="_blank"
              rel="noreferrer"
              style={{
                margin: '0 5px',
                height: '1.50em',
                width: '1.50em',
                verticalAlign: 'baseline',
                position: 'relative',
                top: '15px',
                fontSize: '20px',
              }}
            >
              <img
                src={withBase('/images/X_logo_2023.svg')}
                alt="X Logo"
                style={{
                  height: '1.20em',
                  width: '1.20em',
                  verticalAlign: 'baseline',
                  position: 'relative',
                  top: '15px',
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center mt-4">
            <p className="mb-0">
              {'\u00A9'} 2026 Mohsen Bahmani. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
