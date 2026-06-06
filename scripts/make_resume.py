from pathlib import Path

public = Path(__file__).resolve().parent.parent / 'public'
public.mkdir(exist_ok=True)
text = '''Hemavarshini G S

Electronics & Communication Engineering Student
Embedded Systems Developer
IoT Enthusiast
Software Developer

Education
B.E. ECE, Sri Eshwar College of Engineering
CGPA: 8.0

Projects
TravelMate - Smart Tourist Guide Application
Smart Blind Stick - Bluetooth and Google Maps Integration

Experience
Embedded Systems and IoT Intern, NIELIT Calicut
Developed attendance tracker using ESP32, MQTT, and Adafruit IO.

Contact
Email: hemavarshini.g2024ece@sece.ac.in
Phone: 6382688945
'''

lines = text.splitlines()
obj_texts = []
obj_texts.append('1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n')
obj_texts.append('2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n')
content_lines = ['BT', '/F1 16 Tf', '72 720 Td']
for line in lines:
    safe = line.replace('(', '\\(').replace(')', '\\)').replace('\\', '\\\\')
    content_lines.append(f'({safe}) Tj')
    content_lines.append('0 -20 Td')
content_lines.append('ET')
content = '\n'.join(content_lines) + '\n'
obj_texts.append('3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n')
obj_texts.append(f'4 0 obj\n<< /Length {len(content.encode("latin1"))} >>\nstream\n{content}endstream\nendobj\n')
obj_texts.append('5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n')
pdf = b'%PDF-1.3\n%\xe2\xe3\xcf\xd3\n'
positions = []
for obj in obj_texts:
    positions.append(len(pdf))
    pdf += obj.encode('latin1')
pdf += f'xref\n0 {len(obj_texts) + 1}\n0000000000 65535 f \n'.encode('latin1')
for pos in positions:
    pdf += f'{pos:010d} 00000 n \n'.encode('latin1')
pdf += f'trailer\n<< /Size {len(obj_texts) + 1} /Root 1 0 R >>\nstartxref\n{len(pdf)}\n%%%%EOF\n'.encode('latin1')
Path(public / 'resume.pdf').write_bytes(pdf)
print('Created resume.pdf', (public / 'resume.pdf').stat().st_size)
