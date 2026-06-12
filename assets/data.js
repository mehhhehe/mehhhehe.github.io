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
    role: "AI graduate · applied ML, data engineering, decision-support",
    location: "Muscat, Oman",
    email: "mehreen-m@outlook.com",
    github: "https://github.com/mehhhehe",
    // Rotating phrases that type out under your name in the hero:
    typed: [
      "I like models that leave the notebook.",
      "Secure IoT gateways. Drilling economics. Graph models.",
      "Thesis done: a drilling decision-support pipeline with BP Oman.",
      "Still thinking about where deep learning meets the brain."
    ],
    lead: "AI graduate from GUtech (4.0 GPA). I build ML systems end to end: data cleaning, models, dashboards, tests, and the awkward bits in between. My favorite work is practical but still curious, usually somewhere around graphs, time-series data, and decision support."
  },

  // Animated counters in the hero. Use a number; decimals are fine.
  stats: [
    { value: 4.0, decimals: 1, label: "GPA / 4.0" },
    { value: 9,   decimals: 0, label: "featured projects" },
    { value: 3,   decimals: 0, label: "internships & research roles" },
    { value: 6,   decimals: 0, label: "papers I keep returning to" }
  ],

  about: [
    "I'm an Artificial Intelligence graduate from the German University of Technology in Oman (GUtech), with a 4.0/4.0 GPA and a very real attachment to clean experiments. Give me a paper, a messy dataset, or a half-formed requirement and I will usually start turning it into something testable.",
    "My recent work includes a completed BP Oman thesis on drilling decision support, a secure MQTT gateway for advanced analytics with RWTH Aachen, and a handful of graph and computer-vision projects. I care about models, but I care just as much about the plumbing around them: data quality, dashboards, reproducibility, and whether the result is actually useful."
  ],

  // The "latest" panel on the home page:
  currently: [
    "Finished my BSc thesis: an economics-aware drilling decision pipeline, begun at BP Oman.",
    "Open to applied ML and research roles with real data and useful systems.",
    "Reading deeply on the deep-learning ↔ neocortex bridge (see Notes)."
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
      org: "BP Oman", title: "Intern & Thesis Student, AI Decision-Support System",
      period: "Jul 2025 → Jun 2026", where: "Muscat, Oman",
      points: [
        "Reviewed the literature on drill-bit wear, ROP forecasting, and lithology prediction from offset wells.",
        "Completed my BSc thesis on an economics-aware trip-vs-continue decision pipeline for drilling operations."
      ]
    },
    {
      org: "RWTH Aachen University", title: "Virtual Intern, AI Data Gateway (MQTT for Advanced Analytics)",
      period: "Jul 2025 → Aug 2025", where: "Remote",
      points: [
        "Built a Python MQTT wrapper (Paho + Mosquitto over TLS) with persistent sessions and structured JSON.",
        "Implemented MySQL time-series logging and a Flask admin dashboard with topic-level permissions.",
        "Created ACL export for Mosquitto; Dockerized deployment with GitLab CI checks."
      ]
    },
    {
      org: "GUtech", title: "Research Assistant",
      period: "Jul 2024 → Sep 2024", where: "Muscat, Oman",
      points: [ "Explored AI-based traffic-congestion detection and assessed feasibility for local deployment." ]
    },
    {
      org: "GUtech", title: "Peer Tutor, Linear Algebra",
      period: "May 2024 → Jun 2024", where: "Muscat, Oman",
      points: [ "Coached undergraduates on matrices, vector spaces, eigenvalues/eigenvectors, and graph concepts for exams." ]
    }
  ],

  projects: [
    {
      name: "Stage 2B Drilling Decision-Support Pipeline",
      stack: "Python · Flask · PostgreSQL · GraphSAGE · GBDT · XGBoost",
      desc: "My completed BP Oman thesis: a three-stage drilling pipeline that predicts rock properties, forecasts ROP/MSE baselines, applies while-drilling corrections, and compares trip-vs-continue economics.",
      link: "",
      status: "private repo"
    },
    {
      name: "Secure MQTT Analytics Gateway",
      stack: "Python · Paho-MQTT · Mosquitto (TLS) · MySQL · Flask · Docker · GitLab CI",
      desc: "A RWTH Aachen internship project: MQTT over TLS, persistent sessions, structured JSON, MySQL time-series logging, a Flask admin view, ACL export, Docker, and CI checks.",
      link: "",
      status: "private repo"
    },
    {
      name: "SenseSelect",
      stack: "Python · Gymnasium · DQN · Sensor fusion · Local LLM reports",
      desc: "A smart-room sensor-fusion project where a DQN policy learns when to query temperature, humidity, motion, or sound sensors, then produces grounded local reports from the results.",
      link: "",
      status: "private repo"
    },
    {
      name: "TruthTrace",
      stack: "Python · Graph Attention Networks · UPFD · Flask · D3",
      desc: "A misinformation-detection project that looks at propagation graphs instead of only text: GAT predictions, baseline comparisons, and an interactive Flask dashboard for retweet-tree inspection.",
      link: "https://github.com/mehhhehe/truth_trace"
    },
    {
      name: "ProteoTrace",
      stack: "Python · GraphSAGE · OGBN-Proteins · Flask · D3",
      desc: "An interactive dashboard for protein-function prediction on OGBN-Proteins, with baseline vs GraphSAGE comparisons and sampled neighbourhood graphs for each selected node.",
      link: "https://github.com/mehhhehe/ProteoTrace"
    },
    {
      name: "Autoencoder Facial Recognition",
      stack: "Python · CNN autoencoder · SVM · LFW · Annoy",
      desc: "A computer-vision course project that encodes and reconstructs LFW faces with a CNN autoencoder, then classifies latent representations with a simple SVM.",
      link: "",
      status: "private repo"
    },
    {
      name: "facial-recognition-proj",
      stack: "Python · Computer Vision",
      desc: "A smaller applied computer-vision project around face recognition, kept public as a snapshot of earlier CV work.",
      link: "https://github.com/mehhhehe/facial-recognition-proj"
    },
    {
      name: "sarl-sokoban-game",
      stack: "SARL · Java · Multi-Agent Systems",
      desc: "Sokoban as a multi-agent system in SARL: cooperating agents solve the maze.",
      link: "https://github.com/mehhhehe/sarl-sokoban-game"
    },
    {
      name: "FireBoost",
      stack: "Python · Gradient Boosting",
      desc: "A compact gradient-boosting experiment, useful mostly because it made me slow down and compare tree-based models properly.",
      link: "https://github.com/mehhhehe/FireBoost"
    },
    {
      name: "cognitus_lite_healthcare",
      stack: "Jupyter · ML for Healthcare",
      desc: "Healthcare-analytics notebooks for clinical prediction tasks, with the usual reminder that careful data handling matters as much as the model.",
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
