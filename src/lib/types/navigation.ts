export interface RouteInfo {
  path: string;
  label: string;
  children?: RouteInfo[];
}