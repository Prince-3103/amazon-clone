# Amazon Clone

A lightweight Amazon-clone built with HTML, CSS, and JavaScript. The project includes a home page, checkout flow, orders view, and order tracking page, all powered by local assets and simple client-side scripts.

## Pages

- **Home:** `index.html`
- **Checkout:** `pages/checkout.html`
- **Orders:** `pages/orders.html`
- **Tracking:** `pages/tracking.html`

## Project Structure

```
.
├── data/        # Product data and loaders
├── images/      # Product and UI imagery
├── pages/       # Checkout, orders, tracking pages
├── script/      # Front-end logic
├── styles/      # Shared + page-specific CSS
└── index.html   # Home page
```

## Run Locally

Because this is a static site, you can serve it with any simple HTTP server. For example:

```bash
python -m http.server 8000
```

Then visit:

- `http://127.0.0.1:8000/index.html`
- `http://127.0.0.1:8000/pages/checkout.html`
- `http://127.0.0.1:8000/pages/orders.html`
- `http://127.0.0.1:8000/pages/tracking.html`

## Notes

- The app uses client-side JavaScript to render products and cart details.
- Images are stored in the `images/` directory and referenced by the HTML and scripts.
- This clone is still not completed there may be some bugs but surely in future i will fix it.
