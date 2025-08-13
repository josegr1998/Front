export const DEFAULT_REVALIDATE_TIME = 60;

export const CACHE_OPTION = {
  NO_STORE: "no-store",
  FORCE_CACHE: "force-cache",
  ONLY_IF_CACHED: "only-if-cached",
  RELOAD: "reload",
  DEFAULT: "default",
} as const satisfies Record<string, RequestCache>;
