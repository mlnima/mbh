import { AnimatedText } from './AnimatedText';
import { indexT, useI18n } from '../i18n';

/** About section (index.php L470-507). */
export function About() {
  const { tr } = useI18n();

  return (
    <section id="aboutus" style={{ paddingTop: '30px' }}>
      <div className="container py-5">
        {/* Section Title */}
        <div dangerouslySetInnerHTML={{ __html: tr(indexT, 473) }} />

        <div className="row align-items-center mb-5">
          {/* Image Placeholder */}
          <div className="col-md-6">
            <img
              src="images/mohsen11.jpeg"
              className="img-fluid rounded"
              alt="Mohsen Bahmani Portrait 1"
            />
          </div>
          {/* Text Content */}
          <div className="col-md-6">
            <h4 className="text-uppercase" dangerouslySetInnerHTML={{ __html: tr(indexT, 483) }} />
            <AnimatedText className="fs-5">
              <p className="lh-base" dangerouslySetInnerHTML={{ __html: tr(indexT, 486) }} />
            </AnimatedText>
          </div>
        </div>

        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-md-6">
            <h4 className="text-uppercase" dangerouslySetInnerHTML={{ __html: tr(indexT, 495) }} />
            <AnimatedText className="fs-5">
              <p className="lh-base" dangerouslySetInnerHTML={{ __html: tr(indexT, 498) }} />
            </AnimatedText>
          </div>
          {/* Image Placeholder */}
          <div className="col-md-6">
            <img
              src="images/mohsen9.jpeg"
              className="img-fluid rounded"
              alt="Mohsen Bahmani Portrait 2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
