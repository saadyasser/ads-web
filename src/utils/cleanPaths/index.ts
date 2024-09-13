type Path = string;
export const cleanPath = (path: Path): Path => {
  const cleanedPath = path.replace(/[^\w\s/-]/g, "");

  const pathWithSpaces = cleanedPath.replace(/_-/g, " ");

  const formattedPath = pathWithSpaces.replace(/\b\w/g, (char) =>
    char.toUpperCase()
  );

  return formattedPath;
};
