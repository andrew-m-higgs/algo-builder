import algosdk, { SuggestedParams } from "algosdk";

export const txObject = {
	name: "Transaction",
	tag: new Uint8Array(0),
	from: {
		publicKey: new Uint8Array(0),
		checksum: new Uint8Array(0),
	},
	note: new Uint8Array(0),
	assetTotal: 10000,
	assetDecimals: 0,
	assetDefaultFrozen: false,
	assetUnitName: "SLV",
	assetName: "silver-1",
	assetURL: "url",
	assetMetadataHash: new Uint8Array(0),
	type: "acfg",
	flatFee: false,
	genesisHash: new Uint8Array(0),
	fee: 267000,
	firstRound: 2,
	lastRound: 100,
	genesisID: "testnet-v1.0",
	appArgs: [],
	lease: new Uint8Array(0),
	group: undefined,
};

const account = algosdk.generateAccount();
const addr = algosdk.decodeAddress(account.addr);

// MOCK Algorand Encoded Transaction
export const encodedTxnObject: algosdk.EncodedTransaction = {
	snd: Buffer.from(addr.publicKey),
	rcv: Buffer.from(addr.publicKey),
	arcv: Buffer.from(addr.publicKey),
	fee: 1000,
	amt: 20200,
	aamt: 100,
	fv: 258820,
	lv: 259820,
	note: Buffer.from("Note"),
	gen: "default-v1",
	gh: Buffer.from("default-v1"),
	lx: Buffer.from(""),
	aclose: Buffer.from(addr.publicKey),
	close: Buffer.from(addr.publicKey),
	votekey: Buffer.from("voteKey"),
	selkey: Buffer.from("selectionKey"),
	votefst: 123,
	votelst: 345,
	votekd: 1234,
	xaid: 1101,
	caid: 101,
	apar: {
		t: 10,
		dc: 0,
		df: false,
		m: Buffer.from(addr.publicKey),
		r: Buffer.from(addr.publicKey),
		f: Buffer.from(addr.publicKey),
		c: Buffer.from(addr.publicKey),
		un: "tst",
		an: "testcoin",
		au: "testURL",
		am: Buffer.from("test-hash"),
	},
	fadd: Buffer.from(addr.publicKey),
	faid: 202,
	afrz: false,
	apid: 1828,
	apan: 0,
	apap: Buffer.from("approval"),
	apsu: Buffer.from("clear"),
	apaa: [Buffer.from("arg1"), Buffer.from("arg2")],
	apat: [],
	apfa: [1828, 1002, 1003],
	apas: [2001, 2002, 2003],
	type: "pay",
	apls: {
		nui: 1,
		nbs: 2,
	},
	apgs: {
		nui: 3,
		nbs: 4,
	},
	rekey: Buffer.from(addr.publicKey),
	grp: Buffer.from("group"),
	apep: 1,
	nonpart: true,
};

export const mockSuggestedParam: SuggestedParams = {
	flatFee: false,
	fee: 100,
	firstRound: 2,
	lastRound: 100,
	genesisID: "testnet-v1.0",
	genesisHash: "SGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9/cOUJOiI=",
};