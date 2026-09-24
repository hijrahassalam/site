---
title: AI Agent Tooling
positioning: AI-native working tools — agent orchestration, model provider management, and development workflow automation.
category: tooling
status: Daily Use
statusKind: internal
accent: cyan
role: Builder
scale: Development workflow
period: 2026 — present
order: 6
featured: false
hasDetail: false
highlights:
  - "Agent orchestration for repetitive work: research, audits, reporting"
  - "Model provider and API key management from a single source of truth"
  - "Operational automation replacing manual, repetitive tasks"
metrics:
  - value: Agent
    label: Orchestration
  - value: Multi-provider
    label: LLM models
stack:
  - label: AI
    items: LLM · Agent loop · Tool calling
  - label: Backend
    items: Python · Node.js
  - label: Infra
    items: Docker · VPS · Cron
links: []
---

I do not present this as a public product — it is a way of working. Most of the product work I do now is assisted by agents: tracing documents, checking implementation gaps, and assembling reports.

What I learned here are the limits. Agents are useful for work that can be verified, and dangerous for work that cannot. Every automation I build therefore carries a verification step and an evidence trail.
