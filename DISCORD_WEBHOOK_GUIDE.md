# Discord Webhook Integration Guide

**Complete guide to implementing Discord webhooks for HTML forms**

Use this guide to add Discord webhook functionality to any website using Claude Code.

---

## 📋 What This Guide Covers

This guide shows how to send HTML form submissions directly to a Discord channel using webhooks. Perfect for:
- Contact forms
- Membership signups
- Bug reports
- Feedback forms
- Newsletter subscriptions
- Any form where you want instant Discord notifications

---

## 🎯 What You'll Achieve

When a user submits a form:
1. Data is sent to Discord channel via webhook
2. Beautiful embedded message appears in Discord
3. User sees success confirmation
4. No backend server required!

---

## 📝 Step-by-Step Implementation

### Step 1: Create Discord Webhook

**In Discord:**
1. Go to your Discord server
2. Right-click the channel where you want form submissions
   - Tip: Create a dedicated channel like `#form-submissions`
3. Click **Edit Channel** → **Integrations** → **Webhooks**
4. Click **New Webhook**
5. Name it (e.g., "Contact Form Bot", "Membership Bot")
6. **Copy the Webhook URL**
   - Format: `https://discord.com/api/webhooks/[ID]/[TOKEN]`
   - **Keep this private!** Anyone with this URL can post to your channel

---

### Step 2: Identify Your Form Fields

**Look at your existing HTML form and note the field IDs:**

```html
<form id="myForm">
    <input type="text" id="name" name="name">
    <input type="email" id="email" name="email">
    <textarea id="message" name="message"></textarea>
    <button type="submit">Submit</button>
</form>
```

**Important:** Write down all the `id` attributes - you'll need these!

---

### Step 3: Remove Conflicting Attributes

**Check your form tag for these attributes and remove them:**

```html
<!-- BEFORE (Won't work with JavaScript handler) -->
<form id="myForm" netlify>
<form id="myForm" action="/submit" method="POST">

<!-- AFTER (Will work) -->
<form id="myForm">
```

**Common blockers:**
- `netlify` - Netlify intercepts submission
- `action="..."` - Browser submits to URL instead
- `method="POST"` - Browser does default submit

---

### Step 4: Add JavaScript to Handle Form Submission

**Add this script before the closing `</body>` tag:**

```html
<script>
    // Form submission handler
    document.getElementById('myForm').addEventListener('submit', async function(e) {
        e.preventDefault(); // Prevent default form submission

        console.log('Form submitted!');

        // Get form values - MATCH THESE TO YOUR FIELD IDs
        const formData = {
            name: document.getElementById('name')?.value || 'Not provided',
            email: document.getElementById('email')?.value || 'Not provided',
            message: document.getElementById('message')?.value || 'Not provided'
        };

        console.log('Form data:', formData);

        // Build Discord embed message
        const discordPayload = {
            content: '📬 **New Form Submission**',
            embeds: [{
                color: 0x00539C, // Blue color (hex without #)
                fields: [
                    { name: '👤 Name', value: formData.name, inline: true },
                    { name: '📧 Email', value: formData.email, inline: true },
                    { name: '💬 Message', value: formData.message, inline: false }
                ],
                timestamp: new Date().toISOString(),
                footer: { text: 'Contact Form' }
            }]
        };

        // Send to Discord webhook
        console.log('Sending to Discord...');
        try {
            const response = await fetch('YOUR_WEBHOOK_URL_HERE', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(discordPayload)
            });

            console.log('Response status:', response.status);

            if (response.ok) {
                console.log('Success!');
                alert('Thank you! Your message has been sent.');

                // Reset form
                this.reset();

                // Optional: Redirect to thank you page
                // setTimeout(function() {
                //     window.location.href = 'thank-you.html';
                // }, 2000);
            } else {
                const errorText = await response.text();
                console.error('Discord API error:', errorText);
                throw new Error('Failed to submit');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error. Please try again or email us directly.');
        }
    });
</script>
```

---

### Step 5: Customize for Your Form

**Match the field IDs to your actual form:**

```javascript
// Example 1: Simple contact form
const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
};

// Example 2: Newsletter signup
const formData = {
    email: document.getElementById('emailAddress').value,
    interests: document.getElementById('interests').value
};

// Example 3: Multi-field form (like AVO membership)
const firstName = document.getElementById('firstName')?.value || '';
const lastName = document.getElementById('lastName')?.value || '';
const city = document.getElementById('city')?.value || '';
const state = document.getElementById('state')?.value || '';

const formData = {
    name: `${firstName} ${lastName}`.trim(),
    email: document.getElementById('email').value,
    location: city && state ? `${city}, ${state}` : (city || state || 'Not provided'),
    vehicle: document.getElementById('vehicle')?.value || 'Not specified'
};
```

---

### Step 6: Customize Discord Embed

**Change the embed to match your form:**

