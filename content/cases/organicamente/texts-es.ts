import type { CaseFrontmatter } from "@/lib/cases";
import type { OrganicamenteTexts } from "./build";

export const texts: { meta: CaseFrontmatter; sections: OrganicamenteTexts } = {
  meta: {
    title: "Una inscripción guiada en cinco pasos y un panel para operar la comunidad",
    client: "Organicamente",
    role: "Product Designer",
    tagline:
      "Rediseño de la puerta de entrada y la trastienda de una CSA en Río. El formulario de tres páginas pasó a ser un flujo que valida la región desde el inicio, y las planillas pasaron a ser un panel para el equipo.",
  },
  sections: {
    about: { title: "Sobre", lead: "Organicamente es una CSA (Comunidad que Sostiene la Agricultura) en Río de Janeiro. Los suscriptores financian la siembra de agricultores familiares agroecológicos y reciben canastas fijas cada semana o cada quince días.\n\nParticipo en el proyecto como socio de crecimiento y producto, y este caso cuenta cómo rediseñé la puerta de entrada y la trastienda de la operación.", tags: ["Product Design", "UI/UX Design"], alt: "Organicamente: pantallas del flujo de inscripción en tres celulares" },
    summary: { title: "Resumen del proyecto", alt: "Resumen: problema, mi rol, restricción, resultado y stack. Los leads atendidos no llegaban a suscribirse y el equipo operaba todo en planillas. Product Designer, del descubrimiento al código, trabajando solo. Sistema y panel en línea desde el 01/10/2026, con 6 nuevos suscriptores en el primer mes." },
    context: { title: "Contexto", lead: "Quien se suscribe a una CSA no compra un producto suelto. Entra en un pacto mensual recurrente, ligado a un agricultor específico y a una ruta de entrega por región. La inscripción es un momento delicado, porque la persona necesita entender el modelo, elegir plan y región y confiar antes de pagar.", alt: "Tres cosas que la inscripción debe resolver: entender el modelo, elegir plan y región, confiar antes de pagar" },
    problem: {
      title: "El problema",
      altSides: "Dos lados del problema: quien quería suscribirse enfrentaba un Google Forms de diez años, y quien operaba revisaba todo a mano",
      altNumbers: "Números del formulario antiguo: 3 páginas, 16 campos, 8 reglas en bloque de texto y 2 tablas de precios",
      altForms: "Capturas del Google Forms antiguo, con reglas y condiciones financieras en bloque de texto",
    },
    users: { title: "Usuarios", lead: "Eran dos públicos con necesidades diferentes.", alt: "Quien quiere suscribirse necesita entender, simplicidad y confianza. El equipo necesita saber quién entró, cuánto cobrar, adónde entregar y quién está en mora" },
    discovery: {
      title: "Cómo percibí el problema",
      lead: "Los leads llegaban, la atención respondía, y aun así pocos cerraban. En los dos meses de referencia que tengo, fueron 5 suscripciones para 108 leads, cerca de 4,6%. La muestra es pequeña, pero sirve como línea base.\n\nEn mayo presenté al equipo una página de registro interactiva, pensada para filtrar barrios fuera de ruta desde el primer clic y capturar el contacto antes de que el lead desistiera. Al ver el nuevo flujo, el equipo señaló también los dolores de la gestión. Entendí cómo organizaban a los clientes en planillas y decidí crear el panel.",
      hypothesis: "Hipótesis: el formulario era un bloqueo fuerte en la decisión.",
      hypothesisNote: "No era la única causa posible, ya que el precio, la expectativa sobre alimentos sin agrotóxicos y los leads fuera de ruta también pesaban. Pero era la causa que yo podía probar y rediseñar.",
      alt: "Línea base: cerca de 4,6% de conversión de lead a suscriptor, con 108 leads y 5 suscripciones en dos meses",
    },
    decisions: { title: "Decisiones de diseño", lead: "Seguí la lógica “el usuario necesita X, entonces hice Y”.", alt: "Seis decisiones de diseño, cada una conectando una necesidad del suscriptor o del equipo con una solución" },
    discarded: { title: "Lo que descarté", alt: "Descarté mantener el Forms con ajustes y usar herramientas listas. Opté por diseñar en Figma y construir con Claude Code, Supabase y Vercel" },
    solution: { title: "La solución", lead: "Inscripción en cinco pasos: región y agricultor, suscripción y opcionales, datos de contacto, dirección y contingencia de ausencia, y por último el pacto con el resumen financiero. Al final, el cobro sale automáticamente por Asaas, por PIX o boleto.", alt: "Flujo de inscripción de Organicamente en cinco pantallas móviles" },
    admin: {
      title: "Panel administrativo",
      lead: "Hecho para que el equipo sepa quién entró, cuánto cobrar, adónde entregar y quién está en mora, sin rehacer eso cada semana.",
      altFeatures: "Funciones del panel: visión general, entregas, ficha del suscriptor e informes",
      altOverview: "Panel de Organicamente en laptop, con la pantalla de acceso y los informes",
      altScreens: "Pantallas de Entregas y Canastas y de Visión General del panel",
    },
    system: {
      title: "Design system del panel",
      lead: "El panel creció por fases y acumuló estilos visuales paralelos y 161 estilos escritos directo en el HTML. Para seguir evolucionando solo, sin retrabajo, creé una base única de tokens y componentes, que hoy vive en el código y en Figma con los mismos nombres.",
      altNumbers: "Números del design system: 68 variables, 20 estilos, 23 componentes y 21 íconos",
      altShowcase: "Fundamentos y componentes del panel: colores, tipografía, botones, etiquetas y alertas",
      altDecisions: "Decisiones del sistema: contraste dentro de AA, pensado para el celular, Figma y código con los mismos nombres",
      note: "El flujo de inscripción todavía usa los estilos de la página pública, con tokens propios. Unificar los dos sistemas es uno de los próximos pasos.",
    },
    results: {
      title: "Resultados",
      lead: "El proyecto es reciente y la recolección de datos sigue en curso, pero algunos resultados ya aparecen.",
      altHighlights: "+140% de nuevos suscriptores por mes (6 en el primer mes, contra un promedio de 2,5) y −70% en el tiempo para cerrar una suscripción (de 2 a 3 días hábiles a 12h a 24h)",
      altTable: "Tabla de medición: conversión, conclusión por etapa, dudas en la atención, tiempo de cierre y trabajo de finanzas, antes y ahora",
      note: "El equipo validó el panel y está en transición del modelo antiguo al nuevo, con capacitación oficial prevista. Con más meses de datos, la conversión por etapa mostrará dónde el flujo todavía pierde personas y orientará la segunda iteración.",
    },
    learnings: { title: "Aprendizajes", lead: "No pude entrevistar a suscriptores ni a leads que desistieron, así que no sé con certeza si el formulario era el cuello de botella principal, y la validación del flujo se hizo solo con el equipo interno. Si empezara de nuevo, haría cinco conversaciones cortas antes de diseñar y probaría el flujo con personas de afuera.\n\nPor eso, los próximos pasos son entrevistar a suscriptores recientes y a leads que no cerraron, medir el embudo por etapa y usar esos datos en la segunda iteración. Ella ya prevé quitar la tasa de adhesión e incluir productos aliados como huevos, miel y lácteos en el paso dos." },
  },
};
