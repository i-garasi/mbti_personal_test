export function calculatePersonalityType(answers: string[]): string {
  // Count preferences
  let e = 0, i = 0, s = 0, n = 0, t = 0, f = 0, j = 0, p = 0;

  answers.forEach((answer, index) => {
    switch (answer) {
      case 'E': e++; break;
      case 'I': i++; break;
      case 'S': s++; break;
      case 'N': n++; break;
      case 'T': t++; break;
      case 'F': f++; break;
      case 'J': j++; break;
      case 'P': p++; break;
    }
  });

  // Determine each dimension
  const firstLetter = e > i ? 'E' : 'I';
  const secondLetter = s > n ? 'S' : 'N';
  const thirdLetter = t > f ? 'T' : 'F';
  const fourthLetter = j > p ? 'J' : 'P';

  return `${firstLetter}${secondLetter}${thirdLetter}${fourthLetter}`;
}