// Edit these to your real destinations.
// Tip: keep it minimal (3–6 links) for a premium feel.
const LINKS = [
  { label: "Email", href: "mailto:", meta: "Direct" },
  { label: "LinkedIn", href: "", meta: "Work" },
  { label: "X", href: "", meta: "Signal" },
  { label: "GitHub", href: "", meta: "Code" },
];

function safeUrl(url) {
  if (typeof url !== "string") return null;
  if (url.trim().length === 0) return null;
  try {
    const parsed = new URL(url, window.location.href);
    return parsed.href;
  } catch {
    return null;
  }
}

function buildLinkItem({ label, href, meta }) {
  const resolved = safeUrl(href);
  if (!resolved) return null;

  const li = document.createElement("li");
  li.className = "link";

  const a = document.createElement("a");
  a.href = resolved;
  a.target = resolved.startsWith("mailto:") ? "_self" : "_blank";
  a.rel = resolved.startsWith("mailto:") ? "" : "noreferrer noopener";
  a.ariaLabel = label;

  const left = document.createElement("span");
  left.className = "link-left";

  const dot = document.createElement("span");
  dot.className = "dot";
  dot.setAttribute("aria-hidden", "true");

  const text = document.createElement("span");
  text.className = "label";
  text.textContent = label;

  left.append(dot, text);

  const right = document.createElement("span");
  right.className = "meta";
  right.textContent = meta ?? "";

  a.append(left, right);
  li.append(a);
  return li;
}

const list = document.getElementById("linkList");
if (list) {
  for (const link of LINKS) {
    const item = buildLinkItem(link);
    if (item) list.append(item);
  }
}

const statusLine = document.getElementById("statusLine");
if (statusLine) statusLine.textContent = "Online soon.";
