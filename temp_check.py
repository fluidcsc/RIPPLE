from pathlib import Path
from collections import Counter
import re
files = [p for p in Path('.').rglob('*') if p.is_file() and p.suffix.lower() in {'.html','.css','.js','.json','.md','.txt'}]
counts = Counter()
for p in files:
    try:
        text = p.read_text(encoding='utf-8')
    except Exception:
        continue
    for line in text.splitlines():
        s = re.sub(r'\s+', ' ', line.strip())
        if s:
            counts[s] += 1
for s, c in counts.most_common(120):
    if c > 1:
        print(f'{c:2d} | {s}')
