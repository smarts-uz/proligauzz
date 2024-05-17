// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: h0_szABvd8-m

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import Navbar from "../../Navbar"; // plasmic-import: TKT8XnZtrLZi/component
import Clubs2 from "../../Clubs2"; // plasmic-import: 3EueAFP_3sEI/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicClubInfo.module.css"; // plasmic-import: h0_szABvd8-m/css

createPlasmicElementProxy;

export type PlasmicClubInfo__VariantMembers = {};
export type PlasmicClubInfo__VariantsArgs = {};
type VariantPropType = keyof PlasmicClubInfo__VariantsArgs;
export const PlasmicClubInfo__VariantProps = new Array<VariantPropType>();

export type PlasmicClubInfo__ArgsType = {};
type ArgPropType = keyof PlasmicClubInfo__ArgsType;
export const PlasmicClubInfo__ArgProps = new Array<ArgPropType>();

export type PlasmicClubInfo__OverridesType = {
  root?: Flex__<"div">;
  navbar?: Flex__<typeof Navbar>;
  clubs2?: Flex__<typeof Clubs2>;
  columns?: Flex__<"div">;
  text?: Flex__<"div">;
};

export interface DefaultClubInfoProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicClubInfo__RenderFunc(props: {
  variants: PlasmicClubInfo__VariantsArgs;
  args: PlasmicClubInfo__ArgsType;
  overrides: PlasmicClubInfo__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    clubs: usePlasmicDataOp(() => {
      return {
        sourceId: "bCyY9Km8wqcJwdgC8XtpDZ",
        opId: "ee7f8f55-0b84-4f5e-be9a-4eda0b1c7c64",
        userArgs: {},
        cacheKey: `plasmic.$.${(() => {
          try {
            return "getOne";
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return "";
            }
            throw e;
          }
        })()}.$.ee7f8f55-0b84-4f5e-be9a-4eda0b1c7c64.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    player: usePlasmicDataOp(() => {
      return {
        sourceId: "bCyY9Km8wqcJwdgC8XtpDZ",
        opId: "00e873a0-2437-4119-ba8a-08da3add36bd",
        userArgs: {},
        cacheKey: `plasmic.$.00e873a0-2437-4119-ba8a-08da3add36bd.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    clubPlayer: usePlasmicDataOp(() => {
      return {
        sourceId: "8cdHi4ivRUEkK6qbegQevF",
        opId: "b7437d37-78d8-4a62-9896-8014e85b1080",
        userArgs: {},
        cacheKey: `plasmic.$.b7437d37-78d8-4a62-9896-8014e85b1080.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          <div className={classNames(projectcss.all, sty.freeBox___4MaPl)}>
            <Clubs2
              data-plasmic-name={"clubs2"}
              data-plasmic-override={overrides.clubs2}
              className={classNames("__wab_instance", sty.clubs2)}
            />
          </div>
          <div
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            className={classNames(projectcss.all, sty.columns)}
          >
            <div className={classNames(projectcss.all, sty.column__zkqw1)}>
              {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                (() => {
                  try {
                    return $queries.clubPlayer.data;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return [];
                    }
                    throw e;
                  }
                })()
              ).map((__plasmic_item_0, __plasmic_idx_0) => {
                const currentItem = __plasmic_item_0;
                const currentIndex = __plasmic_idx_0;
                return (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__yjp)}
                    key={currentIndex}
                  >
                    {(() => {
                      try {
                        return currentItem.id === $queries.clubs.data[0].id;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return true;
                        }
                        throw e;
                      }
                    })() ? (
                      <div
                        data-plasmic-name={"text"}
                        data-plasmic-override={overrides.text}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text
                        )}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return currentItem.id;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
            <div className={classNames(projectcss.all, sty.column__k934L)}>
              {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                (() => {
                  try {
                    return $queries.clubPlayer.data;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return [];
                    }
                    throw e;
                  }
                })()
              ).map((__plasmic_item_0, __plasmic_idx_0) => {
                const currentItem = __plasmic_item_0;
                const currentIndex = __plasmic_idx_0;
                return (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__abCr)}
                    key={currentIndex}
                  />
                );
              })}
            </div>
            <div className={classNames(projectcss.all, sty.column__vtOtf)} />
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navbar", "clubs2", "columns", "text"],
  navbar: ["navbar"],
  clubs2: ["clubs2"],
  columns: ["columns", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  clubs2: typeof Clubs2;
  columns: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicClubInfo__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicClubInfo__VariantsArgs;
    args?: PlasmicClubInfo__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicClubInfo__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicClubInfo__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicClubInfo__ArgProps,
          internalVariantPropNames: PlasmicClubInfo__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicClubInfo__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicClubInfo";
  } else {
    func.displayName = `PlasmicClubInfo.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const PageGuard: React.FC<P> = props => (
    <PlasmicPageGuard__
      minRole={null}
      appId={"tDWy3GXn2mzd9e2xUaPdmu"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={false}
    >
      <WrappedComponent {...props} />
    </PlasmicPageGuard__>
  );

  return PageGuard;
}

export const PlasmicClubInfo = Object.assign(
  // Top-level PlasmicClubInfo renders the root element
  withPlasmicPageGuard(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    clubs2: makeNodeComponent("clubs2"),
    columns: makeNodeComponent("columns"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicClubInfo
    internalVariantProps: PlasmicClubInfo__VariantProps,
    internalArgProps: PlasmicClubInfo__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicClubInfo;
/* prettier-ignore-end */
