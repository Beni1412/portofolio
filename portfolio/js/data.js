/* =========================================================
   PORTFOLIO DATA
   Semua konten project & skill ada di sini. index.html dan
   css/style.css GAK PERNAH perlu diubah cuma buat nambah
   project baru — cukup edit array di bawah.
   ========================================================= */

/* -------------------------------------------------
   NAMBAH PROJECT BARU:
   1. Copy blok di bawah ini (dari { sampai },)
   2. Paste ke dalam array `projects`, isi field-nya
   3. Save — otomatis muncul di grid Projects + detail view

   const PROJECT_TEMPLATE = {
     id: "slug-unik-tanpa-spasi",
     title: "Nama Project",
     category: "Kategori · Sub kategori",     // contoh: "Computer Vision · Deep Learning"
     status: "Status",                        // contoh: "Ongoing", "Research Paper", "Kompetisi"
     year: "2026",
     blurb: "1 kalimat pendek buat card di grid (max ~120 karakter).",
     description: "Paragraf lengkap buat detail view. Boleh panjang, jelasin masalah, pendekatan, hasil.",
     role: "Peran lo di project ini, opsional. Kosongin string kalau gak perlu.",
     stack: ["Tech1", "Tech2", "Tech3"],
     features: [
       "Highlight / fitur 1",
       "Highlight / fitur 2"
     ],
     links: { demo: "", github: "" },         // kosongin "" kalau belum ada, tombolnya auto ke-hide
     accent: "green",                         // pilihan: "green" | "amber" | "cyan" — warna label thumbnail
     image: "",                               // path foto buat CARD di grid, contoh: "images/projects/neuroscan.jpg"
     gallery: [                               // foto/video buat DETAIL VIEW — bebas berapa banyak, ideal ~10
       { type: "image", src: "images/projects/neuroscan/1.jpg", caption: "Optional caption" },
       { type: "image", src: "images/projects/neuroscan/accuracy.jpg", caption: "Accuracy & loss curve" },
       { type: "video", src: "images/projects/neuroscan/demo.mp4", caption: "App walkthrough" },
       { type: "video", src: "https://youtu.be/XXXXXXXXXXX", caption: "YouTube demo (auto-embed)" }
     ]                                        // kosongin array [] kalau belum ada apa-apa, auto fallback ke `image` lalu ke placeholder
   };
   ------------------------------------------------- */

