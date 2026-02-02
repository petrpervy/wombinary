# Wombinary - Deployment Guide

## Changes Made (Feb 2, 2026)

✅ **Fixed Gemini watermarks** on hero and chatbot background images
✅ **Increased logo size** from 450px to 600px on hero page
✅ **Connected OpenAI API** for real AI-powered word generation

---

## How to Deploy to Vercel

### Step 1: Get Your OpenAI API Key

1. Go to https://platform.openai.com/api-keys
2. Click "Create new secret key"
3. Copy the key (starts with `sk-...`)
4. **IMPORTANT:** Save this key somewhere safe - you can't see it again!

### Step 2: Push Changes to Git

```bash
cd /path/to/wombinary
git add .
git commit -m "Fix watermarks, increase logo, connect OpenAI API"
git push origin main
```

### Step 3: Update Vercel Environment Variable

**Option A: Via Vercel Dashboard (Recommended)**

1. Go to https://vercel.com/dashboard
2. Click on your `wombinary` project
3. Go to **Settings** → **Environment Variables**
4. Add a new variable:
   - **Name:** `OPENAI_API_KEY`
   - **Value:** Your OpenAI API key (the one starting with `sk-...`)
   - **Environment:** Select all environments (Production, Preview, Development)
5. Click **Save**
6. Go to **Deployments** tab
7. Click **...** (three dots) on the latest deployment
8. Click **Redeploy**

**Option B: Via Vercel CLI**

```bash
# Install Vercel CLI if you don't have it
npm install -g vercel

# Login to Vercel
vercel login

# Add environment variable
vercel env add OPENAI_API_KEY

# When prompted:
# - Paste your OpenAI API key
# - Select: Production, Preview, Development (all)

# Deploy
vercel --prod
```

### Step 4: Verify It Works

1. Visit your live site: https://wombinary.vercel.app (or your custom domain)
2. Go to the chat section
3. Type a message like "I'm feeling overwhelmed and anxious"
4. You should see AI-generated portmanteau words with definitions

---

## Troubleshooting

### "Failed to generate response" error

- Check that the `OPENAI_API_KEY` environment variable is set correctly in Vercel
- Make sure you redeployed after adding the env variable
- Check the Vercel function logs for errors

### Watermarks still visible

- The images have been fixed in the repo
- Clear your browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- If still visible, check that you're viewing the latest deployment

### Logo size unchanged

- Clear browser cache
- Verify the deployment includes the latest CSS changes
- Check styles.css line 230 should show `width: 600px`

---

## Files Changed

- `assets/headbackground.png` - Cropped to remove Gemini watermark
- `assets/img4.jpg` - Cropped to remove Gemini watermark
- `styles.css` - Increased `.hero-logo` width from 450px to 600px
- `app.js` - Added async OpenAI API integration with fallback
- `api/chat.js` - NEW: Vercel serverless function for OpenAI API calls
- `vercel.json` - NEW: Vercel configuration

---

## Cost Considerations

- OpenAI API costs approximately $0.0001-0.0003 per message (using gpt-4o-mini)
- Estimated cost: ~$1-3 per 1000 messages
- Set up billing alerts in OpenAI dashboard to monitor usage

---

## Next Steps (Phase 2)

- Automatic word collection to dictionary
- User accounts and saved sessions
- Enhanced word generation with more context
- Integration with form submission system
