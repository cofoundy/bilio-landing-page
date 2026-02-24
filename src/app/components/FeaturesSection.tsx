"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useInView } from "framer-motion";
import { BilioLogoMark } from "./BilioLogo";
import waBgDark from "@/assets/d36bcceceaa1d390489ec70d93154311.jpg";
import { ScrollReveal } from "./motion/ScrollReveal";

/* ── Conversation Pool Types ── */
type VoiceContent = { type: "voice"; duration: string };
type UserContent = string | VoiceContent;

type BotExpense = { text: string; card: "expense"; category: string; amount: string; budgetPct: number; budgetText: string };
type BotDebt = { text: string; card: "debt"; label: string; who: string; amount: string };
type BotAnalytics = { text: string; card: "analytics"; rows: { cat: string; val: string; pct: number }[] };
type BotPlain = { text: string; card?: undefined };
type BotResponse = BotExpense | BotDebt | BotAnalytics | BotPlain;

type Conversation = { user: UserContent; bot: BotResponse };
type ChatMsg = { id: number; from: "user" | "bilio"; user?: UserContent; bot?: BotResponse; time: string };

const MAX_VISIBLE = 14;

/* ── Conversation Pool — 6 features × 2-3 variations each ── */
const conversationPool: Conversation[][] = [
  // EXPENSE TRACKING
  [
    { user: "Gasté 50 en almuerzo", bot: { text: "¡Registrado! 👍", card: "expense", category: "Comida 🍔", amount: "S/50.00", budgetPct: 64, budgetText: "Llevas S/320 de S/500 en Comida" } },
    { user: "Pagué 35 por el café y sandwich", bot: { text: "Listo ✅", card: "expense", category: "Comida 🍔", amount: "S/35.00", budgetPct: 71, budgetText: "Llevas S/355 de S/500 en Comida" } },
    { user: "120 en el super", bot: { text: "Anotado 🛒", card: "expense", category: "Comida 🍔", amount: "S/120.00", budgetPct: 88, budgetText: "Llevas S/440 de S/500 en Comida ⚠️" } },
  ],
  // VOICE MESSAGE
  [
    { user: { type: "voice", duration: "0:03" }, bot: { text: '🎤 "Uber al trabajo, quince soles"', card: "expense", category: "Transporte 🚗", amount: "S/15.00", budgetPct: 45, budgetText: "Llevas S/90 de S/200 en Transporte" } },
    { user: { type: "voice", duration: "0:04" }, bot: { text: '🎤 "Netflix, cuarenta y cuatro soles"', card: "expense", category: "Suscripciones 📱", amount: "S/44.90", budgetPct: 60, budgetText: "Llevas S/90 de S/150 en Suscripciones" } },
    { user: { type: "voice", duration: "0:02" }, bot: { text: '🎤 "Taxi a casa, diez soles"', card: "expense", category: "Transporte 🚗", amount: "S/10.00", budgetPct: 50, budgetText: "Llevas S/100 de S/200 en Transporte" } },
  ],
  // BUDGET CHECK
  [
    { user: "¿Puedo gastar 200 en zapatillas?", bot: { text: "Mmm, te quedarían solo S/30 en Compras este mes. Yo lo pensaría 🤔" } },
    { user: "¿Me alcanza para salir a cenar?", bot: { text: "Te quedan S/180 en Comida. Sí alcanza, pero sin pasarte 😉" } },
    { user: "¿Puedo pedir delivery hoy?", bot: { text: "Vas bien! Te quedan S/150 en Comida. Dale nomás 🍕" } },
  ],
  // DEBT TRACKING
  [
    { user: "Le presté 100 a Carlos", bot: { text: "Anotado ✅", card: "debt", label: "Te debe", who: "Carlos", amount: "S/100.00" } },
    { user: "María me pagó los 50", bot: { text: "¡Saldado! 🎉 María ya no te debe nada" } },
    { user: "Le debo 80 a Diego por la cena", bot: { text: "Anotado 📝", card: "debt", label: "Le debes a", who: "Diego", amount: "S/80.00" } },
  ],
  // ANALYTICS
  [
    { user: "¿En qué se me va la plata?", bot: { text: "Este mes llevas S/1,250:", card: "analytics", rows: [{ cat: "Comida 🍔", val: "S/420", pct: 100 }, { cat: "Transporte 🚗", val: "S/280", pct: 67 }, { cat: "Entretenimiento 🎬", val: "S/190", pct: 45 }, { cat: "Compras 🛍️", val: "S/170", pct: 40 }] } },
    { user: "¿Cómo voy este mes?", bot: { text: "Llevas S/980 de S/2,000. Vas bien 👌", card: "analytics", rows: [{ cat: "Vivienda 🏠", val: "S/350", pct: 100 }, { cat: "Comida 🍔", val: "S/310", pct: 89 }, { cat: "Transporte 🚗", val: "S/180", pct: 51 }, { cat: "Salud 💊", val: "S/140", pct: 40 }] } },
  ],
  // STREAK
  [
    { user: "¿Cómo va mi racha?", bot: { text: "🔥 17 días seguidos registrando. ¡Vas volando! Tu récord es 23, ya casi lo rompes 💪" } },
    { user: "¿Cuántos días llevo?", bot: { text: "🔥 24 días seguidos. ¡NUEVO RÉCORD! Eres imparable 🏆" } },
    { user: "Racha", bot: { text: "🔥 8 días. La semana pasada perdiste la racha un miércoles. ¡Esta vez no! 💪" } },
  ],
];


