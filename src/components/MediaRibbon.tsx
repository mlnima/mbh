import type { RefEntry } from '../data/references';
import { useI18n } from '../i18n';

interface MediaRibbonProps {
  /** The 75 reference entries; the track is duplicated for the seamless
   *  -50% loop. Pass an empty array to render the empty ribbon (partnership
   *  page, partnership.php L571). */
  items: RefEntry[];
}

/**
 * Bottom scrolling media-logo ribbon (index.php L952-1405). The track is
 * rendered twice (150 anchors) and animated with
 * `media-logo-scroll 45s linear infinite` translateX(0 -> -50%), defined in
 * the head <style> block.
 */
export function MediaRibbon({ items }: MediaRibbonProps) {
  const { lang } = useI18n();

  const renderSet = (keyPrefix: string) =>
    items.map((r, i) => (
      <a
        key={`${keyPrefix}${i}`}
        href={r.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={r.img} alt={lang === 'de' ? r.alt_de : r.alt_en} />
      </a>
    ));

  return (
    <div className="media-logo-ribbon">
      <div className="media-logo-track">
        {renderSet('a')}
        {renderSet('b')}
      </div>
    </div>
  );
}
