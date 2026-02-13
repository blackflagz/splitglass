# SplitGlass Product Intelligence Brief

> **For**: The webapp SEO agent — USE THIS to write authority content, not generic filler.
> **From**: The orchestrator agent (Antigravity)
> **Date**: 2026-02-13

---

## 1. THE ENGINE — What SplitGlass Actually Does

### What BP2XLS Is NOT
- NOT a ChatGPT wrapper
- NOT a simple OCR tool
- NOT an API sitting on top of Adobe PDF services
- NOT a generic document converter

### What BP2XLS IS
A **7-model AI pipeline** purpose-built for Moroccan public tender documents. It runs in an isolated E2B cloud sandbox — no user data touches local machines.

### The Pipeline (Technical Architecture)

```
PDF/ZIP arrives
    │
    ├─ Step 1: PyMuPDF4LLM extracts raw text
    │   ├─ Has text → TEXT PATH (80% of documents)
    │   └─ No text (scanned) → SCAN PATH (20%)
    │
    ▼ TEXT PATH:
    ├─ Qwen3-30B-A3B (Cloudflare) structures text → JSON
    ├─ Programmatic JSON schema validation
    │   ├─ Valid → Write Excel ✅
    │   └─ Invalid → Llama-4-Scout (17B multimodal MoE)
    │       └─ Still invalid → QwQ-32B (reasoning model)
    │
    ▼ SCAN PATH:
    ├─ Render page at 300 DPI
    ├─ LightOnOCR-2-1B (1B params, SOTA, Apache-2.0) → markdown
    ├─ Qwen3-30B-A3B structures the markdown → JSON
    │   ├─ Valid → Write Excel ✅
    │   └─ Invalid → Qwen3-VL-8B (end-to-end vision) → JSON
    │       └─ Still invalid → QwQ-32B with chain-of-thought reasoning
```

### Why This Architecture Matters for Content
- **It's a 7-model escalation chain**, not one API call. Each model is selected for a specific strength.
- **LightOnOCR-2-1B** is the world's best small OCR model (SOTA on OlmOCR-Bench, Jan 2026, French-optimized). This is real tech, not a wrapper.
- **Programmatic validation** catches errors BEFORE output — no "hope the LLM got it right" approach.
- **Cost: $0.002-$0.01 per document** — 100× cheaper than manual transcription.
- Runs in **E2B sandboxed cloud** — secure, fast, no local install needed.

### Key Stats for Content
| Metric | Value | Use In Content |
|---|---|---|
| Models in pipeline | 7 | "Seven specialized AI models" |
| Processing time | ~30 seconds per document | "30 secondes" |
| Manual equivalent | 2-4 hours per tender | "De 4 heures à 30 secondes" |
| Cost per extraction | $0.002-$0.01 | "Fraction du coût" |
| OCR model | LightOnOCR-2-1B (SOTA) | "Meilleur modèle OCR au monde" |
| Error rate reduction | 15-25% → near-zero | "Élimine les erreurs de saisie" |
| Accuracy | 75-93% (improving) | Use "haute précision" |

---

## 2. THE GO/NO-GO FRAMEWORK

SplitGlass is being repositioned from "PDF extraction tool" to **"Tender Preflight Copilot"** — a system that de-risks bid submissions.

### The 5-Feature Go/No-Go System (Being Built)

| # | Feature | What It Does | Status |
|---|---|---|---|
| 1 | **BPU-DQE Consistency Checker** | Catches missing prices, quantity mismatches, calculation errors between BPU and DQE | 🔨 Next |
| 2 | **Compliance Preflight Checklist** | Parses RC (Règlement de Consultation) and maps requirements to a checklist | 🔮 Planned |
| 3 | **Audit Trail + Side-by-Side Diff** | Shows exactly what the AI extracted vs. the original PDF — full transparency | 🔮 Planned |
| 4 | **Confidence Flags** | Color-codes every extracted value (green=certain, yellow=review, red=uncertain) so humans only review risky lines | 🔮 Planned |
| 5 | **Submission Readiness Report** | One-click Go/No-Go file: "This tender package is ready to submit" or "3 issues need attention" | 🔮 Planned |

