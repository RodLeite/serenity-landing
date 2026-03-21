type EyebrowProps = {
  text: string;
};

export default function Eyebrow({ text }: EyebrowProps) {
  return (
    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-bronze mb-3">
      {text}
    </span>
  );
}
