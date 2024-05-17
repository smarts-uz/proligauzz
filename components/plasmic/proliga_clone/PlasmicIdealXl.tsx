// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: D7Sj75T4yazB

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

import Navbar from "../../Navbar"; // plasmic-import: TKT8XnZtrLZi/component
import Clubs2 from "../../Clubs2"; // plasmic-import: 3EueAFP_3sEI/component
import { AntdDropdown } from "@plasmicpkgs/antd5/skinny/registerDropdown";
import { AntdMenuItem } from "@plasmicpkgs/antd5/skinny/registerMenu";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import SoccerPlaceMens from "../../SoccerPlaceMens"; // plasmic-import: w6mcybgJxhpK/component
import { CmsQueryRepeater } from "@plasmicpkgs/plasmic-cms";
import { CmsRowField } from "@plasmicpkgs/plasmic-cms";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicIdealXl.module.css"; // plasmic-import: D7Sj75T4yazB/css

createPlasmicElementProxy;

export type PlasmicIdealXl__VariantMembers = {};
export type PlasmicIdealXl__VariantsArgs = {};
type VariantPropType = keyof PlasmicIdealXl__VariantsArgs;
export const PlasmicIdealXl__VariantProps = new Array<VariantPropType>();

export type PlasmicIdealXl__ArgsType = {};
type ArgPropType = keyof PlasmicIdealXl__ArgsType;
export const PlasmicIdealXl__ArgProps = new Array<ArgPropType>();

export type PlasmicIdealXl__OverridesType = {
  idealXl?: Flex__<"div">;
  navbar?: Flex__<typeof Navbar>;
  clubs2?: Flex__<typeof Clubs2>;
  h4?: Flex__<"h4">;
  h5?: Flex__<"h5">;
  soccerPlaceMens?: Flex__<typeof SoccerPlaceMens>;
  h6?: Flex__<"h6">;
  cmsDataFetcher?: Flex__<typeof CmsQueryRepeater>;
};

