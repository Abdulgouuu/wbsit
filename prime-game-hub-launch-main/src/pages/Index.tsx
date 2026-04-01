import { Link } from "react-router-dom";
import { Monitor, Armchair, Wifi, Sparkles, Clock, Gamepad2, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg.jpg";

const advantages = [
  { icon: Monitor, title: "Мощные ПК", desc: "Топовое железо для любых игр" },
  { icon: Armchair, title: "Удобные кресла", desc: "Комфорт на протяжении всей игры" },
  { icon: Wifi, title: "Скоростной интернет", desc: "Стабильное подключение без задержек" },
  { icon: Sparkles, title: "Комфортная атмосфера", desc: "Приятный интерьер и освещение" },
  { icon: Clock, title: "24/7", desc: "Работаем круглосуточно" },
];

const games = [
  { name: "CS2", color: "from-orange-500/20 to-orange-900/20" },
  { name: "Dota 2", color: "from-red-500/20 to-red-900/20" },
  { name: "Valorant", color: "from-rose-500/20 to-rose-900/20" },
  { name: "PUBG", color: "from-yellow-500/20 to-yellow-900/20" },
  { name: "EA Sports FC", color: "from-green-500/20 to-green-900/20" },
  { name: "GTA V", color: "from-emerald-500/20 to-emerald-900/20" },
];

const faq = [
  { q: "Нужно ли бронировать заранее?", a: "Рекомендуем бронировать заранее, особенно в вечернее время и выходные, чтобы гарантировать наличие свободного места." },
  { q: "Можно ли прийти компанией?", a: "Конечно! У нас есть места рядом и командная Bootcamp-комната для компаний до 10 человек." },
  { q: "Есть ли VIP-зона?", a: "Да, VIP-зона оснащена премиальной периферией, улучшенными креслами и приватной атмосферой." },
  { q: "Работаете ли вы ночью?", a: "Мы работаем 24/7 без перерывов и выходных. Ночной пакет доступен по специальной цене." },
  { q: "Можно ли провести мини-турнир?", a: "Да! Забронируйте Bootcamp-комнату и организуйте свой турнир. Мы поможем с настройкой." },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Prime Game Hub" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center py-32">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Gamepad2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Prime Game Hub</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold tracking-tight mb-6 leading-tight">
              Компьютерный клуб
              <br />
              <span className="text-primary neon-text">нового уровня</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Играй, побеждай, отдыхай в лучшей gaming-атмосфере
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking" className="btn-neon text-base">
                Забронировать место
              </Link>
              <Link to="/pricing" className="btn-neon-outline text-base">
                Смотреть тарифы
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
                О <span className="text-primary">клубе</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Prime Game Hub — это современный компьютерный клуб с мощными игровыми ПК, комфортной атмосферой, 
                высокоскоростным интернетом, удобными игровыми местами и премиальным игровым опытом. 
                Мы создали пространство, где каждый геймер чувствует себя как дома — с лучшим оборудованием и сервисом.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-24 bg-surface-1">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-16">
              Наши <span className="text-primary">преимущества</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {advantages.map((a, i) => (
              <AnimatedSection key={a.title} delay={i * 0.1}>
                <div className="game-card p-6 text-center h-full">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <a.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-sm font-semibold mb-2">{a.title}</h3>
                  <p className="text-muted-foreground text-sm">{a.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Popular games */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-16">
              Популярные <span className="text-primary">игры</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {games.map((g, i) => (
              <AnimatedSection key={g.name} delay={i * 0.08}>
                <div className={`game-card p-6 text-center bg-gradient-to-br ${g.color}`}>
                  <Gamepad2 className="h-10 w-10 mx-auto mb-3 text-foreground/60" />
                  <h3 className="font-display text-sm font-bold">{g.name}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-surface-1">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-16">
              Частые <span className="text-primary">вопросы</span>
            </h2>
          </AnimatedSection>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <details className="group game-card p-0 overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-medium hover:text-primary transition-colors">
                    {item.q}
                    <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">
                    {item.a}
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="relative rounded-2xl overflow-hidden gradient-border p-12 sm:p-16 text-center bg-surface-2">
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                Готов <span className="text-primary neon-text">забронировать</span> место?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Забронируй прямо сейчас и погрузись в мир игр с максимальным комфортом
              </p>
              <Link to="/booking" className="btn-neon text-base inline-flex items-center gap-2">
                Забронировать <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Index;