/* ── Typing indicator ── */
function TypingDots() {
  return (
    <div className="flex justify-start">
      <div className="bg-[#1f2c34] rounded-[12px_12px_12px_3px] px-4 py-2.5 flex items-center gap-[5px]">
        {[0, 1, 2].map((d) => (
          <div
            key={d}
            className="w-[6px] h-[6px] rounded-full bg-[#8696a0]"
            style={{ animation: `wa-bounce 1.2s ${d * 0.15}s infinite` }}
          />
        ))}
      </div>
    </div>
  );
}

/* ── iOS Status Bar ── */
function IosStatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-3 pb-1">
      <span className="text-white font-heading text-[13px] font-semibold">9:41</span>
      <div className="flex items-center gap-[5px]">
        {/* Signal */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="white">
          <rect x="0" y="8" width="3" height="4" rx="0.5" opacity="0.4"/>
          <rect x="4.5" y="5" width="3" height="7" rx="0.5" opacity="0.6"/>
          <rect x="9" y="2" width="3" height="10" rx="0.5" opacity="0.8"/>
          <rect x="13.5" y="0" width="3" height="12" rx="0.5"/>
        </svg>
        {/* WiFi */}
        <svg width="15" height="12" viewBox="0 0 15 12" fill="none">
          <path d="M7.5 10.5a1 1 0 100 2 1 1 0 000-2z" fill="white"/>
          <path d="M4.5 8.5a4.24 4.24 0 016 0" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M2 6a7.07 7.07 0 0111 0" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
        {/* Battery */}
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
          <rect x="0.5" y="0.5" width="21" height="11" rx="2" stroke="white" strokeWidth="1" opacity="0.35"/>
          <rect x="2" y="2" width="17" height="8" rx="1" fill="white"/>
          <path d="M23 4v4a1.5 1.5 0 000-4z" fill="white" opacity="0.4"/>
        </svg>
      </div>
    </div>
  );
}

