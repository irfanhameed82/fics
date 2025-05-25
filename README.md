## ✅ Development to Production Checklist

### 1. Environment Variables & MySQL Configuration

- Set up the necessary environment variables for database connection in a `.env.local` file.
- Configure MySQL appropriately in your local or production environment. Ensure credentials and database URLs match your setup.

Example `.env.local`:
```env
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
DB_PORT=your_database_port
```

---

### 2. Video Assets (Cloudinary)

- All video files used in the application are stored in **Cloudinary** under the "ishaq account".
- Due to GitHub's 100MB file size limit, large videos are **not** stored in the repository.
- Crate a Table in MySQL database,

| Video Type        | File Size | Description              |
|-------------------|-----------|--------------------------|
| Introductory Video| 345 MB    | Main welcome introduction|
| Success Video     | 165 MB    | Post-success display     |

These videos are accessed via their **Cloudinary links**.

---

### 3. Getting Started (Installation & Setup)

To run the project locally or deploy it to production:

1. **Clone the Repository**
```bash
git clone <repository-url>
cd <project-folder>
```

2. **Set Environment Variables**
   - Add a `.env.local` file with appropriate keys as described above.

3. **Install Dependencies**
```bash
npm install
```

4. **Run the Development Server**
```bash
npm run dev
```

5. **Build for Production (Optional)**
```bash
npm run build
```

---

## 🔧 Notes

- Ensure Node.js and npm are installed in your environment.
- Videos will be provided for storage in your environment. For now, due to GitHub limitations, they are stored in the **"ishaq" Cloudinary account**.

---

For any questions or clarifications, please feel free to reach out.

---

**Project by:** Muhammad Ishaq  
**Email:** muhammadishaq@mohdishaq.com  
**Technologies:** Next.js, MySQL, Cloudinary, Node.js, TypeScript, Tailwind CSS, Shadcn
# Table requires
## International
```bash
CREATE TABLE international_applications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  idea_name VARCHAR(255) NOT NULL,
  slogan VARCHAR(255) NOT NULL,
  startup_domain VARCHAR(255) NOT NULL,
  startup_domain_other VARCHAR(255) DEFAULT NULL,
  abstract TEXT NOT NULL,
  unmet_need TEXT NOT NULL,
  benefit TEXT DEFAULT NULL,
  how_solution_works TEXT NOT NULL,
  who_are_competitors TEXT NOT NULL,
  entry_date DATE DEFAULT NULL,
  entry_time TIME DEFAULT NULL,
  status_of_project VARCHAR(100) DEFAULT NULL,
  publish TINYINT(1) DEFAULT NULL,
  shortlist TINYINT(1) DEFAULT 0,
  shortlist_stage2 TINYINT(1) DEFAULT NULL,
  display_stage2 TINYINT(1) DEFAULT NULL,
  shortlist_stage3 TINYINT(1) DEFAULT NULL,
  display_stage3 TINYINT(1) DEFAULT NULL,
  interschool_idea VARCHAR(10) NOT NULL,
  need_expertises TEXT NOT NULL,
  project_is_fyp VARCHAR(10) NOT NULL,
  previously_applied_in_fics VARCHAR(10) NOT NULL,
  previously_participating_year YEAR DEFAULT NULL,
  previously_applied_project_title VARCHAR(255) DEFAULT NULL,
  previously_stage_reached VARCHAR(255) DEFAULT NULL,
  participate_in_other_competition VARCHAR(10) DEFAULT NULL,
  name_of_competition VARCHAR(255) DEFAULT NULL,
  prize_won VARCHAR(255) DEFAULT NULL,
  beneficiary VARCHAR(255) DEFAULT NULL,
  panel VARCHAR(255) DEFAULT NULL
);

CREATE TABLE international_supervisors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  application_id INT NOT NULL,
  name_of_supervisor VARCHAR(255) NOT NULL,
  supervisor_email VARCHAR(255) NOT NULL,
  supervisor_contact_number VARCHAR(50) DEFAULT NULL,
  supervisor_designation VARCHAR(255) NOT NULL,
  supervisor_uni VARCHAR(255) NOT NULL,
  supervisor_uni_school VARCHAR(255) NOT NULL,
  supervisor_department VARCHAR(255) NOT NULL,
  expertises_detail TEXT DEFAULT NULL,
  FOREIGN KEY (application_id) REFERENCES international_applications(id) ON DELETE CASCADE
);

CREATE TABLE international_team_members (
  id INT AUTO_INCREMENT PRIMARY KEY,
  application_id INT NOT NULL,
  supervisor_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  university VARCHAR(255) NOT NULL,
  school VARCHAR(255) NOT NULL,
  year VARCHAR(50) NOT NULL,
  degree VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  mobile VARCHAR(50) DEFAULT NULL,
  gender VARCHAR(20) NOT NULL,
  province VARCHAR(255) DEFAULT NULL,
  cgpa DECIMAL(4,2) DEFAULT NULL,
  other_uni VARCHAR(255) DEFAULT NULL,
  other_nust_school VARCHAR(255) DEFAULT NULL,
  international_student VARCHAR(10) NOT NULL,
  internationalcountry VARCHAR(255) DEFAULT NULL,
  country VARCHAR(255) DEFAULT NULL,
  FOREIGN KEY (application_id) REFERENCES international_applications(id) ON DELETE CASCADE,
  FOREIGN KEY (supervisor_id) REFERENCES international_supervisors(id) ON DELETE CASCADE
);
```

