const htmlEntities: { [key: string]: string } = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#039;": "'",
  "&#39;": "'",
  "&rsquo;": "'",
  "&lsquo;": "'",
  "&mdash;": "—",
  "&ndash;": "–",
  "&hellip;": "...",
  "&#8217;": "'",
  "&#8216;": "'",
  "&eacute;": "é",
  "&egrave;": "è",
  "&agrave;": "à",
  "&ccedil;": "ç",
  "&ocirc;": "ô",
  "&nbsp;": " ",
};

export const decodeHtmlEntities = (text: string): string => {
  if (!text) return "";

  // Première passe avec les entités HTML standard
  let decoded = text.replace(
    /&[^;]+;/g,
    (match) => htmlEntities[match] || match
  );

  // Deuxième passe pour les apostrophes encodées numériquement
  decoded = decoded.replace(/&#(\d+);/g, (match, dec) =>
    String.fromCharCode(dec)
  );

  return decoded;
};
