function extractCoordinatesFromDXF(dxfData) {
  const coordinates = [];
  const lines = dxfData.split("\n");
  let x1 = null;
  let y1 = null;
  let x2 = null;
  let y2 = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith("10")) {
      x1 = parseFloat(lines[i + 1].trim());
    } else if (line.startsWith("20")) {
      y1 = parseFloat(lines[i + 1].trim());
    } else if (line.startsWith("11")) {
      x2 = parseFloat(lines[i + 1].trim());
    } else if (line.startsWith("21")) {
      y2 = parseFloat(lines[i + 1].trim());
    } else if (
      line === "0" &&
      x1 !== null &&
      y1 !== null &&
      x2 !== null &&
      y2 !== null
    ) {
      coordinates.push({ x1, y1, x2, y2 });
      x1 = null;
      y1 = null;
      x2 = null;
      y2 = null;
    }
  }

  return coordinates;
}

// Example usage:
const dxfExample = `  0
SECTION
  2
ENTITIES
  0
LINE
  8
  0
 10
   45.00    
 20
   45.00    
 30
  0.0000E+00
 11
   45.00    
 21
  -45.00    
 31
  0.0000E+00
  0
LINE
  8
  0
 10
   45.00    
 20
  -45.00    
 30
  0.0000E+00
 11
  0.0000E+00
 21
  0.0000E+00
 31
  0.0000E+00
  0
LINE
  8
  0
 10
  0.0000E+00
 20
  0.0000E+00
 30
  0.0000E+00
 11
  -45.00    
 21
   45.00    
 31
  0.0000E+00
  0
LINE
  8
  0
 10
  -45.00    
 20
   45.00    
 30
  0.0000E+00
 11
   45.00    
 21
   45.00    
 31
  0.0000E+00
  0
LINE
  8
  0
 10
   45.00    
 20
   45.00    
 30
  0.0000E+00
 11
  0.0000E+00
 21
  0.0000E+00
 31
  -78.00    
  0
LINE
  8
  0
 10
  0.0000E+00
 20
  0.0000E+00
 30
  -78.00    
 11
  0.0000E+00
 21
  0.0000E+00
 31
  0.0000E+00
  0
LINE
  8
  0
 10
  0.0000E+00
 20
  0.0000E+00
 30
  0.0000E+00
 11
  -45.00    
 21
  -45.00    
 31
  0.0000E+00
  0
LINE
  8
  0
 10
  -45.00    
 20
  -45.00    
 30
  0.0000E+00
 11
   45.00    
 21
   45.00    
 31
  0.0000E+00
  0
LINE
  8
  0
 10
   45.00    
 20
  -45.00    
 30
  0.0000E+00
 11
  -45.00    
 21
  -45.00    
 31
  0.0000E+00
  0
LINE
  8
  0
 10
  -45.00    
 20
  -45.00    
 30
  0.0000E+00
 11
  -45.00    
 21
   45.00    
 31
  0.0000E+00
  0
LINE
  8
  0
 10
  -45.00    
 20
   45.00    
 30
  0.0000E+00
 11
  0.0000E+00
 21
  0.0000E+00
 31
  -78.00    
  0
LINE
  8
  0
 10
  0.0000E+00
 20
  0.0000E+00
 30
  -78.00    
 11
   45.00    
 21
  -45.00    
 31
  0.0000E+00
  0
ENDSEC
  0
EOF`;

const extractedCoordinates = extractCoordinatesFromDXF(dxfExample);
console.log(extractedCoordinates);
