# VINFAST PETITION PROJECT - CLAUDE CODE HANDOFF
# Last Updated: February 28, 2026
# Owner: M (AVO Secretary)

================================================================================
## MISSION
================================================================================

Deploy bilingual petition pages with signature collection to vinfastowners.org
- Launch: February 28, 2026
- Signature collection: March 1-31, 2026
- Signatures shared directly with VinFast Corporate

================================================================================
## DECISIONS NEEDED (ask M)
================================================================================

1. FORM_SOLUTION: Google Forms | Tally.so | Formspree | Custom | Other?
2. URL_STRUCTURE: /petition + /petition-fr | /petition with language toggle | /en/petition + /fr/petition
3. PAGE_LAYOUT: Single long scroll | Accordion sections | Tabbed interface
4. SIGNATURE_DISPLAY: Show live count on page? Yes | No
5. FORM_EMBED: Embed on page | Link to external form | Modal popup
6. ANALYTICS: Track petition views/conversions? If yes, what tool?

================================================================================
## KEY LINKS & RESOURCES
================================================================================

### Discord
- Join server: vinfastowners.com/discord
- Feature request channel: https://discord.com/channels/1306497961248821260/1467530768338387197

### External Communities (for sharing)
- VFFS Facebook: https://www.facebook.com/groups/1948970065435256/
- VinFastTalk forum: https://vinfasttalk.com

### Reference (Google Docs - not accessible to Claude Code, content included below)
- English: https://docs.google.com/document/d/14aR9ckr8ZuwaMd0O9sfhyUs2VHub61yQzVANgYPY0VI/edit
- French: https://docs.google.com/document/d/1IY2R3-BJAtXs8YAQCdXQK-8jq757iJT9a8ksdTebwb0/edit

================================================================================
## BRAND GUIDELINES
================================================================================

### Match existing vinfastowners.org styling
Reference live site: https://vinfastowners.org

### AVO Brand Colors
```css
:root {
  --avo-teal: #00897B;        /* Primary accent */
  --avo-teal-light: #26A69A;  /* Hover states */
  --avo-teal-bg: #E0F2F1;     /* Light teal background */
  --avo-dark: #1A1A2E;        /* Text */
  --avo-bg: #F5F5F5;          /* Light backgrounds */
  --white: #FFFFFF;
  
  /* Priority colors */
  --priority-high: #E53935;    /* Red */
  --priority-medium: #FB8C00;  /* Orange */
  --priority-low: #43A047;     /* Green */
  
  /* Alert/notice */
  --draft-bg: #FFF3E0;
  --draft-border: #FB8C00;
}
```

### Key Brand Elements
- 💚 Green heart emoji = AVO signature
- 🔴🟠🟢 Colored circles for priority badges
- Tagline EN: "Drive the Future. Together."
- Tagline FR: "Conduisons l'avenir. Ensemble."
- Stats line: "600+ Members • US & Canada • Elected Board • Owner-Driven"

================================================================================
## PAGE STRUCTURE
================================================================================

### Routes to Create
| Route | Content | Notes |
|-------|---------|-------|
| /petition | English petition + form | Primary sharing URL |
| /petition-fr | French petition + form | French version |
| /petition/thank-you | EN confirmation | Optional if using inline confirmation |
| /petition-fr/merci | FR confirmation | Optional |

### Page Layout Structure
```
┌─────────────────────────────────────────────────────────────────┐
│ HEADER (from existing site)                                      │
├─────────────────────────────────────────────────────────────────┤
│ PETITION HEADER                                                  │
│ ├── 💚 emoji                                                     │
│ ├── "Association of VinFast Owners" / "Association des..."      │
│ ├── "AVO North America" / "AVO Amérique du Nord"                │
│ ├── "Community Feature Request Petition" / "Pétition..."        │
│ ├── Tagline (italic)                                            │
│ └── [EN | FR] language toggle                                   │
├─────────────────────────────────────────────────────────────────┤
│ SECTION: Message to VinFast Leadership                          │
│ ├── Opening letter paragraphs                                   │
│ └── Signature line with 💚                                      │
├─────────────────────────────────────────────────────────────────┤
│ SECTION: Executive Summary                                       │
│ ├── Intro paragraph                                             │
│ ├── Priority summary (🔴🟠🟢 badges)                            │
│ ├── Key observations                                            │
│ └── Our ask                                                     │
├─────────────────────────────────────────────────────────────────┤
│ SECTION: High Priority Features                                  │
│ ├── Intro paragraph                                             │
│ ├── Feature 1: Dashcam & Sentry Mode                           │
│ │   ├── 🔴 HIGH PRIORITY badge                                 │
│ │   ├── The Opportunity                                        │
│ │   ├── What Owners Are Requesting                             │
│ │   ├── Why This Matters                                       │
│ │   ├── Implementation Considerations (bullets)                │
│ │   └── Community Availability for Support                     │
│ └── Feature 2: Accelerator Response & One-Pedal Driving        │
│     └── (same structure + Community Feedback section)          │
├─────────────────────────────────────────────────────────────────┤
│ SECTION: Medium Priority Features                                │
│ ├── Intro paragraph                                             │
│ ├── Feature 3: Tesla Supercharger Network Access (NACS)        │
│ ├── Feature 4: Phone as a Key                                  │
│ └── Feature 5: Energy & Charging Insights                      │
├─────────────────────────────────────────────────────────────────┤
│ SECTION: Additional Feature Requests (Low Priority)             │
│ ├── Intro paragraph                                             │
│ ├── Feature 6: Remote Heated Wheel/Seats/Windscreen            │
│ └── Feature 7: Driver Settings Memory & Profiles               │
├─────────────────────────────────────────────────────────────────┤
│ SECTION: Sign the Petition                                       │
│ ├── Heading + call to action                                    │
│ ├── [FORM - embedded or linked]                                 │
│ ├── Timeline info                                               │
│ └── "Dream feature not listed?" + Discord CTA                  │
├─────────────────────────────────────────────────────────────────┤
│ SECTION: Closing                                                 │
│ ├── Partnership message paragraphs                              │
│ ├── "We respectfully request:" (4 bullets)                     │
│ └── Thank you paragraph                                         │
├─────────────────────────────────────────────────────────────────┤
│ SECTION: About AVO                                               │
│ ├── 💚 centered                                                 │
│ ├── "About AVO" heading                                         │
│ ├── Organization description                                    │
│ ├── Stats line                                                  │
│ ├── vinfastowners.org link                                     │
│ ├── Dates line                                                  │
│ └── Tagline                                                     │
├─────────────────────────────────────────────────────────────────┤
│ FOOTER (from existing site)                                      │
└─────────────────────────────────────────────────────────────────┘
```

