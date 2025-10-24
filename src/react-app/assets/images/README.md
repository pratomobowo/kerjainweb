# Images Folder

This folder contains all static images used in the React application.

## Structure

```
src/react-app/assets/images/
├── .gitkeep          # Ensures the directory is tracked by git
├── logo.webp         # Main logo for Kerjain Digital Studio
└── README.md         # This file
```

## Usage

Images in this folder can be imported and used in React components like this:

```javascript
import logoKerjain from '../assets/images/logo.webp';

function Component() {
  return (
    <img 
      src={logoKerjain} 
      alt="Kerjain Digital Studio" 
      className="h-8 w-auto"
    />
  );
}
```

## Best Practices

1. Use WebP format for better compression and quality
2. Provide descriptive alt text for accessibility
3. Specify appropriate dimensions to prevent layout shifts
4. Optimize images for web before adding to this folder
5. Use meaningful file names

## Adding New Images

1. Place the image file in this directory
2. Import it in your component using the relative path
3. Use the imported image in your component

For larger applications, consider using an image optimization library or CDN for better performance.