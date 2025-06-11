import signal from "../../public/Images/signal.svg";
import sales from "../../public/Images/marketing.svg";
import ai from "../../public/Images/ai.svg";
import graph from "../../public/Images/graph.svg"
import result from "../../public/Images/result.svg"
import upload from "../../public/Images/upload.svg"

export const dataArray = [

  {
    id: "deepfake",
    title: "Deepfake",
    content: "Deepfake refers to synthetic media—typically videos, images, or audio",
    description: "A powerful AI-driven tool designed to detect manipulated audio with high precision. Users can upload audio files to receive a detailed authenticity report, including sentence-by-sentence analysis and a confidence score.",
    keyFeatures: [
      "Advanced AI-powered deepfake detection for audio content",
      "Sentence-level authenticity breakdown",
      "Confidence scoring for each analyzed segment",

    ],
    url: "https://deepfake.aiensured.com/",
    icon: ai,
    type: "Tools",
    working: [
      {
        icon: upload,
        title: "Upload Audio",
        content: "upload any image or audio file you want to analyze"
      },
      {
        icon: graph,
        title: "AI analysis",
        content: "upload any audio file you want to analyze"
      },
      {
        icon: result,
        title: "Get results",
        content: "Get a detailed report with authenticity scores and insights"
      }
    ]
  },
  {
    id: "euai",
    title: "EUAI Act",
    content: "A demo and awareness platform aligned with the EU AI Act, showcasing AI transparency and deepfake detection.",
    description: "The EU AI Act is the first major regulation classifying AI systems by risk, setting clear rules for responsible AI development and deployment.",
    keyFeatures: [
      "Deepfake detection for video and images",
      "Transparency score for model explainability",
      "Compliance suggestions based on EU AI guidelines",
      "Metadata extraction including timestamps and device info"
    ],
    url: "https://euai.aiensured.com/",
    icon: ai,
    type: "Compliance",
    working: [
      {
        icon: upload,
        title: "Upload File",
        content: "Upload any video or image you want to validate for authenticity"
      },
      {
        icon: graph,
        title: "AI Compliance Analysis",
        content: "Analyze the content for deepfakes and assess transparency indicators"
      },
      {
        icon: result,
        title: "Review Results",
        content: "Get a confidence score and metadata report for transparency auditing"
      }
    ]
  },
{
  id: "llm",
  title: "Large Language Models (LLMs)",
  content: "LLM pipeline with custom metrics and explainability for accurate and transparent AI responses.",
  description: "A Large Language Model (LLM) is a type of artificial intelligence model trained on massive volumes of text data. It is designed to understand, generate, summarize, translate, and interact with human language. LLMs power applications such as chatbots, code assistants, content creation tools, and more.",
  keyFeatures: [
    "Test Data Generation.",
    "Self-Built Metrics",
    "Evaluation for Single Queries and Overall Performance.",
    "Explainability Techniques: SHAP, Chain of Thought (CoT), Hallucination Detection, Uncertainty Quantification.",
    "Prompt Injection Detection",
    "Bias Detection"
  ],
  url: "http://20.197.35.138:3009/",
  icon: ai,
  type: "Pipeline",
  working: [
    {
      icon: upload,
      title: "Data Handling & Preparation",
      content: `1. Data Ingestion – Extracting and loading data (e.g., from PDFs or documents) into the pipeline. 2. Embedding Generation – Converting text into numerical vector embeddings. 3. Vector Database Storage – Storing embeddings in a vector database like Pinecone, Weaviate, or FAISS.`
    },
    {
      icon: graph,
      title: "Query Processing & Retrieval",
      content: "4. User Query – The input question or query provided by the user. 5. Query Embedding – Transforming the user query into an embedding vector. 6. Vector Search (Similarity Retrieval) – Retrieving top-matching document chunks based on vector similarity. 7. Retrieve Relevant Context – Extracting and selecting the most relevant content chunks."
    },
    {
      icon: result,
      title: "Prompt Construction & LLM Invocation",
      content: "8. Prompt Engineering – Structuring the retrieved context into a prompt for the language model. 9. LLM Processing – Using models like GPT-4 or LLaMA to generate a response. 10. Response Generation – Producing the final answer based on input prompt and context."
    },
    {
      icon: graph,
      title: "Test Data & Ground Truth Generation",
      content: "11. Test Data Generation & Ground Truth – Creating realistic test datasets from PDFs and associating correct answers for evaluation."
    },
    {
      icon: sales,
      title: "Single Query Evaluation",
      content: "12. Prompt Injection Detection – Checking for vulnerabilities in prompt handling. 13. Faithfulness Check – Verifying that the model’s answer is grounded in the retrieved context (no hallucinations). 14. Metrics Computed per Query: * Chunk Utilization * Context Relevancy * Context Precision * Grade Score * Answer Relevancy * Diversity Score * Toxicity Score * Toxicity Reason * Faithfulness * Overall Score"
    },
    {
      icon: signal,
      title: "Overall Evaluation & Metrics",
      content: "15. Aggregated Performance Evaluation – Measuring quality across multiple queries using: * Chunk Utilization * Content Relevancy & Precision * Grade Score * Answer Relevancy * Diversity Score * Toxicity Score and Reason * Overall Score. To check the output of these scores, visit the provided evaluation dashboard or link."
    },
    {
      icon: result,
      title: "Explainability Techniques",
      content: "* Chain of Thought (CoT) – Step-by-step reasoning breakdown. * SHAP – Feature importance in model output. * Uncertainty Quantification – Confidence scoring. * Hallucination Detection – Identifying made-up or unsupported content."
    }
  ]
}

  ,
 
  {
    id: "gpai",
    title: "GPAI",
    content: "help automate, track, and scale these steps for efficient and reproducible workflows",
    description: "Comprehensive AI-based tool to detect manipulated media Upload video/image files and receive a confidence score for authenticity, along with detailed metadata analysis.",
    keyFeatures: [
      " AI-based deepfake detection for images and videos",
      "Confidence score showing likelihood of deepfake content",
      "Metadata extraction (e.g., device info, timestamps)",
      "Visual markers for tampered regions (heatmap overlay)"
    ],
    url: "https://deepfake.aiensured.com/",
    icon: ai,
    type: "Tools",
    working: [
      {
        icon: upload,
        title: "Upload Media",
        content: "upload any image or audio file you want to analyze"
      },
      {
        icon: graph,
        title: "AI analysis",
        content: "upload any image or audio file you want to analyze"
      },
      {
        icon: result,
        title: "Get results",
        content: "upload any image or audio file you want to analyze"
      }
    ]
  },



  {
    id: "imagepipeline",
    title: "Image Pipeline",
    content: "Detect manipulated or synthetic (deepfake) images using AI-powered analysis.",
    description: "The image pipeline is responsible for preparing and validating images before model training. It supports cleaning, enhancing, and augmenting images to ensure they are robust and representative. This pipeline also integrates model-building, explainability, testing, privacy, and optimization methods to improve image model performance and reliability.",
    keyFeatures: [
      "Model Explainability",
      "a. White Box",
      "b. Black Box",
      "Metamorphic Testing",
      " Attack vectors",
      "a. White Box",
      "b. Black Box",
      "Corner Cases Discovered by White Box Testing",
      "Feedback Loop",
      " Model Privacy",
      "Model Quantization",
      "Performance testing"
    ],
    url: "https://prod.aiensured.com/image",
    icon: ai,
    type: "Pipeline",
    working: [
      {
        icon: upload,
        title: "Upload image dataset",
        content: "Upload any image file (JPG, PNG) for Image analysis."
      },
      {
        icon: graph,
        title: "Run diagnostic and preprocessing steps",
        content: "Perform diagnostic checks such as image quality assessment, metadata extraction, and preprocessing steps like resizing, normalization, and augmentation."
      },
      {
        icon: result,
        title: "Train model using pipeline",
        content: "Receive a confidence score, tampered regions (if any), and metadata insights."
      },
      {
        icon: graph,
        title: "Apply explainability and testing modules",
        content: "Apply advanced explainability techniques and rigorous testing modules to ensure model reliability and transparency."
      },
      {
        icon: result,
        title: "Review results and download optimized model",
        content: "Download the optimized model and review its performance metrics, including explainability and testing results."
      }
    ]
  },

  {
    id: "audiopipeline",
    title: "Audio Pipeline",
    content: "Detect synthetic or cloned voices using AI-driven forensic audio analysis.",
    description: "AI-powered solution for verifying the authenticity of audio recordings and identifying signs of deepfake or synthetic voice manipulation.",
    keyFeatures: [
      "Deepfake voice/speech detection",
      "Speaker verification and spoof detection",
      "Spectrogram-based tampering identification",
      "Confidence score with auditory markers"
    ],
    url: "https://prod.aiensured.com/audio",
    icon: ai,
    type: "Pipeline",
    working: [
      {
        icon: upload,
        title: "Upload Audio",
        content: "Upload audio files (MP3, WAV) for authenticity checks."
      },
      {
        icon: graph,
        title: "AI Audio Analysis",
        content: "Analyze audio waveforms and patterns for signs of deepfake speech."
      },
      {
        icon: result,
        title: "Get Results",
        content: "View authenticity score, speaker analysis, and anomaly detection reports."
      }
    ]
  }
  ,

  {
    id: "textpipeline",
    title: "Text Pipeline",
    content: "Classify text while gaining insights into bias, fairness, privacy, and model performance—all version-controlled and explained through user-friendly reports.",
    description: "The Text classification pipeline turns raw text into predictions and simultaneously produces quantitative evidence for bias detection, fairness, explainability, Privacy, Attack proof system, performance and robustness. That evidence is version-controlled and surfaced through user interpretable reports, giving product teams—and regulators—trustworthy visibility into every model iteration.",
    keyFeatures: [
      "AI-based Text classification",
      "Word Clouds visualization",
      "Duplicates and Outlier Detection ",
      "Responsible Ai Features",
    ],
    url: "https://prod.aiensured.com/text",
    icon: ai,
    type: "Pipeline",
    working: [
      {
        icon: upload,
        title: "Upload Inputs",
        content: "Upload your text data, embeddings, and model files.",
      },
      {
        icon: graph,
        title: "Automated Analysis",
        content: "Run AI-driven text classification with bias, fairness, and privacy checks.",
      },
      {
        icon: result,
        title: "Get Reports",
        content: "Receive version-controlled, interpretable reports with performance insights.",
      }
    ]

  }
  ,
  {
    id: "objectpipeline",
    title: "Object Detection Pipeline",
    content: "Analyze images for manipulated or synthetic object placement using AI.",
    description: " The object detection pipeline helps in identifying the objects which are classified, misclassified, low score and no detection cases. It has been widely used for face detection, vehicle detection, pedestrian counting, web images, security systems and driverless cars.",
    keyFeatures: [
      "Metamorphic Testing",
      "Model Explainability",
      "Model Privacy",
      "Performance Testing",
      "Attack Vectors"
    ],
    url: "https://prod.aiensured.com/",
    icon: ai,
    type: "Pipeline",
    working: [
      {
        icon: upload,
        title: "Upload Image",
        content: "Upload your images with annotations and model files"
      },
      {
        icon: graph,
        title: "AI analysis  ",
        content: "AI detects abnormal object placements or generated regions."
      },
      {
        icon: result,
        title: "Receive results",
        content: "Review manipulated object detection with heatmaps and analysis scores."
      }
    ]
  }
  ,

  {
    id: "structuredpipeline",
    title: "Structured Pipeline",
    content: "Pipeline designed for structured/tabular data to perform predictive modeling and data validation.",
    description: "In a structured pipeline, tabular data is analyzed to uncover patterns, explain model behavior, and detect bias. It supports EDA, explainability, fairness checks, and robustness techniques. This is widely used in domains like finance, healthcare, and operations.",
    keyFeatures: [
      "Exploratory Data Analysis ",
      "Global Explainability",
      "Local Explainability ",
      "Bias Techniques",
      "Debias Techniques",
      "Adversarial Testing",
      "Synthetic Data",
      "Metamorphic Testing",
      "Counterfactuals Generated",
      "Feedback Loop"
    ],
    url: "https://prod.aiensured.com/structured",
    icon: ai,
    type: "Pipeline",
    working: [
      {
        icon: upload,
        title: "Upload the dataset file  ",
        content: "Upload your structured CSV file for processing"
      },
      {
        icon: graph,
        title: "Perform Exploratory Data Analysis (EDA) ",
        content: "Automated data preprocessing, modeling, and evaluation"
      },
      {
        icon: result,
        title: "Run global and local explainability models",
        content: "Receive predictions, metrics, and explainability output"
      },
      {
        icon: graph,
        title: "Apply bias detection and mitigation techniques",
        content: "Evaluate model fairness and robustness"
      },
      {
        icon: result,
        title: "Conduct adversarial and metamorphic testing ",
        content: "Generate counterfactuals and feedback loops for model improvement"
      },
      {
        icon: upload,
        title: "Generate synthetic and counterfactual data",
        content: "Create new data points to enhance model training and validation"
      },
      {
        icon: result,
        title: "Analyze results (precision, recall, F1-score, Support)",
        content: "View detailed results including precision, recall, F1-score, and support for each class"
      }
    ]
  },
  {
    id: "regressionpipeline",
    title: "Regression Pipeline",
    content: "Optimized for tasks that involve predicting continuous values using supervised learning models.",
    description: "A specialized pipeline that preprocesses numerical datasets, trains regression models, and evaluates performance using standard metrics.",
    keyFeatures: [
      "Handles missing values and outlier detection",
      "Supports multiple regression models (Linear, Ridge, Lasso)",
      "Performance metrics like RMSE, MAE, R²",
      "Interactive visualization of predictions vs actuals"
    ],
    url: "https://prod.aiensured.com/regression",
    icon: ai,
    type: "Pipeline",
    working: [
      {
        icon: upload,
        title: "Upload Data",
        content: "Provide CSV with target and feature columns"
      },
      {
        icon: graph,
        title: "AI Analysis",
        content: "Performs regression model training and testing"
      },
      {
        icon: result,
        title: "Get Results",
        content: "Returns predicted values with evaluation metrics"
      }
    ]
  },
  {
    id: "timeseriespipeline",
    title: "Timeseries Pipeline",
    content: "Designed to analyze and forecast time-dependent data with high accuracy.",
    description: "The Timeseries pipeline enables structured regression on temporal data using timesteps. It allows training from scratch or attaching a pre-trained model for explainability. Supports use cases like stock forecasting.",
    keyFeatures: [
      "Time-step-based Feature Engineering ",
      "Global & Local Explainability (SHAP-based) ",
      "Fairness Checks using FairML ",
      "Config-driven Modeling ",
      "Compatible with Pretrained Models",
      "Auto-log of outputs to results folder"
    ],
    url: "https://prod.aiensured.com/timeseries",
    icon: ai,
    type: "Pipeline",
    working: [
      {
        icon: upload,
        title: "Upload time-series dataset (.csv) ",
        content: "Configure target column, timesteps, and features in master_config.properties "
      },
      {
        icon: graph,
        title: "Run full pipeline using python Run.py ",
        content: " If using a pre-trained model, skip preprocessing/modeling and enable explainability/fairness only"
      },
      {
        icon: result,
        title: "Get Forecasts",
        content: "View results in the generated results folder"
      }
    ]
  },
  {
    id: "segmentationpipeline",
    title: "Segmentation Pipeline",
    content: "AI pipeline to perform image segmentation for medical, satellite, and industrial imagery.",
    description: "Processes images to classify each pixel into a category, returning a segmented output along with confidence maps and overlays.",
    keyFeatures: [
      "Semantic and instance segmentation capabilities",
      "Pre-trained models like U-Net and Mask R-CNN",
      "Overlay masks with confidence scores",
      "Supports various formats (JPEG, PNG, DICOM)"
    ],
    url: "https://prod.aiensured.com/segmentation",
    icon: ai,
    type: "Pipeline",
    working: [
      {
        icon: upload,
        title: "Upload Image",
        content: "Upload image(s) for segmentation"
      },
      {
        icon: graph,
        title: "AI Analysis",
        content: "Segmentation performed using deep learning models"
      },
      {
        icon: result,
        title: "Get Results",
        content: "Download segmented images with overlays"
      }
    ]
  },
  {
    id: "recommendationpipeline",
    title: "Recommendation Pipeline",
    content: "Generate personalized item recommendations using collaborative and content-based filtering.",
    description: "A pipeline that processes user-item interaction data and builds recommender models to suggest relevant content.",
    keyFeatures: [
      "User-based and item-based collaborative filtering",
      "Content-based filtering with item metadata",
      "Real-time recommendations based on new inputs",
      "Evaluation metrics like precision@k, recall@k"
    ],
    url: "https://prod.aiensured.com/recommendation",
    icon: ai,
    type: "Pipeline",
    working: [
      {
        icon: upload,
        title: "Upload Dataset",
        content: "Provide user-item interaction data"
      },
      {
        icon: graph,
        title: "AI Analysis",
        content: "Recommender model trains and evaluates item affinity"
      },
      {
        icon: result,
        title: "Get Recommendations",
        content: "Receive top-N recommendations per user"
      }
    ]
  },
  {
    id: "tdm",
    title: "Test Data Management (TDM)",
    content: "The Test Data Generation pipeline synthesizes production-quality data",
    description: "The Test Data Generation pipeline synthesizes production-quality data mimicking real-world complexities. It helps in testing models where real data is scarce, biased, or contains privacy risks. This pipeline has broad applications in privacy-sensitive industries like healthcare, finance, and public policy.",
    keyFeatures: [
      "Smart Data Type Detection ",
      "PII-aware Preprocessing ",
      "Rare Case & Edge Data Support ",
      "Bias Mitigation & Privacy Preservation ",
      "Utility & Confidence Score Evaluation",
      "Closed-loop Model Fine-Tuning"
    ],
    url: "https://tdm.aiensured.com/",
    icon: ai,
    type: "Tools",
    working: [
      {
        icon: upload,
        title: "Upload CSV/Excel data",
        content: "Auto-detect column types & set custom metadata"
      },
      {
        icon: graph,
        title: " Auto-detect column types & set custom metadata ",
        content: "Generate synthetic data with PII protection and rare case support"
      },
      {
        icon: result,
        title: "Mark PII fields manually  ",
        content: "Generate synthetic data with PII protection and rare case support"
      },
      {
        icon: graph,
        title: "Specify synthetic record count",
        content: "Generate synthetic data with PII protection and rare case support"
      },
      {
        icon: result,
        title: "Auto-run model selection, training & tuning ",
        content: "Generate synthetic data with PII protection and rare case support"
      },
      {
        icon: upload,
        title: "Generate & evaluate synthetic data ",
        content: "Generate synthetic data with PII protection and rare case support"
      },
      {
        icon: result,
        title: "View results with utility/confidence metrics",
        content: "Generate synthetic data with PII protection and rare case support"
      }
    ]
  }
]