// Colores del tema
export const THEME = {
  primary: '#00d9ff',
  secondary: '#54b1ad',
  accent: '#ff006e',
  dark: '#0f0f1e',
  light: '#e0e0e0',
  muted: '#999999',
}

// Duración de animaciones (ms)
export const ANIMATION_DURATION = {
  short: 300,
  medium: 500,
  long: 800,
  verylng: 1200,
}

// Información del portafolio
export const PORTFOLIO_INFO = {
  name: 'Elian David Herrera',
  title: '3D Developer & Web Creator',
  description: 'Desarrollador enfocado en experiencias inmersivas, modelado 3D y entornos competitivos.',
  email: 'elian.herrera@example.com', // Puedes ajustar tu correo real aquí
  location: 'Cali, Colombia',
  yearsExperience: 1,
}

// Redes sociales (Actualiza las URLs con tus perfiles reales si es necesario)
export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    icon: 'GH',
    url: 'https://github.com/', 
    color: '#fff',
  },
  {
    name: 'Instagram',
    icon: 'IG',
    url: 'https://www.instagram.com/',
    color: '#E4405F',
  },
  {
    name: 'Twitter',
    icon: 'X',
    url: 'https://x.com/',
    color: '#000',
  },
  {
    name: 'YouTube',
    icon: 'YT',
    url: 'https://www.youtube.com/',
    color: '#FF0000',
  },
]

// Mensajes de la aplicación
export const MESSAGES = {
  success: {
    form: '✓ ¡Mensaje enviado correctamente!',
    copy: '✓ ¡Copiado al portapapeles!',
  },
  error: {
    form: '✗ Error al enviar el mensaje',
    network: '✗ Error de conexión',
  },
  loading: {
    form: 'Enviando...',
    project: 'Cargando proyecto...',
  },
}

// Breakpoints responsive
export const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  wide: 1440,
}

// URLs útiles
export const URLS = {
  github: 'https://github.com/tu-usuario/3d-portfolio',
  resume: '/resume.pdf',
  contact: 'mailto:elian.herrera@example.com',
}

// Configuración de Three.js (Mantenida para no alterar la visualización 3D)
export const THREE_CONFIG = {
  canvas: {
    dpr: [1, 2],
    gl: {
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    },
  },
  camera: {
    position: [0, 0, 8],
    fov: 75,
    near: 0.1,
    far: 1000,
  },
  lights: {
    ambient: 0.6,
    point1: { position: [10, 10, 10], intensity: 1.2, color: '#00d9ff' },
    point2: { position: [-10, -10, 5], intensity: 0.8, color: '#ff006e' },
  },
  stars: {
    radius: 100,
    depth: 50,
    count: 5000,
    factor: 4,
    saturation: 0,
    fade: true,
    speed: 1,
  },
}

// Configuración de performance
export const PERFORMANCE = {
  enableStats: false, 
  targetFPS: 60,
  minFPS: 30,
  maxDrawCalls: 1000,
}