================================================================================
## FORM SPECIFICATION
================================================================================

### Required Fields
| Field | Type | Validation | EN Label | FR Label |
|-------|------|------------|----------|----------|
| email | email | required, valid email | Email Address (associated with your VinFast owner account) | Adresse courriel (associée à votre compte propriétaire VinFast) |
| name | text | required, min 2 chars | Full Name | Nom complet |
| country | select | required | Country | Pays |

### Country Dropdown Options
```
EN: United States | Canada | Other
FR: États-Unis | Canada | Autre
```

### Optional Fields
| Field | Type | EN Label | FR Label |
|-------|------|----------|----------|
| beta_test | checkbox/toggle | I am willing to participate in beta testing new features | Je suis disposé(e) à participer aux tests bêta de nouvelles fonctionnalités |
| vinfast_emails | checkbox/toggle | I am willing to receive email updates from VinFast about feature development | Je suis disposé(e) à recevoir des mises à jour par courriel de VinFast concernant le développement des fonctionnalités |
| avo_emails | checkbox/toggle | I am willing to receive email updates from AVO | Je suis disposé(e) à recevoir des mises à jour par courriel de l'Association des Propriétaires VinFast |

### Form Submission Requirements
- Store responses in shareable format (Google Sheets ideal for VinFast handoff)
- Show confirmation message inline or redirect to thank-you page
- Prevent duplicate submissions (same email)

### Confirmation Message - English
```
Thank you for signing the petition! 💚

Your signature has been recorded and will be shared with VinFast Corporate.

Share this petition: vinfastowners.org/petition

Join the conversation: vinfastowners.com/discord

Is your dream feature not on the petition? Submit it for future petitions in our Discord feature request channel!
```

### Confirmation Message - French
```
Merci d'avoir signé la pétition ! 💚

Votre signature a été enregistrée et sera partagée avec VinFast Corporate.

Partagez cette pétition : vinfastowners.org/petition-fr

Rejoignez la conversation : vinfastowners.com/discord

Votre fonctionnalité rêvée n'est pas sur la pétition ? Soumettez-la pour les futures pétitions dans notre canal Discord de demandes de fonctionnalités !
```

### Google Forms Setup (if using Google Forms)

**English Form Title:** VinFast Feature Petition - Sign Your Support

**English Form Description:**
```
Add your signature to the AVO Community Feature Petition. Your signature shows VinFast that owners are united in requesting these features.

By signing, you confirm you are a VinFast owner. Signatures will be shared with VinFast Corporate.

Questions? Join our Discord: vinfastowners.com/discord
```

**French Form Title:** Pétition VinFast - Signez votre soutien

**French Form Description:**
```
Ajoutez votre signature à la pétition communautaire AVO. Votre signature montre à VinFast que les propriétaires sont unis dans ces demandes.

En signant, vous confirmez être propriétaire d'un VinFast. Les signatures seront partagées avec VinFast Corporate.

Questions? Rejoignez notre Discord : vinfastowners.com/discord
```

================================================================================
## TASK LIST
================================================================================

### Phase 1: Discovery & Setup
- [ ] Examine vinfastowners.org codebase structure
- [ ] Identify tech stack and build process
- [ ] Identify existing i18n/bilingual patterns on site
- [ ] Locate existing assets (logo, CSS variables, components)
- [ ] ASK M: Get answers to "Decisions Needed" section above

### Phase 2: Form Setup
- [ ] Confirm form solution with M
- [ ] Create English form with all fields
- [ ] Create French form (or bilingual single form)
- [ ] Test submissions
- [ ] Set up response storage (Google Sheets recommended)
- [ ] Configure confirmation messages/redirects
- [ ] Get embed code or API integration

### Phase 3: Page Development  
- [ ] Create petition page template matching site style
- [ ] Build English petition page (/petition)
  - [ ] Header with branding + language toggle
  - [ ] All content sections (see full content below)
  - [ ] Form integration
  - [ ] Discord CTAs
  - [ ] About AVO footer section
- [ ] Build French petition page (/petition-fr)
  - [ ] Same structure with French content
- [ ] Build thank-you pages (if needed)
- [ ] Mobile responsive testing
- [ ] Cross-browser testing

### Phase 4: Integration & Testing
- [ ] Add to site navigation (or keep standalone?)
- [ ] Set up redirects if needed
- [ ] Test all links
- [ ] Test language toggle
- [ ] Test form submission → spreadsheet flow
- [ ] Test confirmation flow