## National 
```bash
CREATE TABLE domestic_applications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  idea_name VARCHAR(255) NOT NULL,
  slogan VARCHAR(255) NOT NULL,
  startup_domain VARCHAR(255) NOT NULL,
  startup_domain_other VARCHAR(255),
  abstract TEXT NOT NULL,
  unmet_need TEXT NOT NULL,
  benefit TEXT,
  how_solution_works TEXT NOT NULL,
  who_are_competitors TEXT NOT NULL,
  entry_date DATE NOT NULL,
  entry_time TIME NOT NULL,
  status_of_project VARCHAR(100),
  publish BOOLEAN DEFAULT FALSE,
  shortlist BOOLEAN DEFAULT FALSE,
  shortlist_stage2 BOOLEAN,
  display_stage2 BOOLEAN,
  shortlist_stage3 BOOLEAN,
  display_stage3 BOOLEAN,
  interschool_idea ENUM('yes', 'no') NOT NULL,
  need_expertises ENUM('yes', 'no') NOT NULL,
  project_is_fyp ENUM('yes', 'no') NOT NULL,
  previously_applied_in_fics ENUM('yes', 'no') NOT NULL,
  previously_participating_year VARCHAR(10),
  previously_applied_project_title VARCHAR(255),
  previously_stage_reached VARCHAR(100),
  participate_in_other_competition ENUM('yes', 'no'),
  name_of_competition VARCHAR(255),
  prize_won VARCHAR(255),
  beneficiary TEXT,
  panel VARCHAR(50)
);
CREATE TABLE domestic_supervisors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  application_id INT NOT NULL,
  name_of_supervisor VARCHAR(255) NOT NULL,
  supervisor_email VARCHAR(255) NOT NULL,
  supervisor_contact_number VARCHAR(50),
  supervisor_designation VARCHAR(100) NOT NULL,
  supervisor_uni VARCHAR(255) NOT NULL,
  supervisor_uni_school VARCHAR(255) NOT NULL,
  supervisor_department VARCHAR(255) NOT NULL,
  expertises_detail TEXT,
  FOREIGN KEY (application_id) REFERENCES domestic_applications(id) ON DELETE CASCADE
);
CREATE TABLE domestic_team_members (
  id INT AUTO_INCREMENT PRIMARY KEY,
  application_id INT NOT NULL,
  supervisor_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  university VARCHAR(255) NOT NULL,
  school VARCHAR(255) NOT NULL,
  year VARCHAR(100) NOT NULL,
  degree VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  mobile VARCHAR(50),
  gender ENUM('male', 'female', 'other') NOT NULL,
  province VARCHAR(100),
  cgpa DECIMAL(4,2),
  other_uni VARCHAR(255),
  other_nust_school VARCHAR(255),
  international_student ENUM('yes', 'no') NOT NULL,
  internationalcountry VARCHAR(100),
  country VARCHAR(100),
  FOREIGN KEY (application_id) REFERENCES domestic_applications(id) ON DELETE CASCADE,
  FOREIGN KEY (supervisor_id) REFERENCES domestic_supervisors(id) ON DELETE CASCADE
);
```
