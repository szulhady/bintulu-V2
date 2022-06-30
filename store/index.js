import { card, sensor, status } from '~/src/class'

export const state = ()=>({
  api_key_bintulu:'https://api.openweathermap.org/data/2.5/forecast?q=bintulu&units=metric&appid=45a2a23d23c78dbe34c5fbd75a591573',
  api_key: '45a2a23d23c78dbe34c5fbd75a591573',
  url_base: 'https://api.openweathermap.org/data/2.5/',
  query: '',
  // weather: {},
  // forecasts: [
  //   {
  //     dt_txt:"",
  //     main:{
  //       temp:""
  //     },
  //     weather:[
  //       {
  //         description:"",
  //         icon:""
  //       }
  //     ]
  //   },

  // ],
  forecasts: [
    {
      dt_txt:"",
      main:{
        temp:""
      },
      weather:[
        {
          description:"",
          icon:""
        }
      ]
    },
    {
      dt_txt:"",
      main:{
        temp:""
      }
      ,
      weather:[
        {
          description:"",
          icon:""
        }
      ]
    },
    {
      dt_txt:"",
      main:{
        temp:""
      },
      weather:[
        {
          description:"",
          icon:""
        }
      ]
    },
    {
      dt_txt:"",
      main:{
        temp:""
      },
      weather:[
        {
          description:"",
          icon:""
        }
      ]
    },
    {
      dt_txt:"",
      main:{
        temp:""
      },
      weather:[
        {
          description:"",
          icon:""
        }
      ]
    },
  ],
  weather:{                                                                                     
    coord: {
      lon: "",
      lat:""
    },
    weather: [
      {
        id: "",
        main: '',
        description: "",
        icon: ''
      }
    ],
    base: '',
    main: {
      temp: "",
      feels_like: "",
      temp_min: "",
      temp_max: "",
      pressure: "",
      humidity: ""
    },
    visibility: "",
    wind: {
      speed: "",
      deg: ""
    },
    clouds: {
      all: ""
    },
    dt: "",
    sys: {
      type: "",
      id: "",
      country: 'MY',
      sunrise: "",
      sunset: ""
    },
    timezone: "",
    id: "",
    name: "",
    cod: ""
  },
  active:0,
  activeSensor:0,
  arrayTime:[
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ],
  durationPetrochemicalJetty:"Waiting for incoming data",
  durationWhaftJetty:"Waiting for incoming data", 
  durationMP10Jetty:"Waiting for incoming data", //OBB
  durationDGYard:"Waiting for incoming data", 
  durationLNG:"Waiting for incoming data", 
  durationTimeArray:[null,null,null,null, null],
  duration: "Waiting for incoming data",
  durationServer:"Waiting for incoming data",
  locations: [
    {
      name: "petrochemical jetty",
      lat: 3.2592932651185236,
      lng: 113.0752931476544,
      data: [
        {
          name: "02",
          value: "10",
        },
        {
          name: "LEL",
          value: "5",
        },
        {
          name: "VOC",
          value: "3",
        },
      ],
    },
    {
      name: "ammonia whaft jetty",
      lat: 3.2614980671619365,
      lng: 113.06751818919237,
      data: [
        {
          name: "02",
          value: "10",
        },
        {
          name: "LEL",
          value: "5",
        },
        {
          name: "NH3",
          value: "3",
        },
      ],
    },
    {
      name: "mp10 jetty",
      lat: 3.2575664411219627,
      lng: 113.07071461538213,
      data: [
        {
          name: "02",
          value: "10",
        },
        {
          name: "LEL",
          value: "5",
        },
        {
          name: "VOC",
          value: "3",
        },
      ],
    },
    {
      name: "dg yard",
      lat: 3.264185711066722,
      lng: 113.07340477665807,
      data: [
        {
          name: "02",
          value: "10",
        },
        {
          name: "LEL",
          value: "5",
        },
        {
          name: "VOC",
          value: "3",
        },
        {
          name: "NH3",
          value: "10",
        },
        {
          name: "CL2",
          value: "5",
        },
        {
          name: "H2S",
          value: "3",
        },
      ],
    },
    {
      name: "lng iso tank yard",
      lat: 3.2640634037450544,
      lng: 113.06342530326215,
      data: [
        {
          name: "LEL 1",
          value: "10",
        },
        {
          name: "LEL 2",
          value: "5",
        },
        {
          name: "LEL 3",
          value: "3",
        },
        {
          name: "LEL 4",
          value: "10",
        },
        {
          name: "LEL 5",
          value: "5",
        },
      ],
    },
  ],
  clock:"",
  date:'',
  cardServer:[
    new card('mdi mdi-map-marker-radius','Stations', 5, 'primary'),
    new card('mdi mdi-checkbox-multiple-marked','Online', 5, 'success'),
    new card('mdi mdi-alert-rhombus-outline','Warnings', 0, 'error'),
  ],
  stations:[
    {
      jetty:'Petrochemical Jetty',
      description:"Station 1",
      image: "petrochemicalJetty.jpg",
      sensors:['O2', 'LEL', 'VOC'],
      sensorData:[
        new sensor('O2','O2',0,'%',40,false, 'O2'),
        new sensor('LEL','LEL',0,'%',25,false, 'LEL'),
        new sensor('VOC','VOC',0,'%',25,false, 'VOC')
      ],
      warnings:[]
    },
      {
      jetty:'Ammonia Whaft Jetty',
      description:"Station 2",
      image: "bintuluPort.jpg",
      sensors:['O2', 'LEL', 'NH3'],
      sensorData:[
        new sensor('O2','O2',0,'%',40,false, 'O2'),
        new sensor('LEL','LEL',0,'%',25,false, 'LEL'),
        new sensor('NH3','NH3',0,'%',25,false, 'NH3')
      ],
      warnings:[]
      },
    {
      jetty:'OBB Jetty',
      description:"Station 3",
      image: "bintuluPort2.jpg",
      sensors:['O2', 'LEL', 'VOC'],
      sensorData:[
        new sensor('O2','O2',0,'%',40,false, 'O2'),
        new sensor('LEL','LEL',0,'%',25,false, 'LEL'),
        new sensor('VOC','VOC',0,'%',25,false, 'VOC')
     ],
     warnings:[]
    },
    {
      jetty:'DG Yard',
      description:"Station 4",
      image: "dgYard.jpg",
      sensors:['O2', 'LEL', 'VOC', 'NH3', 'CL2', 'H2S'],
      sensorData:[
        new sensor('O2','O2',0,'%',40,false, 'O2'),
        new sensor('LEL','LEL',0,'%',25,false, 'LEL'),
        new sensor('VOC','VOC',0,'%',25,false, 'VOC'),
        new sensor('NH3','NH3',0,'%',25,false, 'NH3'),
        new sensor('CL2','CL2',0,'%',25,false, 'CL2'),
        new sensor('H2S','H2S',0,'%',25,false, 'H2S')
     ],
     warnings:[]
    },
    {
      jetty:'LNG ISO Tank Yard',
      description:"Station 5",
      image: "dgYard.jpg",
      sensors:['LEL1', 'LEL2', 'LEL3', 'LEL4', 'LEL5'],
      sensorData:[
        new sensor('LEL1','LEL 1',0,'%',25,false, 'LEL1'),
        new sensor('LEL2','LEL 2',0,'%',25,false, 'LEL2'),
        new sensor('LEL3','LEL 3',0,'%',25,false, 'LEL3'),
        new sensor('LEL4','LEL 4',0,'%',25,false, 'LEL4'),
        new sensor('LEL5','LEL 5',0,'%',25,false, 'LEL5'),
     ],
     warnings:[]
    }        
  ],
  headers: [
    {
      text: "STATION",
      align: "start",
      sortable: false,
      value: "name",
    },
    { text: "REMARKS", value: "remarks" },
  ],
  status: [
    new status('Petrochemical Jetty', 'Good'),
    new status('Ammonia Wharf Jetty', 'Good'),
    new status('OBB Jetty', 'Good'),
    new status('DG Yard', 'Good'),
    new status('LNG ISO Tank Yard', 'Good'),
  ],
  trends:[
    {
      name:"Petrochemical Jetty",
      hourly:[
        {
          name:"O2",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"LEL",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"VOC",
          max:[],
          min:[],
          avg:[],
          hour:[]
        }
      ],
      daily:[
        {
          name:"O2",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"LEL",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"VOC",
          max:[],
          min:[],
          avg:[],
          day:[] 
        }
      ],
      monthly:[
        {
          name:"O2",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"LEL",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"VOC",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        }
      ]
    },
    {
      name:"Ammonia Wharf Jetty",
      hourly:[
        {
          name:"O2",
          max:[],
          min:[],
          avg:[],
          hour:[] 
        },
        {
          name:"LEL",
          max:[],
          min:[],
          avg:[],
          hour:[] 
        },
        {
          name:"HN3",
          max:[],
          min:[],
          avg:[],
          hour:[] 
        }
      ],
      daily:[
        {
          name:"O2",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"LEL",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"NH3",
          max:[],
          min:[],
          avg:[],
          day:[] 
        }
      ],
      monthly:[
        {
          name:"O2",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"LEL",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        },
        {
          name:"NH3",
          max:[],
          min:[],
          avg:[],
          monthName:[] 
        }
      ]
    },
    {
      name:"MP10 Jetty",
      hourly:[
        {
          name:"O2",
          max:[],
          min:[],
          avg:[],
          hour:[]  
        },
        {
          name:"LEL",
          max:[],
          min:[],
          avg:[],
          hour:[]  
        },
        {
          name:"VOC",
          max:[],
          min:[],
          avg:[],
          hour:[]  
        }
      ],
      daily:[
        {
          name:"O2",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"LEL",
          max:[],
          min:[],
          avg:[],
          day:[] 
        },
        {
          name:"VOC",
          max:[],
          min:[],
          avg:[],
          day:[] 
        }
      ],
      monthly:[
        {
          name:"O2",
          max:[],
          min:[],
          avg:[],
          monthName:[]  
        },
        {
          name:"LEL",
          max:[],
          min:[],
          avg:[],
          monthName:[]  
        },
        {
          name:"VOC",
          max:[],
          min:[],
          avg:[],
          monthName:[]  
        }
      ]
    },
    {
      name:'DG Yard',
      hourly:[
        {
          name:"O2",
          max:[],
          min:[],
          avg:[],
          hour:[]  
        },
        {
          name:"LEL",
          max:[],
          min:[],
          avg:[],
          hour:[]  
        },
        {
          name:"VOC",
          max:[],
          min:[],
          avg:[],
          hour:[]  
        },
        {
          name:"NH3",
          max:[],
          min:[],
          avg:[],
          hour:[]  
        },
        {
          name:"CL2",
          max:[],
          min:[],
          avg:[],
          hour:[]  
        },
        {
          name:"H2S",
          max:[],
          min:[],
          avg:[],
          hour:[]  
        }
      ],
      daily:[
        {
          name:"O2",
          max:[],
          min:[],
          avg:[],
          day:[]  
        },
        {
          name:"LEL",
          max:[],
          min:[],
          avg:[],
          day:[]  
        },
        {
          name:"VOC",
          max:[],
          min:[],
          avg:[],
          day:[]  
        },
        {
          name:"NH3",
          max:[],
          min:[],
          avg:[],
          day:[]  
        },
        {
          name:"CL2",
          max:[],
          min:[],
          avg:[],
          day:[]  
        },
        {
          name:"H2S",
          max:[],
          min:[],
          avg:[],
          day:[]  
        }
      ],
      monthly:[
        {
          name:"O2",
          max:[],
          min:[],
          avg:[],
          monthName:[]  
        },
        {
          name:"LEL",
          max:[],
          min:[],
          avg:[],
          monthName:[]  
        },
        {
          name:"VOC",
          max:[],
          min:[],
          avg:[],
          monthName:[]  
        },
        {
          name:"NH3",
          max:[],
          min:[],
          avg:[],
          monthName:[]  
        },
        {
          name:"CL2",
          max:[],
          min:[],
          avg:[],
          monthName:[]  
        },
        {
          name:"H2S",
          max:[],
          min:[],
          avg:[],
          monthName:[]  
        }
      ]
    },
    {
      name:'LNG ISO Tank Yard',
      hourly:[
        {
          name:"LEL1",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"LEL2",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"LEL3",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"LEL4",
          max:[],
          min:[],
          avg:[],
          hour:[]
        },
        {
          name:"LEL5",
          max:[],
          min:[],
          avg:[],
          hour:[]
        }
      ],
      daily:[
        {
          name:"LEL1",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"LEL2",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"LEL3",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"LEL4",
          max:[],
          min:[],
          avg:[],
          day:[]
        },
        {
          name:"LEL5",
          max:[],
          min:[],
          avg:[],
          day:[]
        }
      ],
      monthly:[
        {
          name:"LEL1",
          max:[],
          min:[],
          avg:[],
          monthName:[]
        },
        {
          name:"LEL2",
          max:[],
          min:[],
          avg:[],
          monthName:[]
        },
        {
          name:"LEL3",
          max:[],
          min:[],
          avg:[],
          monthName:[]
        },
        {
          name:"LEL4",
          max:[],
          min:[],
          avg:[],
          monthName:[]
        },
        {
          name:"LEL5",
          max:[],
          min:[],
          avg:[],
          monthName:[]
        } 
      ]
    }
  ],
  trendHourly:
    {
      max:[],
      min:[],
      avg:[],
      time:[]
    },
  trendDaily:
    {
      max:[],
      min:[],
      avg:[],
      time:[]
    },
  trendMonthly:
    {
      max:[],
      min:[],
      avg:[],
      time:[]
    },
    loading1:true,
    loading2:true,
    loading3:true,
activeGraph:0
})

