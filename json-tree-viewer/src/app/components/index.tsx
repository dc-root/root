import { TreeJsonView } from "./tree-view";
import { JSONComponent } from "./json-component";
import { ArrayComponent } from "./array-component";
import { ObectComponent } from "./obect-component";
import { Key } from "./key";
import { Value } from "./value";

const PreComp = {
  TreeJsonView: TreeJsonView,
  JSONComponent: JSONComponent,
  Array: {
    Component: ArrayComponent,
    Skeleton: () => <div className="self-center inline-block"></div>
  },
  Obect: {
    Component: ObectComponent,
    Skeleton: () => <div  className="self-center inline-block"></div>
  },
  Key: {
    Component: Key,
    Skeleton: () => <div className="self-center inline-block animate-pulse h-2.5 mx-1 bg-white rounded-full w-20"></div>
  },
  Value: {
    Component: Value,
    Skeleton: () => <div className="self-center inline-block animate-pulse h-2.5 mx-1 bg-white rounded-full w-36"></div>
  }
}

export default PreComp;