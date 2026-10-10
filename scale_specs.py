import json

with open('full_row_specs.json', 'r', encoding='utf-8') as f:
    specs = json.load(f)

# Scale width and gaps by 1.18 to allow generous spacing
scale_factor = 1.18
for s in specs:
    if s["type"] == "split":
        s["leftW"] = int(round(s["leftW"] * scale_factor))
        s["gap"] = int(round(s["gap"] * scale_factor))
        s["rightW"] = int(round(s["rightW"] * scale_factor))
    else:
        s["width"] = int(round(s["width"] * scale_factor))

with open('full_row_specs_spaced.json', 'w', encoding='utf-8') as f:
    json.dump(specs, f, ensure_ascii=False, indent=2)

print("Scaled row specs saved!")
