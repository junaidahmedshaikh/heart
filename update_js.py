import json, re

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract HEART_ROWS JSON
match = re.search(r'const HEART_ROWS = (\[.*?\]);\n\nclass HeartAnimation', content, re.DOTALL)
if match:
    rows = json.loads(match.group(1))
    scale_factor = 1.18
    for s in rows:
        if s["type"] == "split":
            s["leftW"] = int(round(s["leftW"] * scale_factor))
            s["gap"] = int(round(s["gap"] * scale_factor))
            s["rightW"] = int(round(s["rightW"] * scale_factor))
        else:
            s["width"] = int(round(s["width"] * scale_factor))
    
    new_json = json.dumps(rows, ensure_ascii=False, indent=2)
    # Replace JSON
    content = content[:match.start(1)] + new_json + content[match.end(1):]
    
    # Update baseW and baseH in setupResponsiveness
    content = re.sub(r'const baseW = \d+;', 'const baseW = 880;', content)
    content = re.sub(r'const baseH = \d+;', 'const baseH = 680;', content)
    
    with open('script.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("script.js updated with expanded spaced geometry!")
else:
    print("Could not find HEART_ROWS")
