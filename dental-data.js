var ICONS = {
  consumables: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 11V6a2 2 0 0 1 4 0v4M11 10V4a2 2 0 0 1 4 0v6M15 10V5a2 2 0 0 1 4 0v9c0 3.9-3.1 7-7 7h-1c-3.3 0-5-2-6-4l-2.5-5a1.5 1.5 0 0 1 2.6-1.5L7 12"/></svg>',
  instruments: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 3l7 7-8.5 8.5a3 3 0 0 1-4.2 0 3 3 0 0 1 0-4.2L17 5M4 20l4-4"/></svg>',
  materials: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 2h6M10 2v5l-4 8v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-5l-4-8V2M8 15h8"/></svg>',
  equipment: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg>'
};

var CAT_LABELS = {
  consumables: 'مستهلكات',
  instruments: 'أدوات وعدد',
  materials: 'مواد وحشوات',
  equipment: 'أجهزة ومعدات'
};

var CAT_DESCRIPTIONS = {
  consumables: 'قفازات، كمامات، مرايل، وأدوات استخدام مرة واحدة',
  instruments: 'مرايا فحص، ملاقط، كاشطات جير، وعدد يدوية',
  materials: 'حشوات، مواد طبعة، أسمنت تثبيت، ومواد استهلاكية',
  equipment: 'أجهزة تعقيم، سكيلر، وأجهزة تصليب ضوئي'
};

// wasPrice is optional — when present, the product shows a strikethrough price + a sale badge
var PRODUCTS = [
  { id:1,  cat:'consumables', name:'قفازات نيتريل طبية', pack:'علبة 100 قطعة', price:180, wasPrice:230 },
  { id:2,  cat:'consumables', name:'كمامات طبية 3 طبقات', pack:'علبة 50 قطعة', price:90 },
  { id:3,  cat:'consumables', name:'مرايل مرضى يوزا مرة', pack:'كرتونة 500 قطعة', price:320, wasPrice:380 },
  { id:4,  cat:'consumables', name:'لفات قطن طبي', pack:'كيس 1000 قطعة', price:150 },
  { id:5,  cat:'consumables', name:'أكواب بلاستيك للمضمضة', pack:'كرتونة 1000 كوب', price:210 },
  { id:6,  cat:'instruments', name:'طقم مرايا فحص الفم', pack:'12 قطعة', price:240 },
  { id:7,  cat:'instruments', name:'ملقط قلع أضراس (فورسبس)', pack:'القطعة', price:380, wasPrice:450 },
  { id:8,  cat:'instruments', name:'طقم كاشطات جير (سكيلر)', pack:'6 قطع', price:450 },
  { id:9,  cat:'instruments', name:'إبر تخدير موضعي', pack:'علبة 100 إبرة', price:260 },
  { id:10, cat:'materials', name:'حشو كمبوزيت ضوئي', pack:'طقم كامل', price:950, wasPrice:1100 },
  { id:11, cat:'materials', name:'مادة طبعة ألجينات', pack:'عبوة 450 جم', price:210 },
  { id:12, cat:'materials', name:'أسمنت تثبيت مؤقت', pack:'عبوة', price:180 },
  { id:13, cat:'equipment', name:'جهاز كيورينج لايت محمول', pack:'القطعة', price:1200 },
  { id:14, cat:'equipment', name:'جهاز سكيلر بالموجات فوق الصوتية', pack:'القطعة', price:2600, wasPrice:2950 },
  { id:15, cat:'equipment', name:'جهاز تعقيم أوتوكلاف 18 لتر', pack:'القطعة', price:8500 }
];

var ORDER_WHATSAPP_NUMBER = "201500576313"; // placeholder — replace with the real business number

function discountPercent(p){
  if(!p.wasPrice) return null;
  return Math.round((1 - p.price / p.wasPrice) * 100);
}
