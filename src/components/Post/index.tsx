import React from "react";

import { Card } from "./Card";

export const Posts: React.FC<{ results: any }> = ({ results }) => {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto p-4">
      {results.map((result: any) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
};