export const mutations = {

  setStatus(state,payload){
    state.status = payload
  },
  setLoading1(state,payload){
    state.loading1 = payload
  },
  setLoading2(state,payload){
    state.loading2 = payload
  },
  setLoading3(state,payload){
    state.loading3 = payload
  },
  getDatabaseHourly(state,payload){
    state.trendHourly = payload
  },
  getDatabaseDaily(state,payload){
    state.trendDaily = payload
  },
  getDatabaseMonthly(state,payload){
    state.trendMonthly = payload
  },
  getActive(state,payload){
    state.active=payload
  },
  getActiveSensor(state,payload){
    state.activeSensor=payload
  },
  getMQTTData(state,payload){
    const data=payload.data
    const indexStation=payload.indexStation
    const indexSensor=payload.indexSensor
    for(let i = 0; i<indexSensor; i++){
      state.stations[indexStation].sensorData[i].data=data[i]
    }
  },
  getMQTTDataLNG(state,payload){
    const data=payload.data
    // console.log(data)
    const indexStation=payload.indexStation
    const indexSensor=payload.indexSensor
    // for(let i = 0; i<indexSensor; i++){
      state.stations[indexStation].sensorData[indexSensor].data=data
    // }
  },
  getServer(state, payload){
    let data=payload
    if(data.Temp){
    state.server.disc = data.Disc
    state.server.temperature = (data.Temp).slice(1).slice(0,-3)
     state.server.speed = (data.Speed).slice(0,-2)
  }
  },
  checkWarning(state, payload){
    
    const indexStation = payload.indexStation
    const indexSensor = payload.indexSensor
    const isHigh = payload.isHigh
    // console.log(isHigh)
    state.stations[indexStation].sensorData[indexSensor].isHigh=isHigh
    if(isHigh){
      if(indexStation==0 || indexStation ==2){
        if(indexSensor==0){
          state.stations[indexStation].warnings.push(' O2')
        }else if(indexSensor == 1){
          state.stations[indexStation].warnings.push(' LEL')
        }else if(indexSensor==2){
          state.stations[indexStation].warnings.push(' VOC')
        }
      }else if (indexStation == 1){
        if(indexSensor==0){
          state.stations[indexStation].warnings.push(' O2')
        }else if(indexSensor == 1){
          state.stations[indexStation].warnings.push(' LEL')
        }else if(indexSensor == 2){
          state.stations[indexStation].warnings.push(' NH3')
        }
      }else if(indexStation ==3 ){
        if(indexSensor==0){
          state.stations[indexStation].warnings.push(' O2')
        }else if(indexSensor == 1){
          state.stations[indexStation].warnings.push(' LEL')
        }else if(indexSensor==2){
          state.stations[indexStation].warnings.push(' VOC')
        }else if(indexSensor == 3){
          state.stations[indexStation].warnings.push(' NH3')
        }else if(indexSensor == 4){
          state.stations[indexStation].warnings.push(' CL2')
        }else if(indexSensor == 5){
          state.stations[indexStation].warnings.push(' H2S')
        }
      }
      // console.log(state.stations[indexStation].warnings)
    }
    if(state.stations[indexStation].warnings.length>0){
      state.status[indexStation].remarks = state.stations[indexStation].warnings.toString()
      if(state.stations[indexStation].warnings.length>1){
        state.status[indexStation].remarks= state.status[indexStation].remarks +" readings are high"
      }else{
        state.status[indexStation].remarks= state.status[indexStation].remarks +" reading is high"
      }
    }else{
      state.status[indexStation].remarks= ["Good"]
    }
    // state.stations[indexStation].warnings=[]
    // state.status[indexStation].remarks= []
    // console.log(state.status[indexStation].remarks)
  },
  checkWarningRemarks(state, payload){
    const indexStation = payload
    state.stations[indexStation].warnings=[]
  },
  checkLNGWarning(state,payload){
    state.status[4].remarks=[payload]
  },
  insertCurrentArray(state,payload){
    const indexStation = payload.indexStation
    const indexSensor = payload.indexSensor
    const data = payload.data
    for(let i = 0; i<indexSensor; i++){
      let target = state.stations[indexStation].sensorData[i].current
      if(target.length<10){
        target.push(data[i])
      }else{
        target.splice(0,1)
        target.push(data[i])      
      } 
    }
  },
  insertCurrentArrayLNG(state,payload){
    // console.log(payload)
    const indexStation = payload.indexStation
    const indexSensor = payload.indexSensor
    const data = payload.data
    // for(let i = 0; i<indexSensor; i++){
      // console.log(data, indexSensor)
      let target = state.stations[indexStation].sensorData[indexSensor].current
      if(target.length<10){
        target.push(data)
      }else{
        target.splice(0,1)
        target.push(data)      
      } 
      // console.log(state.stations[indexStation].sensorData[indexSensor].current)
    // }
  },
  countWarning(state){
    let number=0;
    for (let i = 0; i <= 4; i++) {
   number=number + state.stations[i].warnings.length
    }
    state.cardServer[2].data=number
  },
   //Insert array time for current trend
  getCurrentTimeArray(state,payload){
    if (state.arrayTime[payload.index].length < 10) {
      state.arrayTime[payload.index].push(payload.realTime);
    } else {
       state.arrayTime[payload.index].splice(0, 1);
       state.arrayTime[payload.index].push(payload.realTime);
     }
    //  console.log(state.arrayTime[0])
  },

  //PetrochemicalJetty
  getDurationPetrochemicalJetty(state,payload){
    let duration1=payload;
    // console.log(duration1)
    if (duration1==0){
      duration1="just now"
    }else if(duration1==1){
      duration1=`${duration1} minute ago`
    }
    else 
    {
      duration1=`${duration1} minutes ago`
    }
    state.durationPetrochemicalJetty=`Updated ${duration1}`
    // state.time1=new Date()
  },

  //WhaftJetty
  getDurationWhaftJetty(state,payload){
    let duration1=payload;
    // console.log(duration1)
    if (duration1==0){
      duration1="just now"
    }else if(duration1==1){
      duration1=`${duration1} minute ago`
    }
    else 
    {
      duration1=`${duration1} minutes ago`
    }
    state.durationWhaftJetty=`Updated ${duration1}`
    // state.time1=new Date()
  },

  //MP10Jetty
  getDurationMP10Jetty(state,payload){
    let duration1=payload;
    // console.log(duration1)
    if (duration1==0){
      duration1="just now"
    }else if(duration1==1){
      duration1=`${duration1} minute ago`
    }
    else 
    {
      duration1=`${duration1} minutes ago`
    }
    state.durationMP10Jetty=`Updated ${duration1}`
    // state.time1=new Date()
  },

  //DGYard
  getDurationDGYard(state,payload){
    let duration1=payload;
    // console.log(duration1)
    if (duration1==0){
      duration1="just now"
    }else if(duration1==1){
      duration1=`${duration1} minute ago`
    }
    else 
    {
      duration1=`${duration1} minutes ago`
    }
    state.durationDGYard=`Updated ${duration1}`
    // state.time1=new Date()
  },

  //LNG
  getDurationLNG(state,payload){
    let duration1=payload;
    // console.log(duration1)
    if (duration1==0){
      duration1="just now"
    }else if(duration1==1){
      duration1=`${duration1} minute ago`
    }
    else 
    {
      duration1=`${duration1} minutes ago`
    }
    state.durationLNG=`Updated ${duration1}`
    // state.time1=new Date()
  },

  // Least duration (update data in system)
  getDuration(state,payload){
    let duration=payload;
    if (duration==0){
      duration="just now"
    }else if(duration==1){
      duration=`${duration} minute ago`
    }
    else 
    {
      duration=`${duration} minutes ago`
    }
    state.duration=`Updated ${duration}`
    // console.log(duration)
    // state.time=new Date()
  },
  // Server
  getDurationServer(state,payload){
    let duration=payload;
    // console.log(payload)
    if (duration==0){
      duration="just now"
    }else if(duration==1){
      duration=`${duration} minute ago`
    }
    else 
    {
      duration=`${duration} minutes ago`
    }
    state.durationServer=`Updated ${duration}`
  },
  getClock(state, payload){
    state.clock=payload
  },
  getDate(state, payload){
    state.date=payload
  },

  // Hourly
  getHourly(state,payload){
    let indexStation=payload.indexStation;
    let indexSensor=payload.indexSensor;
    let data=payload;
     
     state.trends[indexStation].hourly[indexSensor].min=data.min;
     state.trends[indexStation].hourly[indexSensor].max=data.max;
     state.trends[indexStation].hourly[indexSensor].avg=data.avg;
     state.trends[indexStation].hourly[indexSensor].hour=data.hour
   },
 // Daily
 getDaily(state,payload){
  let indexStation=payload.indexStation;
  let indexSensor=payload.indexSensor;
  let data=payload;
  // console.log(data)
  state.trends[indexStation].daily[indexSensor].min=data.min;
  state.trends[indexStation].daily[indexSensor].max=data.max;
  state.trends[indexStation].daily[indexSensor].avg=data.avg;
  state.trends[indexStation].daily[indexSensor].day=data.day
},
// Monthly
getMonthly(state,payload){
  let indexStation=payload.indexStation;
  let indexSensor=payload.indexSensor;
  let data=payload;
  state.trends[indexStation].monthly[indexSensor].min=data.min;
  state.trends[indexStation].monthly[indexSensor].max=data.max;
  state.trends[indexStation].monthly[indexSensor].avg=data.avg;
  state.trends[indexStation].monthly[indexSensor].monthName=data.monthName;
},
getWeather(state, payload){
let windDirection = payload.WD
let windSpeed = payload.WS
let temperature = payload.Temp
let humidity = payload.RH
let pressure = payload.Pa
let rainfall = payload.RF
state.weather = {
  windDirection,
  windSpeed,
  temperature,
  humidity,
  pressure,
  rainfall
}
},

  // api for OpenWeatherMap
  SET_WEATHER (state, value) {
    state.weather = value
  },
  SET_FORECASTS (state, value) {
    // const data = value.list.filter(forecast => forecast.dt_txt.slice(-8) === '12:00:00')
    const data = value.list.filter(forecast => forecast.dt_txt.slice(-8) === '12:00:00' && forecast.dt_txt.slice(0, 10) !== state.today)
    state.forecasts = data
  },
  updateQuery (state, query) {
    state.query = query
  },
  SET_TODAY (state, value) {
    // console.log(value)
    state.today = value
  },
  setActiveGraph(state, payload){
    state.activeGraph=payload
    // console.log(state.arrayTime)
  }
}

