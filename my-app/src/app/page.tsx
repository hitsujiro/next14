import { Suspense } from "react";
import DataList from "./components/DataList";
import { Timer } from "./components/Timer";
import Loading from "./loading";
import RefreshBtn from "./components/Refresh";

export default function Page() {
  return (
    <main>
      <div className="m-10 text-center">
        <p>Hello World🚀</p>
        <Timer />
        <RefreshBtn />
        <Suspense fallback={<Loading />}>
          <DataList />
        </Suspense>
      </div>
    </main>
  );
}
