# Website Content — Ruiyang Ma
> This file is the **single source of truth** for the website content.
> To update the website: edit this file, then tell the AI assistant "update the website based on CONTENT.md".

---

## 1. Basic Info

| Field | Value |
|-------|-------|
| Name (display) | Ma, Ruiyang |
| Email | rma13@illinois.edu |
| Position | Ph.D. Candidate · Economics |
| Institution | University of Illinois at Urbana-Champaign |
| Photo | `assets/photo.jpg` |
| CV file | `assets/cv.pdf` (compiled from `cv/cv.tex`) |
| CV last updated | April 13, 2026 |

---

## 2. Hero Tags
*(shown as pills on the main screen, order matters)*

1. Macro Finance
2. Monetary Economics
3. Networks
4. Financial Frictions
5. Identification in Macroeconomics

---

## 3. About Me

### Intro paragraph
I am a Ph.D. candidate in Economics at the University of Illinois at Urbana-Champaign. My research sits at the intersection of **macroeconomics** and **finance**, with a focus on how monetary policy transmits through the financial system.

### Second paragraph
I study questions related to monetary transmission mechanisms, financial networks, interbank markets, and the role of financial frictions in shaping real economic outcomes. I combine structural macroeconomic modeling with modern empirical identification strategies — including machine learning and large language models — to disentangle causal effects in macro data.

### Research Fields
- **Primary Fields:** Macro Finance · Monetary Economics
- **Topics:** Monetary Transmission · Networks · Financial Frictions · Identification in Macroeconomics

---

## 4. Working Papers

### Paper 01
- **Title:** Financial Networks, Credit Reallocation, and Monetary Transmission
- **Status:** Working Paper
- **PDF:** `assets/paper01.pdf`
- **Coauthors:** Junze Lin
- **Abstract:**
  Monetary policy transmission depends not only on how much bank credit expands, but on where in the financial network that expansion occurs. We embed interconnected banks into a New Keynesian model and show that policy-induced credit reallocation changes the output-inflation composition of monetary transmission. The key object is an effective network weight, which measures how much each bank's lending moves aggregate financial capacity after valuation feedback propagates through the network. When easing shifts credit toward banks with high effective weights, the same aggregate credit expansion generates larger real effects for a given inflation response. The mechanism also implies stronger network amplification for quantitative easing than for conventional rate policy, because QE loads more directly on bank balance sheets. Finally, past accommodation leaves inherited financial wedges that shape future transmission. The results show that financial networks matter for routine monetary policy, not only for crisis propagation.


---

### Paper 02
- **Display:** yes
- **Title:** Identifying Macroeconomic Shocks from Analyst Beliefs: A Unified LLM Framework
- **Status:** Work in Progress
- **Coauthors:** Jing Cynthia Wu, Shihan Xie
- **Source file:** `assets/story_v2.md`
- **Abstract:**
  Traditional macroeconomic shock identification relies on a small number of financial series — interest rate futures, treasury yields, stock returns — which reveal what expectations changed but not why. We develop a unified framework that extracts structured beliefs from sell-side analyst reports to identify macroeconomic shocks across types, including monetary policy, fiscal policy, oil and energy, supply chain, and regulatory shocks. The framework produces a three-layer output: analyst-level forecasts, attribution fractions capturing how much of each forecast revision is attributed to each shock type, and aggregated causal effects derived from their product. This approach improves on existing methods in three dimensions: it provides content-based identification based on directly observed causal reasoning rather than statistical assumptions; it captures cross-analyst heterogeneity in both forecasts and attribution; and it applies consistently across shock types within a single pipeline, avoiding the fragmentation of existing shock-specific identification strategies. We show that shocks of the same aggregate size produce heterogeneous macroeconomic effects depending on their perceived cause, and that analyst disagreement in attribution predicts larger forecast errors and more dispersed impulse responses.

---

### Paper 03 *(hidden from website and CV — remove `display: no` to restore)*
- **Display:** no
- **Title:** The Financial Reallocation Channel: How Interbank Networks Shape Spatial Misallocation
- **Status:** Work in Progress
- **Coauthors:** Ke Gao, Hongrui Pu
- **Abstract:**
  We propose that the topology of interbank networks shapes spatial allocative efficiency through a financial reallocation channel. Banks with high self-amplification centrality face greater systemic risk exposure, leading them to contract local working-capital lending. This tighter credit supply generates endogenous microeconomic input wedges for local firms. Using the 1863–64 National Banking Acts as an institutional shock that rewired the network, we demonstrate that regions whose banks move to less exposed positions experience relaxed credit constraints. Because this spatial expansion disproportionately benefits financially constrained, inefficiently small firms, it corrects pre-existing misallocation and boosts aggregate efficiency. Furthermore, the layered structure of interbank claims amplifies these local credit distortions. Ultimately, we establish that financial network architecture and trade integration jointly determine aggregate macroeconomic productivity.

---



### Paper 04
- **Title:** Pricing the Risk Lock-in: Financial Frictions, Endogenous Production Networks, and Corporate Bond Spreads
- **Status:** Work in Progress
- **Coauthors:** Shaoqing Pan, Rong Yuwen
- **Abstract:**
  This research proposes to investigate how financial frictions distort firm-level supply chain adjustments and the resulting credit risk pricing. We develop a theoretical framework to identify a "risk lock-in" mechanism, where firms facing financing constraints and fixed adjustment costs may be unable to reconfigure their supplier networks toward stability during periods of high uncertainty. The study examines how these constraints break the "flight-to-stability" motive, potentially creating a "volatility trap" that depresses firm productivity, and how the market prices this lack of flexibility, leading to a divergence in credit spreads between constrained and unconstrained firms.

