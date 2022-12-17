const questions = [
  {
    questionText:
      "دفايات هوفر بالعنابر المفتوحه فقط بعكس المركزيه في المغلقه فقط ",
    answerOptions: [
      { answerText: "صح", isCorrect: false },
      { answerText: "غلط ", isCorrect: true }
    ]
  },
  {
    questionText: "المجاسم تكون بعنابر التسمين فقط ",
    answerOptions: [
      { answerText: "صح", isCorrect: false },
      { answerText: "غلط", isCorrect: true }
    ]
  },
  {
    questionText: "مسقه ذات سعه 5لتر تكفي100كتكوت من عمر يوم الي اسبوع فقط",
    answerOptions: [
      { answerText: "غط", isCorrect: true },
      { answerText: "صح", isCorrect: false }
    ]
  },
  {
    questionText: "يوجد الحمام بالمناطق الحاره فقط",
    answerOptions: [
      { answerText: "غلط", isCorrect: true },
      { answerText: "صح", isCorrect: false }
    ]
  },
  {
    questionText: "ابعاد اقفاص البطاريات الخاصه بالحمام 60*60*60",
    answerOptions: [
      { answerText: "غلط", isCorrect: true },
      { answerText: "صح", isCorrect: false }
    ]
  },
  {
    questionText:
      "يتميز لحم الحمام بتوزيع حبيبات الدهن بين الياف نسيج اللحم (المرمريه)",
    answerOptions: [
      { answerText: "غلط", isCorrect: true },
      { answerText: "صح", isCorrect: false }
    ]
  },
  {
    questionText:
      "يتغذي الحمام بفتره الحضانه علي بادئ24% بينما  في فتره الرعايه يتغذي علي نامي 21  ",
    answerOptions: [
      { answerText: "غلط", isCorrect: false },
      { answerText: "صح", isCorrect: true }
    ]
  },
  {
    questionText: "حجم البياضه بالوز 40*40*40",
    answerOptions: [
      { answerText: "صح", isCorrect: false },
      { answerText: "غلط", isCorrect: true }
    ]
  },
  {
    questionText: "سلاله الرومي المسمي بالبرونز الامركي من سسلالات الخفيفه ",
    answerOptions: [
      { answerText: "صح", isCorrect: false },
      { answerText: "غلط", isCorrect: true }
    ]
  },
  {
    questionText: "لا يوجد علاج لمرض ميكوبلازما و كوليرا بالرومي ",
    answerOptions: [
      { answerText: "صح", isCorrect: false },
      { answerText: "غلط", isCorrect: true }
    ]
  },
  {
    questionText: "سلاله المحله 85 ناتجه من نيكولاس و الهولندي الابيض",
    answerOptions: [
      { answerText: "غلط", isCorrect: false },
      { answerText: "صح", isCorrect: true }
    ]
  },
  {
    questionText: "يفضل التفريخ الطبيعي بالحمام",
    answerOptions: [
      { answerText: "غلط", isCorrect: false },
      { answerText: "صح", isCorrect: true }
    ]
  },
  {
    questionText:
      "تعتبر التبن الاكثر امتصاص للرطوبه لذالك  هي الاكثر شيوعا واستخدام",
    answerOptions: [
      { answerText: "صح", isCorrect: false },
      { answerText: "غلط", isCorrect: true }
    ]
  },
  {
    questionText: " الكفائه التحويليه للارانب",
    answerOptions: [
      { answerText: "1 - 3", isCorrect: true },
      { answerText: "1 - 2", isCorrect: false },
      { answerText: "1 - 3.5", isCorrect: false },
      { answerText: "1 - 2.4", isCorrect: false }
    ]
  },
  {
    questionText: " لكفائه التحويليه طيور مائيه",
    answerOptions: [
      { answerText: "1 - 3", isCorrect: false },
      { answerText: "1 - 2", isCorrect: false },
      { answerText: "1 - 3.5", isCorrect: true },
      { answerText: "1 - 2.4", isCorrect: false }
    ]
  },
  {
    questionText: " لكفائه التحويليه للرومي الثقيل",
    answerOptions: [
      { answerText: "1 - 3", isCorrect: false },
      { answerText: "1 - 2", isCorrect: false },
      { answerText: "1 - 3.5", isCorrect: true },
      { answerText: "1 - 2.4", isCorrect: false }
    ]
  },
  {
    questionText: "اكفائه التحويليه للسمان ",
    answerOptions: [
      { answerText: "1 - 3", isCorrect: false },
      { answerText: "1 - 2", isCorrect: false },
      { answerText: "1 - 3.5", isCorrect: false },
      { answerText: "1 - 2.4", isCorrect: true }
    ]
  },
  {
    questionText: " اكفائه التحويليه للرومي الخفيف",
    answerOptions: [
      { answerText: "1 - 3", isCorrect: false },
      { answerText: "1 - 2", isCorrect: false },
      { answerText: "1 - 2.5", isCorrect: true },
      { answerText: "1 - 2.4", isCorrect: false }
    ]
  },
  {
    questionText: " النضج الجنسي بالحمام  ",
    answerOptions: [
      { answerText: "5-7شهور", isCorrect: true },
      { answerText: "6-7اسابيع", isCorrect: false },
      { answerText: "32-33اسبوع", isCorrect: false },
      { answerText: "2-3 سنوات ", isCorrect: false }
    ]
  },
  {
    questionText: "النضج الجنسي بالسمان",
    answerOptions: [
      { answerText: "5-7شهور", isCorrect: false },
      { answerText: "6-7اسابيع", isCorrect: true },
      { answerText: "32-33اسبوع", isCorrect: false },
      { answerText: "2-3 سنوات ", isCorrect: false }
    ]
  },
  {
    questionText: "النضج الجنسي نعام",
    answerOptions: [
      { answerText: "5-7شهور", isCorrect: false },
      { answerText: "6-7اسابيع", isCorrect: true },
      { answerText: "32-33اسبوع", isCorrect: false },
      { answerText: "2-3 سنوات ", isCorrect: false }
    ]
  },
  {
    questionText: "النسبه الجنسيه للرومي",
    answerOptions: [
      { answerText: "1:6", isCorrect: false },
      { answerText: "1:10", isCorrect: true },
      { answerText: "1:5", isCorrect: false },
      { answerText: "1:3", isCorrect: false }
    ]
  },
  {
    questionText: "النسبه الجنسيه  للنعام ",
    answerOptions: [
      { answerText: "1:6", isCorrect: false },
      { answerText: "1:2", isCorrect: true },
      { answerText: "1:5", isCorrect: false },
      { answerText: "1:3", isCorrect: false }
    ]
  },
  {
    questionText: "النسبه الجنسيه  للارانب",
    answerOptions: [
      { answerText: "1:6", isCorrect: false },
      { answerText: "1:5", isCorrect: true },
      { answerText: "1:5", isCorrect: false },
      { answerText: "1:3", isCorrect: false }
    ]
  },
  {
    questionText: "النسبه الجنسيه  للوز",
    answerOptions: [
      { answerText: "1:6", isCorrect: false },
      { answerText: "1:4", isCorrect: true },
      { answerText: "1:5", isCorrect: false },
      { answerText: "1:3", isCorrect: false }
    ]
  },
  {
    questionText: " تصافي السمان ",
    answerOptions: [
      { answerText: "50%", isCorrect: false },
      { answerText: "85-90%", isCorrect: false },
      { answerText: "61-63%", isCorrect: true },
      { answerText: "64%", isCorrect: false }
    ]
  },
  {
    questionText: "تصافي الارانب",
    answerOptions: [
      { answerText: "50%", isCorrect: false },
      { answerText: "85-90%", isCorrect: false },
      { answerText: "61-63%", isCorrect: false },
      { answerText: "64%", isCorrect: true }
    ]
  },
  {
    questionText: " تصافي الرومي",
    answerOptions: [
      { answerText: "50%", isCorrect: false },
      { answerText: "85-90%", isCorrect: true },
      { answerText: "61-63%", isCorrect: false },
      { answerText: "64%", isCorrect: false }
    ]
  },
  {
    questionText: "تصافي النعام",
    answerOptions: [
      { answerText: "50%", isCorrect: true },
      { answerText: "85-90%", isCorrect: false },
      { answerText: "61-63%", isCorrect: false },
      { answerText: "64%", isCorrect: false }
    ]
  },
  {
    questionText:
      "فتره حضانه الحماما شهر بينما الروني شهر ونص بينما النعام شهرين صيفا و 3 شتاء ",
    answerOptions: [
      { answerText: "صح", isCorrect: true },
      { answerText: "غلط", isCorrect: false }
    ]
  },
  {
    questionText:
      "نسبه البروتين بعليقه الطيور مائيه في فتره الرعايه 16% نامي بالنسبه للبياض",
    answerOptions: [
      { answerText: "صح", isCorrect: true },
      { answerText: "غلط", isCorrect: false }
    ]
  }
];

export default questions;
