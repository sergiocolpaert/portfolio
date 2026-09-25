import type { CaseFrontmatter } from "@/lib/cases";
import { buildCeffySections } from "./build";

export const meta: CaseFrontmatter = {
  title: "CÈFFY: E-commerce",
  client: "CÈFFY",
  role: "UI/UX Designer",
  tagline: "Online store for a fruit-based gummy supplement brand.",
};

export const sections = buildCeffySections({
  about: {
    title: "About",
    lead: "Cèffy is a custom-built e-commerce platform created to reposition gummy supplements as a premium longevity category, combining a sophisticated Design System with a sales engine custom-built in PHP, with automated tax integration.",
    tags: ["UI/UX", "Design", "PHP Engineering"],
    alt: "CÈFFY: Creatine product page on a laptop",
    creditLabel: "In partnership with",
  },
  problem: {
    title: "The Problem",
    quote:
      "CÈFFY faced a two-sided challenge. On one side, it had to convince a mature audience that gummy supplements are a serious product, overcoming the format's association with children's products. On the other, it had to enable commercial operations such as flexible kits, progressive discounts and automated tax invoicing, features that native WooCommerce does not support and that required custom development.",
    author: "Cèffy Team",
    role: "Women's Supplements",
  },
  process: {
    title: "Design Process",
    lead: "We started with discovery and persona mapping to align brand positioning, consumption habits and tax requirements. Based on those insights, we structured the information architecture and reviewed the flows in wireframes using usability heuristics, validating structural decisions with direct stakeholder feedback before the final UI. The Design System, the final UI and the custom PHP engineering ensured visual consistency, calculation accuracy and readiness to scale, from the first click to the issued invoice.",
    week: "Week",
    steps: [
      {
        title: "Strategy & UX",
        tags: ["Briefing", "Persona", "Information Architecture"],
      },
      {
        title: "Wireframing",
        tags: ["UX Audit", "Purchase Flows", "Wireframes"],
      },
      {
        title: "Design System & UI",
        tags: ["Moodboard", "UI Kit", "Mobile-First Screens"],
      },
      {
        title: "Development",
        tags: ["WooCommerce", "Integrations", "PHP Customization"],
      },
    ],
  },
  architecture: {
    title: "Information Architecture",
    lead: "Cèffy's architecture was designed around health pillars, not product categories. The flow lets the customer go from Home to checkout guided by goal (Energy, Sleep or Longevity), without unnecessary cognitive load.",
    columns: [
      {
        title: "Home",
        items: ["Hero / Carousel", "Product Showcase", "Quick FAQ"],
      },
      {
        title: "Catalog",
        items: ["Filters by Benefit", "Sorting", "Product Grid"],
      },
      {
        title: "Product (PDP)",
        items: [
          "Buy Box",
          "Who it's ideal for",
          "Nutritional Information",
          "Reviews",
          "Product FAQ",
        ],
      },
      {
        title: "Our Story",
        items: ["Our Motivation", "Our Solution", "Our Values"],
      },
      {
        title: "Cart",
        items: ["Progress Bar", "Bag Items", "Order Summary"],
      },
      {
        title: "Checkout",
        items: ["Your Details", "Delivery", "Payment"],
      },
    ],
  },
  persona: {
    title: "Primary Persona",
    lead: "We developed an in-depth persona to guide every UX decision, from how we communicate benefits to the information hierarchy on product pages.",
    name: "Cristina Freitas",
    role: "Marketing Consultant, 42 years old",
    cards: [
      {
        label: "Pain",
        text: 'She has been fooled by unproven "miracle" supplements, and distrusts packaging that seems to appeal to children instead of conveying clinical seriousness.',
      },
      {
        label: "Motivation",
        text: "Keeping energy and drive in her routine without giving up convenience, and feeling that she is investing in something serious for her long-term health.",
      },
      {
        label: "Expectation",
        text: "Total transparency, a clear nutrition table, traceable ingredients and dosage information available even before opening the package.",
      },
      {
        label: "Delight",
        text: "Feeling that she has finally found a supplement routine that is practical, tasty and aligned with her wellness values.",
      },
    ],
  },
  traceability: {
    title: "Decision Traceability",
    lead: "Every UX decision on the PDP comes from a specific insight about Cristina, not from aesthetic preference. Below, the direct mapping between pain/motivation/expectation/delight and the corresponding design choice.",
    decisionLabel: "Design decision",
    rows: [
      {
        label: "Pain",
        text: 'She has been fooled by "miracle" supplements and distrusts gimmicky packaging.',
        decision:
          "The gummy has a rounded lozenge shape, not a children's fruit-candy look. Product photography follows a serious editorial line, without artificial AI aesthetics.",
      },
      {
        label: "Motivation",
        text: "Keeping energy in her routine without giving up convenience.",
        decision:
          "The kit selector and the progressive discount are concentrated in the Buy Box, solving quantity choice and commercial advantage in a single gesture.",
      },
      {
        label: "Expectation",
        text: "Total transparency, with traceable ingredients and accessible dosage.",
        decision:
          "The nutrition table appears in the very first carousel image and gets its own section on the PDP, next to highlights of the product's main benefits.",
      },
      {
        label: "Delight",
        text: "Finding a routine that is practical, tasty and aligned with her values.",
        decision:
          "Product photography and flavors prioritize a sensory, authentic aesthetic, with real Brazilian women, not a sterile pharmacy look.",
      },
    ],
  },
  wireframes: {
    title: "Wireframes",
    lead: "Before the aesthetic layer, we tested the structure in low and mid-fidelity wireframes in Figma, validating where the Buy Box, the kit selector and the nutrition tables should sit to capture attention at the right moment of the journey.",
    altDesktop: "CÈFFY: desktop wireframes for home, product and cart",
    altMobile: "CÈFFY: mobile wireframes for home, product, cart and delivery",
  },
  styleGuide: {
    title: "Style Guide",
    lead: "Designed mobile-first, since most of the traffic comes from phones: comfortable touch targets, an institutional green that communicates health without looking childish, and typography built for dosage legibility on small screens.",
    alt: "CÈFFY: typography (Plus Jakarta Sans for headings, Inter for body and captions) and color palette in institutional and neutral greens",
  },
  ui: {
    title: "UI Design",
    lead: "From the Home to the order confirmation, every screen guides the user smoothly. On the PDP, the Buy Box concentrates the progressive discount and the kit selector in a single decision gesture.",
    altMockups:
      "CÈFFY: mockups of the product page, mobile home, order summary and side cart",
    altHome: "CÈFFY: full-page e-commerce home",
    homeCaption: "Homepage",
  },
  engineering: {
    title: "PHP Engineering",
    lead: "Kits and quantity-based progressive discounts are, technically, two discount logics competing for the same cart. Solving that conflict, without relying on generic plugins, required a chain of 12 coordinated hooks in the WooCommerce lifecycle, not an isolated shortcode.",
    rows: [
      {
        title: "Conditional fee",
        text: "The kit discount is only applied when the number of pieces in the cart matches exactly what is expected; an incomplete kit never generates an undue discount.",
      },
      {
        title: "Conflict exemption",
        text: "Before the fee is calculated, kit items are forced back to full price so they do not collide with the quantity-based progressive discount.",
      },
      {
        title: "Consolidated shipping",
        text: "The loose kit components are unified into a virtual package only for shipping calculation, using the parent product's weight and dimensions.",
      },
      {
        title: "Reverse unbundling",
        text: "If the customer removes a component, the surviving siblings become normal products, eligible for the Tier discount.",
      },
      {
        title: "Quantity split",
        text: "Taking 2 units of a kit item locks the line at 1 and sends the surplus as a standalone product, with its own progressive discount.",
      },
    ],
    facts: [
      "12 coordinated hooks",
      "Zero conflicts between kit and progressive discount",
      "Cart stays intact on any customer action",
    ],
  },
  performance: {
    title: "Performance",
    lead: "With no traffic history to cite commercial impact, the concrete proof is in production performance measured before delivery: a 95 average PageSpeed score, validated on Desktop and Mobile, without relying on estimates.",
    score: "Score",
    columns: { desktop: "Desktop", mobile: "Mobile" },
    cards: [
      {
        title: "Design & Experience",
        text: "A complete mobile-first visual system, from the institutional palette to checkout, tested in wireframes before the final UI, with no structural rework.",
      },
      {
        title: "Custom engineering",
        text: "12 coordinated hooks solving kit, progressive discount, shipping and tax in the same cart, without relying on a generic plugin and without rule conflicts.",
      },
      {
        title: "Validated performance",
        text: "Post-deploy PageSpeed audit, not an estimate: 92 Performance on Desktop and Mobile, measured on the live site, before delivery.",
      },
    ],
    rows: [
      { label: "Performance", status: "Excellent" },
      { label: "Accessibility", status: "Excellent" },
      { label: "Best Practices", status: "Excellent" },
      { label: "SEO", status: "Excellent" },
    ],
  },
  reflection: {
    title: "Final Reflection",
    lead: "If this project had a second phase, the biggest gain would not be in the UI, but in closing the loop between design decisions and real behavior. Flow validation so far was a heuristic review done by us, complemented by structured stakeholder feedback on the wireframes, which is enough to reduce technical risk but does not replace moderated testing with the real persona before the final UI. The natural next step is to instrument analytics from day zero, so we can come back to this case a few months from now with real conversion data, not just technical performance.",
  },
});
