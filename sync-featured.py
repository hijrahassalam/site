#!/usr/bin/env python3
"""
GitHub → hijrahassalam.com Featured Projects Sync

Fetches pinned repos from GitHub API and regenerates the
Featured Work section in index.html automatically.

Usage:
  python3 sync-featured.py              # Dry run (preview only)
  python3 sync-featured.py --push       # Commit & push changes

Can be run as:
  - Manual script
  - Cron job (daily)
  - GitHub Actions workflow
"""

import json
import os
import sys
import urllib.request
from datetime import datetime

# ─── Config ────────────────────────────────────────────────────
GITHUB_USER = "hijrahassalam"
GITHUB_TOKEN = os.environ.get("GITHUB_TOKEN", "")
SITE_REPO = f"https://x-access-token:{GITHUB_TOKEN}@github.com/{GITHUB_USER}/site.git"
SITE_DIR = "/tmp/site-sync"
SITE_INDEX = os.path.join(SITE_DIR, "index.html")

# Max featured projects to show
MAX_FEATURED = 4

# Extra project that's not on GitHub (enterprise/internal)
EXTRA_PROJECTS = [
    {
        "name": "UNS Legal Document System",
        "subtitle": "Enterprise · Internal System",
        "description": "Enterprise platform for institutional document management — <span class=\"text-white font-medium\">3,500+ staff</span> across <span class=\"text-white font-medium\">900+ units</span>, with geo-tagged assignment letters and payment gateway integration.",
        "tags": ["Laravel", "Vue.js", "MySQL", "Production"],
        "color": "amber",
        "icon": "document",
        "url": None,
        "badge": None,
    }
]

# ─── GitHub API ────────────────────────────────────────────────
def github_api(endpoint):
    req = urllib.request.Request(
        f"https://api.github.com{endpoint}",
        headers={
            "Authorization": f"token {GITHUB_TOKEN}",
            "Accept": "application/vnd.github.v3+json",
        },
    )
    with urllib.request.urlopen(req) as resp:
        return json.loads(resp.read())


def get_pinned_repos():
    """Get pinned repos via GraphQL"""
    query = """
    {
      user(login: "%s") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
              homepageUrl
              primaryLanguage { name color }
              repositoryTopics(first: 10) {
                nodes { topic { name } }
              }
            }
          }
        }
      }
    }
    """ % GITHUB_USER

    req = urllib.request.Request(
        "https://api.github.com/graphql",
        data=json.dumps({"query": query}).encode(),
        headers={
            "Authorization": f"bearer {GITHUB_TOKEN}",
            "Content-Type": "application/json",
        },
        method="POST",
    )
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read())

    return data["data"]["user"]["pinnedItems"]["nodes"]


def get_repo_badge(repo_name):
    """Check if repo has CI badge or live demo"""
    try:
        workflows = github_api(f"/repos/{GITHUB_USER}/{repo_name}/actions/workflows")
        if workflows.get("workflows"):
            for w in workflows["workflows"]:
                if w.get("state") == "active":
                    return "ci"
    except:
        pass
    return None


# ─── HTML Generator ────────────────────────────────────────────
ICONS = {
    "code": '<svg class="w-5 h-5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>',
    "chat": '<svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>',
    "research": '<svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>',
    "document": '<svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>',
    "store": '<svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/></svg>',
}

COLORS = {
    "brand": {"bg": "bg-brand-500/10", "text": "text-brand-400", "hover": "group-hover:text-brand-400"},
    "purple": {"bg": "bg-purple-500/10", "text": "text-purple-400", "hover": "group-hover:text-purple-400"},
    "emerald": {"bg": "bg-emerald-500/10", "text": "text-emerald-400", "hover": "group-hover:text-emerald-400"},
    "amber": {"bg": "bg-amber-500/10", "text": "text-amber-400", "hover": "group-hover:text-amber-400"},
    "blue": {"bg": "bg-blue-500/10", "text": "text-blue-400", "hover": "group-hover:text-blue-400"},
}


def guess_icon(repo_name):
    name = repo_name.lower()
    if "chat" in name or "message" in name:
        return "chat"
    if "ecommerce" in name or "store" in name or "shop" in name:
        return "store"
    if "covid" in name or "gradcam" in name or "ai" in name or "ml" in name:
        return "research"
    return "code"


def guess_color(index):
    colors = ["brand", "purple", "emerald", "blue"]
    return colors[index % len(colors)]


