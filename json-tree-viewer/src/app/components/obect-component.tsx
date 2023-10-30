import { Suspense } from "react";
import { JSONObject } from "@/@Types/json-structure";

import PreComp from ".";

export const ObectComponent: React.FC<{ data: JSONObject }> = ({
  data
}) => {
  return (<>
    <span className={"text-[#4E9590]"}>&#123;</span>
    
    <details open>
      <summary className={"relative -top-[25px] -left-[13px] w-10 h-0"}></summary>
    
      <div className={"pl-4 ml-0.5 border-l-2 border-y-0 border-r-0 border-solid border-[#BFBFBF]/30"}>
        {Object.keys(data).map((key, index) => (
          <div key={index}>
            <Suspense fallback={<PreComp.Key.Skeleton />}>
              <PreComp.Key.Component name={key}/>
            </Suspense>

            <PreComp.JSONComponent data={data[key]} />
          </div>
        ))}
      </div>
    </details>

    <span className={"text-[#4E9590]"}>&#125;</span>
  </>)
}