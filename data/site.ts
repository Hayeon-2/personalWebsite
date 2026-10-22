// Edit this file to update the website's content.
// Academic details are supplied by Hayeon Yun.

export const profile = {
  "name": "Hayeon Yun",
  "department": "Biomedical Engineering",
  "university": "Northwestern University",
  "photo": "/profile.png",
  "photoAlt": "Portrait of Hayeon Yun",
  "email": "hayeonyun2026@u.northwestern.edu",
  "linkedin": "https://linkedin.com/in/yun-hayeon/",
  "about": [
    "I'm Hayeon Yun, a Biomedical Engineering undergraduate at Northwestern University. My research focuses on flexible 3D bioelectronic interfaces that integrate microelectrodes and strain gauges for organoids and engineered tissues, as well as electrochemical sensors for biological applications.",
    "I enjoy understanding the science behind a problem and working hands-on to design, fabricate, and test devices. I especially like figuring out why something isn't working and finding ways to improve it until the device performs as intended. I'm also interested in the new measurements these devices make possible and the research questions they can help answer. I hope to develop biomedical sensing technologies that advance medical research and improve human health."
  ],
  "interests": [
    "Soft & Biointegrated Electronics",
    "Bioelectronic Interfaces",
    "Multimodal Sensing & Stimulation",
    "Biomedical Device Design"
  ],
  "education": [
    {
      "institution": "Northwestern University",
      "degree": "B.S. in Biomedical Engineering",
      "dates": "Expected December 2026",
      "gpa": "3.89/4.00"
    },
    {
      "institution": "Davidson College",
      "degree": "Coursework in Biology and Computer Science",
      "dates": "August 2022 – May 2023",
      "gpa": "4.00/4.00"
    }
  ]
};

export const navigation = [
  {
    "label": "Home",
    "href": "/"
  },
  {
    "label": "Research",
    "href": "/research"
  },
  {
    "label": "Publications",
    "href": "/publications"
  },
  {
    "label": "Experience",
    "href": "/experience"
  },
  {
    "label": "CV",
    "href": "/cv.pdf"
  }
];

export type PortfolioEntry = {
  id: string;
  title: string;
  subtitle?: string;
  metadata?: { label: string; value: string }[];
  description?: string;
  sections?: { title: string; body?: string; items?: string[] }[];
  videoId?: string;
};

export type ContentSection = {
  id: string;
  title: string;
  entries: {
    title: string;
    authors?: string;
    description?: string;
    details?: string[];
    status?: string;
    items?: string[];
  }[];
};

export const research: PortfolioEntry[] = [
  {
    "id": "rogers",
    "title": "Querrey Simpson Institute for Bioelectronics",
    "subtitle": "Northwestern University",
    "metadata": [
      {
        "label": "Role",
        "value": "Research Assistant, Organoid Systems Team"
      },
      {
        "label": "PI",
        "value": "Prof. John A. Rogers"
      },
      {
        "label": "Dates",
        "value": "September 2025 – Present"
      }
    ],
    "sections": [
      {
        "title": "Contributions",
        "items": [
          "Fabricated and characterized flexible 3D bioelectronic interfaces for engineered heart tissues, living myocardial slices, neuromuscular junction and neurocardiac organoids, neurosheets, and electrical impedance tomography (EIT) platforms.",
          "Developed a compressive-buckling fabrication protocol for a dual-cradle neurocardiac interface.",
          "Resolved unreliable Sil-Poxy bonding between Ecoflex and EHT bioelectronic devices during compressive buckling by identifying and testing an adhesion primer and revising the fabrication protocol.",
          "Optimized PDMS air-channel fabrication for organoid oxygenation, reducing fabrication time from 3–4 days to 1 day and increasing yield to approximately 70%.",
          "Developed a fabrication-tracking application for process documentation and quality control.",
          "Trained and mentored six undergraduate researchers and provided instruction to graduate students and postdoctoral researchers in device fabrication and testing."
        ]
      }
    ]
  },
  {
    "id": "rivnay",
    "title": "Laboratory for Organic & Hybrid Bioelectronics",
    "subtitle": "Northwestern University",
    "metadata": [
      {
        "label": "Role",
        "value": "Research Assistant, Aptamer Sensor Team"
      },
      {
        "label": "PI",
        "value": "Prof. Jonathan Rivnay"
      },
      {
        "label": "Dates",
        "value": "July 2026 – Present"
      }
    ],
    "sections": [
      {
        "title": "Contributions",
        "items": [
          "Gained hands-on experience in the fabrication and electrochemical characterization of aptamer-based sensors.",
          "Investigated hydrogel coatings with varying PEGDA compositions and thicknesses to evaluate their effects on sensor performance."
        ]
      }
    ]
  },
  {
    "id": "han",
    "title": "Chemistry for Life Processes Institute",
    "subtitle": "Northwestern University",
    "metadata": [
      {
        "label": "Role",
        "value": "Research Assistant, Tau Protein Team"
      },
      {
        "label": "PI",
        "value": "Prof. Songi Han"
      },
      {
        "label": "Dates",
        "value": "January 2025 – June 2025"
      }
    ],
    "sections": [
      {
        "title": "Contributions",
        "items": [
          "Investigated tau protein aggregation under varying protein and salt conditions using Thioflavin T (ThT) fluorescence assays.",
          "Performed gel electrophoresis and negative-stain transmission electron microscopy (TEM) to examine tau aggregation and fibril morphology."
        ]
      }
    ]
  },
  {
    "id": "kaist",
    "title": "Genome Therapeutics Lab",
    "subtitle": "Korea Advanced Institute of Science and Technology (KAIST)",
    "metadata": [
      {
        "label": "Role",
        "value": "Research Intern, Algorithm Development Team"
      },
      {
        "label": "PI",
        "value": "Prof. Jinkuk Kim"
      },
      {
        "label": "Dates",
        "value": "June 2024 – August 2024"
      }
    ],
    "sections": [
      {
        "title": "Contributions",
        "items": [
          "Developed a Python pipeline integrating PolyA_DB 3 annotations with GTEx-based SpliceAI data.",
          "Modified and trained SpliceAI to predict polyadenylation sites alongside splice sites.",
          "Investigated SeqProp for differentiable sequence optimization."
        ]
      }
    ]
  }
];

