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
    blurb: 'Brain tumor classification from MRI scans, with Grad-CAM++ explainability and a live inference app.',
    problem: 'Black-box deep learning models in healthcare lack transparency, making it hard for medical professionals to trust AI predictions for critical diagnoses like brain tumors.',
    user: 'Medical practitioners and researchers seeking AI-assisted diagnosis tools that provide explainable insights.',
    solution: 'An EfficientNetB1 transfer-learning pipeline to classify MRI scans, layered with Grad-CAM++ to visually highlight the specific regions of the scan that drove each prediction.',
    challenge: 'Ensuring dataset documentation and preprocessing replicability to meet peer-review standards, while optimizing the model to run interactively in a web app.',
    impact: 'Successfully benchmarked against Custom CNN and VGG16 baselines, producing a robust and explainable Streamlit app. The project was written up as a research paper for COMP6696.',
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
    problem: 'Determining the severity and exact location of skin conditions like acne is difficult without professional dermatology tools.',
    user: 'Individuals looking for accessible, AI-powered skincare tracking and personalized recommendations.',
    solution: 'A full-stack application (React + FastAPI) that uses YOLOv8/EfficientNet for photo-based skin analysis, leveraging DBSCAN to cluster acne zones.',
    challenge: 'Hosting a PyTorch ML backend reliably while ensuring the front-end remains responsive during inference.',
    impact: 'Provided an intuitive scanning history and dashboard, making skin condition tracking effortless for end-users.',
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
    problem: 'Standard sentiment analysis only gives a broad positive/negative score, failing to capture nuances in F&B reviews where a user might praise the food but complain about the service.',
    user: 'Restaurant owners and F&B managers who need granular insights into customer feedback across different aspects (food quality, service, price, ambience).',
    solution: 'A hybrid NLP pipeline combining a fine-tuned DistilBERT classifier for core sentiment with a Gemini LLM layer to extract and handle complex aspects and edge cases from unstructured review text.',
    challenge: 'Balancing the speed and structured output of DistilBERT with the deep contextual understanding of Gemini without blowing up latency.',
    impact: 'Created a robust ABSA system packaged with an IEEE-format related work section, shipped as a live web application.',
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
    problem: 'Early detection of diabetes risk is crucial for preventative healthcare, but comparing the raw efficacy of different ML algorithms can be complex.',
    user: 'Healthcare researchers and data science students exploring predictive medical models.',
    solution: 'A comprehensive machine learning pipeline using the PIMA and symptom datasets. It employs SMOTE for class balancing and evaluates five different algorithms (LR, KNN, Decision Tree, Random Forest, SVM) tuned via GridSearchCV.',
    challenge: 'Managing the precision/recall trade-off through careful threshold tuning, and ensuring rigorous evaluation via stratified 70/15/15 splits.',
    impact: 'Produced a full academic report and presentation deck comparing the benchmarked models head-to-head for the COMP6577 Machine Learning course.',
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
    problem: 'Job seekers often struggle to align their resumes with job postings, resulting in missed opportunities despite having the right skills.',
    user: 'Job seekers wanting data-driven feedback on their resumes, and recruiters looking to match candidates to roles.',
    solution: 'An end-to-end NLP platform with a React frontend and Python (FastAPI) backend that automatically extracts skills from CVs using taxonomy heuristics, calculates Jaccard similarity-based match scores, and recommends targeted courses.',
    challenge: 'Building a robust keyword taxonomy and ensuring accurate skill extraction from variously formatted resumes.',
    impact: 'Delivered a functional, modern full-stack application that bridges the gap between raw resume text and actionable career advice.',
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
    problem: 'Most gesture-recognition applications require heavy server-side processing, introducing latency and privacy concerns.',
    user: 'Web users looking for a fun, interactive camera experience without having to download apps or upload their video feed.',
    solution: 'A purely client-side web application built with vanilla HTML/JS and MediaPipe. It tracks hands locally and uses the Canvas API to overlay monkey memes in real-time based on specific gestures (thumbs up, peace sign).',
    challenge: 'Optimizing the machine learning models and Canvas rendering to run at zero-latency entirely on the client\'s device.',
    impact: 'An instantly accessible, highly engaging browser toy that demonstrates the power of on-device web ML.',
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
    problem: 'Traditional virtual learning applications can be static and unengaging for kids learning about animals.',
    user: 'Children and educators looking for interactive and playful ways to learn about predators.',
    solution: 'An interactive virtual zoo web app featuring 8-Wall 3D models, an animal QR carousel, animated mascots, ambient music, and a guessing quiz—built entirely with vanilla HTML, CSS, and JS.',
    challenge: 'Managing complex DOM animations, theme toggles (pink/green), and audio state without relying on heavy frameworks.',
    impact: 'A fun, lightweight educational toy shipped as a static site that runs flawlessly in any modern browser.',
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
    problem: 'Standard digital birthday cards lack interactivity and personalization.',
    user: 'Friends (Nico, Alice, Tania) receiving a unique, memorable digital gift.',
    solution: 'Personalized, interactive canvas-based web pages featuring fireworks, floating balloons, looping ambient audio, and interactive photo pop-ups, built purely with vanilla JS.',
    challenge: 'Coordinating timing between the Web Audio API and complex particle simulations (fireworks) on the Canvas API without any external libraries.',
    impact: 'A highly customized and engaging creative coding project that runs smoothly without external dependencies.',
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