### Phase 5: Pre-Launch (before Feb 28)
- [ ] Final review with M
- [ ] Remove any "DRAFT" notices
- [ ] Prepare launch announcements (Discord EN/FR, social)

### Phase 6: Launch (Feb 28)
- [ ] Deploy/publish pages
- [ ] Verify forms working
- [ ] Post announcements
- [ ] Monitor for issues

### Phase 7: Ongoing (March 1-31)
- [ ] Monitor submissions
- [ ] Weekly signature count updates
- [ ] Fix any issues

### Phase 8: Close (March 31)
- [ ] Disable forms
- [ ] Update pages: "Signature collection closed"
- [ ] Export final data
- [ ] Summary report

================================================================================
## ENGLISH PETITION CONTENT
================================================================================

### Page Title / Meta
```
Title: Community Feature Request Petition | Association of VinFast Owners
Description: Sign the AVO community petition requesting new features from VinFast including Dashcam, One-Pedal Driving, Supercharger access, and more.
```

### Header Section
```
💚

Association of VinFast Owners
AVO North America

Community Feature Request Petition

Drive the Future. Together.

[EN | FR]
```

---

### A Message to VinFast Leadership

Dear VinFast Leadership and Engineering Teams,

On behalf of the Association of VinFast Owners, we want to begin by expressing our sincere appreciation for VinFast's bold entry into the North American electric vehicle market. We are proud owners who chose VinFast because we believe in the company's vision, the quality of its vehicles, and its potential to become a major force in the EV industry.

We write to you not as critics, but as partners invested in VinFast's success. Our community represents over 600 passionate owners who actively discuss, recommend, and advocate for VinFast vehicles. We understand that building a new automotive brand is an enormous undertaking, and we have been impressed by VinFast's responsiveness and commitment to improvement.

This document represents the collective input of our community, gathered through structured discussion and democratic polling. Our goal is to provide VinFast's product and engineering teams with clear, prioritized, and actionable feedback that reflects what matters most to the people who drive these vehicles every day.

We have organized these requests by priority based on community voting, and we have included technical context and implementation suggestions where appropriate. We recognize that VinFast's engineering team has deep expertise and constraints we may not fully understand, and we offer these suggestions in a spirit of collaboration rather than prescription.

We believe that a strong partnership between VinFast and its owner community can be a competitive advantage. Owners who feel heard become ambassadors. We are eager to support VinFast's success in any way we can, including participating in beta testing programs, providing detailed feedback, and continuing to build a positive and constructive community around the brand.

Thank you for taking the time to review this petition. We look forward to the opportunity to collaborate with VinFast on making these vehicles even better.

With appreciation and partnership,
**The Association of VinFast Owners** 💚

---

### Executive Summary

This document presents feature requests gathered from the North American VinFast owner community, organized by priority to help VinFast's product team allocate resources effectively.

**Summary of Requests**

🔴 **High Priority:** Dashcam & Sentry Mode, Accelerator Response & One-Pedal Driving

🟠 **Medium Priority:** Tesla Supercharger Access (NACS), Phone as a Key, Energy & Charging Insights

🟢 **Low Priority:** Remote Heated Features, Driver Settings Profiles

**Key Observations**

The two highest-priority requests are software features that we believe can be implemented using existing vehicle hardware. The VF8 and VF9 already have the camera systems needed for dashcam functionality and the powertrain systems capable of stronger regenerative braking. We highlight this not to oversimplify the engineering effort required, but to note that these improvements may be achievable without hardware changes, potentially benefiting all current owners through over-the-air updates.

We have focused our detailed asks on the high-priority features while including medium and low priorities for VinFast's longer-term consideration.

**Our Ask**

We respectfully request that VinFast acknowledge receipt of this petition and, when possible, share any updates on feature development timelines. We understand that not all requests may be feasible, and we appreciate transparency about what is and isn't possible. Our community values honest communication and will remain supportive partners regardless of the outcome.

---

### High Priority Features

These features received the strongest community support and represent the most impactful opportunities to enhance the ownership experience.

#### 1. Dashcam & Sentry Mode

🔴 **HIGH PRIORITY**

**The Opportunity**

VinFast vehicles are equipped with impressive camera systems for 360-degree views and ADAS functionality. Owners have expressed strong interest in leveraging these existing cameras for security and documentation purposes, similar to features offered by other EV manufacturers.

**What Owners Are Requesting**

**Dashcam Mode:** The ability to continuously record footage from vehicle cameras while driving, saved to a user-provided USB drive. This would include automatic loop recording and a manual save function to preserve important clips.

**Sentry Mode:** Parked surveillance capability that monitors the vehicle's surroundings and saves footage when significant motion or impact is detected. Optional exterior alerts and mobile notifications would enhance security.

**Why This Matters to Owners**

Vehicle security is a significant concern, and several community members have experienced parking lot incidents where video evidence would have been invaluable. Beyond security, dashcam footage provides protection in traffic incidents and insurance claims. This feature would also bring VinFast vehicles into parity with competitor offerings, removing a point of comparison that currently favors other brands.

**Implementation Considerations**

We recognize this requires substantial software development including recording pipelines, storage management, event detection, and user interface work. The suggestions below are offered as input, not requirements, and we trust VinFast's engineering team to determine the best approach:

- Phased rollout starting with basic dashcam functionality before adding sentry features
- Beta testing program with volunteer owners to gather real-world feedback
- Push notifications with thumbnail images and the ability to view or download clips directly in the VinFast app

**Community Availability for Support**

Our community includes owners eager to participate in beta testing and provide detailed feedback throughout development. We would be honored to support VinFast's engineering team in any way that would be helpful.

---