export const projects: PortfolioEntry[] = [
  {
    "id": "urosense",
    "title": "UroSense: Automatic Hydration Assessment in the ICU",
    "subtitle": "Biomedical Engineering Design Project",
    "metadata": [
      {
        "label": "Type",
        "value": "Biomedical Engineering Design Project"
      },
      {
        "label": "Dates",
        "value": "September 2025 – June 2026"
      },
      {
        "label": "Industry Partner",
        "value": "Hollister Incorporated"
      }
    ],
    "description": "A catheter-integrated system designed for continuous hydration assessment in intensive care units through urine output and urine specific gravity measurements.",
    "sections": [
      {
        "title": "Device",
        "items": [
          "Self-emptying siphon chamber",
          "Dual reflective IR sensors",
          "Integrated refractometer",
          "CAD-based prototype design"
        ]
      },
      {
        "title": "Validation",
        "items": [
          "Mean siphon dump volume: 5.46 ± 0.11 mL",
          "Sensor timing vs. flow rate: R² > 0.99",
          "Maximum specific gravity measurement SD: 0.0002",
          "Mean USG difference vs. reference: 0.0018"
        ]
      },
      {
        "title": "Award",
        "body": "2026 NIH/VentureWell DEBUT Challenge — Kidney Technology Development Prize. $15,000 team prize."
      }
    ],
    "videoId": "nrhEITywdbs"
  },
  {
    "id": "living-chip",
    "title": "Biohybrid Living Chip for Cirrhosis Treatment",
    "subtitle": "Conceptual design proposal · BMD_ENG 353",
    "metadata": [
      {
        "label": "Type",
        "value": "Bioelectronics Design Proposal"
      },
      {
        "label": "Course",
        "value": "BMD_ENG 353"
      }
    ],
    "description": "A conceptual design proposal for a closed-loop implantable biohybrid system designed to sense changes in the liver microenvironment and regulate the delivery of regenerative factors.",
    "sections": [
      {
        "title": "Proposed System",
        "items": [
          "TGF-beta1 aptamer-based electrochemical sensing",
          "Organic electrochemical transistor amplification",
          "Microcontroller-based signal processing",
          "Red-light optogenetic stimulation",
          "Engineered MSC therapeutic secretome release",
          "Microneedle-mediated delivery"
        ]
      },
      {
        "title": "Design Status",
        "body": "Conceptual design proposal. The proposed system and experiments are not presented as completed experimental results."
      }
    ]
  },
  {
    "id": "heat-treated-cells",
    "title": "Characterization of Heat-Treated Cells Using Optical Microscopy and AFM",
    "subtitle": "Experimental Characterization · MECH_ENG 382",
    "metadata": [
      {
        "label": "Type",
        "value": "Experimental Characterization"
      },
      {
        "label": "Course",
        "value": "MECH_ENG 382"
      }
    ],
    "description": "Investigated temperature-dependent changes in mouse macrophage morphology and surface topography using optical microscopy, atomic force microscopy, and Python-based fractal analysis.",
    "sections": [
      {
        "title": "Methods",
        "items": [
          "Heat treatment at 37°C, 42°C, and 47°C",
          "Optical microscopy",
          "AFM tapping-mode measurements",
          "Python structure-function analysis"
        ]
      },
      {
        "title": "Fractal Dimension Results",
        "items": [
          "37°C: 2.30",
          "42°C: 2.38",
          "47°C: 2.58"
        ]
      },
      {
        "title": "Results",
        "body": "Increasing treatment temperature was associated with progressively irregular cell morphology and increased surface roughness."
      },
      {
        "title": "Experimental Limitations",
        "body": "These observations are limited to the tested cells and temperature conditions; they do not establish a general or causal relationship between temperature and cell morphology."
      }
    ]
  },
  {
    "id": "blood-pressure",
    "title": "Oscillometric Blood Pressure Monitoring System",
    "subtitle": "Biomedical Instrumentation",
    "metadata": [
      {
        "label": "Type",
        "value": "Biomedical Instrumentation"
      }
    ],
    "description": "Development and characterization of a blood pressure measurement system using pressure sensing, analog signal conditioning, and Python-based signal processing.",
    "sections": [
      {
        "title": "Methods",
        "items": [
          "Pressure sensor measurements",
          "Analog circuitry and filtering",
          "Oscillometric waveform analysis",
          "Python data processing"
        ]
      },
      {
        "title": "Reported Results",
        "items": [
          "Heart rate: 74.41 bpm",
          "MAP: 83.15 mmHg",
          "SBP: 105.35 mmHg",
          "DBP: 70.59 mmHg"
        ]
      },
      {
        "title": "Experimental Limitations",
        "body": "Sensor saturation limited the measurements. The reported experimental values do not establish clinical-grade measurement accuracy."
      }
    ]
  }
];

