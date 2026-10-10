/**
 * Love Heart in 20 Languages
 * Pixel-accurate recreation of the Python turtle canvas animation
 * Built using Vanilla HTML5, CSS3, and JavaScript (ES6+)
 */

// 23 rows matching the reference video
const HEART_ROWS = [
  {
    "rowIndex": 0,
    "type": "split",
    "leftW": 177,
    "gap": 248,
    "rightW": 177,
    "left": [
      {
        "id": 0,
        "text": "Ich liebe dich",
        "lang": "German",
        "flag": "🇩🇪",
        "delay": 6.436
      },
      {
        "id": 1,
        "text": "Ti amo",
        "lang": "Italian",
        "flag": "🇮🇹",
        "delay": 6.628
      }
    ],
    "right": [
      {
        "id": 2,
        "text": "Σ' αγαπώ",
        "lang": "Greek",
        "flag": "🇬🇷",
        "delay": 0.672
      },
      {
        "id": 3,
        "text": "Te amo",
        "lang": "Spanish",
        "flag": "🇪🇸",
        "delay": 1.249
      }
    ]
  },
  {
    "rowIndex": 1,
    "type": "split",
    "leftW": 206,
    "gap": 177,
    "rightW": 254,
    "left": [
      {
        "id": 4,
        "text": "愛してる",
        "lang": "Japanese",
        "flag": "🇯🇵",
        "delay": 6.532
      },
      {
        "id": 5,
        "text": "Aku cinta kamu",
        "lang": "Indonesian",
        "flag": "🇮🇩",
        "delay": 6.724
      }
    ],
    "right": [
      {
        "id": 6,
        "text": "Anh yêu em",
        "lang": "Vietnamese",
        "flag": "🇻🇳",
        "delay": 0.769
      },
      {
        "id": 7,
        "text": "Ik hou van jou",
        "lang": "Dutch",
        "flag": "🇳🇱",
        "delay": 0.865
      },
      {
        "id": 8,
        "text": "사랑해",
        "lang": "Korean",
        "flag": "🇰🇷",
        "delay": 1.345
      }
    ]
  },
  {
    "rowIndex": 2,
    "type": "split",
    "leftW": 289,
    "gap": 94,
    "rightW": 277,
    "left": [
      {
        "id": 9,
        "text": "ฉันรักเธอ",
        "lang": "Thai",
        "flag": "🇹🇭",
        "delay": 6.34
      },
      {
        "id": 10,
        "text": "Te amo",
        "lang": "Spanish",
        "flag": "🇪🇸",
        "delay": 6.82
      },
      {
        "id": 11,
        "text": "Je t'aime",
        "lang": "French",
        "flag": "🇫🇷",
        "delay": 6.917
      },
      {
        "id": 12,
        "text": "사랑해",
        "lang": "Korean",
        "flag": "🇰🇷",
        "delay": 7.013
      }
    ],
    "right": [
      {
        "id": 13,
        "text": "Seni seviyorum",
        "lang": "Turkish",
        "flag": "🇹🇷",
        "delay": 0.384
      },
      {
        "id": 14,
        "text": "Ti amo",
        "lang": "Italian",
        "flag": "🇮🇹",
        "delay": 0.961
      },
      {
        "id": 15,
        "text": "사랑해",
        "lang": "Korean",
        "flag": "🇰🇷",
        "delay": 1.441
      }
    ]
  },
  {
    "rowIndex": 3,
    "type": "split",
    "leftW": 313,
    "gap": 57,
    "rightW": 319,
    "left": [
      {
        "id": 16,
        "text": "Jag älskar dig",
        "lang": "Swedish",
        "flag": "🇸🇪",
        "delay": 5.86
      },
      {
        "id": 17,
        "text": "मैं तुमसे प्यार करता हूँ",
        "lang": "Hindi",
        "flag": "🇮🇳",
        "delay": 7.109
      },
      {
        "id": 18,
        "text": "我爱你",
        "lang": "Chinese",
        "flag": "🇨🇳",
        "delay": 7.205
      }
    ],
    "right": [
      {
        "id": 19,
        "text": "Ich liebe dich",
        "lang": "German",
        "flag": "🇩🇪",
        "delay": 0.0
      },
      {
        "id": 20,
        "text": "Я тебе кохаю",
        "lang": "Ukrainian",
        "flag": "🇺🇦",
        "delay": 0.48
      },
      {
        "id": 21,
        "text": "ฉันรักเธอ",
        "lang": "Thai",
        "flag": "🇹🇭",
        "delay": 1.153
      },
      {
        "id": 22,
        "text": "사랑해",
        "lang": "Korean",
        "flag": "🇰🇷",
        "delay": 1.537
      }
    ]
  },
  {
    "rowIndex": 4,
    "type": "split",
    "leftW": 328,
    "gap": 33,
    "rightW": 330,
    "left": [
      {
        "id": 23,
        "text": "मैं तुमसे प्यार करता हूँ",
        "lang": "Hindi",
        "flag": "🇮🇳",
        "delay": 5.956
      },
      {
        "id": 24,
        "text": "Eu te amo",
        "lang": "Portuguese",
        "flag": "🇵🇹",
        "delay": 6.052
      },
      {
        "id": 25,
        "text": "我爱你",
        "lang": "Chinese",
        "flag": "🇨🇳",
        "delay": 7.877
      },
      {
        "id": 26,
        "text": "ฉันรักเธอ",
        "lang": "Thai",
        "flag": "🇹🇭",
        "delay": 7.301
      }
    ],
    "right": [
      {
        "id": 27,
        "text": "Te amo",
        "lang": "Spanish",
        "flag": "🇪🇸",
        "delay": 0.096
      },
      {
        "id": 28,
        "text": "Ik hou van jou",
        "lang": "Dutch",
        "flag": "🇳🇱",
        "delay": 1.057
      },
      {
        "id": 29,
        "text": "Seni seviyorum",
        "lang": "Turkish",
        "flag": "🇹🇷",
        "delay": 1.921
      },
      {
        "id": 30,
        "text": "我爱你",
        "lang": "Chinese",
        "flag": "🇨🇳",
        "delay": 1.633
      }
    ]
  },
  {
    "rowIndex": 5,
    "type": "split",
    "leftW": 340,
    "gap": 19,
    "rightW": 333,
    "left": [
      {
        "id": 31,
        "text": "Я тебя люблю",
        "lang": "Russian",
        "flag": "🇷🇺",
        "delay": 5.764
      },
      {
        "id": 32,
        "text": "Eu te amo",
        "lang": "Portuguese",
        "flag": "🇵🇹",
        "delay": 6.148
      },
      {
        "id": 33,
        "text": "Te amo",
        "lang": "Spanish",
        "flag": "🇪🇸",
        "delay": 8.165
      },
      {
        "id": 34,
        "text": "I love you",
        "lang": "English",
        "flag": "🇬🇧",
        "delay": 7.397
      }
    ],
    "right": [
      {
        "id": 35,
        "text": "Я тебя люблю",
        "lang": "Russian",
        "flag": "🇷🇺",
        "delay": 0.192
      },
      {
        "id": 36,
        "text": "Aku cinta kamu",
        "lang": "Indonesian",
        "flag": "🇮🇩",
        "delay": 7.685
      },
      {
        "id": 37,
        "text": "Seni seviyorum",
        "lang": "Turkish",
        "flag": "🇹🇷",
        "delay": 1.729
      }
    ]
  },
  {
    "rowIndex": 6,
    "type": "full",
    "width": 714,
    "phrases": [
      {
        "id": 38,
        "text": "ฉันรักเธอ",
        "lang": "Thai",
        "flag": "🇹🇭",
        "delay": 5.476
      },
      {
        "id": 39,
        "text": "Jag älskar dig",
        "lang": "Swedish",
        "flag": "🇸🇪",
        "delay": 6.244
      },
      {
        "id": 40,
        "text": "Ich liebe dich",
        "lang": "German",
        "flag": "🇩🇪",
        "delay": 8.55
      },
      {
        "id": 41,
        "text": "Σ' αγαπώ",
        "lang": "Greek",
        "flag": "🇬🇷",
        "delay": 7.493
      },
      {
        "id": 42,
        "text": "Ik hou van jou",
        "lang": "Dutch",
        "flag": "🇳🇱",
        "delay": 0.288
      },
      {
        "id": 43,
        "text": "Σ' αγαπώ",
        "lang": "Greek",
        "flag": "🇬🇷",
        "delay": 8.357
      },
      {
        "id": 44,
        "text": "I love you",
        "lang": "English",
        "flag": "🇬🇧",
        "delay": 2.017
      },
      {
        "id": 45,
        "text": "Eu te amo",
        "lang": "Portuguese",
        "flag": "🇵🇹",
        "delay": 1.825
      }
    ]
  },
  {
    "rowIndex": 7,
    "type": "full",
    "width": 702,
    "phrases": [
      {
        "id": 46,
        "text": "मैं तुमसे प्यार करता हूँ",
        "lang": "Hindi",
        "flag": "🇮🇳",
        "delay": 5.572
      },
      {
        "id": 47,
        "text": "사랑해",
        "lang": "Korean",
        "flag": "🇰🇷",
        "delay": 7.781
      },
      {
        "id": 48,
        "text": "Я тебе кохаю",
        "lang": "Ukrainian",
        "flag": "🇺🇦",
        "delay": 9.03
      },
      {
        "id": 49,
        "text": "Kocham cię",
        "lang": "Polish",
        "flag": "🇵🇱",
        "delay": 7.589
      },
      {
        "id": 50,
        "text": "Ich liebe dich",
        "lang": "German",
        "flag": "🇩🇪",
        "delay": 0.576
      },
      {
        "id": 51,
        "text": "我爱你",
        "lang": "Chinese",
        "flag": "🇨🇳",
        "delay": 8.454
      },
      {
        "id": 52,
        "text": "Anh yêu em",
        "lang": "Vietnamese",
        "flag": "🇻🇳",
        "delay": 7.973
      },
      {
        "id": 53,
        "text": "Ich liebe dich",
        "lang": "German",
        "flag": "🇩🇪",
        "delay": 2.113
      }
    ]
  },
  {
    "rowIndex": 8,
    "type": "full",
    "width": 678,
    "phrases": [
      {
        "id": 54,
        "text": "Я тебе кохаю",
        "lang": "Ukrainian",
        "flag": "🇺🇦",
        "delay": 5.668
      },
      {
        "id": 55,
        "text": "Я тебя люблю",
        "lang": "Russian",
        "flag": "🇷🇺",
        "delay": 8.646
      },
      {
        "id": 56,
        "text": "Je t'aime",
        "lang": "French",
        "flag": "🇫🇷",
        "delay": 9.894
      },
      {
        "id": 57,
        "text": "사랑해",
        "lang": "Korean",
        "flag": "🇰🇷",
        "delay": 10.279
      },
      {
        "id": 58,
        "text": "Σ' αγαπώ",
        "lang": "Greek",
        "flag": "🇬🇷",
        "delay": 9.318
      },
      {
        "id": 59,
        "text": "Ik hou van jou",
        "lang": "Dutch",
        "flag": "🇳🇱",
        "delay": 8.069
      },
      {
        "id": 60,
        "text": "Jag älskar dig",
        "lang": "Swedish",
        "flag": "🇸🇪",
        "delay": 2.209
      }
    ]
  },
  {
    "rowIndex": 9,
    "type": "full",
    "width": 661,
    "phrases": [
      {
        "id": 61,
        "text": "Je t'aime",
        "lang": "French",
        "flag": "🇫🇷",
        "delay": 5.091
      },
      {
        "id": 62,
        "text": "Te amo",
        "lang": "Spanish",
        "flag": "🇪🇸",
        "delay": 5.187
      },
      {
        "id": 63,
        "text": "Σ' αγαπώ",
        "lang": "Greek",
        "flag": "🇬🇷",
        "delay": 9.126
      },
      {
        "id": 64,
        "text": "愛してる",
        "lang": "Japanese",
        "flag": "🇯🇵",
        "delay": 10.567
      },
      {
        "id": 65,
        "text": "사랑해",
        "lang": "Korean",
        "flag": "🇰🇷",
        "delay": 11.047
      },
      {
        "id": 66,
        "text": "Ik hou van jou",
        "lang": "Dutch",
        "flag": "🇳🇱",
        "delay": 9.414
      },
      {
        "id": 67,
        "text": "ฉันรักเธอ",
        "lang": "Thai",
        "flag": "🇹🇭",
        "delay": 8.742
      },
      {
        "id": 68,
        "text": "Aku cinta kamu",
        "lang": "Indonesian",
        "flag": "🇮🇩",
        "delay": 8.261
      },
      {
        "id": 69,
        "text": "我爱你",
        "lang": "Chinese",
        "flag": "🇨🇳",
        "delay": 2.306
      }
    ]
  },
  {
    "rowIndex": 10,
    "type": "full",
    "width": 625,
    "phrases": [
      {
        "id": 70,
        "text": "Σ' αγαπώ",
        "lang": "Greek",
        "flag": "🇬🇷",
        "delay": 5.283
      },
      {
        "id": 71,
        "text": "Jag älskar dig",
        "lang": "Swedish",
        "flag": "🇸🇪",
        "delay": 9.222
      },
      {
        "id": 72,
        "text": "I love you",
        "lang": "English",
        "flag": "🇬🇧",
        "delay": 10.471
      },
      {
        "id": 73,
        "text": "Je t'aime",
        "lang": "French",
        "flag": "🇫🇷",
        "delay": 11.816
      },
      {
        "id": 74,
        "text": "Kocham cię",
        "lang": "Polish",
        "flag": "🇵🇱",
        "delay": 11.143
      },
      {
        "id": 75,
        "text": "Te amo",
        "lang": "Spanish",
        "flag": "🇪🇸",
        "delay": 9.51
      },
      {
        "id": 76,
        "text": "Eu te amo",
        "lang": "Portuguese",
        "flag": "🇵🇹",
        "delay": 8.838
      },
      {
        "id": 77,
        "text": "ฉันรักเธอ",
        "lang": "Thai",
        "flag": "🇹🇭",
        "delay": 2.402
      }
    ]
  },
  {
    "rowIndex": 11,
    "type": "full",
    "width": 584,
    "phrases": [
      {
        "id": 78,
        "text": "Seni seviyorum",
        "lang": "Turkish",
        "flag": "🇹🇷",
        "delay": 5.38
      },
      {
        "id": 79,
        "text": "ฉันรักเธอ",
        "lang": "Thai",
        "flag": "🇹🇭",
        "delay": 9.991
      },
      {
        "id": 80,
        "text": "I love you",
        "lang": "English",
        "flag": "🇬🇧",
        "delay": 11.624
      },
      {
        "id": 81,
        "text": "Aku cinta kamu",
        "lang": "Indonesian",
        "flag": "🇮🇩",
        "delay": 12.104
      },
      {
        "id": 82,
        "text": "사랑해",
        "lang": "Korean",
        "flag": "🇰🇷",
        "delay": 11.72
      },
      {
        "id": 83,
        "text": "Je t'aime",
        "lang": "French",
        "flag": "🇫🇷",
        "delay": 9.702
      },
      {
        "id": 84,
        "text": "Ti amo",
        "lang": "Italian",
        "flag": "🇮🇹",
        "delay": 8.934
      },
      {
        "id": 85,
        "text": "ฉันรักเธอ",
        "lang": "Thai",
        "flag": "🇹🇭",
        "delay": 2.498
      }
    ]
  },
  {
    "rowIndex": 12,
    "type": "full",
    "width": 543,
    "phrases": [
      {
        "id": 86,
        "text": "사랑해",
        "lang": "Korean",
        "flag": "🇰🇷",
        "delay": 4.899
      },
      {
        "id": 87,
        "text": "Aku cinta kamu",
        "lang": "Indonesian",
        "flag": "🇮🇩",
        "delay": 10.087
      },
      {
        "id": 88,
        "text": "Te amo",
        "lang": "Spanish",
        "flag": "🇪🇸",
        "delay": 11.912
      },
      {
        "id": 89,
        "text": "Ti amo",
        "lang": "Italian",
        "flag": "🇮🇹",
        "delay": 12.008
      },
      {
        "id": 90,
        "text": "Σ' αγαπώ",
        "lang": "Greek",
        "flag": "🇬🇷",
        "delay": 10.951
      },
      {
        "id": 91,
        "text": "Eu te amo",
        "lang": "Portuguese",
        "flag": "🇵🇹",
        "delay": 9.606
      },
      {
        "id": 92,
        "text": "Seni seviyorum",
        "lang": "Turkish",
        "flag": "🇹🇷",
        "delay": 2.594
      }
    ]
  },
  {
    "rowIndex": 13,
    "type": "full",
    "width": 502,
    "phrases": [
      {
        "id": 93,
        "text": "사랑해",
        "lang": "Korean",
        "flag": "🇰🇷",
        "delay": 4.995
      },
      {
        "id": 94,
        "text": "Ti amo",
        "lang": "Italian",
        "flag": "🇮🇹",
        "delay": 10.183
      },
      {
        "id": 95,
        "text": "Ich liebe dich",
        "lang": "German",
        "flag": "🇩🇪",
        "delay": 11.431
      },
      {
        "id": 96,
        "text": "ฉันรักเธอ",
        "lang": "Thai",
        "flag": "🇹🇭",
        "delay": 11.239
      },
      {
        "id": 97,
        "text": "Σ' αγαπώ",
        "lang": "Greek",
        "flag": "🇬🇷",
        "delay": 10.663
      },
      {
        "id": 98,
        "text": "愛してる",
        "lang": "Japanese",
        "flag": "🇯🇵",
        "delay": 9.798
      },
      {
        "id": 99,
        "text": "Kocham cię",
        "lang": "Polish",
        "flag": "🇵🇱",
        "delay": 2.69
      }
    ]
  },
  {
    "rowIndex": 14,
    "type": "full",
    "width": 454,
    "phrases": [
      {
        "id": 100,
        "text": "Я тебе кохаю",
        "lang": "Ukrainian",
        "flag": "🇺🇦",
        "delay": 4.611
      },
      {
        "id": 101,
        "text": "Te amo",
        "lang": "Spanish",
        "flag": "🇪🇸",
        "delay": 11.528
      },
      {
        "id": 102,
        "text": "사랑해",
        "lang": "Korean",
        "flag": "🇰🇷",
        "delay": 11.335
      },
      {
        "id": 103,
        "text": "Ti amo",
        "lang": "Italian",
        "flag": "🇮🇹",
        "delay": 10.759
      },
      {
        "id": 104,
        "text": "I love you",
        "lang": "English",
        "flag": "🇬🇧",
        "delay": 2.882
      },
      {
        "id": 105,
        "text": "Eu te amo",
        "lang": "Portuguese",
        "flag": "🇵🇹",
        "delay": 2.786
      }
    ]
  },
  {
    "rowIndex": 15,
    "type": "full",
    "width": 401,
    "phrases": [
      {
        "id": 106,
        "text": "Ti amo",
        "lang": "Italian",
        "flag": "🇮🇹",
        "delay": 4.707
      },
      {
        "id": 107,
        "text": "我爱你",
        "lang": "Chinese",
        "flag": "🇨🇳",
        "delay": 10.375
      },
      {
        "id": 108,
        "text": "Σ' αγαπώ",
        "lang": "Greek",
        "flag": "🇬🇷",
        "delay": 10.855
      },
      {
        "id": 109,
        "text": "Ich liebe dich",
        "lang": "German",
        "flag": "🇩🇪",
        "delay": 2.978
      },
      {
        "id": 110,
        "text": "Anh yêu em",
        "lang": "Vietnamese",
        "flag": "🇻🇳",
        "delay": 3.074
      }
    ]
  },
  {
    "rowIndex": 16,
    "type": "full",
    "width": 336,
    "phrases": [
      {
        "id": 111,
        "text": "Kocham cię",
        "lang": "Polish",
        "flag": "🇵🇱",
        "delay": 4.803
      },
      {
        "id": 112,
        "text": "Ich liebe dich",
        "lang": "German",
        "flag": "🇩🇪",
        "delay": 3.554
      },
      {
        "id": 113,
        "text": "愛してる",
        "lang": "Japanese",
        "flag": "🇯🇵",
        "delay": 3.362
      },
      {
        "id": 114,
        "text": "Te amo",
        "lang": "Spanish",
        "flag": "🇪🇸",
        "delay": 3.17
      }
    ]
  },
  {
    "rowIndex": 17,
    "type": "full",
    "width": 283,
    "phrases": [
      {
        "id": 115,
        "text": "Ik hou van jou",
        "lang": "Dutch",
        "flag": "🇳🇱",
        "delay": 3.65
      },
      {
        "id": 116,
        "text": "Ti amo",
        "lang": "Italian",
        "flag": "🇮🇹",
        "delay": 3.746
      },
      {
        "id": 117,
        "text": "Anh yêu em",
        "lang": "Vietnamese",
        "flag": "🇻🇳",
        "delay": 3.266
      }
    ]
  },
  {
    "rowIndex": 18,
    "type": "full",
    "width": 230,
    "phrases": [
      {
        "id": 118,
        "text": "Ti amo",
        "lang": "Italian",
        "flag": "🇮🇹",
        "delay": 3.843
      },
      {
        "id": 119,
        "text": "愛してる",
        "lang": "Japanese",
        "flag": "🇯🇵",
        "delay": 3.939
      },
      {
        "id": 120,
        "text": "Anh yêu em",
        "lang": "Vietnamese",
        "flag": "🇻🇳",
        "delay": 3.458
      }
    ]
  },
  {
    "rowIndex": 19,
    "type": "full",
    "width": 165,
    "phrases": [
      {
        "id": 121,
        "text": "Ich liebe dich",
        "lang": "German",
        "flag": "🇩🇪",
        "delay": 4.035
      },
      {
        "id": 122,
        "text": "Ti amo",
        "lang": "Italian",
        "flag": "🇮🇹",
        "delay": 4.131
      }
    ]
  },
  {
    "rowIndex": 20,
    "type": "full",
    "width": 124,
    "phrases": [
      {
        "id": 123,
        "text": "Ti amo",
        "lang": "Italian",
        "flag": "🇮🇹",
        "delay": 4.227
      },
      {
        "id": 124,
        "text": "Je t'aime",
        "lang": "French",
        "flag": "🇫🇷",
        "delay": 4.323
      }
    ]
  },
  {
    "rowIndex": 21,
    "type": "full",
    "width": 65,
    "phrases": [
      {
        "id": 125,
        "text": "사랑해",
        "lang": "Korean",
        "flag": "🇰🇷",
        "delay": 4.419
      }
    ]
  },
  {
    "rowIndex": 22,
    "type": "full",
    "width": 53,
    "phrases": [
      {
        "id": 126,
        "text": "사랑해",
        "lang": "Korean",
        "flag": "🇰🇷",
        "delay": 4.515
      }
    ]
  }
];

