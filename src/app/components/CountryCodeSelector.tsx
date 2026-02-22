import { useState, useRef, useEffect } from 'react';
import { countryCodes, getCountryByIso, type CountryCode } from '../waitlist/countryCodes';

interface CountryCodeSelectorProps {
  value: string; // ISO code e.g. 'PE'
  onChange: (iso: string) => void;
}

export function CountryCodeSelector({ value, onChange }: CountryCodeSelectorProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const selected = getCountryByIso(value) ?? countryCodes[0];

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open]);

  // Focus search on open
  useEffect(() => {
    if (open) {
      searchRef.current?.focus();
    } else {
      setSearch('');
    }
  }, [open]);

  const filtered = search.trim()
    ? countryCodes.filter((c) => {
        const q = search.toLowerCase();
        return (
          c.nameEs.toLowerCase().includes(q) ||
          c.name.toLowerCase().includes(q) ||
          c.dial.includes(q)
        );
      })
    : countryCodes;

  function handleSelect(country: CountryCode) {
    onChange(country.iso);
    setOpen(false);
  }

  return (
    <div ref={containerRef} className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 bg-white/[0.06] border border-white/[0.12] rounded-[14px] px-3.5 py-3 text-bilio-text font-body text-[15px] cursor-pointer hover:border-bilio-primary/30 transition-[border-color] duration-200 whitespace-nowrap"
      >
        <span>{selected.flag}</span>
        <span className="text-white/60">{selected.dial}</span>
        <svg
          className={`w-3 h-3 text-white/40 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 12 12"
          fill="none"
        >
          <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full left-0 mt-1.5 w-[260px] bg-[#1a1a18] border border-white/[0.12] rounded-[12px] shadow-[0_8px_32px_rgba(0,0,0,0.5)] z-50 overflow-hidden">
          {/* Search */}
          <div className="p-2 border-b border-white/[0.08]">
            <input
              ref={searchRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar país..."
              className="w-full bg-white/[0.06] border border-white/[0.08] rounded-[8px] px-3 py-2 text-bilio-text font-body text-sm outline-none placeholder:text-white/30 focus:border-bilio-primary/30 transition-[border-color] duration-200"
            />
          </div>

          {/* List */}
          <div className="max-h-[200px] overflow-y-auto">
            {filtered.length === 0 ? (
              <div className="px-3 py-3 text-white/30 font-body text-sm text-center">
                Sin resultados
              </div>
            ) : (
              filtered.map((country) => (
                <button
                  key={country.iso}
                  type="button"
                  onClick={() => handleSelect(country)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-left cursor-pointer transition-colors duration-150 hover:bg-white/[0.06] ${
                    country.iso === value ? 'bg-bilio-primary/10 text-bilio-primary' : 'text-bilio-text'
                  }`}
                >
                  <span className="text-base">{country.flag}</span>
                  <span className="flex-1 font-body text-sm truncate">{country.nameEs}</span>
                  <span className="font-body text-sm text-white/40">{country.dial}</span>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
