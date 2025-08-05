import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useState } from "react";
import { BorderBeam } from "./border-beam";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    icon: LucideIcon;
    variant: "yellow" | "blue" | "green";
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-1 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          role="article"
          aria-label={`Benefit: ${item.title}`}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-br from-neutral-200 dark:from-slate-800/[0.8] dark:to-slate-900/[0.8] to-slate-100 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card variant={item.variant}>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className={cn(
                  "w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
                  item.variant === "yellow" && "bg-Bilio-yellow shadow-Bilio-yellow/30",
                  item.variant === "blue" && "bg-Bilio-blue shadow-Bilio-blue/30",
                  item.variant === "green" && "bg-Bilio-green shadow-Bilio-green/30"
                )} aria-hidden="true">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
              </div>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              
              {/* Premium accent line with variant color */}
              <div className={cn(
                "w-12 h-1 rounded-full mx-auto mt-6 group-hover:w-20 transition-all duration-300 shadow-md",
                item.variant === "yellow" && "bg-Bilio-yellow shadow-Bilio-yellow/30",
                item.variant === "blue" && "bg-Bilio-blue shadow-Bilio-blue/30",
                item.variant === "green" && "bg-Bilio-green shadow-Bilio-green/30"
              )}></div>
            </div>
            
            {/* Border beam with variant colors */}
            <BorderBeam
              size={250}
              duration={12}
              delay={idx * 2}
              colorFrom={
                item.variant === "yellow" ? "#FFC700" :
                item.variant === "blue" ? "#002F6C" :
                "#0AAD6E"
              }
              colorTo={
                item.variant === "yellow" ? "#E6B300" :
                item.variant === "blue" ? "#1A4A8A" :
                "#2BC085"
              }
            />
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  variant = "yellow",
}: {
  className?: string;
  children: React.ReactNode;
  variant?: "yellow" | "blue" | "green";
}) => {
  return (
    <div
      className={cn(
        "rounded-3xl h-full w-full p-8 overflow-hidden bg-white border border-transparent group-hover:border-slate-700 relative z-20 transition-all duration-300",
        "shadow-lg hover:shadow-2xl hover:-translate-y-2",
        "backdrop-blur-xl",
        // Variant-specific glow effects
        variant === "yellow" && "group-hover:shadow-Bilio-yellow/20",
        variant === "blue" && "group-hover:shadow-Bilio-blue/20", 
        variant === "green" && "group-hover:shadow-Bilio-green/20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="text-center space-y-4">
          {children}
        </div>
      </div>
      
      {/* Background glow effect */}
      <div className={cn(
        "absolute -inset-4 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
        variant === "yellow" && "bg-Bilio-yellow/5",
        variant === "blue" && "bg-Bilio-blue/5",
        variant === "green" && "bg-Bilio-green/5"
      )}></div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-Bilio-gray-900 font-bold text-xl leading-tight tracking-wide", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-Bilio-gray-600 leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};