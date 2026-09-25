import hairImg from '../assets/images/service_hair_luxury_1790356705715.jpg';
import nailsImg from '../assets/images/service_nails_design_1790356717692.jpg';
import lashesImg from '../assets/images/service_lashes_brow_1790356728648.jpg';
import facialImg from '../assets/images/service_facial_skin_1790356739387.jpg';
import pedicureImg from '../assets/images/service_pedicure_spa_1790356750207.jpg';

export const SALON_DATA = {
  name: "FIOS DESIGN",
  tagline: "Cabelo • Unha • Pele • Sobrancelha • Cílios • Facial • Spa dos Pés",
  heroSubtitle: "Beleza, cuidado e sofisticação em um só lugar.",
  aboutText:
    "Um espaço dedicado à beleza, ao cuidado e à transformação. Na Fios Design você encontra serviços especializados em cabelo, unhas, pele, sobrancelha, estética facial e spa dos pés, com atendimento pensado para proporcionar uma experiência especial.",
  instagramHandle: "@fios_designjt",
  instagramUrl: "https://www.instagram.com/fios_designjt?stkn=YW90aWdvcHg4MHE=",
  whatsappUrl: "https://wa.link/02mbsc",
  logoUrl: "https://i.postimg.cc/zBPZvHMz/file-000000009ad4820e8201501896e7179e.png",
  promoImageUrl: "https://i.postimg.cc/MKw2Tw3P/Screenshot-20260925-140830-Instagram.png",
  address: {
    street: "Rua Efigênio Ferreira de Lima, 200",
    neighborhood: "Antares",
    city: "Maceió - AL",
    cep: "57048-570",
    full: "Rua Efigênio Ferreira de Lima, 200, Antares, Maceió - AL, 57048-570",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Efig%C3%AAnio+Ferreira+de+Lima%2C+200%2C+Antares%2C+Macei%C3%B3+-+AL%2C+57048-570",
  },
  hours: [
    { day: "Terça a Sexta", hours: "08:30 às 18:30" },
    { day: "Sábado", hours: "08:00 às 19:00" },
    { day: "Domingo e Segunda", hours: "Fechado (Atendimento com hora marcada)" },
  ],
  pillars: [
    {
      id: "cabelo",
      title: "CABELO",
      description: "Tratamentos profundos, cortes sofisticados, colorimetria e alinhamentos de alta performance para realçar sua essência.",
      icon: "Sparkles",
      badge: "EXCLUSIVIDADE",
    },
    {
      id: "unha",
      title: "UNHA",
      description: "Alongamentos refinados, esmaltação em gel, cutilagem russa e nail art minimalista com acabamento impecável.",
      icon: "Gem",
      badge: "ALTO PADRÃO",
    },
    {
      id: "pele",
      title: "PELE",
      description: "Procedimentos dermocosméticos, hidratação profunda e cuidados para restaurar a saúde e o viço natural da sua pele.",
      icon: "HeartHandshake",
      badge: "CUIDADO",
    },
    {
      id: "sobrancelha",
      title: "SOBRANCELHA",
      description: "Design personalizado com mapeamento facial, alinhamento de fios, henna efeito degradê e destaque expressivo para o olhar.",
      icon: "Eye",
      badge: "HARMONIA",
    },
    {
      id: "facial",
      title: "FACIAL",
      description: "Limpeza de pele profunda, drenagem facial, peeling e protocolos de revitalização celular com produtos nobres.",
      icon: "Sparkle",
      badge: "REVITALIZAÇÃO",
    },
    {
      id: "spa-pes",
      title: "SPA DOS PÉS",
      description: "Imersão relaxante, esfoliação nutritiva, remoção de asperezas e massagem revigorante para conforto e maciez incomparáveis.",
      icon: "Footprints",
      badge: "BEM-ESTAR",
    },
  ],
  services: [
    {
      id: "cabelo",
      name: "Cabelo",
      description: "Cortes modernos, mechas, cronograma intensivo, alisamentos e tratamentos térmicos desenvolvidos para a saúde capilar.",
      continuation: "Cada procedimento se inicia com uma análise detalhada da fibra capilar. Realizamos cortes alinhados ao seu visagismo, iluminações personalizadas que preservam a integridade dos fios, além de protocolos de recuperação profunda como nutrição lipídica, umectação com óleos nobres e selagem térmica de alta performance com acabamento sedoso e duradouro.",
      image: hairImg,
      highlights: ["Corte e Modelagem", "Cronograma Capilar", "Mechas e Iluminação", "Tratamentos Térmicos"],
    },
    {
      id: "unhas",
      name: "Unhas",
      description: "Esmaltação em gel de longa duração, blindagem, banho de gel e acabamento de alta precisão para suas mãos.",
      continuation: "Trabalhamos com materiais de alta resistência e hipoalergênicos. Nossos procedimentos incluem cutilagem combinada (russa), estruturação e nivelamento da lâmina ungueal, blindagem diamantada contra quebras e esmaltação em gel com brilho espelhado que permanece impecável por semanas, sem lascar.",
      image: nailsImg,
      highlights: ["Alongamento em Gel", "Esmaltação em Gel", "Blindagem Diamante", "Manicure Russa"],
    },
    {
      id: "cilios",
      name: "Cílios",
      description: "Extensão de cílios clássica, volume russo e híbrido com isolamento rigoroso e peso imperceptível para o olhar dos sonhos.",
      continuation: "Utilizamos fios ultrafinos de seda aplicados cuidadosamente fio a fio com adesivos dermatologicamente testados. O mapeamento (mapping) é personalizado de acordo com o formato dos seus olhos, garantindo harmonia, leveza absoluta e preservação total da saúde dos seus cílios naturais.",
      image: lashesImg,
      highlights: ["Volume Brasileiro", "Fio a Fio Clássico", "Volume Russo", "Lash Lifting"],
    },
    {
      id: "sobrancelhas",
      name: "Sobrancelhas",
      description: "Design personalizado com mapeamento geométrico facial, henna com efeito degradê natural e micropigmentação sutil.",
      continuation: "O procedimento envolve estudo minucioso de visagismo e proporção facial com paquímetro. Realizamos limpeza precisa dos excessos, alinhamento dos fios com Brow Lamination e aplicação de henna exclusiva que preenche falhas de forma suave e elegante, criando um efeito sombreado natural.",
      image: lashesImg,
      highlights: ["Design Personalizado", "Mapeamento Facial", "Henna Efeito Sombra", "Brow Lamination"],
    },
    {
      id: "facial",
      name: "Facial",
      description: "Limpeza de pele profunda, drenagem facial, peeling de diamante e protocolos rejuvenescedores com ativos de última geração.",
      continuation: "Um protocolo completo que combina higienização enzimática, emoliência, extração minuciosa de cravos e impurezas, tonificação e aplicação de máscaras tensoras e revitalizantes. Estimula o colágeno, desobstrui os poros e devolve a luminosidade imediata à sua pele.",
      image: facialImg,
      highlights: ["Limpeza Profunda", "Peeling de Diamante", "Drenagem Facial", "Máscaras Ouro & Prata"],
    },
    {
      id: "spa-pes",
      name: "Spa dos Pés",
      description: "Imersão relaxante em água aromática, esfoliação nutritiva, remoção de asperezas e massagem reflexológica revigorante.",
      continuation: "Uma experiência de descanso e renovação. Inicia-se com imersão em água morna com sais essenciais e óleos botânicos, esfoliação para renovação celular, raspagem e lixamento seguro de calosidades, hidratação oclusiva profunda e massagem nos pontos de alívio das tensões.",
      image: pedicureImg,
      highlights: ["Imersão Relaxante", "Esfoliação Nutritiva", "Remoção de Calosidades", "Massagem Relaxante"],
    },
    {
      id: "pele",
      name: "Pele",
      description: "Cuidados integrados de hidratação corporal e estética dermocosmética para restaurar viço, elasticidade e maciez.",
      continuation: "Tratamentos desenvolvidos para recuperar a barreira hidrolipídica e o viço natural. Incluem esfoliação renovadora, reposição de água e lipídios essenciais através de dermocosméticos de padrão internacional, proporcionando textura aveludada, firmeza e toque macio prolongado.",
      image: facialImg,
      highlights: ["Hidratação Profunda", "Protocolos Corporais", "Revitalização Celular", "Esfoliação Suave"],
    },
  ],
  promo: {
    title: "PROMOÇÃO — CRONOGRAMA CAPILAR",
    subtitle: "4 SESSÕES DE TRATAMENTO",
    originalPrice: "R$ 250,00",
    currentPrice: "R$ 180,00",
    urgencyText: "TEMOS POUCAS VAGAS. GARANTA JÁ A SUA!",
    treatments: [
      {
        icon: "💧",
        title: "HIDRATAÇÃO",
        description: "Reposição de água e maciez.",
      },
      {
        icon: "🟡",
        title: "NUTRIÇÃO",
        description: "Reposição de lipídios e brilho.",
      },
      {
        icon: "🌿",
        title: "UMECTAÇÃO",
        description: "Cuidado profundo com óleos nutritivos.",
      },
      {
        icon: "⚪",
        title: "RECONSTRUÇÃO",
        description: "Fortalecimento e recuperação da fibra capilar.",
      },
    ],
  },
};
