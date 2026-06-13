'use client';

/**
 * Renders emoji as Apple-style images for cross-platform consistency.
 * Uses emoji-datasource-apple via jsDelivr CDN.
 *
 * Usage: <Emoji symbol="👋" size={48} />
 */

interface EmojiProps {
  symbol: string;
  size?: number;
  className?: string;
}

function emojiToCodepoint(emoji: string): string {
  const codepoints: string[] = [];
  for (const char of emoji) {
    const cp = char.codePointAt(0);
    if (cp && cp !== 0xfe0f) {
      codepoints.push(cp.toString(16));
    }
  }
  return codepoints.join('-');
}

export default function Emoji({ symbol, size = 24, className }: EmojiProps) {
  const codepoint = emojiToCodepoint(symbol);
  const src = `https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.1.2/img/apple/64/${codepoint}.png`;

  return (
    <img
      src={src}
      alt={symbol}
      width={size}
      height={size}
      className={className}
      draggable={false}
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    />
  );
}
