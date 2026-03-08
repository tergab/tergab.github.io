# tergab.github.io

> Personal portfolio and technical homepage of **Terje Gabrielsen** — developer, systems thinker, and digital systems enthusiast based in Tromsø, Norway.

🌐 **[tergab.github.io](https://tergab.github.io)**

---

## About

This is the source for my personal site — a place to document projects, share technical knowledge, and serve as a reference for anyone wanting to know more about what I work on.

The site covers programming projects, deep-dives into digital systems (mobile, desktop, networking, filesystems), and technical writing on things I've found worth documenting properly.

---

## Structure

```
tergab.github.io/
├── index.html              # Homepage with animated hero
├── css/
│   └── style.css           # Full stylesheet with CSS custom properties
├── js/
│   └── main.js             # Animations, interactivity, canvas particle network
└── pages/
    ├── projects.html       # Programming projects & tools
    ├── knowledge.html      # Technical knowledge areas & skill reference
    ├── writing.html        # Technical notes and write-ups
    └── contact.html        # Contact form & availability
```

---

## Tech

Built with plain HTML, CSS, and vanilla JavaScript — no frameworks, no build tools, no dependencies. Hosted on GitHub Pages.

- **Fonts** — Syne (headings) · JetBrains Mono (code/labels) · DM Sans (body)
- **Animations** — CSS keyframes + IntersectionObserver scroll reveals + Canvas particle network
- **Design** — Dark theme, CSS custom properties throughout, fully responsive

---

## Topics covered

- Python tooling & automation
- Mobile device internals (iOS, Android)
- File systems & storage (NTFS, APFS, ext4, FAT)
- Networking & protocols (TCP/IP, DNS, TLS, packet analysis)
- Encryption & cryptography
- Linux systems & shell scripting
- Cloud platforms (Azure, AWS, GCP)
- Open-source development

---

## Local development

No build step required. Just open `index.html` in a browser, or serve locally:

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .
```

---

## License

Content and design © 2025 Terje Gabrielsen. Feel free to take inspiration — just don't copy it wholesale.

---

*Built and maintained by [@tergab](https://github.com/tergab)*