/* ── WA Contact Header ── */
function WaHeader() {
  return (
    <div className="bg-[#1f2c34] flex items-center gap-2 px-2.5 py-2">
      {/* Back arrow */}
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M12 5L7 10L12 15" stroke="#8696a0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {/* Avatar */}
      <div className="w-[34px] h-[34px] rounded-full bg-gradient-to-br from-bilio-whatsapp to-bilio-whatsapp-dark flex items-center justify-center overflow-hidden shrink-0">
        <BilioLogoMark size={20} />
      </div>
      {/* Name */}
      <div className="flex-1 min-w-0">
        <div className="text-[#e9edef] font-heading text-[15px] font-semibold leading-tight">Bilio AI</div>
        <div className="text-bilio-whatsapp font-body text-[12px] leading-tight">en línea</div>
      </div>
      {/* Action icons */}
      <div className="flex items-center gap-4">
        {/* Video */}
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="1" y="4" width="11" height="10" rx="1.5" stroke="#8696a0" strokeWidth="1.3"/>
          <path d="M12 7.5L17 5v8l-5-2.5" stroke="#8696a0" strokeWidth="1.3" strokeLinejoin="round"/>
        </svg>
        {/* Phone */}
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M6.6 3H4.5A1.5 1.5 0 003 4.5c0 5.8 4.7 10.5 10.5 10.5a1.5 1.5 0 001.5-1.5v-2.1a1 1 0 00-.7-1l-2.4-.7a1 1 0 00-1 .3l-.8.8A8 8 0 016.2 6.8l.8-.8a1 1 0 00.3-1l-.7-2.4a1 1 0 00-1 .4z" stroke="#8696a0" strokeWidth="1.3"/>
        </svg>
      </div>
    </div>
  );
}

/* ── WA Input Bar ── */
function WaInputBar() {
  return (
    <div className="bg-[#1f2c34] px-2 py-1.5 flex items-center gap-1.5">
      {/* Plus */}
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9.5" stroke="#8696a0" strokeWidth="1.2"/>
        <path d="M11 7v8M7 11h8" stroke="#8696a0" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
      {/* Text field */}
      <div className="flex-1 bg-[#2a3942] rounded-[20px] px-3.5 py-[7px] flex items-center">
        <span className="text-[#8696a0] font-body text-[14px]">Mensaje</span>
      </div>
      {/* Camera */}
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="5" width="18" height="13" rx="2" stroke="#8696a0" strokeWidth="1.2"/>
        <circle cx="11" cy="11.5" r="3.5" stroke="#8696a0" strokeWidth="1.2"/>
      </svg>
      {/* Mic */}
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="8.5" y="3" width="5" height="9" rx="2.5" stroke="#8696a0" strokeWidth="1.2"/>
        <path d="M6 11a5 5 0 0010 0" stroke="#8696a0" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M11 16v3" stroke="#8696a0" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

/* ── Budget progress bar (animates from 0 on mount) ── */
function BudgetBar({ pct }: { pct: number }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const id = setTimeout(() => setWidth(pct), 300);
    return () => clearTimeout(id);
  }, [pct]);
  return (
    <div className="h-1 rounded-full bg-white/10 mt-1.5 overflow-hidden">
      <div
        className="h-full rounded-full transition-[width] duration-1000 ease-out"
        style={{ width: `${width}%`, background: "linear-gradient(90deg, #FECE00, #FEB601)" }}
      />
    </div>
  );
}