export const publications: ContentSection[] = [
  {
    "id": "conferences",
    "title": "Conference Presentations & Abstracts",
    "entries": [
      {
        "title": "Flexible, 3D Electronic Framework for Electromechanical Monitoring and Stretching of Engineered Heart Tissues.",
        "authors": "Hayeon Yun, Yong-Woo Kang, Vittoria Sama, Sam Gauthier, Clara Asseily, Ruhani Sachdeva, Lydia Ding, Ivana A. Chychula, Dominic E. Fullenkamp, John A. Rogers",
        "details": [
          "BMES Annual Meeting, 2026."
        ],
        "status": "Abstract accepted."
      },
      {
        "title": "Flexible, 3D Electronic Framework for Electromechanical Monitoring and Stretching of Engineered Heart Tissues.",
        "authors": "Vittoria Sama, Hayeon Yun, Yong-Woo Kang, Sam Gauthier, Clara Asseily, Ruhani Sachdeva, Lydia Ding, Ivana A. Chychula, Dominic E. Fullenkamp, John A. Rogers",
        "details": [
          "CBEC Conference, 2026."
        ],
        "status": "Poster."
      },
      {
        "title": "Flexible, 3D Electronic Framework for Electromechanical Monitoring in Engineered Heart Tissues.",
        "authors": "Hayeon Yun, Yong-Woo Kang, Sam Gauthier, Vittoria Sama, Clara Asseily, Ruhani Sachdeva, Lydia Ding, Ivana A. Chychula, Dominic E. Fullenkamp, John A. Rogers",
        "details": [
          "39th U.S.–Korea Conference on Science, Technology, and Entrepreneurship, 2026."
        ],
        "status": "Poster."
      },
      {
        "title": "Electrical Signal Recording Using Flexible 3D Bioelectronic Interfaces for Neuromuscular Organ-On-Chip Platforms.",
        "authors": "Hayeon Yun, Yong-Woo Kang, Sam Gauthier, Vittoria Sama, Clara Asseily, Ruhani Sachdeva, Lydia Ding, John A. Rogers",
        "details": [
          "7th KSEA Midwest Regional Conference, 2026."
        ],
        "status": "Poster."
      }
    ]
  },
  {
    "id": "manuscripts",
    "title": "Manuscripts in Preparation",
    "entries": [
      {
        "title": "A mechanically interactive bioelectronic interface for programmable stimulation, recording and mechanical conditioning of engineered heart tissues.",
        "authors": "Kang, Y.-W., Chychula, I. A., Kim, J., Li, X., Maeng, W.-Y., Jo, M.-S., Aydin, O., Yun, H., Sama, V., Gauthier, S., Lee, H., Asseily, C., Sachdeva, R., Ding, L., Fox, R., Lee, J., McNally, E. M., Huang, Y., Fullenkamp, D. E. & Rogers, J. A.",
        "status": "Manuscript in preparation."
      },
      {
        "title": "A cylindrical air-channel array for enhanced oxygenation of three-dimensional organoid cultures.",
        "authors": "Kang, Y.-W., Aydin, O., Lyu, Z., Maeng, W.-Y., Lee, J., Yun, H., Sama, V., Chan, K. A., Jo, M.-S., Casler, J. C., Kim, T., Gauthier, S., Ding, L., Lee, H., Wang, Q., Bae, J., Huang, Y., Franz, C. K. & Rogers, J. A.",
        "status": "Manuscript in preparation."
      },
      {
        "title": "A three-dimensional bioelectronic interface for multimodal interrogation of neuromuscular junction organoids.",
        "authors": "Kang, Y.-W., Aydin, O., Berger, D., Amato, F., Mossuto, S., Li, X., Jo, M.-S., Yun, H., Sama, V., Gauthier, S., Lee, J., Lee, H., Asseily, C., Sachdeva, R., Ding, L., Fox, R., Huang, Y., Osaki, T., Rogers, J. A. & Vahabikashi, A.",
        "status": "Manuscript in preparation."
      },
      {
        "title": "An integrated bioelectronic platform for long-term maintenance and electromechanical monitoring of living myocardial slices.",
        "authors": "Kang, Y.-W., Bhat, P., Aydin, O., Li, X., Sama, V., Yun, H., Jo, M.-S., Gauthier, S., Ding, L., Lee, H., Fox, R., Huang, Y., Efimov, I. R. & Rogers, J. A.",
        "status": "Manuscript in preparation."
      },
      {
        "title": "Longitudinal three-dimensional electrical impedance tomography of living spheroids.",
        "authors": "Kang, Y.-W., Ganeshan, S. K., Liu, P., Aydin, O., Yun, H., Sama, V., Oh, J., Jo, M.-S., Gauthier, S., Lee, H., Asseily, C., Sachdeva, R., Ding, L., Franz, C. K., Avila, R., Grayson, M. & Rogers, J. A.",
        "status": "Manuscript in preparation."
      }
    ]
  }
];

