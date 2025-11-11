# GitHub Labels for AVO Issue Tracker

## How to Add Labels

Go to: https://github.com/vinfastownersorg-cyber/avo-website/labels

Click "New label" for each one below and copy the name, description, and color.

---

## Issue Type Labels

| Name | Description | Color |
|------|-------------|-------|
| `vehicle-issue` | Problem with VinFast vehicle | `#d73a4a` (red) |
| `app-issue` | VinFast mobile app problem | `#0075ca` (blue) |
| `service-issue` | Service center or RepairWise issue | `#fbca04` (yellow) |
| `feature-request` | New feature suggestion | `#a2eeef` (light blue) |
| `escalation` | Needs board escalation to VinFast | `#d93f0b` (orange-red) |
| `website-bug` | AVO website bug | `#d876e3` (purple) |

---

## Vehicle Model Labels

| Name | Description | Color |
|------|-------------|-------|
| `vf8` | Affects VF8 models | `#1d76db` (blue) |
| `vf9` | Affects VF9 models | `#0e8a16` (green) |
| `vf6` | Affects VF6 models | `#fbca04` (yellow) |
| `vf5` | Affects VF5 models | `#f9d0c4` (pink) |
| `all-models` | Affects all VinFast models | `#000000` (black) |

---

## Component Labels

| Name | Description | Color |
|------|-------------|-------|
| `charging` | Charging or battery related | `#0075ca` (blue) |
| `infotainment` | Infotainment system | `#1d76db` (blue) |
| `adas` | ADAS / driver assistance | `#5319e7` (purple) |
| `motor-drivetrain` | Motor or drivetrain | `#d73a4a` (red) |
| `climate` | Climate control | `#a2eeef` (light blue) |
| `app-connectivity` | App or connectivity | `#0075ca` (blue) |
| `service-provider` | RepairWise/NAPA NexDrive | `#fbca04` (yellow) |

---

## Priority/Severity Labels

| Name | Description | Color |
|------|-------------|-------|
| `critical` | Safety issue or vehicle inoperable | `#b60205` (dark red) |
| `high-priority` | Significant impact | `#d93f0b` (orange) |
| `medium-priority` | Important but manageable | `#fbca04` (yellow) |
| `low-priority` | Minor issue | `#c5def5` (light blue) |

---

## Status Labels

| Name | Description | Color |
|------|-------------|-------|
| `needs-triage` | New issue, needs review | `#d876e3` (purple) |
| `needs-info` | Waiting for more information | `#d4c5f9` (light purple) |
| `confirmed` | Issue verified | `#0e8a16` (green) |
| `workaround-exists` | Temporary solution available | `#fbca04` (yellow) |
| `escalated-to-vinfast` | Sent to VinFast Corporate | `#d93f0b` (orange) |
| `resolved` | Issue fixed | `#0e8a16` (green) |
| `wont-fix` | Cannot or will not fix | `#ffffff` (white) |
| `duplicate` | Duplicate of another issue | `#cfd3d7` (gray) |
| `board-review` | Needs AVO board review | `#5319e7` (purple) |

---

## Region Labels (Optional)

| Name | Description | Color |
|------|-------------|-------|
| `usa` | United States | `#0052a3` (blue) |
| `canada` | Canada | `#ff0000` (red) |

---

## Quick Import (Alternative Method)

If you want to use a script instead of manual entry, you can use GitHub CLI:

```bash
gh label create "vehicle-issue" --description "Problem with VinFast vehicle" --color "d73a4a"
gh label create "app-issue" --description "VinFast mobile app problem" --color "0075ca"
# ... (repeat for all labels)
```

Or use this JSON file with a label sync tool.

---

## Label Usage Guide

**When triaging new issues:**
1. Add issue type (`vehicle-issue`, `app-issue`, etc.)
2. Add vehicle model if applicable (`vf8`, `vf9`)
3. Add component (`charging`, `infotainment`, etc.)
4. Add priority (`critical`, `high-priority`, etc.)
5. Add initial status (`needs-triage` → `confirmed`)

**Example issue labels:**
- `vehicle-issue`, `vf8`, `charging`, `high-priority`, `confirmed`
- `service-issue`, `service-provider`, `escalated-to-vinfast`
- `feature-request`, `app-connectivity`, `medium-priority`