const projects = [
  {
    id: 'neuroscan',
    title: 'NeuroScan',
    category: 'Computer Vision · Deep Learning',
    status: '',
    year: '2025',
    blurb:
      'Brain tumor classification from MRI scans, with Grad-CAM++ explainability and a live inference app.',
    description:
      "NeuroScan classifies brain MRI scans into tumor categories using an EfficientNetB1 transfer-learning pipeline. Grad-CAM++ is layered on top to visualize which regions of the scan drove each prediction, making the model's reasoning inspectable rather than a black box. The project was written up as a research paper for COMP6696 at BINUS, went through a full peer-review revision cycle (dataset documentation, preprocessing replicability), and shipped as a Streamlit app for interactive inference. Baseline comparisons were run against a custom CNN and VGG16.",
    role: '',
    team: '',
    stack: [
      'Python',
      'TensorFlow/Keras',
      'EfficientNetB1',
      'Grad-CAM++',
      'Streamlit',
    ],
    features: [
      'Transfer-learning classification pipeline (EfficientNetB1)',
      'Grad-CAM++ overlay for visual explainability',
      'Streamlit web app for live inference',
      'Benchmarked against Custom CNN and VGG16 baselines',
    ],
    links: {
      demo: 'https://neuroscan-tumor.streamlit.app/',
      github: 'https://github.com/Beni1412/Brain_Tumor',
    },
    accent: 'green',
    image: 'images/projects/neuroscan.png',
    gallery: [
      { type: 'image', src: 'images/projects/neuroscan/1.png' },
      { type: 'image', src: 'images/projects/neuroscan/2.png' },
      { type: 'image', src: 'images/projects/neuroscan/3.png' },
      { type: 'image', src: 'images/projects/neuroscan/4.png' },
    ],
  },
  {
    id: 'skinmate',
    title: 'SkinMate',
    category: 'Full-Stack · Computer Vision',
    status: '',
    year: '2025',
    blurb:
      'AI-powered skin analysis web app — YOLOv8/EfficientNet model behind a full React + FastAPI stack.',
    description:
      'SkinMate is a web app that analyzes skin conditions from a photo using a YOLOv8/EfficientNet model. The system pairs a React + TypeScript frontend with a Python FastAPI service for ML inference, with the model hosted on Hugging Face. The system leverages DBSCAN for acne zone clustering and provides personalized skincare recommendations.',
    role: 'Frontend development (History, Dashboard, Scan pages), literature review, presentation materials',
    team: '',
    stack: [
      'React',
      'TypeScript',
      'FastAPI',
      'PyTorch',
      'YOLOv8',
      'EfficientNet',
    ],
    features: [
      'Photo-based skin condition scan and history tracking',
      'Acne localization and DBSCAN zone clustering',
      'ML backend deployed and served via Hugging Face',
    ],
    links: {
      demo: 'https://skinmateai.vercel.app/',
      github: 'https://github.com/Beni1412/SkinMateAI',
    },
    accent: 'amber',
    image: 'images/projects/skinmate.png',
    gallery: [
      { type: 'image', src: 'images/projects/skinmate/1.jpg' },
      { type: 'image', src: 'images/projects/skinmate/2.jpg' },
      { type: 'image', src: 'images/projects/skinmate/3.jpg' },
      { type: 'image', src: 'images/projects/skinmate/4.jpg' },
    ],
  },
  {
    id: 'nomnom',
    title: 'Nomnom',
    category: 'NLP · Sentiment Analysis',
    status: '',
    year: '2025',
    blurb:
      'Hybrid aspect-based sentiment analysis for F&B reviews, combining DistilBERT with a Gemini LLM layer.',
    description:
      'Nomnom tackles aspect-based sentiment analysis (ABSA) for food & beverage reviews using a hybrid approach: a fine-tuned DistilBERT model handles the core classification, while a Gemini LLM layer helps with aspect extraction and edge cases plain classifiers struggle with. The goal is to pull out not just overall sentiment but sentiment per aspect — food quality, service, price, ambience — from unstructured review text.',
    role: '',
    team: '',
    stack: ['Python', 'DistilBERT', 'Gemini API', 'NLP'],
    features: [
      'Aspect-level sentiment extraction from raw review text',
      'Hybrid pipeline: DistilBERT classifier + Gemini LLM assist',
      'IEEE-format related work section for the paper',
    ],
    links: {
      demo: 'https://nomnomai.vercel.app/',
      github: 'https://github.com/Beni1412/NomNom',
    },
    accent: 'cyan',
    image: 'images/projects/nomnom.png',
    gallery: [
      { type: 'image', src: 'images/projects/nomnom/1.png' },
      { type: 'image', src: 'images/projects/nomnom/2.png' },
      { type: 'image', src: 'images/projects/nomnom/3.png' },
      { type: 'image', src: 'images/projects/nomnom/4.png' },
    ],
  },
  {
    id: 'diabetes-detection',
    title: 'Diabetes Detection',
    category: 'Machine Learning',
    status: '',
    year: '2025',
    blurb:
      'Multi-model classification pipeline for diabetes risk, benchmarking five algorithms on the PIMA dataset.',
    description:
      'A machine learning pipeline for predicting diabetes risk, built for the COMP6577 Machine Learning course. Uses the PIMA dataset plus a symptom-based dataset, with SMOTE for class balancing, stratified 70/15/15 splits, and threshold tuning to manage the precision/recall trade-off. Five algorithms — Logistic Regression, KNN, Decision Tree, Random Forest and SVM — were tuned with GridSearchCV and compared head-to-head.',
    role: 'Notebook development, model comparison, report and presentation',
    team: '',
    stack: ['Python', 'scikit-learn', 'SMOTE', 'GridSearchCV', 'Pandas'],
    features: [
      'SMOTE-balanced, stratified 70/15/15 data splits',
      'Threshold tuning for precision/recall trade-offs',
      'Five-model comparison via GridSearchCV (LR, KNN, DT, RF, SVM)',
      'Full academic report and presentation deck',
    ],
    links: {
      demo: 'https://diabet-prediction.vercel.app/',
      github: 'https://github.com/Beni1412/Diabet',
    },
    accent: 'green',
    image: 'images/projects/diabet.png',
    gallery: [
      { type: 'image', src: 'images/projects/diabet/1.png' },
      { type: 'image', src: 'images/projects/diabet/2.png' },
      { type: 'image', src: 'images/projects/diabet/3.png' },
      { type: 'image', src: 'images/projects/diabet/4.png' },
    ],
  },
  {
    id: 'ai-career-advisor',
    title: 'AI Career Advisor',
    category: 'Full-Stack · AI',
    status: '',
    year: '2026',
    blurb:
      'A full-stack NLP application that provides personalized career matching and resume skill extraction.',
    description:
      'An end-to-end platform designed to help job seekers by analyzing their resumes and matching them to job postings. The system features a modern React frontend and a Python (FastAPI) backend. It uses natural language processing (NLP) heuristics, keyword matching, and skill taxonomy analysis to extract skills from CVs, calculate job match scores, and recommend targeted courses.',
    role: 'Full-Stack Developer',
    team: '',
    stack: ['React', 'Python (FastAPI)', 'Supabase', 'NLP', 'Vercel'],
    features: [
      'Automated CV skill extraction using keyword taxonomy',
      'Jaccard similarity-based job matching algorithm',
      'Full-stack architecture with Python/FastAPI backend',
    ],
    links: {
      demo: 'https://jobb-recommend.vercel.app/',
      github: 'https://github.com/Beni1412/Job',
    },
    accent: 'green',
    image: 'images/projects/job.png',
    gallery: [
      { type: 'image', src: 'images/projects/job/1.png' },
      { type: 'image', src: 'images/projects/job/2.png' },
      { type: 'image', src: 'images/projects/job/3.png' },
      { type: 'image', src: 'images/projects/job/4.png' },
    ],
  },
  {
    id: 'gesture-meme-cam',
    title: 'Gesture Meme Cam',
    category: 'Web App · Animation',
    status: '',
    year: '2026',
    blurb:
      'Interactive web app using on-device hand tracking to overlay monkey memes based on your hand gestures.',
    description:
      'A purely client-side web application built with vanilla HTML/JS and on-device machine learning for hand tracking. It captures webcam feed, detects specific hand gestures in real-time (like thumbs up, peace sign, open palm), and reacts by popping up corresponding monkey memes on the screen. No server required.',
    role: 'Solo Developer',
    team: '',
    stack: ['JavaScript', 'MediaPipe', 'Canvas API', 'HTML5'],
    features: [
      'Real-time on-device hand gesture recognition',
      'Dynamic meme overlay using Canvas',
      'Zero-latency client-side processing',
    ],
    links: {
      demo: 'https://beni1412.github.io/monyet/',
      github: 'https://github.com/Beni1412/monyet',
    },
    accent: 'amber',
    image: 'images/projects/monyet.png',
    gallery: [
      { type: 'image', src: 'images/projects/monyet/1.jpeg' },
      { type: 'image', src: 'images/projects/monyet/2.jpeg' },
      { type: 'image', src: 'images/projects/monyet/3.jpeg' },
      { type: 'image', src: 'images/projects/monyet/4.jpeg' },
    ],
  },
  {
    id: 'predatoria',
    title: 'Predatoria',
    category: 'Other',
    status: '',
    year: '2025',
    blurb:
      'A virtual zoo interactive web application with animal QR carousels and quizzes.',
    description:
      'Predatoria (Kebun Binatang Virtual) is an interactive, animal-themed web application designed for learning and playing. It features a carousel of animal QR codes, playful animated mascots, ambient background music, and an integrated animal guessing quiz. The app is built entirely using vanilla HTML, CSS (with a dynamic pink/green theme toggle), and JavaScript.',
    role: 'Solo Developer',
    team: '',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Interactive QR carousel showcasing various predators',
      '8-Wall 3D model',
      'Integrated animal guessing quiz',
      'Vanilla JS with CSS animations and ambient audio',
    ],
    links: {
      demo: 'https://beni1412.github.io/virtual/',
      github: 'https://github.com/Beni1412/virtual',
    },
    accent: 'amber',
    image: 'images/projects/predatoria.png',
    gallery: [
      { type: 'image', src: 'images/projects/predatoria/1.png' },
      { type: 'image', src: 'images/projects/predatoria/2.jpeg' },
      { type: 'image', src: 'images/projects/predatoria/3.png' },
      { type: 'image', src: 'images/projects/predatoria/4.png' },
    ],
  },
  {
    id: 'birthday-web-animation',
    title: 'Birthday Web Animation',
    category: 'Creative Coding · Web Animation',
    status: '',
    year: '2024',
    blurb:
      'Interactive canvas birthday pages — fireworks, floating balloons, ambient audio, photo pop-ups.',
    description:
      'A pair of personalized birthday web pages built as creative-coding side projects, made for Nico and Alice. Canvas-based fireworks and floating balloon animations run alongside looping ambient audio, with photo pop-ups revealed as part of the interaction. Built purely with vanilla JS and the Canvas API — no frameworks, no libraries.',
    role: 'Solo project — concept, animation, audio, build',
    team: '',
    stack: ['JavaScript', 'Canvas API', 'CSS Animations', 'Web Audio API'],
    features: [
      'Canvas-based fireworks and balloon animations',
      'Looping ambient audio playback',
      'Interactive photo pop-ups',
      'Zero dependencies — vanilla JS only',
    ],
    links: {
      demo: [
        'https://beni1412.github.io/alice/',
        'https://beni1412.github.io/tania/',
      ],
      github: '',
    },
    accent: 'cyan',
    image: 'images/projects/bday.png',
    gallery: [
      { type: 'image', src: 'images/projects/bday/1.jpeg' },
      { type: 'image', src: 'images/projects/bday/2.jpeg' },
    ],
  },
];

