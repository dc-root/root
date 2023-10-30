import PreComp from ".";

export function TreeJsonView({ data }: { data: any }) {

  return (
    <>{data && <div className={"w-full md:w-[750px] h-full mb-10 bg-black/5 pl-5 pr-2 py-3 rounded-sm ring-1 ring-zinc-950/10"}>
      <PreComp.JSONComponent data={data} />
    </div>}</>
  );
}