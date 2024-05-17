// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/proliga_clone/PlasmicGlobalContextsProvider";
import { ScreenVariantProvider } from "../components/plasmic/proliga_clone/PlasmicGlobalVariant__Screen";
import { UnnamedGlobalGroupOfVariantsContext } from "../components/plasmic/proliga_clone/PlasmicGlobalVariant__UnnamedGlobalGroupOfVariants";
import { Plasmic_1 } from "../components/plasmic/proliga_clone/Plasmic_1";
import { useRouter } from "next/router";

function _1() {
  // Use Plasmic_1 to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into Plasmic_1 are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, Plasmic_1 is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  return (
    // <UnnamedGlobalGroupOfVariantsContext.Provider value={undefined}>
      <GlobalContextsProvider>
        <PageParamsProvider__
          route={useRouter()?.pathname}
          params={useRouter()?.query}
          query={useRouter()?.query}
        >
          <Plasmic_1 />
        </PageParamsProvider__>
      </GlobalContextsProvider>
    // </UnnamedGlobalGroupOfVariantsContext.Provider>
  );
}

export default _1;
