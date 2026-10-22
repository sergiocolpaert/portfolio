import type { CaseFrontmatter } from "@/lib/cases";
import type { OrganicamenteTexts } from "./build";

export const texts: { meta: CaseFrontmatter; sections: OrganicamenteTexts } = {
  meta: {
    title: "A guided five-step sign-up and a dashboard to run the community",
    client: "Organicamente",
    role: "Product Designer",
    tagline:
      "A redesign of the front door and back office of a CSA in Rio. The three-page form became a flow that validates the region right at the start, and the spreadsheets became a dashboard for the team.",
  },
  sections: {
    about: { title: "About", lead: "Organicamente is a CSA (Community Supported Agriculture) in Rio de Janeiro. Subscribers fund the planting of agroecological family farmers and receive fixed baskets every week or every two weeks.\n\nI work on the project as a growth and product partner, and this case tells how I redesigned the front door and the back office of the operation.", tags: ["Product Design", "UI/UX Design"], alt: "Organicamente: sign-up flow screens on three phones" },
    summary: { title: "Project summary", alt: "Summary: problem, my role, constraint, outcome and stack. Leads who were served did not subscribe and the team ran everything on spreadsheets. Product Designer, from discovery to code, working alone. System and dashboard live since 10/01/2026, with 6 new subscribers in the first month." },
    context: { title: "Context", lead: "Someone who joins a CSA is not buying a one-off product. They enter a recurring monthly pact, tied to a specific farmer and a delivery route by region. Sign-up is a delicate moment, because the person needs to understand the model, choose a plan and region, and trust before paying.", alt: "Three things sign-up must solve: understand the model, choose plan and region, trust before paying" },
    problem: {
      title: "The problem",
      altSides: "Two sides of the problem: those who wanted to subscribe faced a ten-year-old Google Form, and those who operated it checked everything by hand",
      altNumbers: "Old form numbers: 3 pages, 16 fields, 8 rules in a block of text and 2 price tables",
      altForms: "Screenshots of the old Google Form, with rules and financial terms in a block of text",
    },
    users: { title: "Users", lead: "There were two audiences with different needs.", alt: "Who wants to subscribe needs understanding, simplicity and trust. The team needs to know who joined, how much to charge, where to deliver and who is overdue" },
    discovery: {
      title: "How I spotted the problem",
      lead: "Leads were arriving, support was answering, and still few closed. In the two reference months I have, there were 5 subscriptions for 108 leads, about 4.6%. The sample is small, but it works as a baseline.\n\nIn May I presented the team with an interactive sign-up page, designed to filter out-of-route neighborhoods on the very first click and capture the contact before the lead gave up. When they saw the new flow, the team also pointed out the pains of management. I understood how they organized customers in spreadsheets and decided to build the dashboard.",
      hypothesis: "Hypothesis: the form was a strong blocker in the decision.",
      hypothesisNote: "It was not the only possible cause, since price, expectations about pesticide-free food and out-of-route leads also weighed. But it was the cause I could test and redesign.",
      alt: "Baseline: about 4.6% lead-to-subscriber conversion, with 108 leads and 5 subscriptions in two months",
    },
    decisions: { title: "Design decisions", lead: "I followed the logic “the user needs X, so I did Y”.", alt: "Six design decisions, each linking a subscriber or team need to a solution" },
    discarded: { title: "What I discarded", alt: "Discarded keeping the Form with tweaks and using off-the-shelf tools. Chose to design in Figma and build with Claude Code, Supabase and Vercel" },
    solution: { title: "The solution", lead: "Sign-up in five steps: region and farmer, subscription and add-ons, contact details, address and absence contingency, and finally the pact with the financial summary. At the end, the charge goes out automatically through Asaas, by PIX or boleto.", alt: "Organicamente sign-up flow in five mobile screens" },
    admin: {
      title: "Admin dashboard",
      lead: "Built so the team knows who joined, how much to charge, where to deliver and who is overdue, without rebuilding that every week.",
      altFeatures: "Dashboard features: overview, deliveries, subscriber profile and reports",
      altOverview: "Organicamente dashboard on a laptop, with the login screen and reports",
      altScreens: "Dashboard Deliveries & Baskets and Overview screens",
    },
    system: {
      title: "Dashboard design system",
      lead: "The dashboard grew in phases and accumulated parallel visual styles and 161 styles written directly in the HTML. To keep evolving it alone, without rework, I created a single base of tokens and components, which now lives in code and in Figma with the same names.",
      altNumbers: "Design system numbers: 68 variables, 20 styles, 23 components and 21 icons",
      altShowcase: "Dashboard foundations and components: colors, typography, buttons, tags and alerts",
      altDecisions: "System decisions: contrast within AA, designed for mobile, Figma and code with the same names",
      note: "The sign-up flow still uses the public page's styles, with its own tokens. Unifying the two systems is one of the next steps.",
    },
    results: {
      title: "Results",
      lead: "The project is recent and data collection is still ongoing, but some results are already showing.",
      altHighlights: "+140% new subscribers per month (6 in the first month, versus an average of 2.5) and −70% in the time to close a subscription (from 2 to 3 business days to 12h to 24h)",
      altTable: "Measurement table: conversion, completion per step, support questions, closing time and finance work, before and now",
      note: "The team has validated the dashboard and is transitioning from the old model to the new one, with official training planned. With more months of data, per-step conversion will show where the flow still loses people and guide the second iteration.",
    },
    learnings: { title: "Learnings", lead: "I could not interview subscribers or leads who dropped off, so I do not know for sure whether the form was the main bottleneck, and the flow was validated only with the internal team. If I were starting over, I would hold five short conversations before designing and test the flow with outsiders.\n\nSo the next steps are to interview recent subscribers and leads who did not close, measure the funnel per step and use that data in the second iteration. It already plans to remove the sign-up fee and include partner products such as eggs, honey and dairy in step two." },
  },
};
