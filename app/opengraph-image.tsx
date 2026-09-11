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
          padding: '54px',
          fontFamily: 'Arial, Helvetica, sans-serif',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#7A1F5C',
            borderRadius: '34px',
            padding: '54px 62px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', width: '72%' }}>
            <div
              style={{
                fontSize: 28,
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '0.05em',
                marginBottom: '18px',
              }}
            >
              Voice of Disability
            </div>
            <div
              style={{
                fontSize: 68,
                lineHeight: 1.02,
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: '24px',
              }}
            >
              Nothing About Us Without Us
            </div>
            <div style={{ fontSize: 30, lineHeight: 1.3, color: '#FFFFFF' }}>
              Your voice. Your rights. Your community.
            </div>
          </div>

          <div
            aria-hidden="true"
            style={{
              width: '190px',
              height: '190px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ position: 'absolute', top: '4px', left: '65px', width: '60px', height: '28px', borderRadius: '20px', background: '#17324D', transform: 'rotate(18deg)' }} />
            <div style={{ position: 'absolute', top: '65px', right: '4px', width: '60px', height: '28px', borderRadius: '20px', background: '#7A1F5C', transform: 'rotate(108deg)' }} />
            <div style={{ position: 'absolute', bottom: '4px', left: '65px', width: '60px', height: '28px', borderRadius: '20px', background: '#D9A441', transform: 'rotate(198deg)' }} />
            <div style={{ position: 'absolute', top: '65px', left: '4px', width: '60px', height: '28px', borderRadius: '20px', background: '#C04A7A', transform: 'rotate(288deg)' }} />
            <div style={{ width: '82px', height: '82px', borderRadius: '50%', background: '#F7F4EF' }} />
          </div>
        </div>
      </div>
    ),
    size,
  );
}
