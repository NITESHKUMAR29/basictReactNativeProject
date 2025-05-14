export interface EventTranslation {
    eventTransID: string;
    eventID: string;
    language: string;
    name: string;
    description: string;
    images: string[];
    mainBenefit: string;
    isKey: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
  }
  
  export interface EventConfig {
    eventConfigID: string;
    templeID: string;
    categoryID: string;
    subCategoryID: string;
    pujaTypeID: string | null;
    pujaProcessID: string;
    pujaChannelID: string;
    darshanTypeID: string;
    timelineID: string;
    godID: string;
    sellerID: string;
    salutationID: string;
    mantraID: string;
    isKey: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    Temple: Temple;
    Timeline: Timeline | null;
  }
  
  export interface Temple {
    templeID: string;
    name: string;
    tirthType: string;
    address: string;
    city: string;
    state: string;
    pin: string;
    latitude: string | null;
    longitude: string | null;
    Temple_Trans: any[];
  }
  
  export interface Timeline {
    timelineID: string;
    name: string;
    description: string;
    images: string[];
    date: string;
    isVerified: boolean;
    Timeline_Trans: TimelineTranslation[];
  }
  
  export interface TimelineTranslation {
    timelineTransID: string;
    timelineID: string;
    language: string;
    name: string;
    description: string;
    images: string[];
    isKey: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
  }
  
  export interface UrlParam {
    urlParam: string;
    Event_UrlParam: EventUrlParam;
  }
  
  export interface EventUrlParam {
    isPrimary: boolean;
    isKey: boolean;
  }
  
  export interface Event {
    eventID: string;
    isClosed: boolean;
    participantCount: string;
    urlExtension: string;
    templeName: string | null;
    eventType: string;
    name: string;
    name_WE: string;
    keywords: string;
    images: string[];
    mainBenefit: string;
    date: string | null;
    Event_Trans: EventTranslation[];
    Event_Config: EventConfig;
    UrlParams: UrlParam[];
  }
  
  export interface ApiResponse {
    message: string;
    response: Event[];
  }
  