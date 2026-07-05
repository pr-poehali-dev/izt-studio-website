import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/bdfb35eb-e88b-417d-a372-809f9fe38430/files/339b8f60-c87c-410a-aa87-44d6c93a320c.jpg';

const NAV = [
  { label: 'Главная', href: '#top' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Видео', href: '#video' },
  { label: 'Галерея', href: '#gallery' },
  { label: 'Партнёрам', href: '#partners' },
  { label: 'Контакты', href: '#contacts' },
];

const PROJECTS = [
  {
    title: 'ЁКарный Космос',
    tag: 'Retro Sci-Fi · Комедия',
    desc: 'Абсурдный мультсериал о космическом дальнобойщике, застрявшем в самой нелепой галактике на свете.',
    img: 'https://cdn.poehali.dev/projects/a1a37a13-d297-4017-8db4-89e2473f24c5/bucket/784862de-99b4-4879-b5ca-5d9925e7a75f.png',
    from: 'from-[#1a2740]',
    to: 'to-[#e8641c]',
    accent: '#f0a03c',
  },
  {
    title: 'Трополесье',
    tag: 'Семейная сказка',
    desc: 'Тёплое приключение о дружбе, доверии и взрослении в живом лесном мире троп, мха и тайн Тёмнолесья.',
    img: 'https://cdn.poehali.dev/projects/a1a37a13-d297-4017-8db4-89e2473f24c5/bucket/24406593-e42f-41dc-b11b-39001566c539.png',
    from: 'from-[#4a5a2a]',
    to: 'to-[#c9a24b]',
    accent: '#c9a24b',
  },
  {
    title: 'Команда 13',
    tag: 'Dark Fantasy',
    desc: 'Мрачное взрослое фэнтези: графит, сталь, дым и красное пламя. История для тех, кто любит по-настоящему.',
    img: 'https://cdn.poehali.dev/projects/bdfb35eb-e88b-417d-a372-809f9fe38430/bucket/a125122f-dcb0-4ffe-ba39-8fe33866d144.png',
    from: 'from-[#1c1c1e]',
    to: 'to-[#8a1a12]',
    accent: '#c0392b',
  },
];

const GALLERY = [
  'https://cdn.poehali.dev/projects/bdfb35eb-e88b-417d-a372-809f9fe38430/bucket/438701eb-54ef-42fe-9cb1-44f504f26158.png',
  'https://cdn.poehali.dev/projects/a1a37a13-d297-4017-8db4-89e2473f24c5/bucket/784862de-99b4-4879-b5ca-5d9925e7a75f.png',
  'https://cdn.poehali.dev/projects/a1a37a13-d297-4017-8db4-89e2473f24c5/bucket/24406593-e42f-41dc-b11b-39001566c539.png',
  'https://cdn.poehali.dev/projects/bdfb35eb-e88b-417d-a372-809f9fe38430/bucket/a125122f-dcb0-4ffe-ba39-8fe33866d144.png',
  'https://cdn.poehali.dev/projects/a1a37a13-d297-4017-8db4-89e2473f24c5/bucket/b88ae17b-4c74-4198-bde5-d3f9c12aa358.png',
  'https://cdn.poehali.dev/projects/a1a37a13-d297-4017-8db4-89e2473f24c5/bucket/556cc446-ede7-4b2b-aa08-a450e7aa3ce0.png',
];

const MARQUEE = [
  'АНИМАЦИЯ',
  '2D · 3D',
  'СЦЕНАРИЙ',
  'САУНД-ДИЗАЙН',
  'ПРОДАКШН',
  'АВТОРСКИЕ МИРЫ',
];

const LOGO_IMG =
  'https://cdn.poehali.dev/projects/bdfb35eb-e88b-417d-a372-809f9fe38430/bucket/b694dd2b-95fd-4e5a-905a-547b17470c4e.png';

const Logo = () => (
  <a href="#top" className="block h-11 w-44 overflow-hidden md:h-14 md:w-56">
    <img
      src={LOGO_IMG}
      alt="ИЗТ Студия"
      className="h-full w-full scale-125 py-0 my-0 object-cover mx-0 px-[45px] rounded-[0.25rem]"
    />
  </a>
);

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-cream font-body text-graphite">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-graphite/10 bg-cream/80 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium tracking-wide text-graphite/70 transition-colors hover:text-orange"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <button className="md:hidden" onClick={() => setMenuOpen((v) => !v)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {menuOpen && (
          <nav className="flex flex-col gap-1 border-t border-graphite/10 bg-cream px-6 py-4 md:hidden">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                className="py-2 text-sm font-medium text-graphite/80"
              >
                {n.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="ИЗТ Студия" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-cream/70 to-transparent" />
        </div>

        <div className="container relative z-10">
          <p className="mb-6 animate-fade-in font-display text-sm font-medium uppercase tracking-[0.4em] text-orange">
            Авторская анимационная студия
          </p>
          <h1 className="max-w-4xl animate-fade-up font-display text-6xl font-bold leading-[0.95] text-graphite md:text-8xl">
            Создаём миры,
            <br />
            <span className="text-orange">которые</span> хочется
            <br />
            <span className="text-azure">пересматривать</span>
          </h1>
          <p className="mt-8 max-w-xl animate-fade-up text-lg text-graphite/70 [animation-delay:150ms]">
            Каждый проект — со своим характером, настроением и голосом. От абсурдного космоса до тёплой сказки и тёмного фэнтези.
          </p>
          <div className="mt-10 flex animate-fade-up flex-wrap gap-4 [animation-delay:300ms]">
            <Button
              size="lg"
              className="bg-graphite text-cream hover:bg-orange"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Смотреть проекты
              <Icon name="ArrowRight" size={18} className="ml-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-graphite/30 bg-transparent text-graphite hover:bg-graphite hover:text-cream"
              onClick={() => document.getElementById('partners')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Партнёрам
            </Button>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-graphite/10 bg-graphite py-4">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={i} className="font-display text-xl font-medium uppercase tracking-widest text-cream/70">
              {m} <span className="text-orange">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* PROJECTS */}
      <section id="projects" className="noise-bg py-24 md:py-32">
        <div className="container">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-5xl font-bold uppercase tracking-tight text-graphite md:text-7xl">
              Проекты
            </h2>
            <p className="max-w-xs text-graphite/60">Три вселенные — три разных настроения одной студии.</p>
          </div>

          <div className="space-y-10">
            {PROJECTS.map((p, i) => (
              <article
                key={p.title}
                className="group grid overflow-hidden rounded-3xl border border-graphite/10 md:grid-cols-2"
              >
                <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${p.from} ${p.to} opacity-20`} />
                </div>
                <div className={`flex flex-col justify-center bg-gradient-to-br ${p.from} ${p.to} p-10 md:p-14`}>
                  <span className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-white/70">
                    {String(i + 1).padStart(2, '0')} · {p.tag}
                  </span>
                  <h3 className="font-display text-4xl font-bold text-white md:text-6xl">{p.title}</h3>
                  <p className="mt-5 max-w-md text-white/80">{p.desc}</p>
                  <button
                    className="mt-8 flex w-fit items-center gap-2 border-b-2 pb-1 font-display text-sm font-medium uppercase tracking-widest text-white transition-all hover:gap-4"
                    style={{ borderColor: p.accent }}
                  >
                    Открыть проект <Icon name="ArrowUpRight" size={18} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section id="video" className="bg-graphite py-24 md:py-32">
        <div className="container">
          <p className="mb-4 font-display text-sm font-medium uppercase tracking-[0.4em] text-orange">Showreel 2026</p>
          <h2 className="mb-12 max-w-3xl font-display text-5xl font-bold uppercase leading-none text-cream md:text-7xl">
            Наша анимация в движении
          </h2>
          <div className="group relative aspect-video overflow-hidden rounded-3xl">
            <img src={HERO_IMG} alt="Showreel" className="h-full w-full object-cover opacity-80" />
            <div className="absolute inset-0 flex items-center justify-center bg-graphite/40">
              <button className="flex h-24 w-24 items-center justify-center rounded-full bg-orange text-cream transition-transform group-hover:scale-110">
                <Icon name="Play" size={34} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 md:py-32">
        <div className="container">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-5xl font-bold uppercase tracking-tight text-graphite md:text-7xl">
              Галерея
            </h2>
            <p className="max-w-xs text-graphite/60">Кадры, концепты и персонажи из наших миров.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {GALLERY.map((g, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl ${i % 3 === 0 ? 'md:row-span-2' : ''}`}
              >
                <img
                  src={g}
                  alt={`Кадр ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-graphite/0 transition-colors group-hover:bg-graphite/20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS + FORM */}
      <section id="partners" className="bg-orange py-24 md:py-32">
        <div className="container grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-display text-5xl font-bold uppercase leading-none text-cream md:text-7xl">
              Партнёрам
            </h2>
            <p className="mt-6 max-w-md text-lg text-cream/90">
              Ищете анимационную студию для сериала, рекламы или полного метра? Расскажите о задаче — соберём команду под ваш проект.
            </p>
            <ul className="mt-10 space-y-5">
              {[
                { icon: 'Clapperboard', t: 'Полный цикл продакшна' },
                { icon: 'Sparkles', t: 'Авторские вселенные и персонажи' },
                { icon: 'Handshake', t: 'Ко-продакшн и лицензирование' },
              ].map((f) => (
                <li key={f.t} className="flex items-center gap-4 text-cream">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/20">
                    <Icon name={f.icon} size={20} />
                  </span>
                  <span className="font-medium">{f.t}</span>
                </li>
              ))}
            </ul>
          </div>

          <form
            className="rounded-3xl bg-cream p-8 md:p-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="mb-6 font-display text-2xl font-bold uppercase text-graphite">Оставить заявку</h3>
            <div className="space-y-4">
              <Input placeholder="Имя" className="border-graphite/20 bg-white" />
              <Input placeholder="Компания" className="border-graphite/20 bg-white" />
              <Input type="email" placeholder="E-mail" className="border-graphite/20 bg-white" />
              <Textarea placeholder="Расскажите о проекте" rows={4} className="border-graphite/20 bg-white" />
              <Button type="submit" size="lg" className="w-full bg-graphite text-cream hover:bg-azure">
                Отправить заявку
              </Button>
            </div>
            <p className="mt-4 text-center text-xs text-graphite/50">
              Отправляя форму, вы соглашаетесь на обработку данных.
            </p>
          </form>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="border-y border-graphite/10 bg-cream py-16">
        <div className="container flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h3 className="font-display text-3xl font-bold uppercase text-graphite">Подписка на новости</h3>
            <p className="mt-2 text-graphite/60">Анонсы премьер и закулисье студии — раз в месяц.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="flex w-full max-w-md gap-3">
            <Input type="email" placeholder="Ваш e-mail" className="border-graphite/20 bg-white" />
            <Button className="bg-orange text-cream hover:bg-graphite">Подписаться</Button>
          </form>
        </div>
      </section>

      {/* CONTACTS / FOOTER */}
      <footer id="contacts" className="bg-graphite py-20 text-cream">
        <div className="container grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="inline-block h-14 w-48 overflow-hidden rounded-2xl bg-cream p-2">
              <img
                src={LOGO_IMG}
                alt="ИЗТ Студия"
                className="h-full w-full scale-125 my-0 px-[25px] rounded-none py-0 mx-0 object-cover"
              />
            </div>
            <p className="mt-5 max-w-sm text-cream/60">
              Авторская анимационная студия. Придумываем, рисуем и оживляем миры.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-display text-sm uppercase tracking-widest text-cream/50">Контакты</h4>
            <a href="mailto:hello@izt.studio" className="block text-cream/80 hover:text-orange">
              hello@izt.studio
            </a>
            <a href="tel:+70000000000" className="mt-2 block text-cream/80 hover:text-orange">
              +7 (000) 000-00-00
            </a>
          </div>
          <div>
            <h4 className="mb-4 font-display text-sm uppercase tracking-widest text-cream/50">Мы в сети</h4>
            <div className="flex gap-3">
              {['Send', 'Youtube', 'Instagram'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-orange"
                >
                  <Icon name={s} size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="container mt-14 border-t border-cream/10 pt-6 text-sm text-cream/40">
          © 2026 ИЗТ Студия. Все права защищены.
        </div>
      </footer>

      {/* CHAT-BOT для партнёров */}
      <button
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-azure px-5 py-4 text-cream shadow-lg transition-transform hover:scale-105"
        onClick={() => alert('Чат-бот для партнёров скоро подключим!')}
      >
        <Icon name="MessageCircle" size={22} />
        <span className="hidden font-medium sm:inline">Чат для партнёров</span>
      </button>
    </div>
  );
};

export default Index;