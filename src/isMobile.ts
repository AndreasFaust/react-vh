export default function isMobile(): boolean {
  const match = window.matchMedia("(pointer:coarse)");
  return match && match.matches;
}
