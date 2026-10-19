# Implementation Prompt: Vertex Home Page

## 1. Goal
Implement the **Vertex Home Page** matching the desktop design reference [vertex-home.png](file:///g:/All%20Projects/ProgramingProjects/APPLICATION_FRONT_ET_BACKEND/Vertex/design/vertex-home.png). The home page serves as the learner entry point featuring the header navigation with user profile, the intelligent search hero section, the featured courses section ("Next.js for Production", "Docker Essentials", "TypeScript Deep Dive"), the weekly update announcement, and the bottom decorative equalizer gradient graphic.

## 2. Skills Referenced
- `AGENTS.md` (UI fidelity rules, section 3 & 7 decisions, server/client boundaries)
- `modern-web-guidance` (Modern CSS, Tailwind v4 design tokens, responsive layout, semantic HTML)
- `node_modules/next/dist/docs/` (Next.js 16 App Router conventions)

## 3. Code Inspected
- [design/vertex-home.png](file:///g:/All%20Projects/ProgramingProjects/APPLICATION_FRONT_ET_BACKEND/Vertex/design/vertex-home.png): Source of truth for layout, spacing, typography, colors, and components.
- [components/ui/vertex-logo.tsx](file:///g:/All%20Projects/ProgramingProjects/APPLICATION_FRONT_ET_BACKEND/Vertex/components/ui/vertex-logo.tsx): Vertex brand mark.
- [components/ui/button.tsx](file:///g:/All%20Projects/ProgramingProjects/APPLICATION_FRONT_ET_BACKEND/Vertex/components/ui/button.tsx): Primary and secondary buttons.
- [components/ui/badge.tsx](file:///g:/All%20Projects/ProgramingProjects/APPLICATION_FRONT_ET_BACKEND/Vertex/components/ui/badge.tsx): Badges/tags (`INTELLIGENT LEARNING`).
- [components/cards/course-card.tsx](file:///g:/All%20Projects/ProgramingProjects/APPLICATION_FRONT_ET_BACKEND/Vertex/components/cards/course-card.tsx): Course card structure.
- [app/globals.css](file:///g:/All%20Projects/ProgramingProjects/APPLICATION_FRONT_ET_BACKEND/Vertex/app/globals.css): Design system tokens and typography utilities.
- [design/Design.tsx](file:///g:/All%20Projects/ProgramingProjects/APPLICATION_FRONT_ET_BACKEND/Vertex/design/Design.tsx): Preserved Design System showcase component.
- [app/design-app/page.tsx](file:///g:/All%20Projects/ProgramingProjects/APPLICATION_FRONT_ET_BACKEND/Vertex/app/design-app/page.tsx): Placeholder route where the design system showcase can be rendered.

## 4. Decisions & Assumptions
- **Route Placement**:
  - The Vertex Home Page will be rendered on the root route [app/page.tsx](file:///g:/All%20Projects/ProgramingProjects/APPLICATION_FRONT_ET_BACKEND/Vertex/app/page.tsx) (`http://localhost:3000/`).
  - The design system showcase previously on `/` will be mounted on [app/design-app/page.tsx](file:///g:/All%20Projects/ProgramingProjects/APPLICATION_FRONT_ET_BACKEND/Vertex/app/design-app/page.tsx) (`/design-app`) using [design/Design.tsx](file:///g:/All%20Projects/ProgramingProjects/APPLICATION_FRONT_ET_BACKEND/Vertex/design/Design.tsx) so both remain accessible.
- **Header / Navigation**:
  - Left: `VertexLogo` (size="md") + Navigation links "Courses" and "My Learning".
  - Right: Notification Bell icon (`Bell` outline) and circular user profile avatar with subtle border and image.
- **Hero Section**:
  - Centered layout with generous vertical spacing.
  - Tag: Pill badge `INTELLIGENT LEARNING` in `#F97316` on `#FFEEE5` with `#FED7AA` border.
  - Headline: "Search your learning in plain English." in `Playfair Display` Bold (~48–56px) with clean line-break.
  - Subtitle: "Vertex understands what you want to learn and finds the exact lessons across all your courses." in Inter Regular (~16–18px, `#64748B`).
  - CTA Button: "Explore Courses →" in primary orange (`#F97316`) with `ArrowRight` icon.
  - Search Input: Prominent 54px-height search box with rounded-[16px] corners, soft shadow, search icon, placeholder "Ask anything about your learning...", and `⌘ K` keyboard shortcut pill.
- **All Courses Section**:
  - Section title: "All Courses" in `Playfair Display` Bold (~28–30px).
  - Top-right link: "View all courses →" in `#F97316`.
  - 3 Featured Cards:
    1. **Next.js for Production**: Black square logo with "N", Intermediate, 18h 24m, 12 modules.
    2. **Docker Essentials**: Docker whale icon with container stacks, Beginner, 10h 12m, 8 modules.
    3. **TypeScript Deep Dive**: Blue square with "TS", Intermediate, 14h 36m, 10 modules.
  - Announcement Divider: Orange star icon (`Star`) centered between subtle horizontal dividing lines with "New courses and lessons added every week."
- **Bottom Graphic**:
  - Responsive vertical equalizer bars in warm peach/orange gradients (`#F97316` / `#FB923C` / `#FED7AA`) fading upwards to transparent, accurately reproducing the visual footer in the design.
- **Mobile Responsiveness**:
  - Adapt navigation (collapse/flex appropriately), scale hero typography cleanly, stack course cards to 1 column on mobile while keeping the desktop layout identical to [vertex-home.png](file:///g:/All%20Projects/ProgramingProjects/APPLICATION_FRONT_ET_BACKEND/Vertex/design/vertex-home.png).

## 5. Files to Touch / Create
- `components/home/navbar.tsx`: Header component with logo, nav links, bell icon, and user avatar.
- `components/home/hero-section.tsx`: Hero section with badge, heading, subtitle, CTA button, and search input.
- `components/home/all-courses-section.tsx`: Courses grid and weekly update announcement.
- `components/home/bottom-graphic.tsx`: Decorative equalizer gradient bar graphic.
- `app/page.tsx`: Vertex Home Page assembling all components.
- `app/design-app/page.tsx`: Import and render `DesignSystemPage` from `design/Design.tsx`.

## 6. Requirements
- Exact visual fidelity with [vertex-home.png](file:///g:/All%20Projects/ProgramingProjects/APPLICATION_FRONT_ET_BACKEND/Vertex/design/vertex-home.png) (colors, spacing, typography, font weights, shadows).
- Playfair Display for headings ("Search your learning in plain English.", "All Courses") and Inter for body/UI.
- Clean semantic HTML structure (`<header>`, `<nav>`, `<main>`, `<section>`).
- Zero layout shift or overflow on smaller screens.

## 7. Security Considerations
- Read-only presentational home page as specified in `AGENTS.md` (no secret tokens or server credentials exposed to client).

## 8. Acceptance Criteria
1. Root page (`/`) renders the Vertex Home Page exactly matching [vertex-home.png](file:///g:/All%20Projects/ProgramingProjects/APPLICATION_FRONT_ET_BACKEND/Vertex/design/vertex-home.png).
2. Header renders Vertex logo, "Courses", "My Learning", bell icon, and user profile avatar.
3. Hero section renders "INTELLIGENT LEARNING" badge, Playfair Display heading, subtitle, "Explore Courses →" button, and the search input with `⌘ K` badge.
4. "All Courses" section renders "Next.js for Production", "Docker Essentials", and "TypeScript Deep Dive" with correct metadata and brand icons.
5. Star divider with "New courses and lessons added every week." renders cleanly.
6. The bottom equalizer gradient artwork renders at the base of the page.
7. `/design-app` route renders the design system showcase without errors.
8. `npx tsc --noEmit` and `npm run lint` pass with 0 errors.

## 9. Checks to Run
- `npx tsc --noEmit`: TypeScript type-checking.
- `npm run lint`: ESLint check.
- `curl / read_url_content`: Verify `http://localhost:3000/` and `http://localhost:3000/design-app` respond with status 200.

## 10. Manual Test Steps
1. Open `http://localhost:3000` in the browser.
2. Verify Header: check Vertex logo, "Courses", "My Learning", notifications bell, and profile avatar.
3. Verify Hero: inspect "INTELLIGENT LEARNING" pill, the two-line Playfair heading, subtitle, "Explore Courses" button, and large search input.
4. Verify Courses: check the 3 course cards (Next.js, Docker, TypeScript) with their specific icons and stats.
5. Verify Announcement: inspect the orange star and "New courses and lessons added every week." text.
6. Verify Bottom Graphic: inspect the orange gradient equalizer bars at the bottom.
7. Open `http://localhost:3000/design-app` and verify the design system showcase remains fully functional.
8. Resize window to mobile width (375px) to confirm clean responsive stacking.
