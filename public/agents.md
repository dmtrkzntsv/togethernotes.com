# Notes Repository Guide

Together Notes stores every note as a plain Markdown file in a git repository. This is the
complete contract for that repository — the one holding the notes, not the one holding the app's
source. It is self-contained: hand this one file to an agent that reads or edits notes directly
and it needs nothing else.

## The shape of the repository

```
Work/
  Projects/
    Quarterly Plan.md
    .Quarterly Plan/
      b3f2a1.png
  Ideas.md
Reading list.md
```

The working copy is the whole story. There is no index, cache, database or metadata file
anywhere — do not add one. A note MAY begin with a YAML frontmatter block (see "Frontmatter"
below); everything else the app knows about a note comes from the note's path, its filename,
and its bytes.

## Folders

- **The directory tree is the folder tree.** A directory is a folder in the app; nesting is
  unlimited.
- **A note is `<Title>.md`.** The filename *is* the title. Nothing inside the file repeats it,
  so do not open a note with an `# H1` of its own title — the app would show the title twice.
- **Non-`.md` files are invisible** to the app, but they are kept, not deleted. Do not use them
  to carry note content: nothing will ever read them.
- **Dot-prefixed files and directories are invisible too**, and one class of them is actively
  deleted — see the garbage collector below. Never create a dot-directory in a notes
  repository.
- **Empty directories do not survive a push.** Git does not track them, so a folder with no
  notes exists only on the machine that made it. To create a folder that reaches other devices,
  put a note in it.
- **Names are sanitized.** When the app derives a filename from a title it replaces `/`, `:`,
  `\` and control characters with `-`, trims surrounding whitespace and dots, caps the result at
  100 characters, falls back to `Untitled`, and resolves a collision by appending ` 2`, ` 3`, and
  so on. Follow the same rules when you create a file, and remember that macOS and iOS treat
  filenames case-insensitively: `Plan.md` and `plan.md` collide.
- **Renaming a note is a rename of two things** — the `.md` file and, if it exists, its
  attachment folder. Use `git mv` for both so history follows the file.

## Attachments and the pin marker

A note's attachments live in a hidden folder beside it, named `.` plus the note's filename
without the extension: `Quarterly Plan.md` pairs with `.Quarterly Plan/`. The folder is created
only when the note actually has an attachment.

- Attachment filenames written by the app are a SHA-256 prefix (6 hex characters, lengthened
  only on a genuine collision) plus the lowercased original extension: `b3f2a1.png`.
- Reference one with a relative link from the note that owns it:
  `![alt](./.Quarterly Plan/b3f2a1.png)`.
- **An attachment nothing references is deleted.** The app's garbage collector sweeps live
  attachment folders and removes any file the note's Markdown does not link to, deletes an
  attachment folder whose note is gone, deletes an emptied one, and deletes stray `*.tmp` /
  `.*.tmp-*` files anywhere in the tree. It never touches `.git`, never deletes a `.md` file, and
  never deletes a regular folder. So: add the file and the link in the same commit, and put no
  hidden folder in the repository that is not a real attachment folder — an unrecognized one
  reads as an orphan and is removed wholesale.
- `.<Title>/.pin` is the pin marker. An empty file whose existence is the entire signal: the
  note is pinned exactly when it exists. Create or delete it to pin or unpin.

## Frontmatter

A note may start with a YAML block — properties the user sees as a panel above the note's text:

```
---
status: draft
due: 2026-08-20
tags:
  - planning
  - q3
reviewed: false
---
```

- The block is optional. When present it is the **first bytes of the file**: line 1 is exactly
  `---`, and the closer is a later line that is exactly `---` (or `...`). Nothing may precede it
  — no blank line, no comment, no BOM — and a first line of `---` with no closer anywhere below
  is not a block either. In both near-misses the lines stay body text and the app never "fixes"
  them. Content resumes on the line right after the closer; the app writes no blank line there.
- Flat `key: value` lines only — the key unquoted, then `:` followed by a space or end of line.
  The app edits six value shapes:
  - **text** — a plain phrase, or `"quoted"` / `'quoted'` with the usual escapes. The app quotes
    on write only when it must: empty text, a leading or trailing space, a leading YAML
    indicator character, `: ` or ` #` inside, a trailing `:`, or text that would otherwise read
    back as one of the shapes below (`42`, `true`, `2026-08-20`, `null`).
  - **list** — block style (`  - item` lines under the key) or flow style (`[a, b]`); every item
    is text. The app always writes block style, and an empty list as `[]`.
  - **number** — `12`, `-3.5`, `1e3`; written back with no trailing `.0`.
  - **checkbox** — `true` / `false`, lowercase only. `yes`/`no`/`on`/`off` are text.
  - **date** — `YYYY-MM-DD`. **date-time** — `YYYY-MM-DDTHH:mm`, with optional `:ss`. Both are
    calendar components, never a timestamp: no timezone is ever applied or stored.

  `key:` with nothing after it is an empty property, typed by the first value the user enters.