/* ── Animated WhatsApp Mockup — Sliding Window ── */
function WhatsAppAnimatedMockup() {
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const msgId = useRef(0);
  const timeRef = useRef({ h: 9, m: 41 });
  const varIdx = useRef(conversationPool.map(() => 0));

  const getTime = useCallback((): string => {
    const { h, m } = timeRef.current;
    const t = `${h}:${String(m).padStart(2, "0")}`;
    timeRef.current.m++;
    if (timeRef.current.m >= 60) { timeRef.current.m = 0; timeRef.current.h++; }
    if (timeRef.current.h > 23) timeRef.current.h = 0;
    return t;
  }, []);

  const pick = useCallback((fi: number): Conversation => {
    const vars = conversationPool[fi]!;
    const idx = varIdx.current[fi] ?? 0;
    varIdx.current[fi] = (idx + 1) % vars.length;
    return vars[idx]!;
  }, []);

  const addMsg = useCallback((msg: ChatMsg) => {
    setMessages((prev) => {
      const next = [...prev, msg];
      return next.length > MAX_VISIBLE ? next.slice(next.length - MAX_VISIBLE) : next;
    });
  }, []);

  // Auto-scroll
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, showTyping]);

  // Infinite animation loop
  useEffect(() => {
    let active = true;
    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

    async function loop() {
      await sleep(1200);
      let fi = 0;

      while (active) {
        const conv = pick(fi);

        // User message
        addMsg({ id: msgId.current++, from: "user", user: conv.user, time: getTime() });
        await sleep(600);
        if (!active) return;

        // Typing indicator
        setShowTyping(true);
        await sleep(conv.bot.card ? 1400 : 1000);
        if (!active) return;
        setShowTyping(false);
        await sleep(150);
        if (!active) return;

        // Bot response
        addMsg({ id: msgId.current++, from: "bilio", bot: conv.bot, time: getTime() });
        await sleep(1800);
        if (!active) return;

        fi = (fi + 1) % conversationPool.length;
      }
    }

    loop();
    return () => { active = false; };
  }, [pick, getTime, addMsg]);

  return (
    <div className="relative w-[280px] h-[580px] md:w-[300px] md:h-[620px] rounded-[44px] border-[3px] border-[#2a2a2a] bg-black shadow-[0_40px_80px_rgba(0,0,0,0.6),0_0_60px_rgba(37,211,102,0.06)] overflow-hidden flex flex-col">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-black rounded-b-[16px] z-10" />

      <IosStatusBar />
      <WaHeader />

      {/* Messages area */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto overflow-x-hidden p-2.5 flex flex-col gap-[6px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        style={{
          backgroundImage: `url(${waBgDark})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {messages.map((msg) => {
          const isUser = msg.from === "user";
          const isVoice = isUser && typeof msg.user === "object" && msg.user?.type === "voice";

          return (
            <div
              key={msg.id}
              className={`flex ${isUser ? "justify-end" : "justify-start"}`}
              style={{ animation: `${isUser ? "wa-slide-right" : "wa-slide-left"} 0.3s ease-out` }}
            >
              <div
                className={`max-w-[82%] px-[10px] py-[6px] font-body text-[12.5px] leading-[1.45] text-[#e9edef] ${
                  isUser
                    ? "rounded-[10px_10px_3px_10px] bg-[#005c4b]"
                    : "rounded-[10px_10px_10px_3px] bg-[#1f2c34]"
                }`}
              >
                {/* User: voice */}
                {isUser && isVoice && (
                  <div className="flex items-center gap-2 text-bilio-whatsapp">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M7 2v6M5 4v4M3 5v2M9 4v4M11 5v2" />
                    </svg>
                    <span className="text-[#8696a0] text-[12px]">
                      Nota de voz · {(msg.user as VoiceContent).duration}
                    </span>
                  </div>
                )}

                {/* User: text */}
                {isUser && !isVoice && (msg.user as string)}

                {/* Bot: text + optional card */}
                {!isUser && msg.bot && (
                  <>
                    {msg.bot.text}

                    {msg.bot.card === "expense" && (
                      <div className="bg-[rgba(254,206,0,0.08)] border border-[rgba(254,206,0,0.15)] rounded-lg p-2 mt-1">
                        <div className="text-[13px] font-semibold text-bilio-primary">{msg.bot.category}</div>
                        <div className="text-[18px] font-bold text-white my-0.5">{msg.bot.amount}</div>
                        <BudgetBar pct={msg.bot.budgetPct} />
                        <div className="text-[9.5px] text-white/40 mt-1">{msg.bot.budgetText}</div>
                      </div>
                    )}

                    {msg.bot.card === "debt" && (
                      <div className="bg-[rgba(94,152,125,0.08)] border border-[rgba(94,152,125,0.2)] rounded-lg p-2 mt-1">
                        <div className="text-[11px] text-white/40">{msg.bot.label}</div>
                        <div className="text-[14px] font-semibold text-bilio-success">{msg.bot.who}</div>
                        <div className="text-[16px] font-bold text-white my-0.5">{msg.bot.amount}</div>
                      </div>
                    )}

                    {msg.bot.card === "analytics" && (
                      <div className="bg-[rgba(254,206,0,0.05)] border border-[rgba(254,206,0,0.1)] rounded-lg p-2 mt-1">
                        {msg.bot.rows.map((r, ri) => (
                          <div key={ri}>
                            <div className="flex justify-between items-center py-0.5 text-[11px]">
                              <span className="text-white/60">{r.cat}</span>
                              <span className="text-bilio-primary font-semibold">{r.val}</span>
                            </div>
                            <div className="h-[3px] rounded-full bg-white/[0.06] overflow-hidden mt-0.5">
                              <div className="h-full rounded-full bg-bilio-primary" style={{ width: `${r.pct}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}

                <div className="flex justify-end mt-[2px]">
                  <span className="text-[#8696a0] text-[9.5px]">
                    {msg.time}
                    {isUser && <span className="text-[#53bdeb] ml-0.5 text-[9px]">✓✓</span>}
                  </span>
                </div>
              </div>
            </div>
          );
        })}

        {showTyping && <TypingDots />}
      </div>

      <WaInputBar />

      {/* Home indicator */}
      <div className="flex justify-center py-1.5 bg-[#1f2c34]">
        <div className="w-[100px] h-[4px] rounded-full bg-white/20" />
      </div>
    </div>
  );
}

