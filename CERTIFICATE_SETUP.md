# Certificate Setup Guide

## How to Add Your Certificate PDFs

To display your award certificates when users click on the award cards, follow these steps:

### 1. Add Certificate Files to Public Folder

Place your certificate PDF files in the `public` folder with these names:

```
public/
  ├── MoE_Debarun_Ghosh.pdf           (School Innovation Marathon 2024)
  ├── COG_Debarun_ICCRKolkata.pdf     (India Photo Fest 2023)
  └── Debarun_IEEE_Competition.pdf    (IEEE Education Week)
```

### 2. Update the Awards Component

After adding the PDFs, update the certificate paths in `src/components/Awards.jsx`:

```javascript
const awards = [
  {
    title: 'Evaluator for School Innovation Marathon 2024',
    // ... other properties
    certificate: '/MoE_Debarun_Ghosh.pdf',  // ✅ Update this path
  },
  {
    title: 'INDIA PHOTO FEST 2023 - Exhibition by ICCR',
    // ... other properties
    certificate: '/COG_Debarun_ICCRKolkata.pdf',  // ✅ Update this path
  },
  {
    title: 'Winner of IEEE Education Week Blog Write Way Competition',
    // ... other properties
    certificate: '/Debarun_IEEE_Competition.pdf',  // ✅ Update this path
  },
];
```

### 3. Alternative: Convert PDFs to Images

If you want better preview in the modal, you can convert your PDFs to high-resolution images (PNG/JPG):

1. Convert PDFs to images using any online tool or:
   ```bash
   # Using imagemagick (if installed)
   convert -density 300 certificate.pdf certificate.png
   ```

2. Save images with same names:
   ```
   public/
     ├── MoE_Debarun_Ghosh.png
     ├── COG_Debarun_ICCRKolkata.png
     └── Debarun_IEEE_Competition.png
   ```

3. Update extensions in Awards.jsx:
   ```javascript
   certificate: '/MoE_Debarun_Ghosh.png',
   ```

## Features Implemented ✅

1. **Interactive Cards**: Click on any award with a certificate badge
2. **Flip Animation**: Card rotates 360° and scales up before opening modal
3. **Hover Effects**: Icon wiggles when hovering over cards with certificates
4. **Certificate Modal**: Full-screen certificate display with details
5. **Visual Indicators**: Green badge showing "Click to view certificate"
6. **Responsive Design**: Works on all screen sizes

## Current Status

- ⏳ Certificate paths point to placeholder (current resume PDF)
- ✅ Animation system ready
- ✅ Modal component working
- ✅ All 5 awards added (3 new + 2 old)

**Next Step**: Add your actual certificate PDF/image files to the public folder!
