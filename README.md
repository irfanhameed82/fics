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
