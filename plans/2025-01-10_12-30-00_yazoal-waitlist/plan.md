# Spec Provenance
- Created at: 2025-01-10T12:30:00Z
- User: Fintech startup founder looking to validate interest-free mortgage concept
- Strategy: Intent capture landing page + waitlist (Option C from validation approaches)

# Spec Header (Name, Smallest Scope, Non-Goals)

**Project Name**: Yazoal Waitlist Landing Page

**Smallest Acceptable Scope**: Professional landing page that explains Yazoal's value proposition (interest-free mortgages up to $500k for US home buyers) and captures detailed intent data from prospects including email, income range, target home budget, purchase timeline, and current housing situation.

**Non-Goals (explicitly out of scope)**:
- Actual mortgage application processing
- Plaid integration or bank account linking
- Home listing scraping or real estate data
- User accounts or authentication
- Document upload functionality
- Admin dashboard (can be built later if needed)
- Email marketing automation (manual follow-up for MVP)

# Paths to supplementary guidelines
- Tech Stack: https://raw.githubusercontent.com/memextech/templates/refs/heads/main/stack/nextjs_fullstack.md
- Design System: https://raw.githubusercontent.com/memextech/templates/refs/heads/main/design/minimalist-b2b-professional.md

# Decision Snapshot

**Architecture Choice**: Next.js fullstack web app with SQLite for waitlist storage
- **Web vs Mobile**: Web-first approach for fastest validation and iteration
- **Stack**: Next.js App Router + Tailwind + SQLite/libSQL + Netlify deployment
- **Design**: Minimalist B2B Professional theme to build trust in fintech context
- **Data Capture**: Intent capture form with qualifying questions to gauge serious prospects

**Key Trade-offs Accepted**:
- Manual email follow-up vs automated sequences (faster to launch)
- SQLite local + Turso prod vs full database (sufficient for waitlist scale)
- Static form vs dynamic qualification flow (simpler, less dev time)

# Architecture at a Glance

```
Landing Page Architecture:
├── Hero Section (Value Prop + Social Proof)
├── How It Works (3-step process visualization)
├── Intent Capture Form (qualification questions)
├── Trust Building (security, compliance mentions)
└── Footer (legal links, contact)

Tech Stack:
├── Frontend: Next.js App Router + Tailwind CSS
├── Database: SQLite (local) → Turso (production)
├── ORM: Drizzle for schema management
├── Hosting: Netlify (zero-config deployment)
├── Form Handling: Next.js API routes
└── Styling: Minimalist B2B Professional design system
```

**Database Schema**:
```sql
waitlist_entries:
- id (auto-increment primary key)  
- email (unique, required)
- full_name (required)
- phone (optional)
- annual_income_range (enum: <50k, 50k-100k, 100k-200k, 200k-500k, >500k)
- target_home_budget (enum: <200k, 200k-300k, 300k-400k, 400k-500k)
- purchase_timeline (enum: 0-6months, 6-12months, 1-2years, 2+years)
- current_housing (enum: rent, own-mortgage, own-outright, other)
- current_monthly_payment (number, optional)
- zip_code (5 digits, for market analysis)
- utm_source (tracking, optional)
- created_at (timestamp)
- notes (text, optional - for any additional context user provides)
```

# Implementation Plan

## Phase 1: Landing Page Foundation (Days 1-2)
1. **Project Scaffolding**
   - Initialize Next.js app with Tailwind CSS
   - Configure Netlify deployment setup
   - Implement minimalist B2B professional design system

2. **Core Page Sections**
   - Hero section with compelling value proposition
   - "How It Works" explanation (3-step process)
   - Social proof section (placeholder for testimonials/stats)
   - Trust indicators (security, licensing mentions)

3. **Database Setup**
   - Design waitlist schema with qualification fields
   - Configure SQLite for local development
   - Set up Drizzle ORM with migrations

## Phase 2: Intent Capture System (Days 3-4)
1. **Qualification Form**
   - Multi-step form with progress indicator
   - Income range selection (radio buttons)
   - Target home budget selection
   - Purchase timeline assessment
   - Current housing situation
   - Geographic targeting (zip code)

2. **Form Processing**
   - API route for form submission
   - Email validation and duplicate prevention
   - Success state with confirmation message
   - Error handling with user-friendly messages

3. **Data Storage**
   - Secure storage of waitlist entries
   - Basic analytics tracking (submission rates)
   - UTC timestamp for all entries

## Phase 3: Production Readiness (Days 5-6)
1. **Production Database**
   - Turso setup and configuration
   - Environment variable management
   - Database migration scripts

2. **Deployment & Monitoring**
   - Netlify deployment configuration
   - Form submission testing
   - Performance optimization
   - Error monitoring setup

3. **Content Optimization**
   - Compelling copy that builds trust
   - Clear value proposition messaging
   - Compliance disclaimers (regulatory awareness)
   - SEO meta tags and Open Graph

# Verification & Demo Script

## Local Development Testing
1. **Form Functionality**
   ```bash
   # Start local development
   netlify dev --offline
   
   # Test form submission at http://localhost:8888
   # Verify database entries at SQLite level
   # Test validation errors (duplicate email, missing fields)
   ```

2. **Data Verification**
   ```bash
   # Check waitlist entries
   npx drizzle-kit studio
   
   # Verify all form fields are captured correctly
   # Test edge cases (special characters, long inputs)
   ```

## Production Validation
1. **Deployment Testing**
   - Submit test entries through production form
   - Verify Turso database connectivity
   - Test from multiple devices/browsers
   - Validate email format handling

2. **Performance Benchmarks**
   - Page load time < 2 seconds
   - Form submission < 1 second
   - Mobile responsiveness across devices
   - Accessibility compliance (keyboard navigation, screen readers)

## User Experience Flow
1. **Landing Experience**: User arrives → reads value prop → understands process → feels motivated to join
2. **Form Completion**: User completes qualification questions → receives confirmation → gets follow-up expectations
3. **Follow-up**: Manual email outreach based on qualification data → schedule calls with high-intent prospects

# Deploy

## Environment Setup
```bash
# Local environment
DATABASE_URL=file:.data/dev.db

# Production environment (Netlify)
TURSO_DATABASE_URL=libsql://[your-db].turso.io
TURSO_AUTH_TOKEN=[your-token]
```

## Deployment Commands
```bash
# Initial setup
netlify link
netlify env:import .env

# Production deployment
netlify deploy --build --prod
```

## Post-Launch Monitoring
1. **Analytics Setup**
   - Track form conversion rates
   - Monitor qualification data patterns
   - Geographic distribution analysis

2. **Manual Follow-up Process**
   - Weekly CSV export of new signups
   - Qualification scoring for outreach priority
   - Manual email campaigns to high-intent prospects

3. **Iteration Planning**
   - A/B testing different value propositions
   - Optimizing form conversion rates
   - Adding dynamic content based on zip code/market data