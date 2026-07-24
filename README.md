# 🎱 The 51st Ball – Quantum Randomness Auditor

The 51st Ball is a web-based analytics platform that evaluates the randomness of historical number draw datasets using statistical analysis and quantum-inspired techniques. It provides visual insights, randomness validation, and statistically balanced candidate recommendations through an interactive dashboard.

---

## ❓ Problem Statement

Verifying the fairness and randomness of historical number draw datasets is challenging through manual inspection. This project automates statistical validation, identifies patterns and anomalies, and presents actionable insights through an intuitive dashboard.

---

## ✨ Features

- **CSV Upload** – Import historical number draw datasets for analysis.
- **Frequency Analysis** – Displays the occurrence frequency of each number.
- **Chi-Square Test** – Evaluates how closely the dataset follows a uniform distribution.
- **Hot & Cold Numbers** – Identifies the most and least frequently occurring numbers.
- **Odd & Even Analysis** – Analyzes the balance between odd and even values.
- **Sum Distribution** – Examines the distribution of total values in each draw.
- **Randomness Score** – Generates an overall randomness rating for the dataset.
- **Audit Report** – Summarizes statistical findings and randomness observations.
- **Possible Outcome Prediction** – Recommends statistically balanced candidate combinations based on historical trends.
- **Quantum Explore** – Explores candidate combinations using quantum-inspired techniques.
- **Interactive Dashboard** – Presents analytics through responsive charts and visualizations.

---

## ⚛️ Quantum Principles Used

- **Quantum Superposition (Inspired)** – Explores multiple candidate combinations before selecting the most suitable ones.
- **Quantum Randomness** – Uses principles of unpredictability as inspiration for randomness evaluation.
- **Probability-Based Candidate Selection** – Ranks candidate combinations using statistical probability.
- **Measurement Analogy** – Selects the highest-ranked candidates after analysis, similar to quantum measurement.
- **Statistical Entropy** – Measures the unpredictability of historical datasets.

---

## 🛠️ Tech Stack

### Backend
- FastAPI
- PostgreSQL
- SQLAlchemy
- Alembic
- Pandas
- SciPy
- scikit-learn

### Frontend
- HTML5
- CSS3
- JavaScript (ES6)

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/<your-username>/the-51st-ball.git
cd the-51st-ball
```

Start the backend:

```bash
uvicorn app.main:app --reload
```

Open the frontend using a local server (e.g., VS Code Live Server).

---

## 📂 Project Structure

```
the-51st-ball/
├── backend/
├── frontend/
├── docs/
└── README.md
```

---

## 📌 Future Enhancements

- AI-assisted randomness insights
- Advanced statistical validation methods
- Exportable audit reports
- Enhanced visualization dashboard
- Cloud deployment and authentication

---

## 📄 License

This project is licensed under the **MIT License**.