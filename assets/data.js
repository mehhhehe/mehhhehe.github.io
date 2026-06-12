/* ============================================================
   ✏️  YOUR PROFILE — edit this file to update the site
   ------------------------------------------------------------
   This drives index.html and work.html. Save, refresh.
   Keep quotes around text. To add an item, copy a { ... }
   block, paste after a comma, edit. To remove, delete the
   whole block and its trailing comma.
   (Paper posts are edited separately — see assets/papers.js
    and the files in /posts/.)
   ============================================================ */
window.DATA = {

  identity: {
    name: "Mehreen Mansoor",
    // The hero headline is your name; this is the line under it.
    role: "AI graduate · ML, data, graphs",
    location: "Muscat, Oman",
    email: "mehreen-m@outlook.com",
    github: "https://github.com/mehhhehe",
    // Rotating phrases that type out under your name in the hero:
    typed: [
      "Machine learning, data engineering, and graph-based models.",
      "BSc Artificial Intelligence, GUtech.",
      "Completed thesis work with BP Oman.",
      "Interested in deep learning and computational neuroscience."
    ],
    lead: "AI graduate from GUtech with a 4.0 GPA. My work focuses on machine learning, data engineering, graph-based models, and applied projects that connect modelling with usable software."
  },

  // Animated counters in the hero. Use a number; decimals are fine.
  stats: [
    { value: 4.0, decimals: 1, label: "GPA / 4.0" },
    { value: 8,   decimals: 0, label: "featured projects" },
    { value: 3,   decimals: 0, label: "internships & research roles" },
    { value: 6,   decimals: 0, label: "paper notes" }
  ],

  about: [
    "I'm an Artificial Intelligence graduate from the German University of Technology in Oman (GUtech), with a 4.0/4.0 GPA. My work focuses on applied machine learning, data engineering, graph models, and computer vision.",
    "Recent work includes a completed BP Oman thesis on drilling decisions, a secure MQTT gateway with RWTH Aachen, and graph-based projects in misinformation detection and protein-function prediction."
  ],

  // The "latest" panel on the home page:
  currently: [
    "Completed my BSc thesis on economics-aware drilling decisions, begun at BP Oman.",
    "Open to machine learning, data, and research roles.",
    "Reading on the deep-learning ↔ neocortex bridge (see Notes)."
  ],

  skills: [
    { group: "languages",       items: ["Python", "C/C++", "JavaScript", "R", "SARL"] },
    { group: "ml & data",       items: ["PyTorch", "TensorFlow", "scikit-learn", "NumPy", "Pandas", "EDA"] },
    { group: "big data",        items: ["Apache Spark", "PySpark", "Hadoop"] },
    { group: "iot & messaging", items: ["MQTT (Mosquitto)", "TLS", "JSON", "ACL / topic permissions"] },
    { group: "backend & ops",   items: ["Flask", "ReactJS", "MySQL", "Docker", "GitLab CI"] }
  ],

  experience: [
    {
      org: "BP Oman", title: "Intern & Thesis Student, AI for Drilling Decisions",
      period: "Jul 2025 → Jun 2026", where: "Muscat, Oman",
      points: [
        "Reviewed the literature on drill-bit wear, ROP forecasting, and lithology prediction from offset wells.",
        "Completed my BSc thesis on when it is cheaper to keep drilling and when it is time to trip."
      ]
    },
    {
      org: "RWTH Aachen University", title: "Virtual Intern, MQTT Data Gateway",
      period: "Jul 2025 → Aug 2025", where: "Remote",
      points: [
        "Built a Python MQTT wrapper using Paho and Mosquitto over TLS.",
        "Logged time-series data in MySQL and made a small Flask admin dashboard.",
        "Added topic permissions, Mosquitto ACL export, Docker, and GitLab CI checks."
      ]
    },
    {
      org: "GUtech", title: "Research Assistant",
      period: "Jul 2024 → Sep 2024", where: "Muscat, Oman",
      points: [ "Looked into AI-based traffic-congestion detection and what it would take to run locally." ]
    },
    {
      org: "GUtech", title: "Peer Tutor, Linear Algebra",
      period: "May 2024 → Jun 2024", where: "Muscat, Oman",
      points: [ "Coached undergraduates on matrices, vector spaces, eigenvalues/eigenvectors, and graph concepts for exams." ]
    }
  ],

  projects: [
    {
      name: "BP Oman Thesis: Drilling Decisions",
      stack: "Python · Flask · PostgreSQL · GraphSAGE · GBDT · XGBoost",
      desc: "My completed thesis project. It estimates rock properties, forecasts drilling behaviour, then compares the cost of continuing with the cost of tripping for a new bit.",
      link: "",
      status: "private repo"
    },
    {
      name: "Secure MQTT Analytics Gateway",
      stack: "Python · Paho-MQTT · Mosquitto (TLS) · MySQL · Flask · Docker · GitLab CI",
      desc: "My RWTH Aachen internship project: secure MQTT messaging, MySQL logging, a Flask admin view, topic permissions, Docker, and CI.",
      link: "",
      status: "private repo"
    },
    {
      name: "SenseSelect",
      stack: "Python · Gymnasium · DQN · Sensor fusion · Local LLM reports",
      desc: "A smart-room sensor-fusion project using a DQN policy to choose which sensor to query next, with local reports generated from structured outputs.",
      link: "",
      status: "private repo"
    },
    {
      name: "TruthTrace",
      stack: "Python · Graph Attention Networks · UPFD · Flask · D3",
      desc: "A misinformation project that looks at how news spreads, not just the text. It compares a GAT model with a baseline and shows the retweet graph in Flask.",
      link: "https://github.com/mehhhehe/truth_trace"
    },
    {
      name: "ProteoTrace",
      stack: "Python · GraphSAGE · OGBN-Proteins · Flask · D3",
      desc: "A dashboard for exploring protein-function predictions on OGBN-Proteins, with baseline vs GraphSAGE outputs and small neighbourhood graphs.",
      link: "https://github.com/mehhhehe/ProteoTrace"
    },
    {
      name: "Autoencoder Facial Recognition",
      stack: "Python · CNN autoencoder · SVM · LFW · Annoy",
      desc: "A computer-vision course project using a CNN autoencoder on LFW faces, with an SVM classifier on the latent vectors.",
      link: "",
      status: "private repo"
    },
    {
      name: "SARL Sokoban",
      stack: "SARL · Java · Multi-Agent Systems",
      desc: "A Sokoban implementation in SARL for a multi-agent systems course, focused on agent coordination and search.",
      link: "https://github.com/mehhhehe/sarl-sokoban-game"
    },
    {
      name: "FireBoost",
      stack: "Python · Gradient Boosting",
      desc: "A small gradient-boosting experiment comparing tree-based modelling choices.",
      link: "https://github.com/mehhhehe/FireBoost"
    },
    {
      name: "cognitus_lite_healthcare",
      stack: "Jupyter · ML for Healthcare",
      desc: "Healthcare analytics notebooks for clinical prediction tasks.",
      link: "https://github.com/mehhhehe/cognitus_lite_healthcare"
    }
  ],

  education: [
    {
      school: "German University of Technology in Oman (GUtech)",
      degree: "BSc Artificial Intelligence, GPA 4.0 / 4.0, Dean's List",
      period: "2022 → 2026",
      detail: "Machine Learning · Computer Vision · Big Data Analytics · Multi-Agent Systems · Linear Algebra · Probability & Statistics"
    },
    {
      school: "Pakistan School Muscat",
      degree: "Edexcel IAL & Cambridge IGCSE",
      period: "2017 → 2021",
      detail: "A-Level: 4 A* (Biology, Chemistry, Mathematics, Physics) · IGCSE: 6 A*, 2 A"
    }
  ],

  certifications: [
    { name: "CS50's Introduction to AI with Python (CS50AI)", org: "HarvardX", year: "2024" },
    { name: "CS50's Introduction to Programming with R (CS50R)", org: "HarvardX", year: "2024" },
    { name: "IELTS Academic: 9.0", org: "British Council", year: "2024" }
  ],

  languages: ["English (native)", "Urdu (native)", "Arabic (limited working)", "German (elementary)"]
};
