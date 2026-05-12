import { useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

export function BeforeAfter({ image, alt }: { image: string; alt: string }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const move = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border shadow-card select-none cursor-ew-resize"
      onMouseMove={(e) => e.buttons === 1 && move(e.clientX)}
      onTouchMove={(e) => move(e.touches[0].clientX)}
      onClick={(e) => move(e.clientX)}
    >
      <img src={image} alt={`${alt} depois`} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={image}
          alt={`${alt} antes`}
          className="absolute inset-0 h-full w-full object-cover grayscale brightness-75"
          style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }}
        />
      </div>
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-primary shadow-gold"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-gold">
          <MoveHorizontal className="w-5 h-5" />
        </div>
      </div>
      <span className="absolute top-3 left-3 px-2 py-1 text-xs font-bold uppercase tracking-wider bg-background/80 text-muted-foreground rounded">Antes</span>
      <span className="absolute top-3 right-3 px-2 py-1 text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground rounded">Depois</span>
    </div>
  );
}