```javascript
// Simple embed
const discordPayload = {
    content: '📬 **New Contact Form**',
    embeds: [{
        color: 0x5865F2, // Discord blurple
        fields: [
            { name: 'Name', value: formData.name, inline: true },
            { name: 'Email', value: formData.email, inline: true }
        ],
        timestamp: new Date().toISOString()
    }]
};

// Rich embed with more formatting
const discordPayload = {
    content: '🆕 **New Submission**',
    embeds: [{
        title: 'Contact Form Submission',
        color: 0x00ff00, // Green
        fields: [
            { name: '👤 Name', value: formData.name, inline: true },
            { name: '📧 Email', value: formData.email, inline: true },
            { name: '📱 Phone', value: formData.phone, inline: true },
            { name: '💬 Message', value: formData.message || 'No message', inline: false }
        ],
        timestamp: new Date().toISOString(),
        footer: {
            text: 'Website Contact Form',
            icon_url: 'https://example.com/logo.png' // Optional
        }
    }]
};
```

**Color codes (hex without #):**
- Blue: `0x0099ff`
- Green: `0x00ff00`
- Red: `0xff0000`
- Orange: `0xff6b35`
- Purple: `0x9b59b6`
- Discord Blurple: `0x5865F2`

---

## 🔧 Troubleshooting

### Problem: Form submits but page refreshes / nothing happens

**Solution:** Check for these issues:

1. **Form has `netlify`, `action`, or `method` attributes**
   ```html
   <!-- BAD -->
   <form id="myForm" netlify>

   <!-- GOOD -->
   <form id="myForm">
   ```

2. **JavaScript has wrong form ID**
   ```javascript
   // Check this matches your form's id attribute
   document.getElementById('myForm') // Must match <form id="myForm">
   ```

3. **Missing `e.preventDefault()`**
   ```javascript
   // Must be first line in submit handler
   e.preventDefault();
   ```

### Problem: Console shows errors about undefined fields

**Solution:** Field IDs don't match JavaScript

1. Open browser console (F12)
2. Look for errors like "Cannot read property 'value' of null"
3. Check that `getElementById('fieldName')` matches `<input id="fieldName">`

**Use optional chaining to prevent crashes:**
```javascript
// Safe - won't crash if field doesn't exist
const name = document.getElementById('name')?.value || 'Not provided';

// Unsafe - will crash if field missing
const name = document.getElementById('name').value;
```

### Problem: Nothing appears in Discord

**Solution:** Check webhook URL

1. **Verify webhook URL is correct**
   ```javascript
   const response = await fetch('https://discord.com/api/webhooks/...', {
   ```

2. **Check Discord channel** - Make sure webhook is active
3. **Check console** for network errors
4. **Test webhook manually** using curl:
   ```bash
   curl -X POST "YOUR_WEBHOOK_URL" \
     -H "Content-Type: application/json" \
     -d '{"content": "Test message"}'
   ```

### Problem: Form works but data is wrong

**Solution:** Field mapping issue

1. **Check field IDs match:**
   ```javascript
   // Log all form data to debug
   console.log('Form data:', formData);
   ```

2. **Open browser console and submit form**
3. **Look at console.log output** to see what's being captured

---

## 📚 Complete Working Example

**Full HTML page with Discord webhook:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contact Form</title>
</head>
<body>
    <h1>Contact Us</h1>

    <form id="contactForm">
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
        </div>

        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>

        <div>
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
        </div>

        <button type="submit">Send Message</button>
    </form>

    <script>
        document.getElementById('contactForm').addEventListener('submit', async function(e) {
            e.preventDefault();

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            const discordPayload = {
                content: '📬 **New Contact Form Submission**',
                embeds: [{
                    color: 0x00539C,
                    fields: [
                        { name: '👤 Name', value: formData.name, inline: true },
                        { name: '📧 Email', value: formData.email, inline: true },
                        { name: '💬 Message', value: formData.message, inline: false }
                    ],
                    timestamp: new Date().toISOString(),
                    footer: { text: 'Contact Form' }
                }]
            };

            try {
                const response = await fetch('YOUR_WEBHOOK_URL_HERE', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(discordPayload)
                });

                if (response.ok) {
                    alert('Thank you! Your message has been sent.');
                    this.reset();
                } else {
                    throw new Error('Failed to submit');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('There was an error. Please try again.');
            }
        });
    </script>
</body>
</html>
```

---

## 🎨 Advanced Customization

### Multiple Forms on Same Page

```javascript
// Form 1
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    // ... send to webhook 1
});

// Form 2
document.getElementById('newsletterForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    // ... send to webhook 2 (different channel)
});
```

### Add Loading State

```javascript
const submitButton = document.querySelector('button[type="submit"]');

