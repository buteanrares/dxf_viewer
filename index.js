const fs = require("fs");

// Read the DXF file dynamically
const dxfData = fs.readFileSync("diamond.dxf", "utf8");

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

const extractedCoordinates = extractCoordinatesFromDXF(dxfData);
console.log(extractedCoordinates);
