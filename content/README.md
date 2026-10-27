# Writing a post

Add a Markdown file to `content/posts/`. The filename becomes the URL: `content/posts/idempotency-keys.md` → `/blog/idempotency-keys`.

```markdown
---
title: What I learnt about idempotency keys
date: 2026-11-03
summary: One line shown under the title on the homepage and in RSS.
tags: [payments, postgres]
week: 1            # optional, shown as "Week 1"
popular: false     # set true to list it under "Most read" on the homepage
draft: true        # optional, only visible in `npm run dev`
---

Post body in Markdown.
```

- The homepage shows the 5 newest posts under **Latest** and up to 5 `popular: true` posts under **Most read**.
- `/blog` lists every post grouped by year; `/feed.xml` is the RSS feed.
