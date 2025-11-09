# Update Instructions for Legal Documents

## Overview
The website has been updated from "Yazoal" to "Yazolle" and new pages have been created. However, the Privacy Policy and Terms of Service pages currently contain placeholder content.

## Files That Need Content Updates

### 1. About Us Page
**File Location**: `app/about/page.tsx`
**Current Status**: Contains placeholder content
**Action Needed**: Replace the content inside the `<div className="bg-gray-50 p-8 rounded-lg border border-gray-200 mb-8">` section with the content from your "About Us.txt" file.

**Steps**:
1. Open `app/about/page.tsx`
2. Locate the section starting with `<div className="prose prose-lg max-w-none">`
3. Replace the existing paragraph content with your About Us text
4. Maintain the existing HTML structure and styling classes

### 2. Privacy Policy Page
**File Location**: `app/privacy/page.tsx`
**Current Status**: Contains placeholder privacy policy
**Action Needed**: Replace with content from "Yazolle Privacy Policy.pdf"

**Steps**:
1. Extract text content from the PDF (you can use a PDF-to-text converter or copy manually)
2. Open `app/privacy/page.tsx`
3. Replace the content inside the sections (starting around line 30)
4. Keep the existing section structure with `<section>` tags and `<h2>` headings
5. Format the content to match the existing HTML structure
6. Remove the yellow warning box at the bottom once content is finalized

### 3. Terms of Service Page
**File Location**: `app/terms/page.tsx`
**Current Status**: Contains placeholder terms
**Action Needed**: Replace with content from "Yazolle Terms of Service.pdf"

**Steps**:
1. Extract text content from the PDF
2. Open `app/terms/page.tsx`
3. Replace the content inside the sections (starting around line 30)
4. Maintain section structure with proper headings
5. Remove the yellow warning box at the bottom once content is finalized

## How to Update Content

### Option 1: Manual Copy-Paste
1. Open the PDF files in a PDF reader
2. Copy the text content
3. Open the corresponding `.tsx` file in a text editor
4. Replace the placeholder content while keeping the HTML tags
5. Save the file

### Option 2: Using a Code Editor
1. Use VS Code or similar editor
2. Open the project folder
3. Navigate to the specific page file
4. Replace content section by section
5. Preview in browser at http://localhost:3000

## Important Notes

- **Preserve HTML Structure**: Keep all className attributes, div tags, and section tags intact
- **Styling**: The pages use Tailwind CSS classes - don't remove these
- **Links**: Ensure mailto links and internal page links remain functional
- **Formatting**: Use `<p>`, `<ul>`, `<li>`, `<h2>`, etc. for proper formatting
- **Testing**: After updating, check each page at:
  - About Us: http://localhost:3000/about
  - Contact: http://localhost:3000/contact
  - Privacy: http://localhost:3000/privacy
  - Terms: http://localhost:3000/terms

## Example Format

```tsx
<section>
  <h2 className="text-2xl font-bold text-gray-900 mb-4">Section Title</h2>
  <p className="text-gray-700 leading-relaxed">
    Your paragraph text here...
  </p>
  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
    <li>Bullet point 1</li>
    <li>Bullet point 2</li>
  </ul>
</section>
```

## Contact Support Email
All pages now reference: **support@yazolle.com**

Make sure this email is set up and monitored for incoming inquiries.
