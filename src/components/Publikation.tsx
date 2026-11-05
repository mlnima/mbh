import { AnimatedText } from './AnimatedText';
import { indexT, useI18n } from '../i18n';

/** Publikationen & Patente section (index.php L510-653). */
export function Publikation() {
  const { tr, lang } = useI18n();

  return (
    <section id="Publikation" className="text-dark">
      <div className="container py-5">
        {/* Section Title */}
        <div dangerouslySetInnerHTML={{ __html: tr(indexT, 513) }} />

        <div className="row align-items-center mb-5">
          {/* Right Column: Wikipedia wordmark */}
          <div className="col-md-6 bg-white rounded shadow-lg p-4 d-flex align-items-center justify-content-center">
            <img
              src="https://en.wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-en-25.svg"
              className="img-fluid"
              style={{ width: '100%' }}
              alt="Wikipedia Image"
            />
          </div>

          <div className="col-md-6">
            <div className="card bg-dark text-white border-0 shadow-lg h-100">
              <div dangerouslySetInnerHTML={{ __html: tr(indexT, 529) }} />
              <div dangerouslySetInnerHTML={{ __html: tr(indexT, 530) }} />
              <div dangerouslySetInnerHTML={{ __html: tr(indexT, 531) }} />
              <p>
                <strong>
                  <a
                    href="https://en.wikipedia.org/wiki/Mohsen_Bahmani"
                    className="mt-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {(() => {
                      const raw = tr(indexT, 535);
                      const gt = raw.indexOf('>');
                      const link = gt >= 0 ? raw.slice(gt + 1).replace(/<\/a>.*$/, '') : raw;
                      return link || 'Meinen Wikipedia-Artikel lesen';
                    })()}
                  </a>
                </strong>
              </p>
            </div>
          </div>
        </div>

        {/* First Row */}
        <div className="row align-items-center mb-5">
          {/* Left Column: Description */}
          <div className="col-md-6">
            <h4
              className="text-uppercase"
              dangerouslySetInnerHTML={{
                __html:
                  tr(indexT, 548) ||
                  (lang === 'en'
                    ? 'Revolutionizing Drone Technology                </h4>'
                    : 'Revolutionierung der Drohnentechnologie                </h4>'),
              }}
            />
            {/* Original: <p class="fs-5 animated-text lh-base"> (index.php L550) */}
            <AnimatedText tag="p" className="fs-5 lh-base">
              {tr(indexT, 551)}
            </AnimatedText>

            <a
              href="https://worldwide.espacenet.com/publicationDetails/biblio?FT=D&locale=en_EP&CC=EP&NR=3565971B8&KC=B8"
              className="mt-3"
              target="_blank"
              rel="noreferrer"
            >
              Mohsen Bahmani Patent Link (1)
            </a>
            <br />
            <a
              href="https://pubchem.ncbi.nlm.nih.gov/patent/EP-3565971-B8"
              className="mt-3"
              target="_blank"
              rel="noreferrer"
            >
              Mohsen Bahmani Patent Link (2)
            </a>
            <br />
            <a
              href="https://www.mansory.com/news/revolutionizing-drone-technology"
              className="mt-3"
              target="_blank"
              rel="noreferrer"
            >
              www.mansory.com
            </a>
            <br />
            <a
              href="https://revistafullpower.com.br/preparadora-mansory-revela-conceito-de-carro-voador-cheio-de-misterios/"
              className="mt-3"
              target="_blank"
              rel="noreferrer"
            >
              revistafullpower.com.br
            </a>
          </div>

          {/* Right Column: Video */}
          <div className="col-md-6">
            <video
              autoPlay
              loop
              muted
              controls
              className="img-fluid rounded shadow-lg"
              style={{ width: '100%' }}
            >
              <source src="images/output.mp4" type="video/mp4" />
              Dein Browser unterstützt das Video-Format nicht.
            </video>
          </div>
        </div>

        {/* Second Row: Three Cards */}
        <div className="row text-center">
          {/* Service 1 */}
          <div className="col-md-4 mb-4">
            <div className="card bg-dark text-white border-0 shadow-lg h-100">
              <div className="card-body">
              <div dangerouslySetInnerHTML={{ __html: tr(indexT, 585) }} />
                <AnimatedText className="fs-5">
                  <p dangerouslySetInnerHTML={{ __html: tr(indexT, 588) }} />
                  <a
                    href="https://worldwide.espacenet.com/publicationDetails/biblio?FT=D&locale=en_EP&CC=EP&NR=3565971B8&KC=B8"
                    className="mt-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Mohsen Bahmani Patent Link (1)
                  </a>
                  <br />
                  <a
                    href="https://pubchem.ncbi.nlm.nih.gov/patent/EP-3565971-B8"
                    className="mt-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Mohsen Bahmani Patent Link (2)
                  </a>
                  <br />
                  <a
                    href="https://patents.google.com/patent/EP3565971B8/en"
                    className="mt-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Mohsen Bahmani Patent Link (3)
                  </a>
                  <br />
                  <a
                    href="https://www.mansory.com/news/revolutionizing-drone-technology"
                    className="mt-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.mansory.com
                  </a>
                  <br />
                  <a
                    href="https://revistafullpower.com.br/preparadora-mansory-revela-conceito-de-carro-voador-cheio-de-misterios/"
                    className="mt-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    revistafullpower.com.br
                  </a>
                </AnimatedText>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-md-4 mb-4">
            <div className="card bg-dark text-white border-0 shadow-lg h-100">
              <div className="card-body">
                <h4 className="fw-bold" dangerouslySetInnerHTML={{ __html: tr(indexT, 610) }} />
                <AnimatedText className="fs-5">
                  <p dangerouslySetInnerHTML={{ __html: tr(indexT, 613) }} />
                  <a
                    href="https://www.youtube.com/watch?v=Rl6mEfcSqzI"
                    className="mt-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.youtube.com
                  </a>
                  <br />
                  <a
                    href="https://www.elpuntavui.cat/article/2-societat/5-societat/54913-sabates-per-caminar-sobre-laigua.html"
                    className="mt-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.elpuntavui.cat
                  </a>
                  <br />
                  <a
                    href="https://www.mehrnews.com/news/679500/%D8%A7%D8%A8%D8%AF%D8%A7%D8%B9-%DA%A9%D9%81%D8%B4%D9%87%D8%A7%DB%8C-%D8%B4%D9%86%D8%A7%D9%88%D8%B1-%D8%A8%D8%B1%D8%A7%DB%8C-%D9%82%D8%AF%D9%85-%D8%B2%D8%AF%D9%86-%D8%B1%D9%88%DB%8C-%D8%A2%D8%A8-%D8%AA%D9%88%D8%B3%D8%B7-%D9%85%D8%AD%D9%82%D9%82-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C"
                    className="mt-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.mehrnews.com
                  </a>
                  <br />
                  <a
                    href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://epsevg.upc.edu/ca/noticies/principal/files/novetats/novetat_864_article-el-punt.pdf&ved=2ahUKEwi2xO26y8KQAxXYR_EDHQiWD-A4PBAWegQIKxAB&usg=AOvVaw27az3L9jNjlwzzliFTLiX6"
                    className="mt-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    PAISOS CATALANS
                  </a>
                </AnimatedText>
              </div>
            </div>
          </div>

          {/* Service 3 - AVA AERO Article */}
          <div className="col-md-4 mb-4">
            <div className="card bg-dark text-white border-0 shadow-lg h-100">
              <div className="card-body">
                <h4 className="fw-bold" dangerouslySetInnerHTML={{ __html: tr(indexT, 633) }} />
                <AnimatedText className="fs-5">
                  <p dangerouslySetInnerHTML={{ __html: tr(indexT, 636) }} />
                  <a
                    href="https://www.avaet.com/post/drone-propulsion-systems-innovations-new-technologies-and-leading-manufacturers"
                    className="mt-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.avaet.com
                  </a>
                  <br />
                  <a
                    href="https://patents.google.com/patent/EP3565971B8/en"
                    className="mt-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    google patent
                  </a>
                </AnimatedText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
