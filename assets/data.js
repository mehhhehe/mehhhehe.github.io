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
    role: "AI graduate · machine learning",
    location: "Muscat, Oman",
    email: "mehreen-m@outlook.com",
    github: "https://github.com/mehhhehe",
    // Rotating phrases that type out under your name in the hero:
    typed: [
      "Machine learning and data engineering.",
      "BSc Artificial Intelligence, GUtech.",
      "Thesis completed with BP Oman.",
      "Graph ML, computer vision, and computational neuroscience."
    ],
    lead: "I recently completed my BSc in Artificial Intelligence at GUtech with a 4.0 GPA. This site collects my projects, experience, and paper notes."
  },

  // Animated counters in the hero. Use a number; decimals are fine.
  stats: [
    { value: 4.0, decimals: 1, label: "GPA / 4.0" },
    { source: "projects", decimals: 0, label: "featured projects" },
    { value: 3,   decimals: 0, label: "internships & research roles" },
    { value: 6,   decimals: 0, label: "paper notes" }
  ],

  about: [
    "I'm an Artificial Intelligence graduate from the German University of Technology in Oman (GUtech), with a 4.0/4.0 GPA. Most of my work is in machine learning, data engineering, graph models, and computer vision.",
    "Recent projects include my BP Oman thesis, a secure MQTT gateway with RWTH Aachen, TruthTrace, ProteoTrace, and SenseSelect."
  ],

  // The "latest" panel on the home page:
  currently: [
    "Completed my BSc thesis with BP Oman.",
    "Open to machine learning, data, and research roles.",
    "Reading about deep learning and computational neuroscience."
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
      stack: "Graph WaveNet · GraphSAGE · Python · Flask · PostgreSQL · XGBoost",
      desc: "Thesis project on drilling trip decisions. It models rock properties, ROP/MSE baselines, and the cost tradeoff between continuing and tripping.",
      link: "",
      status: "private repo"
    },
    {
      name: "Secure MQTT Analytics Gateway",
      stack: "Python · Paho-MQTT · Mosquitto (TLS) · MySQL · Flask · Docker · GitLab CI",
      desc: "RWTH Aachen internship project. MQTT over TLS, MySQL logging, Flask admin page, topic permissions, ACL export, Docker, and CI.",
      link: "",
      status: "private repo"
    },
    {
      name: "SenseSelect",
      stack: "Python · Gymnasium · DQN · Sensor fusion · Local LLM reports",
      desc: "Smart-room sensor fusion. A DQN policy chooses which sensor to query, and a local report generator summarizes each run.",
      link: "",
      status: "private repo"
    },
    {
      name: "TruthTrace",
      stack: "Python · Graph Attention Networks · UPFD · Flask · D3",
      desc: "Fake-news detection using propagation graphs. GAT model, baseline comparison, and a Flask/D3 viewer for UPFD retweet trees.",
      link: "https://github.com/mehhhehe/truth_trace"
    },
    {
      name: "ProteoTrace",
      stack: "Python · GraphSAGE · OGBN-Proteins · Flask · D3",
      desc: "Protein-function prediction dashboard for OGBN-Proteins. Compares baseline and GraphSAGE predictions.",
      link: "https://github.com/mehhhehe/ProteoTrace"
    },
    {
      name: "Autoencoder Facial Recognition",
      stack: "Python · CNN autoencoder · SVM · LFW · Annoy",
      desc: "LFW face autoencoder with an SVM classifier on the latent vectors. Built for a computer vision course.",
      link: "",
      status: "private repo"
    },
    {
      name: "SARL Sokoban",
      stack: "SARL · Java · Multi-Agent Systems",
      desc: "Sokoban solver in SARL/Java for a multi-agent systems course.",
      link: "https://github.com/mehhhehe/sarl-sokoban-game"
    },
    {
      name: "cognitus_lite_healthcare",
      stack: "Jupyter · ML for Healthcare",
      desc: "Clinical prediction notebooks.",
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