/* -------------------------------------------------
   NAMBAH SKILL BARU:
   Tambah item ke array `items` di group yang sesuai,
   atau bikin group baru dengan format yang sama.
   ------------------------------------------------- */
const skillGroups = [
  {
    group: 'AI / Machine Learning',
    items: [
      { name: 'Python', level: 90 },
      { name: 'TensorFlow / Keras', level: 82 },
      { name: 'scikit-learn', level: 85 },
      { name: 'Computer Vision (OpenCV, YOLO)', level: 78 },
      { name: 'NLP (DistilBERT, LLM APIs)', level: 72 },
    ],
  },
  {
    group: 'Web Development',
    items: [
      { name: 'JavaScript / TypeScript', level: 85 },
      { name: 'React', level: 80 },
      { name: 'Node.js / Express', level: 75 },
      { name: 'Flask', level: 78 },
      { name: 'HTML / CSS', level: 90 },
    ],
  },
  {
    group: 'Tools & Platforms',
    items: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Streamlit', level: 80 },
      { name: 'Jupyter', level: 88 },
      { name: 'Hugging Face', level: 70 },
    ],
  },
  {
    group: 'Softskills',
    items: [
      { name: 'Problem Solving', level: 90 },
      { name: 'Teamwork & Collaboration', level: 85 },
      { name: 'Communication', level: 80 },
      { name: 'Adaptability', level: 85 },
      { name: 'Time Management', level: 80 },
    ],
  },
];