try {
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    const response = await fetch(webhookUrl, { /* ... */ });

    if (response.ok) {
        submitButton.textContent = 'Sent!';
    }
} catch (error) {
    submitButton.disabled = false;
    submitButton.textContent = 'Send Message';
}
```

### Validate Before Sending

```javascript
// Check if email is valid
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(formData.email)) {
    alert('Please enter a valid email address');
    return;
}

// Check if message is long enough
if (formData.message.length < 10) {
    alert('Please enter a longer message');
    return;
}
```

---

## 🔒 Security Considerations

### ⚠️ Webhook URL is Public

When you put the webhook URL in your HTML/JavaScript, **anyone can see it** by viewing page source.

**Risks:**
- Spam submissions to your Discord channel
- Webhook URL can be extracted and abused

**Mitigations:**

1. **Rate limiting** - Discord has built-in rate limits
2. **Webhook regeneration** - Delete and create new webhook if abused
3. **Backend proxy** (advanced) - Hide webhook URL behind your own API
4. **Validation** - Check form data before sending

### Better Approach (Advanced)

For production sites with high traffic, consider:

1. **Backend API endpoint** that validates and forwards to Discord
2. **reCAPTCHA** to prevent bot spam
3. **Serverless function** (Netlify/Vercel) to proxy webhook

Example with Netlify Function:
```javascript
// netlify/functions/submit-form.js
exports.handler = async (event) => {
    const data = JSON.parse(event.body);

    // Validate data here

    await fetch(process.env.DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(discordPayload)
    });

    return { statusCode: 200 };
};
```

---

## 📖 Claude Code Prompt Template

**Use this prompt when working with Claude Code on a new website:**

```
I want to add Discord webhook integration to my HTML form.

Form details:
- Form ID: [your form id]
- Field IDs: [list your field IDs]
- Webhook URL: [your webhook URL]

Please:
1. Check for any conflicting form attributes (netlify, action, method)
2. Add JavaScript to handle form submission
3. Map form fields to Discord embed
4. Add error handling and user feedback
5. Test that field IDs match the actual form

Use the DISCORD_WEBHOOK_GUIDE.md as reference.
```

---

## ✅ Checklist

Use this checklist when implementing webhooks:

- [ ] Created Discord webhook and copied URL
- [ ] Identified all form field IDs
- [ ] Removed `netlify`, `action`, `method` from form tag
- [ ] Added JavaScript submit handler with `e.preventDefault()`
- [ ] Mapped form fields to formData object
- [ ] Created Discord embed payload
- [ ] Added webhook URL to fetch() call
- [ ] Added error handling and user feedback
- [ ] Tested form submission
- [ ] Checked Discord channel for message
- [ ] Verified form data is correct
- [ ] Added console.log() for debugging
- [ ] Tested error scenarios

---

## 🎓 Learning Resources

**Discord Webhook Documentation:**
- https://discord.com/developers/docs/resources/webhook

**Discord Embed Builder (Visual Tool):**
- https://discohook.org/
- Test embed formatting before coding

**JavaScript Fetch API:**
- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

---

## 💡 Common Use Cases

### 1. Contact Form
```javascript
fields: [
    { name: 'Name', value: formData.name, inline: true },
    { name: 'Email', value: formData.email, inline: true },
    { name: 'Subject', value: formData.subject, inline: false },
    { name: 'Message', value: formData.message, inline: false }
]
```

### 2. Newsletter Signup
```javascript
fields: [
    { name: '📧 Email', value: formData.email, inline: false },
    { name: '🎯 Interests', value: formData.interests, inline: false }
]
```

### 3. Bug Report
```javascript
fields: [
    { name: '🐛 Bug Title', value: formData.title, inline: false },
    { name: '📝 Description', value: formData.description, inline: false },
    { name: '💻 Browser', value: formData.browser, inline: true },
    { name: '🖥️ OS', value: formData.os, inline: true },
    { name: '🔗 URL', value: formData.url, inline: false }
]
```

### 4. Event Registration
```javascript
fields: [
    { name: '👤 Name', value: formData.name, inline: true },
    { name: '📧 Email', value: formData.email, inline: true },
    { name: '🎫 Event', value: formData.event, inline: false },
    { name: '👥 Guests', value: formData.guests, inline: true },
    { name: '🍽️ Dietary', value: formData.dietary, inline: true }
]
```

---

## 🆘 Support

**If something doesn't work:**

1. **Open browser console** (F12 → Console tab)
2. **Submit the form** and watch for errors
3. **Check console.log() messages** to see what's happening
4. **Use this guide** to troubleshoot common issues
5. **Ask Claude Code** with specific error messages

**Template for asking Claude Code:**
```
My form submission isn't working. Here's what I see:

Console errors: [paste error messages]
Form HTML: [paste your form tag]
Current JavaScript: [paste your script]

Please help me debug using DISCORD_WEBHOOK_GUIDE.md
```

---

**Created:** November 11, 2025
**Last Updated:** November 11, 2025
**Version:** 1.0
**Tested On:** AVO Website (vinfastowners.org)