#### 2. Accelerator Response & One-Pedal Driving

🔴 **HIGH PRIORITY**

**The Opportunity**

Many VinFast owners have previous EV experience and have expressed interest in driving dynamics options that would allow them to customize the vehicle's throttle response and regenerative braking behavior to match their preferences.

**What Owners Are Requesting**

**Throttle Response Options:** A user-selectable setting allowing drivers to choose between the current progressive throttle response and a more immediate EV-style response. This would let owners customize the driving experience to their preferences.

**Enhanced One-Pedal Driving:** A regenerative braking mode with stronger deceleration that maintains consistent braking force through to a complete stop. Many EV-experienced owners cite this as one of their favorite aspects of electric vehicle ownership.

**Persistent Settings:** The ability for these preferences to persist across drive cycles, maintaining the owner's chosen configuration each time they start the vehicle.

**Community Feedback and Context**

During our discussions, owners shared their experiences comparing VinFast's current regenerative braking to other EVs they have owned or driven. The consistent feedback is that stronger regen options, particularly at low speeds approaching a stop, would significantly enhance the driving experience. Owners have specifically mentioned GM's one-pedal implementation and Hyundai/Kia's i-Pedal system as benchmarks they admire.

We want to emphasize that this feedback comes from a place of enthusiasm for VinFast vehicles. Owners are excited about the platform and see this as an opportunity to make a great vehicle even better.

**Implementation Considerations**

We understand that powertrain calibration involves complex engineering considerations including safety, battery management, and regulatory compliance. These suggestions are offered as input:

- Adjustable regen settings exposed through the existing vehicle settings interface
- A true one-pedal mode as a distinct, user-selectable option
- Settings that persist across drive cycles and are included in driver profiles

**Community Availability for Support**

Owners have expressed strong interest in participating in any beta testing program for updated driving dynamics. Our community can provide diverse feedback across different driving conditions, climates, and use cases.

---

### Medium Priority Features

These features represent meaningful improvements that would enhance the ownership experience. We present them for VinFast's consideration as resources and roadmap priorities allow.

#### 3. Tesla Supercharger Network Access (NACS)

🟠 **MEDIUM PRIORITY**

**The Opportunity**

The North American EV charging landscape has evolved significantly with Tesla opening its Supercharger network to other manufacturers. Access to this network has become an important factor for many EV buyers and would expand charging options for VinFast owners.

**What Owners Are Requesting**

Owners would welcome VinFast's adoption of the North American Charging Standard (NACS) and access to the Tesla Supercharger network. For current CCS1-equipped vehicles, official adapter solutions would extend this benefit to the existing owner base.

**Why This Matters to Owners**

Charging infrastructure confidence significantly impacts both ownership satisfaction and purchase decisions. Tesla's Supercharger network offers extensive coverage and high reliability. Access to this network would expand road trip possibilities and provide additional charging options in areas where CCS coverage is limited. We recognize this involves business negotiations and strategic considerations beyond pure engineering, and we raise it as a priority our community has identified.

---

#### 4. Phone as a Key

🟠 **MEDIUM PRIORITY**

**The Opportunity**

Smartphone-based vehicle access has become increasingly common in modern vehicles and offers convenience benefits that many owners appreciate.

**What Owners Are Requesting**

The ability to use a smartphone as the primary vehicle key via Bluetooth or Ultra-Wideband technology, with support for sharing digital keys with family members through the VinFast app.

**Why This Matters to Owners**

This convenience feature simplifies daily use by eliminating the need to carry a separate key fob. It also makes sharing vehicle access with family members more flexible. We understand this involves hardware and security considerations and offer it as a feature our community values.

---

#### 5. Energy & Charging Insights

🟠 **MEDIUM PRIORITY**

**The Opportunity**

Providing owners with visibility into energy consumption and charging performance would support better range management and build confidence in the vehicle.

**What Owners Are Requesting**

**Energy Usage Display:** A display showing real-time and historical energy consumption by system, including climate control, heated features, audio, and lighting. This would help owners understand how their usage patterns affect range.

**Charge Curve Display:** A real-time graph showing charging power during DC fast charging sessions, helping owners understand their vehicle's charging behavior and optimize charging stops during road trips.

**Why This Matters to Owners**

Range management is particularly important in extreme temperatures when HVAC usage significantly impacts efficiency. Understanding charging curves helps owners plan road trips more effectively. Together, these displays would give owners complete visibility into where energy goes and how quickly it returns — building trust and confidence in the vehicle's capabilities.

---

### Additional Feature Requests

The following features received lower priority in community voting but still represent meaningful improvements. We include them for VinFast's consideration as part of longer-term roadmap planning.

#### 6. Remote Heated Wheel/Seats/Windscreen

🟢 **LOW PRIORITY**

Owners in cold climates have expressed interest in the ability to remotely activate heated steering wheel, seats, and windscreen defrost through the VinFast mobile app, separate from full cabin climate control.

---

#### 7. Driver Settings Memory & Profiles

🟢 **LOW PRIORITY**

Households with multiple drivers would benefit from comprehensive driver profiles that save and recall all preferences including seat position, mirrors, drive mode, and other settings. This would reduce the need to manually reconfigure the vehicle when switching drivers.

---

### Sign the Petition

#### ✍️ Add Your Signature

Your signature shows VinFast that owners are united in requesting these features. Each signature will be shared directly with VinFast Corporate.

[FORM GOES HERE]

**Signature Collection:** March 1-31, 2026

Signatures are shared with VinFast Corporate on an ongoing basis throughout the collection period.

---

**💬 Is your dream feature not on this list?**

