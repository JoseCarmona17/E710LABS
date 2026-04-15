import os
import glob
import re

target_files = glob.glob('src/**/*.tsx', recursive=True)

for filepath in target_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # 1. Fix common padding issues for mobile:
    # Most pages have "px-12" without md: modifier, or "px-12 md:px-24"
    # We want px-6 on mobile.
    content = content.replace('px-12 md:px-24', 'px-6 md:px-24 lg:px-24')
    # If there's a lone px-12 (which is typically followed by a space, quote, or class)
    # We will do a generic replace but only if it's not preceded by sm: md: lg: etc.
    content = re.sub(r'(?<![a-z]:)px-12\b', 'px-6 md:px-12', content)
    
    # Same for generic paddings
    content = re.sub(r'(?<![a-z]:)p-12\b', 'p-6 md:p-12', content)
    content = re.sub(r'(?<![a-z]:)p-16\b', 'p-8 md:p-16', content)
    content = re.sub(r'(?<![a-z]:)p-24\b', 'p-8 md:p-24', content)
    content = re.sub(r'(?<![a-z]:)py-24\b', 'py-16 md:py-24', content)
    content = re.sub(r'(?<![a-z]:)py-32\b', 'py-20 md:py-32', content)
    content = re.sub(r'(?<![a-z]:)py-40\b', 'py-24 md:py-40', content)
    content = re.sub(r'(?<![a-z]:)pt-32\b', 'pt-24 md:pt-32', content)
    content = re.sub(r'(?<![a-z]:)pt-36\b', 'pt-24 md:pt-36', content)
    
    # Text sizing fixes
    content = content.replace('text-6xl md:text-8xl', 'text-5xl md:text-7xl lg:text-8xl')
    content = content.replace('text-6xl md:text-9xl', 'text-5xl md:text-7xl lg:text-9xl')
    content = content.replace('text-7xl md:text-9xl', 'text-5xl md:text-7xl lg:text-9xl')
    content = content.replace('text-7xl md:text-[120px]', 'text-5xl md:text-7xl lg:text-[120px]')
    content = content.replace('text-6xl md:text-[120px]', 'text-5xl md:text-7xl lg:text-[120px]')
    content = content.replace('text-5xl md:text-7xl', 'text-4xl md:text-6xl lg:text-7xl')
    content = content.replace('text-5xl md:text-6xl', 'text-4xl md:text-5xl lg:text-6xl')
    
    # Lone text sizes usually meant for big text over flowing on mobile
    content = re.sub(r'(?<![a-z]:)text-8xl\b', 'text-5xl md:text-8xl', content)
    content = re.sub(r'(?<![a-z]:)text-7xl\b', 'text-5xl md:text-7xl', content)
    content = re.sub(r'(?<![a-z]:)text-6xl\b', 'text-4xl md:text-6xl', content)
    content = re.sub(r'(?<![a-z]:)text-5xl\b', 'text-3xl md:text-5xl', content)
    
    # We want text-sm on p tags basically and max-w-sm or max-w-[..] is fine.
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")