---

### Paper 06 *(hidden from website and CV — change to `display: yes` to restore)*
- **Display:** no
- **Title:** Roads to Where? Expressway Access, E-Commerce Penetration, and the Market Structure Transformation of Rural China
- **Status:** Work in Progress (Preliminary)
- **Coauthors:** Ke Gao
- **Source file:** `projects/propodal_260310.tex`
- **Abstract:**
  China invested massively in rural expressway infrastructure, yet existing evidence suggests these investments yielded modest or even negative local effects. We argue that the limited returns reflect a missing complement: digital market access. Traditional rural markets resemble over-the-counter (OTC) structures — transactions are bilateral, prices are opaque, and intermediaries extract large margins — so expressways reduce transport costs but do not alter market structure, with savings captured by middlemen or channeled into labor outmigration. E-commerce platforms introduce exchange-like features (centralized matching, transparent pricing, disintermediation) that fundamentally reshape how rural producers connect with buyers, but cannot function without physical logistics infrastructure to complete delivery. Expressway exits provide precisely this backbone. We formalize this physical–digital complementarity in a search-theoretic framework and test it using a triple-difference design exploiting (i) staggered expressway exit openings, (ii) China's E-Commerce Demonstration County policy (2014–2020), and (iii) within-county variation across townships. Using township-level nighttime lights, population, land cover, firm registrations, and agricultural wholesale prices, we find that expressway exits alone produce modest gains masking spatial reallocation, whereas exits combined with e-commerce generate substantially larger effects consistent with a market structure transformation from decentralized intermediation to centralized platform exchange.

---

### Paper 05
- **Title:** Trade Credit as a Financial Overlay on Production Networks
- **Status:** Work in Progress
- **Coauthors:** Lucia Liuqing Wang
- **Abstract:**
  We identify a horizontal contagion mechanism through which idiosyncratic shocks propagate across economically unrelated firms. When an anchor customer suffers a downturn, their common supplier faces tightened working-capital constraints. Due to asymmetric bargaining power, the supplier extends forbearance to the distressed customer while extracting liquidity from unrelated peer customers by shortening payment terms and reducing credit limits. This horizontal transmission is orthogonal to the Leontief input-output matrix, constituting a novel financial overlay channel beyond standard network propagation. We provide three contributions: a methodological critique showing that empirical designs omitting network structure produce omitted-variable bias; identification of the horizontal contagion mechanism as a new propagation path; and evidence of state-dependent amplification, where the contagion intensifies during aggregate credit tightening when suppliers cannot substitute external financing. We validate each link in the causal chain using BEA industry-level input-output tables linked to firm-level data from Compustat and CRSP.
---


## 5. Education

| Years | Degree | Institution |
|-------|--------|-------------|
| 2023 – Present | Ph.D. Economics | University of Illinois at Urbana-Champaign |
| 2021 – 2023 | M.Sc. Policy Economy | University of Illinois at Urbana-Champaign |
| 2018 – 2020 | B.A. Economics | University of Illinois at Urbana-Champaign |
| 2016 – 2018 | B.S. Economics and Mathematics | Southwestern University of Finance and Economics |

---

## 6. Teaching Experience

**Institution:** University of Illinois at Urbana-Champaign

| Course | Level | Role | Terms |
|--------|-------|------|-------|
| Intermediate Macroeconomics | UG | Head Teaching Assistant | FA25 |
| Microeconomics Principles | UG | Teaching Assistant | SP26, SP25, FA24 |
| Macroeconomics II | PhD | Teaching Assistant | SP24 |
| Intermediate Macroeconomics | UG | Teaching Assistant | FA23 |

---

## 7. Awards & Fellowships
*(not displayed on website currently, for record only)*

| Year | Award |
|------|-------|
| 2026 | Paul W. Boltz Fellowship, University of Illinois |
| 2025 | Hung-Chao and Julia Tai Family Fellowship, University of Illinois |

---

## 8. Skills

| Category | Details |
|----------|---------|
| Languages | Chinese (native), English (fluent) |
| Coding | Python, Dynare, Stata, \LaTeX |

---

## 9. Update Log

| Date | Change |
|------|--------|
| 2026-03-28 | Initial website launch |
| 2026-03-28 | Updated CV to rm_cv_260328.pdf, added paper abstracts |
| 2026-03-28 | Added profile photo |
| 2026-03-28 | Enhanced particle network animation |
| 2026-03-28 | Generated LaTeX CV (cv.tex) from CONTENT.md |
| 2026-04-12 | CV: fixed full page width usage |
| 2026-04-12 | CV: education school name in small muted color |
| 2026-04-12 | CV: finalized accent color as deep burgundy |
| 2026-04-12 | CV: upgraded font to EB Garamond, abstract text smaller, awards cleanup |
| 2026-04-12 | CV: font size 12pt, updated date moved to footer |
| 2026-04-12 | Website: CV last updated synced to April 2026 |
| 2026-04-13 | Added Paper 05: Trade Credit as a Financial Overlay on Production Networks |
| 2026-04-13 | Updated Paper 02 abstract based on project story |
| 2026-04-13 | Paper 02 restored to website and CV |
| 2026-04-13 | Paper 02 hidden again from website and CV |
| 2026-04-29 | Paper 01 upgraded to Working Paper, PDF added (assets/paper01.pdf) |
| 2026-04-29 | Paper 02 title/abstract updated to v2 story, restored to website and CV |
| 2026-04-13 | Added Paper 06 (Roads to Where) to CONTENT.md, hidden |