Share it in our Discord feature request channel for future petitions!

[Join Discord Button → vinfastowners.com/discord]

---

### Closing

We are grateful for VinFast's attention to this petition and for the opportunity to share our community's perspective. We recognize that product development involves difficult tradeoffs and resource constraints, and we do not expect every request to be fulfilled.

What we value most is partnership. We believe VinFast has built excellent vehicles with tremendous potential, and we are committed to supporting the brand's success in North America. Whether through beta testing, detailed feedback, community advocacy, or simply being patient and understanding as VinFast continues to grow, we want to be constructive partners.

We respectfully request:

- Acknowledgment that this petition has been received and reviewed
- Any updates VinFast is able to share about feature development priorities
- Transparency about any technical, regulatory, or business constraints that may affect feasibility
- Consideration of establishing an ongoing feedback channel with the owner community

Thank you for your time and consideration. We look forward to continuing to drive VinFast vehicles and to supporting the brand's growth for years to come.

---

### About AVO

💚

**About AVO**

Association of VinFast Owners North America

The Association of VinFast Owners (AVO) is an independent, member-governed organization representing VinFast electric vehicle owners across North America. We are not affiliated with VinFast Auto but work constructively with the company to advocate for owner interests and build a positive community around the brand.

**600+ Members** • **US & Canada** • **Elected Board** • **Owner-Driven**

**vinfastowners.org**

Petition submitted: February 28, 2026 | Signatures: March 1-31, 2026

*Drive the Future. Together.*

================================================================================
## FRENCH PETITION CONTENT
================================================================================

### Page Title / Meta
```
Title: Pétition communautaire pour les fonctionnalités | Association des Propriétaires VinFast
Description: Signez la pétition communautaire AVO demandant de nouvelles fonctionnalités à VinFast, incluant Dashcam, conduite à une pédale, accès Supercharger, et plus.
```

### Header Section
```
💚

Association des Propriétaires VinFast
AVO Amérique du Nord

Pétition communautaire pour les fonctionnalités

Conduisons l'avenir. Ensemble.

[EN | FR]
```

---

### Un message à la direction de VinFast

Chers membres de la direction et équipes d'ingénierie de VinFast,

Au nom de l'Association des Propriétaires VinFast, nous souhaitons d'abord exprimer notre sincère appréciation pour l'entrée audacieuse de VinFast sur le marché nord-américain des véhicules électriques. Nous sommes des propriétaires fiers qui ont choisi VinFast parce que nous croyons en la vision de l'entreprise, en la qualité de ses véhicules et en son potentiel de devenir une force majeure dans l'industrie des VÉ.

Nous vous écrivons non pas en tant que critiques, mais en tant que partenaires investis dans le succès de VinFast. Notre communauté représente plus de 600 propriétaires passionnés qui discutent activement, recommandent et défendent les véhicules VinFast. Nous comprenons que bâtir une nouvelle marque automobile est une entreprise énorme, et nous avons été impressionnés par la réactivité et l'engagement de VinFast envers l'amélioration.

Ce document représente l'apport collectif de notre communauté, recueilli par des discussions structurées et des sondages démocratiques. Notre objectif est de fournir aux équipes produit et ingénierie de VinFast des commentaires clairs, priorisés et exploitables qui reflètent ce qui compte le plus pour les personnes qui conduisent ces véhicules quotidiennement.

Nous avons organisé ces demandes par priorité selon les votes de la communauté, et nous avons inclus un contexte technique et des suggestions de mise en œuvre lorsque approprié. Nous reconnaissons que l'équipe d'ingénierie de VinFast possède une expertise approfondie et des contraintes que nous ne comprenons peut-être pas entièrement, et nous offrons ces suggestions dans un esprit de collaboration plutôt que de prescription.

Nous croyons qu'un partenariat solide entre VinFast et sa communauté de propriétaires peut être un avantage concurrentiel. Les propriétaires qui se sentent écoutés deviennent des ambassadeurs. Nous sommes impatients de soutenir le succès de VinFast de toutes les manières possibles, y compris en participant à des programmes de tests bêta, en fournissant des commentaires détaillés et en continuant à bâtir une communauté positive et constructive autour de la marque.

Merci de prendre le temps d'examiner cette pétition. Nous avons hâte de collaborer avec VinFast pour rendre ces véhicules encore meilleurs.

Avec appréciation et partenariat,
**L'Association des Propriétaires VinFast** 💚

---

### Sommaire exécutif

Ce document présente les demandes de fonctionnalités recueillies auprès de la communauté nord-américaine des propriétaires VinFast, organisées par priorité pour aider l'équipe produit de VinFast à allouer efficacement ses ressources.

**Résumé des demandes**

🔴 **Priorité élevée :** Dashcam et mode Sentinelle, Réponse de l'accélérateur et conduite à une pédale

🟠 **Priorité moyenne :** Accès au réseau Tesla Supercharger (NACS), Téléphone comme clé, Données d'énergie et de recharge

🟢 **Priorité faible :** Fonctions chauffantes à distance, Profils de paramètres conducteur

**Observations clés**

Les deux demandes les plus prioritaires sont des fonctionnalités logicielles que nous croyons réalisables avec le matériel existant des véhicules. Les VF8 et VF9 disposent déjà des systèmes de caméras nécessaires pour la fonctionnalité dashcam et des systèmes de motorisation capables d'un freinage régénératif plus puissant. Nous soulignons ceci non pas pour simplifier l'effort d'ingénierie requis, mais pour noter que ces améliorations peuvent être réalisables sans modifications matérielles, bénéficiant potentiellement à tous les propriétaires actuels via des mises à jour à distance.

