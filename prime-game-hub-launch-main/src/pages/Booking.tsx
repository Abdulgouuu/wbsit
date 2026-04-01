import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { MessageSquare } from "lucide-react";

const zones = ["Стандарт", "VIP", "Bootcamp"];
const tariffs = [
  "Стандарт — 1 час — 800 ₸",
  "Стандарт — 3 часа — 2200 ₸",
  "Стандарт — 5 часов — 3500 ₸",
  "VIP — 1 час — 1200 ₸",
  "VIP — 3 часа — 3300 ₸",
  "VIP — 5 часов — 5200 ₸",
  "Ночной пакет — 5000 ₸",
  "Bootcamp комната — от 10000 ₸",
];
const durations = ["1 час", "2 часа", "3 часа", "4 часа", "5 часов", "Ночной пакет (22:00–08:00)"];

const Booking = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    duration: durations[0],
    zone: zones[0],
    tariff: tariffs[0],
    seats: "1",
    comment: "",
  });

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = () => {
    const msg = encodeURIComponent(
      `Здравствуйте! Хочу забронировать место в клубе Prime Game Hub.\n\nИмя: ${form.name}\nТелефон: ${form.phone}\nДата: ${form.date}\nВремя: ${form.time}\nДлительность: ${form.duration}\nЗона: ${form.zone}\nТариф: ${form.tariff}\nКоличество мест: ${form.seats}\nКомментарий: ${form.comment || "—"}`
    );
    window.open(`https://wa.me/77770103080?text=${msg}`, "_blank");
  };

  const inputClass =
    "w-full rounded-lg bg-surface-2 border border-border/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all";

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
              <span className="text-primary neon-text">Бронирование</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Заполните форму и мы подготовим всё для вашей игры
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="game-card p-6 sm:p-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1.5">Имя</label>
                <input className={inputClass} placeholder="Ваше имя" value={form.name} onChange={set("name")} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Телефон</label>
                <input className={inputClass} placeholder="+7 ..." value={form.phone} onChange={set("phone")} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1.5">Дата</label>
                <input type="date" className={inputClass} value={form.date} onChange={set("date")} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Время начала</label>
                <input type="time" className={inputClass} value={form.time} onChange={set("time")} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1.5">Длительность</label>
                <select className={inputClass} value={form.duration} onChange={set("duration")}>
                  {durations.map((d) => <option key={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Игровая зона</label>
                <select className={inputClass} value={form.zone} onChange={set("zone")}>
                  {zones.map((z) => <option key={z}>{z}</option>)}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1.5">Тариф</label>
                <select className={inputClass} value={form.tariff} onChange={set("tariff")}>
                  {tariffs.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Количество мест</label>
                <input type="number" min="1" max="10" className={inputClass} value={form.seats} onChange={set("seats")} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Комментарий</label>
              <textarea className={inputClass + " min-h-[80px] resize-none"} placeholder="Дополнительные пожелания..." value={form.comment} onChange={set("comment")} />
            </div>

            <button onClick={submit} className="btn-neon w-full flex items-center justify-center gap-2 text-base py-4">
              <MessageSquare className="h-5 w-5" />
              Забронировать через WhatsApp
            </button>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
};

export default Booking;
