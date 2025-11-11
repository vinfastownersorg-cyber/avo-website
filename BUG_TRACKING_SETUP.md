# Bug Tracking System Setup Guide

## Recommended Solution: GitHub Issues

For the VinFast Owners website, I recommend using **GitHub Issues** as your bug tracking system. Here's why:

### Advantages
- **Free and robust**: No cost for public repositories
- **Built-in integration**: Easy to connect with your website
- **Community-friendly**: Users can see existing issues and contribute
- **Labels and milestones**: Organize bugs by category, priority, and vehicle model
- **Notifications**: Automatic email notifications for new issues
- **API access**: Can be integrated directly into the website form
- **Search and filter**: Easy to find specific issues
- **Version control**: Linked to your code repository

## Setup Instructions

### Option 1: GitHub Issues (Recommended)

#### Step 1: Create a GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `vinfastowners-issues` or `vinfastowners-bugs`
3. Make it **public** so community members can report issues
4. Add a README explaining how to report bugs

#### Step 2: Set Up Issue Templates
Create issue templates for different bug types:

**File: `.github/ISSUE_TEMPLATE/vehicle-bug.md`**
```markdown
---
name: Vehicle Bug Report
about: Report a bug or issue with your VinFast vehicle
title: '[VEHICLE] '
labels: vehicle-issue
assignees: ''
---

**Vehicle Model**
- [ ] VF8 2025
- [ ] VF8 2024
- [ ] VF8 2023
- [ ] VF9 2025
- [ ] VF9 2024

**Issue Category**
- [ ] Electrical
- [ ] Charging
- [ ] ADAS
- [ ] Infotainment
- [ ] Mechanical
- [ ] Other

**Description**
A clear and concise description of what the bug is.

**Steps to Reproduce**
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected Behavior**
What you expected to happen.

**Actual Behavior**
What actually happened.

**Additional Information**
- VIN (last 6 digits):
- Software Version:
- Date/Time of Issue:
- Photos/Videos (if applicable):
```

**File: `.github/ISSUE_TEMPLATE/website-bug.md`**
```markdown
---
name: Website Bug Report
about: Report a bug or issue with the VinFast Owners website
title: '[WEBSITE] '
labels: website-issue
assignees: ''
---

**Bug Description**
A clear description of the website issue.

**Steps to Reproduce**
1. Navigate to '...'
2. Click on '....'
3. See error

**Expected Behavior**
What should happen.

**Actual Behavior**
What actually happens.

**Browser Information**
- Browser: [e.g., Chrome, Safari, Firefox]
- Version: [e.g., 120]
- Device: [e.g., Desktop, Mobile]
- OS: [e.g., Windows, macOS, iOS]

**Screenshots**
If applicable, add screenshots.
```

#### Step 3: Configure Labels
Set up labels for easy categorization:
- `vehicle-issue` - Issues with vehicles
- `website-issue` - Issues with the website
- `vf8` - VF8 specific
- `vf9` - VF9 specific
- `electrical` - Electrical problems
- `charging` - Charging issues
- `adas` - ADAS related
- `infotainment` - Infotainment system
- `mechanical` - Mechanical issues
- `critical` - Critical/safety issues
- `enhancement` - Feature requests
- `duplicate` - Duplicate issues
- `wontfix` - Won't be fixed
- `help-wanted` - Community help needed

#### Step 4: Integration with Website

##### Method A: Direct GitHub Link (Simplest)
Update the bug report button to link directly to GitHub Issues:
```html
<a href="https://github.com/YOUR_USERNAME/vinfastowners-issues/issues/new/choose"
   class="btn btn-primary"
   target="_blank">Report Bug on GitHub</a>
```

##### Method B: Website Form + GitHub API (Advanced)
The website already has a bug report form. To integrate it with GitHub:

1. Create a GitHub Personal Access Token:
   - Go to GitHub Settings → Developer settings → Personal access tokens
   - Generate new token with `public_repo` scope
   - **IMPORTANT**: Store this securely on your backend server, NEVER in frontend code

2. Set up a backend endpoint (using Node.js/Express example):

**File: `backend/server.js`**
```javascript
const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.json());

app.post('/api/submit-bug', async (req, res) => {
    const { title, category, description, model } = req.body;

    const issueTitle = `[${category}] ${title}`;
    const issueBody = `
## Bug Report

**Category:** ${category}
**Vehicle Model:** ${model || 'N/A'}

### Description
${description}

**Submitted:** ${new Date().toISOString()}
    `.trim();

    try {
        const response = await axios.post(
            `https://api.github.com/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/issues`,
            {
                title: issueTitle,
                body: issueBody,
                labels: [category, model ? model.split('-')[0] : 'general']
            },
            {
                headers: {
                    'Authorization': `token ${process.env.GITHUB_TOKEN}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            }
        );

        res.json({
            success: true,
            issueUrl: response.data.html_url,
            issueNumber: response.data.number
        });
    } catch (error) {
        console.error('Error creating issue:', error);
        res.status(500).json({ success: false, error: 'Failed to submit bug report' });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

**File: `.env`**
```
GITHUB_TOKEN=your_github_token_here
GITHUB_OWNER=your_github_username
GITHUB_REPO=vinfastowners-issues
```

3. Update the frontend JavaScript to call your backend:
```javascript
// In js/main.js, replace the form submission handler
bugReportForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = {
        title: document.getElementById('bug-title').value,
        category: document.getElementById('bug-category').value,
        description: document.getElementById('bug-description').value,
        model: document.getElementById('bug-model').value
    };

    try {
        const response = await fetch('/api/submit-bug', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (result.success) {
            alert(`Thank you! Your bug report #${result.issueNumber} has been submitted. View it at: ${result.issueUrl}`);
            closeModal();
        } else {
            alert('Failed to submit bug report. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try reporting the bug directly on GitHub.');
    }
});
```

### Option 2: Alternative Bug Tracking Solutions

#### Jira (Free tier available)
- **Pros**: Professional, powerful features, integrations
- **Cons**: More complex, may be overkill for community site
- **Cost**: Free for up to 10 users

#### Trello
- **Pros**: Visual, easy to use, simple
- **Cons**: Less structured than GitHub Issues
- **Cost**: Free tier available

#### Linear
- **Pros**: Modern, fast, clean interface
- **Cons**: Fewer integrations
- **Cost**: Free for individuals

#### Email-based (Simplest)
- **Pros**: No setup required, everyone has email
- **Cons**: Hard to organize, no public tracking
- **Implementation**: mailto link in the form

## Recommended Workflow

1. **User submits bug** → Creates GitHub Issue
2. **You review** → Add labels, assign priority
3. **Community discusses** → Comments on issue
4. **Resolution** → Close issue with explanation
5. **Documentation** → Add to FAQ if common issue

## Monitoring and Management

### GitHub Notifications
- Enable email notifications for new issues
- Set up GitHub mobile app for quick responses

### Community Moderation
- Respond to issues within 24-48 hours
- Close duplicates and link to original
- Thank contributors
- Update issue status regularly

## Getting Started Checklist

- [ ] Create GitHub repository for issues
- [ ] Set up issue templates
- [ ] Configure labels
- [ ] Update website with GitHub link (Method A) OR
- [ ] Set up backend integration (Method B)
- [ ] Test bug submission flow
- [ ] Document process in README
- [ ] Announce to community

## Support

For questions about setting this up, please refer to:
- [GitHub Issues Documentation](https://docs.github.com/en/issues)
- [GitHub API Documentation](https://docs.github.com/en/rest/issues)
