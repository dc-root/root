import { Suspense } from "react";
import {
  JSONArray,
  JSONObject,
  JSONValue
} from "@/@Types/json-structure";

import PreComp from ".";

export const JSONComponent: React.FC<{ data: JSONValue | JSONObject | JSONArray }> = ({
  data
}) => {
  if(Array.isArray(data))
    return (
    <Suspense fallback={<PreComp.Array.Skeleton />}>
      <PreComp.Array.Component data={data} />
    </Suspense>
    );
  else if(typeof data === 'object' && data !== null)
    return (
      <Suspense fallback={<PreComp.Obect.Skeleton />}>
        <PreComp.Obect.Component data={data} />
      </Suspense>
    );
  else
    return (
      <Suspense fallback={<PreComp.Value.Skeleton />}>
        <PreComp.Value.Component data={data as JSONValue} />
      </Suspense>
    )
}