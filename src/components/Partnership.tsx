import { AnimatedText } from './AnimatedText';
import { partnershipT, useI18n } from '../i18n';

/** Partnership page body (partnership.php L470-563). */
export function Partnership() {
  const { tr } = useI18n();

  return (
    <section id="/partnership.php" style={{ paddingTop: '30px' }}>
      <div className="container py-5">
        <div className="row align-items-center mb-5">
          {/* Image Placeholder */}
          <div className="col-md-6">
            <div
              style={{
                position: 'relative',
                paddingBottom: '56.25%',
                height: 0,
                overflow: 'hidden',
                borderRadius: '.5rem',
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/Io3yHXm8AjA?si=1l3rb8WbjxpnpgRH"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              ></iframe>
            </div>
          </div>

          {/* Text Content */}
          <div className="col-md-6">
            <div dangerouslySetInnerHTML={{ __html: tr(partnershipT, 491) }} />
            <AnimatedText className="fs-5">
              <div dangerouslySetInnerHTML={{ __html: tr(partnershipT, 494) }} />
            </AnimatedText>
          </div>
        </div>

        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-md-6">
            <div dangerouslySetInnerHTML={{ __html: tr(partnershipT, 501) }} />
            <AnimatedText className="fs-5">
              <div dangerouslySetInnerHTML={{ __html: tr(partnershipT, 504) }} />
            </AnimatedText>
          </div>
          {/* Image Placeholder */}
          <div className="col-md-6">
            <div
              style={{
                position: 'relative',
                paddingBottom: '56.25%',
                height: 0,
                overflow: 'hidden',
                borderRadius: '.5rem',
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/jOcQJzqZFws?si=uWmTLRuUG9iaQSNT"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row align-items-center mb-5">
          {/* Image Placeholder */}
          <div className="col-md-6">
            <img
              src="images/mohsen11.jpeg"
              className="img-fluid rounded"
              alt="Placeholder Image 1"
            />
          </div>
          {/* Text Content */}
          <div className="col-md-6">
            <div dangerouslySetInnerHTML={{ __html: tr(partnershipT, 535) }} />
            <AnimatedText className="fs-5">
              <div dangerouslySetInnerHTML={{ __html: tr(partnershipT, 539) }} />
            </AnimatedText>
          </div>
        </div>

        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-md-6">
            <div dangerouslySetInnerHTML={{ __html: tr(partnershipT, 548) }} />
            <AnimatedText className="fs-5">
              <div dangerouslySetInnerHTML={{ __html: tr(partnershipT, 551) }} />
            </AnimatedText>
          </div>
          {/* Image Placeholder */}
          <div className="col-md-6">
            <img
              src="images/partnership/partnership1.jpg"
              className="img-fluid rounded"
              alt="Placeholder Image 2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
