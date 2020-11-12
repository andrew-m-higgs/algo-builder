declare module 'algosdk' {
  /** Declaration file generated by dts-gen */

  class Algod {
    constructor (token: string, baseServer: string, port: number, headers?: object);

    status (): Promise<NodeStatus>;
  }

  class Algodv2 {
    // https://github.com/algorand/js-algorand-sdk/blob/develop/src/client/v2/algod/algod.js#L19
    constructor(token: string, baseServer: string, port: number, headers?: object);

    compile (source: string): Action<CompileOut>;
    status(): Action<any>;

    sendRawTransaction(rawSignedTxn: TxnBytes): Action<TxResult>
    getTransactionParams(): Action<SuggestedParams>
    pendingTransactionInformation(txId: string): Action<ConfirmedTxInfo>
    statusAfterBlock(lastround: number): Action<any>
    accountInformation(address: string): Action<AccountInfo>
  }

  export const OnApplicationComplete: {
    ClearStateOC: number;
    CloseOutOC: number;
    DeleteApplicationOC: number;
    NoOpOC: number;
    OptInOC: number;
    UpdateApplicationOC: number;
	};

	export namespace modelsv2 {
    function Account(...args: any[]): void;

    function Application(...args: any[]): void;

    function ApplicationLocalState(...args: any[]): void;

    function ApplicationParams(...args: any[]): void;

    function ApplicationStateSchema(...args: any[]): void;

    function Asset(...args: any[]): void;

    function AssetHolding(...args: any[]): void;

    function AssetParams(...args: any[]): void;

    function DryrunRequest(...args: any[]): void;

    function DryrunSource(...args: any[]): void;

    function TealKeyValue(...args: any[]): void;

    function TealValue(...args: any[]): void;

	}

 class Kmd {
    constructor(token: string, baseServer: string, port: number);

    versions(): Promise<any>;
    listWallets(): Promise<Wallets>;
    initWalletHandle(walletid: string, password: string): Promise<WalletHandle>
    listKeys(wallet_handle_token: string): Promise<Keys>;
    exportKey(wallet_handle_token: string, password: string, address: string): Promise<PrivKeyWrapper>
  }

  interface Wallets {
    wallets: WalletDetails[]
  }

  interface WalletDetails {
    driver_name: string,
    driver_version: number,
    id: string,
    mnemonic_ux: boolean,
    name: string,
    supported_txs: string[]
  }

  interface PrivKeyWrapper {
    private_key: Uint8Array
  }

  interface Keys {
    addresses: string[]
  }

  interface WalletHandle {
    wallet_handle_token: string
  }

  interface Account {
    addr: string
    sk: Uint8Array
  }

  interface CompileOut {
    hash: string
    result: string
  }

  // https://github.com/algorand/js-algorand-sdk/blob/develop/src/transaction.js
  interface Transaction {
    // fields copied from
    // https://github.com/algorand/js-algorand-sdk/blob/develop/src/transaction.js#L117
    from: ParsedAddress
    to: ParsedAddress
    fee: number
    amount: number
    firstRound: number
    lastRound: number
    note: string
    genesisID: string
    genesisHash: string
    lease: number

    closeRemainderTo: ParsedAddress
    voteKey: string
    selectionKey: string
    voteFirst: any
    voteLast: any
    voteKeyDilution: any

    assetIndex: number
    assetTotal: number
    assetDecimals: number
    assetDefaultFrozen: any
    assetManager: ParsedAddress
    assetReserve: ParsedAddress

    assetFreeze: ParsedAddress
    assetClawback: ParsedAddress
    assetUnitName: string
    assetName: string
    assetURL: string
    assetMetadataHash: string

    freezeAccount: string
    freezeState: any
    assetRevocationTarget: any

    appIndex: any
    appOnComplete: any
    appLocalInts: any
    appLocalByteSlices: any
    appGlobalInts: any
    appGlobalByteSlices: any

    appApprovalProgram: any
    appClearProgram: any
    appArgs: any
    appAccounts: any
    appForeignApps: any
    appForeignAssets: any
    type: any
    reKeyTo: string

    signTxn(sk: Uint8Array): TxnBytes
  }

  // args Program arguments as array of Uint8Array arrays
  type LogicSigArgs = Uint8Array[]

  interface Subsig {
    pk: string
    s: Uint8Array
  }

  interface MultiSig {
    subsig: Subsig[]
    thr: number
    v: number
  }

  interface MultiSigAccount {
    // array of base32 encoded addresses
    addrs: string[]
    thr: number
    v: number
  }

  class LogicSigBase {
    logic: Uint8Array
    // args Program arguments as array of Uint8Array arrays
    args: LogicSigArgs
    sig?: Object
    msig?: MultiSig
  }

  class LogicSig extends LogicSigBase {
    constructor(program: Uint8Array, args: LogicSigArgs);

    get_obj_for_encoding(): LogicSigBase;
    from_obj_for_encoding(encoded: LogicSigBase): LogicSig;

    // Performs signature verification
    verify(msg: Uint8Array): boolean
    // Compute hash of the logic sig program (that is the same as escrow account address) as string address
    address(): string;
    // Creates signature (if no msig provided) or multi signature otherwise
    sign(secretKey?: Uint8Array, msig?: MultiSigAccount): void;
    // Signs and appends a signature
    appendToMultisig(secretKey: Uint8Array): void;
    // signs and returns program signature, without appending it to this object
    signProgram(secretKey: Uint8Array): Uint8Array
    //
    singleSignMultisig(secretKey: Uint8Array, msig: MultiSig): [Uint8Array, number]
    // serializes and encodes the LogicSig
    toByte(): Uint8Array;
    // deserializes a LogicSig which was serialized using toByte()
    fromByte(encoded: Uint8Array): LogicSig;
  }

  interface TxSig {
    txID: string
    // blob representing signed transaction data (it's `txn.get_obj_for_encoding()`)
    blob: Uint8Array
  }

  export function Indexer (...args: any[]): any;

  export function algosToMicroalgos (algos: any): any;

  export function appendSignMultisigTransaction (multisigTxnBlob: any, { version, threshold, addrs }: any, sk: any): any;

  export function assignGroupID (txns: any, from: any): any;

  export function computeGroupID (txns: any): any;

  export function decodeObj (o: any): any;

  export function encodeObj (o: any): any;

  export function generateAccount (): Account;

  export function isValidAddress (addr: any): any;

  // Calls LogicSig.fromByte
  export function logicSigFromByte (encoded: Uint8Array): LogicSig;

  /**
   * tealSign creates a signature compatible with ed25519verify opcode from contract address
   * @param sk - uint8array with secret key
   * @param data - buffer with data to sign
   * @param contractAddress string representation of teal contract address (program hash)
   */
  export function tealSign(sk: Uint8Array, data: Uint8Array, contractAddress: string): Uint8Array;

  /**
   * tealSignFromProgram creates a signature compatible with ed25519verify opcode from raw program bytes
   * @param sk - uint8array with secret key
   * @param data - buffer with data to sign
   * @param program - buffer with teal program
   */
  function tealSignFromProgram(sk: Uint8Array, data: Uint8Array, program: Uint8Array): Uint8Array;

  export function makeApplicationClearStateTxn(from: string, suggestedParams: any, appIndex: number, appArgs?: Uint8Array[], accounts?: any, foreignApps?: any, foreignAssets?: any, note?: Uint8Array, lease?: Uint8Array, rekeyTo?: string): any;

	export function makeApplicationCloseOutTxn(from: string, suggestedParams: any, appIndex: number, appArgs?: Uint8Array[], accounts?: any, foreignApps?: any, foreignAssets?: any, note?: Uint8Array, lease?: Uint8Array, rekeyTo?: string): any;

	export function makeApplicationCreateTxn(from: string, suggestedParams: any, onComplete: number, approvalProgram: any, clearProgram: any, numLocalInts: any, numLocalByteSlices: any, numGlobalInts: any, numGlobalByteSlices: any, appArgs?: Uint8Array[], accounts?: any, foreignApps?: any, foreignAssets?: any, note?: Uint8Array, lease?: Uint8Array, rekeyTo?: string): any;

	export function makeApplicationDeleteTxn(from: string, suggestedParams: any, appIndex: number, appArgs?: Uint8Array[], accounts?: any, foreignApps?: any, foreignAssets?: any, note?: Uint8Array, lease?: Uint8Array, rekeyTo?: string): any;

	export function makeApplicationNoOpTxn(from: string, suggestedParams: any, appIndex: number, appArgs?: Uint8Array[], accounts?: any, foreignApps?: any, foreignAssets?: any, note?: Uint8Array, lease?: Uint8Array, rekeyTo?: string): any;

	export function makeApplicationOptInTxn(from: string, suggestedParams: any, appIndex: number, appArgs?: Uint8Array[], accounts?: any, foreignApps?: any, foreignAssets?: any, note?: Uint8Array, lease?: Uint8Array, rekeyTo?: string): any;

	export function makeApplicationUpdateTxn(from: string, suggestedParams: any, appIndex: number, approvalProgram: any, clearProgram: any, appArgs?: Uint8Array[], accounts?: Address[], foreignApps?: any, foreignAssets?: any, note?: Uint8Array, lease?: Uint8Array, rekeyTo?: Address): any;

  export function makeAssetConfigTxn (from: any, fee: any, firstRound: any, lastRound: any, note: any, genesisHash: any, genesisID: any, assetIndex: any, manager: any, reserve: any, freeze: any, clawback: any, strictEmptyAddressChecking: any): any;

  export function makeAssetConfigTxnWithSuggestedParams (from: any, note: any, assetIndex: any, manager: any, reserve: any, freeze: any, clawback: any, suggestedParams: any, strictEmptyAddressChecking: any): any;

  export function makeAssetCreateTxn (from: any, fee: any, firstRound: any, lastRound: any, note: any, genesisHash: any, genesisID: any, total: any, decimals: any, defaultFrozen: any, manager: any, reserve: any, freeze: any, clawback: any, unitName: any, assetName: any, assetURL: any, assetMetadataHash: any): any;

  export function makeAssetCreateTxnWithSuggestedParams(from: any, note: any, total: any, decimals: any, defaultFrozen: any, manager: any, reserve: any, freeze: any, clawback: any, unitName: any, assetName: any, assetURL: any, assetMetadataHash: any, suggestedParams: any): Transaction;

  export function makeAssetDestroyTxn (from: any, fee: any, firstRound: any, lastRound: any, note: any, genesisHash: any, genesisID: any, assetIndex: any): any;

  export function makeAssetDestroyTxnWithSuggestedParams (from: any, note: any, assetIndex: any, suggestedParams: any): any;

  export function makeAssetFreezeTxn (from: any, fee: any, firstRound: any, lastRound: any, note: any, genesisHash: any, genesisID: any, assetIndex: any, freezeTarget: any, freezeState: any): any;

  export function makeAssetFreezeTxnWithSuggestedParams (from: any, note: any, assetIndex: any, freezeTarget: any, freezeState: any, suggestedParams: any): any;

  export function makeAssetTransferTxn (from: any, to: any, closeRemainderTo: any, revocationTarget: any, fee: any, amount: any, firstRound: any, lastRound: any, note: any, genesisHash: any, genesisID: any, assetIndex: any): any;

  export function makeAssetTransferTxnWithSuggestedParams (from: any, to: any, closeRemainderTo: any, revocationTarget: any, amount: any, note: any, assetIndex: any, suggestedParams: any): any;

  export function makeKeyRegistrationTxn (from: any, fee: any, firstRound: any, lastRound: any, note: any, genesisHash: any, genesisID: any, voteKey: any, selectionKey: any, voteFirst: any, voteLast: any, voteKeyDilution: any): any;

  export function makeKeyRegistrationTxnWithSuggestedParams (from: any, note: any, voteKey: any, selectionKey: any, voteFirst: any, voteLast: any, voteKeyDilution: any, suggestedParams: any): any;

  export function makeLogicSig (program: Uint8Array, args: LogicSigArgs): LogicSig;

  export function makePaymentTxn (from: any, to: any, fee: any, amount: any, closeRemainderTo: any, firstRound: any, lastRound: any, note: any, genesisHash: any, genesisID: any): any;

  export function makePaymentTxnWithSuggestedParams (from: any, to: any, amount: any, closeRemainderTo: any, note: any, suggestedParams: any): any;

  export function masterDerivationKeyToMnemonic (mdk: any): string;

  export function mergeMultisigTransactions (multisigTxnBlobs: any): any;

  export function microalgosToAlgos (microalgos: any): any;

  export function mnemonicToMasterDerivationKey (mn: string): any;

  export function mnemonicToSecretKey (mn: string): Account;

  export function multisigAddress ({ version, threshold, addrs }: any): any;

  export function secretKeyToMnemonic (sk: Uint8Array): string;

  export function signBid (bid: any, sk: any): any;

  export function signBytes (bytes: any, sk: any): any;

  /**
   * signLogicSigTransaction takes  a raw transaction and a LogicSig object and returns a logicsig
   * transaction which is a blob representing a transaction and logicsig object.
   * @param {Object} dictionary containing constructor arguments for a transaction
   * @param {LogicSig} lsig logicsig object
   * @returns {TxSig} Object containing txID and blob representing signed transaction.
   * @throws error on failure
   */
  export function signLogicSigTransaction (txn: any, lsig: LogicSig): TxSig;

  /**
   * signLogicSigTransactionObject takes transaction.Transaction and a LogicSig object and returns a logicsig
   * transaction which is a blob representing a transaction and logicsig object.
   * @param {Object} txn transaction.Transaction
   * @param {LogicSig} lsig logicsig object
   * @returns {TxSig} Object containing txID and blob representing signed transaction.
   */
  export function signLogicSigTransactionObject (txn: Transaction, lsig: LogicSig): TxSig;

  export function signMultisigTransaction (txn: any, { version, threshold, addrs }: any, sk: any): any;

  export function signTransaction (txn: any, sk: any): any;

  export function tealSign(sk: any, data: any, contractAddress: any): any;

	export function tealSignFromProgram(sk: any, data: any, program: any): any;

  export function verifyBytes (bytes: any, signature: any, addr: any): any;

  export namespace ERROR_INVALID_MICROALGOS {
    const message: string;
    const name: string;
    const stack: string;

    function toString (): any;
  }

  export namespace ERROR_MULTISIG_BAD_SENDER {
    const message: string;
    const name: string;
    const stack: string;

    function toString (): any;
  }

  // *************************
  //     Support types

  class Action<T> {
    do (headers?: Record<string, unknown>): Promise<T>;
  }

  interface RequestError extends Error {
    statusCode?: number,
    text: string,
    body?: {
      message?: string
    }
    error?: Error
  }

  interface NodeStatus {
    catchpoint: string
    'catchpoint-acquired-blocks': number
    'catchpoint-processed-accounts': number
    'catchpoint-total-accounts': number
    'catchpoint-total-blocks': number
    'catchup-time': number
    'last-catchpoint': string
    'last-round': number
    'last-version': string
    'next-version': string
    'next-version-round': number
    'next-version-supported': boolean
    'stopped-at-unsupported-round': boolean
    'time-since-last-round': number
  }

  interface TxResult {
    txId: string
  }

  interface ConfirmedTxInfo {
    'confirmed-round': number
    "asset-index": number
    'application-index': number 
    'global-state-delta': string
    'local-state-delta': string
  }

  interface SuggestedParams {
    flatFee: boolean
    fee: number
    firstRound: number
    lastRound: number
    genesisID: string
    genesisHash: string
  }

  interface ParsedAddress {
    publicKey: string
  }

  interface Address {
    publicKey: Uint8Array
    checksum: Uint8Array
  }

  type TxnBytes = Uint8Array

  interface AccountAssetInfo {
    amount: number
    'asset-id': number
    creator: string
    'is-frozen': boolean
  }

  interface AccountInfo {
    address: string
    assets: AccountAssetInfo[]
    amount: number
    "amount-without-pending-rewards": number
    'pending-rewards': number
    'reward-base': number
    rewards: number
    round: number
    status: string
    'apps-local-state': any
    'apps-total-schema': any
    'created-apps': any
    'created-assets': any
  }

}
