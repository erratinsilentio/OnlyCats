export default function nameFormat(name: string) {
  const nameToLow = name.toLowerCase();
  return nameToLow.charAt(0).toUpperCase() + nameToLow.slice(1);
}
