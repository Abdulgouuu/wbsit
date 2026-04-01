import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import zoneStandard from "@/assets/zone-standard.jpg";
import zoneVip from "@/assets/zone-vip.jpg";
import zoneBoot from "@/assets/zone-bootcamp.jpg";

const zones = [
  {
    name: "Стандарт",
    img: zoneStandard,
    desc: "Комфортные игровые места с высокой производительностью",
    specs: ["Intel i7 / RTX 4070", "240 Hz монитор 27\"", "Механическая клавиатура", "Игровая мышь 1000 Hz"],
    games: "CS2, Dota 2, Valorant",
    price: "800 ₸/час",
    badge: null,
  },
  {
    name: "VIP",
    img: zoneVip,
    desc: "Улучшенные места с премиальной периферией и приватной атмосферой",
    specs: ["Intel i9 / RTX 4080", "360 Hz монитор 27\"", "Премиальная периферия", "Шумоподавляющие наушники"],
    games: "Все игры на максимальных настройках",
    price: "1 200 ₸/час",
    badge: "Популярное",
  },
  {
    name: "Bootcamp",
    img: zoneBoot,
    desc: "Командная зона для игры с друзьями или тренировок",
    specs: ["5–10 мест рядом", "Intel i9 / RTX 4080", "Большой экран для стримов", "Отдельная комната"],
    games: "Подходит для команд и мини-турниров",
    price: "от 10 000 ₸",
    badge: "Для команды",
  },
];

const Zones = () => (
  <main className="pt-24 pb-16">
    <div className="container mx-auto px-4">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Игровые <span className="text-primary neon-text">зоны</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Выберите зону, которая подходит именно вам
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {zones.map((z, i) => (
          <AnimatedSection key={z.name} delay={i * 0.15}>
            <div className="game-card h-full flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img src={z.img} alt={z.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                {z.badge && (
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-display font-semibold uppercase">
                    {z.badge}
                  </span>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl font-bold mb-2">{z.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{z.desc}</p>
                <ul className="space-y-2 mb-4 flex-1">
                  {z.specs.map((s) => (
                    <li key={s} className="text-sm text-foreground/80 flex items-start gap-2">
                      <span className="text-primary mt-1">●</span> {s}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground mb-5">{z.games}</p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl font-bold text-primary">{z.price}</span>
                  <Link to="/booking" className="btn-neon text-xs py-2 px-5">
                    Выбрать
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </main>
);

export default Zones;
