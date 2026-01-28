# Dashboard & Account UI (React + TypeScript)

This project is a test assignment focused on building a dashboard and account interface based on provided screenshots.  
The goal was to demonstrate clean UI layout, proper component architecture, state handling, and TypeScript usage.

---

## 🚀 Tech Stack

- **React**
- **TypeScript**
- **React Router**
- **Tailwind CSS**
- **Vite**

---

## 🧩 Architecture Overview

The project follows a clear separation of concerns:

- **Pages** – compose screens and provide data
- **Widgets** – reusable business blocks (tables, cards, charts)
- **Shared** – UI components, types, constants
- **Data** – mock JSON data (can be easily replaced with API)

src/
├── pages/ # Page-level components (Dashboard, Account)
├── widgets/ # Feature blocks (Policies, Communication, Winnability)
├── shared/ # UI components, types, constants
├── data/ # Mock JSON data

All widgets receive data via **props** — no direct data imports inside UI blocks.

---

## 📄 Implemented Screens

### Dashboard

- Navigation bar
- Work Queue with tabs and table
- Portfolio Goals with progress indicators
- Quick Actions
- Market Intelligence (expandable news)
- Accounts table with statuses and visual indicators

### Account Page

- Account header
- Performance metrics
- Policies block with table
- Communication section (messages + replies)
- Winnability block with score, factors, and recommendations

---

## 🔄 Interactivity

- Tab switching
- Active state highlighting
- Expand / collapse sections
- Replying to messages (local state)
- Dynamic status indicators

---

## 📊 Data Handling

- Mock data stored in JSON files
- Strict TypeScript typing (`no any`)
- Typed casting only at page level
- Widgets are data-agnostic

---

## 🤖 AI & Assistive Tools

AI tools were used **only as assistance**, not as a replacement for architecture or logic decisions.

Examples:

- GPT-based assistance for structure and code review
- Manual refinement of components and layouts

All final code structure and logic decisions were made manually.

---

## 📝 Notes

- The project is responsive (desktop / tablet)
- Focus was placed on readability, scalability, and realistic enterprise UI patterns
- Mock data can be easily replaced with real API calls

---

## ✅ Conclusion

This project demonstrates:

- Clean React architecture
- Strong TypeScript usage
- Reusable component design
- Realistic dashboard UI patterns
