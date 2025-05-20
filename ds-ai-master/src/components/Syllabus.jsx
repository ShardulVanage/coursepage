"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronRight, BookOpen, ChevronDown, ChevronUp } from "lucide-react"

export default function SyllabusSection() {
  const [openSection, setOpenSection] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const syllabusData = [
    {
      id: "intro-data-science",
      title: "Introduction to Data Science",
      topics: [
        "What is Data Analytics",
        "Importance of Data Analytics",
        "Types of Data",
        "Types of Statistical Analysis",
        "Steps to obtain a Data Analytics solution",
        "Business Understanding",
        "Data Understanding",
        "Data Collection",
        "Data Preparation",
        "Data Modelling",
        "Deployment",
        "Use Case",
      ],
    },
    {
      id: "python-data-science",
      title: "Python for Data Science",
      topics: [
        "Introduction to Python",
        "Variables & Keywords",
        "Datatypes Operators",
        "Lists",
        "Tuples",
        "Sets",
        "Dictionary",
        "Loops & Iterations",
        "Functions",
        "Map Reduce Filter",
        "File Handling",
        "Control Structures",
        "OOPs",
        "NumPy",
        "Data Visualization",
        "Matplotlib",
        "Seaborn",
      ],
    },
    {
      id: "exploratory-data-analysis",
      title: "Exploratory Data Analysis",
      topics: [
        "Course Contents",
        "Agenda",
        "Data Analytics/Science Process",
        "What is EDA",
        "Visualization",
        "Steps involved in EDA (Data Sourcing)",
        "Steps involved in EDA (Data Cleaning)",
        "Handle Missing Values (Theory)",
        "Handle Missing Values (Code)",
        "Feature Scaling",
        "Feature Scaling (Standardization)",
        "Feature Scaling (Normalization)",
        "Feature Scaling (Code)",
        "Outlier Treatment (Theory)",
        "Outlier Treatment (Code)",
        "Invalid Data",
        "Types of Data",
        "Types of Analysis",
        "Univariate Analysis",
        "Bivariate Analysis",
        "Multivariate Analysis",
        "Numerical Analysis",
        "Analysis (Code)",
        "Derived Metrics",
        "Feature Binning (Theory)",
        "Feature Binning (Theory)",
        "Feature Binning (Code)",
        "Feature Encoding",
        "Feature Encoding Detailed",
        "Feature Encoding (Code)",
        "Case Study",
        "Data Exploration (Case Study)",
        "Data Cleaning (Case Study)",
        "Univariate Analysis (Case Study)",
        "Bivariate Analysis (Case Study)",
        "Bivariate Analysis (Case Study)",
        "EDA Report (Case Study)",
        "EDA Quiz",
      ],
    },
    {
      id: "business-statistics",
      title: "Business Statistics",
      topics: [
        "Course Contents",
        "Introduction",
        "Types of Data (Agenda)",
        "Descriptive Stats",
        "Inferential Stats",
        "Qualitative Data",
        "Quantitative Data",
        "Sampling Techniques (Agenda)",
        "Population vs Sample",
        "Why Sampling is important",
        "Types of Sampling",
        "Cluster Random Sampling",
        "Probability Sampling",
        "Non probability sampling",
        "Population Sampling",
        "Why n-1 and not n",
        "Descriptive Analytics (Agenda)",
        "Measures of Central Tendency",
        "Mean",
        "Median",
        "Mode",
        "Measures of Dispersion",
        "Range",
        "IQR",
        "Variance Standard Deviation",
        "Mean Deviation",
        "Probability (Agenda)",
        "Probability",
        "Addition Rule",
        "Independent Events",
        "Cumulative Probability",
        "Conditional Probability",
        "Bayes Theorem 1",
        "Bayes Theorem 2",
        "Probability Distribution (Agenda)",
        "Uniform Distribution",
        "Binomial Distribution",
        "Poisson Distribution",
        "Normal Distribution Part 1",
        "Normal Distribution Part 2",
        "Skewness",
        "Kurtosis",
        "Calculating Probability with Z-score for Normal Distribution Part 1",
        "Calculating Probability with Z-score for Normal Distribution Part 2",
        "Calculating Probability with Z-score for Normal Distribution Part 3",
        "Covariance & Correlation (Agenda)",
        "Covariance",
        "Correlation",
        "Covariance VS Correlation",
        "Hypothesis Testing",
        "Tailed Tests",
        "p-value",
        "Types of Test",
        "T-test",
        "Z-test",
        "Chi-Square Test",
        "ANOVA",
        "Correlation Test (Practical)",
      ],
    },
    {
      id: "sql-data-science",
      title: "SQL for Data Science",
      topics: [
        "Course Contents",
        "Installation",
        "Data Architecture - File server vs client server",
        "Introduction to SQL",
        "Constraints in SQL",
        "Table Basics - DDLs",
        "Table Basics - DQLs",
        "Table Basics - DMLs",
        "Joins",
        "Data Import Export",
        "Aggregation Functions",
        "String functions",
        "Date Time Functions",
        "Regular Expressions",
        "Nested Queries",
        "Views",
        "Stored Procedures",
        "Windows Function",
        "SQL Python connectivity",
      ],
    },
    {
      id: "machine-learning",
      title: "Machine Learning",
      topics: [
        "Agenda",
        "Introduction to ML",
        "Types of ML",
        "Use Cases Part 1",
        "Use Cases Part 2",
        "Pre-Requisites: Features",
        "Pre-Requisites: Train-Test Split",
        "Pre-Requisites: Feature Scaling",
        "Pre-Requisites: Standardization Example",
        "Pre-Requisites: Normalization Example",
        "Pre-Requisites: Feature Encoding",
        "Pre-Requisites: Feature Encoding (Practicals)",
        "Regression: Introduction to Regression Models",
        "Regression: Regression Metrics",
        "Regression: Regression Metrics (Practicals)",
        "Regression: Simple Linear Regression",
        "Regression: Multiple Linear Regression",
        "Regression: Linear Regression (Practicals)",
        "Regression: Multiple Linear Regression (Practicals)",
        "Regression: Polynomial Regression",
        "Regression: Polynomial Regression (Practicals)",
        "Regression: Bias Variance Tradeoff",
        "Regression: Ridge Regression",
        "Regression: Lasso Regression",
        "Regression: Lasso & Ridge Regression (Practicals)",
        "Classification: Introduction to Classification",
        "Classification: Types of Classification",
        "Classification: Log Loss",
        "Classification: Confusion Matrix",
        "Classification: AUC ROC Curve",
        "Classification: Classification Report",
        "Classification: kNN Classifier",
        "Classification: kNN Classifier Example",
        "Classification: Practicals Part 1",
        "Classification: kNN Classifier (Practicals)",
        "Classification: Decision Tree",
        "Classification: Decision Tree (Entropy based)",
        "Classification: Decision Tree (gini based)",
        "Classification: Decision Tree (Practicals)",
        "Classification: Decision Tree (Visualizing)",
        "Classification: Random Forest Classifier",
        "Classification: Random Forest Classifier (Practicals)",
        "Classification: Naive Bayes Classifier",
        "Classification: SVM Classifier Part 1",
        "Classification: SVM Classifier Part 2",
        "Classification: Logistic Regression",
        "Classification: Practicals so far",
        "Classification: Issues in Classification (Part 1)",
        "Classification: Issues in Classification (Part 2)",
        "Classification: Project",
        "Ensemble: Introduction to Ensemble Learning",
        "Ensemble: Bagging",
        "Ensemble: Bagging vs Random Forest",
        "Ensemble: Bagging (Practicals #1)",
        "Ensemble: Bagging (Practicals #2)",
        "Ensemble: Boosting",
        "Ensemble: Ada Boost",
        "Ensemble: Gradient Boost",
        "Ensemble: CF vs LF",
        "Ensemble: Cross Entropy",
        "Ensemble: Xtreme Gradient Boosting (XGB)",
        "Ensemble: Project",
        "Clustering: Introduction to Clustering",
        "Clustering: kMeans Clustering",
        "Clustering: kMeans Clustering (Practicals)",
        "Clustering: Hierarchical Clustering",
        "Clustering: Hierarchical Clustering (Practicals)",
        "Clustering: Mean Shift Clustering",
        "Feature Engineering: Introduction",
        "Feature Engineering: RFE and SFS",
        "Feature Engineering: RFE (Practicals)",
        "Feature Engineering: Successive Feature Selection",
        "Feature Engineering: Chi-Square",
        "Feature Engineering: Chi-Square (Practicals)",
        "Feature Engineering: Principal Component Analysis",
        "Feature Engineering: Principal Component Analysis (Practicals)",
        "Feature Engineering: Linear Discriminant Analysis",
        "Feature Engineering: Linear Discriminant Analysis (Practicals)",
        "Feature Engineering: kPCA & QDA",
        "Feature Engineering: kPCA & QDA (Practicals)",
        "Hyper Parameter Optimization: Basics",
        "Hyper Parameter Optimization: Manual HPO",
        "Hyper Parameter Optimization: GridSearch vs RandomizedSearch",
        "Hyper Parameter Optimization: Manual HPO (Practicals)",
        "Hyper Parameter Optimization: RandomizedSearchCV (Practicals)",
        "Hyper Parameter Optimization: GridSearchCV (Practicals)",
      ],
    },
    {
      id: "time-series",
      title: "Time Series Analysis & Forecasting",
      topics: [
        "Introduction to TSA",
        "Time Series vs Regression",
        "Time Series Analysis",
        "Anomaly Detection",
        "Components of Time Series",
        "Decomposition",
        "Decomposition (Practicals)",
        "Additive/Multiplicative Decomposition",
        "Stationarity",
        "Testing TS Stationarity",
        "Transformation",
        "Introduction to Pre-Processing",
        "Handle Missing Value",
        "Handle Missing Value (Practicals)",
        "Outlier Treatment",
        "3-Sigma Technique",
        "Feature Scaling",
        "Feature Scaling: Standardization",
        "Feature Scaling: Normalization",
        "Feature Scaling (Practicals)",
        "Feature Encoding",
        "Feature Encoding (Practicals)",
        "Models - Algorithms",
        "Models - ARIMA Part 1",
        "Models - ARIMA Part 2",
        "Models - AR Theory",
        "Models - MA Theory",
        "Models - ACF/PACF Plots",
        "Models - Find p,d,q in ARIMA",
        "Models - ARIMA (Practicals Part 1)",
        "Models - ARIMA (Practicals Part 2)",
        "Models - ARIMA (Final)",
        "Models - Decomposition",
        "Models - ACF/PACF",
        "Models - Best Transformation",
        "Models - Grid Search (Part 1)",
        "Models - Grid Search (Part 2)",
        "Models - Final Model Building",
        "Models - Facebook Prophet (Part 1)",
        "Models - Facebook Prophet (Part 2)",
        "Models - Facebook Prophet (Part 3)",
        "Models - Multi Variate Time Series Analysis",
        "Models - Facebook Prophet (Uni vs Multi)",
        "Introduction to Metrics",
        "Forecasting Evaluation Metrics",
        "Mean Squared Error",
        "Root Mean Squared Error",
        "Mean Absolute Percentage Error",
        "Project 1 - Energy Forecasting Part 1",
        "Project 1 - Energy Forecasting Part 2",
        "Project 1 - Energy Forecasting Part 3",
        "Project 2 - Stock Market Prediction Part 1",
        "Project 2 - Stock Market Prediction Part 2",
        "Project 2 - Stock Market Prediction Part 3",
        "Project 3 - Demand Forecasting Part 1",
        "Project 3 - Demand Forecasting Part 2",
        "Project 3 - Demand Forecasting Part 3",
        "Project 3 - Demand Forecasting Part 4",
        "Project 3 - Demand Forecasting Part 5",
        "Project 3 - Demand Forecasting Part 6",
      ],
    },
    {
      id: "deep-learning",
      title: "Deep Learning & Neural Networks",
      topics: [
        "Introduction",
        "Introduction to Deep Learning",
        "Understanding Deep Learning",
        "What is a Neuron",
        "Activation Functions",
        "Activation Function: Step Function",
        "Activation Function: Linear Function",
        "Activation Function: Sigmoid Function",
        "Activation Function: TanH Function",
        "Activation Function: ReLu Function",
        "Backpropagation & Forward Pass",
        "Gradient Descent",
        "Artificial Neural Networks: Intuition",
        "Artificial Neural Networks: Practicals",
        "Artificial Neural Networks: Hyper Parameter Optimization",
        "Convolutional Neural Networks: What is CNN",
        "Convolutional Neural Networks: Steps in CNN",
        "Convolutional Neural Networks: Architecture Explained",
        "Convolutional Neural Networks: Image Augmentation",
        "Convolutional Neural Networks: Batch size vs iterations vs epochs",
        "Convolutional Neural Networks: Practicals",
        "Convolutional Neural Networks: Model Summary & Parameters",
        "Convolutional Neural Networks: Project (X-Ray detection)",
        "Recurrent Neural Networks: Basics",
        "Recurrent Neural Networks: Types of RNN",
        "Recurrent Neural Networks: Vanishing Gradient & Exploding Gradient Problem",
        "Recurrent Neural Networks: LSTMs",
        "Recurrent Neural Networks: LSTMs (Practicals)",
        "Pre-Trained Models",
        "Pre-Trained Models (Practicals)",
        "Pre-Trained Models: VGG16",
        "Pre-Trained Models: MobileNet",
        "Transfer Learning",
        "Project: Pneumonia Detection from X-Ray Images",
      ],
    },
    {
      id: "nlp",
      title: "Natural Language Processing",
      topics: [
        "Intro to NLP: Introduction",
        "Intro to NLP: Introduction continued",
        "Intro to NLP: Key Challenges",
        "Intro to NLP: Linguistics",
        "NLP Basics: Case Folding",
        "NLP Basics: SCR",
        "NLP Basics: Handling Contractions",
        "NLP Basics: Tokenization",
        "NLP Basics: Stop Word Removal",
        "NLP Basics: nGrams",
        "NLP Basics: Vectorization",
        "NLP Basics: Word Embeddings",
        "NLP Basics: Bag of Words",
        "NLP Basics: Bag of Words (Practicals)",
        "NLP Basics: TF-IDF",
        "NLP Basics: TF-IDF (Practicals)",
        "NLP Basics: Part of Speech Tagging and Named Entity Recognition",
        "NLP Basics: NER (Practicals)",
        "Word Embeddings: Word2Vec Introduction",
        "Word Embeddings: Word2Vec Part 2",
        "Word Embeddings: Pre-Trained Word2Vec",
        "Word Embeddings: Word2Vec Intuition",
        "Word Embeddings: Word2Vec - Check X Features",
        "Word Embeddings: Word2Vec CBOW",
        "Word Embeddings: Word2Vec Skip Grams",
        "Word Embeddings: GloVe",
        "Word Embeddings: FastText",
        "Word Embeddings: Cosine Similarity",
        "Neural Networks: LSTMs Part 1",
        "Neural Networks: LSTMs Part 2 (Architecture)",
        "Neural Networks: LSTMs Part 3 (Deep Dive)",
        "Neural Networks: LSTMs Part 4 (Pointwise Operations)",
        "Neural Networks: LSTMs Part 5 (Forget Gate)",
        "Neural Networks: LSTMs Part 6 (Input Gate)",
        "Neural Networks: LSTMs Part 7 (Output Gate)",
        "Neural Networks: LSTMs Part 8 (Practicals #1)",
        "Neural Networks: LSTMs Part 9 (Practicals #2)",
        "Neural Networks: LSTMs Part 10 (Practicals #3)",
        "Neural Networks: GRU Part 1",
        "Neural Networks: GRU Part 2",
        "Neural Networks: GRU Part 3 (Reset Gate)",
        "Neural Networks: GRU Part 4 (Update Gate)",
        "Neural Networks: GRU Part 5 (Practicals)",
        "Neural Networks: Bi-Directional LSTMs",
      ],
    },
    {
      id: "transformers-gen-ai",
      title: "Transformers & Generative AI",
      topics: [
        "Transformer Types",
        "Introduction to Transformers",
        "Self Attention",
        "Encoder Architecture",
        "Contextual Embeddings",
        "Decoder Architecture",
        "Introduction to BERT",
        "Configurations of BERT",
        "BERT: Fine Tuning",
        "BERT: Pre Tuning (Masked LM)",
        "BERT: Input Embeddings",
        "ARLM vs AELM",
        "RoBERTa",
        "DistilBERT",
        "AlBERT",
        "Introduction to GPT (Decoder Only)",
        "GPT Architecture",
        "GPT Masked Multi Head Attention",
        "GPT Blocks",
        "GPT Training",
        "LLM Basics: Tokens",
        "LLM Basics: Context Window",
        "LLM Basics: Prompt",
        "LLM Basics: Prompt Engineering",
        "LLM Basics: Prompt Tuning",
        "LLM Basics: Prompt Structures",
        "RAGs: Introduction to RAG",
        "RAGs: What and Why",
        "RAGs: Use Cases",
        "RAGs: Paper Explanation",
        "RAGs: Architecture Explanation",
        "RAGs: Detailed Architecture Walkthrough",
        "RAGs: Practical Use Cases",
        "LangChain",
        "Introduction to Prompt Engineering",
        "Types of Prompting",
        "Few Shot Limitations",
        "Chain of Thoughts Prompting",
        "Vector Databases",
        "Vector Database vs Vector Index",
        "How Vector Databases Work",
        "Vector Database (Practicals)",
        "LSH",
      ],
    },
    {
      id: "deployment",
      title: "Deployment",
      topics: [
        "Deployment Basics",
        "Introduction to Flask",
        "Flask Basic App",
        "Model Building (Breast Cancer Prediction)",
        "Flask App (Breast Cancer Prediction)",
        "AWS",
        "AWS Deployment (Breast Cancer Prediction)",
      ],
    },
    {
      id: "data-engineering",
      title: "Data Engineering Basic",
      topics: [
        "Introduction to Data Engineering",
        "What is ETL",
        "ETL Tools",
        "What is Data Warehouse",
        "Benefits of Data Warehouse",
        "Data Warehouse Structure",
        "Why do we need Staging",
        "What are Data Marts",
        "Data Lake",
        "Data lake vs Data Warehouse",
        "Elements of Datalake",
      ],
    },
    {
      id: "capstone-projects",
      title: "Capstone Projects",
      topics: [
        "Medical Practitioner Chatbot",
        "Research RAG Chatbot",
        "Automated AI Claims Processing using Gen AI",
        "Multi PDF RAG Chatbot built on Web Scraped Data",
        "Sustainability Chatbot",
        "AI Career Coach",
        "Mental Health Chatbot",
        "Text-to-SQL Agents",
        "20+ ML/DL Projects",
      ],
    },
    {
      id: "interview-prep",
      title: "Interview Prep (NEW SECTION)",
      topics: [
        "ML Interview Prep Videos",
        "DL Interview Prep Videos",
        "NLP Interview Prep Videos",
        "Gen AI Interview Prep Videos",
      ],
    },
    {
      id: "final-assignment",
      title: "Final Assignment",
      topics: [
        "This is a graded assignment, a score of 70% and above guarantees you a course completion certificate, and a score of 80% and above guarantees an internship opportunity from Zep or their partner companies",
      ],
    },
  ]

  // Get the visible sections based on current state
  const visibleSections = showAll ? syllabusData : syllabusData.slice(0, 5);
  const remainingSections = syllabusData.length - 5;

  return (
    <section className="py-6 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive <span className="text-[#5473fc]">Course Syllabus</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Our curriculum is designed to take you from the fundamentals to advanced concepts in Data Science and AI.
            Explore the detailed syllabus below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="p-6 bg-[#5473fc] text-white flex items-center gap-3">
            <BookOpen className="h-6 w-6" />
            <h3 className="text-xl font-bold">Course Modules</h3>
          </div>

          <div className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {visibleSections.map((section) => (
                <AccordionItem key={section.id} value={section.id} className="border-b border-gray-200 py-2">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center text-left">
                      <span className="text-lg font-medium text-gray-900">{section.title}</span>
                      <span className="ml-2 text-sm text-gray-500">({section.topics.length} lessons)</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-4 pt-4 pb-2">
                      <ul className="space-y-3">
                        {section.topics.map((topic, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-700">
                            <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            {!showAll && remainingSections > 0 && (
              <div className="mt-6 text-center">
                <Button 
                  onClick={() => setShowAll(true)}
                  className="bg-white hover:bg-gray-50 text-[#5473fc] border border-[#5473fc] flex items-center gap-2"
                >
                  <span>View {remainingSections} More Modules</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
            )}
            
            {showAll && (
              <div className="mt-6 text-center">
                <Button 
                  onClick={() => setShowAll(false)}
                  className="bg-white hover:bg-gray-50 text-gray-600 border border-gray-300 flex items-center gap-2"
                >
                  <span>Show Less</span>
                  <ChevronUp className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>

          <div className="p-6 bg-gray-50 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-700 font-medium">Total Course Duration</p>
                <p className="text-gray-500">120+ hours of content</p>
              </div>
              <Button className="bg-[#5473fc] hover:bg-blue-700 text-white">Download Full Syllabus</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}