import { useEffect } from 'react';
import { references } from '../data/references';
import { useI18n, indexT } from '../i18n';

const REFERENCES_STYLE = `
  #references .references-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    margin-top: 30px;
  }

  #references .reference-item {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    padding: 15px;
    height: 120px;
    transition: all 0.3s ease;
    text-decoration: none;
    cursor: pointer;
    overflow: hidden;
  }

  #references .reference-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    border-color: #999;
  }

  #references .reference-item img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    display: block;
  }

  #references .reference-item iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (max-width: 768px) {
    #references .references-grid {
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 15px;
    }

    #references .reference-item {
      height: 100px;
      padding: 10px;
    }
  }

  @media (max-width: 480px) {
    #references .references-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    #references .reference-item {
      height: 80px;
      padding: 8px;
    }
  }
`;

/** Interviews & Medien section (index.php L656-885), including the scoped
 *  <style> block from L656-721 and the no-op Swiper script position. */
export function References() {
  const { lang, tr } = useI18n();

  useEffect(() => {
    const id = 'references-inline-style';
    if (!document.getElementById(id)) {
      const el = document.createElement('style');
      el.id = id;
      el.textContent = REFERENCES_STYLE;
      document.head.appendChild(el);
    }
  }, []);

  return (
    <section id="references" style={{ paddingTop: '30px', backgroundColor: '#1f1f1f' }}>
      <div className="container py-5">
        <h2 className="text-center mb-5 text-uppercase text-light">Interviews &amp; Medien</h2>
        <div dangerouslySetInnerHTML={{ __html: tr(indexT, 726) }} />

        <div className="references-grid">
          {references.map((r, i) => (
            <a
              key={i}
              href={r.href}
              className="reference-item"
              target="_blank"
              rel="noreferrer"
              title={lang === 'de' ? r.title_de : r.title_en}
            >
              <img
                src={r.img}
                className="img-fluid rounded"
                alt={lang === 'de' ? r.alt_de : r.alt_en}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
