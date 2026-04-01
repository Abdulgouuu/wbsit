import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const plans = [
  { name: "Стандарт 1ч", price: "800 ₸", features: ["1 час игры", "Стандартная зона", "Все установленные игры", "240 Hz монитор"], badge: null },
  { name: "Стандарт 3ч", price: "2 200 ₸", features: ["3 часа игры", "Стандартная зона", "Все установленные игры", "240 Hz монитор", "Экономия 200 ₸"], badge: "Выгодно" },
  { name: "Стандарт 5ч", price: "3 500 ₸", features: ["5 часов игры", "Стандартная зона", "Все установленные игры", "240 Hz монитор", "Экономия 500 ₸"], badge: null },
  { name: "VIP 1ч", price: "1 200 ₸", features: ["1 час игры", "VIP-зона", "Премиальная периферия", "360 Hz монитор"], badge: null },
  { name: "VIP 3ч", price: "3 300 ₸", features: ["3 часа игры", "VIP-зона", "Премиальная периферия", "360 Hz монитор", "Экономия 300 ₸"], badge: "Самый популярный" },
  { name: "VIP 5ч", price: "5 200 ₸", features: ["5 часов игры", "VIP-зона", "Премиальная периферия", "360 Hz монитор", "Экономия 800 ₸"], badge: null },
  { name: "Ночной пакет", price: "5 000 ₸", features: ["С 22:00 до 08:00", "Любая доступная зона", "Все установленные игры", "Напиток в подарок"], badge: "Выгодно" },
  { name: "Bootcamp комната", price: "от 10 000 ₸", features: ["5–10 мест", "Отдельная комната", "Большой экран", "Идеально для турниров"], badge: "Для команды" },
];

const Pricing = () => (
  <main className="pt-24 pb-16">
    <div className="container mx-auto px-4">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Наши <span className="text-primary neon-text">тарифы</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Выберите подходящий тариф и забронируйте место
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((p, i) => (
          <AnimatedSection key={p.name} delay={i * 0.08}>
            <div className={`game-card p-6 h-full flex flex-col ${p.badge === "Самый популярный" ? "gradient-border neon-glow" : ""}`}>
              {p.badge && (
                <span className={`inline-block self-start px-3 py-1 rounded-full text-xs font-display font-semibold uppercase mb-4 ${
                  p.badge === "Самый популярный" ? "bg-primary/20 text-primary" :
                  p.badge === "Для команды" ? "bg-neon-blue/20 text-neon-blue" :
                  "bg-neon-cyan/20 text-neon-cyan"
                }`}>
                  {p.badge}
                </span>
              )}
              <h3 className="font-display text-lg font-bold mb-1">{p.name}</h3>
              <p className="font-display text-3xl font-bold text-primary mb-6">{p.price}</p>
              <ul className="space-y-3 mb-6 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/booking" className="btn-neon text-xs py-2.5 text-center w-full">
                Забронировать
              </Link>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </main>
);

export default Pricing;
