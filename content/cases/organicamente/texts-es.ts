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
    about: {
      title: "Sobre",
      lead: "Organicamente es una CSA (Comunidad que Sostiene la Agricultura) en Río de Janeiro. Los suscriptores financian la siembra de agricultores familiares agroecológicos y reciben canastas fijas cada semana o cada quince días.\n\nParticipo en el proyecto como socio de crecimiento y producto, y este caso cuenta cómo rediseñé la puerta de entrada y la trastienda de la operación.",
      tags: ["Product Design", "UI/UX Design"],
      alt: "Organicamente: pantallas del flujo de inscripción en tres celulares",
    },
    summary: {
      title: "Resumen del proyecto",
      rows: [
        {
          title: "Problema",
          text: "Los leads atendidos no llegaban a suscribirse y el equipo operaba todo en planillas.",
        },
        {
          title: "Mi rol",
          text: "Product Designer, del descubrimiento al código, trabajando solo.",
        },
        {
          title: "Restricción",
          text: "Equipo pequeño y no técnico, presupuesto ajustado, cobro integrado a Asaas y casi diez años de base para migrar.",
        },
        {
          title: "Resultado",
          text: "Sistema y panel en línea desde el 01/10/2026. En el primer mes, 6 nuevos suscriptores y cierre en 12h a 24h. Recolección de datos en curso.",
        },
        {
          title: "Stack",
          text: "Figma, Claude Code, Supabase, Vercel y Google Apps Script.",
        },
      ],
    },
    context: {
      title: "Contexto",
      lead: "Quien se suscribe a una CSA no compra un producto suelto. Entra en un pacto mensual recurrente, ligado a un agricultor específico y a una ruta de entrega por región. La inscripción es un momento delicado, porque la persona necesita entender el modelo, elegir plan y región y confiar antes de pagar.",
      stepLabel: "Paso",
      steps: ["Entender el modelo", "Elegir plan y región", "Confiar antes de pagar"],
    },
    problem: {
      title: "El problema",
      rows: [
        {
          title: "Para quien quería suscribirse",
          text: "El camino empezaba en un Google Forms de unos diez años. Antes de cualquier elección, la persona enfrentaba ocho reglas en bloque de texto, dos tablas de precios con decenas de valores y solo entonces elegía la región. En total eran tres páginas y 16 campos, con el correo pedido dos veces. Mucha gente ignoraba el texto y llamaba a atención por WhatsApp para preguntar lo que ya estaba escrito.",
        },
        {
          title: "Para quien operaba",
          text: "Cada inscripción se revisaba a mano. Finanzas calculaba manualmente el valor de cada suscriptor, y los datos vivían en planillas difíciles de cruzar, sin ninguna automatización.",
        },
      ],
      stats: [
        { label: "Páginas", value: "3 hasta concluir la inscripción" },
        { label: "Campos", value: "16 con el correo pedido dos veces" },
        { label: "Reglas", value: "8 en bloque de texto, antes de todo" },
        { label: "Tablas de precios", value: "2 con decenas de valores" },
      ],
      altForms: "Google Forms antiguo de Organicamente, con reglas y condiciones financieras en bloque de texto",
    },
    users: {
      title: "Usuarios",
      lead: "Eran dos públicos con necesidades diferentes.",
      rows: [
        {
          title: "Quien quiere suscribirse",
          text: "Necesita entender a qué se suscribe, sentir que el pedido es simple y confiar en quien va a cultivar sus alimentos. Entender, simplicidad, confianza.",
        },
        {
          title: "El equipo",
          text: "Con una persona en gestión, una en atención y dos en finanzas, necesita saber quién entró, cuánto cobrar, adónde entregar y quién está en mora, sin rehacer eso cada semana.",
        },
      ],
    },
    discovery: {
      title: "Cómo percibí el problema",
      lead: "Los leads llegaban, la atención respondía, y aun así pocos cerraban. En los dos meses de referencia que tengo, fueron 5 suscripciones para 108 leads, cerca de 4,6%. La muestra es pequeña, pero sirve como línea base.\n\nEn mayo presenté al equipo una página de registro interactiva, pensada para filtrar barrios fuera de ruta desde el primer clic y capturar el contacto antes de que el lead desistiera. Al ver el nuevo flujo, el equipo señaló también los dolores de la gestión. Entendí cómo organizaban a los clientes en planillas y decidí crear el panel.",
      stats: [
        { label: "Línea base", value: "≈ 4,6% de conversión de lead a suscriptor" },
        { label: "Leads", value: "108" },
        { label: "Suscripciones", value: "5" },
        { label: "Meses de referencia", value: "46 leads · 2 suscripciones / 62 leads · 3 suscripciones" },
      ],
      hypothesis: "Hipótesis: el formulario era un bloqueo fuerte en la decisión.",
      hypothesisNote:
        "No era la única causa posible, ya que el precio, la expectativa sobre alimentos sin agrotóxicos y los leads fuera de ruta también pesaban. Pero era la causa que yo podía probar y rediseñar.",
    },
    decisions: {
      title: "Decisiones de diseño",
      lead: "Seguí la lógica “el usuario necesita X, entonces hice Y”.",
      decisionLabel: "Entonces",
      rows: [
        {
          label: "01 · Suscriptor",
          text: "Quien llega necesita sentirse en casa antes de comprometerse.",
          decision:
            "Invertí el embudo. La primera pantalla pide la región y ya muestra la foto, la historia y el día de entrega del agricultor responsable. Las reglas quedan para el último paso, en tarjetas visuales.",
        },
        {
          label: "02 · Equipo",
          text: "El equipo necesita saber pronto si puede atender a la persona.",
          decision:
            "El barrio se valida en el primer paso. Quien vive fuera de la ruta elige “Mi barrio no está en la lista”, el botón de avanzar se bloquea y la persona es llevada a WhatsApp para entrar en una lista de espera. Nadie pierde tiempo llenando un registro que no podría ser atendido.",
        },
        {
          label: "03 · Equipo",
          text: "El equipo necesita recuperar a quien desiste.",
          decision:
            "El contacto viene antes de la dirección. Quien abandona a la mitad ya dejó nombre y WhatsApp, y la atención puede retomar la conversación.",
        },
        {
          label: "04 · Suscriptor",
          text: "La duda más común era si el precio era por entrega o por mes.",
          decision:
            "Cambié “canasta” por “suscripción” en todas las pantallas. Creé también un resumen lateral que suma suscripción, opcionales y tasa de adhesión y muestra el total del primer mes.",
        },
        {
          label: "05 · Suscriptor",
          text: "Quien entra a mitad de mes no debería depender de una cuenta manual.",
          decision: "El sistema calcula el valor proporcional según las entregas restantes.",
        },
        {
          label: "06 · Equipo",
          text: "La logística necesita servir a la ruta.",
          decision:
            "Quité la elección de franjas horarias y la opción de llamar al llegar. La decisión vino de la gestión, a partir de las restricciones operativas de entrega.",
        },
      ],
    },
    discarded: {
      title: "Lo que descarté",
      rows: [
        {
          title: "Descarté: mantener el Forms con ajustes",
          text: "El problema estaba en la estructura y no en la apariencia.",
        },
        {
          title: "Descarté: usar herramientas listas",
          text: "Por costo y por las limitaciones para modelar la lógica de una CSA.",
        },
        {
          title: "Opté por: diseñar en Figma y construir con Claude Code, Supabase y Vercel",
          text: "Lo que me permitió diseñar, probar y ajustar con el equipo sin depender de otro equipo.",
        },
      ],
    },
    solution: {
      title: "La solución",
      lead: "Inscripción en cinco pasos: región y agricultor, suscripción y opcionales, datos de contacto, dirección y contingencia de ausencia, y por último el pacto con el resumen financiero.",
      altFlow: "Flujo de inscripción de Organicamente en cinco pantallas móviles",
      steps: [
        {
          title: "1. Región y agricultor",
          items: ["La primera pantalla pide la región y ya muestra al agricultor responsable"],
        },
        {
          title: "2. Suscripción y opcionales",
          items: ["Suscripción, opcionales y resumen lateral con el total del primer mes"],
        },
        {
          title: "3. Datos de contacto",
          items: ["Nombre y WhatsApp antes de la dirección"],
        },
        {
          title: "4. Dirección y ausencia",
          items: ["Dirección de entrega y qué hacer en caso de ausencia"],
        },
        {
          title: "5. Pacto y resumen",
          items: ["Reglas en tarjetas visuales y resumen financiero"],
        },
      ],
      note: "Cobro automático: al final de la inscripción, el cobro sale automáticamente por Asaas, por PIX o boleto.",
    },
    admin: {
      title: "Panel administrativo",
      lead: "Hecho para que el equipo sepa quién entró, cuánto cobrar, adónde entregar y quién está en mora, sin rehacer eso cada semana.",
      modules: [
        {
          title: "Visión general",
          items: [
            "Facturación recurrente, clientes activos, cobros abiertos, cola de pedidos por aprobar y avisos automáticos, como cobros atrasados.",
          ],
        },
        {
          title: "Entregas",
          items: ["Organiza las canastas por agricultor y día de la semana y genera la hoja de ruta de entregas."],
        },
        {
          title: "Ficha del suscriptor",
          items: [
            "Estado de suscripción y financiero, logística, historial de pagos y línea de tiempo, con atajo a WhatsApp.",
          ],
        },
        {
          title: "Informes",
          items: ["Finanzas obtiene informes sin recalcular cada inscripción."],
        },
      ],
      altMockup: "Panel de Organicamente en laptop, con pantalla de acceso e informes",
      altScreens: "Pantallas de Entregas y Canastas y Visión General del panel",
    },
    system: {
      title: "Design system del panel",
      lead: "El panel creció por fases y acumuló estilos visuales paralelos y 161 estilos escritos directo en el HTML. Para seguir evolucionando solo, sin retrabajo, creé una base única de tokens y componentes, que hoy vive en el código y en Figma con los mismos nombres.",
      stats: [
        { label: "Variables", value: "68 · 39 colores, 11 espaciados, 5 radios y 13 de tipografía" },
        { label: "Estilos", value: "20 · 15 de texto y 5 de sombra y foco" },
        { label: "Componentes", value: "23 · con variantes de estado" },
        { label: "Íconos", value: "21 · Lucide, como componentes" },
      ],
      alt: "Fundamentos y componentes del design system del panel: colores, tipografía, botones, etiquetas y alertas",
      rows: [
        {
          title: "Contraste dentro de AA",
          text: "El gris de los textos discretos se oscureció hasta 4,8:1 sobre blanco, y el verde del ítem activo de la navegación ganó un tono propio para llegar a 5:1.",
        },
        {
          title: "Pensado para el celular",
          text: "Por debajo de 768 px, las tablas se vuelven tarjetas. Por debajo de 576 px, los modales se abren como paneles que suben desde el pie.",
        },
        {
          title: "Figma y código con los mismos nombres",
          text: "Cada variable de Figma apunta al token de CSS, como var(--color-primary), así diseño y código no se desencuentran.",
        },
      ],
      note: "El flujo de inscripción todavía usa los estilos de la página pública, con tokens propios. Unificar los dos sistemas es uno de los próximos pasos.",
    },
    results: {
      title: "Resultados",
      lead: "El proyecto es reciente y la recolección de datos sigue en curso, pero algunos resultados ya aparecen: +140% de nuevos suscriptores por mes (6 en el primer mes en línea, contra un promedio de 2,5 por mes antes) y −70% en el tiempo para cerrar una suscripción (de 2 a 3 días hábiles a 12h a 24h, cálculo por el punto medio: de 60h a 18h).",
      decisionLabel: "Ahora",
      rows: [
        {
          label: "Conversión de lead a suscriptor",
          text: "5 suscripciones en dos meses (108 leads)",
          decision: "6 nuevos suscriptores en el primer mes (promedio anterior: 2,5 por mes). +140%, primer dato.",
        },
        {
          label: "Conclusión por etapa del flujo",
          text: "No se podía medir en Forms",
          decision: "Medición implementada. Recolectando datos.",
        },
        {
          label: "Dudas repetidas en la atención",
          text: "Frecuentes, sobre lo que ya estaba escrito",
          decision: "Menos frecuentes. Por medir.",
        },
        {
          label: "Tiempo para cerrar una suscripción",
          text: "De 2 a 3 días hábiles",
          decision: "De 12h a 24h. −70%, mejoró.",
        },
        {
          label: "Trabajo de finanzas por inscripción",
          text: "Cálculo y revisión manuales",
          decision: "Automatizado y simplificado. Por medir.",
        },
      ],
      note: "El equipo validó el panel y está en transición del modelo antiguo al nuevo, con capacitación oficial prevista. Con más meses de datos, la conversión por etapa mostrará dónde el flujo todavía pierde personas y orientará la segunda iteración.",
    },
    learnings: {
      title: "Aprendizajes",
      lead: "No pude entrevistar a suscriptores ni a leads que desistieron, así que no sé con certeza si el formulario era el cuello de botella principal, y la validación del flujo se hizo solo con el equipo interno. Si empezara de nuevo, haría cinco conversaciones cortas antes de diseñar y probaría el flujo con personas de afuera.\n\nPor eso, los próximos pasos son entrevistar a suscriptores recientes y a leads que no cerraron, medir el embudo por etapa y usar esos datos en la segunda iteración. Ella ya prevé quitar la tasa de adhesión e incluir productos aliados como huevos, miel y lácteos en el paso dos.",
    },
  },
};
