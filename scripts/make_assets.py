"""Make the images in public/ from the brand files and app screenshots.

Run: python scripts/make_assets.py [BRAND_DIR] [SHOTS_DIR]
Needs Pillow. The output files are in git, so you run this only when a source changes.
"""
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageFont

BRAND = Path(sys.argv[1] if len(sys.argv) > 1 else r"C:\Users\ataka\boardpilot\store\brand")
SHOTS = Path(sys.argv[2] if len(sys.argv) > 2 else r"C:\Users\ataka\AppData\Local\Temp\bpvds\shots")
ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public"
APP = ROOT / "src" / "app"  # Next.js serves icon and og files from here, with the base path
NAVY = (14, 26, 51)

(OUT / "shots").mkdir(parents=True, exist_ok=True)

for name in ("logo-1024", "logo-512", "logo-256"):
    Image.open(BRAND / f"{name}.png").save(OUT / f"{name}.png", optimize=True)
logo = Image.open(BRAND / "logo-1024.png").convert("RGBA")
logo.resize((640, 640), Image.LANCZOS).save(OUT / "logo.webp", quality=88)

icon = Image.open(BRAND / "icon-1024.png").convert("RGB")
icon.resize((180, 180), Image.LANCZOS).save(APP / "apple-icon.png", optimize=True)
icon.convert("RGBA").save(APP / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])

# Screenshots are 1170x2532. 600 px wide is 2x for the largest phone frame on the page.
for shot in ("chats", "chat-picture", "chat-question", "board", "change", "sim-tools"):
    im = Image.open(SHOTS / f"{shot}.png").convert("RGB")
    im.resize((600, round(600 * im.height / im.width)), Image.LANCZOS).save(OUT / "shots" / f"{shot}.webp", quality=82)

# Open Graph image 1200x630: logo on navy with the headline.
og = Image.new("RGB", (1200, 630), NAVY)
d = ImageDraw.Draw(og)
for x in range(0, 1200, 40):  # fine grid
    d.line([(x, 0), (x, 630)], fill=(24, 37, 64))
for y in range(0, 630, 40):
    d.line([(0, y), (1200, y)], fill=(24, 37, 64))
glow = Image.new("RGBA", (1200, 630), (0, 0, 0, 0))
ImageDraw.Draw(glow).ellipse((700, 90, 1150, 540), fill=(111, 242, 179, 70))
og.paste(glow.filter(ImageFilter.GaussianBlur(90)), (0, 0), glow.filter(ImageFilter.GaussianBlur(90)))
lg = logo.resize((440, 440), Image.LANCZOS)
og.paste(lg, (720, 95), lg)
fonts = Path(r"C:\Windows\Fonts")
sans = ImageFont.truetype(str(fonts / "seguisb.ttf"), 64)
serif = ImageFont.truetype(str(fonts / "georgiai.ttf"), 66)
small = ImageFont.truetype(str(fonts / "segoeui.ttf"), 28)
d = ImageDraw.Draw(og)
d.text((80, 90), "BOARD PILOT", font=small, fill=(111, 242, 179))
d.text((80, 220), "Your PCB design lead,", font=sans, fill=(243, 240, 232))
d.text((80, 305), "in your pocket.", font=serif, fill=(243, 230, 196))
d.text((80, 470), "iPhone app · Server for Windows · Your own Claude account", font=small, fill=(170, 182, 204))
og.save(APP / "opengraph-image.png", optimize=True)
og.save(APP / "twitter-image.png", optimize=True)
print("done", OUT)
