# Context Documentation - FamilySearch Organizational Glossary

This directory contains source documentation and extracted content that informs the FamilySearch Organizational Glossary application.

## 📁 Directory Structure

```
context/
├── README.md                           # This file - overview and guide
├── extracted/                          # Markdown files optimized for AI/LLM context
│   ├── soc-charter.md                 # ✅ Strategic Objective Committee charter
│   ├── sdlc-process-notes.md          # ✅ SDLC process framework and notes
│   ├── operating-model-blueprint.md   # ⚠️  Needs manual extraction
│   ├── manager-soc-resource.md        # ⚠️  Needs manual extraction
│   ├── soc-engineering-assignments.md # ⚠️  Needs manual extraction
│   └── extracted-terms.md             # ✅ All glossary terms from source docs
└── originals/                          # Original source files (PDFs, DOCX)
    ├── FS Operating Model - blueprint-3.pdf
    ├── Manager SOC Resource.pdf
    ├── SOC Engineering Assignments.pdf
    ├── Strategic_Objective_Committee_Charter.docx
    └── Product-SDLC - thinking about the process - Joe-*.txt
```

## 📚 Document Descriptions

### ✅ Fully Extracted Documents

#### `extracted/soc-charter.md`
**Source:** `Strategic_Objective_Committee_Charter.docx`  
**Content:** Complete charter defining FamilySearch's Strategic Objective Committee structure

**Covers:**
- 🎯 Purpose and organizational structure
- 🧑‍💼 Detailed role descriptions (Director, SOC Lead, PgM, GPM, GEM, GUXM, GQAL, GPgM, GPEM)
- 🔧 Functional operations (Working Sessions, Monthly Reporting, Quarterly Strategy)
- 📊 Governance cadence and success measures
- 🧩 Strategic objectives: Searchable Records, Ordinance-Ready Names, Submitters, RootsTech, Growth, Platform

**Key Terms Defined:**
- Strategic Objective Committee (SOC)
- Committee roles and responsibilities
- Governance structures
- Success metrics

---

#### `extracted/sdlc-process-notes.md`
**Source:** `Product-SDLC - thinking about the process - Joe-131125-065435.txt`  
**Content:** Working notes on the SDLC and Operating Model development

**Covers:**
- 🔷 Object Taxonomy (Initiative, Outcome, Opportunity, Solution, WorkPlan)
- 🔶 Practical use in product teams
- 🔶 Hierarchical relationships between objects
- ❓ Key questions and challenges in process definition
- 📝 Review notes and feedback on SDLC versions
- 🔍 Areas needing clarification (Definition of Done, measurement, ROI assessment)

**Key Terms Defined:**
- Initiative
- Outcome (Business vs Product)
- Opportunity
- Solution
- WorkPlan
- SDLC phases: Idea Inception, Draft Proposal, Investigate, Build, Release & Measure

---

### ⚠️ Documents Requiring Manual Extraction

#### `extracted/operating-model-blueprint.md`
**Source:** `FS Operating Model - blueprint-3.pdf` (381KB)  
**Status:** Placeholder created, needs manual text extraction  
**Expected Content:**
- Full operating model blueprint
- Process diagrams (Ferenc diagrams)
- Phase definitions
- Integration points

**Action Needed:** Open PDF, copy text, paste into the markdown file

---

#### `extracted/manager-soc-resource.md`
**Source:** `Manager SOC Resource.pdf` (404KB)  
**Status:** Placeholder created, needs manual text extraction  
**Expected Content:**
- Manager responsibilities in SOC context
- Resource management guidance
- Reporting requirements

**Action Needed:** Open PDF, copy text, paste into the markdown file

---

#### `extracted/soc-engineering-assignments.md`
**Source:** `SOC Engineering Assignments.pdf` (216KB)  
**Status:** Placeholder created, needs manual text extraction  
**Expected Content:**
- Engineering team assignments to SOCs
- Committee membership details
- Responsibilities matrix

