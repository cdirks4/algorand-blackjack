// Automatically generated with Reach 0.1.10 (84dc282c)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (84dc282c)';
export const _backendVersion = 15;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      2: [ctc0],
      3: [ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:24:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:24:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v65, time: v64, didSend: v26, from: v63 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v65, time: v64, didSend: v26, from: v63 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v63],
    evt_cnt: 0,
    funcNum: 1,
    lct: v64,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:27:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v70, time: v69, didSend: v34, from: v68 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v70, time: v69, didSend: v34, from: v68 } = txn2;
  ;
  const v71 = stdlib.addressEq(v63, v68);
  stdlib.assert(v71, {
    at: './index.rsh:27:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v76, time: v75, didSend: v41, from: v74 } = txn3;
  ;
  const txn4 = await (ctc.sendrecv({
    args: [v63],
    evt_cnt: 0,
    funcNum: 3,
    lct: v75,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:33:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v81, time: v80, didSend: v49, from: v79 } = txn4;
      
      ;
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v81, time: v80, didSend: v49, from: v79 } = txn4;
  ;
  const v82 = stdlib.addressEq(v63, v79);
  stdlib.assert(v82, {
    at: './index.rsh:33:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  return;
  
  
  
  
  
  
  
  
  };
export async function Dealer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Dealer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Dealer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v65, time: v64, didSend: v26, from: v63 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v70, time: v69, didSend: v34, from: v68 } = txn2;
  ;
  const v71 = stdlib.addressEq(v63, v68);
  stdlib.assert(v71, {
    at: './index.rsh:27:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Dealer'
    });
  const txn3 = await (ctc.sendrecv({
    args: [v63],
    evt_cnt: 0,
    funcNum: 2,
    lct: v69,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:30:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v76, time: v75, didSend: v41, from: v74 } = txn3;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v76, time: v75, didSend: v41, from: v74 } = txn3;
  ;
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v81, time: v80, didSend: v49, from: v79 } = txn4;
  ;
  const v82 = stdlib.addressEq(v63, v79);
  stdlib.assert(v82, {
    at: './index.rsh:33:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Dealer'
    });
  return;
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAEAAEDAiYCAQAAIjUAMRhBAVApZEkiWzUBgQhbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSUMQABgSSQMQAAnJBJEJDQBEkQ0BEkiEkw0AhIRRChkNQOABKdlxLSwNAMxABJEQgClSCU0ARJENARJIhJMNAISEUQoZEk1AzX/gARBsUBNsDT/KEsBVwAgZ0gkNQEyBjUCQgCOSSMMQAA5SCM0ARJENARJIhJMNAISEUQoZEk1AzX/gASai5F0sDT/MQASRDT/KEsBVwAgZ0glNQEyBjUCQgBPSCI0ARJENARJIhJMNAISEUSABF8Nq/qwgaCNBogAbTEAKEsBVwAgZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 32,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051610a6a380380610a6a8339810160408190526100229161018d565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a161007d341560076100cb565b60408051602080820183523380835260016000819055439055835191820152909101604051602081830303815290604052600290805190602001906100c39291906100f4565b505050610230565b816100f05760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054610100906101f5565b90600052602060002090601f0160209004810192826101225760008555610168565b82601f1061013b57805160ff1916838001178555610168565b82800160010185558215610168579182015b8281111561016857825182559160200191906001019061014d565b50610174929150610178565b5090565b5b808211156101745760008155600101610179565b60006040828403121561019f57600080fd5b604080519081016001600160401b03811182821017156101cf57634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146101e957600080fd5b60208201529392505050565b600181811c9082168061020957607f821691505b6020821081141561022a57634e487b7160e01b600052602260045260246000fd5b50919050565b61082b8061023f6000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780632c10a1591461008357806373b4522c146100965780637eea518c146100a957806383230757146100bc578063ab53f2c6146100d157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d6100913660046106a8565b6100f4565b61005d6100a43660046106a8565b61027e565b61005d6100b73660046106a8565b6103c4565b3480156100c857600080fd5b50600154610070565b3480156100dd57600080fd5b506100e6610510565b60405161007a9291906106c0565b610104600160005414600a6105ad565b61011e8135158061011757506001548235145b600b6105ad565b6000808055600280546101309061071d565b80601f016020809104026020016040519081016040528092919081815260200182805461015c9061071d565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610752565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516101f49291906107b8565b60405180910390a1610208341560086105ad565b8051610220906001600160a01b0316331460096105ad565b60408051602081019091526000815281516001600160a01b0316808252600260005543600155604080516020810192909252015b604051602081830303815290604052600290805190602001906102789291906105d2565b50505050565b61028e60036000541460116105ad565b6102a8813515806102a157506001548235145b60126105ad565b6000808055600280546102ba9061071d565b80601f01602080910402602001604051908101604052809291908181526020018280546102e69061071d565b80156103335780601f1061030857610100808354040283529160200191610333565b820191906000526020600020905b81548152906001019060200180831161031657829003601f168201915b505050505080602001905181019061034b9190610752565b90507f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c6338360405161037e9291906107b8565b60405180910390a16103923415600f6105ad565b80516103aa906001600160a01b0316331460106105ad565b600080805560018190556103c090600290610656565b5050565b6103d4600260005414600d6105ad565b6103ee813515806103e757506001548235145b600e6105ad565b6000808055600280546104009061071d565b80601f016020809104026020016040519081016040528092919081815260200182805461042c9061071d565b80156104795780601f1061044e57610100808354040283529160200191610479565b820191906000526020600020905b81548152906001019060200180831161045c57829003601f168201915b50505050508060200190518101906104919190610752565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516104c49291906107b8565b60405180910390a16104d83415600c6105ad565b60408051602081019091526000815281516001600160a01b031680825260036000554360015560408051602081019290925201610254565b6000606060005460028080546105259061071d565b80601f01602080910402602001604051908101604052809291908181526020018280546105519061071d565b801561059e5780601f106105735761010080835404028352916020019161059e565b820191906000526020600020905b81548152906001019060200180831161058157829003601f168201915b50505050509050915091509091565b816103c05760405163100960cb60e01b81526004810182905260240160405180910390fd5b8280546105de9061071d565b90600052602060002090601f0160209004810192826106005760008555610646565b82601f1061061957805160ff1916838001178555610646565b82800160010185558215610646579182015b8281111561064657825182559160200191906001019061062b565b50610652929150610693565b5090565b5080546106629061071d565b6000825580601f10610672575050565b601f0160209004906000526020600020908101906106909190610693565b50565b5b808211156106525760008155600101610694565b6000604082840312156106ba57600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156106f4578581018301518582016060015282016106d8565b81811115610706576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061073157607f821691505b602082108114156106ba57634e487b7160e01b600052602260045260246000fd5b60006020828403121561076457600080fd5b6040516020810181811067ffffffffffffffff8211171561079557634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b03811681146107af57600080fd5b81529392505050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146107e657600080fd5b8060408501525050939250505056fea264697066735822122056e3f3e164b9d35fdbce4963db7cd26b500060d7b0d5ceeddfa3c353f06c0ccd64736f6c634300080c0033`,
  BytecodeLen: 2666,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:25:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:28:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:31:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:34:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Bob": Bob,
  "Dealer": Dealer
  };
export const _APIs = {
  };