Nous avons concentré nos demandes détaillées sur les fonctionnalités hautement prioritaires tout en incluant les priorités moyennes et faibles pour la considération à plus long terme de VinFast.

**Notre demande**

Nous demandons respectueusement que VinFast accuse réception de cette pétition et, lorsque possible, partage toute mise à jour sur les calendriers de développement des fonctionnalités. Nous comprenons que toutes les demandes ne sont peut-être pas réalisables, et nous apprécions la transparence sur ce qui est et n'est pas possible. Notre communauté valorise la communication honnête et restera des partenaires solidaires quel que soit le résultat.

---

### Fonctionnalités hautement prioritaires

Ces fonctionnalités ont reçu le plus fort soutien de la communauté et représentent les opportunités les plus impactantes pour améliorer l'expérience de propriété.

#### 1. Dashcam et mode Sentinelle

🔴 **PRIORITÉ ÉLEVÉE**

**L'opportunité**

Les véhicules VinFast sont équipés de systèmes de caméras impressionnants pour les vues à 360 degrés et les fonctionnalités ADAS. Les propriétaires ont exprimé un fort intérêt à utiliser ces caméras existantes à des fins de sécurité et de documentation, similaires aux fonctionnalités offertes par d'autres fabricants de VÉ.

**Ce que les propriétaires demandent**

**Mode Dashcam :** La possibilité d'enregistrer en continu les images des caméras du véhicule pendant la conduite, sauvegardées sur une clé USB fournie par l'utilisateur. Cela inclurait l'enregistrement en boucle automatique et une fonction de sauvegarde manuelle pour préserver les clips importants.

**Mode Sentinelle :** Capacité de surveillance en stationnement qui surveille les environs du véhicule et sauvegarde les images lorsqu'un mouvement significatif ou un impact est détecté. Des alertes extérieures optionnelles et des notifications mobiles amélioreraient la sécurité.

**Pourquoi c'est important pour les propriétaires**

La sécurité du véhicule est une préoccupation importante, et plusieurs membres de la communauté ont vécu des incidents dans des stationnements où des preuves vidéo auraient été inestimables. Au-delà de la sécurité, les images dashcam offrent une protection lors d'incidents routiers et de réclamations d'assurance. Cette fonctionnalité mettrait également les véhicules VinFast au même niveau que les offres concurrentes, éliminant un point de comparaison qui favorise actuellement d'autres marques.

**Considérations de mise en œuvre**

Nous reconnaissons que cela nécessite un développement logiciel substantiel incluant les pipelines d'enregistrement, la gestion du stockage, la détection d'événements et le travail sur l'interface utilisateur. Les suggestions ci-dessous sont offertes comme contribution, non comme exigences, et nous faisons confiance à l'équipe d'ingénierie de VinFast pour déterminer la meilleure approche :

- Déploiement progressif commençant par la fonctionnalité dashcam de base avant d'ajouter les fonctionnalités sentinelle
- Programme de tests bêta avec des propriétaires volontaires pour recueillir des commentaires du monde réel
- Notifications push avec images miniatures et possibilité de visualiser ou télécharger les clips directement dans l'application VinFast

**Disponibilité de la communauté pour le soutien**

Notre communauté comprend des propriétaires impatients de participer aux tests bêta et de fournir des commentaires détaillés tout au long du développement. Nous serions honorés de soutenir l'équipe d'ingénierie de VinFast de toute manière utile.

---

#### 2. Réponse de l'accélérateur et conduite à une pédale

🔴 **PRIORITÉ ÉLEVÉE**

**L'opportunité**

De nombreux propriétaires VinFast ont une expérience antérieure avec les VÉ et ont exprimé un intérêt pour des options de dynamique de conduite qui leur permettraient de personnaliser la réponse de l'accélérateur et le comportement du freinage régénératif selon leurs préférences.

**Ce que les propriétaires demandent**

**Options de réponse de l'accélérateur :** Un paramètre sélectionnable par l'utilisateur permettant aux conducteurs de choisir entre la réponse progressive actuelle de l'accélérateur et une réponse plus immédiate de style VÉ. Cela permettrait aux propriétaires de personnaliser l'expérience de conduite selon leurs préférences.

**Conduite à une pédale améliorée :** Un mode de freinage régénératif avec une décélération plus forte qui maintient une force de freinage constante jusqu'à l'arrêt complet. De nombreux propriétaires expérimentés en VÉ citent cela comme l'un de leurs aspects préférés de la propriété d'un véhicule électrique.

**Paramètres persistants :** La possibilité que ces préférences persistent d'un cycle de conduite à l'autre, maintenant la configuration choisie par le propriétaire chaque fois qu'il démarre le véhicule.

**Commentaires et contexte de la communauté**

Lors de nos discussions, les propriétaires ont partagé leurs expériences en comparant le freinage régénératif actuel de VinFast à d'autres VÉ qu'ils ont possédés ou conduits. Le retour constant est que des options de régénération plus fortes, particulièrement à basse vitesse en approchant d'un arrêt, amélioreraient significativement l'expérience de conduite. Les propriétaires ont spécifiquement mentionné l'implémentation à une pédale de GM et le système i-Pedal de Hyundai/Kia comme références qu'ils admirent.

Nous voulons souligner que ces commentaires viennent d'un enthousiasme pour les véhicules VinFast. Les propriétaires sont enthousiastes à propos de la plateforme et voient cela comme une opportunité de rendre un excellent véhicule encore meilleur.

**Considérations de mise en œuvre**

Nous comprenons que le calibrage du groupe motopropulseur implique des considérations d'ingénierie complexes incluant la sécurité, la gestion de la batterie et la conformité réglementaire. Ces suggestions sont offertes comme contribution :

