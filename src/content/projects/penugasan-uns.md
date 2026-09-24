---
title: Penugasan UNS
positioning: An institutional workflow platform for official travel at Universitas Sebelas Maret — from assignment letter to payment.
category: production
status: Production
statusKind: live
accent: mint
role: Full-Stack Engineer
scale: 3,500+ staff · 900+ organisational units
period: 2024 — present
order: 3
featured: false
hasDetail: true
flowLabel: Document flow
flow:
  - Assignment letter
  - Approval
  - Digisign
  - SPPD
  - Verification
  - Payment
highlights:
  - Runs across 900+ organisational units with differing approval structures
  - Electronic signature integrated, so documents never need printing
  - Geolocation as proof of attendance rather than an after-the-fact attachment
  - Financial workflow connected directly to disbursement
metrics:
  - value: 3,500+
    label: Staff
  - value: 900+
    label: Units
  - value: Production
    label: Status
stack:
  - label: Backend
    items: PHP · Laravel · MySQL
  - label: Integrations
    items: Digisign · Payment gateway · Geolocation
  - label: Frontend
    items: Vue.js · JavaScript
  - label: Output
    items: Document generation · Reporting
links: []
---

Penugasan UNS handles a process that used to be scattered: submitting the assignment letter, layered approvals, signing, SPPD preparation, verification, and fund disbursement. Each stage involves different parties with different authority.

The system was built so a single document flows intact — its status is traceable, its approval history visible, and proof of activity attached to the same record. Institutional scale forces every design decision to be tested: organisational structures that change, layered authority, and a daily document volume that is not small.

It is also the system that shaped how I work today: third-party integrations must be assumed to fail, approval flows must be idempotent, and audit trails are a requirement, not a feature.
