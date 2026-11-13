// Turns a single-ink (navy) Kawung Convergence production SVG into a theme-aware inline SVG:
// the symbol takes --logo-mark (navy on light, gold on dark) and everything else takes currentColor.
interface Options {
  label?: string;
  className?: string;
  viewBox?: string;
  /** Extra markup inserted right after the opening <svg> tag (e.g. a background disc). */
  prepend?: string;
}

export function themeSvg(raw: string, { label, className = '', viewBox, prepend = '' }: Options = {}): string {
  let s = raw
    .replace(/<title[^>]*>[\s\S]*?<\/title>/, '')
    .replace(/\s(width|height)="[^"]*"/g, (m, _attr, offset) => (offset < raw.indexOf('>') ? '' : m))
    .replace(/\srole="img"/, '')
    .replace(/\saria-labelledby="title"/, '');

  // Symbol: four arcs share one stroked group; the centre dot is r=21.2.
  s = s.replace(/stroke="#071425"(\s+stroke-width="16\.4")/g, 'class="kc-mark-stroke"$1');
  s = s.replace(/(r="21\.2")\s+fill="#071425"/g, '$1 class="kc-mark-fill"');
  // pathLength="1" lets CSS draw each arc with stroke-dasharray: 1 (see .kc-draw in global.css).
  s = s.replace(/<path transform="rotate\(/g, '<path pathLength="1" transform="rotate(');
  // Everything else (letters, seal ring) follows the text colour.
  s = s.replace(/stroke="#071425"/g, 'stroke="currentColor"').replace(/fill="#071425"/g, 'fill="currentColor"');

  if (viewBox) s = s.replace(/viewBox="[^"]*"/, `viewBox="${viewBox}"`);

  const a11y = label ? `role="img" aria-label="${label}"` : 'aria-hidden="true" focusable="false"';
  return s.replace(/<svg\b/, `<svg ${a11y} class="${className}"`).replace(/(<svg\b[^>]*>)/, `$1${prepend}`);
}