class HeartAnimation {
  constructor() {
    this.container = document.getElementById('heart-container');
    this.tooltip = document.getElementById('tooltip');
    this.phrases = [];
    this.animationTimer = null;
    this.rafId = null;
    this.startTime = null;
    this.isCompleted = false;

    this.init();
  }

  init() {
    this.renderDOM();
    this.setupResponsiveness();
    this.setupInteractions();
    this.startAnimation();
  }

  renderDOM() {
    this.container.innerHTML = '';
    this.phrases = [];

    HEART_ROWS.forEach(rowSpec => {
      const rowEl = document.createElement('div');
      rowEl.className = 'heart-row';

      if (rowSpec.type === 'split') {
        rowEl.classList.add('split-row');

        // Left lobe
        const leftLobe = document.createElement('div');
        leftLobe.className = 'lobe lobe-left';
        leftLobe.style.width = `${rowSpec.leftW}px`;
        rowSpec.left.forEach(p => {
          const span = this.createPhraseElement(p);
          leftLobe.appendChild(span);
          this.phrases.push({ el: span, delay: p.delay });
        });

        // Center cleft gap
        const gapEl = document.createElement('div');
        gapEl.className = 'cleft-gap';
        gapEl.style.width = `${rowSpec.gap}px`;

        // Right lobe
        const rightLobe = document.createElement('div');
        rightLobe.className = 'lobe lobe-right';
        rightLobe.style.width = `${rowSpec.rightW}px`;
        rowSpec.right.forEach(p => {
          const span = this.createPhraseElement(p);
          rightLobe.appendChild(span);
          this.phrases.push({ el: span, delay: p.delay });
        });

        rowEl.appendChild(leftLobe);
        rowEl.appendChild(gapEl);
        rowEl.appendChild(rightLobe);
      } else {
        // Full row (rows 6 to 22)
        rowEl.classList.add('full-row');
        if (rowSpec.phrases.length === 1) {
          rowEl.classList.add('single-row');
        }
        rowEl.style.width = `${rowSpec.width}px`;

        rowSpec.phrases.forEach(p => {
          const span = this.createPhraseElement(p);
          rowEl.appendChild(span);
          this.phrases.push({ el: span, delay: p.delay });
        });
      }

      this.container.appendChild(rowEl);
    });

    // Sort phrases by appearance delay
    this.phrases.sort((a, b) => a.delay - b.delay);
  }

