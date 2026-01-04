export const getDayName = (dateString: string, index?: number) => {
   if (index === 0) return "Hoy";

   const [year, month, day] = dateString.split("-").map(Number);
   const date = new Date(year, month - 1, day);

   return date.toLocaleDateString("es-ES", {
      weekday: "long",
   });
};

export const formatFullDate = (dateString: string) => {
   const date = new Date(dateString);
   return new Intl.DateTimeFormat("es-ES", {
      weekday: "long",
      day: "numeric",
      month: "short",
   }).format(date);
};
