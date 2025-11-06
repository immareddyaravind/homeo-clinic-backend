**✨ Homeo Clinic Admin ✨**

🌿 Project Overview
Homeo Clinic Admin is an advanced, AI-powered administrative system built to modernize clinic management for homeopathic and general healthcare centers. Developed using Laravel, PHP, and Bootstrap, it offers a complete digital ecosystem to manage appointments, patients, and medical records  all through a clean, dynamic, and responsive interface.

At its core, the platform introduces a revolutionary AI Medical Assistant, a first-of-its-kind integration that assists doctors by analyzing patient symptoms, generating consultation insights, and suggesting differential diagnoses. This intelligent automation not only enhances efficiency but also improves decision-making accuracy in clinical practice.

The admin dashboard provides real-time visibility into clinic operations - including today’s online and manual appointments, total patients, and trending symptoms - empowering doctors to make data-driven decisions. Every module, from dynamic banner control to patient management, is designed for flexibility and ease of use, allowing seamless updates directly from the backend without any coding effort.

With role-based access control (RBAC), secure data handling, and intuitive navigation, Homeo Clinic Admin serves as a one-stop solution for clinics aiming to digitize their operations while leveraging the power of AI for smarter healthcare management.

<img width="246" height="205" alt="image" src="https://github.com/user-attachments/assets/4ebf906c-651c-46f0-9724-c429d19ea228" />
<img width="276" height="206" alt="image" src="https://github.com/user-attachments/assets/cb6ff1ef-bade-4162-937e-259556ec6058" />
<img width="250" height="210" alt="image" src="https://github.com/user-attachments/assets/6db4bb99-6ed0-49f9-9527-b83a0551c6b4" />
<img width="218" height="199" alt="image" src="https://github.com/user-attachments/assets/e34db8cb-0d11-46f8-a91a-37ab66f76138" />
<img width="230" height="226" alt="image" src="https://github.com/user-attachments/assets/9a71fdeb-e27d-46a0-83f6-9d1c3d2a5cd1" />
<img width="238" height="226" alt="image" src="https://github.com/user-attachments/assets/b9f395e3-8f41-4f32-9051-8181f9e795ce" />
<img width="191" height="88" alt="image" src="https://github.com/user-attachments/assets/f90f1a2c-e5cd-4255-a9d8-0f49616f75b6" />
<img width="332" height="267" alt="image" src="https://github.com/user-attachments/assets/70a49413-62e4-4980-ac0c-51c3f8deea09" />

-----------------------------------------------------------------------------------------------------------------------------------------------------------

**🖼️ Features, Screenshots & Visuals**

---------------------------------------------------------------**🩺ADMIN DASHBOARD🩺** -------------------------------------------------------------
This is the Admin Dashboard, where the doctor can view key statistics such as today’s online bookings, total appointments, and total manual appointments. It also displays the overall number of patients and the total online bookings recorded so far. From the dashboard, the doctor can directly navigate to the Patients page. Additionally, the dashboard shows the most common symptoms recorded today, helping the doctor analyze which cases are appearing more frequently

<img width="1279" height="671" alt="image" src="https://github.com/user-attachments/assets/131c111f-1eba-47be-8f59-208ce279f965" />

--------------------------------------------------------**🏠HOME BANNERS DYNAMIC CONTROL🏠**---------------------------------------------------

The admin has full control over the content, including titles, banners, and images. They can add as many items as needed, delete existing ones, or manage their status by saving them as drafts or publishing them. All published content is dynamically reflected in the frontend UI.

<img width="1276" height="665" alt="image" src="https://github.com/user-attachments/assets/53de95a6-6aee-4e00-a2ee-1f6d9f6ad8d1" />

------------------------------------------------------------------ **📅APPOINTMENTS📅**  ----------------------------------------------------------------

Appointments can be added manually by the admin or booked online by patients through the frontend. All bookings will be dynamically displayed in the admin panel, showing the doctor assigned to each appointment. The admin can click on ‘Patient View’ in the Appointments section to be redirected to a detailed page showing the patient’s visit history, symptoms, and medical notes provided by the doctor.

<img width="1280" height="671" alt="image" src="https://github.com/user-attachments/assets/ed626246-c79c-4fd6-9c58-169f65068503" />