/* ── Expense breakdown mockup ── */
function ExpenseMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  const cats = [
    { emoji: "🍕", name: "Comida", pct: 35, amount: "S/420" },
    { emoji: "🚕", name: "Transporte", pct: 20, amount: "S/240" },
    { emoji: "🏠", name: "Vivienda", pct: 22, amount: "S/264" },
    { emoji: "🎮", name: "Ocio", pct: 12, amount: "S/144" },
    { emoji: "💊", name: "Salud", pct: 11, amount: "S/132" },
  ];

  return (
    <div ref={ref} className="bg-[rgba(15,15,12,0.95)] border border-bilio-success/20 rounded-3xl p-6 max-w-[360px] w-full shadow-[0_40px_80px_rgba(0,0,0,0.5),0_0_60px_rgba(94,152,125,0.07)]">
      <div className="flex justify-between items-start mb-5">
        <div>
          <div className="text-white/[0.38] font-body text-[11px] font-semibold tracking-[0.08em] uppercase mb-1">Este mes</div>
          <div className="text-bilio-text font-heading text-[28px] font-extrabold tracking-[-0.03em]">S/1,200</div>
        </div>
        <div className="bg-bilio-primary/10 border border-bilio-primary/20 rounded-[10px] px-2.5 py-[5px] flex items-center gap-1">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="#FECE00"><path d="M5 1L9 5H6V9H4V5H1L5 1Z"/></svg>
          <span className="text-bilio-primary font-heading text-[11px] font-bold">+8% vs anterior</span>
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        {cats.map((c, i) => (
          <div key={c.name}>
            <div className="flex justify-between items-center mb-[5px]">
              <div className="flex items-center gap-2">
                <span className="text-sm">{c.emoji}</span>
                <span className="text-white/65 font-body text-[13px] font-medium">{c.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/30 font-body text-xs">{c.pct}%</span>
                <span className="text-bilio-text font-heading text-[13px] font-bold">{c.amount}</span>
              </div>
            </div>
            <div className="h-[5px] bg-white/[0.06] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-gold rounded-full opacity-80"
                style={{
                  width: inView ? `${c.pct * 2.8}%` : "0%",
                  transition: `width 0.8s cubic-bezier(0.33, 1, 0.68, 1) ${0.2 + i * 0.12}s`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[18px] bg-bilio-success/[0.08] border border-bilio-success/15 rounded-xl px-3.5 py-2.5 flex items-center gap-2">
        <span className="text-sm">💡</span>
        <span className="text-bilio-success font-body text-xs font-semibold">
          Comida subió 15% esta semana. ¿Todo bien?
        </span>
      </div>
    </div>
  );
}

/* ── Section wrapper ── */
function FeatureRow({
  tag, tagColor, headline, highlightWord, description, proof, mockup, reversed = false, ctaLabel, ctaHref,
}: {
  tag: string; tagColor: string; headline: string; highlightWord: string;
  description: string; proof: string; mockup: React.ReactNode; reversed?: boolean;
  ctaLabel?: string; ctaHref?: string;
}) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[72px] items-center max-w-[1100px] mx-auto ${reversed ? "md:[direction:rtl]" : ""}`}
    >
      <ScrollReveal className={reversed ? "md:[direction:ltr]" : ""}>
        <div
          className="inline-flex items-center gap-2 rounded-full px-3.5 py-[5px] mb-[22px]"
          style={{ background: `${tagColor}12`, border: `1px solid ${tagColor}28` }}
        >
          <span className="font-body text-xs font-semibold tracking-[0.08em] uppercase" style={{ color: tagColor }}>{tag}</span>
        </div>

        <h2 className="text-bilio-text font-heading font-extrabold tracking-[-0.03em] leading-[1.08] mb-[18px] text-[clamp(32px,4vw,52px)]">
          {headline.split(highlightWord).map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && <span className="text-gradient-gold">{highlightWord}</span>}
            </span>
          ))}
        </h2>

        <p className="text-white/[0.43] font-body text-[17px] leading-[1.75] mb-7 tracking-[0.01em]">
          {description}
        </p>

        <div className="flex items-start gap-2.5 bg-white/[0.025] border border-bilio-border rounded-xl px-4 py-3">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
            <circle cx="8" cy="8" r="7" stroke={tagColor} strokeWidth="1.2"/>
            <path d="M5 8l2 2 4-4" stroke={tagColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-white/[0.38] font-body text-[13px] leading-[1.5]">{proof}</span>
        </div>

        {ctaLabel && ctaHref && (
          <a
            href={ctaHref}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(ctaHref.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block mt-6 bg-gradient-gold text-bilio-bg font-heading text-sm font-extrabold px-6 py-3 rounded-[12px] tracking-tight transition-all duration-200 btn-glow hover:shadow-[0_4px_24px_rgba(254,206,0,0.35)]"
          >
            {ctaLabel}
          </a>
        )}
      </ScrollReveal>

      <ScrollReveal className={`flex justify-center ${reversed ? "md:[direction:ltr]" : ""}`}>
        {mockup}
      </ScrollReveal>
    </div>
  );
}

export function FeaturesSection() {
  const sections = [
    {
      tag: "Tan fácil como chatear",
      tagColor: "#FECE00",
      headline: "Solo dile cuánto gastaste. Sin descargar nada.",
      highlightWord: "Sin descargar nada.",
      description: "Texto, nota de voz o foto del recibo — por web o WhatsApp. Sin menús, sin formularios. Escribe como le escribirías a un amigo. Bilio entiende, clasifica y registra en segundos.",
      proof: "Funciona por WhatsApp y web. Si ya usas WhatsApp, ya sabes usar Bilio.",
      mockup: <WhatsAppAnimatedMockup />,
      reversed: false,
      bg: "bg-bilio-bg",
      ctaLabel: "Quiero acceso anticipado →",
      ctaHref: "#waitlist",
    },
    {
      tag: "Gastos inteligentes",
      tagColor: "#5E987D",
      headline: "Sabe exactamente a dónde va tu plata.",
      highlightWord: "a dónde va tu plata.",
      description: "Bilio organiza tus gastos automáticamente en 18 categorías con emojis. Cada mes te dice: 35% Comida, 20% Transporte — para que sepas, por fin, la verdad.",
      proof: "18 categorías en español. Bilio clasifica tus gastos solo — sin que hagas nada.",
      mockup: <ExpenseMockup />,
      reversed: true,
      bg: "bg-bilio-bg-card",
    },
  ];

  return (
    <>
      {sections.map((s, i) => (
        <section
          key={s.tag}
          id={i === 0 ? "caracteristicas" : undefined}
          className={`${s.bg} py-[100px] px-6 relative overflow-hidden`}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${s.tagColor}40, transparent)` }}
          />
          <FeatureRow {...s} />
        </section>
      ))}
    </>
  );
}
