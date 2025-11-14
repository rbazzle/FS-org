# SDLC - Product Operating Model & Process Notes

> **Status:** Work-in-progress. NOT curated. NOT Approved.  
> **Author:** Joe  
> **Purpose:** Keep track of work on the Operating Model which will inform the SDLC document.

**Current Version:** [SDLC Version 2.4 - Updated 7.8.25](https://churchofjesuschrist.sharepoint.com/sites/ProductDesignandEngineering/SiteAssets/Forms/AllItems.aspx?id=%2Fsites%2FProductDesignandEngineering%2FSiteAssets%2FSitePages%2FHome%2FSDLC%2DVersion%2D2%2E4%2D%2D%2DUpdated%2D7%2E8%2E25%2Epdf)

## Initiative and Work-Plan LifeCycle for '25 Team Project Model

### Full Operating Model - Blueprint
**Philosophy:** "Walk it to break it" - stake in the ground, now refine this.

---

## Object Taxonomy

### 🔷 1. Initiative – Strategic Business Goal

**Definition:** A high-level objective set by leadership, often tied to business performance (e.g., increase revenue, improve retention).

**Purpose:** Provides strategic direction and context for product teams.

**Application:** Teams align their work to initiatives, but they must translate them into actionable outcomes.

**Example:** "Improve customer retention."

---

### 🔷 2. Outcome – Measurable Customer Behavior

**Definition:** A specific, observable change in customer behavior that derives from and supports the initiative.

**Purpose:** Shifts focus to impact (behavior) rather than output (features).

**Types:**
- **Business Outcomes:** Lagging indicators (e.g., revenue) that teams can't directly control
- **Product Outcomes:** Leading indicators (e.g., increased usage). Metrics teams can influence directly.

**Application:** Teams negotiate outcomes with leadership and tracked via metrics.

**Example:** "Increase repeat purchases by 15%."

---

### 🔷 3. Opportunity – Customer Need or Problem

**Definition:** A gap between what customers expect and what they experience—pain points, desires, or unmet needs.

**Purpose:** Guides discovery and ideation by surfacing real customer problems.

**Application:**
- Discovered through interviews, usability tests, and feedback.
- Organized in an Opportunity Solution Tree under the outcome.
- Prioritized based on qualitative impact on the outcome.

**Framing:** Opportunities should be customer-centric and distinct, not vague sentiments or disguised solutions.

**Example:** "Customers abandon carts due to unclear shipping costs."

---

### 🔷 4. Solution – Hypothesis to Address an Opportunity

**Definition:** A proposed feature, change, or experiment designed to solve a specific opportunity.

**Purpose:** Provides a tactical response to customer needs.

**Application:**
- Teams generate multiple ideas.
- Use assumption testing to validate before building.
- Prioritize based on feasibility, desirability, and impact.

**Example:** "Add a shipping cost estimator to the cart page."

---

### 🔶 5. WorkPlan – Execution & Tracking Object

**Definition:** A time-boxed (≤90 days) plan that moves a validated solution through the phases of the Operating Model (SDLC)

**Phases:**
1. **Idea Inception** – Initial insight or trigger
2. **Draft Proposal** – Early framing of the solution and assumptions
3. **Investigate** – Discovery, validation, and assumption testing
4. **Build** – Engineering implementation
5. **Release & Measure** – Deployment to users, evaluate impact against the outcome

**Purpose:** Operationalizes solutions and ensures delivery is time-bound and iterative.

**Application:** Anchored to a solution, usually scoped to a single team, and used to track progress and learning.

---

## 🔶 Practical Use in Product Teams

| Object | Role in Team Workflow | Key Question Answered |
|--------|----------------------|----------------------|
| **Initiative** | Aligns team with business strategy | Why are we doing this? |
| **Outcome** | Defines success in measurable terms | What change do we want? |
| **Opportunity** | Focuses discovery on customer needs | Why aren't customers succeeding? |
| **Solution** | Drives experimentation and delivery | What can we build to help? |
| **WorkPlan** | Execute and track delivery | How will we deliver and learn? |

---

## 🔶 Hierarchical Relationship

### Hierarchy & Flow

- **Initiative** is the strategic business goal - **why**
- **Outcome** is the measurable **what** you want to achieve
- **Opportunity** is the customer-centric needs/problems - **why**
- **Solution** is the tactical ideas **what** to address those needs
- **WorkPlan** is the accounting, tracking object

---

## Key Questions & Challenges

### Blueprint Development - August 22, 2025

**Core Need:** Build a Blueprint of the process, then the SDLC can document it, and tools can implement the process.

**Goal:** Create a blueprint of what the full process is, get it accepted, then document and implement it - "eat our own dog food"

### Areas Needing Clarification:

1. **Where is "Done"?**
   - Where is Production release? (There's a main heading called Release & Measure - but no explicit "Release")
   - How is % rollout handled?

2. **Measurement & Tracking**
   - Where do we capture and track measure after Release?
   - Which tools: Copilot, Jira, etc.?
   - For how long? (In FSPL once it's Done there's an urgency to get it out of the way and not look at outcome)

3. **Proposal to Investigate Phase**
   - Seems ambiguous and doesn't have the rigor to adequately assess ROI
   - Should incorporate aspects like: [Cookbook of Product Architecture](https://icseng.atlassian.net/wiki/spaces/Product/pages/133604440/Cookbook+of+Product+Architecture)

---

## Process Definition Requirements

### What the "Blueprint" Should Define:

1. **Phases, Steps, Stages** - Clear, non-ambiguous definitions
2. **Roles** - Who does what, when
3. **Objects** - Initiative, WorkPlan, etc.
4. **Dashboards** - What needs to be visible, tracked
5. **Integration Touchpoints** - Where handoffs occur
6. **Effort Characteristics** - Outcome, hypothesis, etc. for approval process
7. **ROI/Outcome Definition** - How and when it's measured

### Process Coverage Questions:

**Who does the process apply to?**
- FS Engineering?
- Homelands?
- Councils?
- Committees?
- Anything the user sees under familysearch.org domain?

---

## SDLC vs. Broader Naming

### Current: "Software Development Life Cycle"

**Challenge:** This effort wants **Outcome**, not just **Output**. Development implies output, whereas Outcome is more long-lived, beyond Shipping.

### Alternative Names Considered:
- **FSSLC** - FamilySearch Software Life Cycle
- **SELC** - Software Experience Life Cycle
- Something broader across the full lifetime of software we build, or even Experiences we create

---

## Implementation Considerations

### Once Process is Defined:

1. **Document the Process** - Maybe this is the SDLC document
2. **Implement Tools** that support the process:
   - Pilot
   - Jira
   - Other systems
3. **Organizational Changes** - Consider changes that support execution of the process

### Key Principles:

- **Living Definition** - Represents both conceptual plan and as-built state (like a building blueprint)
- **Expensive to Change** - Well-designed process upfront pays off in the long run
- **Answers Tool Questions** - Should inform how to build Pilot, what Pilot needs to track/show
- **Coherency Required** - Glossary needed to consolidate mental models, not simply aggregate pieces

---

## Glossary Needs

### Terms Requiring Definition & Disambiguation:

**Customer/User Terms:**
- User, Patron, Customer

**Outcome Terms:**
- Outcome, Result, Deliverable, Product, Project, Production

**Discovery Terms:**
- Discovery, Investigation, Design, Ideation

**Process Terms:**
- Growth Loop, Journey, Story

**Organizational Terms:**
- Committees, Teams, Homelands, Councils

---

## Missing Aspects (As of Review)

### Roles:
- **Engineer!** - Missing from role definitions
- Data/Tree quality and integrity
- Information architecture (User domain model coherency, i.e. SCOE)

### Process Stages:
- Post-production measure and ROI analysis stage
- When can we say we succeeded at time x, or failed?
- What are those metrics?

### Decision Points:
- How do we deal with unhappy path?
- When Outcome is not matching ROI expectations
- Can we enhance, pivot, kill an effort?
- What is the cost in User fatigue?

---

## References

- **Ferenc Flow Diagram:** [Figma - Pilot v.2f](https://www.figma.com/design/eLKoxoqmhCOCAd8pzDpCpU/Pilot-v.2f?node-id=0-1)
- **Production Readiness Criteria:** Confluence page
- **Cookbook of Product Architecture:** [Atlassian Wiki](https://icseng.atlassian.net/wiki/spaces/Product/pages/133604440/Cookbook+of+Product+Architecture)

---

## Review Notes

### October 2024 Update

A new version (2.2) has been provided. The diagrams have been changed, but previous review feedback did not appear to have any effect.

### SDLC 2.1 Review - 2024 Proposal

**Key Feedback:**

1. **Length:** 37-40 pages is really thick for an in-flight guide. Personally 10-12 pages would be more consumable. If it's a definitive detailed reference, longer is acceptable.

2. **Actionable Content:** Should there be a cookbook approach?

3. **Approach:**
   - Greenfield ground-up approach vs.
   - Look at what we have, what works/doesn't work, provide "update" or "refactoring"

4. **Document Structure:**
   - Seemed like aggregation of multiple sources with collisions of concept/word choices
   - Comes across as redundancy, multiple snippets without coherency
   - **Solution:** Create a Glossary with consolidated mental models

5. **Organization:**
   - Portfolio Steering Committee talked about last, but hierarchically should be first
   - Role definitions need better organization

6. **Torres Book Influence:**
   - Good book, but falls short on aspects:
     - "Outcome" is ambiguous, not very actionable due to lack of discernment
     - User Interview is good 101, but mature org should graduate to better tools (Contextual Design)
     - Approach to Design is hand-waving, not actionable

7. **User Testing:**
   - Different phases need different user interaction/testing actions
   - Testing should seek to "break" and invalidate assumptions, not just "validate"
   - Confirmation bias risk: neutral party should be part of any testing and metric analysis

8. **Diagrams:**
   - Cartoon drawing of typical agile/sprint iteration
   - Confusing sizing, removed fidelity makes it more ambiguous
   - Missing: full life journey of project (design → prototype → implementation → production → maintenance)
   - Where is post-production measure and ROI analysis stage?

---

## Sample Efforts for Blueprint Development

**Suggested Approach:** Take one or two in-flight efforts and see what's working/lacking

**Sample 1:** Golden tree hints  
**Sample 2:** TBD

**Questions to Answer:**
- Is it well designed and properly defined in Discovery and approval?
- What are the Outcomes?
- What does it look like in dashboards (Pilot, Jira)?
- Is it Done? When is it Done? Is it in Release?
- Where is the Outcome being tracked, especially after Release?
- How do we analyze and validate the Outcome?
- Are we losing UX defects by marking Jiras as WAD to get them out of sight?
- Are we missing outcome aspects by quickly removing work from dashboard?

---

**Last Updated:** November 13, 2025 (Document extraction)


