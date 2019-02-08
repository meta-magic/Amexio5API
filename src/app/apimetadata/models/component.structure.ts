/**
 * Created by dattaram on 1/2/19.
 */

export class ComponentDataStructure {
  title = 'Title';
  description = 'Description';
  sourceMetadata = new SourceMetadata();
  liveMetadata = new LiveMetadata();
  apiRefMetadata: ApiMetadata[] = [];
}

export class  SourceMetadata {
  htmlUrl: string;
  tsUrl: string;
  dynamicUrl: string;
  moduleUrl: string;
  datasourceUrl: string;
  datasourceUrl1: string;
}


export class ApiMetadata {
  gridTitle: string;
  columnDefinition: any[];
  gridData: any[];
}

export class LiveMetadata {
  disabled: boolean;
  stackblitzUrl: string;
  stackblitzUrl1: string;
  stackblitzUrl2: string;

}
