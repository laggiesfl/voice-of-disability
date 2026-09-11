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
          background: '#F7F4EF',
          padding: '72px 80px',
          fontFamily: 'Arial, Helvetica, sans-serif',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            width: '330px',
            height: '330px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            marginRight: '72px',
          }}
        >
          <div style={{ position: 'absolute', top: '10px', left: '113px', width: '104px', height: '48px', borderRadius: '30px', background: '#17324D', transform: 'rotate(18deg)' }} />
          <div style={{ position: 'absolute', top: '113px', right: '10px', width: '104px', height: '48px', borderRadius: '30px', background: '#7A1F5C', transform: 'rotate(108deg)' }} />
          <div style={{ position: 'absolute', bottom: '10px', left: '113px', width: '104px', height: '48px', borderRadius: '30px', background: '#D9A441', transform: 'rotate(198deg)' }} />
          <div style={{ position: 'absolute', top: '113px', left: '10px', width: '104px', height: '48px', borderRadius: '30px', background: '#C04A7A', transform: 'rotate(288deg)' }} />
          <div style={{ width: '142px', height: '142px', borderRadius: '50%', background: '#F7F4EF' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.02,
              fontWeight: 800,
              color: '#17324D',
              letterSpacing: '-0.02em',
              marginBottom: '26px',
            }}
          >
            VOICE OF DISABILITY
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.2,
              fontWeight: 700,
              color: '#7A1F5C',
            }}
          >
            Nothing About Us Without Us
          </div>
        </div>
      </div>
    ),
    size,
  );
}
