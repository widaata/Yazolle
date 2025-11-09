# Yazoal Project Rules

## Project Overview

**Product Name**: Yazoal  
**Core Concept**: Interest-free mortgage platform for US home buyers purchasing homes up to $500,000 USD

**Business Model**: Third-party companies fund interest-free mortgages by paying for access to consumer spending insights aggregated from applicant banking data. This B2B revenue stream is the core monetization strategy.

## Multi-Phase Development Strategy

### Phase 1: Waitlist Validation (COMPLETED)
- **Goal**: Validate consumer demand for interest-free mortgages
- **Scope**: Landing page with detailed intent capture form including expense tracking
- **Status**: ✅ LIVE - http://localhost:3000
- **Plan Location**: `./plans/2025-01-10_12-30-00_yazoal-waitlist/plan.md`
- **Key Features**:
  - Professional landing page with green theme (#10B981)
  - Custom Yazoal house logo and branding
  - Comprehensive waitlist form with expense provider tracking
  - Database storage with 30+ data fields per applicant

### Phase 2: Consumer Application Portal (FUTURE)
- **Goal**: Build full mortgage application flow with real applicant data collection
- **Core Features**:
  - User account creation (applicant + joint applicants)
  - Profile details (name, age, address, occupation, salary, current housing payment)
  - Plaid integration for bank account linking
  - Automatic expense categorization (housing, transportation, food, entertainment)
  - Document uploads (tax statements, employment verification letters)
  - Home listing submission (URL scraping for images, address, price, beds/baths)
  - Application submission with email confirmation
- **Critical Requirement**: Crystal-clear consumer consent language explaining data sharing with third parties (for B2B monetization)
- **Timing**: Only after Phase 1 validates demand

### Phase 3: B2B Company Portal (FUTURE)
- **Goal**: Monetize via geospatial spending insights for sponsor companies
- **Core Features**:
  - Multi-tenant architecture for third-party company accounts
  - Live map with data points for applicant addresses (current + future homes)
  - Spending aggregation by company/brand (e.g., Netflix subscribers)
  - Filtering by spending categories and amounts
  - Data sourced from Plaid transaction history
- **Critical Requirement**: Full regulatory compliance (CFPB, data privacy laws, consumer consent)
- **Timing**: Only after Phase 2 has real applicant data

## Technical Stack Conventions

**Approved Stack** (Phase 1 implemented):
- Frontend: Next.js App Router + TypeScript + Tailwind CSS
- Database: SQLite (local dev) → Turso/libSQL (production)
- ORM: Drizzle with explicit migrations
- Hosting: Netlify (zero-config Next.js deployment)
- Design System: Minimalist B2B Professional theme with green color palette

**Development Environment**:
- Package Manager: npm (Node.js v20.18.0)
- Dev Server: `npm run dev` on http://localhost:3000
- Database Migrations: `npx drizzle-kit generate` → `npx drizzle-kit migrate`
- Database Studio: `npm run db:studio` (https://local.drizzle.studio)

**Future Integrations** (Phase 2+):
- Plaid API for bank account linking and transaction data
- Web scraping for real estate listing details
- Document storage for tax/employment verification uploads
- Email service for application confirmations

## Design System & Branding

**Color Palette**:
- Primary Green: #10B981 (used consistently across logo, buttons, accents)
- Background: #ffffff (pure white)
- Text: #0f172a (slate-900 for primary text)
- Secondary Text: #475569 (slate-600)
- Borders: #e2e8f0 (slate-200)

**Logo & Branding**:
- Custom Yazoal house logo (40x40px SVG)
- Green background (#10B981) with white house icon
- Favicon: `/public/favicon.svg` (configured in layout metadata)
- Typography: Inter font family for professional appearance

**Form Design Patterns**:
- Required fields marked with red asterisks (*)
- Green focus states for all inputs (#10B981)
- Expense tracking in bordered cards with provider dropdowns
- "Other - please specify" pattern with conditional text fields

## Database Schema & Data Architecture

**Waitlist Entries Table** (30+ fields):
```typescript
- id (auto-increment)
- email (unique, required) 
- firstName, lastName (separated fields, required)
- phone (optional)
- annualIncomeRange, targetHomeBudget, purchaseTimeline (enums, required)
- currentHousing, currentMonthlyPayment, zipCode (required)
- Expense tracking (7 categories × 3 fields each = 21 fields):
  - entertainmentAmount/Provider/ProviderOther
  - homeInsuranceAmount/Provider/ProviderOther  
  - utilitiesAmount/Provider/ProviderOther
  - carPaymentAmount/Provider/ProviderOther
  - carInsuranceAmount/Provider/ProviderOther
  - internetAmount/Provider/ProviderOther
  - phoneAmount/Provider/ProviderOther
- utmSource, notes (optional)
- createdAt (timestamp)
```

**Provider Options Pattern**:
- Curated dropdown lists for common providers in each category
- "Other - please specify" option with conditional text field
- Categories: Entertainment, Home Insurance, Utilities, Car Payment, Car Insurance, Internet, Phone

## Domain-Specific Requirements

### Geographic Scope
- **Target Market**: United States only
- **Target Users**: American home buyers only
- **Data Collection**: ZIP codes for market segmentation

### Financial Parameters
- **Mortgage Cap**: $500,000 USD maximum home purchase price
- **Income Ranges**: <50k, 50k-100k, 100k-200k, 200k-500k, >500k
- **Home Budget Ranges**: <200k, 200k-300k, 300k-400k, 400k-500k
- **Purchase Timelines**: 0-6months, 6-12months, 1-2years, 2+years

### Regulatory Awareness
- CFPB (Consumer Financial Protection Bureau) compliance required
- Consumer consent mandatory before data sharing with third parties
- Data privacy laws (state and federal) must be addressed
- Legal review required before launching B2B portal

## Development Patterns & Troubleshooting

**Common Issues & Solutions**:
- **Database Schema Changes**: Always remove old `.data/dev.db` and run fresh migrations to avoid schema conflicts
- **Next.js Build Issues**: Remove `.next` directory and restart dev server if encountering "Internal Server Error"
- **Favicon Loading**: Place in `/public/favicon.svg`, configure in layout metadata, restart dev server, clear browser cache
- **Form Validation**: Use both client-side (required attributes) and server-side validation in API routes

**Development Workflow**:
1. Schema changes: Update `db/schema.ts` → Generate migration → Run migration → Restart server
2. Component updates: Implement changes → Test in browser → Verify API endpoints
3. Database troubleshooting: Remove `.data` folder → Run migrations → Test with sample data

## Naming Conventions

**Application Entities**:
- "Home buyer" or "applicant" (consumer-facing users)
- "Joint applicant" (co-applicants contributing to housing payments)
- "Third-party companies" or "sponsors" (B2B customers funding mortgages)
- "Target home" (property applicant wants to purchase)
- "Expense categories" (entertainment, insurance, utilities, etc.)

**Code Patterns**:
- Form fields: camelCase (firstName, lastName, annualIncomeRange)
- Database columns: snake_case (first_name, annual_income_range)
- Components: PascalCase (WaitlistForm, Logo, ExpenseField)
- Provider dropdowns: "Other - please specify" triggers conditional fields

## Project Success Metrics

**Phase 1 Validation Goals**:
- Measure waitlist signup conversion rates
- Analyze income/budget distribution of applicants
- Track geographic distribution via ZIP codes
- Assess expense pattern data quality for B2B viability
- Validate UI/UX through form completion rates

**Data Quality Indicators**:
- Complete vs partial form submissions
- Provider selection patterns (branded vs "Other")
- Expense amount distributions by category
- Timeline preferences for purchase intent

## Reference Guidelines

- **Tech Stack**: https://raw.githubusercontent.com/memextech/templates/refs/heads/main/stack/nextjs_fullstack.md
- **Design System**: https://raw.githubusercontent.com/memextech/templates/refs/heads/main/design/minimalist-b2b-professional.md