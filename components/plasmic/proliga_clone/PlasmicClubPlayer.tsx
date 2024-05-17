// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: vKrRy_9WiPth

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

import Clubs2 from "../../Clubs2"; // plasmic-import: 3EueAFP_3sEI/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicClubPlayer.module.css"; // plasmic-import: vKrRy_9WiPth/css

createPlasmicElementProxy;

export type PlasmicClubPlayer__VariantMembers = {};
export type PlasmicClubPlayer__VariantsArgs = {};
type VariantPropType = keyof PlasmicClubPlayer__VariantsArgs;
export const PlasmicClubPlayer__VariantProps = new Array<VariantPropType>();

export type PlasmicClubPlayer__ArgsType = {};
type ArgPropType = keyof PlasmicClubPlayer__ArgsType;
export const PlasmicClubPlayer__ArgProps = new Array<ArgPropType>();

export type PlasmicClubPlayer__OverridesType = {
  root?: Flex__<"div">;
  clubs2?: Flex__<typeof Clubs2>;
  h1?: Flex__<"h1">;
  img?: Flex__<typeof PlasmicImg__>;
};

export interface DefaultClubPlayerProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicClubPlayer__RenderFunc(props: {
  variants: PlasmicClubPlayer__VariantsArgs;
  args: PlasmicClubPlayer__ArgsType;
  overrides: PlasmicClubPlayer__OverridesType;
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
    query: usePlasmicDataOp(() => {
      return {
        sourceId: "8cdHi4ivRUEkK6qbegQevF",
        opId: "ddbabb1a-fe92-4796-ab1e-aaa7cfe9d995",
        userArgs: {
          filters: [$ctx.params.id]
        },
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
        })()}.$.ddbabb1a-fe92-4796-ab1e-aaa7cfe9d995.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    player: usePlasmicDataOp(() => {
      return {
        sourceId: "8cdHi4ivRUEkK6qbegQevF",
        opId: "a5975212-7f5e-44da-90fa-68324feac1ff",
        userArgs: {},
        cacheKey: `plasmic.$.a5975212-7f5e-44da-90fa-68324feac1ff.$.`,
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
          <Clubs2
            data-plasmic-name={"clubs2"}
            data-plasmic-override={overrides.clubs2}
            className={classNames("__wab_instance", sty.clubs2)}
          />

          <h1
            data-plasmic-name={"h1"}
            data-plasmic-override={overrides.h1}
            className={classNames(
              projectcss.all,
              projectcss.h1,
              projectcss.__wab_text,
              sty.h1
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $queries.query.data[0].name;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "Page title";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </h1>
          <div className={classNames(projectcss.all, sty.freeBox___6Ist0)}>
            {(() => {
              try {
                return true;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return true;
                }
                throw e;
              }
            })()
              ? (_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                  (() => {
                    try {
                      return $queries.player.data;
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
                      className={classNames(projectcss.all, sty.freeBox__lqVsv)}
                      key={currentIndex}
                    >
                      {(() => {
                        try {
                          return (
                            currentItem.club_id === $queries.query.data[0].id
                          );
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
                        <PlasmicImg__
                          data-plasmic-name={"img"}
                          data-plasmic-override={overrides.img}
                          alt={""}
                          className={classNames(sty.img)}
                          displayHeight={"auto"}
                          displayMaxHeight={"none"}
                          displayMaxWidth={"100%"}
                          displayMinHeight={"0"}
                          displayMinWidth={"0"}
                          displayWidth={"auto"}
                          loading={"lazy"}
                          src={(() => {
                            try {
                              return currentItem.image;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return undefined;
                              }
                              throw e;
                            }
                          })()}
                        />
                      ) : null}
                      {(() => {
                        try {
                          return (
                            currentItem.club_id === $queries.query.data[0].id
                          );
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
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__bs1Kw
                          )}
                        >
                          <React.Fragment>
                            {(() => {
                              try {
                                return currentItem.shirt_number;
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
                      {(() => {
                        try {
                          return (
                            currentItem.club_id === $queries.query.data[0].id
                          );
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
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___9Xyx1
                          )}
                        >
                          <React.Fragment>
                            {(() => {
                              try {
                                return currentItem.name;
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
                })
              : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "clubs2", "h1", "img"],
  clubs2: ["clubs2"],
  h1: ["h1"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  clubs2: typeof Clubs2;
  h1: "h1";
  img: typeof PlasmicImg__;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicClubPlayer__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicClubPlayer__VariantsArgs;
    args?: PlasmicClubPlayer__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicClubPlayer__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicClubPlayer__ArgsType,
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
          internalArgPropNames: PlasmicClubPlayer__ArgProps,
          internalVariantPropNames: PlasmicClubPlayer__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicClubPlayer__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicClubPlayer";
  } else {
    func.displayName = `PlasmicClubPlayer.${nodeName}`;
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

export const PlasmicClubPlayer = Object.assign(
  // Top-level PlasmicClubPlayer renders the root element
  withPlasmicPageGuard(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    clubs2: makeNodeComponent("clubs2"),
    h1: makeNodeComponent("h1"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicClubPlayer
    internalVariantProps: PlasmicClubPlayer__VariantProps,
    internalArgProps: PlasmicClubPlayer__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicClubPlayer;
/* prettier-ignore-end */