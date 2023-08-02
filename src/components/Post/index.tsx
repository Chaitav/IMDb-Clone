import React from "react";

export const Posts: React.FC<{ results: any }> = ({ results }) => {
  return (
    <div>
      {results.map((result: any) => (
        <div key={result.id}>{result.original_title}</div>
      ))}
    </div>
  );
};
