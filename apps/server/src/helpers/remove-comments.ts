export function removeComments(code: string): string {
  // Remove single-line comments
  const codeWithoutSingleLineComments = code.replace(/\/\/.*?\n/g, "");

  // Remove multi-line comments
  const codeWithoutComments = codeWithoutSingleLineComments.replace(
    /\/\*[\s\S]*?\*\//g,
    ""
  );

  return codeWithoutComments;
}
