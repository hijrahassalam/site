---
title: AsistenDiet
order: 1
role: Founder & Applied AI Engineer
kind: AI nutrition companion
status: Live · Early access
summary: Snap a meal on WhatsApp, get an estimated nutrition log, daily summaries and personalised targets, all synced to a web dashboard.
url: https://asistendiet.com
stack: [LLM vision, WhatsApp, Web dashboard, Backend APIs]
highlight: Founder-built, end to end
---

## The problem

Calorie tracking fails because logging is tedious. Most people quit food diaries within days because searching a database for every ingredient is friction nobody keeps up with.

## What I built

AsistenDiet moves logging into the app people already open dozens of times a day: WhatsApp.

1. **Meal photo.** The user sends a photo or a short message describing what they ate.
2. **AI estimate.** An LLM workflow turns it into an estimated breakdown of calories and macros, then replies in the chat.
3. **Dashboard.** Every entry is logged automatically to a web dashboard with daily summaries against personalised targets.

## Engineering decisions

- **Estimates, stated as estimates.** Food-photo nutrition is inherently approximate, so the product presents values as estimates rather than as clinical measurements.
- **Chat-first, web-second.** Capture happens in WhatsApp, where the friction is lowest. Review and trends live on the web, where there is room for them.

## My role

Founder. I own product strategy, the LLM workflows, backend architecture, the WhatsApp integration, deployment and operations.
