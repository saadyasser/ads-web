type Path = string;
export const cleanPath = (path: Path): Path => {
  const cleanedPath = path.replace(/[^\w\s/-]/g, "");

  const pathWithoutUnderscores = cleanedPath.replace(/_/g, " ");
  const pathWithSpaces = pathWithoutUnderscores.replace(/-/g, " ");

  const formattedPath = pathWithSpaces.replace(/\b\w/g, (char) =>
    char.toUpperCase()
  );

  return formattedPath;
};