export const experience: ContentSection[] = [
  {
    "id": "industry",
    "title": "Industry Experience",
    "entries": [
      {
        "title": "Samsung Biologics",
        "description": "Manufacturing Science & Tech Department",
        "details": [
          "Biomanufacturing Intern, Downstream Processing",
          "June 2025 – August 2025"
        ],
        "items": [
          "Investigated incomplete cleaning in downstream chromatography columns and proposed a backflow cleaning strategy.",
          "Consolidated buffer-mixing process data across 77 historical batches into an Excel reference."
        ]
      }
    ]
  },
  {
    "id": "teaching",
    "title": "Teaching & Mentoring",
    "entries": [
      {
        "title": "Northwestern University",
        "description": "Math Peer Tutor",
        "details": [
          "September 2025 – March 2026"
        ],
        "items": [
          "Tutored 15+ students across 13 introductory mathematics courses, including multivariable calculus and linear algebra."
        ]
      }
    ]
  },
  {
    "id": "honors",
    "title": "Honors & Awards",
    "entries": [
      {
        "title": "Kidney Technology Development Prize",
        "description": "NIH/VentureWell DEBUT Challenge, 2026"
      },
      {
        "title": "Poster Award",
        "description": "39th U.S.–Korea Conference, 2026"
      },
      {
        "title": "BME Summer Undergraduate Research Award",
        "description": "Northwestern University, 2026"
      },
      {
        "title": "Dean's High Honors",
        "description": "4 quarters"
      },
      {
        "title": "Dean's Honors",
        "description": "4 quarters"
      }
    ]
  },
  {
    "id": "skills",
    "title": "Technical Skills",
    "entries": [
      {
        "title": "Microfabrication & Device Assembly",
        "description": "Photolithography, mask alignment, spin coating, thermal/e-beam evaporation, lift-off, wet/dry etching, PDMS casting, plasma bonding, laser micromachining, compressive buckling, 3D assembly, Pt-black electroplating."
      },
      {
        "title": "Bioelectronic & Electrochemical Characterization",
        "description": "Electrode impedance, electrophysiological recording, electrochemical sensor testing, strain-gauge sensing, magnetic actuation, multichannel QC, optical microscopy."
      },
      {
        "title": "Biological Methods",
        "description": "Protein preparation, ThT assays, gel electrophoresis, negative-stain TEM."
      },
      {
        "title": "Programming & Engineering Design",
        "description": "Python, MATLAB, R, ImageJ, SolidWorks, Onshape."
      }
    ]
  }
];

