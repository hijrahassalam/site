---
title: BidikTender
order: 3
role: Lead AI Engineer & Solution Architect
kind: AI tender-document platform
status: Production
summary: An AI-assisted tender workspace that reads procurement requirements, matches them against supporting documents, flags missing evidence and compares RAB against BOQ.
url: https://bidiktender.web.id
stack: [Document analysis, LLM pipeline, Validation workflows, Human review]
highlight: Human-in-the-loop by design
---

## The problem

Preparing a tender bid means checking long procurement documents line by line against a company's own evidence. A single missing certificate or mismatched cost line can disqualify the whole bid, and the checking is slow, manual and error-prone.

## What I built

BidikTender is a workspace that does the first pass for the team:

- **Requirement analysis.** It extracts what the tender actually asks for.
- **Evidence matching.** It matches each requirement against the supporting documents the bidder has uploaded.
- **Gap flagging.** It highlights requirements that have no supporting evidence yet.
- **RAB–BOQ comparison.** It compares the cost plan (RAB) against the bill of quantities (BOQ).

## Engineering decisions

- **Human review is part of the pipeline, not an afterthought.** In procurement a wrong "looks fine" is expensive, so the AI proposes and a person confirms. The workflow is designed around that review step.
- **Validation before output.** Extracted data passes through validation workflows before it reaches the user.

## My role

Lead AI Engineer and Solution Architect. I designed the architecture, the document-analysis pipeline, the validation workflows, the human-review process and the production application.