- Paramètres de régénération ajustables exposés via l'interface de paramètres existante du véhicule
- Un véritable mode à une pédale comme option distincte sélectionnable par l'utilisateur
- Paramètres qui persistent d'un cycle de conduite à l'autre et sont inclus dans les profils conducteur

**Disponibilité de la communauté pour le soutien**

Les propriétaires ont exprimé un fort intérêt à participer à tout programme de tests bêta pour des dynamiques de conduite mises à jour. Notre communauté peut fournir des commentaires diversifiés dans différentes conditions de conduite, climats et cas d'utilisation.

---

### Fonctionnalités de priorité moyenne

Ces fonctionnalités représentent des améliorations significatives qui enrichiraient l'expérience de propriété. Nous les présentons pour la considération de VinFast selon les ressources et priorités de la feuille de route.

#### 3. Accès au réseau Tesla Supercharger (NACS)

🟠 **PRIORITÉ MOYENNE**

**L'opportunité**

Le paysage de la recharge des VÉ en Amérique du Nord a considérablement évolué avec l'ouverture par Tesla de son réseau Supercharger aux autres fabricants. L'accès à ce réseau est devenu un facteur important pour de nombreux acheteurs de VÉ et élargirait les options de recharge pour les propriétaires VinFast.

**Ce que les propriétaires demandent**

Les propriétaires accueilleraient favorablement l'adoption par VinFast de la norme de recharge nord-américaine (NACS) et l'accès au réseau Tesla Supercharger. Pour les véhicules actuellement équipés de CCS1, des solutions d'adaptateurs officiels étendraient cet avantage à la base de propriétaires existante.

**Pourquoi c'est important pour les propriétaires**

La confiance dans l'infrastructure de recharge impacte significativement la satisfaction de propriété et les décisions d'achat. Le réseau Supercharger de Tesla offre une couverture étendue et une haute fiabilité. L'accès à ce réseau élargirait les possibilités de voyages sur route et fournirait des options de recharge supplémentaires dans les régions où la couverture CCS est limitée. Nous reconnaissons que cela implique des négociations commerciales et des considérations stratégiques au-delà de l'ingénierie pure, et nous le soulevons comme une priorité identifiée par notre communauté.

---

#### 4. Téléphone comme clé

🟠 **PRIORITÉ MOYENNE**

**L'opportunité**

L'accès au véhicule par téléphone intelligent est devenu de plus en plus courant dans les véhicules modernes et offre des avantages de commodité que de nombreux propriétaires apprécient.

**Ce que les propriétaires demandent**

La possibilité d'utiliser un téléphone intelligent comme clé principale du véhicule via Bluetooth ou technologie Ultra-Wideband, avec support pour le partage de clés numériques avec les membres de la famille via l'application VinFast.

**Pourquoi c'est important pour les propriétaires**

Cette fonctionnalité de commodité simplifie l'utilisation quotidienne en éliminant le besoin de transporter une télécommande séparée. Elle rend également le partage de l'accès au véhicule avec les membres de la famille plus flexible. Nous comprenons que cela implique des considérations matérielles et de sécurité et l'offrons comme une fonctionnalité que notre communauté valorise.

---

#### 5. Données d'énergie et de recharge

🟠 **PRIORITÉ MOYENNE**

**L'opportunité**

Fournir aux propriétaires une visibilité sur la consommation d'énergie et les performances de recharge soutiendrait une meilleure gestion de l'autonomie et renforcerait la confiance dans le véhicule.

**Ce que les propriétaires demandent**

**Affichage de la consommation d'énergie :** Un affichage montrant la consommation d'énergie en temps réel et historique par système, incluant la climatisation, les fonctions chauffantes, l'audio et l'éclairage. Cela aiderait les propriétaires à comprendre comment leurs habitudes d'utilisation affectent l'autonomie.

**Affichage de la courbe de recharge :** Un graphique en temps réel montrant la puissance de recharge pendant les sessions de recharge rapide DC, aidant les propriétaires à comprendre le comportement de recharge de leur véhicule et à optimiser les arrêts de recharge lors des voyages sur route.

**Pourquoi c'est important pour les propriétaires**

La gestion de l'autonomie est particulièrement importante par températures extrêmes lorsque l'utilisation du chauffage/climatisation impacte significativement l'efficacité. Comprendre les courbes de recharge aide les propriétaires à planifier plus efficacement les voyages sur route. Ensemble, ces affichages donneraient aux propriétaires une visibilité complète sur où va l'énergie et à quelle vitesse elle revient — renforçant la confiance dans les capacités du véhicule.

---

### Demandes de fonctionnalités supplémentaires

Les fonctionnalités suivantes ont reçu une priorité plus faible dans les votes de la communauté mais représentent toujours des améliorations significatives. Nous les incluons pour la considération de VinFast dans le cadre de la planification de la feuille de route à plus long terme.

#### 6. Volant/sièges/pare-brise chauffants à distance

🟢 **PRIORITÉ FAIBLE**

Les propriétaires dans les climats froids ont exprimé un intérêt pour la possibilité d'activer à distance le volant chauffant, les sièges chauffants et le dégivrage du pare-brise via l'application mobile VinFast, séparément du contrôle climatique complet de l'habitacle.

---

#### 7. Mémoire des paramètres conducteur et profils

🟢 **PRIORITÉ FAIBLE**

Les ménages avec plusieurs conducteurs bénéficieraient de profils conducteur complets qui sauvegardent et rappellent toutes les préférences incluant la position du siège, les rétroviseurs, le mode de conduite et autres paramètres. Cela réduirait le besoin de reconfigurer manuellement le véhicule lors du changement de conducteur.

