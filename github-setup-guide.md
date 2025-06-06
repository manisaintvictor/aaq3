# How to Push Your Quiz to GitHub

## Step 1: Create a GitHub Account
1. Go to [github.com](https://github.com)
2. Click "Sign up" if you don't have an account
3. Choose a username and create your account

## Step 2: Create a New Repository
1. **Click the "+" icon** in the top right corner
2. **Select "New repository"**
3. **Repository name:** `authenticity-quiz` (or your preferred name)
4. **Description:** "Comprehensive Authenticity & Self-Sabotage Assessment"
5. **Make it Public** (so Netlify can access it)
6. **Check "Add a README file"**
7. **Click "Create repository"**

## Step 3: Download Your Code
Since you're working in Bolt, you need to download your project files:

1. **Right-click in the file explorer** (left sidebar)
2. **Select "Download Project"** or use the download option
3. **Extract the ZIP file** to a folder on your computer

## Step 4: Upload to GitHub (Easy Method)
1. **Go to your new repository** on GitHub
2. **Click "uploading an existing file"** link
3. **Drag and drop ALL your project files** (except node_modules if present)
4. **Add commit message:** "Initial commit - Authenticity Quiz"
5. **Click "Commit changes"**

## Step 5: Alternative - Use Git Commands (Advanced)
If you have Git installed on your computer:

```bash
# Navigate to your project folder
cd path/to/your/quiz-folder

# Initialize Git
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Authenticity Quiz"

# Add GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/authenticity-quiz.git

# Push to GitHub
git push -u origin main
```

## Step 6: Connect to Netlify
1. **Go to [netlify.com](https://netlify.com)**
2. **Sign up/Login**
3. **Click "Add new site"**
4. **Choose "Import an existing project"**
5. **Connect to GitHub**
6. **Select your quiz repository**
7. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
8. **Click "Deploy site"**

## Step 7: Automatic Deployments
Now whenever you:
- Make changes to your code
- Push to GitHub
- Netlify automatically rebuilds and deploys

## Benefits of GitHub + Netlify:
✅ **Version control** - Track all changes
✅ **Automatic deployments** - Push code, site updates
✅ **Collaboration** - Others can contribute
✅ **Backup** - Your code is safely stored
✅ **Professional setup** - Industry standard workflow

## Quick Tips:
- **Keep your repo public** for free Netlify deployments
- **Use descriptive commit messages** when making changes
- **Create branches** for testing new features
- **Use GitHub Issues** to track bugs or improvements

## File Structure to Upload:
```
authenticity-quiz/
├── src/
├── public/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── netlify.toml
└── README.md
```

## Next Steps:
1. Push your code to GitHub
2. Connect Netlify to your GitHub repo
3. Get your live URL
4. Embed in GoHighLevel using the iframe method

Need help with any of these steps? Let me know!