export interface DefaultIdealXlProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicIdealXl__RenderFunc(props: {
  variants: PlasmicIdealXl__VariantsArgs;
  args: PlasmicIdealXl__ArgsType;
  overrides: PlasmicIdealXl__OverridesType;
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
          data-plasmic-name={"idealXl"}
          data-plasmic-override={overrides.idealXl}
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
            sty.idealXl
          )}
        >
          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          <Clubs2
            data-plasmic-name={"clubs2"}
            data-plasmic-override={overrides.clubs2}
            className={classNames("__wab_instance", sty.clubs2)}
          />

          <div className={classNames(projectcss.all, sty.freeBox__mz0Fn)}>
            <div className={classNames(projectcss.all, sty.freeBox__bMWf)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___3BMcr
                )}
              >
                <React.Fragment>
                  <React.Fragment>{""}</React.Fragment>
                  {
                    <h4
                      data-plasmic-name={"h4"}
                      data-plasmic-override={overrides.h4}
                      className={classNames(
                        projectcss.all,
                        projectcss.h4,
                        projectcss.__wab_text,
                        sty.h4
                      )}
                    >
                      <React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ color: "var(--token-jgohepLVeKvh)" }}
                        >
                          {"Ideal XI"}
                        </span>
                      </React.Fragment>
                    </h4>
                  }
                  <React.Fragment>{""}</React.Fragment>
                </React.Fragment>
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__nd31A)}>
            <div className={classNames(projectcss.all, sty.freeBox__nSjWh)}>
              <div className={classNames(projectcss.all, sty.freeBox__mv3Y)}>
                <AntdDropdown
                  className={classNames("__wab_instance", sty.dropdown__gtEtN)}
                  dropdownMenuScopeClassName={
                    sty["dropdown__gtEtN__dropdownMenu"]
                  }
                  menuItems={() => (
                    <React.Fragment>
                      <AntdMenuItem
                        className={classNames(
                          "__wab_instance",
                          sty.menuItem__gsvI
                        )}
                        key={"menu-item-1"}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__j02S
                          )}
                        >
                          {"Menu item"}
                        </div>
                      </AntdMenuItem>
                      <AntdMenuItem
                        className={classNames(
                          "__wab_instance",
                          sty.menuItem___8Vndq
                        )}
                        key={"menu-item-2"}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__xbw6Z
                          )}
                        >
                          {"Menu item"}
                        </div>
                      </AntdMenuItem>
                    </React.Fragment>
                  )}
                  menuItemsJson={[
                    { type: "item", value: "action1", label: "Action 1" },
                    { type: "item", value: "action2", label: "Action 2" }
                  ]}
                >
                  <AntdButton
                    className={classNames("__wab_instance", sty.button__iiSK)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__fg9L1
                      )}
                    >
                      {"Dropdown"}
                    </div>
                  </AntdButton>
                </AntdDropdown>
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__ivfT8)}>
              <div className={classNames(projectcss.all, sty.freeBox__t5XAw)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__lfNXc
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{""}</React.Fragment>
                    {
                      <h5
                        data-plasmic-name={"h5"}
                        data-plasmic-override={overrides.h5}
                        className={classNames(
                          projectcss.all,
                          projectcss.h5,
                          projectcss.__wab_text,
                          sty.h5
                        )}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ color: "var(--token-jgohepLVeKvh)" }}
                          >
                            {"Ideal XI of the fixture Fixture 1"}
                          </span>
                        </React.Fragment>
                      </h5>
                    }
                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                </div>
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__kjQyd)}>
              <div className={classNames(projectcss.all, sty.freeBox__u4CMl)}>
                <SoccerPlaceMens
                  data-plasmic-name={"soccerPlaceMens"}
                  data-plasmic-override={overrides.soccerPlaceMens}
                  className={classNames("__wab_instance", sty.soccerPlaceMens)}
                />
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__qwkJf)}>
                <div className={classNames(projectcss.all, sty.freeBox__iCwhV)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox___5GM1)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__gAcdl
                      )}
                    >
                      <React.Fragment>
                        <React.Fragment>{""}</React.Fragment>
                        {
                          <h6
                            data-plasmic-name={"h6"}
                            data-plasmic-override={overrides.h6}
                            className={classNames(
                              projectcss.all,
                              projectcss.h6,
                              projectcss.__wab_text,
                              sty.h6
                            )}
                          >
                            <React.Fragment>
                              <span
                                className={
                                  "plasmic_default__all plasmic_default__span"
                                }
                                style={{ color: "var(--token-jgohepLVeKvh)" }}
                              >
                                {"Players"}
                              </span>
                            </React.Fragment>
                          </h6>
                        }
                        <React.Fragment>{""}</React.Fragment>
                      </React.Fragment>
                    </div>
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__aY7QO)}
                  >
                    <AntdDropdown
                      className={classNames(
                        "__wab_instance",
                        sty.dropdown__dnHoo
                      )}
                      dropdownMenuScopeClassName={
                        sty["dropdown__dnHoo__dropdownMenu"]
                      }
                      menuItems={() => (
                        <React.Fragment>
                          <AntdMenuItem
                            className={classNames(
                              "__wab_instance",
                              sty.menuItem___4PAAm
                            )}
                            key={"menu-item-1"}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__fkFna
                              )}
                            >
                              {"Menu item"}
                            </div>
                          </AntdMenuItem>
                          <AntdMenuItem
                            className={classNames(
                              "__wab_instance",
                              sty.menuItem__mQgEy
                            )}
                            key={"menu-item-2"}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__acMmW
                              )}
                            >
                              {"Menu item"}
                            </div>
                          </AntdMenuItem>
                        </React.Fragment>
                      )}
                      menuItemsJson={[
                        { type: "item", value: "action1", label: "Action 1" },
                        { type: "item", value: "action2", label: "Action 2" }
                      ]}
                    >
                      <AntdButton
                        className={classNames(
                          "__wab_instance",
                          sty.button__w4Jqf
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__nYnbZ
                          )}
                        >
                          {"Dropdown"}
                        </div>
                      </AntdButton>
                    </AntdDropdown>
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__w1Wrw)}>
                  <CmsQueryRepeater
                    data-plasmic-name={"cmsDataFetcher"}
                    data-plasmic-override={overrides.cmsDataFetcher}
                    className={classNames("__wab_instance", sty.cmsDataFetcher)}
                    desc={false}
                    emptyMessage={
                      <DataCtxReader__>
                        {$ctx => (
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__t14Gc
                            )}
                          >
                            {"No matching published entries found."}
                          </div>
                        )}
                      </DataCtxReader__>
                    }
                    fields={[
                      "image",
                      "clubLogo",
                      "position",
                      "name",
                      "cost",
                      "point",
                      "_id"
                    ]}
                    forceEmptyState={false}
                    forceLoadingState={false}
                    limit={0}
                    loadingMessage={
                      <DataCtxReader__>
                        {$ctx => (
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text___5FHQl
                            )}
                          >
                            {"Loading..."}
                          </div>
                        )}
                      </DataCtxReader__>
                    }
                    noAutoRepeat={false}
                    noLayout={false}
                    table={"idealPlayers"}
                    useDraft={false}
                  >
                    <DataCtxReader__>
                      {$ctx => (
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__m15P
                          )}
                        >
                          <Stack__
                            as={"div"}
                            hasGap={true}
                            className={classNames(
                              projectcss.all,
                              sty.freeBox___3YAhp
                            )}
                          >
                            <CmsRowField
                              className={classNames(
                                "__wab_instance",
                                sty.cmsEntryField__bfwl
                              )}
                              field={"image"}
                              themeResetClassName={classNames(
                                projectcss.root_reset,
                                projectcss.root_reset_tags,
                                projectcss.plasmic_default_styles,
                                projectcss.plasmic_mixins,
                                projectcss.plasmic_tokens,
                                plasmic_antd_5_hostless_css.plasmic_tokens,
                                plasmic_plasmic_rich_components_css.plasmic_tokens
                              )}
                            />

                            <CmsRowField
                              className={classNames(
                                "__wab_instance",
                                sty.cmsEntryField__a42Ms
                              )}
                              field={"clubLogo"}
                              themeResetClassName={classNames(
                                projectcss.root_reset,
                                projectcss.root_reset_tags,
                                projectcss.plasmic_default_styles,
                                projectcss.plasmic_mixins,
                                projectcss.plasmic_tokens,
                                plasmic_antd_5_hostless_css.plasmic_tokens,
                                plasmic_plasmic_rich_components_css.plasmic_tokens
                              )}
                            />

                            <CmsRowField
                              className={classNames(
                                "__wab_instance",
                                sty.cmsEntryField__deAe
                              )}
                              themeResetClassName={classNames(
                                projectcss.root_reset,
                                projectcss.root_reset_tags,
                                projectcss.plasmic_default_styles,
                                projectcss.plasmic_mixins,
                                projectcss.plasmic_tokens,
                                plasmic_antd_5_hostless_css.plasmic_tokens,
                                plasmic_plasmic_rich_components_css.plasmic_tokens
                              )}
                            />

                            <CmsRowField
                              className={classNames(
                                "__wab_instance",
                                sty.cmsEntryField__xv7Rc
                              )}
                              field={"name"}
                              themeResetClassName={classNames(
                                projectcss.root_reset,
                                projectcss.root_reset_tags,
                                projectcss.plasmic_default_styles,
                                projectcss.plasmic_mixins,
                                projectcss.plasmic_tokens,
                                plasmic_antd_5_hostless_css.plasmic_tokens,
                                plasmic_plasmic_rich_components_css.plasmic_tokens
                              )}
                            />
                          </Stack__>
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__ia3Pj
                            )}
                          >
                            <CmsRowField
                              className={classNames(
                                "__wab_instance",
                                sty.cmsEntryField__oj3Wx
                              )}
                              field={"cost"}
                              themeResetClassName={classNames(
                                projectcss.root_reset,
                                projectcss.root_reset_tags,
                                projectcss.plasmic_default_styles,
                                projectcss.plasmic_mixins,
                                projectcss.plasmic_tokens,
                                plasmic_antd_5_hostless_css.plasmic_tokens,
                                plasmic_plasmic_rich_components_css.plasmic_tokens
                              )}
                            />
                          </div>
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox___7My3H
                            )}
                          >
                            <CmsRowField
                              className={classNames(
                                "__wab_instance",
                                sty.cmsEntryField___1Mb85
                              )}
                              field={"point"}
                              themeResetClassName={classNames(
                                projectcss.root_reset,
                                projectcss.root_reset_tags,
                                projectcss.plasmic_default_styles,
                                projectcss.plasmic_mixins,
                                projectcss.plasmic_tokens,
                                plasmic_antd_5_hostless_css.plasmic_tokens,
                                plasmic_plasmic_rich_components_css.plasmic_tokens
                              )}
                            />
                          </div>
                        </div>
                      )}
                    </DataCtxReader__>
                  </CmsQueryRepeater>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  idealXl: [
    "idealXl",
    "navbar",
    "clubs2",
    "h4",
    "h5",
    "soccerPlaceMens",
    "h6",
    "cmsDataFetcher"
  ],
  navbar: ["navbar"],
  clubs2: ["clubs2"],
  h4: ["h4"],
  h5: ["h5"],
  soccerPlaceMens: ["soccerPlaceMens"],
  h6: ["h6"],
  cmsDataFetcher: ["cmsDataFetcher"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  idealXl: "div";
  navbar: typeof Navbar;
  clubs2: typeof Clubs2;
  h4: "h4";
  h5: "h5";
  soccerPlaceMens: typeof SoccerPlaceMens;
  h6: "h6";
  cmsDataFetcher: typeof CmsQueryRepeater;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicIdealXl__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicIdealXl__VariantsArgs;
    args?: PlasmicIdealXl__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicIdealXl__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicIdealXl__ArgsType,
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
          internalArgPropNames: PlasmicIdealXl__ArgProps,
          internalVariantPropNames: PlasmicIdealXl__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicIdealXl__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "idealXl") {
    func.displayName = "PlasmicIdealXl";
  } else {
    func.displayName = `PlasmicIdealXl.${nodeName}`;
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

export const PlasmicIdealXl = Object.assign(
  // Top-level PlasmicIdealXl renders the root element
  withPlasmicPageGuard(makeNodeComponent("idealXl")),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    clubs2: makeNodeComponent("clubs2"),
    h4: makeNodeComponent("h4"),
    h5: makeNodeComponent("h5"),
    soccerPlaceMens: makeNodeComponent("soccerPlaceMens"),
    h6: makeNodeComponent("h6"),
    cmsDataFetcher: makeNodeComponent("cmsDataFetcher"),

    // Metadata about props expected for PlasmicIdealXl
    internalVariantProps: PlasmicIdealXl__VariantProps,
    internalArgProps: PlasmicIdealXl__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicIdealXl;
/* prettier-ignore-end */
