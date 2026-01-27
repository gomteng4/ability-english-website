# Ability English - Project Structure

## Complete File Tree

```
ability-english/
├── README.md                           # Project documentation
├── package.json                        # Dependencies
├── tsconfig.json                       # TypeScript config
├── tailwind.config.ts                  # Tailwind CSS config
├── next.config.ts                      # Next.js config
├── components.json                     # shadcn/ui config
│
├── public/                             # Static assets
│   ├── data/
│   │   └── prices.xlsx                 # ✅ Pricing data (Excel)
│   └── images/
│       └── curriculum/                 # Course images (auto-loaded)
│           ├── regular/
│           │   ├── immersion/
│           │   │   └── (add .jpg/.png files here)
│           │   ├── senior/
│           │   └── hangout/
│           ├── conversation/
│           │   ├── momentum-a/
│           │   ├── nlife/
│           │   └── ...
│           ├── business/
│           ├── test-prep/
│           └── premium/
│
├── src/
│   ├── app/                            # App Router (Next.js 16)
│   │   ├── layout.tsx                  # ✅ Root layout (Header + Footer)
│   │   ├── page.tsx                    # ✅ Homepage
│   │   ├── globals.css                 # Global styles + Tailwind
│   │   │
│   │   ├── about/                      # About section
│   │   │   ├── page.tsx                # ✅ About Ability English
│   │   │   ├── teachers/
│   │   │   │   ├── page.tsx            # Teachers intro
│   │   │   │   └── list/
│   │   │   │       └── page.tsx        # Teachers list
│   │   │   ├── rules/
│   │   │   │   └── page.tsx            # Enrollment rules
│   │   │   ├── guide/
│   │   │   │   └── page.tsx            # Learning guide
│   │   │   ├── planner/
│   │   │   │   └── page.tsx            # Planner
│   │   │   └── premium/
│   │   │       └── page.tsx            # Premium course
│   │   │
│   │   ├── curriculum/                 # Curriculum section
│   │   │   ├── page.tsx                # ✅ All courses overview
│   │   │   └── [category]/
│   │   │       └── [slug]/
│   │   │           └── page.tsx        # ✅ Dynamic course detail page
│   │   │                               #    (loads local images automatically)
│   │   │
│   │   ├── enrollment/                 # Enrollment & Pricing
│   │   │   └── page.tsx                # ✅ Pricing calculator page
│   │   │
│   │   ├── level-test/                 # Level test
│   │   │   ├── page.tsx                # Level test info
│   │   │   ├── apply/
│   │   │   │   └── page.tsx            # Apply for test
│   │   │   └── ai/
│   │   │       └── page.tsx            # AI test
│   │   │
│   │   ├── plaza/                      # Community
│   │   │   ├── page.tsx                # Plaza main
│   │   │   ├── daily/
│   │   │   ├── business/
│   │   │   └── bigbox/
│   │   │
│   │   └── support/                    # Customer support
│   │       └── inquiry/
│   │           └── page.tsx            # 1:1 inquiry
│   │
│   ├── components/                     # React components
│   │   ├── ui/                         # shadcn/ui components
│   │   │   ├── button.tsx              # ✅ Button
│   │   │   ├── card.tsx                # ✅ Card
│   │   │   ├── dialog.tsx              # ✅ Dialog
│   │   │   ├── dropdown-menu.tsx       # ✅ Dropdown menu
│   │   │   ├── navigation-menu.tsx     # ✅ Navigation menu
│   │   │   └── carousel.tsx            # ✅ Carousel
│   │   │
│   │   ├── header.tsx                  # ✅ Site header with navigation
│   │   ├── footer.tsx                  # ✅ Site footer
│   │   └── pricing-calculator.tsx      # ✅ Excel-based pricing calculator
│   │
│   ├── lib/                            # Utility libraries
│   │   ├── utils.ts                    # ✅ Tailwind class merge utility
│   │   └── pricing.ts                  # ✅ Excel pricing logic
│   │
│   └── config/                         # Configuration
│       └── site.ts                     # ✅ Site config (navigation, metadata)
│
└── node_modules/                       # Dependencies (auto-generated)
```

## ✅ Implemented Features

### Core Pages
- [x] Homepage with hero, benefits, CTA
- [x] About page (benefits of online learning)
- [x] Curriculum overview page
- [x] Dynamic course detail pages ([category]/[slug])
- [x] Enrollment page with pricing calculator
- [ ] Level test pages (placeholder structure)
- [ ] Community pages (placeholder structure)

### Components
- [x] Header with dropdown navigation
- [x] Footer with links
- [x] Pricing calculator (Excel-based)
- [x] shadcn/ui components (button, card, navigation, etc.)

### Utilities
- [x] Excel reading and price calculation
- [x] Local image auto-loading from file system
- [x] Site configuration with full navigation tree

## 🎯 Data Management Strategy

### Pricing Data
- **Source**: `public/data/prices.xlsx` (Excel file)
- **Loading**: Server-side with `xlsx` library
- **Format**: 
  ```
  과정명 | 주당횟수 | 시간(분) | 1개월_가격 | 3개월_가격 | 6개월_가격
  ```

### Course Content
- **Source**: Local JSON/Markdown files (to be added)
- **Location**: Ideally `public/data/courses/[category]/[slug].json`
- **Loading**: Server-side in `getCourseData()` function

### Images
- **Source**: `public/images/curriculum/[category]/[slug]/`
- **Loading**: Automatic file system scan
- **Formats**: `.jpg`, `.jpeg`, `.png`, `.webp`
- **Pattern**: All images in folder are displayed

## 📝 To-Do List

### Content
- [ ] Add real pricing data to `prices.xlsx`
- [ ] Add course images to `public/images/curriculum/`
- [ ] Convert crawler data to JSON for course pages
- [ ] Write teacher profiles
- [ ] Add learning guide content

### Pages (To be created)
- [ ] `/about/teachers` - Teacher intro
- [ ] `/about/teachers/list` - Teacher list
- [ ] `/about/rules` - Enrollment rules
- [ ] `/about/guide` - Learning guide
- [ ] `/level-test` - Level test pages
- [ ] `/plaza/*` - Community pages

### Features
- [ ] Search functionality
- [ ] Student testimonials section
- [ ] FAQ section
- [ ] Contact form (1:1 inquiry)
- [ ] Newsletter signup

### Optimization
- [ ] Add loading skeletons
- [ ] Optimize images with `next/image`
- [ ] Add error boundaries
- [ ] SEO metadata for all pages
- [ ] Analytics integration

## 🚀 Quick Start

```bash
cd ability-english
npm install
npm run dev
```

Visit `http://localhost:3000`

## 📌 Key URLs

- Homepage: `/`
- About: `/about`
- Curriculum: `/curriculum`
- Immersion Course: `/curriculum/regular/immersion`
- Pricing Calculator: `/enrollment`
- Level Test: `/level-test`

---

Last updated: 2026-01-26
