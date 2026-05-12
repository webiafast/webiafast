import Link from 'next/link'
import {
  Zap, Globe, Sparkles, Shield, ArrowRight,
  Star, Rocket, Code2, Palette, BarChart3, MessageSquare,
  ChevronRight
} from 'lucide-react'
import { getPlanesConfig } from '@/lib/planes'
import PlanesSlider from '@/components/PlanesSlider'

// ─── Pricing Data ─────────────────────────────────────────────────────────────

const planes = [
  {
    id: 'pro',
    nombre: 'Pro',
    precio: '100.000',
    descripcion: 'Para negocios que quieren destacar',
    color: 'from-violet-500/25 to-purple-500/25',
    border: 'border-violet-500/50',
    badge: 'MÁS POPULAR',
    features: [
      '3-5 páginas completas',
      '8-10 secciones elegibles',
      'Hasta 10 imágenes propias',
      'GSAP + animaciones scroll',
      'Formulario + WhatsApp',
      'Subdominio gratis + SSL',
      'Deploy en 1 click',
      '3 revisiones/mes',
      'Soporte prioritario',
      'Google Analytics incluido',
    ],
    limitaciones: [],
    cta: 'Crear mi web Pro',
    ctaColor: 'btn-gradient',
  },
  {
    id: 'premium',
    nombre: 'Premium',
    precio: '300.000',
    descripcion: 'Experiencia de agencia, velocidad de IA',
    color: 'from-amber-500/20 to-orange-500/20',
    border: 'border-amber-500/30',
    badge: 'MÁXIMO IMPACTO',
    features: [
      '10+ páginas a medida',
      'Secciones ilimitadas',
      'Imágenes y videos propios',
      'Three.js / efectos 3D',
      'Locomotive Scroll',
      'Blog con 5 posts',
      'Dominio propio + CDN',
      'Deploy + hosting incluido',
      'Historial de versiones',
      'Dark/light mode toggle',
      'Revisiones ilimitadas 30 días',
      'WhatsApp directo',
      'SEO avanzado + analytics',
      '2 idiomas',
    ],
    limitaciones: [],
    cta: 'Crear mi web Premium',
    ctaColor: 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400',
  },
  {
    id: 'broker',
    nombre: 'Broker',
    precio: '700.000',
    descripcion: 'Portal inmobiliario con gestión de propiedades',
    color: 'from-emerald-500/20 to-teal-500/20',
    border: 'border-emerald-500/30',
    badge: 'INMOBILIARIAS',
    features: [
      'Portal inmobiliario completo',
      '4 páginas (inicio, propiedades, nosotros, contacto)',
      'Carga y gestión de propiedades',
      'Filtros avanzados (tipo, precio, ciudad)',
      'Modal de detalle con galería',
      'WhatsApp CTA por propiedad',
      'Deploy automático en Vercel',
      'Actualización en tiempo real',
      'SEO: schema RealEstateAgent',
      'Hasta 10 imágenes IA incluidas',
      'Ediciones ilimitadas',
      'Panel de administración',
    ],
    limitaciones: [],
    cta: 'Crear mi portal Broker',
    ctaColor: 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500',
  },
  {
    id: 'restaurante',
    nombre: 'Restaurante',
    precio: '500.000',
    descripcion: 'Menú digital para restaurantes y cafeterías',
    color: 'from-orange-500/20 to-red-500/20',
    border: 'border-orange-500/30',
    badge: 'GASTRONOMÍA',
    features: [
      'Sitio SPA de 4 páginas',
      'Menú digital interactivo',
      'Filtros por categoría',
      'Carta editable desde el dashboard',
      'WhatsApp flotante',
      'Deploy automático en Vercel',
      'SEO: schema Restaurant',
      'Hasta 20 imágenes IA incluidas',
      '5 ediciones incluidas',
      'Publicación de carta con 1 click',
    ],
    limitaciones: [],
    cta: 'Crear mi menú digital',
    ctaColor: 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500',
  },
]

const pasos = [
  {
    numero: '01',
    titulo: 'Elige tu plan',
    descripcion: 'Selecciona el plan que mejor se adapta a tu negocio y completa el pago en segundos.',
    icon: Sparkles,
  },
  {
    numero: '02',
    titulo: 'Paga e ingresa tu contenido',
    descripcion: 'Completa el pago en segundos y luego llena el wizard con los textos, servicios, fotos y datos de tu empresa.',
    icon: Code2,
  },
  {
    numero: '03',
    titulo: 'IA genera tu sitio',
    descripcion: 'Claude AI crea tu sitio web profesional con animaciones y diseño premium en segundos.',
    icon: Zap,
  },
  {
    numero: '04',
    titulo: 'Publica o descarga',
    descripcion: 'Despliega con 1 click o descarga el ZIP. Tu web lista para el mundo.',
    icon: Rocket,
  },
]

