export interface PreprocessorParams {
  content: string;
  filename?: string;
}

export interface PreprocessorResult {
  code: string;
  map?: string | object;
}

export interface Preprocessor {
  markup?: (params: PreprocessorParams) => Promise<PreprocessorResult | null> | PreprocessorResult | null;
  script?: (params: PreprocessorParams) => Promise<PreprocessorResult | null> | PreprocessorResult | null;
  style?: (params: PreprocessorParams) => Promise<PreprocessorResult | null> | PreprocessorResult | null;
}

export type PreprocessorGroup = {
  markup?: {
    order?: number;
    transform: (options: {
      content: string;
      filename?: string;
    }) => Promise<TransformResult | null> | TransformResult | null;
  };
  script?: {
    order?: number;
    transform: (options: {
      content: string;
      attributes: Record<string, string>;
      filename?: string;
    }) => Promise<TransformResult | null> | TransformResult | null;
  };
  style?: {
    order?: number;
    transform: (options: {
      content: string;
      attributes: Record<string, string>;
      filename?: string;
    }) => Promise<TransformResult | null> | TransformResult | null;
  };
};

export interface TransformResult {
  code: string;
  map?: string | object | null;
  dependencies?: string[];
  diagnostics?: Diagnostic[];
}

export interface Diagnostic {
  start?: { line: number; column: number };
  end?: { line: number; column: number };
  message: string;
  hint?: string;
}

// Handlebars specific types
export interface HandlebarsContext {
  [key: string]: any;
}

export interface TemplateMap {
  [key: string]: {
    template: string;
    path: string;
    type: 'component' | 'demo' | 'layout' | 'utility';
  }
}