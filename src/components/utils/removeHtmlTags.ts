export const removeHtmlTags = (text: string): string => {
  return text.replace(/<[^>]*>?/gm, "");
};
