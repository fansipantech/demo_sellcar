'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e555de41818d2ab4819062a524648abf",
"index.html": "cdd5dc7fe458ed659d04b0001eeeb725",
"/": "cdd5dc7fe458ed659d04b0001eeeb725",
"main.dart.js": "44d8e4b31babb9e01d9a75996727950e",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "48f614e211b7fbc479d6d62f0caf9b1d",
".git/config": "b722d9364c91061a21833affc0125bc2",
".git/objects/0d/6400362ce4dd3184d11e09f28acf4c86c39297": "5999c95c7302c203b9a98cb10022d7b3",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0c/02ff195368ee9ee5b88c406bc796586cc30462": "f8f9fdb03f1cc78b9de801e9dceac906",
".git/objects/66/4e1b2f9dbafbf6280305123d2df7fa0c66cee9": "7cfe0127e26e3bdcf50529787ff8121c",
".git/objects/3e/f9ce8d8b708d6932ee39ea5eb8f09a7a10b631": "ead7617e312dd9a41f1009868f2b4d81",
".git/objects/3e/6e2e76134cd6040a49ccf9961d302f7d139fcd": "a81b3a6f66d086a16bca84e5cf9cf580",
".git/objects/57/da78c314d5418e7b4526883621ef58ef5a4080": "0fee39c518b9a6edab0ae04b7006de65",
".git/objects/03/c4917a50d255799763ae9a5ba48fe6eed3ad2e": "185299c687555b91f60aefda92ea92a5",
".git/objects/9e/be407885826e9149a950631f1b89629a003318": "b9019c0ecee6bcadbafc311dfae75c3f",
".git/objects/3c/0b44a6a8d4fb3eb61706f945698f20192ecd83": "8621bf1bc131b0631a4a88341a4ed023",
".git/objects/51/90c54b40fccc287fd222cfb34f3fbb40db8e61": "89f018155d854e27dbd4281662f0b746",
".git/objects/94/24d351b2588024ad277e74ad3d9bc4059960ba": "79ecbb318fcede4b4432d0233f44fe2e",
".git/objects/60/7dd6998c1c5fae48a146166544fc695b9a42fd": "e139e56d6864e7f3e5aef9f42a1c34ac",
".git/objects/5a/4828221a2c69fa35f3f1e94b968bf7bb783f9c": "a982dac20fd7589c7df736840528d965",
".git/objects/5a/725daa07f7e6ba1edf5b4395277228703db4aa": "9148928f8a8d69db8bb5d0801db83aea",
".git/objects/5f/00fecdd08be82900b857e1ce6a0d570df1923f": "24fd204e9b4593caea6bff9f3e972b7b",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/bb/8e98411a5c9fff373222c4a1425953a72c98d0": "b3baf6b5884f1691fd82895e766d2494",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/df/f5df8fd3c1f54ef28c55ad57c701162c1626c4": "ddd065d51f5a014de90a93d21404130d",
".git/objects/a5/e3b4efb4c43c2366d73b23538fc34a6aa494cb": "f50d6afaff960067e843f280f16ba81f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/e3be7d178a5bebd00ac121f7e1d1570071275f": "7191899b47c9cbaa65f0d1efa2cb664a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/380916fcf96f902f175ef5b7da62856944d09f": "cd1ad1e6abe03dd421e1509c994f6995",
".git/objects/f3/82c6874359c1e98bdc2a2ecd1d141e8f1cc15e": "68a9875be7e041603a94bc21c84f9e7e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/ea3bb72c363624979e4d00457414e7ecefbfbb": "10fd3c4d4280dc8ece512d374bb9591f",
".git/objects/c7/a5ed020f768f303e5d1b237cb837ca9ec9e86c": "7458be4c5c3dd6ef0e02fe6a8a52c098",
".git/objects/c7/78da6828bbe8bc1b40682ddb5f8fe7c9514be8": "dab9dcb4b3bdf975bbfd175c2f254d3d",
".git/objects/c0/17a67d5798a4275de0b2c3277e087dfbe0b19e": "8d0203793944aaaab041b97ce7018902",
".git/objects/fd/8c796505b27c36645533f02ad9854f705c78c2": "ec48fd2041d435a8f52ac95353b045e3",
".git/objects/fd/788598397de6175cc0f799206f6230a95b86bb": "22dc037ccefc360e6e6d5d69c2652a71",
".git/objects/f5/4e2e5db5cf94fdffaa5e9b78d7f5d8fb174c14": "07dd0ff46ebb7eda2bdc11bc61073533",
".git/objects/e4/ee88023501bfd70255cb3c60352bb0a8a6fb27": "7188959312fad3977c80d71e7948788a",
".git/objects/fb/addc0fd04705195270d6c02b139e2efa46335d": "1a7b366b54ac23848d28b19447dbc914",
".git/objects/c1/863af30be5618147a00cb6a58703a8a11fcd26": "0caee3d3bc2b073c034ee8a1640484db",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/20/5d8595e262b7e795111ad5bba96e4305b56e76": "d2742fc4e27c6223b5b713f9f6cad2e5",
".git/objects/4b/a20fd142219abf9c14a4c57875a2342726e68e": "aec37b7584747453386b8c4121c1d4f5",
".git/objects/4b/ae59adf94db08ea81b76b47b9e4fe0d54aa6c9": "5a44f46d4a3c379471ada09ce8e5074a",
".git/objects/11/8d9110c0722cf63278a8f9e6478ba8ab4c154b": "1d0c8cab0ac60c323b6a86037b9007ba",
".git/objects/29/fa4512f21b61564761df5585a11be1cc985476": "decc5e942c917e8ed7ad81ac82d3f283",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/42/29138b24b0989c9d53fbd82a431da9bc9f9139": "5bc05274ec8b1bfdf8ed7724785252e7",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/7b/5e07b26f4f3d039f309ea38ff42d85dabec910": "bf726f31540bccfb5c5024e41ce42874",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/cdb7c6585e3c86b208957eab0ef53394614171": "a5947d8ca9926d5513b392e4495b4e8d",
".git/objects/19/d9a286eae7a1119dc88d75b9bf35c75741e915": "8c85c5d796389afbe566cee9fc4d68e0",
".git/objects/26/dd5910072f8fa10a62599112367942fde0fbd0": "0231ad171447e88851d8aebe7f967ea8",
".git/objects/21/15f4d93bfa5b4e040c502f6b26b25178c03866": "30e57f5a52ed7ed25f0156c1e5e978e3",
".git/objects/21/e618ef3f299b85c12943c7fc8cd4905481df27": "a7a0e62f28795f8ff33395b7eee6ac73",
".git/objects/75/0cbbec87137359f4f468a12e6dbdc5a86998ca": "f41b4dc09012d6d12f3f96fbb221a21e",
".git/objects/81/680896240c46b66ce106de813304b5bd83d069": "a802c5438ca35da9590ce569ab0f0d27",
".git/objects/86/7fb1933541b6af2ee563bbed13e938bb5bfc50": "27b10415f1019dcbfc950fb68b9d2448",
".git/objects/72/e81fb9a816ecefda12b2438f6d8e46a3660365": "90da67c8169acc2cd22a5051a6dbac29",
".git/objects/43/dc2d5c2a9423c0800418c9d4fe6f47744728ab": "e2aa7e2c6c3eeeb643e142990bd27603",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/61bfff0624c8671c061b0c57b588e25e94043e": "722e2ce6e45ba1918e9eab9af21484b0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/6284c22ed448e8a174d90b61f34d9497314fd0": "bd27c1db2643a2329335b227bbd4e24d",
".git/objects/5d/8c40c15b032e49f092e6f32b7f2af94d0bbfa5": "4c07932e2404bcf30ba1a5a8b168adb4",
".git/objects/62/f40678e2f84ff51ef95275fde41f305196bd72": "e9dd85ce2460515a731b01f82dabc179",
".git/objects/3a/be4a2677e9e0b91b8d88024e3b06aa4be06198": "668f6e8522f14b79ffdc2d4809d64a06",
".git/objects/5e/ed9d2cb50b3f05f02de8bd6ae1516a6e893d92": "bf2675d3b048106ca464b2f7a85ace77",
".git/objects/6c/0deaed292d7a1a273fe142dd3360f63010d21d": "6903d238da59974969443249e5ccf674",
".git/objects/39/3a7306551890238b715c3130cee2feb1ddfbb3": "52b4cc3fa44799167d4fc73f814782ee",
".git/objects/52/80481ab0c8a0e66c821de200afc7009fb4374c": "e4ca92249f98633860275cbd0829e049",
".git/objects/52/c577be777f6b0f700e6ae750694c3c01283d52": "40437c02fd62e2798cba45c29f301625",
".git/objects/97/0cc796538d5b3e6f3774fdb2593474568893bd": "8431ef8623319dbb3470ef31ecb3aafb",
".git/objects/0a/8a32332fe23f8a6c6ad314a0780855918dfa17": "3119c0318a3d8b3959ba6ccad8fa2885",
".git/objects/64/6b9a7f8a2fcea1511231d230e524852bc7b694": "7111c62a60b55094f52b686b89b018a2",
".git/objects/90/9ee83318e653edc51efa9ed1ea80b106e5a112": "4ee6c3b74a5dedcd110b4d43b11e65af",
".git/objects/d4/82c608813534887cffd8c3ee374af57d8e7184": "2991edd3088a4a549f392fd8a1ba3080",
".git/objects/a0/a7237d94da7fd96951f1fe973385f60cfd75a5": "9c7e595f90618da9a63182fb92f57709",
".git/objects/a7/e38d06e461a86a7ccb02e107c86b79414ebcfc": "12bdec894c317e58fd7edeafb006bc3e",
".git/objects/dc/662358458903e0464b64956cf513cae78d9788": "72edc6bf81d8eb6035f82d8352696e7b",
".git/objects/d2/6fa205d3d2636d9e9477f1259b732e8a137f69": "86491fb3552582efaf7f062a0cb86828",
".git/objects/d2/62d1446fbd94ecfbedcf4573d8fddbb09f9fe2": "307256e3dde8311d83289f058e75e3b4",
".git/objects/aa/f374d2cc000c058f434f43c3b53bcaf315e2a0": "ec68fefc566fa48e7b61db82b01b9fd9",
".git/objects/aa/00de0ef929483ea17fbe5f3fef66de45ed724b": "34dc541fbd0f92bd110f229af01385ed",
".git/objects/af/b0dadc34ccc8caf19f009faf14d7b0b3462896": "18d41fb4fa730884050640e18255a151",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/f5dde76e4c4d0f01a6c9d44e075b982acfb3df": "25f3424585f783a66a2d0c3ef69c0a43",
".git/objects/db/e00e75b2f297d9031d08efe53a674150d66200": "58d61429466d58c47c5c99bca3d76bce",
".git/objects/db/b0014032ac88e4db19069ebe93a580ac370f2b": "ec9deebdd7900e13a96b8352c93db2b4",
".git/objects/a8/67b0d264f6651e22abc4dc44c9c933f762c05c": "ff284698be9ae5c73affcb88980e9618",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b0/8eb0def1eaa11feed68dcaf75b0754032a77a2": "de8e7d0ce544e9caed0e7f6b0251ef1a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ea/6b2d258f1ff5701c29a3d40757aa1fb4c5794a": "8edaf812dc40af5547e989da298f46bc",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/f6/9294b4048c440cdac7b736fdcd01abfe39cb55": "44bb6d080aef2a2bed828f31125ea82b",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/f1/b4857bf0736f5235bbb71a681ac444466d2cb3": "fbb41c9f44a9b8ee5e4fbf9dd0fbbfdf",
".git/objects/ce/b104a21c555f30d2114109426502cd0cc73a43": "d95f5ce39ed89b2d3f666169aba1d36f",
".git/objects/e0/971866e5a096c3a6ff41bca7fb57a7a36670f9": "47d4ee8c3ef4db0a6799871160252dcf",
".git/objects/46/65a4da881366b9d4d9c1f003183344c455b69a": "19eb96008a21ba0e40955a5167f83670",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/282480993789c0012404132ac68e9064a9a321": "067bccfd21fa5d370fd7d1ba062a7be6",
".git/objects/1b/17c883417edbdc93adc62ea264f9c6808a6cd8": "e9c383bb61c178c4595995c03fcdf28d",
".git/objects/1e/09014f16911c87fe2ff33d83b80c3caae2c6a5": "a347fb430273a4c6ad6eda274095a339",
".git/objects/4a/9b2b79a2048347f310c1a484dae01dba6409c1": "e2be894395d933bfb7c94eca07d13ed5",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/23/1660e3ed392c6e914d754c6ce9c9a4ca918c0a": "dc0c70eeae01fe61c5f62624373c40bf",
".git/objects/4f/d051bf84baef0e83250d190884cd32ee9cab46": "a045a92ffb421bec7550cc453754f55f",
".git/objects/85/8ca8dc62dc8c080bc73910826ec8d1640b3639": "2d5e0a1ef81c46405bb7f53a2166f4c6",
".git/objects/76/19588d6d414090f415fc89d5cd0696c2fc4fd6": "6db6982b3d5958613f94941dbaf8ff4f",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/47/aca5bc5b50938c01f641b5ca7cb3614b163eff": "3758ef7ee353f6f214ad3ab2123ea914",
".git/objects/47/46f8f0cea87865010de4ae91b1370c8f9421cb": "e5517dd7d29ebccfe632ecc8d85002d6",
".git/objects/78/fde58cab1f77eb63b8717c94967dfab0ed32fa": "c0a9a55464459bd8d9125dd211252205",
".git/objects/8b/e27a6abe6c248d8fcc1c2dd361c90aff7c8374": "51caad732fa3ff26bb3658fb9c112652",
".git/objects/14/8494e420ff7afc1068ac4d1232dca583418487": "492f87f69d03d92988167216f382e7cb",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7d1346cf4a957c1d512edd907797070f",
".git/logs/refs/heads/master": "7d1346cf4a957c1d512edd907797070f",
".git/logs/refs/remotes/origin/master": "b6eb145ed6e2af31e60bd81081c70557",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "77330a4d6d317c3521ba113887215728",
".git/refs/remotes/origin/master": "77330a4d6d317c3521ba113887215728",
".git/index": "2a3bf1798cff78e68b0a078a70e27a5c",
".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
"assets/l10n/en.json": "74c2fa0b52fe23c940ed1a19c59b332d",
"assets/l10n/vi.json": "e4572c839757ca508256320db2966193",
"assets/AssetManifest.json": "41c99e470f051b56286fe3fbe98ce483",
"assets/NOTICES": "435117eb1632b27a093cdbaddea84a3e",
"assets/FontManifest.json": "cbbff3b64882bab747f3b114bb104cb6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/we-help.jpg": "ffeeac6abc3980f9619010f71ff13cbe",
"assets/assets/images/no_valuation.png": "f8ff9faf2111ad0fe145076937c3e7a6",
"assets/assets/images/step-4.png": "ff61972f2d5c7de0656e143a9369c0fc",
"assets/assets/images/why-choose-us.png": "1885f9db56a9ed95eecddd975421816d",
"assets/assets/images/ic-sell-confirmed.png": "5ee77e75d354709fb754de1c40a787e4",
"assets/assets/images/step-1.png": "70aa7f1901c17d45d135d315ce19d53a",
"assets/assets/images/step-3.png": "9ffe2e9a373017d067e1dbb633153d2b",
"assets/assets/images/step-2.png": "a811428424f2eac21d1c59966ef027f6",
"assets/assets/images/2.0x/ic-sell-confirmed.png": "256b0eb195275ee11ae14ecfc6d07a6c",
"assets/assets/images/2.0x/agent-step-1.png": "600fdba3819e668b6a1ecb88d7a608f4",
"assets/assets/images/2.0x/agent-step-2.png": "c1df672122b0e373f89bc647daa816c7",
"assets/assets/images/2.0x/agent-step-3.png": "87b1b48bd3933f40d26d5925fba40927",
"assets/assets/images/2.0x/hero-bg-person.png": "de9fdf1c5ddc14ce3d9155ede1fd9c6c",
"assets/assets/images/step.png": "a1ec56ff2521b92c8627d47534a2362d",
"assets/assets/images/agent-step-1.png": "c4e7a41fa266d261af3becc16501e73a",
"assets/assets/images/agent-step-2.png": "23714203828f958cd7605c3e83bafa68",
"assets/assets/images/3.0x/ic-sell-confirmed.png": "072cec8ac6fdaf9be4b0ab3b3c5a519b",
"assets/assets/images/3.0x/agent-step-1.png": "e658a13f609476cd29d264b16aebc617",
"assets/assets/images/3.0x/agent-step-2.png": "1b7c3a390360a73502878e65c34e37b7",
"assets/assets/images/3.0x/agent-step-3.png": "4e8db278d223fb6d70179bb34120a293",
"assets/assets/images/agent-step-3.png": "82ca4f3403fdf9b157eba3d62a2f70b2",
"assets/assets/images/google-play-badge-en.png": "5eef224c1abc29a8577f5b8b52480b43",
"assets/assets/images/hero-bg-person.png": "4766cceeeba4d21194335afc03e7d316",
"assets/assets/images/agent-bg-banner.png": "ec43e6a4df856043535ff46d3db9ca40",
"assets/assets/images/google-play-badge.png": "fcb5d5a2ea550ab163756e6e635c64e8",
"assets/assets/images/cta-bg.png": "6a2dd513d8e2cd3cf4810036d0b0eec2",
"assets/assets/images/android-device-frame.png": "4fa76e47c64549d0485549dfc785a2cd",
"assets/assets/images/logo-c.png": "003f2c9e32bf7bba63604892cb936014",
"assets/assets/images/300169147_3138818016372430_1702982527093651096_n.png": "b80a620a6e2ce4452ec5e10eae6f3e50",
"assets/assets/images/app-gallery-badge.png": "aef9bedf2d36fe6532ecd812938eb5ca",
"assets/assets/images/hand-app.png": "043d3f6798929e0dcdb096175e6dcfe5",
"assets/assets/images/app-store-badge.png": "59e042620c86e1d916e0e4331ebb8408",
"assets/assets/icons/ic-5-star.svg": "c9b591caf629472e84f700437df69496",
"assets/assets/icons/ic-value-car-2.svg": "fddc21f01f092e5c2ac7edbbe533b92e",
"assets/assets/icons/ic-value-car-1.svg": "03aee2696332d903c455d17d1920447c",
"assets/assets/icons/ic-get-highest-offer-small.svg": "717bb0a2a0b54080c94bc31bb0d682b0",
"assets/assets/icons/step.svg": "0dccef365011ba39cdba7abb48fe26b6",
"assets/assets/icons/ic-car-spare-keys.svg": "6b3b6f80ead5aafbb041bd129c69a5d0",
"assets/assets/icons/ic-car-bookmark.svg": "ff71a19a5dec9d849f9a9911013d9dbd",
"assets/assets/icons/dot.svg": "a6c4ebf14447f276195495ee5b62c376",
"assets/assets/icons/ic-prev.svg": "6e0dad2d3cb6beb6198616821f597e11",
"assets/assets/icons/ic-profile-vehicle-small.svg": "83f8660682caeeb6e4b8a4bdc6866fb9",
"assets/assets/icons/completed-dot.svg": "a0c72908dc802f69e3744d96e0d1a607",
"assets/assets/icons/ic-car-register-card.svg": "8085e7237fadaf691ef92d620246e4b5",
"assets/assets/icons/ic-profile-vehicle-large.svg": "d4480cdeb0f512c4758aa9e394207f04",
"assets/assets/icons/ic-complete-the-save.svg": "a643662d79616f57cc31ea4ac682a9e9",
"assets/assets/icons/ic-next.svg": "6e0dad2d3cb6beb6198616821f597e11",
"assets/assets/icons/agent-number-2.svg": "263c43170176925a4c7bcdb6b715e8db",
"assets/assets/icons/agent-number-1.svg": "6c99ee2dc1dccc8e3c1635c608500d58",
"assets/assets/icons/ic-agree-reserve-price.svg": "e41b72e4966313129682d7712282fa45",
"assets/assets/icons/valuation_step1.svg": "db1e305278bd0856ac03aa7c30f6f788",
"assets/assets/icons/valuation_step2.svg": "40fbf4bbe4205563404257e5233b7bdd",
"assets/assets/icons/valuation_step3.svg": "f0b3cd2bef87274fd620b878b513d4ff",
"assets/assets/icons/ic-get-highest-offer.svg": "16b3ee3d138eb528fa854735e1d9a208",
"assets/assets/icons/agent-service-1.svg": "aeafcec4f6d074e3d1720c184dc38ace",
"assets/assets/icons/ic-whatnext-4.svg": "f0de92e71f72c70b2ea7cafc90549cad",
"assets/assets/icons/agent-service-2.svg": "511538df6cc399c2d53282a17cef2eb7",
"assets/assets/icons/ic-whatnext-3.svg": "ca8cb958c3c9d64a7710a3469d740ed8",
"assets/assets/icons/agent-benefit-1.svg": "c78d930b04fe65338aa6dcf290ad2374",
"assets/assets/icons/sell-car-bg.svg": "6263394f7f517171dd6a6ef997579878",
"assets/assets/icons/ic-whatnext-2.svg": "b4de8dfd5c821a7756a9730d056374b9",
"assets/assets/icons/agent-benefit-3.svg": "53052070575ae9b5327e4c13ae593464",
"assets/assets/icons/agent-benefit-2.svg": "dd08e52cd380daf7161c05a061953ec1",
"assets/assets/icons/ic-whatnext-1.svg": "e5620ef62f0ab963968fdd60c3151a21",
"assets/assets/fonts/Roboto-Medium.ttf": "99fc0816a09395454061301fefa42bf1",
"assets/assets/fonts/Roboto-Light.ttf": "e22062b3188c8199283ef2aa835d4653",
"assets/assets/fonts/Roboto-Regular.ttf": "54a91b0619ccf9373d525109268219dc",
"assets/assets/fonts/Roboto-Italic.ttf": "2991e14ab958afe393cf5815cd4e6915",
"assets/assets/fonts/Roboto-Bold.ttf": "afa7a91dadd77b23634a0fdf18c148f3",
"assets/assets/fonts/Roboto-Thin.ttf": "5ecbc99d1a81fed7dc71cb068ec0a74d",
"assets/assets/data/faq.json": "4a3131e2b59af03fd3761167e91260ec",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
