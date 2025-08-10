# Power In Action - Interact Club Website

## File Structure

### Project Assets
- **Images**: Store project images in `public/images/projects/`
- **PDFs**: Store project PDF files in `public/pdf/`
- **Logo**: Main logo should be placed at `public/images/logo.png`

### Admin Access
- **URL**: `/admin`
- **Username**: `admin`
- **Password**: `powerinaction2025`

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Deployment

This project is configured for deployment on:
- Netlify (automatic deployment)
- GitHub Pages
- Any static hosting service

### File Upload Structure

When uploading files through the admin panel:
- **Project Images**: Creates blob URLs for immediate display
- **PDF Reports**: Creates downloadable blob URLs
- **Static Files**: Place your files manually in `public/images/` and `public/pdf/`

### GitHub Integration

To make this work with GitHub:
1. Push your code to a GitHub repository
2. Add your logo file to `public/images/logo.png`
3. Replace sample PDF with your actual reports in `public/pdf/`
4. Add any static project images to `public/images/projects/`
5. Enable GitHub Pages in repository settings

### Features

- ✅ Real-time project management
- ✅ Admin panel with authentication
- ✅ Responsive design
- ✅ File organization structure
- ✅ Social media integration
- ✅ Professional UI/UX