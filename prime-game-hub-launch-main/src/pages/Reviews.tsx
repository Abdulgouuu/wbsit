import { Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const reviews = [
  { name: "Арман К.", rating: 5, text: "Лучший компьютерный клуб в городе! Мощные ПК, всё летает. Играл в CS2 — пинг минимальный, FPS стабильный. Однозначно рекомендую!", avatar: "А" },
  { name: "Дана М.", rating: 5, text: "VIP-зона просто огонь! Кресла суперудобные, периферия топовая. Провели с друзьями целую ночь — атмосфера нереальная.", avatar: "Д" },
  { name: "Тимур С.", rating: 4, text: "Хорошие ПК, приятный интерьер. Бронировали через WhatsApp — всё быстро и удобно. Придём ещё!", avatar: "Т" },
  { name: "Айгерим Н.", rating: 5, text: "Проводили мини-турнир по Valorant в Bootcamp-комнате. Всё было организовано идеально. Спасибо Prime Game Hub!", avatar: "А" },
  { name: "Нурсултан Б.", rating: 5, text: "Круглосуточный режим — это вообще топ. Приходил в 3 ночи, всё работает, чисто, тихо, комфортно. Лучшее место для ночного гейминга.", avatar: "Н" },
  { name: "Карина Л.", rating: 4, text: "Очень уютно и стильно. Играла в Dota 2, проблем ноль. Персонал дружелюбный. Вернусь обязательно!", avatar: "К" },
];

const Reviews = () => (
  <main className="pt-24 pb-16">
    <div className="container mx-auto px-4">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            <span className="text-primary neon-text">Отзывы</span> клиентов
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Что говорят наши гости о Prime Game Hub
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reviews.map((r, i) => (
          <AnimatedSection key={r.name} delay={i * 0.1}>
            <div className="game-card p-6 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center font-display font-bold text-primary text-sm">
                  {r.avatar}
                </div>
                <div>
                  <p className="font-medium text-sm">{r.name}</p>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star key={si} className={`h-3.5 w-3.5 ${si < r.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground/30"}`} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{r.text}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </main>
);

export default Reviews;
