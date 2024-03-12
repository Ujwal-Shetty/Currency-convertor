const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };

 const covcurrency =
{"USD":1,"AED":3.67,"AFN":71.49,"ALL":95.34,"AMD":403.56,"ANG":1.79,"AOA":837.67,"ARS":846.25,"AUD":1.51,"AWG":1.79,"AZN":1.7,"BAM":1.79,"BBD":2,"BDT":109.77,"BGN":1.79,"BHD":0.376,"BIF":2858.01,"BMD":1,"BND":1.33,"BOB":6.93,"BRL":4.94,"BSD":1,"BTN":82.74,"BWP":13.66,"BYN":3.25,"BZD":2,"CAD":1.35,"CDF":2735.93,"CHF":0.878,"CLP":985.6,"CNY":7.2,"COP":3935.8,"CRC":512.82,"CUP":24,"CVE":100.91,"CZK":23.23,"DJF":177.72,"DKK":6.82,"DOP":58.8,"DZD":134.55,"EGP":49.39,"ERN":15,"ETB":56.87,"EUR":0.915,"FJD":2.24,"FKP":0.782,"FOK":6.82,"GBP":0.782,"GEL":2.66,"GGP":0.782,"GHS":12.88,"GIP":0.782,"GMD":66.22,"GNF":8578.59,"GTQ":7.81,"GYD":209.45,"HKD":7.82,"HNL":24.7,"HRK":6.9,"HTG":132.99,"HUF":361.64,"IDR":15644.18,"ILS":3.58,"IMP":0.782,"INR":82.74,"IQD":1312.13,"IRR":42067.43,"ISK":136.35,"JEP":0.782,"JMD":155.58,"JOD":0.709,"JPY":147.91,"KES":142.55,"KGS":89.52,"KHR":4053.66,"KID":1.51,"KMF":450.25,"KRW":1325.74,"KWD":0.307,"KYD":0.833,"KZT":447.52,"LAK":20702.93,"LBP":89500,"LKR":307.32,"LRD":193.71,"LSL":18.71,"LYD":4.83,"MAD":10.01,"MDL":17.74,"MGA":4503.52,"MKD":56.71,"MMK":2101.2,"MNT":3394.69,"MOP":8.06,"MRU":39.88,"MUR":45.75,"MVR":15.44,"MWK":1692.34,"MXN":16.88,"MYR":4.71,"MZN":63.9,"NAD":18.71,"NGN":1579.21,"NIO":36.8,"NOK":10.43,"NPR":132.39,"NZD":1.62,"OMR":0.384,"PAB":1,"PEN":3.74,"PGK":3.79,"PHP":55.78,"PKR":279.53,"PLN":3.94,"PYG":7299.67,"QAR":3.64,"RON":4.56,"RSD":107.61,"RUB":90.69,"RWF":1293.28,"SAR":3.75,"SBD":8.48,"SCR":13.62,"SDG":512.37,"SEK":10.25,"SGD":1.33,"SHP":0.782,"SLE":22.66,"SLL":22664.28,"SOS":572.02,"SRD":35.43,"SSP":1597.09,"STN":22.42,"SYP":12930.47,"SZL":18.71,"THB":35.54,"TJS":10.94,"TMT":3.5,"TND":3.11,"TOP":2.34,"TRY":31.9,"TTD":6.77,"TVD":1.51,"TWD":31.45,"TZS":2511.17,"UAH":38.09,"UGX":3894.53,"UYU":39.05,"UZS":12565.07,"VES":36.13,"VND":24683.59,"VUV":120.09,"WST":2.74,"XAF":600.33,"XCD":2.7,"XDR":0.751,"XOF":600.33,"XPF":109.21,"YER":250.35,"ZAR":18.71,"ZMW":24.03,"ZWL":16552.09}

 

export {countryList,covcurrency};