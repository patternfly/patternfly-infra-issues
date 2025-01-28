// # RouteInfo type
export interface NavGroup {
  label: string;
  paths: Array<string>;
}

export interface RouteInfo {
  path: string;
  label: string;
  type: 'component' | 'doc';
 }

 // # NavItem type
 export interface NavItem {
  path: string;
  label: string;
  children?: NavItem[];
 }


