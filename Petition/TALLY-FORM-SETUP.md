# Tally.so Form Setup — AVO Feature Petition
# Single Bilingual Form

**Tally URL:** https://tally.so/r/1ArbbM
**Redirect:** https://vinfastowners.org/petition#thank-you

---

## Branding

| Setting | Value |
|---------|-------|
| Logo | AVO logo (images/icons/avo-logo.png) |
| Button background | `#00539C` (VinFast Blue) |
| Accent | `#00539C` |
| Prevent duplicates | ON — by Email field |
| Redirect on completion | `https://vinfastowners.org/petition#thank-you` |

---

## Form Content (top to bottom)

**Header:**
```
VinFast Feature Petition / Pétition VinFast
```

**Intro paragraph:**
```
Sign the AVO Community Feature Petition. / Signez la pétition communautaire AVO.

📄 vinfastowners.org/petition
```

**Field 1 — Preferred Language / Langue préférée**
- Type: Dropdown
- Required: **YES**
- Options: `English` / `Français`

**Field 2 — Full Name / Nom complet**
- Type: Text (short answer)
- Required: **YES**
- Validation: minimum 3 characters

**Field 3 — Email Address / Adresse courriel**
- Type: Email
- Description: `Associated with your VinFast account / Associée à votre compte VinFast`
- Required: **YES**

**Field 4 — Country / Pays**
- Type: Dropdown
- Required: **YES**
- Options: `United States / États-Unis` · `Canada` · `Other / Autre`

**Field 5 — Preferences / Préférences**
- Type: Checkbox group
- Required: **NO**
- Options:
  - `Beta testing / Tests bêta`
  - `Email updates from VinFast / Courriels de VinFast`
  - `Email updates from AVO / Courriels de l'AVO`

**Discord CTA (text block):**
```
💬 Feature not listed? Join Discord! / Fonctionnalité manquante ? Rejoignez Discord !
vinfastowners.com/discord
```

**Field 6 — Acknowledgment (at bottom, before Submit)**
- Type: Checkbox
- Required: **YES**
- Label: `I have viewed the petition and support its requests / J'ai consulté la pétition et j'appuie ses demandes`

---

## After Setup

- [ ] Publish form
- [ ] Verify redirect works
- [ ] Connect Google Sheets (Integrations > Google Sheets)
- [ ] Test a submission

---

## Quarterly Reuse

1. Duplicate form in Tally
2. Update petition page content
3. Swap embed URL in `petition.html`
4. Export previous data for VinFast handoff