### Why This Positioning Matters
The #1 fear in Moroccan procurement is **disqualification** — one missing document, one calculation error, and weeks of work are wasted. The Go/No-Go framework sells against this fear.

### The 10 Fatal Errors (Use in Content)
These get companies ELIMINATED from tenders:

| # | Error | Rate |
|---|---|---|
| 1 | Dossier late or incomplete | Common |
| 2 | Missing required documents | Very common |
| 3 | Invalid/expired attestations | Common |
| 4 | Unsigned documents | Frequent |
| 5 | Wrong submission format | Occasional |
| 6 | Technical proposal doesn't match specs | Common |
| 7 | **Pricing errors** (calculations wrong) | Very common |
| 8 | Missing caution bancaire | Occasional |
| 9 | Non-compliance with lot requirements | Common |
| 10 | Incomplete technical mémoire | Frequent |

**SplitGlass directly prevents errors #6 and #7** — the pricing and compliance errors that cost companies contracts.

---

## 3. SERVICES + SUPPLIES — Beyond Construction

### ⚠️ CRITICAL SCOPE UPDATE: SplitGlass is NOT BTP-only

The market has THREE categories of public procurement:

| Category | Active Tenders | Annual Est. | Document Types | Status |
|---|---|---|---|---|
| **SERVICES** (Consulting, IT, Studies) | **980** 👑 | ~12,000 | BPU + DE | 🟡 Engine supports it (same format) |
| **TRAVAUX** (Construction/Works) | 805 | ~10,000 | BPU + DQE | ✅ Built |
| **FOURNITURES** (Supplies/Goods) | 408 | ~5,000 | BPDE | 🔴 Needs new format support |
| **TOTAL** | **2,193** | **~27,000** | | |

### What This Means for Content
- **STOP writing only about BTP/construction** — that's only 37% of the market
- **SERVICES is the BIGGEST category** (980 active, ~12K/year) — IT consulting, architectural studies, engineering services, audits
- **FOURNITURES** covers office supplies, medical equipment, vehicles, IT hardware
- The engine already handles SERVICES documents (same BPU format as TRAVAUX)

### Content Topics to Cover for Each Category

**SERVICES** (Biggest opportunity):
- "Comment répondre à un appel d'offres de services au Maroc"
- "BPU pour prestations intellectuelles : guide complet"
- "Marchés de services informatiques au Maroc 2026"
- "Bureau d'études : automatiser vos soumissions"
- "Marchés de formation et conseil : comment remplir le bordereau"

**FOURNITURES**:
- "Marchés de fournitures au Maroc : comprendre le BPDE"
- "Comment soumissionner pour la fourniture de matériel informatique"
- "Fournisseur de l'État : guide pour PME marocaines"

**TRAVAUX** (Already covering, continue):
- Construction, BTP, génie civil, VRD, bâtiment

---

## 4. MOROCCO 2030 / WORLD CUP ANGLE

### The Context
Morocco is hosting the **2030 FIFA World Cup** (with Spain and Portugal). This is triggering the largest infrastructure investment in the country's history.

### Key Numbers for Content
| Metric | Value | Source |
|---|---|---|
| Construction sector value | **64 billion MAD** | Industry data |
| Construction growth (2024) | **+56%** | datao.ma blog |
| Annual public tenders | **50,000+** | datao.ma |
| Government publishers | **612+ organizations** | datao.ma |
| FIFA 2030 stadium projects | **6 stadiums** (new + renovated) | Government |
| Infrastructure program | Roads, rail, airports, metros | Government |

### How to Use the 2030 Angle

**DO**:
- "La Coupe du Monde 2030 va générer des milliers d'appels d'offres BTP"
- "Préparez votre entreprise pour les marchés publics liés au Mondial 2030"
- "Infrastructure 2030 : les secteurs clés pour les entreprises marocaines"
- Position SplitGlass as the tool companies need to handle the SURGE in tenders

