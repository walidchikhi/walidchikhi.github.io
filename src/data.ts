import { Experience, Education, Project, Report } from "./types";

export const experience: Experience[] = [
  {
    id: "1",
    title: "Head of Numerical Weather Prediction Department",
    company: "Meteo-Algeria",
    period: "Feb 2024 - Present",
    location: "Algeria",
    description: "Directing the NWP department with a focus on team restructuring and organizational growth. Scaled the department to a multidisciplinary team of 13+ experts.",
    achievements: [
      "Architected and implemented a long-term NWP roadmap aligned with WMO standards.",
      "Coordinated the full lifecycle of forecasting suites, ensuring 24/7 operational production.",
      "Active in ACCORD Consortium, contributing to advanced physical parameterizations.",
      "Spearheading applied research projects in high-impact domains."
    ]
  },
  {
    id: "2",
    title: "Applied Scientist & NWP models Developer",
    company: "Meteo-Algeria",
    period: "Nov 2020 - Feb 2024",
    location: "Algeria",
    description: "Actively engaged in the ACCORD Consortium, focusing on the continuous evolution of Numerical Weather Prediction models.",
    achievements: [
      "Specialized in fog forecasting through in-depth sensitivity studies (LIMA and ICE3).",
      "Contributed to improving NWP code structure, system portability, and CMake build systems.",
      "Lead responsible for the operational NWP suite at Météo-Algérie."
    ]
  }
];