---

### Signez la pétition

#### ✍️ Ajoutez votre signature

Votre signature montre à VinFast que les propriétaires sont unis dans ces demandes de fonctionnalités. Chaque signature sera partagée directement avec VinFast Corporate.

[FORMULAIRE ICI]

**Collecte des signatures :** 1-31 mars 2026

Les signatures sont partagées avec VinFast Corporate de manière continue tout au long de la période de collecte.

---

**💬 Votre fonctionnalité rêvée n'est pas sur cette liste ?**

Partagez-la dans notre canal Discord de demandes de fonctionnalités pour les futures pétitions !

[Bouton Rejoindre Discord → vinfastowners.com/discord]

---

### Conclusion

Nous sommes reconnaissants de l'attention de VinFast à cette pétition et de l'opportunité de partager la perspective de notre communauté. Nous reconnaissons que le développement de produits implique des compromis difficiles et des contraintes de ressources, et nous ne nous attendons pas à ce que chaque demande soit satisfaite.

Ce que nous valorisons le plus, c'est le partenariat. Nous croyons que VinFast a construit d'excellents véhicules avec un potentiel énorme, et nous nous engageons à soutenir le succès de la marque en Amérique du Nord. Que ce soit par des tests bêta, des commentaires détaillés, la promotion communautaire, ou simplement en étant patients et compréhensifs pendant que VinFast continue de croître, nous voulons être des partenaires constructifs.

Nous demandons respectueusement :

- La confirmation que cette pétition a été reçue et examinée
- Toute mise à jour que VinFast est en mesure de partager sur les priorités de développement des fonctionnalités
- La transparence sur les contraintes techniques, réglementaires ou commerciales qui pourraient affecter la faisabilité
- La considération d'établir un canal de rétroaction continu avec la communauté des propriétaires

Merci pour votre temps et votre considération. Nous avons hâte de continuer à conduire des véhicules VinFast et à soutenir la croissance de la marque pour les années à venir.

---

### À propos d'AVO

💚

**À propos d'AVO**

Association des Propriétaires VinFast Amérique du Nord

L'Association des Propriétaires VinFast (AVO) est une organisation indépendante gouvernée par ses membres représentant les propriétaires de véhicules électriques VinFast à travers l'Amérique du Nord. Nous ne sommes pas affiliés à VinFast Auto mais travaillons de manière constructive avec l'entreprise pour défendre les intérêts des propriétaires et bâtir une communauté positive autour de la marque.

**600+ Membres** • **États-Unis et Canada** • **Conseil élu** • **Par les propriétaires**

**vinfastowners.org**

Pétition soumise : 28 février 2026 | Signatures : 1-31 mars 2026

*Conduisons l'avenir. Ensemble.*

================================================================================
## SOCIAL MEDIA / ANNOUNCEMENT TEMPLATES
================================================================================

### Discord Announcement - English (for launch)
```
📋 **The AVO Feature Petition is LIVE!**

We've submitted our community feature petition to VinFast — now we need your signature to show them we're united.

**📄 Read & Sign:** vinfastowners.org/petition

🔴 **High Priority:** Dashcam & Sentry Mode, One-Pedal Driving
🟠 **Medium Priority:** NACS/Supercharger Access, Phone as Key, Energy & Charging Insights
🟢 **Low Priority:** Remote Heated Features, Driver Profiles

**Timeline:**
✍️ Signature collection: March 1-31, 2026
📨 Signatures shared directly with VinFast Corporate

This petition was written to be gracious and partnership-focused — we want VinFast to *want* to work with us.

Is your dream feature not on the list? Share it in #software-feature-requests for future petitions!

Thanks for being part of this 💚
```

### Discord Announcement - French (for launch)
```
📋 **La pétition AVO est EN LIGNE !**

Nous avons soumis notre pétition communautaire à VinFast — maintenant nous avons besoin de votre signature pour leur montrer que nous sommes unis.

**📄 Lire et signer :** vinfastowners.org/petition-fr

🔴 **Priorité élevée :** Dashcam et mode Sentinelle, Conduite à une pédale
🟠 **Priorité moyenne :** Accès Supercharger (NACS), Téléphone comme clé, Données d'énergie et de recharge
🟢 **Priorité faible :** Fonctions chauffantes à distance, Profils conducteur

**Calendrier :**
✍️ Collecte des signatures : 1-31 mars 2026
📨 Signatures partagées directement avec VinFast Corporate

Cette pétition a été rédigée pour être respectueuse et axée sur le partenariat — nous voulons que VinFast *veuille* travailler avec nous.

Votre fonctionnalité rêvée n'est pas sur la liste ? Partagez-la dans #software-feature-requests pour les futures pétitions !

Merci de faire partie de ceci 💚
```

### Social Media Post (Facebook, X, etc.)
```
📋 VinFast Owners: Your Voice Matters!

The Association of VinFast Owners has submitted a community feature request petition to VinFast — and we need your signature to show them we're united.

🔴 Dashcam & Sentry Mode
🔴 One-Pedal Driving
🟠 Supercharger Access
🟠 Phone as Key
...and more

✍️ Sign the petition: vinfastowners.org/petition
💬 Join the discussion: vinfastowners.com/discord

Is your dream feature not on this list? Share it in our Discord for future petitions!

💚 Drive the Future. Together.

#VinFast #VF8 #VF9 #ElectricVehicles #EV #VinFastOwners
```

================================================================================
## END OF HANDOFF DOCUMENT
================================================================================
