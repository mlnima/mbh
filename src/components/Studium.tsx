import { AnimatedText } from './AnimatedText';
import { indexT, useI18n } from '../i18n';

const MEDALS = [
  'Gold Medal – Brussel, Belgium, 2009',
  'Gold Medal – Romania, 2008',
  'Gold Medal – Inventors Championship, Iran',
  'Silver Medal – Moscow, Russia, 2008',
  'Silver Medal – Inventors Championship, Switzerland',
  'Bronze Medal – London, UK, 2007',
  'Best inventor in Iran – Iranian Youth Organization (2008, 2009)',
];

/** Bildung und Auszeichnungen section (index.php L890-945). */
export function Studium() {
  const { tr, text, lang } = useI18n();

  return (
    <section id="studium" style={{ paddingTop: '30px', backgroundColor: '#2f2f2f' }}>
      <div className="container py-5">
        {/* Section Title */}
        <div dangerouslySetInnerHTML={{ __html: tr(indexT, 893) }} />

        <div className="row align-items-center mb-5">
          {/* Image Placeholder */}
          <div className="col-md-6">
            <img src="images/KIT.jpeg" className="img-fluid rounded" alt="KIT Universität" />
          </div>
          {/* Text Content */}
          <div className="col-md-6 text-light">
            <h4 className="text-uppercase">
              {text(indexT, 902) ||
                (lang === 'en'
                  ? 'How did my academic education shape my work as an inventor?'
                  : 'Welche Rolle spielte meine akademische Ausbildung für meine Arbeit als Erfinder?')}
            </h4>
            <AnimatedText className="fs-5">
              <p className="lh-base" dangerouslySetInnerHTML={{ __html: tr(indexT, 906) }} />
            </AnimatedText>
          </div>
        </div>

        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-md-6 text-light">
            <h4 className="text-uppercase" dangerouslySetInnerHTML={{ __html: tr(indexT, 915) }} />
            <AnimatedText className="fs-5">
              <p
                className="lh-base"
                dangerouslySetInnerHTML={{
                  __html:
                    tr(indexT, 918) +
                    ' class="mt-3" target="_blank" rel="noreferrer">www.elpuntavui.cat</a>',
                }}
              />
              <ul>
                {MEDALS.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
              <p>
                <a
                  href="https://www.tapatalk.com/groups/eph612fr/floating-shoes-make-dreams-true-t4096.html"
                  className="mt-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.tapatalk.com
                </a>
              </p>
            </AnimatedText>
          </div>
          {/* Image Placeholder */}
          <div className="col-md-6">
            <img
              src="images/Spanisch.jpg"
              className="img-fluid rounded"
              alt="Spanischer Artikel"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