export const education: Education[] = [
  {
    id: "1",
    degree: "Master of Science in Hydrology, Climatology & Environment",
    institution: "Université des Sciences et de la Technologie Houari Boumediene (USTHB)",
    period: "2021 - 2022",
    details: [
      "Thesis: 'Contribution of Dynamic Modeling to Flood Forecasting'",
      "Implemented HYPE model for Algeria (Algiers coastal basin).",
      "Created Soil-Land Cover classes from FAO, HWSD, GlobCover."
    ]
  },
  {
    id: "2",
    degree: "Engineering Degree in Meteorology",
    institution: "WMO Regional Training Centre, IHFR",
    period: "2021 - 2022",
    details: [
      "Project: 'Study of relationship between Jenkinson-Collison weather types and aerosols'",
      "Statistical analysis of atmospheric circulation patterns."
    ]
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Vibe Coding & AI-Driven Full Stack Apps",
    category: "Artificial Intelligence",
    description: "Development of end-to-end applications using cutting-edge Agentic AI tools (Antigravity, Gemini, Claude). Leveraging Vibe Coding to rapidly prototype, iterate, and deploy complex software architectures, turning deep domain expertise into scalable tech products.",
    tags: ["GenAI", "Vibe Coding", "Agentic AI", "Antigravity"],
    image: "/vibe-coding-demo.png" // User can replace this with their actual image
  },
  {
    id: "2",
    title: "Modern Technical Documentation (Mkdocs)",
    category: "Documentation",
    description: "Implementation of Documentation-as-Code paradigms using Mkdocs and Material for Mkdocs. Generating high-quality, easily maintainable, and searchable documentation for complex scientific software and Python packages.",
    tags: ["Mkdocs", "Doc-as-Code", "Markdown"],
    image: "/mkdocs-demo.png" // User can replace this with their actual image
  },
  {
    id: "3",
    title: "falfilfa4py: FA/LFI/LFA Python Interface",
    category: "Software Engineering",
    description: "Created falfilfa4py package: Python interface for Météo-France's internal FA/LFI/LFA formats. Restructured the EPyGrAM python package architecture using src-layout organization for PyPI distribution.",
    tags: ["Python", "PyPI", "Docker", "CMake"],
    pypiUrl: "https://pypi.org/project/falfilfa4py/"
  },
  {
    id: "4",
    title: "Meteorological Fire Weather Risk System (FireDz)",
    category: "Applied Science",
    description: "Implemented HDW & Revised IFM fire danger index. Developed Firedz Python package for index calculation and automated daily map generation. Supervised interactive visualisation web app.",
    tags: ["Python", "Risk Management", "Visualization"],
    image: "https://images.unsplash.com/photo-1599316518118-c2afb77dbd9e?auto=format&fit=crop&w=800&q=80", // Fire/Forest
    githubUrl: "https://github.com/walidchikhi/firedz"
  },
  {
    id: "5",
    title: "PyTAPs: Production Automation Framework",
    category: "Automation",
    description: "Development of a production-ready Python package (PyTAPs) for Meteo-Algeria's operational suite automation. Highly modular architecture ensuring 24/7 reliability for critical NWP models.",
    tags: ["Python", "Automation", "Pip", "NWP"],
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80", // Code / Tech
    githubUrl: "https://github.com/NWP-Dz/PyTAP" // Link might be private, but it shows it's a real repo
  },
  {
    id: "6",
    title: "Operational Models Verification Framework",
    category: "Data Infrastructure",
    description: "Automated computation of verification metrics using HARP package. Real-time data processing handling 10GB+ daily volume, with an interactive web interface for realtime score visualization.",
    tags: ["HARP", "Web Interface", "Data Processing"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80" // Weather map
  },
  {
    id: "7",
    title: "Zarr Format Data Infrastructure",
    category: "Architecture",
    description: "Implementation of Zarr format as a base database architecture for model outputs, designed for machine learning applications and multidimensional atmospheric data.",
    tags: ["Zarr", "Xarray", "Machine Learning"]
  }
];

export const reports: Report[] = [
  {
    id: "1",
    title: "Apport de la modélisation dynamique à la prévision des inondations",
    date: "2022",
    summary: "Étude de l'apport de la modélisation dynamique à la prévision des inondations en utilisant le modèle hydrogéochimique HYPE sur le bassin versant du côtier Algérois. Validation sur la crue de Oued El-Harrach.",
    authors: "Walid CHIKHI, Abdenour AMBAR, Amina SABRI",
    type: "Thesis Extract",
    tags: ["HYPE", "Hydrology", "Flood Forecasting"],
    content: `
# 1. Introduction
L’eau, défini comme ressource vitale pour l’homme, recouvre plus de 70% du globe. Cependant, cette dernière peut également être source de problème. L’Algérie n’est pas épargnée par ce type de catastrophes naturelles (inondations). Cette étude utilise une approche dynamique pour prévoir les crues en prenant en compte les caractéristiques physiques et climatiques via le modèle **HYPE**.

# 2. Modèle Hydrologique HYPE
HYPE (HYdrological Prediction for Environnement) est un modèle hydrogéochimique semi-distribué développé par l'Institut Suédois de Météorologie et d'Hydrologie (SMHI). Il simule les concentrations d'eau et des nutriments dans le milieu naturel à l'échelle du bassin versant, divisé en classes SLC (unités de réponses hydrologiques).

# 3. Méthodologie et Données
* **Données climatiques :** ERA5 ECMWF (0.25°).
* **Données géographiques :** HydroSHEDs, ANRH, GlobCover2009.
* **Sols :** Base HWSD + WISE.
La partie ouest du bassin du Côtier Algérois a été modélisée, comprenant 11 sous-bassins répartis sur 4 wilayas.

# 4. Validation (Crue Oued El Harrach)
Simulations sur l'épisode du 06 mars 1985 (débit > 129 m³/s). 
L'indice Nash-Sutcliffe (NSE) obtenu est de **0.58** sur la station de Mazafran et **0.50** sur le cas de Oued El-Harrach amont. Le modèle reproduit fidèlement la dynamique des débits, offrant une base encourageante pour les systèmes d'alerte précoce.
    `
  },
  {
    id: "2",
    title: "Testing visibility diagnostics in AROME at high resolution",
    date: "2018/2019",
    summary: "Evaluation of new visibility diagnostics fields coded in AROME by Ingrid Etchevers. Two configurations at very high resolution (1.3km and 0.5km) were prepared to calculate visibility due to hydrometeors and clouds based on Koschmieder's formula.",
    authors: "Walid CHIKHI, Abdenour AMBAR, Mohamed MOKHTARI",
    type: "Research Paper",
    tags: ["AROME", "Visibility", "NWP"],
    content: `
# 1. Introduction
The occurrence of parameters reducing visibility (fog, haze) remains highly sensitive to spatial resolution. The main objective of this work was to evaluate visibility diagnostics coded in the AROME model (Météo France) using two configurations: **1.3km** and **0.5km** resolution.

# 2. Visibility diagnostics in AROME CY46t1
The diagnostic computes visibility based on Koschmieder's formula relating horizontal visibility to extinction coefficients of hydrometeors (liquid, ice, snow, rain, graupel). 
Visibility due to clouds: \`PVISICLD = -ln(0.05) / (0.013 + βcld + βice)\`

# 3. Experiment Setup & Study Area
A domain over Northern Algeria covering the Algiers International Airport was selected. 
Simulations were run for December 2018 and May 2018 and compared against METAR observations.

# 4. Results
The contingency table evaluation yielded promising results. 
* Percentage Correct (PC): **79.02%** for AROME 1.3km and **77.29%** for AROME 0.5km.
* Both configurations managed to capture low-visibility events, with AROME 0.5km providing locally finer spatial definition of fog banks.
    `
  },
  {
    id: "3",
    title: "Externalization of LFI-FA formats from The IAL Code",
    date: "Feb 2023",
    summary: "Stay report at CNRM/GMAP Toulouse. Externalized a lightweight library for the management of LFI-FA-LFA formats using CMake to facilitate tool developments under the ACCORD consortium.",
    authors: "Walid CHIKHI. Supervised by Alexandre MARY, Reyad EL KHATIB",
    type: "Stay Report",
    tags: ["Fortran", "CMake", "IAL", "ACCORD"],
    content: `
# Context
The modern NWP codebase maintained by the ACCORD consortium is hundreds of thousands of lines long. The need for external post-processing tools (like EPyGrAM) to effortlessly read Météo-France's internal formats (FA, LFI) necessitated the extraction of format parsers from the monolithic IFS/ARPEGE/LAM (IAL) library.

# Technical Execution
1. **Library Architecture:** Segregated the LFI-FA C/Fortran source files and orchestrated their compilation using CMake and ecbuild.
2. **Compiler Testing:** Verified compatibility across Intel (ifort/icc) and GNU compilers (gfortran/gcc). Addressed segmentation faults specific to newer GCC iterations (v11.3.0).
3. **GMKPACK Integration:** Seamlessly integrated the newly isolated \`LFIFA\` library block into the GMKPACK structural configuration used extensively on MF HPC Belenos.

# Outcomes
Successfully produced self-standing \`libfa.so\` and \`liblfi.a\` objects that integrate into EPyGrAM without forcing researchers to compile the entirety of the IAL environment, reducing setup overhead from hours to a few minutes.
    `
  },
  {
    id: "4",
    title: "Calcul des Visibilités avec le schéma LIMA",
    date: "Jan 2024",
    summary: "Introduction of the double moment LIMA scheme characteristics in visibility calculations under foggy conditions within the AROME model. Focuses on initialization with CAMS aerosols.",
    authors: "Walid CHIKHI",
    type: "Technical Report",
    tags: ["LIMA", "Microphysics", "AROME"],
    content: `
# Objectif de l'étude
Améliorer le diagnostic \`acvisih\` (visibilité) dans AROME en exploitant la paramétrisation microphysique à deux moments **LIMA**. L'intégration jointe du paramètre de contenu en eau liquide (LWC) et de la concentration en nombre de gouttelettes d'eau (Nd) permet une calibration sophistiquée basée sur les travaux de Gultepe et al. (2007).

# Initialisation CAMS
11 types d'aérosols Copernicus CAMS ont été couplés avec le modèle, regroupés en 5 modes principaux (CCN, IFN, IFN-Enrobés). Les transformations de fichiers GRIB2 vers FA ont été scriptées avec ePyGrAM.

# Tests et Modifications du Code
La sous-routine native \`acvisih.F90\` a été lourdement modifiée pour empêcher la division par zéro sur \`ZLCONTENT\` lors du nettoyage à l'étape finale de paramétrisation. 

# Premiers Résultats
Les situations de brouillard épais (Janvier 2022) sur les villes côtières algériennes ont servi de référence. La configuration LIMA avec "aerosol initialization" démontre une modulation remarquable des valeurs de visibilité en comparaison au schéma opérationnel ICE3 historique.
    `
  }
];
