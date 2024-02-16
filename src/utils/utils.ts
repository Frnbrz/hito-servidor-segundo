export const dateFormatter = (date: string) => {
  const options = {
    year: "numeric" as const,
    month: "numeric" as const,
    day: "numeric" as const,
  };
  return new Date(date).toLocaleDateString("es-ES", options);
};
