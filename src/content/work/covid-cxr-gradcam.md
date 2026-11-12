---
title: Explainable Medical AI
order: 6
role: Researcher
kind: COVID-19 chest X-ray classification
status: Research · Open source
summary: A CNN for three-class COVID-19 detection from chest X-rays, with Grad-CAM used as a diagnostic tool to expose shortcut learning. 95.27% accuracy on COVID-QU-Ex.
repo: https://github.com/hijrahassalam/covid-cxr-gradcam
stack: [Python, TensorFlow, Keras, Grad-CAM]
highlight: 95.27% accuracy
---

## The question

High accuracy on a medical-imaging benchmark does not prove that a model is looking at the right thing. I wanted to know what the classifier was actually using to make its decisions.

## What I did

- Trained a CNN for three-class classification (COVID-19, non-COVID infection, normal) on the **COVID-QU-Ex** dataset, reaching **95.27% accuracy**.
- Used **Grad-CAM** as a diagnostic tool rather than decoration, inspecting where the model's attention fell.

## Finding

The analysis documented activations outside the lungs, which is evidence of **shortcut learning**: the model was partly relying on cues that are not clinically meaningful. That is exactly the failure mode a headline accuracy number hides.

## Background

This continues my undergraduate thesis on CNN-based COVID-19 detection from X-ray and CT images, and an earlier publication on COVID-19 case forecasting (*Ultimatics*, 2020).