def generate_project_card(project, delay):
    """Generate HTML for a single project card"""
    name = project.get("name", "")
    desc = project.get("description", "")
    url = project.get("url")
    homepage = project.get("homepageUrl")
    tags = project.get("tags", [])
    color = project.get("color", guess_color(delay))
    icon = project.get("icon", guess_icon(name))
    badge = project.get("badge")
    subtitle = project.get("subtitle", "")

    if not subtitle and project.get("primaryLanguage"):
        subtitle = project["primaryLanguage"]["name"]

    c = COLORS.get(color, COLORS["brand"])
    icon_svg = ICONS.get(icon, ICONS["code"])

    # Badge HTML
    badge_html = ""
    if badge == "ci":
        badge_html = f'<img src="https://github.com/{GITHUB_USER}/{name}/actions/workflows/tests.yml/badge.svg" alt="CI Passing" class="h-5">'
    elif badge == "live" and homepage:
        badge_html = f'<a href="{homepage}" target="_blank" rel="noopener" class="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded-full font-medium hover:bg-emerald-500/20 transition">Live Demo</a>'

    # URL wrapper
    if url:
        open_tag = f'<a href="{url}" target="_blank" rel="noopener" class="reveal reveal-delay-{delay + 1} glass rounded-xl p-6 group block">'
        close_tag = "</a>"
    else:
        open_tag = f'<div class="reveal glass rounded-xl p-6">'
        close_tag = "</div>"

    # Tags HTML
    tags_html = "".join(
        f'<span class="text-xs text-slate-500 bg-slate-800/50 px-2 py-1 rounded">{t}</span>'
        for t in tags
    )

    return f"""        {open_tag}
          <div class="flex items-start justify-between mb-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-lg {c['bg']} flex items-center justify-center">
                {icon_svg}
              </div>
              <div>
                <h3 class="font-semibold text-white {c['hover']} transition">{name}</h3>
                <p class="text-xs text-slate-500">{subtitle}</p>
              </div>
            </div>
            {badge_html}
          </div>
          <p class="text-sm text-slate-400 leading-relaxed">
            {desc}
          </p>
          <div class="mt-4 flex flex-wrap gap-2">
            {tags_html}
          </div>
        {close_tag}"""


def build_projects_section(repos):
    """Build the entire Featured Work section"""
    cards = []

    # GitHub pinned repos (skip last one to make room for enterprise project)
    for i, repo in enumerate(repos[: MAX_FEATURED - len(EXTRA_PROJECTS)]):
        topics = [t["topic"]["name"] for t in repo.get("repositoryTopics", {}).get("nodes", [])]
        lang = repo.get("primaryLanguage")
        tags = topics[:4] if topics else ([lang["name"]] if lang else [])
        homepage = repo.get("homepageUrl")

        project = {
            "name": repo["name"],
            "description": repo.get("description", ""),
            "url": repo["url"],
            "homepageUrl": homepage,
            "tags": tags,
            "color": guess_color(i),
            "icon": guess_icon(repo["name"]),
            "badge": "live" if homepage else None,
            "subtitle": f"{lang['name']} · {topics[0].title()}" if lang and topics else (lang["name"] if lang else ""),
        }
        cards.append(generate_project_card(project, i))

    # Extra projects
    for j, extra in enumerate(EXTRA_PROJECTS):
        cards.append(generate_project_card(extra, len(cards)))

    return "\n".join(cards)


# ─── Main ──────────────────────────────────────────────────────
def main():
    push = "--push" in sys.argv
    print("🔄 Fetching pinned repos...")
    repos = get_pinned_repos()
    print(f"   Found {len(repos)} pinned repos:")
    for r in repos:
        print(f"   📦 {r['name']}")

    # Clone site repo
    if os.path.exists(SITE_DIR):
        os.system(f"rm -rf {SITE_DIR}")
    os.system(f"git clone {SITE_REPO} {SITE_DIR} 2>/dev/null")

    # Read current index.html
    with open(SITE_INDEX, "r") as f:
        html = f.read()

    # Generate new projects section
    new_cards = build_projects_section(repos)

    # Replace the projects grid
    import re
    pattern = r'(<div class="grid md:grid-cols-2 gap-6">)(.*?)(</div>\s*</section>)'
    replacement = f'      <div class="grid md:grid-cols-2 gap-6">\n{new_cards}\n      </div>'

    # Find and replace between the grid div and closing section
    start_marker = '<div class="grid md:grid-cols-2 gap-6">'
    end_marker = '</section>'

    start_idx = html.find(start_marker)
    if start_idx == -1:
        print("❌ Could not find projects grid in index.html")
        return

    # Find the closing </section> after the grid
    end_idx = html.find(end_marker, start_idx)
    if end_idx == -1:
        print("❌ Could not find closing section tag")
        return

    # Build the new section content
    new_section = f'''      <div class="grid md:grid-cols-2 gap-6">
{new_cards}
      </div>
    </div>
  </section>'''

    # Replace from grid start to section end
    html = html[:start_idx] + new_section + html[end_idx + len(end_marker):]

    if push:
        with open(SITE_INDEX, "w") as f:
            f.write(html)
        os.system(f"cd {SITE_DIR} && git add -A && git diff --cached --quiet || (git commit -m 'chore: sync featured projects from GitHub' && git push origin main)")
        print("✅ Synced & pushed!")
    else:
        print("\n📋 Dry run — new cards preview:")
        print(new_cards[:2000])
        print("\n💡 Run with --push to commit & deploy")


if __name__ == "__main__":
    main()
