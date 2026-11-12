---
title: BundaGizi
order: 2
role: Founder & Applied AI Engineer
kind: AI child-nutrition assistant
status: Live
summary: A WhatsApp-first assistant for complementary feeding (MPASI) and child growth, with age-aware guidance, growth tracking, immunisation reminders and web reports.
url: https://www.bundagizi.com/
stack: [Python, Node.js, Generative AI, WhatsApp, PostgreSQL, Docker]
highlight: Health domain, with guardrails
---

## The problem

Parents of babies starting solid food (MPASI) get conflicting advice from relatives, social media and forums. What they need is guidance that fits their child's age and growth, available when they are actually deciding what to cook.

## What I built

BundaGizi is a conversational assistant that parents reach on WhatsApp:

- **Age-aware guidance** for complementary feeding, tailored to the child's age.
- **Growth tracking** against WHO growth standards.
- **Immunisation reminders** so key schedules are not missed.
- **Web reporting** so parents can review history and progress outside the chat.

## Engineering decisions

- **Guardrails for a health domain.** Responses are scoped to nutrition guidance and carry a medical disclaimer; the assistant does not stand in for a paediatrician.
- **Grounded answers.** Recommendations are drawn from a curated Indonesian food knowledge base rather than from the model's memory alone.

## My role

Founder. I lead the conversational-AI integration, backend services, data workflows, deployment and ongoing iteration. I presented BundaGizi as a case study at Build With AI Solo 2026 (GDG Semarang).
