/**
 * Created by dattaram on 1/2/19.
 */

export class ComponentDataStructure {
  title = 'Title';
  description = 'Description';
  sourceMetadata = new SourceMetadata();
  liveMetadata = new LiveMetadata();
  apiRefMetadata: ApiMetadata[] = [];
  apiaccessibledata: Accessible[] = [];
  componentDescription = '';
  compFeaturesTitle = '';
  keyFeatures = '';
  isAccessibility = true;
}

export class SourceMetadata {
  // 
  htmlUrl: string;
  tsUrl: string;
  componentHtmlUrl: string;
  componentTsUrl: string;
  dynamicUrl: string;
  moduleUrl: string;
  datasourceUrl: string;
  datasourceUrl1: string;
  datasourceUrl2: string;

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
export class Accessible {
  gridTitle: string;
  disabled: boolean;
  columnDefinition: any[];
  gridData: any[];
}
