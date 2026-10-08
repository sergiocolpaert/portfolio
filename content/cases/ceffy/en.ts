import type { CaseFrontmatter } from "@/lib/cases";
import { buildCeffySections } from "./build";

export const meta: CaseFrontmatter = {
  title: "Repositioning gummy supplements as a premium longevity category",
  client: "CÈFFY",
  role: "Product Designer",
  tagline: "Design system, art direction and shopping experience for a brand that wanted to be taken seriously.",
};

export const sections = buildCeffySections({
  about: {
    title: "About",
    lead: "CÈFFY wanted to sell gummy supplements as a premium longevity category, to women who had already been fooled by miracle promises and associate gummies with children's products. My job was to translate that distrust into product decisions. The architecture is organized by goal (energy, sleep, longevity), not by category. The product page puts nutritional transparency and kit choice in the same moment of decision. And the kit and discount logic was designed together with engineering, so the cart never contradicts what the interface promises.",
    tags: ["Discovery", "Information architecture", "Conversion", "Design System", "E-commerce"],
    alt: "CÈFFY: Creatine product page on a laptop",
  },
  problem: {
    title: "Problem",
    text: "The challenge was two-sided. On one side, convincing a mature audience that gummy supplements are serious, overcoming the format's association with children's products. On the other, enabling flexible kits, progressive discounts and automated tax invoicing, features that native WooCommerce does not support.",
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
    lead: "CÈFFY's architecture was designed around health pillars, not product categories. The flow lets the customer go from Home to checkout guided by goal (Energy, Sleep or Longevity), without unnecessary cognitive load.",
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
  constraint: {
    title: "The constraint that shaped the design",
    lead: "The Buy Box promises kit and progressive discount in a single gesture. In native WooCommerce, those are two discount rules competing for the same cart, and without resolving that conflict the interface would show a price the cart doesn't deliver. So the cart rules were designed as part of the experience, together with engineering, and became a chain of custom PHP hooks.",
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
    codeLabel: "View code excerpt",
  },
  signals: {
    title: "First behavior signals",
    lead: "The store runs Hotjar. Before looking at the data, I defined which signals confirm or refute each PDP decision. The findings, and what changes because of them, will be added here once there are enough sessions to draw conclusions.",
    decisionLabel: "Decision under test",
    rows: [
      {
        label: "Buy Box",
        text: "Clicks on the kit selector and the buy button, relative to PDP sessions.",
        decision: "Concentrating kit and progressive discount in the Buy Box solves the choice in a single gesture.",
      },
      {
        label: "Nutrition table",
        text: "Scroll to the nutrition section before clicking buy.",
        decision: "Transparency is checked before purchase, as the persona suggested.",
      },
      {
        label: "Cart",
        text: "Abandonment after a kit or discount is applied.",
        decision: "The cart holds the price the Buy Box promised, with no surprises at checkout.",
      },
    ],
  },
  performance: {
    title: "Technical performance",
    lead: "PageSpeed audit on the live site, before delivery. It is evidence of technical quality, not of business impact.",
    labels: ["Performance", "Accessibility", "Best Practices", "SEO"],
    columns: { desktop: "Desktop", mobile: "Mobile" },
  },
  reflection: {
    title: "Final Reflection",
    lead: "If this project had a second phase, the biggest gain would not be in the UI, but in closing the loop between design decisions and real behavior. Flow validation so far was a heuristic review done by us, complemented by structured stakeholder feedback on the wireframes, which is enough to reduce technical risk but does not replace moderated testing with the real persona before the final UI. The next step is to read the signals above with enough volume and come back to this case with real behavior and conversion data, not just technical performance.",
  },
});