  createPhraseElement(p) {
    const span = document.createElement('span');
    span.className = 'phrase';
    span.textContent = p.text;
    span.dataset.lang = p.lang;
    span.dataset.flag = p.flag;
    span.dataset.text = p.text;

    // Hover events for romantic language tooltip
    span.addEventListener('mouseenter', (e) => this.showTooltip(e, p));
    span.addEventListener('mouseleave', () => this.hideTooltip());
    span.addEventListener('touchstart', (e) => this.showTooltip(e, p), { passive: true });

    return span;
  }

  setupResponsiveness() {
    const updateScale = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const baseW = 880;
      const baseH = 680;

      // Maintain proper margins and proportional aspect ratio
      const scaleX = (vw * 0.94) / baseW;
      const scaleY = (vh * 0.94) / baseH;
      const scale = Math.min(scaleX, scaleY, 1.35);

      this.container.style.setProperty('--scale', scale.toFixed(4));
    };

    window.addEventListener('resize', updateScale);
    window.addEventListener('orientationchange', updateScale);
    updateScale();
  }

  setupInteractions() {
    // Click anywhere to replay animation
    document.body.addEventListener('click', (e) => {
      // If clicking directly on a phrase when already completed, let it highlight
      if (this.isCompleted && e.target.classList.contains('phrase')) {
        return;
      }
      this.replay();
    });

    // Keyboard shortcut to replay
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space' || e.key.toLowerCase() === 'r') {
        e.preventDefault();
        this.replay();
      }
    });

    document.addEventListener('touchend', () => {
      setTimeout(() => this.hideTooltip(), 1500);
    });
  }

  showTooltip(e, p) {
    if (!this.tooltip) return;
    this.tooltip.innerHTML = `<span class="tooltip-flag">${p.flag}</span><span class="tooltip-lang">${p.lang}:</span> &ldquo;${p.text}&rdquo;`;
    this.tooltip.classList.add('show');
  }

  hideTooltip() {
    if (!this.tooltip) return;
    this.tooltip.classList.remove('show');
  }

  startAnimation() {
    this.cancelRunningAnimation();
    this.isCompleted = false;
    this.container.classList.remove('beating');

    // Reset phrase visibility
    this.phrases.forEach(item => {
      item.el.classList.remove('visible', 'popping');
      item.shown = false;
    });

    // Initial brief delay before first word blooms (matches video)
    const initialDelay = 350;
    this.startTime = performance.now() + initialDelay;

    const animate = (now) => {
      if (now < this.startTime) {
        this.rafId = requestAnimationFrame(animate);
        return;
      }

      const elapsedSec = (now - this.startTime) / 1000;
      let allShown = true;

      for (let i = 0; i < this.phrases.length; i++) {
        const item = this.phrases[i];
        if (!item.shown) {
          if (elapsedSec >= item.delay) {
            item.shown = true;
            item.el.classList.add('visible', 'popping');
          } else {
            allShown = false;
          }
        }
      }

      if (allShown) {
        this.onAnimationComplete();
      } else {
        this.rafId = requestAnimationFrame(animate);
      }
    };

    this.rafId = requestAnimationFrame(animate);
  }

  onAnimationComplete() {
    this.isCompleted = true;
    // Start gentle heartbeat pulse once all words are placed
    setTimeout(() => {
      if (this.isCompleted) {
        this.container.classList.add('beating');
      }
    }, 600);
  }

  cancelRunningAnimation() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    if (this.animationTimer) {
      clearTimeout(this.animationTimer);
      this.animationTimer = null;
    }
  }

  replay() {
    this.startAnimation();
  }
}

// Start application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new HeartAnimation();
});
