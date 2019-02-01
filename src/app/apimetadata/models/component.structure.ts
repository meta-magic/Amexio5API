/**
 * Created by dattaram on 1/2/19.
 */

export class ComponentDataStructure {
  title: string;
  description: string;
  sourceMetadata = new SourceMetadata();
  liveMetadata = new LiveMetadata();
  apiRefMetadata: ApiMetadata[] = [];
}

export class  SourceMetadata {
  htmlUrl: string;
  tsUrl: string;
  datasourceUrl: string;
}


export class ApiMetadata {
  gridTitle: string;
  columnDefinition: any[];
  gridData: any[];
}

export class LiveMetadata {
  disabled: boolean;
  stackblitzUrl: string;
}
