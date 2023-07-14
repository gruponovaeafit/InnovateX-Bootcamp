export interface Country {
    name:         Name;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cca3:         string;
    independent?: boolean;
    status:       Status;
    unMember:     boolean;
    currencies?:  Currencies;
    idd:          Idd;
    capital?:     string[];
    altSpellings: string[];
    region:       Region;
    subregion?:   string;
    languages?:   { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    area:         number;
    demonyms:     Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    car:          Car;
    timezones:    string[];
    continents:   Continent[];
    flags:        Flags;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    cioc?:        string;
    borders?:     string[];
    gini?:        { [key: string]: number };
    fifa?:        string;
    postalCode?:  PostalCode;
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs: string[];
    side:  Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currencies {
    USD?: Afn;
    RSD?: Afn;
    EUR?: Afn;
    COP?: Afn;
    XOF?: Afn;
    AUD?: Afn;
    NAD?: Afn;
    ZAR?: Afn;
    XAF?: Afn;
    BOB?: Afn;
    AMD?: Afn;
    ARS?: Afn;
    MUR?: Afn;
    MVR?: Afn;
    CRC?: Afn;
    GHS?: Afn;
    MKD?: Afn;
    GBP?: Afn;
    SHP?: Afn;
    CUC?: Afn;
    CUP?: Afn;
    ETB?: Afn;
    IQD?: Afn;
    GTQ?: Afn;
    BSD?: Afn;
    TTD?: Afn;
    PEN?: Afn;
    SRD?: Afn;
    STN?: Afn;
    XPF?: Afn;
    NIO?: Afn;
    ZWL?: Afn;
    TND?: Afn;
    CDF?: Afn;
    SLL?: Afn;
    AFN?: Afn;
    PAB?: Afn;
    SYP?: Afn;
    VUV?: Afn;
    HNL?: Afn;
    KID?: Afn;
    CLP?: Afn;
    DJF?: Afn;
    XCD?: Afn;
    MXN?: Afn;
    CNY?: Afn;
    SSP?: Afn;
    LKR?: Afn;
    UZS?: Afn;
    IDR?: Afn;
    PYG?: Afn;
    PLN?: Afn;
    CAD?: Afn;
    BRL?: Afn;
    MDL?: Afn;
    MRU?: Afn;
    CHF?: Afn;
    MWK?: Afn;
    LBP?: Afn;
    THB?: Afn;
    ANG?: Afn;
    NGN?: Afn;
    CVE?: Afn;
    JEP?: Afn;
    BND?: Afn;
    SGD?: Afn;
    DZD?: Afn;
    AOA?: Afn;
    BYN?: Afn;
    TRY?: Afn;
    LAK?: Afn;
    AZN?: Afn;
    VES?: Afn;
    MAD?: Afn;
    CZK?: Afn;
    BGN?: Afn;
    BIF?: Afn;
    INR?: Afn;
    JMD?: Afn;
    UGX?: Afn;
    KYD?: Afn;
    MZN?: Afn;
    PKR?: Afn;
    NZD?: Afn;
    VND?: Afn;
    KZT?: Afn;
    EGP?: Afn;
    LRD?: Afn;
    FJD?: Afn;
    HTG?: Afn;
    ISK?: Afn;
    MMK?: Afn;
    BDT?: Afn;
    PHP?: Afn;
    HKD?: Afn;
    KGS?: Afn;
    NPR?: Afn;
    MGA?: Afn;
    GMD?: Afn;
    YER?: Afn;
    KRW?: Afn;
    IRR?: Afn;
    TZS?: Afn;
    SOS?: Afn;
    KES?: Afn;
    DOP?: Afn;
    MOP?: Afn;
    GGP?: Afn;
    ALL?: Afn;
    ZMW?: Afn;
    CKD?: Afn;
    GNF?: Afn;
    RWF?: Afn;
    KMF?: Afn;
    TWD?: Afn;
    GYD?: Afn;
    SCR?: Afn;
    KPW?: Afn;
    SDG?: Sdg;
    TJS?: Afn;
    UYU?: Afn;
    BWP?: Afn;
    KHR?: Afn;
}

export interface Afn {
    name:   string;
    symbol: string;
}

export interface Sdg {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png:  string;
    svg:  string;
    alt?: string;
}

export interface Idd {
    root?:     string;
    suffixes?: string[];
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:      string;
    official:    string;
    nativeName?: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Saturday = "saturday",
    Sunday = "sunday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}
