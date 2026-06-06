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

const FIREDZ_CODE = `from modules import outer_functions
import os
from datetime import datetime, timedelta
import pytaps
import firedz
import pandas as pd
from functools import reduce

# Load config
config = pytaps.config.load_config(".config.json")
host = config["host"]
username = config["username"]
remote_aladin = config["remote_aladin"]
remote_arome = config["remote_arome"]

# Read current and future dates
year, month, day, next_year, next_month, next_day, \\
  after_year, after_month, after_day = outer_functions.read_date()

parameters = ['clst', 'clsu', 'clsv', 'clsh', 'accpluie']
steps = range(0, 49, 3)
models = ['arome', 'aladin']

for model in models:
    for step in steps:
        data_list = [veg_arome.copy()]
        for parameter in parameters:
            filepath = f"output/{model}/{parameter}_{step:02d}"
            par = firedz.utils.read_data(filepath, parameter)
            data_list.append(firedz.utils.convert_data(par, parameter))

        tab = reduce(lambda l, r: pd.merge(l, r, on=["longitude", "latitude"]), data_list)

        # Calculate HDW index
        tab["hdw"] = tab.apply(
            lambda row: firedz.hdw.calculate_hdw(
                row["clst"], row["clsh"], row["clsu"], row["clsv"]), axis=1)
        tab['hdw_veg'] = tab['hdw'] * tab['veg_coef_binary']

        # Plot fire danger map
        firedz.fireplot.plot_map(
            table=tab, index_name="hdw",
            year=year, month=month, day=day, hour=step,
            save=True, levels=label_num, colors=colors,
            shp_file="templates/full_shapefile",
            save_path=f"maps/{model}/{year}{month}{day}",
            title=f"Carte HDW du {year}-{month}-{day} à {step:02d}h — {model.capitalize()}")`;