**Action Needed:** Open PDF, copy text, paste into the markdown file

---

## 🎯 How to Use This Context

### For AI/LLM Context

The files in `extracted/` are formatted in markdown for optimal AI consumption:

1. **Direct Reading:** All markdown files can be read directly by LLMs
2. **Structured Content:** Headings, lists, and tables provide clear structure
3. **Cross-References:** Documents reference each other for context
4. **Extracted Terms:** See `extracted-terms.md` for a consolidated glossary

### For Manual Reference

The `originals/` directory contains the source documents in their original format for human reference.

---

## 🔄 Update Process

When source documents change:

1. Replace the file in `originals/`
2. Re-extract text content
3. Update the corresponding markdown file in `extracted/`
4. Update `extracted-terms.md` with any new terms
5. Sync changes to the main glossary application (`src/data/glossary.ts`)

---

## 📖 Key Concepts Overview

### Strategic Objective Committees (SOC)

Six primary SOCs aligned to strategic outcomes:
1. **Searchable Records**
2. **Ordinance-Ready Names**
3. **Submitters**
4. **RootsTech**
5. **Growth**
6. **Platform**

Each SOC has:
- **Sponsor Director** - Vision and strategic alignment
- **SOC Lead** - Operational strategy and execution
- **Program Manager** - Orchestration and reporting
- **Group Managers** - Product, Engineering, Experience, QA, Engagement

### SDLC Object Taxonomy

The five-level hierarchy:

```
Initiative (Why are we doing this?)
    ↓
Outcome (What change do we want?)
    ↓
Opportunity (Why aren't customers succeeding?)
    ↓
Solution (What can we build to help?)
    ↓
WorkPlan (How will we deliver and learn?)
```

### Key Phases

1. **Idea Inception** - Initial insight
2. **Draft Proposal** - Early framing
3. **Investigate** - Discovery and validation
4. **Build** - Engineering implementation
5. **Release & Measure** - Deploy and evaluate

---

## 🔍 Search & Discovery

### Finding Terms

All extracted terms are catalogued in `extracted-terms.md` with:
- Term name and abbreviation
- Definition
- Source document
- Category (Role, Process, Object, Governance, etc.)

### Cross-Reference

Terms often appear in multiple documents:
- **GEM** (Group Engineering Manager) → Defined in SOC Charter, referenced in SDLC notes
- **WorkPlan** → Defined in SDLC notes, tracked via SOC governance
- **Outcome** → Core concept in both SDLC and SOC frameworks

---

## 📝 Contributing

To add new source documents:

1. Place original file in `originals/`
2. Extract text to markdown in `extracted/`
3. Add entry to this README
4. Extract key terms to `extracted-terms.md`
5. Update glossary application if user-facing

---

## 🛠️ Technical Notes

### Text Extraction Tools Used

- **Word Documents (.docx):** `textutil` (macOS built-in)
- **PDFs:** Requires manual extraction (automated tools unsuccessful)
- **Text Files (.txt):** Direct reading

### File Formats

- **Markdown (.md):** Primary format for extracted content
- **UTF-8 Encoding:** All text files
- **Relative Links:** Use relative paths for cross-references

---

## 📅 Version History

| Date | Change | Author |
|------|--------|--------|
| Nov 13, 2025 | Initial context extraction and organization | AI Assistant |
| Nov 12, 2025 | Source documents added | User |

---

## 🔗 Related Resources

- **Main Glossary App:** `/src/data/glossary.ts`
- **Figma Diagrams:** [Pilot v.2f](https://www.figma.com/design/eLKoxoqmhCOCAd8pzDpCpU/Pilot-v.2f?node-id=0-1)
- **SharePoint:** [SDLC Version 2.4](https://churchofjesuschrist.sharepoint.com/sites/ProductDesignandEngineering/)
- **Confluence:** [Product Architecture Cookbook](https://icseng.atlassian.net/wiki/spaces/Product/pages/133604440/)

---

**Last Updated:** November 13, 2025


