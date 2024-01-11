import json

def parse_data(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()

    data = []
    current_subject = ""
    for line in lines:
        if line.startswith("###"):
            current_subject = line.strip().split(" ")[-1]
        elif line.startswith("- **"):
            parts = line.split(" ")
            question = " ".join(parts[1:-1]).strip() 
            answer = 0 if parts[-1].strip() == "(O)" else 1
            comment = next((lines[lines.index(line) + 1].split(": ", 1)[1].strip() for l in lines if line in l), "") 
            data.append({
                "subject": current_subject,
                "question": question,
                "options": ["O","X","모르겠음"],
                "answer": answer,
                "comment": comment
            })
    return data

def write_json(data, output_path):
    with open(output_path, 'w', encoding='utf-8') as file:
        json.dump(data, file, ensure_ascii=False, indent=4)

input_file_path = 'input.txt'
output_file_path = 'output.json'

parsed_data = parse_data(input_file_path)
write_json(parsed_data, output_file_path)
