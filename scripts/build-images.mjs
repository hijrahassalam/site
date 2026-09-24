import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

mkdirSync('public/images', { recursive: true });
mkdirSync('src/assets', { recursive: true });

const AVATAR = 'src/assets/pixel-avatar.png';

const bgSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
      <path d="M64 0H0V64" fill="none" stroke="#F4F7FC" stroke-opacity="0.045" stroke-width="1"/>
    </pattern>
    <radialGradient id="glow" cx="18%" cy="12%" r="70%">
      <stop offset="0%" stop-color="#38C7FF" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#38C7FF" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="92%" cy="88%" r="60%">
      <stop offset="0%" stop-color="#A78BFA" stop-opacity="0.14"/>
      <stop offset="100%" stop-color="#A78BFA" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="#050A18"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect width="1200" height="630" fill="url(#glow2)"/>

  <g font-family="Inter, DejaVu Sans, sans-serif">
    <text x="72" y="150" font-size="17" letter-spacing="4" fill="#64748B">[ PLAYER PROFILE ]</text>

    <text x="72" y="248" font-size="68" font-weight="700" fill="#F4F7FC" letter-spacing="-2">Hijrah Assalam</text>

    <text x="72" y="308" font-size="26" font-weight="500" fill="#38C7FF">AI Builder &#183; Full-Stack Engineer &#183; Applied AI</text>

    <text x="72" y="378" font-size="22" fill="#9DAAC0">Building production AI products and enterprise systems.</text>
    <text x="72" y="414" font-size="22" fill="#9DAAC0">Exploring biomedical AI research.</text>

    <g font-size="17" letter-spacing="2" fill="#9DAAC0">
      <text x="72" y="512" fill="#45E6B5">&#9679; ASISTENDIET</text>
      <text x="246" y="512" fill="#38C7FF">&#9679; BIDIKTENDER</text>
      <text x="72" y="548" fill="#A78BFA">&#9679; BIOMEDICAL AI RESEARCH</text>
    </g>
  </g>

  <rect x="836" y="98" width="292" height="434" fill="none" stroke="#38C7FF" stroke-opacity="0.45" stroke-width="2"/>
  <rect x="836" y="98" width="292" height="434" fill="#0D172A" fill-opacity="0.35"/>
</svg>`;

const frameSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect x="836" y="98" width="292" height="434" fill="none" stroke="#38C7FF" stroke-opacity="0.55" stroke-width="2"/>
  <rect x="1120" y="90" width="10" height="10" fill="#38C7FF" fill-opacity="0.8"/>
  <rect x="1120" y="530" width="10" height="10" fill="#38C7FF" fill-opacity="0.4"/>
</svg>`;

const avatar = await sharp(AVATAR)
  .resize(284, 426, { fit: 'cover', position: 'top' })
  .png()
  .toBuffer();

await sharp(Buffer.from(bgSvg))
  .composite([
    { input: avatar, left: 840, top: 102 },
    { input: Buffer.from(frameSvg), left: 0, top: 0 },
  ])
  .png({ quality: 92 })
  .toFile('public/images/og-default.png');

// Apple touch icon
await sharp(AVATAR).resize(180, 180, { fit: 'cover' }).png().toFile('public/images/apple-touch-icon.png');

// Favicon 32px + 512px PNG (fallback untuk browser tanpa SVG)
await sharp(AVATAR).resize(512, 512, { fit: 'cover' }).png().toFile('public/images/avatar-512.png');
await sharp(AVATAR).resize(600, 600, { fit: 'cover' }).webp({ quality: 82 }).toFile('src/assets/pixel-avatar.webp');

console.log('OG + icons generated');