- Keys use `A–Z a–z 0–9 _ . - space`, are case-sensitive, and must be unique in the block. **If a
  key appears twice, every copy of it goes read-only** — editing one of two `status:` lines is
  ambiguous, so the app declines to edit either.
- Anything else — nested maps, block scalars (`|`, `>`), anchors, aliases, tags, `#` comments,
  blank lines — is preserved exactly, but the app shows it read-only: the user can delete such an
  entry, never edit it. Prefer the shapes above.
- **An untouched block is written back byte for byte**, each entry keeping its own source lines
  (a CRLF file's line endings included), so the app can open a foreign note, save it, and produce
  no diff. Editing one property rewrites that property's line only, in the canonical form above,
  and leaves its neighbours alone. The one thing normalized regardless is the closing fence: the
  app always writes `---`, so a block closed with `...` is rewritten on the first save.
- The app never adds a block on its own and never writes an empty one: delete the last entry and
  the fences go with it.
- Do not add a `title` key: the filename is the title. **No key carries meaning to the app** —
  pins are `.pin`, comments are HTML comments, and no property changes how a note is displayed,
  sorted or filtered. Two things do read the block: text search matches property values like any
  body text, and the panel autocompletes keys used elsewhere in the repository. So reuse the keys
  already in the repository rather than inventing near-duplicates (`Status` vs `status`).

## Markdown the app understands

The app parses CommonMark plus the GFM extensions it uses (task lists, tables, strikethrough),
and writes back one canonical form. These are the elements it can represent:

| Element | Canonical form |
| --- | --- |
| Paragraph | plain text, blank line between blocks |
| Heading | `# `, `## `, `### ` — levels 1–3 only |
| Bold | `**text**` |
| Italic | `*text*` |
| Strikethrough | `~~text~~` |
| Underline | `<u>text</u>` |
| Inline code | `` `text` `` |
| Link | `[text](url)`, or `[text](<url with spaces>)` |
| Image | `![alt](./.Note/b3f2a1.png)` |
| Bullet list | `- item` |
| Numbered list | `1. item` (renumbered from 1 on write) |
| Checklist | `- [ ] item` / `- [x] item` |
| Quote | `> text` |
| Code block | ```` ```lang ```` … ```` ``` ```` |
| Table | GFM pipe table with a `| --- |` separator row |
| Thematic break | `---`, but `***` when it is the first thing in the file |
| Comment | `<!-- … -->` — a first-class element, see **Comments** below |

Details worth knowing before you write any of it:

- **A thematic break at the top of a note is spelled `***`.** A file whose first line is `---`
  is frontmatter the moment any later line is `---`, so a note that opens with a horizontal rule
  would read back as a property block. `***` is the same break to CommonMark and can never be a
  fence. Anywhere but the first line, `---` is fine.
- **Blank lines are content.** A run of blank lines beyond the single separator between two
  blocks is preserved literally, so deleting "extra" blank lines is an edit to the note, not a
  cleanup.
- **Lists nest by two spaces per level.** A nested item must have a parent: the line directly
  above the first item of an indented run has to be a list line at the same depth or shallower.
  The editor caps depth at 5; a deeper file is read fine but flattens to 5 the next time the user
  edits that list.
- **A list item can hold nested lists, quotes, code blocks and tables** as indented children;
  the editor shows the latter as read-only lines under the item.
- **Two adjacent lists of the same family alternate markers** — `-` then `*` for
  bullets and checklists, `.` then `)` for numbered lists — because CommonMark would otherwise
  merge them into one list. If you mean two lists, alternate; if you mean one, don't.
- **Table cells are single-line and inline-only.** No lists, no code blocks, no line breaks
  inside a cell.
- **The note list preview is the first non-heading, non-empty block** of the body, flattened to
  one line. Frontmatter is never the preview.
- Everything else the app parses but cannot model — footnotes, reference-style links,
  definition lists, raw HTML other than `<u>` and comments, headings deeper than 3 — either
  degrades or is normalized. Heading levels 4–6 become 3. Anything unmodelled becomes a
  paragraph holding its own source as literal, escaped text: it stays visible, but it stops
  being markup and the syntax characters end up on screen. Don't write it.

## Comments

Every HTML comment (`<!-- … -->`) in a note is a comment: a remark, or a discussion when it has
signed entries. Comments are metadata — the app shows them beside the text, never inside it.

**Position is the anchor.** To comment on a paragraph, put the comment directly after that
paragraph (inside the list item, indented, if the paragraph is a list item). To comment on the
whole note, put it at the top, before any content — after the frontmatter block if the note has
one, since that block is always the first thing in the file. One blank line between a paragraph
and its comment is the normal separator; a comment that follows an *extra* blank line
belongs to that blank line instead (the app shows it on the empty paragraph), so keep exactly one
blank line before a comment about the paragraph above.

A plain `<!-- text -->` is a generic remark. A discussion signs each entry:

```
<!--
@<your-handle> <YYYY-MM-DD> <HH:MM>
<text>
-->
```

- **To reply, append a new `@handle date time` header and text inside the same comment**, after a
  blank line. Never start a new comment for a reply.
- **A thread is closed by deleting the whole comment.**
- **Never write Markdown inside a comment** — plain text only.
- **Never edit or remove someone else's entries.**
- **Do not add ids, line numbers or quotes.** Position is the anchor; that is the whole mechanism.
- Never write an empty comment (`<!-- -->`), and never put a comment where it would split a
  construct: a comment between two items of one list belongs to the item above it and leaves the
  list intact, so do not use one as a separator between two lists — alternate the list markers
  instead (see above).

## The canonical rewrite

When the user edits a note, the app parses the entire file and writes the entire file back in
canonical form. Your formatting choices do not survive that: marker characters, list numbering,
table column padding, indentation and separator blank lines are all normalized, and anything
unrepresentable is flattened as described above.

Frontmatter is the one exception: an entry the user did not edit is re-emitted from its original
source lines, so its spelling, quoting and spacing survive the rewrite untouched.

The practical consequence is that hand-tuned layout is wasted effort and a diff against the app's
output is not a disagreement worth fixing. Write valid, plain Markdown from the table above and
let the app normalize it.

## Working with git

- **Prefer your own clone.** Clone, edit, commit, push. Nothing about the format requires the
  app to be running.
- **Editing the app's working copy directly is also safe.** The app sweeps uncommitted hand-edits
  into ordinary commits on its next pull, so you may leave changes uncommitted there; it stages
  only paths that genuinely differ from HEAD, so it never sweeps in a file it doesn't have to.
- **History is linear and must stay that way.** The app rebases and never creates a merge commit.
  Do not force-push, do not rewrite pushed commits, and do not merge — push ordinary commits onto
  whatever branch the clone tracks. The app never creates branches of its own.
- **Conflicts resolve last-writer-wins, per file, by commit time — the whole file, not a
  line-level merge.** The losing version stays reachable in git history and nothing is lost, but
  it stops being the note. Two habits follow: keep each edit small and push it promptly, and
  never rewrite a note wholesale unless that is what was asked.
- **Commit messages are prose in English**, one topic per commit. The app's own commits use a
  note's title, `Update N notes`, or `Housekeeping`; yours should say what you changed. Commit
  under your own git identity, not the app's.
- **Never touch `.git`**, and never add repository-level tooling (workflows, hooks, config files)
  to a notes repository unless you were asked for it.

## Before you commit

- Filenames sanitized, collisions resolved, `git mv` used for any rename.
- Every attachment you added is linked from its note, and lives in that note's `.<Title>/`.
- No dot-directories, no `.tmp` leftovers, no metadata files; frontmatter only in the shape
  above, only at byte 0, keys unique, no `title` key.
- Only elements from the table above; no heading deeper than 3; a note that opens with a
  thematic break spells it `***`.
- Comments placed by position, replies appended inside the existing comment, plain text only, and
  nobody else's entry touched.
