'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c8583c9b4996a187e71028dde0b34066",
"version.json": "009c9e65172e010890f7f65fde438006",
"favicon.ico": "95427671d48bd16d116c11331ba53cf7",
"index.html": "9fb098b3837f0aa549d57569371799af",
"/": "9fb098b3837f0aa549d57569371799af",
"main.dart.js": "27209dae9dff0f26c1836322f944dec7",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"icons/favicon-16x16.png": "9dfb9fd3c6983d9ac1ec481cb3e50ca3",
"icons/android-chrome-192x192.png": "bcb86e34c5988ecd91d112e73d615cd4",
"icons/apple-touch-icon.png": "3ee9486c10d23518d524792079fcedaa",
"icons/android-chrome-512x512.png": "6f7c0e6f824706985c12651b16112a55",
"icons/favicon-32x32.png": "2266e9206f68d755a21f7ca520fb4a11",
"manifest.json": "477be8ffd3b93c7b966d99286d371dc4",
".git/config": "3e74c53c998e3ff61121c16e2c601a9d",
".git/objects/0d/2c14af91d7867e3ef4b4361b97d7271d4b339e": "abf13ee6a7fc39db982754be2308e950",
".git/objects/95/a9c1ef42f6f72f03cdc076bc96d81ec416723e": "3bca2ff420edc48798883292ac3f2122",
".git/objects/59/e7cf4c22480b6ce465b6fc84287089722c5059": "57a94773f0dad7924730ec3273cea22f",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/92/205f0424049a0ecd1c5e2bd2eff0cead8ac991": "97fdf6a9b5a10fbebd62cc0f0eb8a05e",
".git/objects/92/1113e68d6642d541e09028d39bba826d963072": "1931d480e18823aa4b2b7dd1db41f105",
".git/objects/92/ae4402a0dc57e68d2d774bf41d472034256ca8": "09b94d2b69c04ec75ae87257cf93b2d0",
".git/objects/0c/03a18424d216447bd7b3e0afd15b1a19c58cf8": "36271018b5c9eb150d37a326be8460b1",
".git/objects/68/04a4db732b794029ac25398e7ff9bce2983420": "666184c15b45cdb2694a4b18596bdb43",
".git/objects/57/ac669c6b9aa6d38f66535575dc2d8eecc848ab": "5d9cc6f96e8596ec9dcc739b0af7f523",
".git/objects/6f/7820813e431dd0845a14b05a4e8d0272b4bb8f": "3e21c833031604eb23884786c583f260",
".git/objects/9b/dbfb0313ec3b28481174257fdf9043ca29916c": "424e367bd1e01770cec6c476c2c52367",
".git/objects/6a/63b25c7a5d7cbc7f3a4e15b50456eff8a61207": "94dfc72f7c718cad89630ced7849d815",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/ec578328ab624e594127656692b831d418fc4f": "23e76702a896f1e36564cf7b54414d41",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/35/6e092a0a2b8f4ed967e833cca79eee716fa52c": "084e233bbb2373fb57118fd5e2a80636",
".git/objects/69/d235852fa2f855dd45fb7ad9bff33b1a6b4ea0": "d30b296421c481ad4d81187d8e69500a",
".git/objects/51/e873d037c6d2c0b253e8c3d244ad494e26f0ee": "8f4489cbd01527a4c24979204104fb90",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/67/4e3a3d0ed7ea6d2321f4886b93f9a12fe954df": "1d95432df9b23606dc2249ad915b5acb",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/05/50544fac8669335e0b292b7800a4f2d1757cc9": "3565472b4daf86d3d918ba2be84cea73",
".git/objects/9d/c38a6ad49a255df165310db25cb13b8039192d": "ae08a4a36c5160415f46f4c64b9bf0ce",
".git/objects/9c/a8320e5e0032f2cf200b188ffc8af569c3a590": "522c6f5e9e39d850086059757250fd31",
".git/objects/a3/9b0a936ff3e1d43fc7c35d792588e1cdade16f": "b96b8b7d021e88f7a2b2b1cb282677c9",
".git/objects/b2/8614d01d1b1e7b07607cff6d6b5516a17589ba": "70c5de6445a542eee0ca2327e5fefeb8",
".git/objects/b2/386f3c749a54fc60bca9cd4665c75b309a3c04": "cb6713dbd7184f7b5378f8bd4227cc0d",
".git/objects/ac/be1f86473860ee01dc0a7e2be0d66fa5c86422": "854c327d62ce8f4c6938466a86681705",
".git/objects/bb/913b410e3ce65419c8d6d0346760ebfbcb2b1d": "b42ab54cbe9b27b59c81bb6904b02d3d",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/d1/9039159d0f15a263ff90b72d790761a23fb228": "e94885092823f0696420f778ad47f7e9",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/e2/cdb7fec99ad80887d2a9b81b6e0b8a7c37ef57": "76773b7d33213a1a7a98da1cc7137cd5",
".git/objects/e2/1eae51efb304ee001a6c684805cf6a98b8d6e9": "60520d4c729b09e69c2945953d6dac4c",
".git/objects/f3/e082649873a8486af1d2b36bac0f7974f8ff75": "018b3930d2c4455759a4b220cebd2e4e",
".git/objects/eb/0f570c94d517aa2160ddc589ca76491a667c67": "3cf4f31d91b6b02d12e4ee429d7431fc",
".git/objects/eb/c034b6c87a9ae2ef643da8ef5d24e1b111ad37": "db51290b7e47e3d5d553d72c7382a2d7",
".git/objects/eb/fa2df1f892b5a0c0e0ffd610c26b5407ea1e53": "f48d0fb85ff25f2e2e8ad472918e9c0a",
".git/objects/c7/03dd3b2eca0a40cbdc4af7f60b7a54bb8eb247": "89900ad3b30bc75e84ac7530e3e98820",
".git/objects/c7/f1154668ff04eee08c5ccf5d87cd89055af5cf": "29525dd0725d089388c0aee7d1185a46",
".git/objects/c0/344f999ec269dfa86c0ebf8536bae5c87b9652": "2436e10c3a69a781fb3c67e2d4266c70",
".git/objects/c0/76526dc440b6f02f3d1682fc83126774a5e260": "937119c82fcb0ca451c93bbfc7d74dcc",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/ca6f7a532412477255fb07977a765fd0f74e79": "93c13bf253ff23cfa58aa267e7228dd6",
".git/objects/f5/ee21688aee73bfbc1f0aab03ebfc3f7992f513": "d065f82990cc5da6e97f5ebc69f86cef",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/cf/f388d308b1068443a16cc6f2eae611e732299d": "e9bb63126ffd6d1bd3df29aaeba1bbbf",
".git/objects/ca/bd45a5773af6959b5312bf4597f2697c065cca": "0f1d4562ae4dc699ad3aeda31b663518",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/7d/7495627fc5b317a3ae3213e49520ea1e84bab1": "60a2dad0c2c2a747f14971b7cb0a9d18",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/89/d982c66477bdf5d3f8a3451daaa8e2978ba5f7": "34a4180f7545ed0260c9cf6f0f426090",
".git/objects/45/417f26dd3edbe88d6a76fad386841713560542": "b75488cf4fadf4e5f2cd07d98f1664d6",
".git/objects/45/5c83cef2409eeb90da9dcb184738ef1d1e4955": "bfb79ef17fc54f61ff3a00d3859c5056",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/1a/20e2311ed810801947081370a9fd4b1a726bfc": "6605d06783a062b818189b0784d33ec1",
".git/objects/7b/13764d4bcc2c6c53b892bf8352089114eff2ed": "6923ede574e0f6e758150f3afaa6156d",
".git/objects/10/a59a6f23cbd3bf521795634b57c2c78cc81731": "cf0161867b77a31fbbf0765558899666",
".git/objects/4d/8f15ce6b37e5cda99510efb829c3aa29ba015a": "7056966cee0c427ea34867946dc3702e",
".git/objects/75/cf9c4bec30a2c6bda17375da96197f93aaef53": "dcec32d443efb7651102e2996207f63c",
".git/objects/81/b2ae961bdfd1c8ca2de2525db23729304795ac": "9a3f863d7c7aa9fdde4c7f46af07f3c0",
".git/objects/86/2cb37e406218bb6ce81693378cdf14d0194e83": "59a9a7818911d070aed2876cf3d413f2",
".git/objects/86/9ac82e22dbd3c0e9270d7f466fb9c89cf45b66": "23e3ecc4964275afa758fea3fbc5a620",
".git/objects/72/bfcaf8682e112a78777a176f063319e7d9f747": "e01c210bb518b27073bf21d6a02057f7",
".git/objects/2f/ec2ef9f1eecd4c602a8474635d0db2b4a8d4c0": "302a587117a33f8ed2ec565b07723c2b",
".git/objects/43/e4bb4b2a2d188a111e9aac0fc8ac7741597790": "6227d2024c7f15d3045e40839c81bc93",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/9f/f75d17641ca9b6d7bce03461d5f2021cd1f5ff": "3e4e8bae9d8d65d32d4eca499da00096",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6b/1c338da974cd4a8068e970c66611f66f6441a9": "4fb2463ec63d30f03eb324cc72f5cf91",
".git/objects/38/3411df8c422115962e77db73201cbdf589e699": "f9e1dea9b750e42853a4b9a6762142db",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/36/07db5b1e7fcb8bd672c549dba3f74c2d1c5a47": "a2ffceed064527ec8d3d4e2866b09503",
".git/objects/5c/fe34ca0536caecbcf017f012c5bff118b99de1": "e067430f73ac19c179845a010b12ad47",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/09/e1cdae2fd8ab6cb8001be1d57b63859d9022b7": "d218e809c6ad0ae78ce836c865e45e5c",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/5d/bcf6bd6cc3f2bc098c31e58c28adfb737dd976": "0e7fabfb064aac7a9d1226a6fd10cbd3",
".git/objects/31/3cb7ba327eedf9583aab8484e6b86e00e7c1fd": "eda7d5c572722abbaf3d796e5e5ee577",
".git/objects/3a/ccc576d32fa3a5c867f69db2abf96c1c9c8104": "210e895b0d53149620c76bd20dac5eac",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/06/a1964331f3b6fdef5a21ff7ba54a0db036ee23": "3a113f73928f6eff9ad532b88b0ceffe",
".git/objects/52/a11d57dfd5541453100937db06e85c3aa16d5c": "8c1e6cbce1d186752bc2e0c794f8788c",
".git/objects/52/5d88f8a855fd2fcd2f072f24ac7317f20d8d36": "595ccad93bfe1c20e2fd3aecf542bdff",
".git/objects/52/55c5542fde7f91a08fd9175067f1e52aecb5dd": "39e3771f443d41de44fc8a11a30fbee2",
".git/objects/52/caff6e3aca899efe3da25e2e1dc4677ca563ec": "0c8a3332ee726c623d23b568a10b4bc6",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/97/1082e3f1dacdb05b4129d982e6f7bf4a706b11": "eea36377cfd8fbac9d89f6685e97a1b5",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d3/448a97fb87a42c40016ffa13e43ccc7e100254": "08a9a43147a1fd77c2ceb4255f77d96c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/a86c471bfe8fb12295d95f8ef1ae23b9c3daf8": "e580a118eb8c2be8639ce8d500f6039c",
".git/objects/b1/69c3e6a415eb44baab465c0a59d9f60fa908d1": "af475f86a5900133a1bbe29b5c06f714",
".git/objects/b1/e7cfb3350acbc8ef204034c1aadb7e860800df": "4451c688114ec7c16ed2a50f56e841dc",
".git/objects/dc/5abc891c27a65e83d6fcccaeeea406060557f0": "83a5db06c7a1d1fea48ac4ef7501b22c",
".git/objects/a9/fc019e367dd306d96423f53f65b3097568a9b3": "adac3fea8daceffabb2165bbbaf7e85f",
".git/objects/a9/8ddcdcc16ffc0532cc050965dd51df513d0f60": "fff64bc40feaf22a0a1ec74dd9c04ae1",
".git/objects/aa/cd525dc1f0b31279de4506e20b44dd35d5ccbf": "8682f76b789b32b2c318952466ae8274",
".git/objects/af/3223aa525478f112a22b9f6be990031261325d": "3815c9a436edc491d1cf37296b9f69f5",
".git/objects/b7/c80c0442b5971826c04b48e1a5cf66bc89a1bb": "8ca4316b0812d88a2de6b12c9f4cff7e",
".git/objects/a6/6ba7dab5cec00ecd5f4404e6ff2bf455342e84": "c69b0e7dfb1dbd0102f5d9e2fec4cb21",
".git/objects/a6/5492a34b3a738cfe7b91b7e4a46a93c270f5c9": "d8bb91794e57f30781e286fa9faeb261",
".git/objects/c3/0a52ec307942a39e588560b526256b1b50ec44": "07cde0ebb9b30cc7fb372159b048160f",
".git/objects/c3/d7f9ef0b4dc684ac23514867c088dc2cccac9d": "41ea2701ee47bb33e3dbd5b28528824a",
".git/objects/c4/7e3ca5a491bc71c3fd7d2644b5db1f874d39d6": "786b29107bd99d3278b93043918c1d77",
".git/objects/c4/bd8227d5c88c043e71e066740385202cd30977": "a5e1c07b67f185732ba7d0a3c2f250f1",
".git/objects/cc/3da173074edb1f5c5d4a500811a46b0278dc0c": "02ad2d07c8df1e0223a8127c1448da67",
".git/objects/e6/6c3a78ccdb7d79de17de578447cacb802cca7b": "2e39a8b27422c5b6ec30150c4f3bba77",
".git/objects/e8/9bd030cb81a4955a375a392d58684fb12f0125": "55da2f93f3db21ef8ef4b8692c5c0eb3",
".git/objects/fa/f8dd7104c8b48547f7102eca2f3ee2f4259a19": "8a8bd9a3b06f522323f91e62e307d70a",
".git/objects/e9/f7463b81d0ad945ef7e1ef8cd0cf43dd100b82": "b49e9fb96256bb8e1ae1639928f6445a",
".git/objects/f1/795716431e4a2d2b1826eba32d4401dc3c1591": "23af69d54d62783fd27b352c90e9657f",
".git/objects/cb/6ec96196543f74f3444aedf48385200feb684a": "b43aaf0b8bcdfebca3ee3a4b8704b63c",
".git/objects/f8/743cbe56da29b3804abd753a75009bbd9ceb6d": "aff8bd66496eeb369e417bae30d1ff0e",
".git/objects/f8/f4d26425fcefa8ce579c87a42b94a56f82b235": "fcf2ce56b0c226bea96d6a435760bcc5",
".git/objects/ce/1bdc1b5753fefba033ecf5f4e6a909c42c27be": "6e9ee2aa4ab2e5f1ab806c460b0d25ca",
".git/objects/e0/58998e0ba7e95c22adaac342349fd479287f37": "cc3070a21c8a545ddc54e83b240dffe7",
".git/objects/46/d55d1440b2b2db85c0c9cdfe32b6488d11a773": "49e04db10a0622a32b0079b6d4bfaf34",
".git/objects/2c/d5ad014e9b6b602ffa70f1cf774a24d0ee47ac": "920e5eeb4459d7e27221b2d55dbf0a04",
".git/objects/79/a4dbbc197036f0177cf011e9a5bbe260a91774": "23c9efeaaff85564fbd0c84e2fcb6fbe",
".git/objects/79/e602d752c3213fce1a4bcbbd9ca398695bfb45": "e16e4dd1ef5aa27f714754290ed690a7",
".git/objects/1b/f5825215788c8adbfdea787a730446118024ee": "cd41e156a03079ef17489edbce367b61",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/3220771a3e8c61616b7d5c54da6f42f706e78c": "07d8a7f383ce56635e9f6ce6301d7976",
".git/objects/4a/34fc1cf0533a6167e149f68e10173b318f620c": "74bfdb3a833fd517f6b202814746a5b4",
".git/objects/4f/88e761f623b74cd7acbd2c3fc18bd609499622": "ec97dbd168a7d8d9bbb0ae7d0a41d8a6",
".git/objects/8d/9a529148ec4826255a3fc73498b14555189ded": "5c7c1369509db175d246ec2d7570f368",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/1c/4a59540c73e34c3f1193ed2777ea79b5fab62e": "b228931aa2c72aa9979dd1c268a0f06f",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/14/0d1d552c22410e32d1f370bac4712e2ed9a4ce": "b2fce7012ed675a58ddc0382548ea723",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b398452a50498a1103d49c79d6b0b1b7",
".git/logs/refs/heads/main": "b398452a50498a1103d49c79d6b0b1b7",
".git/logs/refs/remotes/origin/main": "10cbbf55c9c7757068a620055650d709",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "21e16fe93b0f06a4adfd21d85a48b39e",
".git/refs/remotes/origin/main": "21e16fe93b0f06a4adfd21d85a48b39e",
".git/index": "c9c1d526913b4b38a00108be2c747546",
".git/COMMIT_EDITMSG": "33b3b6acf67939d3c7999104a7794d8d",
".git/FETCH_HEAD": "dd9396f209cf70aa483eba37168dabce",
"assets/images/spider-man.glb": "9081e13fffdcbdec4ea08397964bfab9",
"assets/AssetManifest.json": "2fb2e6f904fb3e50efaaa8acb93ed4e5",
"assets/loading.gif": "c90bd5e005b6386788447f43ba4db23d",
"assets/giphy.gif": "089fab4a7dda3fdbfd1aff218b9df640",
"assets/NOTICES": "e4bdab6ed67cb3cf6f937bd3ac8107fd",
"assets/FontManifest.json": "9079600dd6cc1457502d9273b45170aa",
"assets/AssetManifest.bin.json": "92025a5c580fafe33d7f5c512eb8cf82",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d55af20dd36d71c52ea866f9594d419c",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "a9dc98f8bf360be897a0898a7395f905",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "816b23ba3a6f6fbd4fb86c41a6cd00de",
"assets/fonts/MaterialIcons-Regular.otf": "e39432f3b61ef3cce7c35e4f9c4039a7",
"assets/assets/images/notesgr.png": "5c03595d2c86a53fee1dfc91daa47ebb",
"assets/assets/images/code.png": "25e33057a6112d8baca06361e62942aa",
"assets/assets/images/secondbrain.png": "5ee1ae31f5b63103eecff483e15be7b1",
"assets/assets/images/virtual%2520drag%2520drop.png": "a3e6351487789dfcbeb8de52fd835c6d",
"assets/assets/images/handtrackingmodule.png": "6553a381c90e617c76326cedea85128f",
"assets/assets/images/figmadesign.png": "2cc6722d7b93f2bf7014c06ca09d1aa1",
"assets/assets/images/flappy.png": "c3ca1baa6a644160985785a29829b29e",
"assets/assets/images/auth.png": "336bd35626839f0829fb63c370bdb724",
"assets/assets/images/renty.png": "019513450df277d518a4681e017aeac8",
"assets/assets/images/careermasterfp.png": "5583537fee6896b87fdf26ce48019bcd",
"assets/assets/images/virtualdragdrop.mp4": "3221e529384c6411a9166c91d4c8ad85",
"assets/assets/images/trashdetection.png": "a9d92a83cf705531c4a70776049f5f86",
"assets/assets/images/Bounce.png": "84a1339499293cf454f66a2a23c310b2",
"assets/assets/images/portfolio_icon.jpg": "1aacc8966e00b9c29acc19cd8f2feca4",
"assets/assets/images/portfolio_icon.png": "7cb8fcd768c7538bd9c9efd457a0df18",
"assets/assets/images/notespup.png": "2588c5c318f5e677706a0684efb1659a",
"assets/assets/images/todo.png": "571666a81e7d79ec9100bdce4209f876",
"assets/assets/images/renty%2520social.png": "36590e8c8271e0e35741bc97e1bf3b6c",
"assets/assets/images/handtracking.mp4": "e8e1eae31240c190e5fe2a2b34210051",
"assets/assets/images/gesture%2520volume%2520control.png": "3f7cb0326ba48af35bae1cf037f5fb49",
"assets/assets/images/figmadesignbounce.png": "876702439e0c325b625612ca44f9b00d",
"assets/assets/images/eye.png": "85f831dcc8d04611bbb56a778520864d",
"assets/assets/images/mobile.png": "271b7dcf5e822622566f2c13fe060bd8",
"assets/assets/images/spidey.png": "7af6f61830fc9bd016677b650ef65e39",
"assets/assets/images/HandtrackingModule.mp4": "14510476c6e5aea0d05dcf22da63dbec",
"assets/assets/images/coffe.png": "da9e3ced8bc17080a94e257590695cc1",
"assets/assets/images/ui.png": "df21a698ff132161d164a4d8af7f0a52",
"assets/assets/images/handtracking.mov": "f54bde8ede4911f2e207e67d01d608d3",
"assets/assets/images/figmadesign%2520(1).png": "2cc6722d7b93f2bf7014c06ca09d1aa1",
"assets/assets/images/spidey.jpeg": "87e28b14616b21fd92c46d79ebff6bb9",
"assets/assets/images/ui-ux.png": "627e9b425f452078202bbef16232afbc",
"assets/assets/images/spider-man.glb": "9081e13fffdcbdec4ea08397964bfab9",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
