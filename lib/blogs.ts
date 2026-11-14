export const BLOG_CATEGORIES = [
  {
    slug: "dfos",
    label: "DFOS",
    description: "Distributed fibre-optic sensing, well surveillance and infrastructure intelligence.",
  },
  {
    slug: "surveillance-intelligence",
    label: "Surveillance Intelligence",
    description: "Video, audio and contextual intelligence for monitoring real-world environments.",
  },
  {
    slug: "agentic-router-network",
    label: "Agentic Router Network",
    description: "Research and design principles for safe, intelligent network operations.",
  },
] as const

export type BlogCategorySlug = (typeof BLOG_CATEGORIES)[number]["slug"]

export type BlogSection = {
  heading: string
  paragraphs: string[]
  bullets?: string[]
}

export type BlogPost = {
  category: BlogCategorySlug
  slug: string
  title: string
  excerpt: string
  publishedOn?: string
  readTime: string
  coverImage: string
  coverAlt: string
  sections: BlogSection[]
  sourceNote?: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    category: "dfos",
    slug: "multi-zone-water-injection-monitoring",
    title: "Understanding Multi-Zone Water Injection with DFOS",
    excerpt: "How distributed fibre-optic sensing and independent PLT measurements can help engineers understand injection allocation across reservoir zones.",
    readTime: "7 min read",
    coverImage: "/images/fibre-infrastructure.png",
    coverAlt: "Fibre-optic sensing line beneath a bridge, illustrating continuous infrastructure monitoring",
    sections: [
      {
        heading: "The challenge: where does the injected water go?",
        paragraphs: [
          "In multi-zone injection wells, water can enter several reservoir sections through different flow paths. Estimates based on open-hole measurements and permeability models do not always describe actual allocation under changing downhole conditions.",
          "Engineers need to know where water enters, how much each zone receives and whether the interpretation is supported by independent measurements.",
        ],
      },
      {
        heading: "Distributed sensing along the wellbore",
        paragraphs: [
          "Distributed Fibre Optic Sensing (DFOS) measures physical changes along an optical fibre rather than at a few isolated points. Distributed Temperature Sensing (DTS) captures temperature variations around fluid entry. Distributed Acoustic Sensing (DAS), processed as low-frequency DAS (eXDTS) in this application, supports slope-based injection profiling.",
          "By combining complementary measurements, engineers can investigate injection behaviour across extended wellbore intervals and compare how it changes under different operating conditions.",
        ],
      },
      {
        heading: "Acquisition and independent validation",
        paragraphs: [
          "In the reported multi-zone water-injector surveillance operation, Expro combined baseline, first-rate injection, shut-in and second-rate injection measurements. Gamma Ray–Casing Collar Locator (GR-CCL) measurements and temperature matching supported depth correlation.",
          "A Production Logging Tool (PLT) survey—including GR-CCL, pressure, temperature and spinner sensors—provided an independent comparison at the final injection rate.",
        ],
      },
      {
        heading: "What the comparison showed",
        paragraphs: [
          "The operation reported strong agreement between DFOS eXDTS-derived injection profiles and independent PLT measurements. The comparison helped confirm water-entry intervals, evaluate allocation across multiple zones and assess behaviour under varying rates and shut-in conditions.",
          "The work demonstrated the potential of DFOS eXDTS as a complementary surveillance approach for commingled, multi-zone injection wells.",
        ],
      },
      {
        heading: "Where Oculyx can add intelligence",
        paragraphs: [
          "The Expro operation described here used DFOS eXDTS and PLT comparison; Oculyx was not part of that deployment. Oculyx can be an additional AI analysis layer after sensing and signal processing, helping turn prepared measurements into contextual anomaly insights for engineering review.",
        ],
        bullets: [
          "Ingest processed DAS and DTS features from the sensing workflow.",
          "Identify deviations from expected operating patterns for investigation.",
          "Connect anomaly insights with asset and operational context.",
          "Support monitoring and engineering workflows without replacing validated measurements or expert interpretation.",
        ],
      },
      {
        heading: "From measurements to better decisions",
        paragraphs: [
          "DFOS can provide continuous visibility into well behaviour, while comparison with conventional measurements helps validate interpretation. Combining distributed measurements, signal processing and contextual anomaly analysis creates a path from sensing to actionable engineering intelligence.",
        ],
      },
    ],
    sourceNote: "This article summarizes the supplied Expro multi-zone water-injector case material. Oculyx capabilities described are a potential analysis layer, not part of that reported deployment.",
  },
  {
    category: "dfos",
    slug: "seeing-inside-a-3700-metre-gas-well",
    title: "Seeing Inside a 3,700-Metre Gas Well with DFOS",
    excerpt: "A single-operation DAS and DTS investigation helped locate leak paths and understand well behaviour in a complex offshore gas injector.",
    readTime: "8 min read",
    coverImage: "/images/fibre-infrastructure.png",
    coverAlt: "Fibre-optic sensing cable running beneath a bridge and across monitored terrain",
    sections: [
      {
        heading: "A difficult well-integrity question",
        paragraphs: [
          "In an offshore gas-injector well in the UAE, pressure was increasing in two annular sections. The dual-completion design created multiple possible flow paths, while high hydrogen-sulphide concentration, limited platform access and personnel constraints made conventional investigations more complex.",
          "The operator needed to understand the full wellbore in one operation and identify the source of the pressure behaviour.",
        ],
      },
      {
        heading: "Two distributed sensing methods",
        paragraphs: [
          "Distributed Acoustic Sensing (DAS) detects acoustic signals and vibration along the fibre, helping reveal fluid movement and changes in flow behaviour. Distributed Temperature Sensing (DTS) measures temperature continuously, providing evidence that can help locate fluid movement and gas–liquid interfaces.",
          "Together, the modalities provide complementary views of conditions along the well rather than measurements at a small number of discrete points.",
        ],
      },
      {
        heading: "A single-use fibre deployment",
        paragraphs: [
          "The supplied case describes a single-use DFOS probe deployed dynamically without conventional wireline or slickline. The probe reached approximately 3,700 metres in around 20 minutes. DAS and DTS interrogators then collected acoustic and temperature measurements while the fibre remained stationary.",
          "Controlled annulus bleed-downs and injections were used to stimulate potential flow paths during the investigation.",
        ],
      },
      {
        heading: "Interpreting the evidence",
        paragraphs: [
          "The investigation reported the inner tubing as the primary leak source and identified multiple communication points between tubing and annulus. Acoustic and temperature measurements helped assess likely leak locations, fluid movement, fluid levels and communication between well sections.",
          "The complete diagnosis was reported in under 14 hours. That result belongs to the described deployment and is not a general performance guarantee.",
        ],
      },
      {
        heading: "The Oculyx perspective",
        paragraphs: [
          "Oculyx was not part of the reported deployment. In a future workflow, an AI analysis layer could work with processed DFOS features to flag unusual patterns, connect them to well context and help organize engineering review. Sensing systems, signal processing and domain experts remain essential to validate measurements and conclusions.",
        ],
      },
    ],
    sourceNote: "Based on the supplied ADNOC Offshore, WellSense and AP Sensing case-study material. Operational results refer to that specific deployment.",
  },
  {
    category: "surveillance-intelligence",
    slug: "from-camera-alerts-to-operational-awareness",
    title: "From Camera Alerts to Operational Awareness",
    excerpt: "How video, audio and site context can help operators move from isolated detections to a more useful view of what is happening.",
    readTime: "5 min read",
    coverImage: "/images/crowd-footfall.png",
    coverAlt: "Crowd monitoring dashboard showing footfall, occupancy and activity patterns",
    sections: [
      {
        heading: "More video does not automatically mean more understanding",
        paragraphs: [
          "Cameras can document activity across a site, but large volumes of footage are difficult to review continuously. A stream of isolated alerts can also leave operators without the context needed to judge what deserves attention.",
          "Useful surveillance intelligence connects detections to time, location, related camera views and the operating conditions of the environment.",
        ],
      },
      {
        heading: "What multimodal monitoring can surface",
        paragraphs: [
          "Computer vision and audio analysis can support a range of monitoring workflows, including footfall and occupancy trends, safety-event review, vehicle and parking availability, unusual activity and forensic search across recorded footage.",
          "These are example use cases. Accuracy, suitability and privacy requirements depend on the cameras, site, data quality and deployment context.",
        ],
      },
      {
        heading: "Context helps prioritize events",
        paragraphs: [
          "An event becomes more actionable when it is related to a monitored zone, a time window, relevant operational signals and other observations. Prioritization can help a team focus on events that merit review rather than treating every detection as equally important.",
          "Oculyx is designed to bring surveillance signals together with broader infrastructure and network context. The platform should support operator judgment, not silently turn uncertain detections into definitive claims about people or intent.",
        ],
      },
      {
        heading: "Designing for responsible use",
        paragraphs: [
          "Surveillance deployments should be scoped to a legitimate operational need, use appropriate data retention and access controls, and provide clear review and escalation paths. Face-related analysis in particular requires careful privacy, legal and governance review for the applicable region and use case.",
        ],
      },
    ],
    sourceNote: "This is an Oculyx use-case overview, not a claim that every listed surveillance capability is currently deployed or independently validated.",
  },
  {
    category: "agentic-router-network",
    slug: "what-if-your-network-could-fix-itself",
    title: "What If Your Network Could Fix Itself? The Rise of Agentic AI",
    excerpt: "A research prototype explores AI agents that diagnose network faults, propose a fix and verify recovery—with a human holding the approval key.",
    publishedOn: "October 2026",
    readTime: "8 min read",
    coverImage: "/images/network-operations-agents.png",
    coverAlt: "Network operations agents coordinated with an approval and safety layer",
    sections: [
      {
        heading: "From alert to investigation",
        paragraphs: [
          "Traditional network monitoring pages an engineer, who checks devices, logs, routing state and recent changes. Agentic systems can turn that sequence into a tool-using investigation: gather evidence, choose the next diagnostic, propose a bounded action and independently check the result.",
          "Unlike a fixed script, an agent can choose which approved diagnostic tool to use based on what it observes. This makes evidence and tool boundaries central to the design.",
        ],
      },
      {
        heading: "What the research prototype tested",
        paragraphs: [
          "The October 2026 Network paper describes a three-router FRRouting testbed and six injected fault types across 30 trials. Its workflow used detection, diagnosis, risk-aware decision-making, an approval step, execution and verification.",
          "The authors reported 30 successful remediations across the 30 controlled trials and a mean resolution time of 29.9 seconds, with a standard deviation of 4.6 seconds. They also reported reduced token use and per-incident cost when incident memory was reused.",
        ],
      },
      {
        heading: "Guardrails are part of the system",
        paragraphs: [
          "Read-only diagnostics could run automatically, while configuration changes required human approval. A risk score, prohibited-command checks and independent reachability and routing checks were used to limit and verify actions.",
          "The approval gate is more than a user-interface feature: authentication, authorization, parameter validation and command restrictions need to be enforced by deterministic services outside the model.",
        ],
      },
      {
        heading: "What the results do—and do not—show",
        paragraphs: [
          "These are results from a small, controlled three-router testbed, not proof of production performance. Approval latency, vendor diversity, scale, simultaneous faults, external model availability and the quality of permission enforcement remain important deployment questions.",
          "The study is a proof of concept, not a production-ready Oculyx capability.",
        ],
      },
      {
        heading: "A practical path for Oculyx",
        paragraphs: [
          "A proposed Oculyx network-intelligence workflow can begin in observe-only mode, add supervised remediation behind role-based policies and human approval, and reserve limited autonomy for predefined, tested, reversible operations. Network credentials and command enforcement belong in a controlled backend—not in the model prompt or MCP tool description.",
        ],
      },
    ],
    sourceNote: "Hishamuddin et al., “Agentic AI Automation Framework for Computer Network Monitoring and Management,” Network 2026, 6(4), 87. DOI: 10.3390/network6040087. Reported results are from a controlled testbed.",
  },
  {
    category: "agentic-router-network",
    slug: "giving-ai-the-keys-to-the-network",
    title: "Giving AI the Keys to the Network, Without the Master Key",
    excerpt: "A hands-on MPLS lab experiment illustrates how an AI assistant can investigate a layered fault while controlled tools and an engineer retain authority over changes.",
    publishedOn: "28 January 2026",
    readTime: "7 min read",
    coverImage: "/images/mpls-network-topology.webp",
    coverAlt: "MPLS service-provider lab topology with provider-edge and core routers",
    sections: [
      {
        heading: "A layered failure in a simulated carrier network",
        paragraphs: [
          "Network reliability engineer Michael Alvarez described a lab with provider-edge and core routers, a route reflector, customer-edge devices, MPLS and BGP VPN routing. The exercise combined a disabled customer-facing link with a missing prefix-list entry on a backup router, so a second fault undermined the expected failover path.",
          "The experiment asked whether a tool-using assistant could connect those two pieces of evidence rather than stop at the first visible symptom.",
        ],
      },
      {
        heading: "Tools provide a bounded view",
        paragraphs: [
          "Rather than giving an assistant unrestricted CLI access, the experiment exposed named network tools through an MCP server: inventory, path, VRF and connectivity checks. The model could inspect tool results and continue investigating.",
          "MCP is an interface, not a security boundary. Authentication, authorization, input validation and command restrictions must be enforced by the service behind it.",
        ],
      },
      {
        heading: "Approval separates advice from execution",
        paragraphs: [
          "The assistant identified both faults, proposed a correction and waited for engineer approval before applying it. The author reported that the lab exercise took under two minutes. This is an anecdotal result from a simulated topology and a single scenario—not a measured production benchmark.",
        ],
      },
      {
        heading: "The operational lesson",
        paragraphs: [
          "Start with read-only diagnosis. Add narrowly scoped, supervised actions only after policy, approval, logging and recovery checks are in place. Keep disruptive commands blocked in deterministic code, and verify service recovery independently after an approved change.",
        ],
      },
    ],
    sourceNote: "Michael Alvarez, “AI Operating MPLS Network: I Connected Claude to My Network using MCP,” Coding Networks, 28 January 2026. Results described are from a simulated lab environment.",
  },
  {
    category: "agentic-router-network",
    slug: "safe-agentic-network-operations-architecture",
    title: "Designing a Safe Agentic Network Operations Platform",
    excerpt: "A proposed six-agent architecture connects evidence, controlled action and independent verification without granting an AI unrestricted infrastructure access.",
    readTime: "6 min read",
    coverImage: "/images/network-operations-agents.png",
    coverAlt: "Proposed network operations architecture with specialist agents and human approval controls",
    sections: [
      {
        heading: "Six agents, one shared network context",
        paragraphs: [
          "A proposed design separates monitoring, topology, root-cause analysis, configuration analysis, remediation planning and verification. The agents share a network knowledge layer containing device inventory, links and dependencies, routing and VRF state, historical alarms, approved policies and incident history.",
          "The shared context helps avoid six isolated assistants producing conflicting diagnoses.",
        ],
      },
      {
        heading: "Control and safety sit outside the model",
        paragraphs: [
          "A policy engine applies identity, role-based permissions, risk limits and command restrictions. Sensitive changes go through human approval. A controlled execution gateway validates typed requests, enforces scope, records each change and supports rollback and audit.",
          "MCP can standardize tool access, but the backend remains the security boundary.",
        ],
      },
      {
        heading: "A supervised incident workflow",
        paragraphs: [
          "For a connectivity issue, monitoring detects the event; topology identifies affected paths; root-cause analysis correlates link, route and configuration evidence; remediation prepares a scoped proposal; an authorized engineer approves; and a separate verifier checks routing and reachability.",
          "Failed checks should stop the workflow and escalate rather than silently retry risky changes.",
        ],
      },
      {
        heading: "Progressive autonomy",
        paragraphs: [
          "Begin with observe-only diagnostics. Move to supervised execution only when approval, audit and recovery controls are proven. Consider autonomous handling only for explicitly permitted, low-risk, reversible operations with strict device scope, rate limits and escalation paths. Broad routing changes remain subject to human review.",
        ],
      },
      {
        heading: "Design proposal—not a shipped capability",
        paragraphs: [
          "This article describes a proposed Oculyx architecture, not an implemented product or a claim of live network remediation. Vendor adapters, integrations, credentials, policy enforcement and operational testing would need to be built and validated for each deployment.",
        ],
      },
    ],
    sourceNote: "Oculyx proposed architecture note. NETCONF, RESTCONF, SSH, SNMP, gNMI, syslog, MCP and other named technologies are examples, not mandatory dependencies.",
  },
]

export const LEGACY_BLOG_REDIRECTS: Record<string, string> = {
  "dfos-exdts-multi-zone-water-injection-monitoring": "/blogs/dfos/multi-zone-water-injection-monitoring",
  "agentic-ai-network-operations": "/blogs/agentic-router-network/what-if-your-network-could-fix-itself",
  "giving-ai-the-keys-to-the-network": "/blogs/agentic-router-network/giving-ai-the-keys-to-the-network",
  "agentic-network-operations-blueprint": "/blogs/agentic-router-network/safe-agentic-network-operations-architecture",
}

export function getBlogCategory(slug: string) {
  return BLOG_CATEGORIES.find((category) => category.slug === slug)
}

export function getBlogPostsByCategory(category: BlogCategorySlug) {
  return BLOG_POSTS.filter((post) => post.category === category)
}

export function getBlogPost(category: string, slug: string) {
  return BLOG_POSTS.find((post) => post.category === category && post.slug === slug)
}
