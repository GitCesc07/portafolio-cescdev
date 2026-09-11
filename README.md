# CescDev | Portafolio personal

Portafolio web de **César Urroz**, ingeniero en sistemas y desarrollador de software/web en Nicaragua. El sitio presenta su experiencia, formación, proyectos y tecnologías con las que trabaja.

Sitio publicado: [cescdev.com](https://www.cescdev.com)

## Contenido del sitio

- Presentación personal con enlaces a correo, LinkedIn y GitHub.
- Experiencia laboral y educación/cursos.
- Proyectos con descripción, estado, reseña del cliente, tecnologías y módulos.
- Sección "Sobre mí" con descarga del CV.
- Navegación por secciones y selector de tema claro/oscuro.
- Diseño responsive para dispositivos móviles y escritorio.

## Tecnologías

- [Astro](https://astro.build/) para la estructura y generación del sitio estático.
- [Tailwind CSS](https://tailwindcss.com/) para los estilos y el diseño responsive.
- [Typed.js](https://mattboldt.com/demos/typed-js/) para el texto animado de la portada.
- [Onest](https://fontsource.org/fonts/onest) como tipografía principal.
- Sitemap generado mediante `@astrojs/sitemap`.

## Requisitos

- Node.js compatible con la versión de Astro instalada.
- pnpm.

## Instalación

Clona el repositorio, entra en la carpeta del proyecto e instala las dependencias:

```bash
pnpm install
```

Inicia el servidor de desarrollo:

```bash
pnpm dev
```

El sitio estará disponible en `http://localhost:4321`.

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `pnpm dev` | Inicia el servidor de desarrollo. |
| `pnpm start` | Alias para iniciar el servidor de desarrollo. |
| `pnpm build` | Genera la versión de producción en `dist/`. |
| `pnpm preview` | Sirve localmente la compilación de producción. |
| `pnpm astro` | Ejecuta comandos de la CLI de Astro. |

## Estructura principal

```text
/
├── public/
│   ├── img/                 # Fotografías, logos e imágenes de proyectos
│   └── resource/            # Recursos descargables, incluido el CV
├── src/
│   ├── components/          # Componentes Astro, iconos y datos del sitio
│   ├── layouts/             # Layout compartido y metadatos SEO
│   ├── pages/               # Rutas principales del sitio
│   └── style/               # Hoja global de Tailwind CSS
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Actualizar el contenido

- Información general, tecnologías y proyectos: `src/components/const/data-site.ts`.
- Presentación, enlaces sociales y perfil: `src/components/Hero.astro`.
- Experiencia y formación: `src/components/Experience.astro` y `src/components/Educacion.astro`.
- Texto de la sección personal y enlace del CV: `src/components/AboutMe.astro`.
- Imágenes y otros archivos públicos: `public/img/` y `public/resource/`.

Después de realizar cambios, comprueba la compilación con:

```bash
pnpm build
```

## Licencia

Este proyecto corresponde al portafolio personal de César Urroz. Para reutilizar su contenido, imágenes o identidad visual, solicita autorización previamente.
