export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const colorCodeToRGBA = (hex: string, alpha: number) => {
  if (hex.slice(0, 1) == "#") hex = hex.slice(1);
  const r = parseInt("0x" + hex.slice(0, 2));
  const g = parseInt("0x" + hex.slice(2, 4));
  const b = parseInt("0x" + hex.slice(4, 6));
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const formatDate = (date: Date): string => {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
};
