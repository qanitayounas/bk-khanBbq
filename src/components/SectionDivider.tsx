export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-2">
      <div className="gold-line" />
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        className="text-gold opacity-60"
      >
        <path
          d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z"
          fill="currentColor"
        />
      </svg>
      <div className="gold-line" />
    </div>
  );
}
