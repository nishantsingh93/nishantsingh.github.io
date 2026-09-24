# Nishant Singh — Portfolio

A responsive, dependency-free personal portfolio built with HTML, CSS, and JavaScript. Inspired by the editorial layout of https://rittamdebnath.in/; original implementation and artwork, personalized using Nishant’s supplied SDE resume and https://github.com/nishantsingh93.

## Local preview

From this folder, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Then visit http://localhost:8000. You can also open `index.html` directly. No install or build step is required.

## Files

- `index.html`: biography, education, project links, and page structure.
- `styles.css`: colors, typography, responsive layouts, and reduced-motion support.
- `script.js`: project filters, mobile navigation, and decorative plot.
- `assets/`: local GitHub portrait, original SVG favicon, and downloadable resume PDF.

## Content notes

Primary professional source: `/Users/nishantsingh/Desktop/Resume/V1_09_16/Nishant_Singh_SDE_Resume.pdf`, supplied by the owner. The professional headline, roles, dates, accomplishments, metrics, capabilities, education, San Jose location, and email are drawn from that resume. Website copy is condensed and paraphrased. The company spelling “Automaton Anywhere” in the PDF is normalized to “Automation Anywhere.” The current-role wording reflects the supplied resume, not an independent employment check. The 7+ years claim is preserved from the resume.

Featured work presents resume accomplishments, not publicly available code or independent case studies. The internal agentic tooling and five-engineer team details come from the resume summary and are presented with the current Nike role. GitHub supplies the portrait and six secondary public project links. The housing repository is labeled as a fork; project artwork is illustrative, not measured results.

`assets/Nishant_Singh_Resume.pdf` is an unchanged copy of the supplied PDF, including its contact details. It is linked for viewing and download. Everything remains local until a separate publishing step.

## GitHub Pages — later

The site is ready for static hosting. All local asset paths are relative, so it works at both a user-site root and a repository subpath. `.nojekyll` disables unnecessary Jekyll processing.

When ready, create a repository (for a personal root site, `nishantsingh93.github.io`), push these files, and configure Pages to deploy from the `main` branch, `/ (root)`. No repository has been created or published as part of the local build.
