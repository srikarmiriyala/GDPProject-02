export const onewayDemoData = [
  {
    flightCombination: [
      {
        propFlightGrDetail: {
          flightProposal: [
            {
              ref: '1',
            },
            {
              ref: '0535',
              unitQualifier: 'EFT',
            },
            {
              ref: 'BG',
              unitQualifier: 'MCX',
            },
          ],
        },
        flightDetails: [
          {
            flightInformation: {
              productDateTime: {
                dateOfDeparture: '301024',
                timeOfDeparture: '20:55',
                dateOfArrival: '311024',
                timeOfArrival: '00:30',
                dateVariation: '1',
                dateOfDepartureString: 'Wed, 30 Oct 2024',
                dateOfArrivalString: 'Thu, 31 Oct 2024',
                journeyTime: 335,
                segmentTime: '5 hours 35 minutes',
                stopOverTime: '',
                layOverTime: 0,
                isStopOverAirportChange: false,
              },
              location: [
                {
                  locationId: 'DAC',
                  terminal: '2',
                  city: 'Dhaka',
                  cityCode: 'DAC',
                  countryName: 'Bangladesh',
                  airportName: 'Hazrat Shahjalal International Airport',
                },
                {
                  locationId: 'DXB',
                  terminal: '1',
                  city: 'Dubai',
                  cityCode: 'DXB',
                  countryName: 'United Arab Emirates',
                  airportName: 'Dubai',
                },
              ],
              companyId: {
                marketingCarrier: 'Biman Bangladesh Airlines',
                operatingCarrier: 'Biman Bangladesh Airlines',
                originalMarketingCarrier: 'BG',
                marketingCarrierCode: 'BG',
                operatingCarrierCode: 'BG',
              },
              flightOrtrainNumber: '347',
              productDetail: {
                equipmentType: 'Boeing 787-8',
              },
              addProductDetail: {
                electronicTicketing: 'Y',
                productDetailQualifier: 'AIP',
                cabinClass: 'K',
                availableSeats: '9',
              },
            },
            technicalStop: [],
          },
        ],
      },
    ],
    fareSummary: {
      breakdown: {
        ADT: {
          fareAmount: 34368,
          taxAmount: 9942,
          baseFareAmount: 24426,
          totalBaseFareAmount: 48852,
          totalFareAmount: 68736,
          totalTaxAmount: 19884,
          paxCount: 2,
        },
        CH: {
          fareAmount: 26155,
          taxAmount: 7836,
          baseFareAmount: 18319,
          totalBaseFareAmount: 18319,
          totalFareAmount: 26155,
          totalTaxAmount: 7836,
          paxCount: 1,
        },
        INF: {
          fareAmount: 8982,
          taxAmount: 2876,
          baseFareAmount: 6106,
          totalBaseFareAmount: 6106,
          totalFareAmount: 8982,
          totalTaxAmount: 2876,
          paxCount: 1,
        },
      },
      refundable: true,
      refundPenalty: 0,
      totalFareAmount: 103873,
      totalTaxAmount: 30596,
      totalBaseFareAmount: 73277,
      fareDetails: {
        ADT: [
          {
            cabinClass: 'K',
            availableSeats: '9',
            fareBasis: 'KBDO',
            paxRefs: ['1', '2'],
          },
        ],
        CH: [
          {
            cabinClass: 'K',
            availableSeats: '9',
            fareBasis: 'KBDO',
            paxRefs: ['3'],
          },
        ],
        INF: [
          {
            cabinClass: 'K',
            availableSeats: '9',
            fareBasis: 'KBDO',
            paxRefs: ['1I'],
          },
        ],
      },
      marketingCarrier: 'BG',
    },
    baggage: [
      {
        ADT: {
          freeAllowance: '30',
          quantityCode: 'W',
          unitQualifier: 'Kg(s)',
          cabinBaggage: '7 Kg(s)',
        },
        CH: {
          freeAllowance: '30',
          quantityCode: 'W',
          unitQualifier: 'Kg(s)',
          cabinBaggage: '7 Kg(s)',
        },
        INF: {
          freeAllowance: 0,
          quantityCode: 'W',
          unitQualifier: 'Kg(s)',
          cabinBaggage: '7 Kg(s)',
        },
      },
    ],
    recommendationId: '1',
    fareBasisDetails: [
      {
        ADT: 'KBDO',
        CH: 'KBDO',
        INF: 'KBDO',
      },
    ],
    fareBasisRefs: {
      KBDO: {
        ST: [1],
        PT: ['1', '2', '3', '1I'],
      },
    },
    has_domestic: true,
    transitAirport: [[]],
    code_share: false,
    segmentWiseLayOverMinutes: [0],
    fareType: 'REGULAR',
    cabinClass: ['K'],
    totalLayoverMinutes: 0,
    hasSSR: 0,
    updatedFareRequired: false,
    airlineRemarks: [],
    validatingCarrier: 'BG',
    finalFare: 103873,
    flightSummary: [
      {
        fromCode: 'DAC',
        fromCity: 'Dhaka',
        fromCityCode: 'DAC',
        toCode: 'DXB',
        toCity: 'Dubai',
        toCityCode: 'DXB',
        segmentTime: '5 hours 35 minutes',
      },
    ],
    baseIndex: 0,
    journeyTimeFrame: ['afterDusk'],
    totalLayoverTime: ['noLayoverTime'],
    cabinType: 'economy',
    flightNumbers: ['BG-347'],
    totalJourneyTime: 335,
    stops: ['0'],
    marketingCarrier: {
      name: 'Biman Bangladesh Airlines',
      code: 'BG',
    },
  },
  {
    flightCombination: [
      {
        flightDetails: [
          {
            flightInformation: {
              productDateTime: {
                dateOfDeparture: '301024',
                timeOfDeparture: '09:40',
                dateOfArrival: '301024',
                timeOfArrival: '13:05',
                dateOfDepartureString: 'Wed, 30 Oct 2024',
                dateOfArrivalString: 'Wed, 30 Oct 2024',
                journeyTime: 385,
                segmentTime: '6 hours 25 minutes',
                stopOverTime: '13 hours 5 minutes',
                layOverTime: 785,
                isStopOverAirportChange: false,
              },
              location: [
                {
                  locationId: 'DAC',
                  terminal: '',
                  city: 'Dhaka',
                  cityCode: 'DAC',
                  countryName: 'Bangladesh',
                  airportName: 'Hazrat Shahjalal International Airport',
                },
                {
                  ARR_ARP: 'BAH',
                  locationId: 'BAH',
                  terminal: '',
                  city: 'Bahrain',
                  cityCode: 'BAH',
                  countryName: 'Bahrain',
                  airportName: "Bahrain Int'l",
                },
              ],
              companyId: {
                operatingCarrier: 'Gulf Air',
                marketingCarrier: 'Gulf Air',
                marketingCarrierCode: 'GF',
                operatingCarrierCode: 'GF',
              },
              flightOrtrainNumber: '251',
              productDetail: {
                equipmentType: 'Boeing 787-9',
              },
              addProductDetail: {
                electronicTicketing: 'Yes',
                cabinClass: 'I',
                availableSeats: '6',
                fareClass: 'I',
                fareBasis: 'IDSMR1BD',
                techstop: '',
              },
            },
            technicalStop: [],
          },
          {
            flightInformation: {
              productDateTime: {
                dateOfDeparture: '311024',
                timeOfDeparture: '02:10',
                dateOfArrival: '311024',
                timeOfArrival: '06:35',
                dateOfDepartureString: 'Thu, 31 Oct 2024',
                dateOfArrivalString: 'Thu, 31 Oct 2024',
                journeyTime: 445,
                segmentTime: '7 hours 25 minutes',
                stopOverTime: '',
                layOverTime: 0,
                isStopOverAirportChange: false,
              },
              location: [
                {
                  locationId: 'BAH',
                  terminal: '',
                  city: 'Bahrain',
                  cityCode: 'BAH',
                  countryName: 'Bahrain',
                  airportName: "Bahrain Int'l",
                },
                {
                  ARR_ARP: 'LHR',
                  locationId: 'LHR',
                  terminal: '4',
                  city: 'London',
                  cityCode: 'LON',
                  countryName: 'United Kingdom',
                  airportName: 'Heathrow',
                },
              ],
              companyId: {
                operatingCarrier: 'Gulf Air',
                marketingCarrier: 'Gulf Air',
                marketingCarrierCode: 'GF',
                operatingCarrierCode: 'GF',
              },
              flightOrtrainNumber: '7',
              productDetail: {
                equipmentType: 'Boeing 787-9',
              },
              addProductDetail: {
                electronicTicketing: 'Yes',
                cabinClass: 'I',
                availableSeats: '6',
                fareClass: 'I',
                fareBasis: 'IDSMR1BD',
                techstop: '',
              },
            },
            technicalStop: [],
          },
        ],
      },
    ],
    fareSummary: {
      breakdown: {
        ADT: {
          totalFareAmount: 356332,
          totalBaseFareAmount: 323809,
          totalTaxAmount: 32523,
          totalFees: 0,
          fareAmount: 178166,
          baseFareAmount: 161904.5,
          taxAmount: 16261.5,
          Fees: 0,
          paxCount: 2,
          lastTicketDate: '30Oct24',
          refundable: true,
          ChangePenalty: 6598,
          ChangePenaltyUnit: 'Amount',
          CancelPenalty: 8998,
          CancelPenaltyUnit: 'Amount',
        },
        CH: {
          totalFareAmount: 143439,
          totalBaseFareAmount: 130662,
          totalTaxAmount: 12777,
          totalFees: 0,
          fareAmount: 143439,
          baseFareAmount: 130662,
          taxAmount: 12777,
          Fees: 0,
          paxCount: 1,
          lastTicketDate: '30Oct24',
          refundable: true,
          ChangePenalty: 6598,
          ChangePenaltyUnit: 'Amount',
          CancelPenalty: 8998,
          CancelPenaltyUnit: 'Amount',
        },
        INF: {
          totalFareAmount: 18805,
          totalBaseFareAmount: 15622,
          totalTaxAmount: 3183,
          totalFees: 0,
          fareAmount: 18805,
          baseFareAmount: 15622,
          taxAmount: 3183,
          Fees: 0,
          paxCount: 1,
          lastTicketDate: '30Oct24',
          refundable: true,
          ChangePenalty: 6598,
          ChangePenaltyUnit: 'Amount',
          CancelPenalty: 8998,
          CancelPenaltyUnit: 'Amount',
        },
      },
      refundable: true,
      refundPenalty: 0,
      lastTicketDate: '30Oct24',
      totalFareAmount: 518576,
      totalTaxAmount: 48483,
      totalBaseFareAmount: 470093,
      Fees: 0,
      Services: 0,
    },
    baggage: [
      {
        ADT: {
          city: 'DAC - LHR',
          freeAllowance: 2,
          quantityCode: '',
          unitQualifier: 'PC(s)',
          cabinBaggage: '7 Kg(s)',
        },
        CH: {
          city: 'DAC - LHR',
          freeAllowance: 2,
          quantityCode: '',
          unitQualifier: 'PC(s)',
          cabinBaggage: '7 Kg(s)',
        },
        INF: {
          city: 'DAC - LHR',
          freeAllowance: 1,
          quantityCode: '',
          unitQualifier: 'PC(s)',
          cabinBaggage: '7 Kg(s)',
        },
      },
    ],
    index: 1,
    has_domestic: true,
    transitAirport: [
      [
        {
          ARR_ARP: 'BAH',
          locationId: 'BAH',
          terminal: '',
          city: 'Bahrain',
          cityCode: 'BAH',
          countryName: 'Bahrain',
          airportName: "Bahrain Int'l",
        },
      ],
    ],
    code_share: false,
    segmentWiseLayOverMinutes: [785],
    fareType: 'REGULAR',
    cabinClass: ['I', 'I'],
    totalLayoverMinutes: 785,
    hasSSR: 0,
    updatedFareRequired: false,
    airlineRemarks: [],
    validatingCarrier: 'GF',
    finalFare: 518576,
    flightSummary: [
      {
        fromCode: 'DAC',
        fromCity: 'Dhaka',
        fromCityCode: 'DAC',
        toCode: 'LHR',
        toCity: 'London',
        toCityCode: 'LON',
        segmentTime: '1 day 2 hours 55 minutes',
      },
    ],
    baseIndex: 2,
    journeyTimeFrame: ['afterDawn'],
    totalLayoverTime: ['lessThanFifteenHours'],
    cabinType: 'business',
    flightNumbers: ['GF-251', 'GF-7'],
    totalJourneyTime: 830,
    stops: ['1'],
    marketingCarrier: {
      name: 'Gulf Air',
      code: 'GF',
    },
  },
  {
    flightCombination: [
      {
        propFlightGrDetail: {
          flightProposal: [
            {
              ref: '12',
            },
            {
              ref: '3735',
              unitQualifier: 'EFT',
            },
            {
              ref: 'UK',
              unitQualifier: 'MCX',
            },
          ],
        },
        flightDetails: [
          {
            flightInformation: {
              productDateTime: {
                dateOfDeparture: '301024',
                timeOfDeparture: '11:45',
                dateOfArrival: '301024',
                timeOfArrival: '14:35',
                dateOfDepartureString: 'Wed, 30 Oct 2024',
                dateOfArrivalString: 'Wed, 30 Oct 2024',
                journeyTime: 200,
                segmentTime: '3 hours 20 minutes',
                stopOverTime: '6 hours 5 minutes',
                layOverTime: 365,
                isStopOverAirportChange: false,
              },
              location: [
                {
                  locationId: 'DAC',
                  terminal: '1',
                  city: 'Dhaka',
                  cityCode: 'DAC',
                  countryName: 'Bangladesh',
                  airportName: 'Hazrat Shahjalal International Airport',
                },
                {
                  locationId: 'BOM',
                  terminal: '2',
                  city: 'Mumbai',
                  cityCode: 'BOM',
                  countryName: 'India',
                  airportName: 'Mumbai',
                },
              ],
              companyId: {
                marketingCarrier: 'Vistara',
                operatingCarrier: 'Vistara',
                originalMarketingCarrier: 'UK',
                marketingCarrierCode: 'UK',
                operatingCarrierCode: 'UK',
              },
              flightOrtrainNumber: '184',
              productDetail: {
                equipmentType: 'Airbus A320',
              },
              addProductDetail: {
                electronicTicketing: 'Y',
                productDetailQualifier: 'LCA',
                cabinClass: 'Z',
                availableSeats: '7',
              },
            },
            technicalStop: [],
          },
          {
            flightInformation: {
              productDateTime: {
                dateOfDeparture: '301024',
                timeOfDeparture: '20:40',
                dateOfArrival: '301024',
                timeOfArrival: '23:00',
                dateOfDepartureString: 'Wed, 30 Oct 2024',
                dateOfArrivalString: 'Wed, 30 Oct 2024',
                journeyTime: 140,
                segmentTime: '2 hours 20 minutes',
                stopOverTime: '16 hours 5 minutes',
                layOverTime: 965,
                isStopOverAirportChange: false,
              },
              location: [
                {
                  locationId: 'BOM',
                  terminal: '2',
                  city: 'Mumbai',
                  cityCode: 'BOM',
                  countryName: 'India',
                  airportName: 'Mumbai',
                },
                {
                  locationId: 'DEL',
                  terminal: '3',
                  city: 'Delhi',
                  cityCode: 'DEL',
                  countryName: 'India',
                  airportName: 'Indira Gandhi Airport',
                },
              ],
              companyId: {
                marketingCarrier: 'Vistara',
                operatingCarrier: 'Vistara',
                originalMarketingCarrier: 'UK',
                marketingCarrierCode: 'UK',
                operatingCarrierCode: 'UK',
              },
              flightOrtrainNumber: '988',
              productDetail: {
                equipmentType: 'Airbus A320',
              },
              addProductDetail: {
                electronicTicketing: 'Y',
                productDetailQualifier: 'LCA',
                cabinClass: 'Z',
                availableSeats: '7',
              },
            },
            technicalStop: [],
          },
          {
            flightInformation: {
              productDateTime: {
                dateOfDeparture: '311024',
                timeOfDeparture: '15:05',
                dateOfArrival: '311024',
                timeOfArrival: '19:20',
                dateOfDepartureString: 'Thu, 31 Oct 2024',
                dateOfArrivalString: 'Thu, 31 Oct 2024',
                journeyTime: 585,
                segmentTime: '9 hours 45 minutes',
                stopOverTime: '',
                layOverTime: 0,
                isStopOverAirportChange: false,
              },
              location: [
                {
                  locationId: 'DEL',
                  terminal: '3',
                  city: 'Delhi',
                  cityCode: 'DEL',
                  countryName: 'India',
                  airportName: 'Indira Gandhi Airport',
                },
                {
                  locationId: 'LHR',
                  terminal: '3',
                  city: 'London',
                  cityCode: 'LON',
                  countryName: 'United Kingdom',
                  airportName: 'Heathrow',
                },
              ],
              companyId: {
                marketingCarrier: 'Vistara',
                operatingCarrier: 'Vistara',
                originalMarketingCarrier: 'UK',
                marketingCarrierCode: 'UK',
                operatingCarrierCode: 'UK',
              },
              flightOrtrainNumber: '17',
              productDetail: {
                equipmentType: 'Boeing 787-9',
              },
              addProductDetail: {
                electronicTicketing: 'Y',
                productDetailQualifier: 'LCA',
                cabinClass: 'Z',
                availableSeats: '7',
              },
            },
            technicalStop: [],
          },
        ],
      },
    ],
    fareSummary: {
      breakdown: {
        ADT: {
          fareAmount: 202735,
          taxAmount: 15389.5,
          baseFareAmount: 187345.5,
          totalBaseFareAmount: 374691,
          totalFareAmount: 405470,
          totalTaxAmount: 30779,
          paxCount: 2,
        },
        CH: {
          fareAmount: 160693,
          taxAmount: 11843,
          baseFareAmount: 148850,
          totalBaseFareAmount: 148850,
          totalFareAmount: 160693,
          totalTaxAmount: 11843,
          paxCount: 1,
        },
        INF: {
          fareAmount: 22212,
          taxAmount: 3466,
          baseFareAmount: 18746,
          totalBaseFareAmount: 18746,
          totalFareAmount: 22212,
          totalTaxAmount: 3466,
          paxCount: 1,
        },
      },
      refundable: true,
      refundPenalty: {
        amountType: 'MT',
        amount: '22842',
        currency: 'BDT',
      },
      totalFareAmount: 588375,
      totalTaxAmount: 46088,
      totalBaseFareAmount: 542287,
      fareDetails: {
        ADT: [
          {
            cabinClass: 'Z',
            availableSeats: '7',
            fareBasis: 'ZOPTMCCV',
            paxRefs: ['1', '2'],
          },
          {
            cabinClass: 'Z',
            availableSeats: '7',
            fareBasis: 'ZOSPINCV',
            paxRefs: ['1', '2'],
          },
          {
            cabinClass: 'Z',
            availableSeats: '7',
            fareBasis: 'ZOSPINCV',
            paxRefs: ['1', '2'],
          },
        ],
        CH: [
          {
            cabinClass: 'Z',
            availableSeats: '7',
            fareBasis: 'ZOPTMCCV',
            paxRefs: ['3'],
          },
          {
            cabinClass: 'Z',
            availableSeats: '7',
            fareBasis: 'ZOSPINCV',
            paxRefs: ['3'],
          },
          {
            cabinClass: 'Z',
            availableSeats: '7',
            fareBasis: 'ZOSPINCV',
            paxRefs: ['3'],
          },
        ],
        INF: [
          {
            cabinClass: 'Z',
            availableSeats: '7',
            fareBasis: 'ZOPTMCCV',
            paxRefs: ['1I'],
          },
          {
            cabinClass: 'Z',
            availableSeats: '7',
            fareBasis: 'ZOSPINCV',
            paxRefs: ['1I'],
          },
          {
            cabinClass: 'Z',
            availableSeats: '7',
            fareBasis: 'ZOSPINCV',
            paxRefs: ['1I'],
          },
        ],
      },
      marketingCarrier: 'UK',
    },
    baggage: [
      {
        ADT: {
          freeAllowance: '2',
          quantityCode: 'N',
          unitQualifier: 'PC(s)',
          cabinBaggage: '7 Kg(s)',
        },
        CH: {
          freeAllowance: '2',
          quantityCode: 'N',
          unitQualifier: 'PC(s)',
          cabinBaggage: '7 Kg(s)',
        },
        INF: {
          freeAllowance: 0,
          quantityCode: 'W',
          unitQualifier: 'Kg(s)',
          cabinBaggage: '7 Kg(s)',
        },
      },
    ],
    recommendationId: '6',
    fareBasisDetails: [
      {
        ADT: 'ZOPTMCCV',
        CH: 'ZOPTMCCV',
        INF: 'ZOPTMCCV',
      },
      {
        ADT: 'ZOSPINCV',
        CH: 'ZOSPINCV',
        INF: 'ZOSPINCV',
      },
      {
        ADT: 'ZOSPINCV',
        CH: 'ZOSPINCV',
        INF: 'ZOSPINCV',
      },
    ],
    fareBasisRefs: {
      ZOPTMCCV: {
        ST: [1],
        PT: ['1', '2', '3', '1I'],
      },
      ZOSPINCV: {
        ST: [2, 3],
        PT: ['1', '2', '3', '1I'],
      },
    },
    has_domestic: true,
    transitAirport: [
      [
        {
          locationId: 'BOM',
          terminal: '2',
          city: 'Mumbai',
          cityCode: 'BOM',
          countryName: 'India',
          airportName: 'Mumbai',
        },
        {
          locationId: 'DEL',
          terminal: '3',
          city: 'Delhi',
          cityCode: 'DEL',
          countryName: 'India',
          airportName: 'Indira Gandhi Airport',
        },
      ],
    ],
    code_share: false,
    segmentWiseLayOverMinutes: [1330],
    fareType: 'REGULAR',
    cabinClass: ['Z', 'Z', 'Z'],
    totalLayoverMinutes: 1330,
    hasSSR: 0,
    updatedFareRequired: false,
    airlineRemarks: [
      'Indian visa is required for Bangladeshi passport holders for multiple transit and/or technical stopover.',
    ],
    validatingCarrier: 'UK',
    finalFare: 588375,
    flightSummary: [
      {
        fromCode: 'DAC',
        fromCity: 'Dhaka',
        fromCityCode: 'DAC',
        toCode: 'LHR',
        toCity: 'London',
        toCityCode: 'LON',
        segmentTime: '1 day 13 hours 35 minutes',
      },
    ],
    baseIndex: 14,
    journeyTimeFrame: ['afterDawn'],
    totalLayoverTime: ['moreThanFifteenHours'],
    cabinType: 'business',
    flightNumbers: ['UK-184', 'UK-988', 'UK-17'],
    totalJourneyTime: 925,
    stops: ['1+'],
    marketingCarrier: {
      name: 'Vistara',
      code: 'UK',
    },
  },
  {
    flightCombination: [
      {
        flightDetails: [
          {
            flightInformation: {
              productDateTime: {
                dateOfDeparture: '301024',
                timeOfDeparture: '06:55',
                dateOfArrival: '301024',
                timeOfArrival: '13:25',
                dateOfDepartureString: 'Wed, 30 Oct 2024',
                dateOfArrivalString: 'Wed, 30 Oct 2024',
                journeyTime: 570,
                segmentTime: '9 hours 30 minutes',
                stopOverTime: '1 hour 35 minutes',
                layOverTime: 95,
                isStopOverAirportChange: false,
              },
              location: [
                {
                  locationId: 'DAC',
                  terminal: '',
                  city: 'Dhaka',
                  cityCode: 'DAC',
                  countryName: 'Bangladesh',
                  airportName: 'Hazrat Shahjalal International Airport',
                },
                {
                  locationId: 'IST',
                  terminal: '',
                  city: 'Istanbul',
                  cityCode: 'IST',
                  countryName: 'Turkey',
                  airportName: 'Ataturk',
                },
              ],
              companyId: {
                marketingCarrier: 'Turkish Airlines Inc',
                operatingCarrier: 'Turkish Airlines Inc',
                marketingCarrierCode: 'TK',
                operatingCarrierCode: 'TK',
              },
              flightOrtrainNumber: '713',
              productDetail: {
                equipmentType: 'Airbus A330-300',
              },
              addProductDetail: {
                ref: 'TK-SEG_0',
                cabinClass: 'K',
              },
            },
            technicalStop: [],
          },
          {
            flightInformation: {
              productDateTime: {
                dateOfDeparture: '301024',
                timeOfDeparture: '15:00',
                dateOfArrival: '301024',
                timeOfArrival: '16:10',
                dateOfDepartureString: 'Wed, 30 Oct 2024',
                dateOfArrivalString: 'Wed, 30 Oct 2024',
                journeyTime: 250,
                segmentTime: '4 hours 10 minutes',
                stopOverTime: '',
                layOverTime: 0,
                isStopOverAirportChange: false,
              },
              location: [
                {
                  locationId: 'IST',
                  terminal: '',
                  city: 'Istanbul',
                  cityCode: 'IST',
                  countryName: 'Turkey',
                  airportName: 'Ataturk',
                },
                {
                  locationId: 'LHR',
                  terminal: '',
                  city: 'London',
                  cityCode: 'LON',
                  countryName: 'United Kingdom',
                  airportName: 'Heathrow',
                },
              ],
              companyId: {
                marketingCarrier: 'Turkish Airlines Inc',
                operatingCarrier: 'Turkish Airlines Inc',
                marketingCarrierCode: 'TK',
                operatingCarrierCode: 'TK',
              },
              flightOrtrainNumber: '1971',
              productDetail: {
                equipmentType: 'Airbus Industri',
              },
              addProductDetail: {
                ref: 'TK-SEG_3',
                cabinClass: 'K',
              },
            },
            technicalStop: [],
          },
        ],
      },
    ],
    fareSummary: {
      refundable: false,
      totalFareAmount: 624814,
      totalTaxAmount: 147803,
      totalBaseFareAmount: 477011,
      breakdown: {
        ADT: {
          paxCount: 2,
          fareAmount: 216830,
          baseFareAmount: 167372,
          taxAmount: 49458,
          totalFareAmount: 433660,
          totalBaseFareAmount: 334744,
          totalTaxAmount: 98916,
        },
        CH: {
          paxCount: 1,
          fareAmount: 171402,
          baseFareAmount: 125530,
          taxAmount: 45872,
          totalFareAmount: 171402,
          totalBaseFareAmount: 125530,
          totalTaxAmount: 45872,
        },
        INF: {
          paxCount: 1,
          fareAmount: 19752,
          baseFareAmount: 16737,
          taxAmount: 3015,
          totalFareAmount: 19752,
          totalBaseFareAmount: 16737,
          totalTaxAmount: 3015,
        },
      },
    },
    baggage: [
      {
        ADT: {
          freeAllowance: 50,
          quantityCode: 'N',
          unitQualifier: 'Kg(s)',
          cabinBaggage: '7 Kg(s)',
        },
        CH: {
          freeAllowance: 0,
          quantityCode: 'N',
          unitQualifier: 'Kg(s)',
          cabinBaggage: '7 Kg(s)',
        },
        INF: {
          freeAllowance: 0,
          quantityCode: 'N',
          unitQualifier: 'Kg(s)',
          cabinBaggage: '7 Kg(s)',
        },
      },
    ],
    refs: {
      offer: {
        refs: [],
        OfferID: {
          value: 'P0FC9B66B7F7D4115996DCE635255A3F3-R0B0F1',
          Owner: 'TK',
          Channel: 'NDC',
        },
        OfferItemIDs: {
          OfferItemID: [
            {
              value: 'P0FC9B66B7F7D4115996DCE635255A3F3-R0B0F1-1',
              refs: ['TK-PAX_1', 'TK-PAX_2'],
            },
            {
              value: 'P0FC9B66B7F7D4115996DCE635255A3F3-R0B0F1-2',
              refs: ['TK-PAX_3'],
            },
            {
              value: 'P0FC9B66B7F7D4115996DCE635255A3F3-R0B0F1-3',
              refs: ['TK-PAX_4'],
            },
          ],
        },
      },
      metaData: [],
      travelerRefs: {
        'TK-PAX_1': 'ADT',
        'TK-PAX_2': 'ADT',
        'TK-PAX_3': 'CH',
        'TK-PAX_4': 'INF',
      },
      originDestinations: [
        {
          Flight: [
            {
              SegmentKey: 'TK-SEG_0',
              Departure: {
                AirportCode: {
                  value: 'DAC',
                },
                Date: '2024-10-30T06:55:00.000',
              },
              Arrival: {
                AirportCode: {
                  value: 'IST',
                },
              },
              MarketingCarrier: {
                AirlineID: {
                  value: 'TK',
                },
                FlightNumber: {
                  value: '713',
                },
              },
            },
            {
              SegmentKey: 'TK-SEG_3',
              Departure: {
                AirportCode: {
                  value: 'IST',
                },
                Date: '2024-10-30T15:00:00.000',
              },
              Arrival: {
                AirportCode: {
                  value: 'LHR',
                },
              },
              MarketingCarrier: {
                AirlineID: {
                  value: 'TK',
                },
                FlightNumber: {
                  value: '1971',
                },
              },
            },
          ],
        },
      ],
    },
    fareRules: {
      ADT: {
        fareRules: {
          dateChange: {
            maxPenalty: {
              description: 'Maximum penalty amount',
              value: 0,
              currency: 'BDT',
            },
          },
          refundPolicy: {
            maxPenalty: {
              description: 'Maximum penalty amount',
              value: 0,
              currency: 'BDT',
            },
          },
        },
      },
      CH: {
        fareRules: {
          dateChange: {
            maxPenalty: {
              description: 'Maximum penalty amount',
              value: 0,
              currency: 'BDT',
            },
          },
          refundPolicy: {
            maxPenalty: {
              description: 'Maximum penalty amount',
              value: 0,
              currency: 'BDT',
            },
          },
        },
      },
      INF: {
        fareRules: {
          dateChange: {
            maxPenalty: {
              description: 'Maximum penalty amount',
              value: 0,
              currency: 'BDT',
            },
          },
          refundPolicy: {
            maxPenalty: {
              description: 'Maximum penalty amount',
              value: 0,
              currency: 'BDT',
            },
          },
        },
      },
    },
    fareRulesString: '<h3>ADT</h3><h3>CH</h3><h3>INF</h3>',
    isCorpFare: false,
    has_domestic: true,
    transitAirport: [
      [
        {
          locationId: 'IST',
          terminal: '',
          city: 'Istanbul',
          cityCode: 'IST',
          countryName: 'Turkey',
          airportName: 'Ataturk',
        },
      ],
    ],
    code_share: false,
    segmentWiseLayOverMinutes: [95],
    fareType: 'REGULAR',
    cabinClass: ['K', 'K'],
    totalLayoverMinutes: 95,
    hasSSR: 0,
    updatedFareRequired: false,
    airlineRemarks: [],
    validatingCarrier: 'TK',
    finalFare: 624814,
    flightSummary: [
      {
        fromCode: 'DAC',
        fromCity: 'Dhaka',
        fromCityCode: 'DAC',
        toCode: 'LHR',
        toCity: 'London',
        toCityCode: 'LON',
        segmentTime: '15 hours 15 minutes',
      },
    ],
    baseIndex: 27,
    journeyTimeFrame: ['afterDawn'],
    totalLayoverTime: ['lessThanFiveHours'],
    cabinType: 'business',
    flightNumbers: ['TK-713', 'TK-1971'],
    totalJourneyTime: 820,
    stops: ['1'],
    marketingCarrier: {
      name: 'Turkish Airlines Inc',
      code: 'TK',
    },
  },
  {
    flightCombination: [
      {
        flightDetails: [
          {
            flightInformation: {
              productDateTime: {
                dateOfDeparture: '301024',
                timeOfDeparture: '01:00',
                dateOfArrival: '301024',
                timeOfArrival: '04:25',
                dateOfDepartureString: 'Wed, 30 Oct 2024',
                dateOfArrivalString: 'Wed, 30 Oct 2024',
                journeyTime: 325,
                segmentTime: '5 hours 25 minutes',
                stopOverTime: '11 hours 40 minutes',
                layOverTime: 700,
                isStopOverAirportChange: false,
              },
              location: [
                {
                  locationId: 'DAC',
                  terminal: '1',
                  city: 'Dhaka',
                  cityCode: 'DAC',
                  countryName: 'Bangladesh',
                  airportName: 'Hazrat Shahjalal International Airport',
                },
                {
                  locationId: 'DXB',
                  terminal: '3',
                  city: 'Dubai',
                  cityCode: 'DXB',
                  countryName: 'United Arab Emirates',
                  airportName: 'Dubai',
                },
              ],
              companyId: {
                marketingCarrier: 'Emirates',
                operatingCarrier: 'Emirates',
                marketingCarrierCode: 'EK',
                operatingCarrierCode: 'EK',
              },
              flightOrtrainNumber: '585',
              productDetail: {
                equipmentType: 'Boeing 777-300',
              },
              addProductDetail: {
                ref: 'EK-Isgm010028a12767e',
                cabinClass: 'I',
              },
            },
            technicalStop: [],
          },
          {
            flightInformation: {
              productDateTime: {
                dateOfDeparture: '301024',
                timeOfDeparture: '16:05',
                dateOfArrival: '301024',
                timeOfArrival: '20:00',
                dateOfDepartureString: 'Wed, 30 Oct 2024',
                dateOfArrivalString: 'Wed, 30 Oct 2024',
                journeyTime: 475,
                segmentTime: '7 hours 55 minutes',
                stopOverTime: '',
                layOverTime: 0,
                isStopOverAirportChange: false,
              },
              location: [
                {
                  locationId: 'DXB',
                  terminal: '3',
                  city: 'Dubai',
                  cityCode: 'DXB',
                  countryName: 'United Arab Emirates',
                  airportName: 'Dubai',
                },
                {
                  locationId: 'LHR',
                  terminal: '3',
                  city: 'London',
                  cityCode: 'LON',
                  countryName: 'United Kingdom',
                  airportName: 'Heathrow',
                },
              ],
              companyId: {
                marketingCarrier: 'Emirates',
                operatingCarrier: 'Emirates',
                marketingCarrierCode: 'EK',
                operatingCarrierCode: 'EK',
              },
              flightOrtrainNumber: '5',
              productDetail: {
                equipmentType: 'Airbus A380-800',
              },
              addProductDetail: {
                ref: 'EK-Isgm5d0028a12767e',
                cabinClass: 'I',
              },
            },
            technicalStop: [],
          },
        ],
      },
    ],
    fareSummary: {
      refundable: false,
      totalFareAmount: 1003356,
      totalTaxAmount: 63617,
      totalBaseFareAmount: 939739,
      breakdown: {
        INF: {
          paxCount: 1,
          fareAmount: 38861,
          baseFareAmount: 33251,
          taxAmount: 5610,
          totalFareAmount: 38861,
          totalBaseFareAmount: 33251,
          totalTaxAmount: 5610,
        },
        CH: {
          paxCount: 1,
          fareAmount: 263850,
          baseFareAmount: 247265,
          taxAmount: 16585,
          totalFareAmount: 263850,
          totalBaseFareAmount: 247265,
          totalTaxAmount: 16585,
        },
        ADT: {
          paxCount: 2,
          fareAmount: 350322.5,
          baseFareAmount: 329611.5,
          taxAmount: 20711,
          totalFareAmount: 700645,
          totalBaseFareAmount: 659223,
          totalTaxAmount: 41422,
        },
      },
    },
    baggage: [
      {
        ADT: {
          freeAllowance: 40,
          quantityCode: 'N',
          unitQualifier: 'Kg(s)',
          cabinBaggage: '7 Kg(s)',
        },
        CH: {
          freeAllowance: 40,
          quantityCode: 'N',
          unitQualifier: 'Kg(s)',
          cabinBaggage: '7 Kg(s)',
        },
        INF: {
          freeAllowance: 10,
          quantityCode: 'N',
          unitQualifier: 'Kg(s)',
          cabinBaggage: '7 Kg(s)',
        },
      },
    ],
    refs: {
      offer: {
        refs: [],
        OfferID: {
          value: 'X215450E9-F904-41E8-B788-14',
          Owner: 'EK',
          Channel: 'NDC',
        },
        OfferItemIDs: {
          OfferItemID: [
            {
              value: 'X215450E9-F904-41E8-B788-14-1',
              refs: ['EK-T1.1'],
            },
            {
              value: 'X215450E9-F904-41E8-B788-14-2',
              refs: ['EK-T3'],
            },
            {
              value: 'X215450E9-F904-41E8-B788-14-3',
              refs: ['EK-T1', 'EK-T2'],
            },
          ],
        },
      },
      metaData: [],
      travelerRefs: {
        'EK-T1.1': 'INF',
        'EK-T3': 'CH',
        'EK-T1': 'ADT',
        'EK-T2': 'ADT',
      },
      originDestinations: [
        {
          Flight: [
            {
              SegmentKey: 'EK-Isgm010028a12767e',
              Departure: {
                AirportCode: {
                  value: 'DAC',
                },
                Date: '2024-10-30T00:00:00.000',
              },
              Arrival: {
                AirportCode: {
                  value: 'DXB',
                },
              },
              MarketingCarrier: {
                AirlineID: {
                  value: 'EK',
                },
                FlightNumber: {
                  value: '585',
                },
              },
            },
            {
              SegmentKey: 'EK-Isgm5d0028a12767e',
              Departure: {
                AirportCode: {
                  value: 'DXB',
                },
                Date: '2024-10-30T00:00:00.000',
              },
              Arrival: {
                AirportCode: {
                  value: 'LHR',
                },
              },
              MarketingCarrier: {
                AirlineID: {
                  value: 'EK',
                },
                FlightNumber: {
                  value: '5',
                },
              },
            },
          ],
        },
      ],
    },
    fareRules: {
      INF: {
        fareRules: {
          dateChange: {
            maxPenalty: {
              description: 'Maximum penalty amount',
              value: 0,
              currency: 'BDT',
            },
          },
          refundPolicy: {
            maxPenalty: {
              description: 'Maximum penalty amount',
              value: 0,
              currency: 'BDT',
            },
          },
        },
      },
      CH: {
        fareRules: {
          dateChange: {
            maxPenalty: {
              description: 'Maximum penalty amount',
              value: 0,
              currency: 'BDT',
            },
          },
          refundPolicy: {
            maxPenalty: {
              description: 'Maximum penalty amount',
              value: 0,
              currency: 'BDT',
            },
          },
        },
      },
      ADT: {
        fareRules: {
          dateChange: {
            maxPenalty: {
              description: 'Maximum penalty amount',
              value: 0,
              currency: 'BDT',
            },
          },
          refundPolicy: {
            maxPenalty: {
              description: 'Maximum penalty amount',
              value: 0,
              currency: 'BDT',
            },
          },
        },
      },
    },
    fareRulesString: '<h3>INF</h3><h3>CH</h3><h3>ADT</h3>',
    isCorpFare: true,
    has_domestic: true,
    transitAirport: [
      [
        {
          locationId: 'DXB',
          terminal: '3',
          city: 'Dubai',
          cityCode: 'DXB',
          countryName: 'United Arab Emirates',
          airportName: 'Dubai',
        },
      ],
    ],
    code_share: false,
    segmentWiseLayOverMinutes: [700],
    fareType: 'REGULAR',
    cabinClass: ['I', 'I'],
    totalLayoverMinutes: 700,
    hasSSR: 0,
    updatedFareRequired: false,
    airlineRemarks: [],
    validatingCarrier: 'EK',
    finalFare: 1003356,
    flightSummary: [
      {
        fromCode: 'DAC',
        fromCity: 'Dhaka',
        fromCityCode: 'DAC',
        toCode: 'LHR',
        toCity: 'London',
        toCityCode: 'LON',
        segmentTime: '1 day 1 hour 0 minute',
      },
    ],
    baseIndex: 92,
    journeyTimeFrame: ['afterMidnight'],
    totalLayoverTime: ['lessThanFifteenHours'],
    cabinType: 'business',
    flightNumbers: ['EK-585', 'EK-5'],
    totalJourneyTime: 800,
    stops: ['1'],
    marketingCarrier: {
      name: 'Emirates',
      code: 'EK',
    },
  },
  {
    flightCombination: [
      {
        propFlightGrDetail: {
          isLcc: false,
        },
        flightDetails: [
          {
            flightInformation: {
              productDateTime: {
                dateOfDeparture: '301024',
                timeOfDeparture: '03:20',
                dateOfArrival: '301024',
                timeOfArrival: '06:35',
                dateOfDepartureString: 'Wed, 30 Oct 2024',
                dateOfArrivalString: 'Wed, 30 Oct 2024',
                journeyTime: 375,
                segmentTime: '6 hours 15 minutes',
                stopOverTime: '8 hours 40 minutes',
                layOverTime: 520,
                isStopOverAirportChange: false,
              },
              location: [
                {
                  terminal: '1',
                  locationId: 'DAC',
                  cityCode: 'DAC',
                  city: 'Dhaka',
                  countryName: 'Bangladesh',
                  airportName: 'Hazrat Shahjalal International Airport',
                },
                {
                  terminal: '',
                  locationId: 'DOH',
                  cityCode: 'DOH',
                  city: 'Doha',
                  countryName: 'Qatar',
                  airportName: 'Doha',
                },
              ],
              companyId: {
                marketingCarrier: 'Qatar Airways',
                operatingCarrier: 'Qatar Airways',
                marketingCarrierCode: 'QR',
                operatingCarrierCode: 'QR',
              },
              flightOrtrainNumber: '639',
              productDetail: {
                equipmentType: 'Boeing 787-8',
              },
              addProductDetail: {
                availableSeats: 0,
                cabinClass: 'R',
                airlineCode: 'QR',
                airlineName: 'Qatar Airways',
                electronicTicketing: 'Y',
                segmentIndicator: 1,
                inFlightServices: null,
              },
            },
            technicalStop: [],
          },
          {
            flightInformation: {
              productDateTime: {
                dateOfDeparture: '301024',
                timeOfDeparture: '15:15',
                dateOfArrival: '301024',
                timeOfArrival: '19:50',
                dateOfDepartureString: 'Wed, 30 Oct 2024',
                dateOfArrivalString: 'Wed, 30 Oct 2024',
                journeyTime: 455,
                segmentTime: '7 hours 35 minutes',
                stopOverTime: '',
                layOverTime: 0,
                isStopOverAirportChange: false,
              },
              location: [
                {
                  terminal: '',
                  locationId: 'DOH',
                  cityCode: 'DOH',
                  city: 'Doha',
                  countryName: 'Qatar',
                  airportName: 'Doha',
                },
                {
                  terminal: '4',
                  locationId: 'LHR',
                  cityCode: 'LON',
                  city: 'London',
                  countryName: 'United Kingdom',
                  airportName: 'Heathrow',
                },
              ],
              companyId: {
                marketingCarrier: 'Qatar Airways',
                operatingCarrier: 'Qatar Airways',
                marketingCarrierCode: 'QR',
                operatingCarrierCode: 'QR',
              },
              flightOrtrainNumber: '15',
              productDetail: {
                equipmentType: 'Boeing 777-300',
              },
              addProductDetail: {
                availableSeats: 0,
                cabinClass: 'R',
                airlineCode: 'QR',
                airlineName: 'Qatar Airways',
                electronicTicketing: 'Y',
                segmentIndicator: 1,
                inFlightServices: null,
              },
            },
            technicalStop: [],
          },
        ],
      },
    ],
    fareInformation: null,
    fareSummary: {
      breakdown: {
        ADT: {
          fareAmount: 338755.7,
          taxAmount: 40609.46,
          baseFareAmount: 298146.24,
          totalFareAmount: 677511.4,
          totalBaseFareAmount: 596292.48,
          totalTaxAmount: 81218.92,
          paxCount: 2,
        },
        CH: {
          fareAmount: 256544.8,
          taxAmount: 32505.46,
          baseFareAmount: 224039.34,
          totalFareAmount: 256544.8,
          totalBaseFareAmount: 224039.34,
          totalTaxAmount: 32505.46,
          paxCount: 1,
        },
        INF: {
          fareAmount: 52288.16,
          taxAmount: 6999.98,
          baseFareAmount: 45288.18,
          totalFareAmount: 52288.16,
          totalBaseFareAmount: 45288.18,
          totalTaxAmount: 6999.98,
          paxCount: 1,
        },
      },
      refundable: false,
      totalFareAmount: 986341.84,
      totalTaxAmount: 120724.36,
      totalBaseFareAmount: 865617.48,
    },
    baggage: [
      {
        ADT: {
          freeAllowance: 40,
          quantityCode: 'W',
          unitQualifier: 'Kg(s)',
          cabinBaggage: '7 Kg(s)',
        },
        CH: {
          freeAllowance: 40,
          quantityCode: 'W',
          unitQualifier: 'Kg(s)',
          cabinBaggage: '7 Kg(s)',
        },
        INF: {
          freeAllowance: null,
          quantityCode: null,
          unitQualifier: null,
          cabinBaggage: '7 Kg(s)',
        },
      },
    ],
    has_domestic: true,
    transitAirport: [
      [
        {
          terminal: '',
          locationId: 'DOH',
          cityCode: 'DOH',
          city: 'Doha',
          countryName: 'Qatar',
          airportName: 'Doha',
        },
      ],
    ],
    code_share: false,
    segmentWiseLayOverMinutes: [520],
    fareType: 'REGULAR',
    cabinClass: ['R', 'R'],
    totalLayoverMinutes: 520,
    hasSSR: 0,
    updatedFareRequired: false,
    airlineRemarks: [],
    validatingCarrier: 'QR',
    finalFare: 986341.84,
    flightSummary: [
      {
        fromCode: 'DAC',
        fromCity: 'Dhaka',
        fromCityCode: 'DAC',
        toCode: 'LHR',
        toCity: 'London',
        toCityCode: 'LON',
        segmentTime: '22 hours 30 minutes',
      },
    ],
    baseIndex: 79,
    journeyTimeFrame: ['afterMidnight'],
    totalLayoverTime: ['lessThanTenHours'],
    cabinType: 'business',
    flightNumbers: ['QR-639', 'QR-15'],
    totalJourneyTime: 830,
    stops: ['1'],
    marketingCarrier: {
      name: 'Qatar Airways',
      code: 'QR',
    },
  },
];
