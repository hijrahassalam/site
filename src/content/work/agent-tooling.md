---
title: Agent Tooling
order: 5
role: Creator & Developer
kind: Open-source JavaScript libraries
status: Open source · npm
summary: 36 zero-dependency JavaScript libraries for building reliable AI agents, covering LLM routing, caching, failover, memory, RAG, guardrails, evaluation and cost control.
repo: https://github.com/hijrahassalam?tab=repositories&q=hermes
stack: [JavaScript, Node.js, npm, LLM infrastructure]
highlight: 36 libraries
---

## Why

Every AI product I built kept needing the same plumbing: routing between models, failing over when a provider is down, caching repeated calls, keeping costs in check, and screening inputs and outputs. I extracted that plumbing into small, reusable libraries.

## What's inside

- **LLM infrastructure.** Routing, caching, failover and cost management across providers.
- **Agent building blocks.** Memory, orchestration and RAG components.
- **Safety and quality.** Guardrails such as prompt-injection and PII screening, plus evaluation helpers.

Each library has zero dependencies and is published on npm, so it can be adopted on its own.
