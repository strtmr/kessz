# Sulu 3 on Symfony as the platform

The rebuild runs on Sulu 3 (Symfony, Doctrine ORM, no PHPCR), the stack used in the developer's other projects. We chose it over plain Symfony with EasyAdmin because the maker edits content without developer help, and Sulu already provides what the legacy app hand-built badly: a media library with configurable image formats and cropping, rich-text page editing, preview and draft/publish, SEO fields, redirects and a form bundle with spam protection.

## Consequences

- Pieces are Sulu articles with a "Schmuckstück" template, not a custom entity. Preview, URLs and draft/publish come for free. The price lives in the content JSON, so price queries (like the dropped legacy statistics page) aren't cheap.
- "Article" is Sulu's technical term only. In the domain language, the term is **Piece** (see CONTEXT.md).
