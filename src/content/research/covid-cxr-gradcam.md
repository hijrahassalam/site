---
title: Three-Class COVID-19 Detection from Chest X-Ray
subtitle: Explainable CNN with honest Grad-CAM analysis
positioning: I use Grad-CAM not as visual decoration, but as a diagnostic instrument for finding out what a model actually learned.
accent: violet
status: Ongoing research
order: 1
pipeline:
  - Chest X-ray
  - CNN
  - Classification
  - Grad-CAM
  - Interpretability
metrics:
  - value: "95.27%"
    label: Test accuracy
  - value: "0.95"
    label: Macro F1
  - value: 456K
    label: Parameters
  - value: "1.8%"
    label: COVID-19 false negative
findingTitle: Evidence of shortcut learning
findingBody: Grad-CAM showed extra-pulmonary activation in some COVID-19 samples — attention appearing outside the lung region. This indicates the model may rely on dataset artifacts rather than clinical features. Rather than hiding this limitation, I treat it as a core contribution — honest interpretability as a diagnostic tool.
findingWarning: Model attention observed outside the lung region
reference: Referenced by DeGrave, Janizek & Lee (2021), Nature Machine Intelligence.
---

Three-class classification — normal, pneumonia, and COVID-19 — is more clinically realistic than binary classification. The model was trained on a benchmark dataset of 33,958 images with standardised splits, and evaluated on 6,788 test images.

The model was deliberately kept small (456K parameters, 1.74 MB) so it is light enough for browser inference through TensorFlow.js. A small model is also easier to inspect: a simple architecture is more honest when it has to be explained.

The most important part is not the accuracy figure. When Grad-CAM was examined, some COVID-19 predictions placed attention outside the lung region — an indication that the model exploits markers correlated with the label in the dataset but clinically meaningless. Findings like this usually stay hidden behind accuracy reporting. I choose to surface it, because my research direction is building models that are not only accurate but accountable.