export const projects: Project[] = [
  {
    id: "1",
    title: "PNTView — Application de Visualisation NWP/MTG",
    category: "Vibe Coding · Contribution IA",
    description: "Supervision et contribution au développement d'une application modulaire de visualisation des sorties de modèles PNT et satellites MTG. Architecture en couches avec superposition de champs météorologiques, multi-modèle et multi-domaine. Application opérationnelle à Météo-Algérie. Vibe Coding utilisé pour accélérer le développement avec des agents IA.",
    tags: ["Vibe Coding", "Python", "Opérationnel", "NWP", "MTG"],
    image: "/docs/pntview/pntview_demo.gif",
  },
  {
    id: "2",
    title: "Portail de la DEM — Hub Opérationnel des Prévisionnistes",
    category: "Application Web Opérationnelle",
    description: "Conception et développement d'un portail centralisé regroupant l'ensemble des applications opérationnelles de la Direction des Études et de la Modélisation (DEM). Interface unifiée permettant aux prévisionnistes d'accéder à toutes les applications (contrôle des obs, visualisation, indices feu, etc.) depuis un seul endroit.",
    tags: ["Web App", "React", "Opérationnel", "Météo-Algérie"],
    image: "/docs/portail/portail_dem.png",
  },
  {
    id: "3",
    title: "Interface de Contrôle des Observations & TAFs",
    category: "Data Infrastructure · Web App",
    description: "Développement d'une interface web interactive pour le contrôle qualité en temps réel des observations météorologiques (SYNOP, TEMP, METAR) et la visualisation des TAFs (Terminal Aerodrome Forecast). Inclut un module de monitoring des données en temps réel et un outil de contrôle des observations dynamiques.",
    tags: ["HARP", "Web Interface", "Temps Réel", "TAF", "SYNOP"],
    images: [
      "/docs/controbs/interface-controle_monitoring-realtime.png",
      "/docs/controbs/interface-controle_monitoring-observations.png",
      "/docs/controbs/interface-controle-observations-dyn.png",
      "/docs/controbs/interface-controle-observatoin-controle.png",
      "/docs/controbs/interface-controle-TAFs.png",
    ],
  },
  {
    id: "4",
    title: "Estimateur de Pluie Convective par Satellite (NWCSAF/CRR)",
    category: "Remote Sensing · Nowcasting",
    description: "Modélisation et intégration opérationnelle de l'estimateur de Taux de Pluie Convective (CRR) à partir des images satellites MSG/SEVIRI via le logiciel NWCSAF. Application web interactive pour la visualisation du nowcasting précipitations en temps réel.",
    tags: ["MSG/SEVIRI", "NWCSAF", "Nowcasting", "Précipitations"],
    image: "/docs/estimator/NWCSAF-estimation-pluie.png",
  },
  {
    id: "5",
    title: "Meteorological Fire Weather Risk System (FireDz)",
    category: "Applied Science · Python Package",
    description: "Implémentation des indices de danger feu HDW (Hot Dry Windy) et FWI (Canadian Fire Weather Index) adaptés à l'Algérie. Développement du package Python firedz (pip installable) pour le calcul automatisé des indices et la génération de cartes de vigilance quotidiennes basées sur les sorties d'AROME et ALADIN.",
    tags: ["Python", "firedz", "HDW", "FWI", "AROME", "ALADIN"],
    images: [
      "/docs/firedz/hdw/HDW_index_20240813.gif",
      "/docs/firedz/hdw/Max_HDW_20240813.png",
      "/docs/firedz/hdw/HDW_20240813_12.png",
      "/docs/firedz/hdw/HDW_20240813_15.png",
    ],
    codeSnippet: FIREDZ_CODE,
    githubUrl: "https://github.com/walidchikhi/firedz",
  },
  {
    id: "6",
    title: "Modélisation Hydrologique HYPE — Prévision des Crues",
    category: "Hydrologie · Thèse MSc",
    description: "Implémentation du modèle hydrogéochimique semi-distribué HYPE sur le bassin versant du Côtier Algérois (11 sous-bassins, 4 wilayas). Validation sur la crue historique de Oued El-Harrach (mars 1985). NSE de 0.58 à la station de Mazafran. Données climatiques ERA5, données géographiques HydroSHEDs et GlobCover2009.",
    tags: ["HYPE", "Hydrologie", "ERA5", "Python", "SMHI"],
    images: [
      "/docs/hype/Pics/Cours_d_eau1_2.png",
      "/docs/hype/Pics/SLC.png",
      "/docs/hype/Pics/Land_Use_GlobCover_2.png",
      "/docs/hype/Pics/soil_Fig.png",
    ],
    links: [
      { label: "Article JAMA PDF", url: "/docs/hype/Article_CHIKHI_HYPE_JAMA06_Mar2023_corr.pdf" },
      { label: "Séminaire PDF", url: "/docs/hype/Séminaire.pdf" },
    ],
  },
  {
    id: "7",
    title: "Modern Technical Documentation (Mkdocs)",
    category: "Documentation as Code",
    description: "Mise en place de la documentation-as-code avec Mkdocs et Material for Mkdocs pour des packages Python scientifiques complexes. Génération automatique de documentation navigable, versionnée et déployée sur GitHub Pages.",
    tags: ["Mkdocs", "Material", "GitHub Pages", "Python"],
    image: "/docs/mkdocs/interface-documentation-mkdocs.png",
  },
  {
    id: "8",
    title: "FALFILFA & falfilfa4py — Externalisation IAL",
    category: "Software Engineering · ACCORD",
    description: "Externalisation du package interne FALFILFA du code monolithique IAL (IFS/ARPEGE/LAM) du consortium ACCORD. Création d'une bibliothèque autonome compilable via CMake. Développement de falfilfa4py, le binding Python (pip installable) pour les formats FA/LFI/LFA de Météo-France, intégré dans EPyGrAM. Packaging PyPI d'EPyGrAM (src-layout).",
    tags: ["Fortran", "CMake", "Python", "PyPI", "ACCORD"],
    pypiUrl: "https://pypi.org/project/falfilfa4py/",
    links: [
      { label: "Rapport FALFILFA (Fév. 2023)", url: "/docs/falfilfa/stay_report_CHIKHI_Feb2023.pdf" },
      { label: "Rapport EPyGrAM + falfilfa4py", url: "/docs/falfilfa/CHIKHI_stay_report_28May_07Jun_corr.pdf" },
    ],
  },
  {
    id: "9",
    title: "PyTAPs — Automatisation de la Suite de Production",
    category: "Automation · Python Package",
    description: "Développement d'un framework Python modulaire (PyTAPs) pour l'automatisation complète de la suite de production opérationnelle de Météo-Algérie. Gestion des transferts de fichiers, du lancement des modèles et du post-traitement dans un seul package pip installable.",
    tags: ["Python", "Automation", "Pip", "NWP"],
    githubUrl: "https://github.com/NWP-Dz/PyTAP",
  },
  {
    id: "10",
    title: "Zarr Format Data Infrastructure",
    category: "Architecture · Machine Learning",
    description: "Implémentation du format Zarr comme couche de stockage principal pour les sorties de modèles NWP, optimisé pour les applications de Machine Learning sur des données atmosphériques multidimensionnelles.",
    tags: ["Zarr", "Xarray", "Machine Learning", "HPC"],
  },
  {
    id: "11",
    title: "Fog & Visibility Forecasting using LIMA",
    category: "Numerical Weather Prediction · Research",
    description: "Implémentation et évaluation d'un diagnostic de visibilité utilisant le schéma microphysique LIMA (Liquid Ice Multiple Aerosols) au sein du modèle AROME. L'étude se concentre sur l'amélioration de la prévision du brouillard sur le nord de l'Algérie.",
    tags: ["NWP", "LIMA", "Microphysics", "Fog", "AROME"],
    image: "/docs/visibility/Poster_visibility-LIMA-1.png",
    links: [
      { label: "Article Newsletter", url: "/docs/visibility/Article_NL01_Visibility_diag_Walid_2021.pdf" },
      { label: "Présentation PDF", url: "/docs/visibility/visibility_with_lima_chikhiw_01.pdf" },
      { label: "Poster PDF", url: "/docs/visibility/Poster_visibility-LIMA.pdf" },
    ],
  },
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