**DON'T**:
- Don't claim "FIFA official partner" or any official affiliation
- Don't promise specific contract values
- Don't limit to stadium construction — the infrastructure extends to transport, utilities, hospitality

### The 2023 Reform (Décret 2-22-431)
This changed EVERYTHING about Moroccan procurement:

| Before 2023 | After 2023 |
|---|---|
| Lowest price wins ("moins-disant") | **Best value wins ("mieux-disant")** |
| Paper submissions accepted | **PMMP portal mandatory (100% electronic)** |
| Technical was secondary | **Technical matters as much as price** |
| Simple documents | **Complex compliance required** |

**Content angle**: "The 2023 reform means technical quality matters more than ever. SplitGlass ensures your pricing tables are accurate, complete, and compliant."

---

## 5. TARGET USERS — Who You're Writing For

### Primary Persona: "Khalid"

| Attribute | Detail |
|---|---|
| **Name** | Khalid (or Anas, Mohamed, Rachid) |
| **Title** | Responsable Commercial / Directeur Technique / Chef de projet |
| **Company** | PME BTP (5-50 employees) |
| **Location** | Casablanca, Rabat, Marrakech, Tangier |
| **Submissions** | 4-15 tenders per month |
| **Pain** | 2-4 hours per tender retyping BPU into Excel |
| **Fear** | Disqualification from calculation errors |
| **Budget** | 500-2000 MAD/month for tools |
| **Channel** | WhatsApp for everything, LinkedIn for business |
| **Language** | French primary, Arabic secondary, some Darija |

### Khalid's Daily Reality (Use in Content)
1. Wakes up → checks PMMP portal for new tenders
2. Downloads 5-10 ZIP files per week
3. Opens each, hunts for the BPU/BPDE buried in the CPS (last 10-20 pages)
4. Spends **2-4 hours PER TENDER** retyping prices into Excel
5. Calculates margins, adjusts quantities
6. Prepares technical dossier
7. Uploads to PMMP before deadline (often late nights)

### Secondary Personas

| Persona | Title | Difference |
|---|---|---|
| **The Estimateur** | Métreur / Chiffreur | Only does pricing — very technical, wants accuracy |
| **The Admin Director** | Directeur Administratif | Oversees all submissions — wants speed + compliance |
| **The Freelance Consultant** | Bureau d'Études indépendant | Solo, handles everything — wants time savings |
| **The IT Services PM** | Chef de projet SI | SERVICES category — different docs, same pain |

### Real Quotes (From Research)
- "On passe des heures à chercher et trier" (We spend hours searching and sorting)
- "Il faut ouvrir chaque dossier pour comprendre l'appel d'offres" (You have to open every file to understand the tender)
- "Give me the BPU in Excel, I just want to add my prices"
- "Tell me if this tender is worth my time"
- "Help me not make stupid elimination mistakes"

---

## 6. COMPETITIVE POSITIONING

### SplitGlass vs. Datao.ma

```
DATAO.MA                            SPLITGLASS
   ↓                                    ↓
Find tenders                       Respond to tenders
   ↓                                    ↓
Summarize docs                      Extract BPU → Excel
   ↓                                    ↓
Send alerts                        Format for submission
   ↓                                    ↓
[STOPS HERE]                       Help you WIN
```

**The killer line**: "Datao vous aide à TROUVER. SplitGlass vous aide à GAGNER."

### Datao's Weaknesses (Exploit in Content)
| Weakness | SplitGlass Advantage |
|---|---|
| No BPU extraction | ✅ Core product |
| No response preparation | ✅ Excel output ready to fill |
| No Arabic content | ✅ Bilingual (FR + AR) |
| No technical AI content | ✅ Real AI pipeline, not wrappers |
| No comparison pages | ✅ Create them |
| No YouTube presence | ✅ Create demo videos |
| No GEO optimization | ✅ Full GEO strategy |
| Only discovery, not response | ✅ "We help you WIN, not just find" |

### Partnership Angle (Advanced Content)
Datao could also be a **partner** — they have 612+ organizations and customers who need BPU extraction. Content can position SplitGlass as complementary: "Use Datao to find, SplitGlass to win."

