---
title: BundaGizi
positioning: A WhatsApp-based AI nutrition assistant for Indonesian families — run as a production product, not a prototype.
category: production
status: Production
statusKind: live
accent: mint
role: Founder & Full-Stack Engineer
scale: WhatsApp · nutrition knowledge base
period: 2025 — 2026
order: 4
featured: false
hasDetail: true
flowLabel: Conversation flow
flow:
  - WhatsApp message
  - Data extraction
  - Nutrition knowledge base
  - Analysis
  - Grounded reply
highlights:
  - A knowledge base of 1,146 Indonesian foods — local relevance instead of imported data
  - WhatsApp as the interface, with no extra app to install
  - Answers written in conversational language, not report format
  - Runs as a monitored production service with explicit error handling
metrics:
  - value: 1,146
    label: Indonesian foods
  - value: WhatsApp
    label: Interface
  - value: Production
    label: Status
stack:
  - label: Backend
    items: Python · Flask · PostgreSQL
  - label: AI
    items: LLM · RAG · Vector search
  - label: Integrations
    items: WhatsApp Cloud API · Object storage
  - label: Infra
    items: Docker · Nginx · VPS
links: []
---

BundaGizi taught me that building an AI product is not about choosing a model — it is about keeping answers correct when the user is not an expert.

Mothers at the local health post will not install a new app, but they already use WhatsApp every day. That single decision determined the entire shape of the product: short conversations, plain language, and answers that have to be defensible. The local nutrition knowledge base exists so that advice does not drift away from the food actually available in the user's kitchen.

It was also the source of my hardest operational lessons: messaging rate limits, the quality of data extracted from photos, and how easily failures hide behind replies that look perfectly fine.
