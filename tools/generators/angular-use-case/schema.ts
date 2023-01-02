export interface Schema {
  name: string;
  directory?: string;
  componentName?: string;
  tags?: string;
  displayBlock?: boolean;
  standalone?: boolean;
  prefix?: string;
  changeDetection?: 'Default' | 'OnPush';
  export?: boolean;
  style?: 'css' | 'scss' | 'sass' | 'less' | 'none';
}
