import { indexT, useI18n } from '../i18n';

/**
 * Floating message button + Bootstrap modal (index.php L420-466).
 * The modal is opened by the CDN Bootstrap JS via data-bs-toggle, so the
 * markup stays stable across React renders.
 */
export function NachrichtButton() {
  const { tr } = useI18n();

  return (
    <>
      <button
        id="nachricht-button"
        type="button"
        className="btn btn-primary"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '10vmin',
          height: '10vmin',
          zIndex: 10001,
          padding: 0,
          borderRadius: '50%',
          fontSize: '24px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'transform 0.2s',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
        data-bs-toggle="modal"
        data-bs-target="#nachrichtModal"
      >
        <img
          src="images/Mohsen-Nachricht.jpg"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '50%',
            animation: 'pulse 2s infinite',
            boxShadow: '0 0 15px rgba(176,177,179, 0.8)',
          }}
          alt="Mohsen Bahmani"
        />
      </button>

      <div
        className="modal fade"
        id="nachrichtModal"
        tabIndex={-1}
        aria-labelledby="nachrichtModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div
            className="modal-content"
            style={{ backgroundColor: 'rgba(47, 47, 47, 1)' }}
          >
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}
              ></button>
            </div>
            {/* Entry 459 carries its own trailing </div> (the original
                modal-body closing tag), so it is injected directly into
                modal-body exactly like the original HTML. */}
            <div className="modal-body" dangerouslySetInnerHTML={{ __html: tr(indexT, 459) }} />
            <div className="modal-footer">
              {/* Entry 462 is the full <a>…</a> markup. */}
              <div dangerouslySetInnerHTML={{ __html: tr(indexT, 462) }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
