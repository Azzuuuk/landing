# Blyza Entertainment - Official Landing Site

> **"Powered by fun. Built to scale."**

This is the official public-facing landing property for **Blyza Entertainment**, designed for investors, partners, and users.

## 🎯 Brand Positioning

**Blyza Entertainment** unites two experiences under one brand:
- **PlayBlyza**: Digital party games platform (web-based, global reach)
- **Blyza Live**: Real-world, TV-style game show venue (launching in Dubai)

## 🎨 Design System

### Brand Colors
- **Primary Orange**: `#FF8833`
- **Secondary Purple**: `#CB7AE1`
- **Accent Yellow**: `#FFDF00`
- **Dark Backgrounds**: Deep plum to almost black gradients

### Typography
- **Headings**: Luckiest Guy, Bungee (chunky, playful, confident)
- **Body Text**: Inter, Poppins (clean, readable, professional)

### Visual Direction
- Confident, fun, premium vibe
- "Game show meets tech startup" aesthetic
- Clean layouts with strong hierarchy
- Dark gradient backgrounds with radial purple glow effects

## 📁 Site Structure

### Pages

1. **`/` (index.html)** - Home
   - Hero with credibility strip (55K+ players, 30K+ games)
   - How It Works: PlayBlyza + Blyza Live cards
   - Why This Matters: 3 value proposition cards
   - Social proof (Google, AstraZeneca, Reckitt Benckiser)
   - CTA strip

2. **`/ecosystem.html`** - Ecosystem
   - Two-pillar layout (digital + physical)
   - The Blyza Loop (self-reinforcing flywheel visualization)
   - Revenue streams breakdown

3. **`/play.html`** - Play Now
   - Gateway to PlayBlyza
   - Featured games showcase
   - Live stats counter
   - Benefits of PlayBlyza

4. **`/partnerships.html`** - Partnerships
   - Brand integration opportunities
   - Physical venue activation
   - Partnership models
   - Social proof

5. **`/contact.html`** - Contact
   - Contact form
   - Direct email: founders@blyza.com
   - Investor-friendly messaging

### Legacy Pages (can be archived)
- `brands.html` - Replaced by partnerships.html
- `corp.html` - Corporate team-building now mentioned within ecosystem
- `roadmap.html` - Not part of new positioning

## 🛠 Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, gradients, animations
- **Vanilla JavaScript** - No frameworks, lightweight
- **Font Awesome 6** - Icons
- **Google Fonts** - Inter, Poppins, Bungee, Luckiest Guy

## 📊 Key Metrics (Editable)

Update these in the HTML using `data-count` attributes:

```html
<span class="credibility-number" data-count="55000">55,000+</span>
```

Current stats:
- **55,000+** monthly active players
- **30,000+** total games played
- **90+** countries reached

## 🎯 Key Messages

### For Investors
- Participatory entertainment is exploding
- Built for Middle East first (Dubai launch)
- Scalable by design (digital + physical flywheel)
- Already used by Google, AstraZeneca, Reckitt Benckiser

### For Partners
- Interactive brand moments in games
- Real-world venue activations
- Content creation and social amplification
- High engagement (not passive media)

### For Users
- Instant play, no downloads
- TV-style party games
- Earn rewards (Blyza Bucks)
- Coming soon: walk into a real game show

## 📦 File Structure

```
public/
├── index.html              # Home (main landing)
├── ecosystem.html          # Ecosystem explanation
├── play.html              # Play gateway
├── partnerships.html      # For brands/sponsors
├── contact.html           # Contact form
├── css/
│   ├── entertainment.css  # Main stylesheet (NEW)
│   └── style.css         # Legacy styles
├── js/
│   ├── entertainment.js   # Main scripts (NEW)
│   └── script.js         # Legacy scripts
└── assets/
    └── blogo.png         # Blyza monkey mascot
```

## 🚀 Features

### Interactive Elements
- ✅ Animated stat counters on scroll
- ✅ Mobile-responsive navigation
- ✅ Smooth scroll to anchors
- ✅ Fade-in animations on scroll
- ✅ Contact form validation

### Components
- ✅ Reusable header with logo + subtitle
- ✅ Reusable footer with social links
- ✅ Card system for content blocks
- ✅ CTA strips with gradient backgrounds
- ✅ The Blyza Loop visualization

## 📝 Content Guidelines

### Tone
- **Proudly playful** but **commercially serious**
- NOT "silly Twitch streamers"
- NOT "corporate HR consultants"
- We are an **entertainment company building an ecosystem**

### What to Mention
✅ PlayBlyza (digital games platform)
✅ Blyza Live (physical venue in Dubai)
✅ Corporate usage by Google, AstraZeneca, etc.
✅ Brand partnerships and activations

### What NOT to Mention
❌ Jeggy
❌ AI features
❌ Team building SaaS
❌ Employee analytics
❌ Anything outside PlayBlyza + Blyza Live

## 🔧 Customization

### Updating Stats
Edit the `data-count` attributes in HTML files:
```html
<span class="credibility-number" data-count="YOUR_NUMBER">YOUR_NUMBER+</span>
```

### Updating Colors
Edit CSS custom properties in `entertainment.css`:
```css
:root {
    --blyza-orange-primary: #FF8833;
    --blyza-purple-secondary: #CB7AE1;
    --blyza-yellow-accent: #FFDF00;
}
```

### Contact Form
Update Formspree endpoint in `contact.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## 🌐 SEO

- ✅ Semantic HTML structure
- ✅ Meta descriptions on all pages
- ✅ Open Graph tags for social sharing
- ✅ Proper heading hierarchy
- ✅ Alt text on images
- ✅ robots.txt and sitemap.xml

## 📱 Responsive Design

Breakpoints:
- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (adapted grid)
- **Mobile**: < 768px (stacked, hamburger menu)

## 🎬 Next Steps

1. **Replace old pages**: Archive or remove brands.html, corp.html, roadmap.html
2. **Update Formspree**: Add your form endpoint in contact.html
3. **Test all links**: Ensure all navigation works correctly
4. **Add analytics**: Verify Vercel Analytics is tracking
5. **Update metadata**: Fine-tune SEO titles and descriptions
6. **Content images**: Replace placeholder logo URLs with hosted versions
7. **Launch announcement**: Coordinate with PlayBlyza app for traffic

## 📞 Contact

For questions about this codebase:
- **Email**: founders@blyza.com
- **Website**: https://www.joinblyza.com

---

Built with ❤️ for the future of participatory entertainment.
