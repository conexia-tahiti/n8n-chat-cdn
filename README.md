# N8N Chat Widget CDN

This repository contains the built files for the N8N chat widget, optimized for CDN delivery via jsDelivr.

## Usage

### CSS
```html
<link href="https://cdn.jsdelivr.net/gh/conexia-tahiti/n8n-chat-cdn@latest/style.css" rel="stylesheet" />
```

### JavaScript
```html
<script type="module">
  import { createChat } from "https://cdn.jsdelivr.net/gh/conexia-tahiti/n8n-chat-cdn@latest/chat.bundle.es.js";

  createChat({
    webhookUrl: "YOUR_N8N_WEBHOOK_URL",
    target: "#n8n-chat",
    mode: "window",
    // ... other options
  });
</script>
```

### HTML Container
```html
<div id="n8n-chat"></div>
```

## Files

- `style.css` - Complete CSS styles for the chat widget
- `chat.bundle.es.js` - JavaScript bundle with Vue 3 chat component
- `README.md` - This documentation

## Version

Latest build from n8n chat interface with Tailwind CSS styling.