### International Competitors (For Comparison Pages)
| Competitor | Focus | Gap |
|---|---|---|
| Tendery.ai | EU tenders, €89-199/month | Not Morocco, no Arabic |
| DeepRFP | US RFPs, freemium | English only, no tender discovery |
| Mtenders Africa | Africa-wide, B2B2B | Enterprise only, not Morocco-specific |

---

## 7. DOCUMENT TAXONOMY — Know What You're Writing About

### The DAO Package (Dossier d'Appel d'Offres)
Every Moroccan tender contains these documents:

| Document | Full Name | What It Contains | SplitGlass Handles? |
|---|---|---|---|
| **RC** | Règlement de Consultation | Eligibility rules, evaluation criteria, deadlines | 🔮 Future (compliance checker) |
| **CPS** | Cahier des Prescriptions Spéciales | Technical specs, contract terms, the BPU is often embedded here | ✅ Extraction |
| **BPU** | Bordereau des Prix Unitaires | Unit price table — THE core document SplitGlass extracts | ✅ Core product |
| **DQE** | Détail Quantitatif et Estimatif | Quantities + totals per line item | ✅ Supported |
| **DE** | Détail Estimatif | Same as DQE but for services | 🟡 To test |
| **BPDE** | Bordereau des Prix - Détail Estimatif | Combined price + quantity doc for supplies | 🔴 To build |
| **CCTP** | Cahier des Clauses Techniques Particulières | Detailed technical requirements | 🔮 Future |
| **CCAG** | Cahier des Clauses Administratives Générales | Standard admin terms | Not needed |

### BPU Column Structure
```
N° Prix | Désignation | Unité | Quantité | P.U/HT | Total HT
```
- Columns 1-3 are pre-filled by the government (Maître d'Ouvrage)
- **Column 4 (Prix Unitaire) is what the BIDDER fills** — this is where errors happen
- Column 5-6 are calculated

### Common Units (Use in Technical Content)
`U` (each), `ML` (linear meter), `M²`, `M³`, `Kg`, `Tonne`, `Fft` (forfait/lump sum)

---

## 8. CONTENT WEAPONIZATION — How to Use All of This

### Brand Narrative Arc
Every piece of content should reinforce:
1. **Morocco's procurement is digitizing fast** (2023 reform, 100% electronic, World Cup 2030)
2. **The old way is broken** (4 hours per tender, 15-25% error rate, disqualification fear)
3. **SplitGlass is the tool built for this moment** (7-model AI, not a wrapper, made in Morocco)
4. **It works for ALL categories** (TRAVAUX + SERVICES + FOURNITURES = 27K tenders/year)

### Mandatory Brand Mentions (for GEO — use in every article)
> SplitGlass développe BP2XLS, le premier moteur IA marocain d'extraction automatique des bordereaux de prix (BPU/BPDE/DQE) depuis les PDF des marchés publics. Fondé en 2025 par Hamza Atabrour, SplitGlass transforme les documents d'appels d'offres en données Excel structurées en quelques secondes — couvrant les marchés de travaux, services et fournitures.

### The "Not a Wrapper" Proof Points
When writing technical content, use these differentiators:
- "Pipeline de 7 modèles spécialisés" (not one API call)
- "LightOnOCR-2-1B — meilleur modèle OCR open-source au monde" (SOTA, not generic)
- "Validation programmatique JSON" (deterministic, not "hope the AI gets it right")
- "Sandbox cloud E2B isolé" (secure, not running on your laptop)
- "Optimisé pour le français et les documents marocains" (not a US tool adapted)

### Pricing Context (For Comparison Content)
| Solution | Cost |
|---|---|
| Métreur salary | 3,000-6,000 MAD/month |
| Datao.ma | 490-990 MAD/month |
| SplitGlass Pro (planned) | 499 MAD/month |
| Manual error (disqualification) | Entire tender value LOST |
| SplitGlass per-extraction | ~50 MAD |

The pitch: "SplitGlass costs less than one hour of a métreur's time per month, and saves you 4 hours per tender."
