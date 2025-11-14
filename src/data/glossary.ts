export type Category = 'roles' | 'objects' | 'process' | 'governance' | 'organizational' | 'metrics' | 'technical';

export interface TermDetail {
  label: string;
  value: string;
}

export interface Tag {
  text: string;
  variant?: 'role' | 'process' | 'governance' | 'object' | 'organizational' | 'default';
}

export interface Term {
  id: string;
  name: string;
  abbreviation?: string;
  category: Category;
  definition: string;
  details?: TermDetail[];
  tags?: Tag[];
}

export interface Section {
  id: Category;
  title: string;
  icon: string;
  terms: Term[];
}

export const glossaryData: Section[] = [
  {
    id: 'roles',
    title: 'Roles & Responsibilities',
    icon: 'users',
    terms: [
      {
        id: 'director',
        name: 'Director',
        category: 'roles',
        definition: 'Executive sponsor responsible for vision and strategic execution alignment. Accountable for aligning senior leadership vision with strategic execution in the assigned committee\'s outcome.',
        details: [
          { label: 'Key Functions', value: 'Strategy oversight, resource allocation, leadership development, escalation resolution' },
          { label: 'Reports to', value: 'Senior Leadership Team' }
        ],
        tags: [
          { text: 'Executive Level', variant: 'role' },
          { text: 'Steering Committee', variant: 'governance' }
        ]
      },
      {
        id: 'soc-lead',
        name: 'Strategic Objective Committee Lead',
        abbreviation: 'SOC Lead',
        category: 'roles',
        definition: 'Responsible for leading committee activities and cross-discipline operational strategy planning. Manages and contributes to operational strategies that align to senior leadership\'s vision.',
        details: [
          { label: 'Key Functions', value: 'Committee coordination, risk management, investment recommendations, reporting synthesis' },
          { label: 'Works with', value: 'All SOC members, cross-committee collaboration' }
        ],
        tags: [
          { text: 'Leadership', variant: 'role' },
          { text: 'SOC', variant: 'governance' }
        ]
      },
      {
        id: 'gpm',
        name: 'Group Product Manager',
        abbreviation: 'GPM',
        category: 'roles',
        definition: 'Responsible for product strategy ("Why and What") and alignment. Primary liaison between product management and committee members, facilitating strategic product opportunity solutions.',
        details: [
          { label: 'Key Functions', value: 'Product strategy, roadmap development, value proposition, competitive awareness, business reviews' },
          { label: 'Partners with', value: 'GPEM for market insights, GEM for feasibility' }
        ],
        tags: [
          { text: 'Product', variant: 'role' },
          { text: 'SOC Core Team', variant: 'governance' }
        ]
      },
      {
        id: 'gem',
        name: 'Group Engineering Manager',
        abbreviation: 'GEM',
        category: 'roles',
        definition: 'Responsible for product engineering execution ("How and When"). Leads engineering alignment to committee-approved initiative priorities.',
        details: [
          { label: 'Key Functions', value: 'Engineering execution, capacity management, technical feasibility, quality standards, resource allocation' },
          { label: 'Partners with', value: 'GPgM for delivery coordination, GQAM for quality' }
        ],
        tags: [
          { text: 'Engineering', variant: 'role' },
          { text: 'SOC Core Team', variant: 'governance' }
        ]
      },
      {
        id: 'guxm',
        name: 'Group Experience Manager',
        abbreviation: 'GUXM',
        category: 'roles',
        definition: 'Responsible for experience validation, design standards, and patron advocacy. Ensures opportunities are validated by user experience desirability and accessibility.',
        details: [
          { label: 'Key Functions', value: 'UX design, usability testing, accessibility compliance, brand consistency, patron insights' },
          { label: 'Partners with', value: 'GPM for requirements, GEM for implementation' }
        ],
        tags: [
          { text: 'Design', variant: 'role' },
          { text: 'SOC Core Team', variant: 'governance' }
        ]
      },
      {
        id: 'gpem',
        name: 'Group Product Engagement Manager',
        abbreviation: 'GPEM',
        category: 'roles',
        definition: 'Responsible for understanding customer needs and wants, patron journeys, product positioning, messaging, and go-to-market plans.',
        details: [
          { label: 'Key Functions', value: 'Customer research, journey mapping, go-to-market strategy, KPI tracking, messaging' },
          { label: 'Partners with', value: 'GPM for product requirements, GUXM for brand alignment' }
        ],
        tags: [
          { text: 'Marketing', variant: 'role' },
          { text: 'SOC Core Team', variant: 'governance' }
        ]
      },
      {
        id: 'gpgm',
        name: 'Group Product Program Manager',
        abbreviation: 'GPgM',
        category: 'roles',
        definition: 'Responsible for engineering orchestration, resource capacity awareness, governance, and reporting. Coordinates timelines and dependencies across teams.',
        details: [
          { label: 'Key Functions', value: 'Timeline coordination, dependency management, launch orchestration, delivery health updates' },
          { label: 'Works with', value: 'All SOC roles for coordination' }
        ],
        tags: [
          { text: 'Program Management', variant: 'role' },
          { text: 'SOC Core Team', variant: 'governance' }
        ]
      },
      {
        id: 'gqam',
        name: 'Group QA Manager',
        abbreviation: 'GQAM',
        category: 'roles',
        definition: 'Responsible for engineering quality assurance within teams and release readiness. Oversees test execution and validation for initiatives.',
        details: [
          { label: 'Key Functions', value: 'Test execution, quality standards, go/no-go decisions, defect tracking, production readiness' },
          { label: 'Partners with', value: 'GEM for quality standards, GPgM for readiness checklists' }
        ],
        tags: [
          { text: 'Quality Assurance', variant: 'role' },
          { text: 'SOC Core Team', variant: 'governance' }
        ]
      },
      {
        id: 'bil',
        name: 'Business Intelligence Lead',
        abbreviation: 'BIL',
        category: 'roles',
        definition: 'Responsible for data analysis, insights, and performance measurement. Defines and tracks KPIs for strategic objectives.',
        details: [
          { label: 'Key Functions', value: 'Data analysis, KPI tracking, outcome measurement, performance reporting' },
          { label: 'Reports to', value: 'SOC Lead with insights and recommendations' }
        ],
        tags: [
          { text: 'Analytics', variant: 'role' },
          { text: 'SOC Core Team', variant: 'governance' }
        ]
      },
      {
        id: 'pgm',
        name: 'SOC Program Manager',
        abbreviation: 'PgM',
        category: 'roles',
        definition: 'Responsible for coordinating SOC activities, including weekly working sessions, monthly reporting, and quarterly strategy sessions.',
        details: [
          { label: 'Key Functions', value: 'Meeting coordination, cross-discipline orchestration, reporting to directors' }
        ],
        tags: [
          { text: 'Coordination', variant: 'role' },
          { text: 'SOC Support', variant: 'governance' }
        ]
      }
    ]
  },
  {
    id: 'objects',
    title: 'Objects & Artifacts',
    icon: 'package',
    terms: [
      {
        id: 'initiative',
        name: 'Initiative',
        category: 'objects',
        definition: 'A high-level strategic business goal set by leadership, often tied to business performance. Provides strategic direction and context for product teams.',
        details: [
          { label: 'Purpose', value: 'Align teams with business strategy' },
          { label: 'Key Question', value: 'Why are we doing this?' },
          { label: 'Example', value: 'Improve customer retention' }
        ],
        tags: [
          { text: 'Strategic', variant: 'object' },
          { text: 'SDLC', variant: 'process' }
        ]
      },
      {
        id: 'outcome',
        name: 'Outcome',
        category: 'objects',
        definition: 'A specific, observable change in customer behavior that supports the initiative. Shifts focus to impact (behavior) rather than output (features).',
        details: [
          { label: 'Types', value: 'Business Outcomes (lagging indicators), Product Outcomes (leading indicators)' },
          { label: 'Key Question', value: 'What change do we want?' },
          { label: 'Example', value: 'Increase repeat purchases by 15%' }
        ],
        tags: [
          { text: 'Measurable', variant: 'object' },
          { text: 'SDLC', variant: 'process' }
        ]
      },
      {
        id: 'opportunity',
        name: 'Opportunity',
        category: 'objects',
        definition: 'A gap between what customers expect and what they experience—pain points, desires, or unmet needs. Guides discovery and ideation by surfacing real customer problems.',
        details: [
          { label: 'Discovery', value: 'Through interviews, usability tests, and feedback' },
          { label: 'Key Question', value: 'Why aren\'t customers succeeding?' },
          { label: 'Example', value: 'Customers abandon carts due to unclear shipping costs' }
        ],
        tags: [
          { text: 'Customer-centric', variant: 'object' },
          { text: 'Discovery', variant: 'process' }
        ]
      },
      {
        id: 'solution',
        name: 'Solution',
        category: 'objects',
        definition: 'A proposed feature, change, or experiment designed to address a specific opportunity. Provides a tactical response to customer needs.',
        details: [
          { label: 'Application', value: 'Generate multiple ideas, use assumption testing, prioritize by impact' },
          { label: 'Key Question', value: 'What can we build to help?' },
          { label: 'Example', value: 'Add a shipping cost estimator to the cart page' }
        ],
        tags: [
          { text: 'Tactical', variant: 'object' },
          { text: 'SDLC', variant: 'process' }
        ]
      },
      {
        id: 'workplan',
        name: 'Workplan',
        category: 'objects',
        definition: 'A time-boxed (≤90 days) execution and tracking object that moves a validated solution through the phases of the Operating Model (SDLC).',
        details: [
          { label: 'Phases', value: 'Idea Inception → Draft Proposal → Investigate → Build → Release & Measure' },
          { label: 'Key Question', value: 'How will we deliver and learn?' },
          { label: 'Scope', value: 'Usually scoped to a single team' }
        ],
        tags: [
          { text: 'Execution', variant: 'object' },
          { text: 'Time-boxed', variant: 'process' }
        ]
      },
      {
        id: 'ost',
        name: 'Opportunity Solution Tree',
        abbreviation: 'OST',
        category: 'objects',
        definition: 'A visual framework for organizing opportunities under outcomes and mapping potential solutions to address them.',
        details: [
          { label: 'Purpose', value: 'Connect strategic outcomes to tactical solutions through customer opportunities' }
        ],
        tags: [
          { text: 'Framework', variant: 'object' },
          { text: 'Discovery', variant: 'process' }
        ]
      }
    ]
  },
  {
    id: 'process',
    title: 'Process & Phases',
    icon: 'workflow',
    terms: [
      {
        id: 'sdlc',
        name: 'SDLC',
        abbreviation: 'Software Development Life Cycle',
        category: 'process',
        definition: 'The end-to-end process for taking ideas from inception through delivery and measurement. Provides structure for product development aligned with strategic objectives.',
        details: [
          { label: 'Phases', value: 'Idea Inception → Draft Proposal → Investigate → Build → Release & Measure' }
        ],
        tags: [
          { text: 'Core Process', variant: 'process' }
        ]
      },
      {
        id: 'idea-inception',
        name: 'Idea Inception',
        category: 'process',
        definition: 'Initial phase where ideas originate from business needs, user feedback, scattered revelation, executive mandates, or outside groups. Ideas are assigned to appropriate SOC(s).',
        details: [
          { label: 'Phase', value: '0 - Pre-formal process' },
          { label: 'Output', value: 'Assignment to SOC(s)' }
        ],
        tags: [
          { text: 'SDLC Phase', variant: 'process' }
        ]
      },
      {
        id: 'draft-proposal',
        name: 'Draft Proposal',
        category: 'process',
        definition: 'Phase 1 of SDLC where early framing of the solution and assumptions occurs. Includes defining outcomes, exploring opportunities, and creating business case.',
        details: [
          { label: 'Activities', value: 'Define outcome, explore opportunity space, frame problem, resource request' },
          { label: 'Gate', value: 'Business Review for approval to investigate' }
        ],
        tags: [
          { text: 'SDLC Phase 1', variant: 'process' }
        ]
      },
      {
        id: 'investigate',
        name: 'Investigate',
        category: 'process',
        definition: 'Phase 2 of SDLC focused on discovery, validation, and assumption testing. Includes UX prototyping and design reviews.',
        details: [
          { label: 'Activities', value: 'Discovery, UX prototyping, assumption testing, user testing, design review' },
          { label: 'Gate', value: 'Business Review for approval to build' }
        ],
        tags: [
          { text: 'SDLC Phase 2', variant: 'process' },
          { text: 'Discovery', variant: 'default' }
        ]
      },
      {
        id: 'build',
        name: 'Build',
        category: 'process',
        definition: 'Phase 3 of SDLC where engineering implementation occurs. Includes MVP development, testing, and iteration.',
        details: [
          { label: 'Activities', value: 'Software development, MVP creation, user testing, iteration, accessibility' },
          { label: 'Gate', value: 'Business Review for approval to release' }
        ],
        tags: [
          { text: 'SDLC Phase 3', variant: 'process' }
        ]
      },
      {
        id: 'release-measure',
        name: 'Release & Measure',
        category: 'process',
        definition: 'Phase 4 of SDLC where deployment to users occurs and impact is evaluated. Includes production release, KPI tracking, and learning capture.',
        details: [
          { label: 'Activities', value: 'Production deployment, Labs release, % rollout, KPI measurement, outcome evaluation' },
          { label: 'Decision', value: 'Iterate, expand rollout, or complete' }
        ],
        tags: [
          { text: 'SDLC Phase 4', variant: 'process' }
        ]
      },
      {
        id: 'continuous-discovery',
        name: 'Continuous Discovery',
        category: 'process',
        definition: 'Ongoing process of learning about customers and validating assumptions throughout the development lifecycle, not just in the investigate phase.',
        details: [
          { label: 'Methods', value: 'User interviews, usability testing, feedback analysis, journey mapping' }
        ],
        tags: [
          { text: 'Ongoing', variant: 'process' }
        ]
      }
    ]
  },
  {
    id: 'governance',
    title: 'Governance & Meetings',
    icon: 'scale',
    terms: [
      {
        id: 'business-review',
        name: 'Business Review',
        category: 'governance',
        definition: 'Governance checkpoint for evaluating and prioritizing product opportunity solutions. Makes recommendations for initiative advancement through SDLC phases.',
        details: [
          { label: 'Facilitator', value: 'Group Product Manager (GPM)' },
          { label: 'Gates', value: 'Approve to Investigate, Build, Release' }
        ],
        tags: [
          { text: 'Decision Gate', variant: 'governance' }
        ]
      },
      {
        id: 'design-review',
        name: 'Design Review',
        category: 'governance',
        definition: 'Review of UX designs, workflows, and site-wide implications. Ensures consistency and considers user journey impacts.',
        details: [
          { label: 'Focus', value: 'UX, workflow, site integration, accessibility' }
        ],
        tags: [
          { text: 'Quality Gate', variant: 'governance' }
        ]
      },
      {
        id: 'weekly-working',
        name: 'Weekly Working Sessions',
        category: 'governance',
        definition: 'Regular SOC meetings focused on outcome requirements, initiative progress, blockers, metrics, and cross-functional collaboration.',
        details: [
          { label: 'Frequency', value: 'Weekly' },
          { label: 'Participants', value: 'SOC members and invited contributors' }
        ],
        tags: [
          { text: 'Regular Cadence', variant: 'governance' }
        ]
      },
      {
        id: 'monthly-reporting',
        name: 'Monthly SOC Reporting',
        category: 'governance',
        definition: 'SOC Lead presents committee report to senior leadership team on strategic decisions, outcome progress, and dependencies.',
        details: [
          { label: 'Presenter', value: 'SOC Lead with committee members' },
          { label: 'Content', value: 'Outcome progress, initiative health, prioritization recommendations' }
        ],
        tags: [
          { text: 'Executive Reporting', variant: 'governance' }
        ]
      },
      {
        id: 'quarterly-strategy',
        name: 'Quarterly Strategy Sessions',
        category: 'governance',
        definition: 'Senior leadership refines vision and roadmaps with input from committees. Aligns cross-group initiatives and resolves resource conflicts.',
        details: [
          { label: 'Participants', value: 'Senior leadership and SOC leads' },
          { label: 'Outcomes', value: 'Updated vision, roadmaps, resource allocation' }
        ],
        tags: [
          { text: 'Strategic Planning', variant: 'governance' }
        ]
      },
      {
        id: 'steering-committee',
        name: 'Steering Committee',
        category: 'governance',
        definition: 'Executive body comprised of senior leadership team and business leads that makes strategic decisions and resolves escalations.',
        details: [
          { label: 'Functions', value: 'Strategic decisions, resource allocation, escalation resolution' }
        ],
        tags: [
          { text: 'Executive', variant: 'governance' }
        ]
      }
    ]
  },
  {
    id: 'organizational',
    title: 'Organizational Structure',
    icon: 'building',
    terms: [
      {
        id: 'soc',
        name: 'Strategic Objective Committee',
        abbreviation: 'SOC',
        category: 'organizational',
        definition: 'Cross-functional committee organized around specific strategic outcomes. Unifies vision from senior staff with strategy, planning, and delivery.',
        details: [
          { label: 'Current SOCs', value: 'Searchable Records, Ordinance-Ready Names, Submitters, RootsTech, Growth, Platform' },
          { label: 'Composition', value: 'Director, SOC Lead, GPM, GEM, GUXM, GPEM, GPgM, GQAM, BIL' }
        ],
        tags: [
          { text: 'Core Structure', variant: 'organizational' }
        ]
      },
      {
        id: 'product-trio',
        name: 'Product Trio',
        category: 'organizational',
        definition: 'Core team unit typically consisting of product manager, designer, and engineer working together on initiatives.',
        details: [
          { label: 'Accountability', value: 'Product outcomes within their span of control' }
        ],
        tags: [
          { text: 'Team Structure', variant: 'organizational' }
        ]
      },
      {
        id: 'matrix-org',
        name: 'Matrix Organization',
        category: 'organizational',
        definition: 'Organizational structure where teams and individuals are assigned to SOC initiatives while maintaining their functional team identity.',
        details: [
          { label: 'Key Feature', value: 'Teams don\'t permanently belong to SOCs; they\'re assigned based on initiative needs' }
        ],
        tags: [
          { text: 'Structure Type', variant: 'organizational' }
        ]
      },
      {
        id: 'cross-soc',
        name: 'Cross-SOC Coordination',
        category: 'organizational',
        definition: 'Mechanism for managing initiatives that span multiple SOCs, including dependency management and priority rebalancing.',
        details: [
          { label: 'Example', value: 'Record Access + Ordinance-Ready Names integration' }
        ],
        tags: [
          { text: 'Coordination', variant: 'organizational' }
        ]
      },
      {
        id: 'homelands',
        name: 'Homelands',
        category: 'organizational',
        definition: 'Regional or area-specific organizational units that coordinate with SOCs for localized implementation and support.',
        tags: [
          { text: 'Regional', variant: 'organizational' }
        ]
      }
    ]
  },
  {
    id: 'metrics',
    title: 'Metrics & Measurement',
    icon: 'bar-chart',
    terms: [
      {
        id: 'kpi',
        name: 'KPI',
        abbreviation: 'Key Performance Indicator',
        category: 'metrics',
        definition: 'Measurable value that demonstrates how effectively a company is achieving key business objectives.',
        details: [
          { label: 'Types', value: 'Strategic KPIs (outcome level), Operational KPIs (process level)' }
        ],
        tags: [
          { text: 'Measurement', variant: 'object' }
        ]
      },
      {
        id: 'leading-indicator',
        name: 'Leading Indicator',
        category: 'metrics',
        definition: 'Predictive metrics that teams can directly influence. Product outcomes are typically leading indicators of business success.',
        details: [
          { label: 'Example', value: 'Number of dogs who like the food (predictive of retention)' }
        ],
        tags: [
          { text: 'Predictive', variant: 'object' }
        ]
      },
      {
        id: 'lagging-indicator',
        name: 'Lagging Indicator',
        category: 'metrics',
        definition: 'Metrics that measure final outcomes after they occur. Business outcomes are typically lagging indicators.',
        details: [
          { label: 'Example', value: 'Revenue, customer retention rate' }
        ],
        tags: [
          { text: 'Retrospective', variant: 'object' }
        ]
      },
      {
        id: 'product-success',
        name: 'Product Success Measures',
        category: 'metrics',
        definition: 'Core metrics for evaluating SOC performance including KPI achievement, velocity, stakeholder satisfaction, and continuous improvement.',
        tags: [
          { text: 'SOC Metrics', variant: 'object' }
        ]
      }
    ]
  },
  {
    id: 'technical',
    title: 'Technical & Process Terms',
    icon: 'settings',
    terms: [
      {
        id: 'mvp',
        name: 'MVP',
        abbreviation: 'Minimum Viable Product',
        category: 'technical',
        definition: 'Version of a product with just enough features to be usable by early customers who can then provide feedback.',
        tags: [
          { text: 'Build Phase', variant: 'process' }
        ]
      },
      {
        id: 'prod-readiness',
        name: 'Production Readiness',
        category: 'technical',
        definition: 'State where a solution meets all quality, performance, and operational requirements for release to production.',
        tags: [
          { text: 'Release Gate', variant: 'process' }
        ]
      },
      {
        id: 'labs-release',
        name: 'Labs Release',
        category: 'technical',
        definition: 'Early/experimental release channel for testing new features with limited user groups before full production rollout.',
        tags: [
          { text: 'Release Strategy', variant: 'process' }
        ]
      },
      {
        id: 'roi',
        name: 'ROI',
        abbreviation: 'Return on Investment',
        category: 'technical',
        definition: 'Measure of the profitability or value gained from an initiative relative to its cost.',
        tags: [
          { text: 'Business Metric', variant: 'process' }
        ]
      },
      {
        id: 'go-no-go',
        name: 'Go/No-Go',
        category: 'technical',
        definition: 'Decision point where stakeholders determine whether to proceed with a phase transition or release.',
        tags: [
          { text: 'Decision Gate', variant: 'governance' }
        ]
      },
      {
        id: 'time-boxed',
        name: 'Time-boxed',
        category: 'technical',
        definition: 'Fixed time period allocated for completing work, typically ≤90 days for workplans.',
        tags: [
          { text: 'Constraint', variant: 'process' }
        ]
      }
    ]
  }
];

export const categories = [
  { id: 'all', label: 'All Terms' },
  { id: 'roles', label: 'Roles' },
  { id: 'objects', label: 'Objects' },
  { id: 'process', label: 'Process' },
  { id: 'governance', label: 'Governance' },
  { id: 'organizational', label: 'Organizational' },
  { id: 'metrics', label: 'Metrics' },
  { id: 'technical', label: 'Technical' }
];