export const actions = {
  async setForecasts ({ commit, getters }) {
    const { data } = await this.$axios.get(`${this.state.api_key_bintulu}`)
    // const { data } = await axios.get(`${this.state.url_base}forecast?q=${this.state.query}&units=metric&appid=${this.state.api_key}`)

    commit('SET_FORECASTS', data)

  },
  async setWeather ({ commit }) {
    const { data } = await this.$axios.get(`https://api.openweathermap.org/data/2.5/weather?q=bintulu&units=metric&appid=45a2a23d23c78dbe34c5fbd75a591573`).catch(() => {
    // const { data } = await this.$axios.get(`${this.state.url_base}weather?q=${this.state.query}&units=metric&APPID=${this.state.api_key}`).catch(() => {
      // simple error catch
      alert('Unable to find forecast for this location, please try a different location')
     
    })
    commit('SET_WEATHER', data)
    // console.log(data)
  },
  // sets todays date in correct format for filters
  setToday ({ commit }) {
    let today = new Date()
    const VOC = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const yyyy = today.getFullYear()
    today = yyyy + '-' + mm + '-' + VOC
    commit('SET_TODAY', today)
  }
}

export const getters = {
  // fiter out remaining results for todays date from 3 hrly data
  threeHourlyToday: (state) => {
    const forecasts = state.forecasts
    return forecasts.filter(forecast => forecast.dt_txt.slice(0, 10) === state.today)
  },
  // filter out miVOCay weather from 3hrly data for next 4 days (not today)
  dailyMiVOCay: (state) => {
    const forecasts = state.forecasts
    return forecasts.filter(forecast => forecast.dt_txt.slice(-8) === '12:00:00' && forecast.dt_txt.slice(0, 10) !== state.today)
  }
}


