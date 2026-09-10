import { ArrowRight, SlidersHorizontal } from "lucide-react";

const quickAccess = ["PALERMO", "RECOLETA", "BELGRANO", "COLEGIALES"];

export function SearchBar() {
  return (
    <form className="max-w-2xl rounded-[var(--radius-md)] border border-[#F1E4D3]/65 bg-ivory/[0.86] p-4 shadow-[0_6px_22px_rgba(45,38,32,0.045)] backdrop-blur-[1.5px] md:p-5">
      <label className="block">
        <span className="label-caps mb-3 block text-ink/70">
          ¿Dónde querés vivir?
        </span>
        <span className="flex items-end gap-3 border-b border-taupe/70 pb-2 transition-colors duration-300 focus-within:border-ink">
          <input
            className="min-w-0 flex-1 bg-transparent p-0 text-base text-ink outline-none placeholder:text-taupe md:text-lg"
            placeholder="Barrio o zona"
            type="text"
          />
          <button
            className="arrow-link focus-ring inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] bg-ink text-ivory transition-colors duration-300 hover:bg-taupe hover:text-ink"
            type="submit"
            aria-label="Buscar alquileres"
          >
            <ArrowRight aria-hidden="true" size={17} />
          </button>
        </span>
      </label>
      <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-1">
        {quickAccess.map((neighborhood) => (
          <button
            className="focus-ring shrink-0 rounded-[var(--radius-sm)] border border-taupe/50 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-label text-ink/75 transition-all duration-300 hover:-translate-y-px hover:border-beige hover:bg-beige/70 hover:text-ink"
            type="button"
            key={neighborhood}
          >
            {neighborhood}
          </button>
        ))}
        <button
          className="focus-ring inline-flex shrink-0 items-center gap-2 rounded-[var(--radius-sm)] px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-label text-muted transition-colors duration-300 hover:bg-sand/60 hover:text-ink"
          type="button"
        >
          <SlidersHorizontal aria-hidden="true" size={16} />
          Más filtros +
        </button>
      </div>
    </form>
  );
}