const testimonios = [
  {
    nombre: 'Valentina Torres',
    cargo: 'Dueña, Café Rituales',
    texto: 'En 10 minutos tuve una web que me costó menos que contratar un diseñador por hora. Las animaciones son increíbles.',
    stars: 5,
    avatar: 'VT',
  },
  {
    nombre: 'Rodrigo Campos',
    cargo: 'CEO, Constructora RC',
    texto: 'Llevaba meses postergando el sitio web. Con Webiafast lo resolví en una tarde. El resultado superó mis expectativas.',
    stars: 5,
    avatar: 'RC',
  },
  {
    nombre: 'Ana Jiménez',
    cargo: 'Directora, Clínica Vital',
    texto: 'El plan Premium es una locura. Parece hecho por una agencia de primer nivel. Mis pacientes no pueden creer que lo hice yo.',
    stars: 5,
    avatar: 'AJ',
  },
  {
    nombre: 'Carlos Herrera',
    cargo: 'Corredor de Propiedades, CH Real Estate',
    texto: 'El plan Broker transformó mi negocio. Mis clientes pueden ver las propiedades filtradas y me llaman por WhatsApp directo desde el sitio.',
    stars: 5,
    avatar: 'CH',
  },
]

// ─── Components ───────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-indigo-100/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center shadow-md">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-black text-gray-900 tracking-tight">
            Webia<span className="gradient-text">fast</span>
          </span>
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#como-funciona" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">
            Cómo funciona
          </a>
          <a href="#planes" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">
            Planes
          </a>
          <a href="#testimonios" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">
            Testimonios
          </a>
          <a href="#faq" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">
            FAQ
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            Iniciar sesión
          </Link>
          <Link
            href="/registro"
            className="text-sm btn-gradient text-white font-semibold px-4 py-2 rounded-lg shadow-sm"
          >
            Empezar →
          </Link>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dot-grid pt-16">
      {/* Aurora orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb absolute -top-60 -left-40 w-[520px] h-[520px] bg-indigo-400/10" style={{ animationDelay: '0s' }} />
        <div className="orb absolute top-10 -right-40 w-[420px] h-[420px] bg-violet-400/8" style={{ animationDelay: '3s' }} />
        <div className="orb absolute -bottom-40 left-1/3 w-[460px] h-[460px] bg-cyan-400/7" style={{ animationDelay: '5s' }} />
        {/* Scan line */}
        <div className="scan-line" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* AI Badge */}
        <div className="inline-flex items-center gap-2.5 ai-badge px-4 py-2 rounded-full text-sm text-indigo-700 mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-semibold">Powered by Claude AI · Sitios en minutos</span>
          <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black leading-[1.06] tracking-tight mb-6 animate-slide-in text-gray-900">
          Tu sitio web
          <br />
          <span className="gradient-text">profesional con IA</span>
          <br />
          en minutos
        </h1>

        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
          Ingresa el contenido de tu negocio, elige tu estilo y deja que la IA cree
          un sitio web con animaciones premium. Sin conocimientos técnicos.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '350ms' }}>
          <Link
            href="#planes"
            className="group flex items-center gap-2.5 btn-gradient text-white font-bold px-8 py-4 rounded-xl text-lg glow-primary shadow-xl"
          >
            <Rocket className="w-5 h-5" />
            Crear mi sitio ahora
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#como-funciona"
            className="flex items-center gap-2 text-gray-700 font-semibold px-8 py-4 rounded-xl text-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/60 transition-all"
          >
            Ver cómo funciona
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-500" />
          </Link>
        </div>

        {/* Social proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500 animate-fade-in" style={{ animationDelay: '500ms' }}>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {['bg-indigo-500', 'bg-violet-500', 'bg-pink-500', 'bg-cyan-500'].map((color, i) => (
                <div key={i} className={`w-8 h-8 rounded-full ${color} border-2 border-white shadow-sm`} />
              ))}
            </div>
            <span>+50 sitios creados</span>
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-1">4.9/5 promedio</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-500" />
            <span>Pago 100% seguro</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8FAFF] to-transparent pointer-events-none" />
    </section>
  )
}

function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 ai-badge px-3 py-1.5 rounded-full text-indigo-600 text-xs font-semibold mb-4 uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            Proceso simple
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
            De 0 a publicado en{' '}
            <span className="gradient-text">4 pasos</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            No necesitas conocimientos de diseño ni programación. Solo ingresa el contenido de tu negocio.
          </p>
        </div>

        <div className="relative grid md:grid-cols-4 gap-6 stagger-children">
          {/* Connecting gradient line */}
          <div className="hidden md:block absolute top-[2.75rem] left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-px bg-gradient-to-r from-indigo-200 via-violet-200 to-cyan-200 z-0" />

          {pasos.map((paso) => (
            <div key={paso.numero} className="card-surface rounded-2xl p-6 relative z-10 group">
              <div className="w-12 h-12 rounded-xl btn-gradient flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <paso.icon className="w-6 h-6 text-white" />
              </div>
              <div className="absolute top-5 right-5 text-4xl font-black text-indigo-50 select-none leading-none">
                {paso.numero}
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">{paso.titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{paso.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

async function Planes() {
  // Leer precios desde DB (editables desde /admin/planes)
  const preciosDB = await getPlanesConfig()
  const fmt = (id: string, fallback: string) =>
    preciosDB[id] ? preciosDB[id].toLocaleString('es-CL') : fallback
  const planesConPrecios = planes.map(p => ({ ...p, precio: fmt(p.id, p.precio) }))

  return (
    <section id="planes" className="py-24 relative bg-[#F8FAFF]">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 ai-badge px-3 py-1.5 rounded-full text-indigo-600 text-xs font-semibold mb-4 uppercase tracking-wider">
            <BarChart3 className="w-3.5 h-3.5" />
            Planes y precios
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
            Elige tu plan,{' '}
            <span className="gradient-text">crea hoy</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Pago único. Sin suscripciones obligatorias. Tu sitio es tuyo para siempre.
          </p>
        </div>

        <PlanesSlider planes={planesConPrecios} />

        {/* Subscription upsell */}
        <div className="mt-10 card-surface rounded-2xl p-6 max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Palette className="w-5 h-5 text-indigo-500" />
            <span className="font-semibold text-gray-900">¿Quieres editar tu sitio cada mes?</span>
          </div>
          <p className="text-gray-500 text-sm mb-4">
            Agrega el plan de ediciones mensuales después de crear tu sitio
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-violet-500" />
              <span className="text-gray-600"><strong className="text-gray-900">Pro:</strong> 3 ediciones — CLP$15.000/mes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="text-gray-600"><strong className="text-gray-900">Premium:</strong> Ilimitadas — CLP$35.000/mes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Testimonios() {
  return (
    <section id="testimonios" className="py-24 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 ai-badge px-3 py-1.5 rounded-full text-indigo-600 text-xs font-semibold mb-4 uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            Testimonios
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            Lo que dicen{' '}
            <span className="gradient-text">nuestros clientes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 stagger-children">
          {testimonios.map((t, i) => (
            <div key={i} className="card-surface rounded-2xl p-6 relative group">
              {/* Decorative quote */}
              <div className="absolute top-4 right-5 text-5xl leading-none font-serif gradient-text opacity-15 select-none">"</div>
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(t.stars)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">"{t.texto}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full btn-gradient flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-md">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900">{t.nombre}</div>
                  <div className="text-gray-500 text-xs">{t.cargo}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden p-12 text-center" style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 35%, #1d1b4b 65%, #0c0a1e 100%)' }}>
          {/* Orbs */}
          <div className="orb absolute -top-20 -left-20 w-72 h-72 bg-indigo-500/20" />
          <div className="orb absolute -bottom-20 -right-20 w-72 h-72 bg-violet-500/20" style={{ animationDelay: '3s' }} />
          {/* Decorative scan line */}
          <div className="scan-line" />

          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
              <Globe className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
              Tu negocio merece{' '}
              <span className="gradient-text-light">estar online hoy</span>
            </h2>
            <p className="text-indigo-200 text-lg mb-8 max-w-xl mx-auto">
              Más de 50 empresas ya tienen su sitio web creado con Webiafast.
              La tuya puede ser la próxima en minutos.
            </p>
            <Link
              href="/registro"
              className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-10 py-4 rounded-xl text-lg hover:scale-105 transition-transform shadow-2xl"
            >
              Crear mi sitio ahora
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-100 py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg btn-gradient flex items-center justify-center shadow-sm">
              <Zap className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-black text-gray-900 tracking-tight">Webia<span className="gradient-text">fast</span></span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2026 Webiafast · Todos los derechos reservados · Chile
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="mailto:hello@webiafast.com" className="hover:text-gray-700 transition-colors">hello@webiafast.com</a>
            <a href="/terminos" className="hover:text-gray-700 transition-colors">Términos</a>
            <a href="/privacidad" className="hover:text-gray-700 transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── FAQ Chat ────────────────────────────────────────────────────────────────

const faqData = [
  {
    pregunta: '¿Cómo funciona Webiafast?',
    respuesta: 'Eliges un plan, completas un formulario con la info de tu negocio (nombre, servicios, colores, etc.) y nuestra IA genera un sitio web profesional completo en menos de 2 minutos. Luego puedes publicarlo con 1 click.',
  },
  {
    pregunta: '¿Cuánto cuesta?',
    respuesta: 'Tenemos 4 planes: Pro ($100.000), Premium ($300.000), Broker ($700.000) y Restaurante ($500.000). Es un pago único, sin mensualidades obligatorias. El precio incluye la generación del sitio y las ediciones del plan.',
  },
  {
    pregunta: '¿Puedo editar mi sitio después?',
    respuesta: 'Sí. El plan Básico incluye 1 edición, y los planes Pro, Premium y Broker incluyen 5 ediciones. Solo describes los cambios en texto y la IA los aplica automáticamente.',
  },
  {
    pregunta: '¿Necesito saber programar?',
    respuesta: 'No. Solo necesitas completar un formulario con la información de tu negocio. La IA se encarga de todo el diseño, código, animaciones y optimización.',
  },
  {
    pregunta: '¿Cómo publico mi sitio?',
    respuesta: 'Desde tu dashboard puedes publicar con 1 click en Vercel (hosting gratuito con SSL). También puedes descargar el ZIP y subirlo a tu propio hosting. Incluimos una guía paso a paso para configurar tu dominio propio.',
  },
  {
    pregunta: '¿Qué incluye el plan Broker?',
    respuesta: 'Un portal inmobiliario completo con gestión de propiedades, filtros avanzados, galería de fotos, integración WhatsApp por propiedad y un panel para agregar/editar propiedades que se actualizan en tu web al instante.',
  },
  {
    pregunta: '¿Qué métodos de pago aceptan?',
    respuesta: 'Aceptamos tarjetas de crédito, débito y transferencia bancaria a través de Flow.cl, la plataforma de pagos más segura de Chile.',
  },
  {
    pregunta: '¿Puedo usar mi propio dominio?',
    respuesta: 'Sí. Todos los planes permiten conectar un dominio propio (.cl, .com, etc.). En tu dashboard encontrarás una guía paso a paso para configurar los DNS.',
  },
]

function FAQChat() {
  return (
    <section className="py-24 px-6 bg-white" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 ai-badge px-3 py-1.5 rounded-full text-indigo-600 text-xs font-semibold mb-4 uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            Centro de ayuda
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Preguntas{' '}
            <span className="gradient-text">frecuentes</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Resuelve tus dudas al instante. Si necesitas más ayuda, escríbenos a hello@webiafast.com
          </p>
        </div>

        <div className="space-y-2">
          {faqData.map((faq, i) => (
            <details
              key={i}
              className="group card-surface rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none hover:bg-indigo-50/50 transition-colors">
                <span className="text-sm font-semibold text-gray-900 pr-4">{faq.pregunta}</span>
                <ChevronRight className="w-4 h-4 text-gray-400 shrink-0 transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-3">
                {faq.respuesta}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400 mb-3">¿No encontraste lo que buscas?</p>
          <a
            href="mailto:hello@webiafast.com"
            className="inline-flex items-center gap-2 card-surface text-gray-700 font-medium px-6 py-3 rounded-xl text-sm hover:border-indigo-200 transition-all"
          >
            <MessageSquare className="w-4 h-4 text-indigo-500" />
            Escríbenos a hello@webiafast.com
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFF]">
      <Navbar />
      <Hero />
      <ComoFunciona />
      <Planes />
      <Testimonios />
      <FAQChat />
      <CTA />
      <Footer />
    </main>
  )
}
