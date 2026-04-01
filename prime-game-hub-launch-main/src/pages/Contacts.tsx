import { MapPin, Clock, Phone, MessageSquare } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Contacts = () => (
  <main className="pt-24 pb-16">
    <div className="container mx-auto px-4">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            <span className="text-primary neon-text">Контакты</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Свяжитесь с нами или приходите в гости
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Info */}
        <AnimatedSection>
          <div className="game-card p-8 h-full">
            <h2 className="font-display text-2xl font-bold mb-8">Как нас <span className="text-primary">найти</span></h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1">Адрес</p>
                  <p className="text-muted-foreground text-sm">Проспект Ракымжан Кошкарбаев, 36</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1">Режим работы</p>
                  <p className="text-muted-foreground text-sm">Круглосуточно, 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1">Телефон</p>
                  <p className="text-muted-foreground text-sm">+7 777 010 30 80</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <a
                href="https://wa.me/77770103080"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon text-xs py-2.5 px-5 inline-flex items-center gap-2"
              >
                <MessageSquare className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon-outline text-xs py-2.5 px-5"
              >
                Instagram
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Map */}
        <AnimatedSection delay={0.15}>
          <div className="game-card overflow-hidden h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.5!2d71.4068!3d51.1282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424585a605525605%3A0x4df5b75dc2e1a69!2z0J_RgNC-0YHQvy4g0KDQsNGF0YvQvNC20LDQvSDQmtC-0YjQutCw0YDQsdCw0LXQsiAzNg!5e0!3m2!1sru!2skz!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Prime Game Hub на карте"
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  </main>
);

export default Contacts;
