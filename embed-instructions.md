# Embedding Your Quiz in GoHighLevel

## Option 1: Build & Host Separately (Recommended)

### Step 1: Build Your Quiz
```bash
npm run build
```
This creates a `dist` folder with your production files.

### Step 2: Host Your Quiz
Upload the `dist` folder contents to:
- **Netlify** (free hosting)
- **Vercel** (free hosting) 
- **Your own hosting provider**

### Step 3: Embed in GoHighLevel
In your GoHighLevel page builder:

1. **Add Custom HTML Element**
2. **Insert this iframe code:**

```html
<iframe 
  src="https://your-quiz-domain.com" 
  width="100%" 
  height="800px" 
  frameborder="0"
  style="border: none; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">
</iframe>

<script>
// Auto-resize iframe based on content
window.addEventListener('message', function(e) {
  if (e.data.type === 'resize') {
    document.querySelector('iframe').style.height = e.data.height + 'px';
  }
});
</script>
```

### Step 4: Make it Responsive
Add this CSS to your GoHighLevel page:

```css
<style>
.quiz-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.quiz-container iframe {
  width: 100%;
  min-height: 600px;
  border: none;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .quiz-container {
    padding: 10px;
  }
  .quiz-container iframe {
    min-height: 500px;
  }
}
</style>

<div class="quiz-container">
  <iframe src="https://your-quiz-domain.com"></iframe>
</div>
```

## Option 2: Direct HTML Embed (Advanced)

### Step 1: Build for Inline Embedding
```bash
npm run build
```

### Step 2: Extract Built Files
1. Copy contents of `dist/index.html`
2. Copy CSS from `dist/assets/*.css`
3. Copy JS from `dist/assets/*.js`

### Step 3: Create GoHighLevel Custom HTML
```html
<!-- CSS -->
<style>
/* Paste your built CSS here */
</style>

<!-- HTML -->
<div id="root"></div>

<!-- JavaScript -->
<script>
/* Paste your built JavaScript here */
</script>
```

## Option 3: Popup/Modal Integration

### For Popup Quiz in GoHighLevel:
```html
<!-- Trigger Button -->
<button id="quiz-trigger" class="quiz-btn">
  Take Authenticity Assessment
</button>

<!-- Modal Container -->
<div id="quiz-modal" class="quiz-modal" style="display: none;">
  <div class="quiz-modal-content">
    <span class="quiz-close">&times;</span>
    <iframe 
      src="https://your-quiz-domain.com" 
      width="100%" 
      height="600px" 
      frameborder="0">
    </iframe>
  </div>
</div>

<style>
.quiz-modal {
  position: fixed;
  z-index: 10000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
}

.quiz-modal-content {
  background-color: white;
  margin: 2% auto;
  padding: 0;
  border-radius: 12px;
  width: 90%;
  max-width: 1000px;
  height: 90%;
  position: relative;
}

.quiz-close {
  position: absolute;
  right: 15px;
  top: 15px;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  z-index: 10001;
  background: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.quiz-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

.quiz-btn:hover {
  transform: translateY(-2px);
}
</style>

<script>
document.getElementById('quiz-trigger').onclick = function() {
  document.getElementById('quiz-modal').style.display = 'block';
}

document.querySelector('.quiz-close').onclick = function() {
  document.getElementById('quiz-modal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('quiz-modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}
</script>
```

## Integration with GoHighLevel Features

### 1. Lead Capture Integration
Add this to capture quiz results:

```javascript
// Add to your quiz completion
window.parent.postMessage({
  type: 'quiz_completed',
  data: {
    email: userEmail,
    type: authenticityType,
    score: totalScore
  }
}, '*');
```

### 2. GoHighLevel Webhook Integration
```javascript
// Send results to GoHighLevel
fetch('YOUR_GHL_WEBHOOK_URL', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: userEmail,
    authenticity_type: result.category,
    total_score: result.totalScore,
    dimension_scores: result.dimensionScores
  })
});
```

## Quick Start Recommendation

1. **Deploy to Netlify** (5 minutes):
   - Connect your GitHub repo
   - Auto-deploy on changes
   - Get free HTTPS domain

2. **Add to GoHighLevel** (2 minutes):
   - Use iframe embed method
   - Add responsive CSS
   - Test on mobile

3. **Customize Integration**:
   - Add lead capture
   - Connect to your CRM
   - Set up follow-up sequences

This approach gives you maximum flexibility while keeping your quiz fast and professional!