export const pageCopy = {
  "research": {
    "title": "Research",
    "description": "Research experiences across bioelectronics, protein science, and algorithm development."
  },
  "projects": {
    "title": "Projects",
    "description": "Biomedical engineering projects. Select a project to explore its overview and materials."
  },
  "publications": {
    "title": "Publications",
    "description": "Conference presentations, abstracts, and manuscripts in preparation."
  },
  "experience": {
    "title": "Experience",
    "description": "Industry experience, engineering projects, teaching, mentoring, and technical skills."
  },
  "cv": {
    "title": "Curriculum Vitae",
    "description": "Academic background, research, and professional experience.",
    "file": "/cv.pdf",
    "note": "PDF document"
  }
};

export const homePresentation = {
  greeting: "Hi, I'm",
  name: "Hayeon.",
  subtitle: "Engineering interfaces between electronics and living systems.",
};

export type ProjectPresentation = {
  category: string;
  coverLines: string[];
  coverNote: string;
  summary: string;
  tone: "lavender" | "sage" | "sand" | "blue";
};

export const projectPresentation: Record<string, ProjectPresentation> = {
  urosense: {
    category: "Sensing systems",
    coverLines: ["UroSense."],
    coverNote: "Urine output + specific gravity",
    summary: "Continuous hydration assessment through urine output and specific gravity measurements.",
    tone: "lavender",
  },
  "living-chip": {
    category: "Conceptual design proposal",
    coverLines: ["Living", "interfaces."],
    coverNote: "Sense. Process. Release. — proposed system",
    summary: "A conceptual closed-loop biohybrid system for sensing and regenerative-factor delivery.",
    tone: "sage",
  },
  "heat-treated-cells": {
    category: "Experimental characterization",
    coverLines: ["A closer", "look."],
    coverNote: "37°C / 42°C / 47°C",
    summary: "Cell morphology and surface topography across three heat-treatment conditions.",
    tone: "sand",
  },
  "blood-pressure": {
    category: "Biomedical instrumentation",
    coverLines: ["Under", "pressure."],
    coverNote: "Pressure sensing + waveform analysis",
    summary: "Pressure sensing, analog circuitry, and Python-based oscillometric analysis.",
    tone: "blue",
  },
};

// Featured on Experience; the original project archive above is retained.
export const featuredEngineeringProject: PortfolioEntry = {
  "id": "featured-urosense",
  "title": "UroSense",
  "subtitle": "Automatic Hydration Assessment in the ICU",
  "metadata": [
    {
      "label": "Type",
      "value": "Biomedical Engineering Design Project"
    },
    {
      "label": "Dates",
      "value": "September 2025 – June 2026"
    },
    {
      "label": "Industry Partner",
      "value": "Hollister Incorporated"
    }
  ],
  "description": "UroSense is a catheter-integrated system designed for continuous hydration assessment in intensive care settings through measurements of urine output rate and urine specific gravity.",
  "sections": [
    {
      "title": "Device Development",
      "items": [
        "Designed and iterated CAD prototypes of a catheter-integrated hydration monitoring system.",
        "Integrated a self-emptying siphon chamber and dual reflective IR sensors to measure urine output.",
        "Integrated a refractometry subsystem for urine specific gravity measurements.",
        "Designed and performed benchtop validation experiments."
      ]
    },
    {
      "title": "Validation Results",
      "items": [
        "Mean siphon dump volume (10 trials): 5.46 ± 0.11 mL",
        "Sensor timing versus flow rate: R² > 0.99",
        "Maximum USG measurement standard deviation: 0.0002",
        "Mean USG difference compared with a reference refractometer: 0.0018"
      ]
    },
    {
      "title": "Recognition",
      "body": "2026 NIH/VentureWell DEBUT Challenge — Kidney Technology Development Prize ($15,000 team prize)."
    }
  ],
  "videoId": "nrhEITywdbs"
};
