export type Accent = 'cyan' | 'mint' | 'violet' | 'amber';

/**
 * Mapping semantik (§10) — ENGINEERING→cyan · PRODUCTS→mint · RESEARCH→violet · JOURNEY→amber
 * Kelas Tailwind ditulis statis supaya terdeteksi compiler (tidak boleh dibentuk dinamis).
 */
export const accents: Record<
  Accent,
  {
    text: string;
    hoverText: string;
    hoverBorder: string;
    border: string;
    bg: string;
    bgSoft: string;
    glow: string;
    dot: string;
    hex: string;
  }
> = {
  cyan: {
    text: 'text-cyan-400',
    hoverText: 'hover:text-cyan-400',
    hoverBorder: 'hover:border-cyan-400',
    border: 'border-cyan-400/45',
    bg: 'bg-cyan-400',
    bgSoft: 'bg-cyan-400/10',
    glow: 'glow-cyan',
    dot: 'dot-live',
    hex: '#38C7FF',
  },
  mint: {
    text: 'text-mint-400',
    hoverText: 'hover:text-mint-400',
    hoverBorder: 'hover:border-mint-400',
    border: 'border-mint-400/45',
    bg: 'bg-mint-400',
    bgSoft: 'bg-mint-400/10',
    glow: 'glow-mint',
    dot: 'dot-live',
    hex: '#45E6B5',
  },
  violet: {
    text: 'text-violet-400',
    hoverText: 'hover:text-violet-400',
    hoverBorder: 'hover:border-violet-400',
    border: 'border-violet-400/45',
    bg: 'bg-violet-400',
    bgSoft: 'bg-violet-400/10',
    glow: 'glow-violet',
    dot: 'dot-research',
    hex: '#A78BFA',
  },
  amber: {
    text: 'text-amber-400',
    hoverText: 'hover:text-amber-400',
    hoverBorder: 'hover:border-amber-400',
    border: 'border-amber-400/45',
    bg: 'bg-amber-400',
    bgSoft: 'bg-amber-400/10',
    glow: 'glow-journey',
    dot: 'dot-active',
    hex: '#FBCB5D',
  },
};

/** Status label (§30) — indikator status, bukan persentase palsu. */
export const statusLabels: Record<string, string> = {
  live: 'Production',
  early: 'Early Access',
  building: 'Building',
  shipped: 'Shipped',
  internal: 'Internal',
  research: 'Researching',
  next: 'Preparing',
};
