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
    "about": {
      "title": "About",
      "lead": "Organicamente is a CSA (Community Supported Agriculture) in Rio de Janeiro. Subscribers fund the planting of agroecological family farmers and receive fixed baskets every week or every two weeks.\n\nI work on the project as a growth and product partner, and this case tells how I redesigned the front door and the back office of the operation.",
      "tags": [
        "Product Design",
        "UI/UX Design"
      ],
      "alt": "Sign-up flow screens of Organicamente on three phones"
    },
    "summary": {
      "title": "Project summary",
      "rows": [
        {
          "label": "Problem",
          "text": "Leads who were served did not get to subscribe, and the team ran everything on spreadsheets"
        },
        {
          "label": "My role",
          "text": "Product Designer, from discovery to code, working alone"
        },
        {
          "label": "Constraint",
          "text": "A small, non-technical team, a tight budget, billing integrated with Asaas and almost ten years of data to migrate"
        },
        {
          "label": "Outcome",
          "text": "In the first month, 6 new subscribers and closing in 12h to 24h. Data collection is ongoing"
        },
        {
          "label": "Stack",
          "text": "Figma, Claude Code, Supabase, Vercel and Google Apps Script"
        }
      ]
    },
    "context": {
      "title": "Context",
      "lead": "Someone who joins a CSA is not buying a one-off product. They enter a recurring monthly pact, tied to a specific farmer and a delivery route by region. Sign-up is a delicate moment, because the person needs to understand the model, choose a plan and region, and trust before paying.",
      "stepLabel": "Step",
      "steps": [
        "Understand the model",
        "Choose plan and region",
        "Trust before paying"
      ]
    },
    "problem": {
      "title": "The problem",
      "sides": [
        {
          "label": "For those who wanted to subscribe",
          "text": "The path started in a Google Form about ten years old. Before any choice, the person faced eight rules in a block of text, two price tables with dozens of values, and only then chose a region. In total it was three pages and 16 fields, with the email asked twice. Many people ignored the text and contacted support on WhatsApp to ask what was already written."
        },
        {
          "label": "For those who operated it",
          "text": "Every sign-up was checked by hand. Finance calculated each subscriber's amount manually, and the data lived in spreadsheets that were hard to cross-reference, with no automation."
        }
      ],
      "kpis": [
        {
          "label": "Pages",
          "value": "3",
          "caption": "to finish signing up"
        },
        {
          "label": "Fields",
          "value": "16",
          "caption": "with the email asked twice"
        },
        {
          "label": "Rules",
          "value": "8",
          "caption": "in a block of text, before anything else"
        },
        {
          "label": "Price tables",
          "value": "2",
          "caption": "with dozens of values"
        }
      ],
      "altRules": "Screenshot of the old Google Form with the rules in a block of text",
      "altFields": "Screenshot of the old Google Form with fields and financial terms"
    },
    "users": {
      "title": "Users",
      "lead": "There were two audiences with different needs.",
      "cards": [
        {
          "label": "Who wants to subscribe",
          "text": "Needs to understand what they are signing up for, feel that the order is simple, and trust the person who will grow their food.",
          "tags": [
            "Understanding",
            "Simplicity",
            "Trust"
          ]
        },
        {
          "label": "The team",
          "text": "With one person in management, one in support and two in finance, they need to know who joined, how much to charge, where to deliver and who is overdue, without rebuilding that every week.",
          "tags": [
            "Who joined",
            "How much to charge",
            "Where to deliver",
            "Who is overdue"
          ]
        }
      ]
    },
    "discovery": {
      "title": "How I spotted the problem",
      "lead": "Leads were arriving, support was answering, and still few closed. In the two reference months I have, there were 5 subscriptions for 108 leads, about 4.6%. The sample is small, but it works as a baseline.\n\nIn May I presented the team with an interactive sign-up page, designed to filter out-of-route neighborhoods on the very first click and capture the contact before the lead gave up. When they saw the new flow, the team also pointed out the pains of management. I understood how they organized customers in spreadsheets and decided to build the dashboard.",
      "metric": {
        "label": "Baseline",
        "value": "≈ 4.6%",
        "caption": "lead-to-subscriber conversion",
        "rows": [
          {
            "label": "Leads",
            "value": "108"
          },
          {
            "label": "Subscriptions",
            "value": "5"
          },
          {
            "label": "Reference month 1",
            "value": "46 leads · 2 subscriptions"
          },
          {
            "label": "Reference month 2",
            "value": "62 leads · 3 subscriptions"
          }
        ],
        "note": "Small sample, used as a reference to measure the new flow."
      },
      "hypothesis": "My hypothesis was that the form acted as a strong blocker in the decision.",
      "hypothesisNote": "It was not the only possible cause, since price, expectations about pesticide-free food and out-of-route leads also weighed. But it was the cause I could test and redesign."
    },
    "decisions": {
      "title": "Design decisions",
      "lead": "I followed the logic “the user needs X, so I did Y”.",
      "decisionLabel": "So",
      "rows": [
        {
          "label": "01 · Subscriber",
          "text": "Whoever arrives needs to feel at home before committing.",
          "decision": "I inverted the funnel. The first screen asks for the region and already shows the photo, the story and the delivery day of the responsible farmer. The rules are left for the last step, in visual cards."
        },
        {
          "label": "02 · Team",
          "text": "The team needs to know early whether they can serve the person.",
          "decision": "The neighborhood is validated in the first step. Someone who lives outside the route picks “My neighborhood is not on the list”, the next button is locked and the person is taken to WhatsApp to join a waiting list. Nobody spends time filling in a sign-up that could not be served."
        },
        {
          "label": "03 · Team",
          "text": "The team needs to win back those who give up.",
          "decision": "Contact comes before address. Whoever drops off midway has already left a name and WhatsApp, and support can pick the conversation back up."
        },
        {
          "label": "04 · Subscriber",
          "text": "The most common question was whether the price was per delivery or per month.",
          "decision": "I swapped “basket” for “subscription” on every screen. I also created a side summary that adds up subscription, add-ons and sign-up fee and shows the first month's total."
        },
        {
          "label": "05 · Subscriber",
          "text": "Whoever joins mid-month should not depend on a manual calculation.",
          "decision": "The system calculates the prorated amount from the remaining deliveries."
        },
        {
          "label": "06 · Team",
          "text": "Logistics needs to serve the route.",
          "decision": "I removed the choice of time slots and the option to call on arrival. The decision came from management, based on delivery operational constraints."
        }
      ]
    },
    "discarded": {
      "title": "What I discarded",
      "items": [
        {
          "kind": "no",
          "title": "Discarded keeping the Form with tweaks",
          "text": "The problem was in the structure, not in the appearance."
        },
        {
          "kind": "no",
          "title": "Discarded using off-the-shelf tools",
          "text": "For cost and for the limitations in modeling a CSA's logic."
        },
        {
          "kind": "yes",
          "title": "Chose to design in Figma and build with Claude Code, Supabase and Vercel",
          "text": "What let me design, test and adjust with the team without depending on another team."
        }
      ]
    },
    "solution": {
      "title": "The solution",
      "lead": "Sign-up has five steps. Region and farmer, subscription and add-ons, contact details, address and absence contingency, and finally the pact with the financial summary.",
      "screens": [
        {
          "title": "Region and farmer",
          "caption": "The first screen asks for the region and already shows the responsible farmer",
          "alt": "Step 1, choose region and neighborhood"
        },
        {
          "title": "Subscription and add-ons",
          "caption": "Subscription, add-ons and a side summary with the first month's total",
          "alt": "Step 2, subscription size"
        },
        {
          "title": "Contact details",
          "caption": "Name and WhatsApp before the address",
          "alt": "Step 3, identification"
        },
        {
          "title": "Address and absence",
          "caption": "Delivery address and what to do in case of absence",
          "alt": "Step 4, delivery address"
        },
        {
          "title": "Pact and summary",
          "caption": "Rules in visual cards and a financial summary",
          "alt": "Step 5, trust pact and financial summary"
        }
      ],
      "note": "Automatic billing. At the end of sign-up, the charge goes out automatically through Asaas, by PIX or boleto."
    },
    "admin": {
      "title": "Admin dashboard",
      "lead": "Built so the team knows who joined, how much to charge, where to deliver and who is overdue, without rebuilding that every week.",
      "features": [
        {
          "title": "Overview",
          "text": "Recurring revenue, active customers, open charges, a queue of orders to approve and automatic alerts, such as overdue charges."
        },
        {
          "title": "Deliveries",
          "text": "Organizes baskets by farmer and weekday and generates the delivery route."
        },
        {
          "title": "Subscriber profile",
          "text": "Subscription and financial status, logistics, payment history and timeline, with a shortcut to WhatsApp."
        },
        {
          "title": "Reports",
          "text": "Finance gets reports without recalculating every sign-up."
        }
      ],
      "altOverview": "Organicamente dashboard on a laptop, with the login screen and reports",
      "altDeliveries": "Dashboard Deliveries & Baskets screen",
      "altProfile": "Dashboard Overview screen"
    },
    "system": {
      "title": "Dashboard design system",
      "lead": "The dashboard grew in phases and accumulated parallel visual styles and 161 styles written directly in the HTML. To keep evolving it alone, without rework, I created a single base of tokens and components, which now lives in code and in Figma with the same names.",
      "kpis": [
        {
          "label": "Variables",
          "value": "68",
          "caption": "39 colors, 11 spacings, 5 radii and 13 typography"
        },
        {
          "label": "Styles",
          "value": "20",
          "caption": "15 text and 5 shadow and focus"
        },
        {
          "label": "Components",
          "value": "23",
          "caption": "with state variants"
        },
        {
          "label": "Icons",
          "value": "21",
          "caption": "Lucide, as components"
        }
      ],
      "fonts": [
        {
          "name": "Outfit",
          "weights": [
            "Titles"
          ]
        },
        {
          "name": "Inter",
          "weights": [
            "Text"
          ]
        }
      ],
      "decisions": [
        {
          "title": "Contrast within AA",
          "text": "The gray of subtle text was darkened to 4.8:1 on white, and the green of the active navigation item got its own shade to reach 5:1."
        },
        {
          "title": "Designed for mobile",
          "text": "Below 768 px, tables become cards. Below 576 px, modals open as panels that slide up from the bottom."
        },
        {
          "title": "Figma and code with the same names",
          "text": "Each Figma variable points to the CSS token, such as var(--color-primary), so design and code do not drift apart."
        }
      ],
      "note": "The sign-up flow still uses the public page's styles, with its own tokens. Unifying the two systems is one of the next steps."
    },
    "results": {
      "title": "Results",
      "lead": "The project is recent and data collection is still ongoing, but some results are already showing.",
      "metrics": [
        {
          "label": "New subscribers per month",
          "value": "+140%",
          "caption": "6 in the first month live, versus an average of 2.5 per month before",
          "note": "Before it was 5 subscriptions in two reference months"
        },
        {
          "label": "Closing time",
          "value": "-70%",
          "caption": "in the time to close a subscription, from 2 to 3 business days to 12h to 24h",
          "note": "Calculated by the midpoint, from 60h to 18h"
        }
      ],
      "columns": [
        "Metric",
        "Before (Forms)",
        "Now",
        "Change",
        "Status"
      ],
      "rows": [
        {
          "cells": [
            "Lead-to-subscriber conversion",
            "5 subscriptions in two months (108 leads)",
            "6 new subscribers in the first month (previous average of 2.5 per month)",
            "+140%"
          ],
          "status": "First data",
          "tone": "good"
        },
        {
          "cells": [
            "Completion per flow step",
            "Could not be measured in Forms",
            "Measurement implemented",
            "Collecting data"
          ],
          "status": "Collecting",
          "tone": "info"
        },
        {
          "cells": [
            "Repeated questions to support",
            "Frequent, about what was already written",
            "Less frequent",
            "To measure"
          ],
          "status": "Improved",
          "tone": "good"
        },
        {
          "cells": [
            "Time to close a subscription",
            "2 to 3 business days",
            "12h to 24h",
            "-70%"
          ],
          "status": "Improved",
          "tone": "good"
        },
        {
          "cells": [
            "Finance work per sign-up",
            "Manual calculation and checking",
            "Automated and simplified",
            "To measure"
          ],
          "status": "Automated",
          "tone": "good"
        }
      ],
      "note": "The team has validated the dashboard and is transitioning from the old model to the new one, with official training planned. With more months of data, per-step conversion will show where the flow still loses people and guide the second iteration."
    },
    "learnings": {
      "title": "Learnings",
      "lead": "I could not interview subscribers or leads who dropped off, so I do not know for sure whether the form was the main bottleneck, and the flow was validated only with the internal team. If I were starting over, I would hold five short conversations before designing and test the flow with outsiders.\n\nSo the next steps are to interview recent subscribers and leads who did not close, measure the funnel per step and use that data in the second iteration. It already plans to remove the sign-up fee and include partner products such as eggs, honey and dairy in step two."
    }
  },
};
