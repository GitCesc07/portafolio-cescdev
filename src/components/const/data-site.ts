export const siteInfo = {
    title: "CescDev",
    description: "CescDev | Desarrollador web en Nicaragua. Creo sistemas empresariales, aplicaciones web y sitios profesionales que ayudan a los negocios a digitalizar y optimizar sus procesos."
}

export const TAGS = {
    NEXT: {
        name: "Next.js",
        class: "bg-black dark:text-white",
        icon: "next_js",
    },
    TAILWIND: {
        name: "Tailwind CSS",
        class: "dark:bg-[#003159]/80 bg-[#003159]/35 dark:text-white text-black",
        icon: "tailwindcss",
    },
    REACT: {
        name: "React.js",
        class: "dark:bg-[#61DBFB]/35 bg-[#457b9d]/80 dark:text-white text-black",
        icon: "react",
    },
    ASTRO: {
        name: "Astro",
        class: "bg-[#F75A01]/25 dark:text-white text-black",
        icon: "astroIcon"
    },
    HTML5: {
        name: "Html5",
        class: "bg-[#dc2f02]/35 dark:text-white text-black",
        icon: "html",
    },
    CSS: {
        name: "Css",
        class: "bg-[#168aad]/35 dark:text-white text-black",
        icon: "css",
    },
    JAVASCRIPT: {
        name: "JavaScript",
        class: "bg-[#ffca3a]/35 dark:text-white text-black",
        icon: "javascript",
    },
    TYPESCRIPT: {
        name: "TypeScript",
        class: "bg-[#3178C6]/35 dark:text-white text-black",
        icon: "typescript",
    },
    MYSQL: {
        name: "MySql",
        class: "bg-[#0d3b66]/35 dark:text-white text-black",
        icon: "mysql",
    },
    SQL: {
        name: "Sql",
        class: "bg-[#a71e34]/35 dark:text-white text-black",
        icon: "sql",
    },
    NODE: {
        name: "Node",
        class: "dark:bg-[#6a994e]/65 bg-[#6a994e] text-white",
        icon: "node_js"
    },
    EXPRESS: {
        name: "Express",
        class: "bg-white text-black",
        icon: "express_js"
    },
    BETTERAUTH: {
        name: "BetterAuth",
        class: "bg-white text-black",
        icon: "better_auth"
    },
    ZOD: {
        name: "Zod",
        class: "bg-white text-black",
        icon: "zod"
    },
    SWAGGER: {
        name: "Swagger",
        class: "bg-white text-black",
        icon: "swagger"
    },
    REACTROUTER: {
        name: "React Router",
        class: "bg-white text-black",
        icon: "reactrouter"
    },
    SHADCN: {
        name: "Shadcn",
        class: "bg-white text-black",
        icon: "shadcn"
    },
    REACTQUERYICON: {
        name: "React Query",
        class: "bg-white text-black",
        icon: "reactquery"
    },
    JWT: {
        name: "JWT",
        class: "bg-white text-black",
        icon: "jwt"
    },
    RADIXUI: {
        name: "Radix-UI",
        class: "bg-[#252422] text-white",
        icon: "radixui"
    },
    PDF: {
        name: "pdfmake",
        class: "bg-white text-black",
        icon: "pdfmake"
    },
};

