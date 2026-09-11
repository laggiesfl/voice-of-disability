import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#F7F4EF',
          padding: '56px 68px',
          fontFamily: 'Arial, Helvetica, sans-serif',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            width: '470px',
            height: '470px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            marginRight: '54px',
          }}
        >
          <div style={{ position: 'absolute', top: '14px', left: '161px', width: '148px', height: '68px', borderRadius: '42px', background: '#17324D', transform: 'rotate(18deg)' }} />
          <div style={{ position: 'absolute', top: '161px', right: '14px', width: '148px', height: '68px', borderRadius: '42px', background: '#7A1F5C', transform: 'rotate(108deg)' }} />
          <div style={{ position: 'absolute', bottom: '14px', left: '161px', width: '148px', height: '68px', borderRadius: '42px', background: '#D9A441', transform: 'rotate(198deg)' }} />
          <div style={{ position: 'absolute', top: '161px', left: '14px', width: '148px', height: '68px', borderRadius: '42px', background: '#C04A7A', transform: 'rotate(288deg)' }} />
          <div style={{ width: '202px', height: '202px', borderRadius: '50%', background: '#F7F4EF' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
          <div
            style={{
              fontSize: 72,
              lineHeight: 0.98,
              fontWeight: 800,
              color: '#17324D',
              letterSpacing: '-0.025em',
              maxWidth: '510px',
            }}
          >
            VOICE OF DISABILITY
          </div>
        </div>
      </div>
    ),
    size,
  );
}
