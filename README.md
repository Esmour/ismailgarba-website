# Dr Ismail Garba 

A custom, dependency-light Hugo site for `ismailgarba.com`. The content model is inspired by others, with a bespoke visual design.

## Local preview

Install Hugo Extended (0.125 or newer), then run:

```bash
hugo server -D
```

Build the production site:

```bash
hugo --minify
```

The generated site is written to `public/`.

## Content management

Add one Markdown file per item:

- `content/publications/` — journal articles, conference papers, preprints, reports and chapters.
- `content/projects/` — research projects and collaborations.
- `content/experience/` — appointments, education and visiting/research experience.
- `content/talks/` — conference talks, invited talks, posters and seminars.
- `content/teaching/` — courses, guest lectures and teaching contributions.
- `content/software/` — software, workflows, dashboards and datasets.
- `content/posts/` — technical notes and research articles.

Use the front matter fields in the archetypes as a starting point. For publications, `authors`, `date`, `publication`, `publication_type`, `doi`, `url_pdf`, `abstract`, `featured` and `tags` are supported. Do not add unverified bibliographic metadata.

## Cloudflare Pages

Connect the GitHub repository and configure:

- Framework preset: Hugo (or None)
- Build command: `hugo --minify`
- Build output directory: `public`
- Environment variable: `HUGO_VERSION` = `0.147.9`

The domain and DNS settings are separate from the site build. Keep the existing custom-domain configuration while changing the build settings.

## Before public launch

