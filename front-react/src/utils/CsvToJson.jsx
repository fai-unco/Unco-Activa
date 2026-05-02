import { useState } from "react";

function parseCSV(text, delimiter = ",") {
  const rows = [];
  let row = [];
  let field = "";
  let insideQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"' && insideQuotes && next === '"') {
      field += '"';
      i++;
    } else if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === delimiter && !insideQuotes) {
      row.push(field);
      field = "";
    } else if ((char === "\n" || char === "\r") && !insideQuotes) {
      if (field !== "" || row.length > 0) {
        row.push(field);
        rows.push(row);
        row = [];
        field = "";
      }
    } else {
      field += char;
    }
  }

  if (field !== "" || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  const headers = rows[0];

  return rows.slice(1).map(r => {
    const obj = {};
    headers.forEach((h, i) => {
      obj[h] = r[i] ?? "";
    });
    return obj;
  });
}

export default function CsvToJson() {
  const [json, setJson] = useState(null);

 const handleFile = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const buffer = await file.arrayBuffer();

  const text = new TextDecoder("latin1").decode(buffer);

  const result = parseCSV(text);
  setJson(result);

  console.log(result);
};

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFile} />

      {json && (
        <pre style={{ maxHeight: 400, overflow: "auto" }}>
          {JSON.stringify(json, null, 2)}
        </pre>
      )}
    </div>
  );
}