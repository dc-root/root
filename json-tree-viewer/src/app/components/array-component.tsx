import { JSONArray } from "@/@Types/json-structure";
import PreComp from ".";

export const ArrayComponent: React.FC<{ data: JSONArray }> = ({
  data
}) => {
  return (<>
      <span className={"text-[#F2CAB8]"}>&#91;</span>
        
      <details open>
        <summary className={"relative -top-[25px] -left-[13px] w-10 h-0"}></summary>
        <div className={"pl-7 ml-0.5 border-l-2 border-y-0 border-r-0 border-solid border-[#BFBFBF]/30"}>
          {data.map((item, index) => (
            <div key={index}>
              <PreComp.JSONComponent data={item} />
            </div>
          ))}
        </div>
      </details>
        
      <span className={"text-[#F2CAB8]"}>&#93;</span>
    </>
  )
}