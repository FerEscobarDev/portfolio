export default function Loading() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-[var(--color-accent)] font-bold text-3xl">
            {"</>"}
          </span>
        </div>
        <div className="flex gap-1">
          <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full animate-bounce [animation-delay:-0.3s]" />
          <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full animate-bounce [animation-delay:-0.15s]" />
          <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full animate-bounce" />
        </div>
        <span className="text-[var(--color-text-secondary)] text-sm font-primary">
          Cargando...
        </span>
      </div>
    </div>
  );
}
