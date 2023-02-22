
let scienceSubjects = 'Physics, Chemistry, Biology, Technical Drawing';
let socialScienceSubjects = 'Accounting, Commerce, Marketing, Geography';
let artsSubjects = 'Government, Economics, Literature, History';
let generalSubjects = 'English, Mathematics';
let dept = 'Arts';
if (dept == 'Science') {
    console.log(`These are your subjects: ${generalSubjects}, ${scienceSubjects}`);
} else if (dept == 'Social Science') {
    console.log(`These are your subjects: ${generalSubjects}, ${socialScienceSubjects}`);
} else if (dept == 'Arts') {
    console.log(`These are your subjects: ${generalSubjects}, ${artsSubjects}`);
} else{
    console.log(`These are your subjects: ${generalSubjects}`);
}