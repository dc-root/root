import { JSONValue } from "@/@Types/json-structure";

export const Value: React.FC<{ data: JSONValue }> = ({ data }) => {
  const typeValue = typeof data;

  switch (typeValue) {
    case 'string':
      return <span className={"text-zinc-800"}>"{data}"</span>;
    case 'boolean':
      return <span>{data ? "true" : "false"}</span>;
    case 'object':
      return <span className={"text-zinc-800"}>null</span>;
    default:
      return <span className={"text-zinc-800"}>{data}</span>;
  }
};