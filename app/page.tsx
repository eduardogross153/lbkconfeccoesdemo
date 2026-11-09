'use client'

import { FormEvent, useState } from 'react'
import { ArrowDownRight, ArrowRight, ArrowUpRight, AtSign, Menu, MessageCircle, X } from 'lucide-react'

const logo = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20lbkconfeccoes-btNxhxn1ChKP6YdM8Mmldzhq8mQ5Wf.jpg'
const whatsapp = 'https://wa.me/5547997709243'
const heroImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bannerlbkconfeccoes-EJcfaAQeMMQL8XhAeeAcfHJfoLrbX7.jpg'
const companyImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_tr3gxatr3gxatr3g.jfif-kopfzBf64bqVmFdXK3QxYQgcrPPcRd.jpeg'
const productionImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_8pzz4c8pzz4c8pzz.jfif-8Wbpx8zrJq73wYGaBiZP57XKmr1oZK.jpeg'
const contactWhatsapp = 'https://wa.me/5547997709243'

const catalogues = [
  { number: '01', title: 'Premium Verão 27', copy: 'Coleção premium para a temporada.', tone: 'catalogue-ink', cover: '/catalogos/capa%2001.jpg', pdf: '/catalogos/01%20-%20CATALOGO%20PREMIUM%20VER%C3%83O%2027.pdf' },
  { number: '02', title: 'Promocional Verão 27', copy: 'Seleção promocional para a temporada.', tone: 'catalogue-clay', cover: '/catalogos/capa%2002.jpg', pdf: '/catalogos/02%20-%20CAT%C3%81LOGO%20PROMOCIONAL%20VER%C3%83O%2027.pdf' },
  { number: '03', title: 'Religioso Verão', copy: 'Coleção religiosa para a temporada.', tone: 'catalogue-sand', cover: '/catalogos/capa%2003.jpg', pdf: '/catalogos/03%20-%20CAT%C3%81LOGO%20RELIGIOSO%20-%20VERAO.pdf' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedCatalogue, setSelectedCatalogue] = useState<(typeof catalogues)[number] | null>(null)
  const [formStatus, setFormStatus] = useState<'idle' | 'error'>('idle')

  function formatCnpj(value: string) {
    return value.replace(/\\D/g, '').slice(0, 14).replace(/(\\d{2})(\\d)/, '$1.$2').replace(/(\\d{3})(\\d)/, '$1.$2').replace(/(\\d{3})(\\d)/, '$1/$2').replace(/(\\d{4})(\\d{1,2})$/, '$1-$2')
  }

  function formatPhone(value: string) {
    const digits = value.replace(/\\D/g, '').slice(0, 11)
    return digits.length > 10 ? digits.replace(/(\\d{2})(\\d{5})(\\d{4})/, '($1) $2-$3') : digits.replace(/(\\d{2})(\\d{4})(\\d{0,4})/, '($1) $2-$3')
  }

  function submitCatalogue(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const cnpj = String(form.get('cnpj') || '').replace(/\\D/g, '')
    const phone = String(form.get('phone') || '').replace(/\\D/g, '')
    if (cnpj.length !== 14 || (phone.length !== 10 && phone.length !== 11)) {
      setFormStatus('error')
      return
    }
    setFormStatus('error')
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand-lockup" href="#inicio" aria-label="LBK Confecções — início">
          <img src={logo} alt="Logotipo LBK Confecções" />
        </a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal">
          {[['Início', '#inicio'], ['A empresa', '#empresa'], ['Coleções', '#colecoes'], ['Nossa qualidade', '#qualidade'], ['Contato', '#contato']].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>
        <a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer">Fale conosco <ArrowRight data-icon="inline-end" /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section id="inicio" className="hero section-dark" style={{ backgroundImage: `linear-gradient(90deg, rgba(41,39,37,.88) 0%, rgba(41,39,37,.46) 52%, rgba(41,39,37,.18) 100%), url(${heroImage})` }}>
        <div className="hero-copy reveal">
          <p className="eyebrow">Malhas que dão forma a ideias</p>
          <h1>Cada coleção,<br /><em>uma nova história.</em></h1>
          <p className="hero-lead">A LBK Confecções desenvolve soluções têxteis com olhar atento para qualidade, inovação e o ritmo de quem cria.</p>
          <div className="hero-actions"><a className="button button-light" href="#colecoes">Conheça as coleções <ArrowDownRight data-icon="inline-end" /></a><a className="text-link light" href="#contato">Conversar com a equipe <ArrowRight data-icon="inline-end" /></a></div>
        </div>
        <div className="hero-mark"><img src={logo} alt="" aria-hidden="true" /><span>LBK<br />CONFECÇÕES</span></div>
        <div className="hero-note">01 <span /> 2024 — presente</div>
      </section>

      <section id="empresa" className="company section-light">
        <div className="section-intro reveal"><p className="eyebrow">01 / A empresa</p><h2>Feita de<br /><em>presença.</em></h2></div>
        <div className="company-content"><div className="image-placeholder official-image"><img src={companyImage} alt="Fachada da sede da LBK Confecções" /></div><div className="company-text"><p className="display-copy">Mais do que produzir malhas, construímos relações duradouras através da matéria.</p><p>Somos uma empresa têxtil comprometida com o desenvolvimento de produtos, a qualidade em cada etapa e a proximidade com quem transforma ideias em peças.</p><p>Nosso trabalho nasce do encontro entre experiência e curiosidade — uma forma cuidadosa de acompanhar o mercado e criar soluções que fazem sentido.</p><a className="text-link" href={contactWhatsapp} target="_blank" rel="noreferrer">Conheça nosso trabalho <ArrowRight data-icon="inline-end" /></a></div></div>
      </section>

      <section id="colecoes" className="collections section-warm"><div className="collections-head reveal"><div><p className="eyebrow">02 / Coleções</p><h2>Conheça nossas<br /><em>coleções.</em></h2></div><p>Descubra nossas coleções e conheça as novidades que preparamos para cada temporada.</p></div><div className="catalogue-grid">{catalogues.map((item) => <button className="catalogue-card reveal" key={item.number} type="button" onClick={() => { setSelectedCatalogue(item); setFormStatus('idle') }} aria-label={`Solicitar acesso ao catálogo ${item.title}`}><div className={`catalogue-visual ${item.tone}`}><img src={item.cover} alt={`Capa do catálogo ${item.title}`} /><span className="catalogue-number">{item.number}</span></div><div className="catalogue-meta"><div><h3>{item.title}</h3><p>{item.copy}</p></div><span className="round-arrow" aria-hidden="true"><ArrowUpRight /></span></div></button>)}</div></section>

      <section id="qualidade" className="outsourcing section-dark"><div className="outsourcing-image image-placeholder official-image"><img src={productionImage} alt="Profissional trabalhando em uma máquina de costura" /></div><div className="outsourcing-copy reveal"><p className="eyebrow">03 / Nossa qualidade</p><h2>Nossa<br /><em>qualidade.</em></h2><p>A qualidade das peças nasce do cuidado em cada etapa da produção.</p><p>Na LBK Confecções, experiência e atenção aos detalhes acompanham cada criação.</p><a className="button button-outline-light" href={whatsapp} target="_blank" rel="noreferrer">Entre em contato <ArrowRight data-icon="inline-end" /></a></div></section>

      <section id="contato" className="contact section-light"><div className="contact-head reveal"><p className="eyebrow">04 / Contato</p><h2>Vamos dar forma<br />à sua <em>ideia?</em></h2></div><div className="contact-grid"><div><p className="contact-label">Fale com a LBK Confecções</p><a className="contact-big" href={contactWhatsapp} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight /></a><a className="contact-big" href="https://www.instagram.com/lbkconfeccoes/" target="_blank" rel="noreferrer">Instagram <AtSign /></a></div><div className="contact-aside"><p>Para informações sobre malhas, coleções e terceirização, nossa equipe está pronta para conversar.</p><a className="button button-dark" href={contactWhatsapp} target="_blank" rel="noreferrer">Iniciar conversa <ArrowRight data-icon="inline-end" /></a></div></div></section>

      {selectedCatalogue && <div className="modal-backdrop" role="presentation" onClick={() => setSelectedCatalogue(null)}><div className="catalogue-modal" role="dialog" aria-modal="true" aria-labelledby="catalogue-modal-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" type="button" onClick={() => setSelectedCatalogue(null)} aria-label="Fechar"><X /></button><p className="eyebrow">Acesso ao catálogo</p><h2 id="catalogue-modal-title">{selectedCatalogue.title}</h2><p className="modal-copy">Preencha seus dados para solicitar acesso a este catálogo.</p><form onSubmit={submitCatalogue}><label>Nome completo<input required name="name" autoComplete="name" /></label><label>Nome da empresa<input required name="company" autoComplete="organization" /></label><label>CNPJ<input required name="cnpj" inputMode="numeric" placeholder="00.000.000/0000-00" onChange={(event) => { event.currentTarget.value = formatCnpj(event.currentTarget.value) }} /></label><label>Celular / WhatsApp<input required name="phone" inputMode="tel" autoComplete="tel" placeholder="(00) 00000-0000" onChange={(event) => { event.currentTarget.value = formatPhone(event.currentTarget.value) }} /></label><input type="hidden" name="catalogue" value={selectedCatalogue.title} />{formStatus === 'error' && <p className="form-error" role="alert">Não foi possível concluir o cadastro. A integração de registros ainda não está configurada; o PDF permanece bloqueado.</p>}<button className="button button-dark" type="submit">Enviar cadastro <ArrowRight data-icon="inline-end" /></button></form></div></div>}

      <a className="mobile-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp"><MessageCircle /></a>

      <footer className="site-footer"><img src={logo} alt="Logotipo LBK Confecções" /><div><span>LBK Confecções</span><span>Qualidade que se sente.</span></div><a href="#inicio">Voltar ao início ↑</a><small>© {new Date().getFullYear()} LBK Confecções</small></footer>

    </main>
  )
}
