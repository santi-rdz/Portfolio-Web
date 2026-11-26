import { Marked, type Tokens } from "marked";

/** URL-safe id for a heading, accent-insensitive: "Educación" → "educacion". */
export function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const markdown = new Marked({
  renderer: {
    heading({ tokens, depth }) {
      const text = this.parser.parseInline(tokens);
      const slug = slugify(tokens.map((token) => token.raw).join(""));
      return `<h${depth} id="${slug}">${text}</h${depth}>`;
    },
    link({ href, title, tokens }) {
      const text = this.parser.parseInline(tokens);
      const titleAttr = title ? ` title="${title}"` : "";
      const externalAttrs = /^https?:\/\//.test(href)
        ? ' target="_blank" rel="noopener noreferrer"'
        : "";
      return `<a href="${href}"${titleAttr}${externalAttrs}>${text}</a>`;
    },
  },
});

/**
 * Renders a Markdown document and lists its H2s as `{ id, label }`, so a
 * table of contents is derived from the document and can't drift from it.
 */
export function renderDocument(source: string) {
  const sections = markdown
    .lexer(source)
    .filter((token): token is Tokens.Heading => token.type === "heading")
    .filter((heading) => heading.depth === 2)
    .map((heading) => ({ id: slugify(heading.text), label: heading.text }));

  return { html: markdown.parse(source) as string, sections };
}
