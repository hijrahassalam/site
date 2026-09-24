---
title: BidikTender
positioning: Tender document intelligence — extracting requirements, matching fulfilment documents, and surfacing readiness with its blockers.
category: current
status: In Development
statusKind: building
accent: cyan
role: Founder & Full-Stack Engineer
scale: Enterprise AI
period: 2026 — present
order: 2
featured: true
hasDetail: true
flowLabel: Operator workflow
flow:
  - Tender document
  - AI extraction
  - Requirement workspace
  - Fulfilment documents
  - AI matching
  - Readiness & blockers
highlights:
  - Requirements are extracted from official documents instead of retyped by an operator
  - Requirement-centric workflow — every fulfilment document answers a specific clause
  - Readiness is computed from attached evidence, not from a feeling of completeness
  - Blockers are stated explicitly so the operator knows what to fix first
metrics:
  - value: Tender doc
    label: Input
  - value: Requirement-centric
    label: Work model
  - value: Readiness
    label: Output
stack:
  - label: Backend
    items: Node.js · TypeScript · PostgreSQL
  - label: AI
    items: LLM extraction · Document parsing · Matching
  - label: Frontend
    items: React · TypeScript
  - label: Infra
    items: Docker · Vercel · Object storage
links:
  - label: Open BidikTender
    href: https://bidiktender.web.id
---

Public tenders are rarely lost because a company is incapable. They are lost because a long requirements document cannot be read thoroughly before the deadline, while an operator works with limited time and hundreds of clauses to answer.

BidikTender takes the tender document, extracts its requirements into a structured list, and provides a workspace where each clause is paired with its fulfilment document. The system scores readiness from the evidence actually attached, and flags the clauses that still block submission.

The hard part is not calling a language model — it is keeping extraction trustworthy on real documents, where tables are messy, numbering is inconsistent, and terminology differs between institutions.