export const PROJECTS = [
    {
        id: 1,
        title: "FinanTrack",
        description: "Sistema control de gasto",
        link: "https://www.cescdev.com",
        github: "",
        image: "/img/expense-control.webp",
        isTagsBackendAndFrontend: true,
        IsProjectUnderConstruction: true,
        experienceCustomers:
        {
            name_customer: "César Urroz",
            workstation: "Desarrollador FullStack",
            company: "CescDev",
            review: "Una plataforma diseñada para llevar el control de tus finanzas personales de forma sencilla y organizada. Registra ingresos y gastos, administra deudas, deudores y tarjetas de crédito, y mantén toda tu información financiera al alcance desde cualquier dispositivo."
        },
        projectTags: {
            backend: {
                tags: [TAGS.NODE, TAGS.EXPRESS, TAGS.BETTERAUTH, TAGS.ZOD, TAGS.SWAGGER]
            },
            frontend: {
                tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.BETTERAUTH, TAGS.ZOD, TAGS.REACTQUERYICON, TAGS.REACTROUTER, TAGS.SHADCN]
            }
        },
        moduls: [
            {
                titleModuls: "Gestión de sesiones y autenticación",
                infoModuls: [
                    { subtitle: "Google" },
                    { subtitle: "Facebook" },
                ]
            },
            {
                titleModuls: "Resumen financiero",
                infoModuls: [
                    { subtitle: "Dashboard" },
                    { subtitle: "Balance" },
                    { subtitle: "Movimientos" },
                ]
            },
            {
                titleModuls: "Gestión financiera",
                infoModuls: [
                    { subtitle: "Cuentas" },
                    { subtitle: "Tarjetas" },
                    { subtitle: "Transacciones" },
                    { subtitle: "Categorías" },
                ]
            },
            {
                titleModuls: "Control y planificación",
                infoModuls: [
                    { subtitle: "Límites" },
                    { subtitle: "Deudas" },
                    { subtitle: "Deudores" },
                ]
            },
        ]
    },
    {
        id: 2,
        title: "DISTRIBUIDORA MAJO",
        description: "Sistema contable",
        link: "",
        github: "",
        image: "/img/sistem-account.webp",
        isTagsBackendAndFrontend: true,
        IsProjectUnderConstruction: true,
        experienceCustomers:
        {
            name_customer: "Mauricio Reyes",
            workstation: "",
            company: "Distribuiroda MAJO",
            review: ""
        },
        projectTags: {
            backend: {
                tags: [TAGS.NODE, TAGS.EXPRESS, TAGS.JWT, TAGS.PDF]
            },
            frontend: {
                tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.ZOD, TAGS.REACTQUERYICON, TAGS.REACTROUTER, TAGS.RADIXUI]
            }
        },
        moduls: [
            {
                titleModuls: "Gestión comerciales",
                infoModuls: [
                    { subtitle: "Usuarios" },
                    { subtitle: "Clientes" },
                    { subtitle: "Proveedores" },
                    { subtitle: "Caja" },
                ]
            },
            {
                titleModuls: "Inventario ventas",
                infoModuls: [
                    { subtitle: "Productos" },
                    { subtitle: "Marcas" },
                    { subtitle: "Categorías" },
                    { subtitle: "Compras" },
                    { subtitle: "Proformas" },
                    { subtitle: "Facturación" },
                    { subtitle: "Kardex" },
                    { subtitle: "Remisiones" },
                    { subtitle: "Ajuste de inventario" },
                ]
            },
            {
                titleModuls: "Cuentas por cobrar",
                infoModuls: [
                    { subtitle: "Balance de clientes" },
                    { subtitle: "Reportes" },
                ]
            },
            {
                titleModuls: "Cuentas por pagar",
                infoModuls: [
                    { subtitle: "Balance de proveedores" },
                    { subtitle: "Reportes" },
                ]
            },
            {
                titleModuls: "Contabilidad",
                infoModuls: [
                    { subtitle: "Balanza de comprobación menor" },
                    { subtitle: "Balanza de comprobación mayor" },
                    { subtitle: "Estado resultados" },
                ]
            },
            {
                titleModuls: "Configuración",
                infoModuls: [
                    { subtitle: "Empresa" },
                    { subtitle: "unidad de medida" },
                    { subtitle: "Peso por productos" },
                    { subtitle: "Bodegas" },
                    { subtitle: "Impresoras" },
                    { subtitle: "Bancos" },
                    { subtitle: "Copia y restauración" },
                ]
            },
            {
                titleModuls: "Reportes financieros",
                infoModuls: [
                    { subtitle: "" },                    
                ]
            },
        ]
    },
    {
        id: 3,
        title: "Clínica Bio Natural Salud",
        description: "Sitio web institucional",
        link: "https://www.bionaturalsalud.clinic",
        github: "",
        image: "/img/bionaturalsalud.webp",
        isTagsBackendAndFrontend: false,
        IsProjectUnderConstruction: false,
        tags: [TAGS.ASTRO, TAGS.TAILWIND, TAGS.TYPESCRIPT],
        experienceCustomers:
        {
            name_customer: "Dr. Carlos Ronald Leiva Saballos",
            workstation: "Director / Médico General Naturo-Ortopático",
            company: "Clínica Bio Natural Salud",
            review: "La página web nos permitió fortalecer nuestra presencia digital, presentar nuestros servicios de manera profesional y facilitar el contacto con nuestros pacientes. Destaco la comunicación y atención a los detalles durante el desarrollo."
        }
    },
    {
        id: 4,
        title: "Distrifull",
        description: "Sitio web institucional",
        link: "https://www.distrifull.com",
        github: "",
        image: "/img/distrifull.webp",
        isTagsBackendAndFrontend: false,
        IsProjectUnderConstruction: false,
        tags: [TAGS.HTML5, TAGS.CSS, TAGS.JAVASCRIPT],
        experienceCustomers:
        {
            name_customer: "Lic. Heydi Gutiérrez",
            workstation: "Gerente administrativa",
            company: "Grupo Full Distrifull",
            review: "El sitio web nos permitió mostrar nuestros productos de forma más organizada, atractiva y accesible, fortaleciendo nuestra presencia y proyección en Internet. César siempre tuvo disposición para escuchar nuestras ideas, realizar los cambios necesarios y convertirlas en realidad. Estamos muy contentos con el resultado y agradecidos por su profesionalismo, responsabilidad y paciencia."
        }
    },
    {
        id: 5,
        title: "Full505",
        description: "Sitio web institucional",
        link: "https://www.full505.com",
        github: "",
        image: "/img/full-505.webp",
        isTagsBackendAndFrontend: false,
        IsProjectUnderConstruction: false,
        tags: [TAGS.HTML5, TAGS.CSS, TAGS.JAVASCRIPT],
        experienceCustomers:
        {
            name_customer: "Lic. Heydi Gutiérrez",
            workstation: "Gerente administrativa",
            company: "Full505",
            review: "El sitio web nos permitió mostrar nuestros productos de forma más organizada, atractiva y accesible, fortaleciendo nuestra presencia y proyección en Internet. César siempre tuvo disposición para escuchar nuestras ideas, realizar los cambios necesarios y convertirlas en realidad. Estamos muy contentos con el resultado y agradecidos por su profesionalismo, responsabilidad y paciencia."
        }
    }
];

