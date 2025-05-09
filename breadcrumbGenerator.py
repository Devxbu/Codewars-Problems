import re

def generate_bc(url, separator):
    
    url = re.sub(r'\?.*$', '', url)
    url = re.sub(r'#.*?(?=/|$)', '', url)
    url = re.sub(r'/index\.(html?|php|asp)$', '', url, flags=re.IGNORECASE)
    url = re.sub(r'\.(html?|php|asp)$', '', url, flags=re.IGNORECASE)
    url = re.sub(r'^(https?:\/\/)?(www\.)?', '', url)
    if url.endswith("/"):
        url = url[:-1]
    url = url.replace('-', " ").split('/')
    chars = ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"]
    ans = []
    href = ""
    
    if len(url) <= 1:
        return '<span class="active">HOME</span>'
    
    for i, v in enumerate(url):
        if i == 0:
            ans.append('<a href="/">HOME</a>') 
        elif i != len(url) - 1:
            href += "/" + v.replace(' ', '-')
            if len(v) >= 30:
                tmp = ""
                for i in v.split(" "):
                    if i not in chars:
                        tmp += i[0]
                ans.append(f'<a href="{href}/">{tmp.upper()}</a>')
            else:
                ans.append(f'<a href="{href}/">{v.upper()}</a>')
        else:
            if len(v) >= 30:
                tmp = ""
                for i in v.split(" "):
                    if i not in chars:
                        tmp += i[0]
                ans.append(f'<span class="active">{tmp.upper()}</span>')
            else:
                ans.append(f'<span class="active">{v.upper()}</span>')
            
    return separator.join(ans)
        
