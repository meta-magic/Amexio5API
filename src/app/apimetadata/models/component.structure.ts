/**
 * Created by dattaram on 1/2/19.
 */

export interface ComDataInterface {
  title: string;
  description: string;
  sourceMetadata: SourceMetadataInterface;
  liveMetadata: any;
  apiRefMetadata: ApiMetadataInterface[];
}

export interface  SourceMetadataInterface {
  htmlUrl: string;
  tsUrl: string;
  datasourceUrl: string;
}


export interface  ApiMetadataInterface {
  gridTitle: string;
  columnDefinition: any[];
  gridData: any[];
}