export const EDUCACION = [
    {
        date: "Febrero 2017 - Diciembre 2021",
        title: "Ingenieria en Sistema",
        company: "UNAN-LEON",
        description: "Universidad Nacional Autónoma de Nicaragua, León.",
    },
    {
        date: "Febrero 2022 - Abril 2022",
        title: "Aplicaciones Desktop con Microsoft .Net y DeExpress",
        company: "UNAN-LEON",
        description:
            "Impartido del 13 de febrero al 24 de abril del año 2022 con una duración de 40 horas presenciales. Dado en la ciudad de León, Nicaragua.",
        resource: "/resource/aplicaciones-desktop-csharp-devexpress.pdf",
        title_resource: "Descargar certificado",
    },
    {
        date: "Octubre 2019 - Diciembre 2019",
        title: "Diseño y Administración de base de datos con Sql Server",
        company: "UNAN-LEON",
        description:
            "Impartido del 06 de octubre al 01 de diciembre del año 2019 con una duración de 40 horas presenciales. Dado en la ciudad de León, Nicaragua.",
        resource: "/resource/diseno-administración-db.pdf",
        title_resource: "Descargar certificado",
    },
];

export const EXPERIENCIE = [
    {
        date: "Agosto 2026",
        title: "Creación de página web",
        company: "Bio Natural Salud",
        description:
            "Desarrollé la página web para Bio Natural Salud, creando una experiencia digital intuitiva para posicionar su oferta de medicina integrativa y terapias complementarias.",
        link: "http://www.bionaturalsalud.clinic",
    },
    {
        date: "Diciembre 2025",
        title: "Creación de sistema web",
        company: "Distribuidora MAJO",
        description:
            "Desarrollando e implementando un sistema de información contable personalizado para un cliente del sector ferretero, automatizando el control de inventarios, facturación y la emisión de reportes financieros.",
    },
    {
        date: "Abril 2025",
        title: "Creación de Página web",
        company: "Full505",
        description:
            "Desarrollé la página web, para una empresa importadora y comercializadora de productos.",
        link: "http://www.full505.com",
    },
    {
        date: "Enero 2024",
        title: "Creación de Página web",
        company: "Distrifull",
        description:
            "Desarrollé la página web, para una empresa importadora y comercializadora de productos.",
        link: "http://www.distrifull.com",
    },
    {
        date: "Octubre 2023",
        title: "Sistema de Farmacia",
        company: "Sos medical",
        description:
            "Creación de un software de escritorio para farmacia, control de inventario, ventas, compras etc...",
    },
];