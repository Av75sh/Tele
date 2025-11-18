

# 📘 Telemedicine Platform – README

A full-stack telemedicine platform designed to deliver accessible healthcare to rural and low-bandwidth regions.
Includes **online consultations**, **medicine ordering**, **AI symptom checking**, and **digital health records**.

---

## 🚀 Features

### 👤 User Roles

* **Guest** – browse doctors, medicines, features
* **Patient** – book appointments, upload reports, video call doctors
* **Doctor** – manage appointments, conduct consultations, upload prescriptions

---

## 🏥 Core Modules

### **1. Appointment Booking**

* Search doctors by specialization, availability, language
* Book slots with a calendar-based UI
* Both doctor & patient dashboards show appointments

### **2. Video Consultation**

* WebRTC-based video call UI (mic/camera toggle, end call)
* Doctor can view reports and take notes

### **3. AI Symptom Checker**

* Chat-style interface
* Suggests probable causes & recommended department

### **4. Medicine Store**

* Search medicines
* Real-time stock availability
* Cart & checkout flow UI

### **5. Digital Health Records**

* View past prescriptions, uploaded reports, doctor notes
* Offline-ready (for rural areas)

### **6. Medical Report Upload**

* Upload image/PDF
* Preview & share with doctor

---

## 🌐 Multilingual Support

* Built-in languages: **English, Hindi, Punjabi**
* Language selector in Navbar + Footer
* i18n-ready structure

---

## 🛠️ Tech Stack (Frontend)

* **React.js** / Next.js
* **TailwindCSS** for styling
* **React Router** for navigation
* **Context API / Redux Toolkit**
* **Axios** for API calls
* **WebRTC UI** for video consultations

---

## 📁 Project Structure

```
src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── Footer.jsx
 │    ├── DoctorCard.jsx
 │    ├── AppointmentCard.jsx
 │    ├── MedicineCard.jsx
 │    ├── FileUpload.jsx
 │    └── VideoToolbar.jsx
 │
 ├── pages/
 │    ├── Landing/
 │    ├── Auth/
 │    ├── PatientDashboard/
 │    ├── DoctorDashboard/
 │    ├── Medicines/
 │    ├── AI/
 │    └── Contact/
 │
 ├── context/
 ├── hooks/
 ├── utils/
 ├── assets/
 └── styles/
```

Screenshots
![Web](/frontend/src/images/img1.png)
![Web](/frontend/src/images/img2.png)
![Web](/frontend/src/images/img3.png)
![Web](/frontend/src/images/img4.png)
![Web](/frontend/src/images/img5.png)
![Web](/frontend/src/images/img6.png)

---

## 🧠 System Flow

### **Patient Workflow**

1. Register/Login
2. Browse doctors
3. Book appointment
4. Video consultation
5. Receive prescription
6. Order medicine
7. Store health records

### **Doctor Workflow**

1. Login
2. Review appointments
3. Start consultation
4. View reports
5. Upload prescription

---

## 🔐 Authentication (Backend-Ready)

* JWT-based auth (HTTP-only cookies)
* Protected routes for doctors & patients
* Guest-level browsing

---

## 🏗️ Installation

### **1. Clone repository**

```bash
git clone https://github.com/your-username/telemedicine.git
cd telemedicine
```

### **2. Install dependencies**

```bash
npm install
```

### **3. Start development server**

```bash
npm run dev
```

---