------------------------------------------------------------------ **👩‍⚕️PATIENTS MANAGEMENT👩‍⚕️** -----------------------------------------------------

The admin or doctor can view the complete list of patients and quickly search for any patient’s record. If a patient visits manually without an online booking, the admin or doctor can directly add a new patient entry. If the patient already exists in the system, they can simply search by name and update the record by adding a new visit history.

<img width="1280" height="673" alt="image" src="https://github.com/user-attachments/assets/61100efb-289e-43b7-ae33-ed1654036e94" />

----------------------------------------------------------- **🧠Patient History with AI Medical Assistant🧠**  ------------------------------------------

This is the Patient History page. If a patient has visited before, all their previous records are displayed here - including symptoms, medical notes, and visit dates — helping the doctor understand their case better and prescribe more accurate treatment.

This page is integrated with an AI-Powered Medical Assistant, a groundbreaking features never used before in such systems, The AI supports the doctor by analyzing symtoms, suggesting possible causes, summarising medical notes and identifying trends in the patient's health over time.This innovation enables smarter clinical desicion-making and significantly improves the patient care.

<img width="1280" height="668" alt="image" src="https://github.com/user-attachments/assets/7200cd4f-675c-473e-80e7-47c35d945b6c" />

<img width="1275" height="666" alt="image" src="https://github.com/user-attachments/assets/9d45778e-9bf5-47f9-b1ce-606491515062" />

-----------------------------------------------------------------------------------------------------------------------------------------------------------

**🚀 Key Features**

**🧩 Dynamic UI Control**
Manage banners, sections, and content directly from the backend.
No code-level changes required - all updates are dynamically visible on the frontend.

**🤖 Intelligent AI Medical Assistant**
Integrated AI bot for initial triage and symptom analysis.
Assists doctors in compiling consultation notes and suggesting differential diagnoses.

**👨‍⚕️ Complete Patient Management**
Secure storage and retrieval of all patient data, including medical history and consultation logs.
Advanced search and filtering for quick record access.

**🗓️ Seamless Appointment Scheduling**
Manage bookings, cancellations, and rescheduling.
Calendar view for clear visibility.
Automated reminders for doctors and patients.

**🔐 Role-Based Access Control (RBAC)**
Secure login and role management for Admin, Doctor, and Receptionist.
Access rights and permissions defined per role.

**💻 Modern and Responsive UI**
Clean and intuitive design built with Bootstrap.
Works seamlessly on desktops, tablets, and mobile devices.

----------------------------------------------------------------------------------------------------------------------------------------------------------------
⚙️ Installation & Setup

**🧰 Requirements 🧰**

PHP (e.g., PHP 8.1+) 

Composer

Laravel (The project is built on a specific version, check composer.json)

MySQL / MariaDB

Node.js & npm (for frontend assets)

**Getting Started**

---------------------Clone the Repository-----------------------------

git clone https://github.com/immareddyaravind/homeo-clinic-backend.git

cd homeo-clinic-backend

----------------------Install Dependencies----------------------------

composer install

----------------------Environment Setup-------------------------------

cp .env.example .env

Crucial: Configure your database details (DB_*) and your AI service API key (AI_MEDICAL_ASSISTANT_KEY) in the .env file.

Update database credentials and keys

-----------------------------------------------------------------------

Run Migrations

-----------------------------------------------------------------------

php artisan migrate

------------------------------------------------------------------------

Start the Server :  php artisan serve

------------------------------------------------------------------------

**🧑‍💻 Usage**

Access the application at http://127.0.0.1:8000/login (or your chosen domain).

--------------------------------------------------------------------------------

**🧠 Future Enhancements 🧠**

AI-based Prescription Generator

Automated Follow-Up Reminders

Multi-Language Support

Doctor-Patient Chat System

--------------------------------------------------------------------------------

**📞 Contact 📞**

Email: immareddyaravind@gmail.com

--------------------------------------------------------------------------------

**🏥 Conclusion 🏥**

Homeo Clinic Admin combines AI intelligence with secure, scalable infrastructure to provide an efficient, data-driven solution for clinics. It empowers doctors and admin staff to manage patient care effectively while leveraging AI insights for smarter healthcare decisions.

--------------------------------------------------------------------------------

© 2025 Immareddy Aravind
All rights reserved.

--------------------------------------------------------------------------------
