/**************** 
 * Bartosf *
 ****************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2025.1.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'bartOSF';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'fill in "A" in the "participant" box.': 'Wait until all downloaded.then OK  ',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0.6549, 0.6549, 0.6549]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'contain',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(Welcome_to_experimentRoutineBegin());
flowScheduler.add(Welcome_to_experimentRoutineEachFrame());
flowScheduler.add(Welcome_to_experimentRoutineEnd());
flowScheduler.add(GenderRoutineBegin());
flowScheduler.add(GenderRoutineEachFrame());
flowScheduler.add(GenderRoutineEnd());
flowScheduler.add(AgeRoutineBegin());
flowScheduler.add(AgeRoutineEachFrame());
flowScheduler.add(AgeRoutineEnd());
flowScheduler.add(relationship_statusRoutineBegin());
flowScheduler.add(relationship_statusRoutineEachFrame());
flowScheduler.add(relationship_statusRoutineEnd());
flowScheduler.add(nationalityRoutineBegin());
flowScheduler.add(nationalityRoutineEachFrame());
flowScheduler.add(nationalityRoutineEnd());
flowScheduler.add(EducationRoutineBegin());
flowScheduler.add(EducationRoutineEachFrame());
flowScheduler.add(EducationRoutineEnd());
flowScheduler.add(religionRoutineBegin());
flowScheduler.add(religionRoutineEachFrame());
flowScheduler.add(religionRoutineEnd());
flowScheduler.add(ethnicityRoutineBegin());
flowScheduler.add(ethnicityRoutineEachFrame());
flowScheduler.add(ethnicityRoutineEnd());
flowScheduler.add(HouseholdStructureRoutineBegin());
flowScheduler.add(HouseholdStructureRoutineEachFrame());
flowScheduler.add(HouseholdStructureRoutineEnd());
flowScheduler.add(occupation_typeRoutineBegin());
flowScheduler.add(occupation_typeRoutineEachFrame());
flowScheduler.add(occupation_typeRoutineEnd());
flowScheduler.add(family_incomeRoutineBegin());
flowScheduler.add(family_incomeRoutineEachFrame());
flowScheduler.add(family_incomeRoutineEnd());
flowScheduler.add(heightRoutineBegin());
flowScheduler.add(heightRoutineEachFrame());
flowScheduler.add(heightRoutineEnd());
flowScheduler.add(weightRoutineBegin());
flowScheduler.add(weightRoutineEachFrame());
flowScheduler.add(weightRoutineEnd());
flowScheduler.add(waistlineRoutineBegin());
flowScheduler.add(waistlineRoutineEachFrame());
flowScheduler.add(waistlineRoutineEnd());
flowScheduler.add(ever_drink_alcoholRoutineBegin());
flowScheduler.add(ever_drink_alcoholRoutineEachFrame());
flowScheduler.add(ever_drink_alcoholRoutineEnd());
flowScheduler.add(last_drink_timeRoutineBegin());
flowScheduler.add(last_drink_timeRoutineEachFrame());
flowScheduler.add(last_drink_timeRoutineEnd());
flowScheduler.add(drink_freq_12mo_2RoutineBegin());
flowScheduler.add(drink_freq_12mo_2RoutineEachFrame());
flowScheduler.add(drink_freq_12mo_2RoutineEnd());
flowScheduler.add(drink_amount_12moRoutineBegin());
flowScheduler.add(drink_amount_12moRoutineEachFrame());
flowScheduler.add(drink_amount_12moRoutineEnd());
flowScheduler.add(ever_smokeRoutineBegin());
flowScheduler.add(ever_smokeRoutineEachFrame());
flowScheduler.add(ever_smokeRoutineEnd());
flowScheduler.add(start_smoke_ageRoutineBegin());
flowScheduler.add(start_smoke_ageRoutineEachFrame());
flowScheduler.add(start_smoke_ageRoutineEnd());
flowScheduler.add(cigs_per_dayRoutineBegin());
flowScheduler.add(cigs_per_dayRoutineEachFrame());
flowScheduler.add(cigs_per_dayRoutineEnd());
flowScheduler.add(self_health_statusRoutineBegin());
flowScheduler.add(self_health_statusRoutineEachFrame());
flowScheduler.add(self_health_statusRoutineEnd());
flowScheduler.add(hearing_statusRoutineBegin());
flowScheduler.add(hearing_statusRoutineEachFrame());
flowScheduler.add(hearing_statusRoutineEnd());
flowScheduler.add(music_trainingRoutineBegin());
flowScheduler.add(music_trainingRoutineEachFrame());
flowScheduler.add(music_trainingRoutineEnd());
flowScheduler.add(training_yearsRoutineBegin());
flowScheduler.add(training_yearsRoutineEachFrame());
flowScheduler.add(training_yearsRoutineEnd());
flowScheduler.add(current_practiceRoutineBegin());
flowScheduler.add(current_practiceRoutineEachFrame());
flowScheduler.add(current_practiceRoutineEnd());
flowScheduler.add(PHQ9_introRoutineBegin());
flowScheduler.add(PHQ9_introRoutineEachFrame());
flowScheduler.add(PHQ9_introRoutineEnd());
const trials_PHQ9LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_PHQ9LoopBegin(trials_PHQ9LoopScheduler));
flowScheduler.add(trials_PHQ9LoopScheduler);
flowScheduler.add(trials_PHQ9LoopEnd);


flowScheduler.add(BPSQI_introRoutineBegin());
flowScheduler.add(BPSQI_introRoutineEachFrame());
flowScheduler.add(BPSQI_introRoutineEnd());
flowScheduler.add(B_PSQI_Q1_BedTimeRoutineBegin());
flowScheduler.add(B_PSQI_Q1_BedTimeRoutineEachFrame());
flowScheduler.add(B_PSQI_Q1_BedTimeRoutineEnd());
flowScheduler.add(B_PSQI_Q2_WakeTimeRoutineBegin());
flowScheduler.add(B_PSQI_Q2_WakeTimeRoutineEachFrame());
flowScheduler.add(B_PSQI_Q2_WakeTimeRoutineEnd());
flowScheduler.add(B_PSQI_Q3_SleepLatencyRoutineBegin());
flowScheduler.add(B_PSQI_Q3_SleepLatencyRoutineEachFrame());
flowScheduler.add(B_PSQI_Q3_SleepLatencyRoutineEnd());
flowScheduler.add(B_PSQI_Q4_ActualSleepRoutineBegin());
flowScheduler.add(B_PSQI_Q4_ActualSleepRoutineEachFrame());
flowScheduler.add(B_PSQI_Q4_ActualSleepRoutineEnd());
const trials_PSQILoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_PSQILoopBegin(trials_PSQILoopScheduler));
flowScheduler.add(trials_PSQILoopScheduler);
flowScheduler.add(trials_PSQILoopEnd);


const trials_PSQI_6LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_PSQI_6LoopBegin(trials_PSQI_6LoopScheduler));
flowScheduler.add(trials_PSQI_6LoopScheduler);
flowScheduler.add(trials_PSQI_6LoopEnd);


flowScheduler.add(Durel_introRoutineBegin());
flowScheduler.add(Durel_introRoutineEachFrame());
flowScheduler.add(Durel_introRoutineEnd());
const trials_DUREL1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_DUREL1LoopBegin(trials_DUREL1LoopScheduler));
flowScheduler.add(trials_DUREL1LoopScheduler);
flowScheduler.add(trials_DUREL1LoopEnd);


const trials_DUREL2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_DUREL2LoopBegin(trials_DUREL2LoopScheduler));
flowScheduler.add(trials_DUREL2LoopScheduler);
flowScheduler.add(trials_DUREL2LoopEnd);


const trials_DUREL345LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_DUREL345LoopBegin(trials_DUREL345LoopScheduler));
flowScheduler.add(trials_DUREL345LoopScheduler);
flowScheduler.add(trials_DUREL345LoopEnd);


flowScheduler.add(BMRQ_introRoutineBegin());
flowScheduler.add(BMRQ_introRoutineEachFrame());
flowScheduler.add(BMRQ_introRoutineEnd());
const trials_BMRQLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_BMRQLoopBegin(trials_BMRQLoopScheduler));
flowScheduler.add(trials_BMRQLoopScheduler);
flowScheduler.add(trials_BMRQLoopEnd);


flowScheduler.add(PAI_introRoutineBegin());
flowScheduler.add(PAI_introRoutineEachFrame());
flowScheduler.add(PAI_introRoutineEnd());
const trials_PAILoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_PAILoopBegin(trials_PAILoopScheduler));
flowScheduler.add(trials_PAILoopScheduler);
flowScheduler.add(trials_PAILoopEnd);


flowScheduler.add(SOI_introRoutineBegin());
flowScheduler.add(SOI_introRoutineEachFrame());
flowScheduler.add(SOI_introRoutineEnd());
const trials_SOI123LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_SOI123LoopBegin(trials_SOI123LoopScheduler));
flowScheduler.add(trials_SOI123LoopScheduler);
flowScheduler.add(trials_SOI123LoopEnd);


const trials_SOI456LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_SOI456LoopBegin(trials_SOI456LoopScheduler));
flowScheduler.add(trials_SOI456LoopScheduler);
flowScheduler.add(trials_SOI456LoopEnd);


flowScheduler.add(SOI7RoutineBegin());
flowScheduler.add(SOI7RoutineEachFrame());
flowScheduler.add(SOI7RoutineEnd());
flowScheduler.add(SOI8RoutineBegin());
flowScheduler.add(SOI8RoutineEachFrame());
flowScheduler.add(SOI8RoutineEnd());
flowScheduler.add(SOI9RoutineBegin());
flowScheduler.add(SOI9RoutineEachFrame());
flowScheduler.add(SOI9RoutineEnd());
flowScheduler.add(ATAI_introRoutineBegin());
flowScheduler.add(ATAI_introRoutineEachFrame());
flowScheduler.add(ATAI_introRoutineEnd());
const trials_ATAILoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_ATAILoopBegin(trials_ATAILoopScheduler));
flowScheduler.add(trials_ATAILoopScheduler);
flowScheduler.add(trials_ATAILoopEnd);


flowScheduler.add(BSSS4_introRoutineBegin());
flowScheduler.add(BSSS4_introRoutineEachFrame());
flowScheduler.add(BSSS4_introRoutineEnd());
const trials_BSSSLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_BSSSLoopBegin(trials_BSSSLoopScheduler));
flowScheduler.add(trials_BSSSLoopScheduler);
flowScheduler.add(trials_BSSSLoopEnd);


flowScheduler.add(BPAAT_introRoutineBegin());
flowScheduler.add(BPAAT_introRoutineEachFrame());
flowScheduler.add(BPAAT_introRoutineEnd());
const trials_BPAAT1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_BPAAT1LoopBegin(trials_BPAAT1LoopScheduler));
flowScheduler.add(trials_BPAAT1LoopScheduler);
flowScheduler.add(trials_BPAAT1LoopEnd);


const trials_BPAAT2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_BPAAT2LoopBegin(trials_BPAAT2LoopScheduler));
flowScheduler.add(trials_BPAAT2LoopScheduler);
flowScheduler.add(trials_BPAAT2LoopEnd);


flowScheduler.add(finishQUESTION_introRoutineBegin());
flowScheduler.add(finishQUESTION_introRoutineEachFrame());
flowScheduler.add(finishQUESTION_introRoutineEnd());
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
const comprehension_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(comprehension_loopLoopBegin(comprehension_loopLoopScheduler));
flowScheduler.add(comprehension_loopLoopScheduler);
flowScheduler.add(comprehension_loopLoopEnd);











flowScheduler.add(Preparing_to_BART_formallyRoutineBegin());
flowScheduler.add(Preparing_to_BART_formallyRoutineEachFrame());
flowScheduler.add(Preparing_to_BART_formallyRoutineEnd());
flowScheduler.add(resetmoneyRoutineBegin());
flowScheduler.add(resetmoneyRoutineEachFrame());
flowScheduler.add(resetmoneyRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);






flowScheduler.add(finalScoreRoutineBegin());
flowScheduler.add(finalScoreRoutineEachFrame());
flowScheduler.add(finalScoreRoutineEnd());
flowScheduler.add(instruction_fishRoutineBegin());
flowScheduler.add(instruction_fishRoutineEachFrame());
flowScheduler.add(instruction_fishRoutineEnd());
const trials_fishLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_fishLoopBegin(trials_fishLoopScheduler));
flowScheduler.add(trials_fishLoopScheduler);
flowScheduler.add(trials_fishLoopEnd);



flowScheduler.add(end_fishRoutineBegin());
flowScheduler.add(end_fishRoutineEachFrame());
flowScheduler.add(end_fishRoutineEnd());
flowScheduler.add(datauploadRoutineBegin());
flowScheduler.add(datauploadRoutineEachFrame());
flowScheduler.add(datauploadRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'PHQ9Qutext.xlsx', 'path': 'PHQ9Qutext.xlsx'},
    {'name': 'B_PSQIQUESTIONTEXT5.xlsx', 'path': 'B_PSQIQUESTIONTEXT5.xlsx'},
    {'name': 'B_PSQIQUESTIONTEXT6.xlsx', 'path': 'B_PSQIQUESTIONTEXT6.xlsx'},
    {'name': 'DURELquestion1.xlsx', 'path': 'DURELquestion1.xlsx'},
    {'name': 'DURELquestion2.xlsx', 'path': 'DURELquestion2.xlsx'},
    {'name': 'DURELquestion345.xlsx', 'path': 'DURELquestion345.xlsx'},
    {'name': 'BMRQ.xlsx', 'path': 'BMRQ.xlsx'},
    {'name': 'PAI.xlsx', 'path': 'PAI.xlsx'},
    {'name': 'SOI123.xlsx', 'path': 'SOI123.xlsx'},
    {'name': 'SOI456.xlsx', 'path': 'SOI456.xlsx'},
    {'name': 'ATAIQUESTIONTEXT.xlsx', 'path': 'ATAIQUESTIONTEXT.xlsx'},
    {'name': 'BSSSQUESTIONTEXT.xlsx', 'path': 'BSSSQUESTIONTEXT.xlsx'},
    {'name': 'BPAATQT1.xlsx', 'path': 'BPAATQT1.xlsx'},
    {'name': 'BPAATQT2.xlsx', 'path': 'BPAATQT2.xlsx'},
    {'name': 'spreadsheets/practice_conditions.xlsx', 'path': 'spreadsheets/practice_conditions.xlsx'},
    {'name': 'spreadsheets/conditions.xlsx', 'path': 'spreadsheets/conditions.xlsx'},
    {'name': 'intro/Welcome_english.png', 'path': 'intro/Welcome_english.png'},
    {'name': 'intro/PHQ9_intro_english.png', 'path': 'intro/PHQ9_intro_english.png'},
    {'name': 'intro/BPSQI_intro_english.png', 'path': 'intro/BPSQI_intro_english.png'},
    {'name': 'intro/DUREL_intro_english.png', 'path': 'intro/DUREL_intro_english.png'},
    {'name': 'intro/BMRQ_intro_english.png', 'path': 'intro/BMRQ_intro_english.png'},
    {'name': 'intro/PAI_intro_english.png', 'path': 'intro/PAI_intro_english.png'},
    {'name': 'intro/SOI_intro_english.png', 'path': 'intro/SOI_intro_english.png'},
    {'name': 'intro/ATAI_intro_english.png', 'path': 'intro/ATAI_intro_english.png'},
    {'name': 'intro/BSSS4_intro_english.png', 'path': 'intro/BSSS4_intro_english.png'},
    {'name': 'intro/BPAAT_intro_english.png', 'path': 'intro/BPAAT_intro_english.png'},
    {'name': 'intro/finishquestions_intro_english.png', 'path': 'intro/finishquestions_intro_english.png'},
    {'name': 'intro/bart_english.png', 'path': 'intro/bart_english.png'},
    {'name': 'assets/bang.wav', 'path': 'assets/bang.wav'},
    {'name': 'assets/background.png', 'path': 'assets/background.png'},
    {'name': 'assets/redBalloon.png', 'path': 'assets/redBalloon.png'},
    {'name': 'images/lake5.jpg', 'path': 'images/lake5.jpg'},
    {'name': 'images/lake1.jpg', 'path': 'images/lake1.jpg'},
    {'name': 'images/lake2.jpg', 'path': 'images/lake2.jpg'},
    {'name': 'images/lake3.png', 'path': 'images/lake3.png'},
    {'name': 'images/rod.png', 'path': 'images/rod.png'},
    {'name': 'images/fish1.png', 'path': 'images/fish1.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'images/nofish.png', 'path': 'images/nofish.png'},
    {'name': 'images/fish4.png', 'path': 'images/fish4.png'},
    {'name': 'images/fish3.png', 'path': 'images/fish3.png'},
    {'name': 'images/fish2.png', 'path': 'images/fish2.png'},
    {'name': 'assets/bang.wav', 'path': 'assets/bang.wav'},
    {'name': 'assets/blueBalloon.png', 'path': 'assets/blueBalloon.png'},
    {'name': 'assets/greenBalloon.png', 'path': 'assets/greenBalloon.png'},
    {'name': 'assets/redBalloon.png', 'path': 'assets/redBalloon.png'},
    {'name': 'assets/bang.mp3', 'path': 'assets/bang.mp3'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.WARNING);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + (("data" + "/") + `${expInfo["participant"]}_${expInfo["date"]}`));
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var Welcome_to_experimentClock;
var Welcome_eng_image;
var key_resp_13;
var GenderClock;
var Q_gender_text;
var gender_female_button;
var gender_male_button;
var gender_nonbinary_button;
var gender_prefernot_button;
var Q1;
var AgeClock;
var Q_age_text;
var textbox_age;
var enter_hint_age;
var Q2;
var hint_age;
var relationship_statusClock;
var Q_relationship_status;
var relationship_single;
var relationship_Inarelationship;
var relationship_Married;
var relationship_Divorced;
var Q3;
var nationalityClock;
var nationality_text;
var nationality_china;
var nationality_malaysia;
var nationality_other;
var nationality_prefernot;
var Q4;
var hint_nationality;
var EducationClock;
var Q_edu_level_text;
var edu_btn_1;
var edu_btn_2;
var edu_btn_3;
var edu_btn_4;
var edu_btn_5;
var Q5;
var religionClock;
var Q_religion_text;
var religion_btn_1;
var religion_btn_2;
var religion_btn_3;
var religion_btn_4;
var religion_btn_5;
var religion_btn_6;
var religion_btn_7;
var Q6;
var ethnicityClock;
var Q_ethnicity_text;
var ethnicity_btn_1;
var ethnicity_btn_2;
var ethnicity_btn_3;
var ethnicity_btn_4;
var Q7;
var HouseholdStructureClock;
var householdstructure_question_text;
var textbox_household;
var textbox_ABCDE;
var textbox_FGHI;
var Q8;
var hint_household;
var hint_household2;
var occupation_typeClock;
var Q_occupation;
var occupation_Education;
var occupation_Healthcare;
var occupation_Government;
var occupation_Business;
var occupation_Selfemployed;
var occupation_Homemaker;
var occupation_Student;
var occupation_Unemployed;
var occupation_Retired;
var occupation_Other;
var occupation_Prefernottosay;
var Q9;
var family_incomeClock;
var Q_family_income;
var income_20000;
var income_20001to50000;
var income_50001to100000;
var income_100001to150000;
var income_150001to200000;
var income_Morethan200000;
var income_Prefernottosay;
var Q10;
var HINT_Q10;
var heightClock;
var Q_height_text;
var textbox_height;
var height_hint;
var Q11;
var weightClock;
var Q_weight_text;
var textbox_weight;
var weight_hint;
var Q12;
var waistlineClock;
var Q_waistline_text;
var textbox_waistline;
var waistline_hint;
var Q13;
var ever_drink_alcoholClock;
var Q_ever_drink_alcohol;
var ever_drink_alcohol_yes;
var ever_drink_alcohol_no;
var Q14;
var last_drink_timeClock;
var Q_last_drink_time;
var last_drink_time_30days;
var last_drink_time_in12mons;
var last_drink_time_over12mons;
var last_drink_time_never;
var Q15;
var drink_freq_12mo_2Clock;
var Q_drink_freq_12mo;
var drink_freq_12mo_Everyday;
var drink_freq_12mo_Severaltimesaweek;
var drink_freq_12mo_Severaltimesamonth;
var drink_freq_12mo_Rarely;
var drink_freq_12mo_Never;
var Q16;
var drink_amount_12moClock;
var Q_drink_amount_12mo;
var drink_amount_12mo_0glass;
var drink_amount_12mo_1glass;
var drink_amount_12mo_2glass;
var drink_amount_12mo_3glasses;
var drink_amount_12mo_4glasses;
var drink_amount_12mo_5glassesmore;
var Q17;
var ever_smokeClock;
var Q_ever_smoke;
var ever_smoke_yes;
var ever_smoke_no;
var Q18;
var start_smoke_ageClock;
var Q_start_smoke_age;
var textbox_start_smoke_age;
var Q19;
var hit_star_smoke_age;
var hint_star_smoke;
var cigs_per_dayClock;
var Q_cigs_per_day;
var textbox_cigs_per_day;
var Q20;
var hit_cigs;
var hint_cigs;
var self_health_statusClock;
var Q_self_health_status;
var self_health_status_Verygood;
var self_health_status_Good;
var self_health_status_Average;
var self_health_status_Poor;
var self_health_status_Verypoor;
var Q21;
var hearing_statusClock;
var Q_hearing_status;
var hearing_NO;
var hearing_YRS;
var Q22;
var music_trainingClock;
var Q_music_taining;
var music_training_YES;
var music_training_NO;
var Q23;
var textbox_hint;
var training_yearsClock;
var Q_trainig_years;
var textbox_training_years;
var hint_training_years;
var Q24;
var current_practiceClock;
var Q_current_practice;
var current_practice_YES;
var current_practice_NO;
var Q25;
var PHQ9_introClock;
var PHQ9_intro_image;
var key_resp_4;
var PHQ_9Clock;
var PHQ_9QuestionText;
var PHQ_9questionslide;
var Q26toQ34;
var BPSQI_introClock;
var BPSQI_intro_image;
var key_resp_5;
var B_PSQI_Q1_BedTimeClock;
var Q1_BedTime;
var textbox_Q1Bedtime;
var enter_hint;
var Q35;
var B_PSQI_Q2_WakeTimeClock;
var Q2_WakeTime;
var textbox_Q2WakeTime;
var enter_hint_2;
var Q36;
var B_PSQI_Q3_SleepLatencyClock;
var Q3_SleepLatency;
var textbox_Q3SleepLatency;
var enter_hint_3;
var Q37;
var B_PSQI_Q4_ActualSleepClock;
var Q4_ActualSleep;
var textbox_Q4ActualSleep;
var enter_hint_4;
var Q38;
var hint_Q4;
var B_PSQI5Clock;
var B_PSQIquestionText;
var B_PSQIquestionslide;
var Q39;
var B_PSQI6Clock;
var B_PSQIquestionText6;
var B_PSQIquestionslide6;
var Q40;
var Durel_introClock;
var DUREL_intro_image;
var key_resp_6;
var DUREL1Clock;
var DUREL_questionText;
var DURELquestionslide;
var Q41;
var DUREL2Clock;
var DUREL_questionText2;
var DURELquestionslide2;
var Q42;
var DUREL345Clock;
var DUREL_questionText345;
var DURELquestionslide345;
var Q43toQ45;
var BMRQ_introClock;
var BMRQ_intro_image;
var key_resp_7;
var BMRQClock;
var BMRQ_questionText;
var BMRQ_slider;
var Q46toQ65;
var PAI_introClock;
var PAI_intro_image;
var key_resp_8;
var PAIClock;
var PAI_questionText;
var PAIquestionslide;
var Q66toQ69;
var SOI_introClock;
var SOI_intro_image;
var key_resp_12;
var Soi123Clock;
var Q_Soi123;
var SOI123_slide;
var Q70toQ72;
var text_3;
var Soi456Clock;
var Q_Soi456;
var SOI456_Slide;
var Q73toQ75;
var text_4;
var SD;
var D;
var SOI7Clock;
var Q_SOI7;
var SOI7_1_never;
var SOI7_2_veryseldom;
var SOI7_3_once_every_2or3_months;
var SOI7_4_onceamonth;
var SOI7_5_once_every_two_weeks;
var SOI7_6_onceaweek;
var SOI7_7_several_times_per_week;
var SOI7_8_early_every_day;
var SOI7_9_atleastonceaday;
var Q76;
var SOI8Clock;
var Q_SOI8;
var SOI8_1_never;
var SOI8_2_veryseldom;
var SOI8_3_once_every_2or3_months;
var SOI8_4_onceamonth;
var SOI8_5_once_every_two_weeks;
var SOI8_6_onceaweek;
var SOI8_7_several_times_per_week;
var SOI8_8_early_every_day;
var SOI8_9_atleastonceaday;
var Q77;
var SOI9Clock;
var Q_SOI9;
var SOI9_1_never;
var SOI9_2_veryseldom;
var SOI9_3_once_every_2or3_months;
var SOI9_4_onceamonth;
var SOI9_5_once_every_two_weeks;
var SOI9_6_onceaweek;
var SOI9_7_several_times_per_week;
var SOI9_8_early_every_day;
var SOI9_9_atleastonceaday;
var Q78;
var ATAI_introClock;
var ATAI_intro_image;
var key_resp_9;
var ATAIClock;
var ATAI_QuestionText;
var ATAIquestionslide;
var Q79toQ83;
var Q79_SD;
var Q79_SA;
var BSSS4_introClock;
var BSSS4_intro_image;
var key_resp_10;
var BSSSClock;
var BSSS_questiontext;
var BSSS_questionslide;
var Q84toQ91;
var BPAAT_introClock;
var BPAAT_intro_image;
var key_resp_11;
var BPAAT1Clock;
var BPAAT_questiontext1;
var BPAATquestionslide1;
var Q92;
var BPAAT2Clock;
var BPAAT_questiontext2;
var BPAATquestionslide2;
var Q93;
var finishQUESTION_introClock;
var finish_questions_image;
var resp_2;
var instructionsClock;
var background;
var resp;
var pop_sound;
var reset_balloonClock;
var practice_trialClock;
var practice_bg;
var practice_bankButton;
var bankedEarnings;
var balloonEarnings;
var bankedText;
var lastBalloonEarnings;
var thisBalloonEarnings;
var practice_reminder;
var practice_balloonValTxt;
var practice_bankedTxt;
var balloonSize;
var balloonMsgHeight;
var practice_balloonBody;
var practice_trialcount;
var practice_feedbackClock;
var practice_background_3;
var feedbackText;
var practice_feedbacktxt;
var practice_bankedTxt_2;
var practice_reminder_2;
var practice_trialcount_2;
var practice_finalScoreClock;
var practice_background_4;
var practice_scoremsg;
var text;
var key_resp;
var resetmoneypracticeClock;
var comprehension_checkClock;
var understand_2;
var key_resp_comprehension;
var Preparing_to_BART_formallyClock;
var understand3_formal_BART;
var key_resp_comprehension_2;
var resetmoneyClock;
var trialClock;
var background_2;
var bankButton;
var reminder;
var bankedTxt;
var balloonBody;
var trialcount;
var balloonValTxt;
var feedbackClock;
var background_3;
var feedbacktxt;
var bankedTxt_2;
var balloonValTxt_2;
var reminder_2;
var trialcount_2;
var finalScoreClock;
var background_4;
var scoremsg;
var text_2;
var key_resp_2;
var instruction_fishClock;
var background_fish;
var instructions_txt_fish;
var start_button_fish;
var trial_fishClock;
var instruct_fish;
var lake1;
var lake2;
var lake3;
var mouse;
var rod;
var lake1_wins;
var lake2_wins;
var lake3_wins;
var nfish;
var fishcountim;
var fishcount;
var fish_trial_index;
var fishTrialDisplay;
var feedback_fishClock;
var fb_txtbox;
var fb_image;
var fishcountim_2;
var fishcount_2;
var end_fishClock;
var background_5;
var end_txt;
var exit_button;
var datauploadClock;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Welcome_to_experiment"
  Welcome_to_experimentClock = new util.Clock();
  Welcome_eng_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Welcome_eng_image', units : undefined, 
    image : 'intro/Welcome_english.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.4, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_13 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Gender"
  GenderClock = new util.Clock();
  Q_gender_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_gender_text',
    text: '1.What is your gender?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  gender_female_button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'gender_female_button',
    text: 'Female',
    font: 'Arial',
    pos: [0, 0.2],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  gender_female_button.clock = new util.Clock();
  
  gender_male_button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'gender_male_button',
    text: 'Male',
    font: 'Arial',
    pos: [0, 0.0],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  gender_male_button.clock = new util.Clock();
  
  gender_nonbinary_button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'gender_nonbinary_button',
    text: 'Non-binary/Transgender',
    font: 'Arial',
    pos: [0, (- 0.2)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  gender_nonbinary_button.clock = new util.Clock();
  
  gender_prefernot_button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'gender_prefernot_button',
    text: 'Prefer not to say',
    font: 'Arial',
    pos: [0, (- 0.4)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  gender_prefernot_button.clock = new util.Clock();
  
  Q1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q1',
    text: 'Question 1 of 93\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "Age"
  AgeClock = new util.Clock();
  Q_age_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_age_text',
    text: '2.What is your year of birth? (e.g., 1999)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_age = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_age',
    text: '',
    placeholder: 'Please enter 4-digit year',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.6, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  enter_hint_age = new visual.TextStim({
    win: psychoJS.window,
    name: 'enter_hint_age',
    text: 'After answering, please press the "Enter" key to move to the next question.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  Q2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q2',
    text: 'Question 2 of 93\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  hint_age = new visual.TextStim({
    win: psychoJS.window,
    name: 'hint_age',
    text: 'Please enter 4-digit year',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "relationship_status"
  relationship_statusClock = new util.Clock();
  Q_relationship_status = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_relationship_status',
    text: '3.What is your current relationship status?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  relationship_single = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'relationship_single',
    text: 'Single',
    font: 'Arial',
    pos: [0, 0.2],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  relationship_single.clock = new util.Clock();
  
  relationship_Inarelationship = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'relationship_Inarelationship',
    text: 'In a relationship',
    font: 'Arial',
    pos: [0, 0.0],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  relationship_Inarelationship.clock = new util.Clock();
  
  relationship_Married = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'relationship_Married',
    text: 'Married',
    font: 'Arial',
    pos: [0, (- 0.2)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  relationship_Married.clock = new util.Clock();
  
  relationship_Divorced = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'relationship_Divorced',
    text: 'Divorced or widowed',
    font: 'Arial',
    pos: [0, (- 0.4)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  relationship_Divorced.clock = new util.Clock();
  
  Q3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q3',
    text: 'Question 3 of 93\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "nationality"
  nationalityClock = new util.Clock();
  nationality_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'nationality_text',
    text: '4.What is your current nationality (citizenship)?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  nationality_china = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'nationality_china',
    text: 'China',
    font: 'Arial',
    pos: [0, 0.2],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  nationality_china.clock = new util.Clock();
  
  nationality_malaysia = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'nationality_malaysia',
    text: 'Malaysia',
    font: 'Arial',
    pos: [0, 0.0],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  nationality_malaysia.clock = new util.Clock();
  
  nationality_other = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'nationality_other',
    text: 'Other',
    font: 'Arial',
    pos: [0, (- 0.2)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  nationality_other.clock = new util.Clock();
  
  nationality_prefernot = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'nationality_prefernot',
    text: 'Prefer not to say',
    font: 'Arial',
    pos: [0, (- 0.4)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  nationality_prefernot.clock = new util.Clock();
  
  Q4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q4',
    text: 'Question 4 of 93\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  hint_nationality = new visual.TextStim({
    win: psychoJS.window,
    name: 'hint_nationality',
    text: 'Please answer according to your passport or official document.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.03,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "Education"
  EducationClock = new util.Clock();
  Q_edu_level_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_edu_level_text',
    text: '5.What is the highest level of formal education you have completed?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  edu_btn_1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'edu_btn_1',
    text: 'Primary school or below',
    font: 'Arial',
    pos: [0, 0.2],
    size: [0.9, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  edu_btn_1.clock = new util.Clock();
  
  edu_btn_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'edu_btn_2',
    text: 'Secondary / SPM',
    font: 'Arial',
    pos: [0, 0.05],
    size: [0.9, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  edu_btn_2.clock = new util.Clock();
  
  edu_btn_3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'edu_btn_3',
    text: 'STPM / A level / Diploma',
    font: 'Arial',
    pos: [0, (- 0.1)],
    size: [0.9, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  edu_btn_3.clock = new util.Clock();
  
  edu_btn_4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'edu_btn_4',
    text: 'Degree',
    font: 'Arial',
    pos: [0, (- 0.25)],
    size: [0.9, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  edu_btn_4.clock = new util.Clock();
  
  edu_btn_5 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'edu_btn_5',
    text: 'Master/Phd',
    font: 'Arial',
    pos: [0, (- 0.4)],
    size: [0.9, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -5,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  edu_btn_5.clock = new util.Clock();
  
  Q5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q5',
    text: 'Question 5 of 93\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "religion"
  religionClock = new util.Clock();
  Q_religion_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_religion_text',
    text: '6.What is your religion or religious affiliation?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.05,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  religion_btn_1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'religion_btn_1',
    text: 'Buddhism',
    font: 'Arial',
    pos: [(- 0.4), 0.3],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  religion_btn_1.clock = new util.Clock();
  
  religion_btn_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'religion_btn_2',
    text: 'Christian',
    font: 'Arial',
    pos: [0.4, 0.3],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  religion_btn_2.clock = new util.Clock();
  
  religion_btn_3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'religion_btn_3',
    text: 'Islam',
    font: 'Arial',
    pos: [(- 0.4), 0.1],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  religion_btn_3.clock = new util.Clock();
  
  religion_btn_4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'religion_btn_4',
    text: 'Hinduism',
    font: 'Arial',
    pos: [0.4, 0.1],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  religion_btn_4.clock = new util.Clock();
  
  religion_btn_5 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'religion_btn_5',
    text: 'Taoism / Folk religion',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -5,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  religion_btn_5.clock = new util.Clock();
  
  religion_btn_6 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'religion_btn_6',
    text: 'No religion',
    font: 'Arial',
    pos: [0.4, (- 0.1)],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -6,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  religion_btn_6.clock = new util.Clock();
  
  religion_btn_7 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'religion_btn_7',
    text: 'Others',
    font: 'Arial',
    pos: [(- 0.4), (- 0.3)],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -7,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  religion_btn_7.clock = new util.Clock();
  
  Q6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q6',
    text: 'Question 6 of 93\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "ethnicity"
  ethnicityClock = new util.Clock();
  Q_ethnicity_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_ethnicity_text',
    text: '7.Which ethnic group do you consider yourself to belong to?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  ethnicity_btn_1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ethnicity_btn_1',
    text: 'Malay',
    font: 'Arial',
    pos: [(- 0.4), 0.3],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  ethnicity_btn_1.clock = new util.Clock();
  
  ethnicity_btn_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ethnicity_btn_2',
    text: 'Malaysian Chinese',
    font: 'Arial',
    pos: [0.4, 0.3],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  ethnicity_btn_2.clock = new util.Clock();
  
  ethnicity_btn_3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ethnicity_btn_3',
    text: 'Indian',
    font: 'Arial',
    pos: [(- 0.4), 0.1],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  ethnicity_btn_3.clock = new util.Clock();
  
  ethnicity_btn_4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ethnicity_btn_4',
    text: 'Others',
    font: 'Arial',
    pos: [0.4, 0.1],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  ethnicity_btn_4.clock = new util.Clock();
  
  Q7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q7',
    text: 'Question 7 of 93\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "HouseholdStructure"
  HouseholdStructureClock = new util.Clock();
  householdstructure_question_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'householdstructure_question_text',
    text: '8.Who do you currently live with?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_household = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_household',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, (- 0.2)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  textbox_ABCDE = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_ABCDE',
    text: 'A. Spouse\nB. Children\nC. Parents     \nD. Grandparents\nE. Grandchildren',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.7), 0.1], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.7, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'top-left',
    depth: -2.0 
  });
  
  textbox_FGHI = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_FGHI',
    text: 'F. Siblings  \nG. Other relatives  \nH. Non-relatives (e.g., friends)  \nI. I live alone  \n\n',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0.1], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.9, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'top-left',
    depth: -3.0 
  });
  
  Q8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q8',
    text: 'Question 8 of 93\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  hint_household = new visual.TextStim({
    win: psychoJS.window,
    name: 'hint_household',
    text: 'After answering, please press the "Enter" key to move to the next question.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.03,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -6.0 
  });
  
  hint_household2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'hint_household2',
    text: ' (Select all that apply; but if you select "I", do not select any other options)  \nPlease type the corresponding letter(s), e.g., A,C,E',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.03,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "occupation_type"
  occupation_typeClock = new util.Clock();
  Q_occupation = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_occupation',
    text: '9.What is your current main occupation?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  occupation_Education = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'occupation_Education',
    text: 'Education / Training',
    font: 'Arial',
    pos: [(- 0.4), 0.3],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  occupation_Education.clock = new util.Clock();
  
  occupation_Healthcare = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'occupation_Healthcare',
    text: 'Healthcare / Medical',
    font: 'Arial',
    pos: [0.4, 0.3],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  occupation_Healthcare.clock = new util.Clock();
  
  occupation_Government = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'occupation_Government',
    text: 'Government / NGO / Public service',
    font: 'Arial',
    pos: [(- 0.4), 0.15],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  occupation_Government.clock = new util.Clock();
  
  occupation_Business = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'occupation_Business',
    text: 'Business / Commerce / Sales',
    font: 'Arial',
    pos: [0.4, 0.15],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  occupation_Business.clock = new util.Clock();
  
  occupation_Selfemployed = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'occupation_Selfemployed',
    text: 'Self-employed / Freelancer',
    font: 'Arial',
    pos: [(- 0.4), 0],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -5,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  occupation_Selfemployed.clock = new util.Clock();
  
  occupation_Homemaker = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'occupation_Homemaker',
    text: 'Homemaker / Caregiver',
    font: 'Arial',
    pos: [0.4, 0],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -6,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  occupation_Homemaker.clock = new util.Clock();
  
  occupation_Student = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'occupation_Student',
    text: 'Student',
    font: 'Arial',
    pos: [(- 0.4), (- 0.15)],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -7,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  occupation_Student.clock = new util.Clock();
  
  occupation_Unemployed = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'occupation_Unemployed',
    text: 'Unemployed / Temporary / Seeking job',
    font: 'Arial',
    pos: [0.4, (- 0.15)],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -8,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  occupation_Unemployed.clock = new util.Clock();
  
  occupation_Retired = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'occupation_Retired',
    text: 'Retired',
    font: 'Arial',
    pos: [(- 0.4), (- 0.3)],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -9,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  occupation_Retired.clock = new util.Clock();
  
  occupation_Other = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'occupation_Other',
    text: 'Other',
    font: 'Arial',
    pos: [0.4, (- 0.3)],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -10,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  occupation_Other.clock = new util.Clock();
  
  occupation_Prefernottosay = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'occupation_Prefernottosay',
    text: 'Prefer not to say',
    font: 'Arial',
    pos: [0.0, (- 0.43)],
    size: [0.7, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -11,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  occupation_Prefernottosay.clock = new util.Clock();
  
  Q9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q9',
    text: 'Question 9 of 93\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -12.0 
  });
  
  // Initialize components for Routine "family_income"
  family_incomeClock = new util.Clock();
  Q_family_income = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_family_income',
    text: "10.What was your household's total income last year(approximate)?",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  income_20000 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'income_20000',
    text: '20,000 or below',
    font: 'Arial',
    pos: [(- 0.4), 0.2],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  income_20000.clock = new util.Clock();
  
  income_20001to50000 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'income_20001to50000',
    text: '20,001 – 50,000',
    font: 'Arial',
    pos: [0.4, 0.2],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  income_20001to50000.clock = new util.Clock();
  
  income_50001to100000 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'income_50001to100000',
    text: '50,001 – 100,000',
    font: 'Arial',
    pos: [(- 0.4), 0.05],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  income_50001to100000.clock = new util.Clock();
  
  income_100001to150000 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'income_100001to150000',
    text: '100,001 – 150,000',
    font: 'Arial',
    pos: [0.4, 0.05],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  income_100001to150000.clock = new util.Clock();
  
  income_150001to200000 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'income_150001to200000',
    text: '150,001 – 200,000',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -5,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  income_150001to200000.clock = new util.Clock();
  
  income_Morethan200000 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'income_Morethan200000',
    text: 'More than 200,000',
    font: 'Arial',
    pos: [0.4, (- 0.1)],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -6,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  income_Morethan200000.clock = new util.Clock();
  
  income_Prefernottosay = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'income_Prefernottosay',
    text: 'Prefer not to say',
    font: 'Arial',
    pos: [0, (- 0.25)],
    size: [0.7, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -7,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  income_Prefernottosay.clock = new util.Clock();
  
  Q10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q10',
    text: 'Question 10 of 93\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -8.0 
  });
  
  HINT_Q10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'HINT_Q10',
    text: 'Please enter the amount in your local currency according to your nationality.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.03,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -9.0 
  });
  
  // Initialize components for Routine "height"
  heightClock = new util.Clock();
  Q_height_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_height_text',
    text: '11.Please enter your height in cm (e.g., 165)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_height = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_height',
    text: '',
    placeholder: 'Type Here...',
    font: 'Arial',
    pos: [0, 0.2], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  height_hint = new visual.TextStim({
    win: psychoJS.window,
    name: 'height_hint',
    text: 'This item is optional and will only be used for calculating health indicators, not for identification.\n\nAfter answering, please press the "Enter" key to move to the next question.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.03,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  Q11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q11',
    text: 'Question 11 of 93',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "weight"
  weightClock = new util.Clock();
  Q_weight_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_weight_text',
    text: '12.Please enter your weight in kg (e.g., 55)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_weight = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_weight',
    text: '',
    placeholder: 'Type Here...',
    font: 'Arial',
    pos: [0, 0.2], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  weight_hint = new visual.TextStim({
    win: psychoJS.window,
    name: 'weight_hint',
    text: 'This item will only be used for calculating health indicators, not for identification.\n\nAfter answering, please press the "Enter" key to move to the next question.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.03,  wrapWidth: 1.8, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  Q12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q12',
    text: 'Question 12 of 93\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "waistline"
  waistlineClock = new util.Clock();
  Q_waistline_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_waistline_text',
    text: '13.What is your waist circumference? (cm)\n(Please fill in a number, for example, 90)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_waistline = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_waistline',
    text: '',
    placeholder: 'Please enter...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.7, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  waistline_hint = new visual.TextStim({
    win: psychoJS.window,
    name: 'waistline_hint',
    text: 'This project is only used for calculating health indicators, not for identity verification. Please feel free to fill in. \nAfter answering, please press the Enter key to move to the next question.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], draggable: false, height: 0.03,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  Q13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q13',
    text: 'Question 13 of 93',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "ever_drink_alcohol"
  ever_drink_alcoholClock = new util.Clock();
  Q_ever_drink_alcohol = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_ever_drink_alcohol',
    text: '14.Have you ever consumed any type of alcoholic beverage\n(e.g., rice wine, yellow wine, red wine, or other alcohol-containing drinks)?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: 1.42, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  ever_drink_alcohol_yes = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ever_drink_alcohol_yes',
    text: 'Yes',
    font: 'Arial',
    pos: [0, 0],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  ever_drink_alcohol_yes.clock = new util.Clock();
  
  ever_drink_alcohol_no = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ever_drink_alcohol_no',
    text: 'No',
    font: 'Arial',
    pos: [0, (- 0.15)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  ever_drink_alcohol_no.clock = new util.Clock();
  
  Q14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q14',
    text: 'Question 14 of 93\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "last_drink_time"
  last_drink_timeClock = new util.Clock();
  Q_last_drink_time = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_last_drink_time',
    text: '15.When was the last time you drank alcohol?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  last_drink_time_30days = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'last_drink_time_30days',
    text: 'Within the past 30 days',
    font: 'Arial',
    pos: [0, 0.2],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  last_drink_time_30days.clock = new util.Clock();
  
  last_drink_time_in12mons = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'last_drink_time_in12mons',
    text: 'Within the past 12 months',
    font: 'Arial',
    pos: [0, 0.0],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  last_drink_time_in12mons.clock = new util.Clock();
  
  last_drink_time_over12mons = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'last_drink_time_over12mons',
    text: 'More than 12 months ago',
    font: 'Arial',
    pos: [0, (- 0.2)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  last_drink_time_over12mons.clock = new util.Clock();
  
  last_drink_time_never = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'last_drink_time_never',
    text: 'Never drank alcohol',
    font: 'Arial',
    pos: [0, (- 0.4)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  last_drink_time_never.clock = new util.Clock();
  
  Q15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q15',
    text: 'Question 15 of 93\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "drink_freq_12mo_2"
  drink_freq_12mo_2Clock = new util.Clock();
  Q_drink_freq_12mo = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_drink_freq_12mo',
    text: '16.In the past 12 months, how often did you usually drink alcohol?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.42, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  drink_freq_12mo_Everyday = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'drink_freq_12mo_Everyday',
    text: 'Every day',
    font: 'Arial',
    pos: [0, 0.2],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  drink_freq_12mo_Everyday.clock = new util.Clock();
  
  drink_freq_12mo_Severaltimesaweek = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'drink_freq_12mo_Severaltimesaweek',
    text: 'Several times a week',
    font: 'Arial',
    pos: [0, 0.05],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  drink_freq_12mo_Severaltimesaweek.clock = new util.Clock();
  
  drink_freq_12mo_Severaltimesamonth = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'drink_freq_12mo_Severaltimesamonth',
    text: 'Several times a month',
    font: 'Arial',
    pos: [0, (- 0.1)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  drink_freq_12mo_Severaltimesamonth.clock = new util.Clock();
  
  drink_freq_12mo_Rarely = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'drink_freq_12mo_Rarely',
    text: 'Rarely',
    font: 'Arial',
    pos: [0, (- 0.25)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  drink_freq_12mo_Rarely.clock = new util.Clock();
  
  drink_freq_12mo_Never = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'drink_freq_12mo_Never',
    text: 'Never',
    font: 'Arial',
    pos: [0, (- 0.4)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -5,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  drink_freq_12mo_Never.clock = new util.Clock();
  
  Q16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q16',
    text: 'Question 16 of 93\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "drink_amount_12mo"
  drink_amount_12moClock = new util.Clock();
  Q_drink_amount_12mo = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_drink_amount_12mo',
    text: '17.In the past 12 months, how many drinks did you usually consume each time?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  drink_amount_12mo_0glass = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'drink_amount_12mo_0glass',
    text: '0 drink',
    font: 'Arial',
    pos: [0, 0.24],
    size: [1, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  drink_amount_12mo_0glass.clock = new util.Clock();
  
  drink_amount_12mo_1glass = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'drink_amount_12mo_1glass',
    text: '1 drink',
    font: 'Arial',
    pos: [0, 0.12],
    size: [1, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  drink_amount_12mo_1glass.clock = new util.Clock();
  
  drink_amount_12mo_2glass = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'drink_amount_12mo_2glass',
    text: '2 drinks',
    font: 'Arial',
    pos: [0, 0],
    size: [1, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  drink_amount_12mo_2glass.clock = new util.Clock();
  
  drink_amount_12mo_3glasses = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'drink_amount_12mo_3glasses',
    text: '3 drinks',
    font: 'Arial',
    pos: [0, (- 0.12)],
    size: [1, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  drink_amount_12mo_3glasses.clock = new util.Clock();
  
  drink_amount_12mo_4glasses = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'drink_amount_12mo_4glasses',
    text: '4 drinks',
    font: 'Arial',
    pos: [0, (- 0.24)],
    size: [1, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -5,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  drink_amount_12mo_4glasses.clock = new util.Clock();
  
  drink_amount_12mo_5glassesmore = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'drink_amount_12mo_5glassesmore',
    text: '5 or more drinks',
    font: 'Arial',
    pos: [0, (- 0.37)],
    size: [1, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -6,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  drink_amount_12mo_5glassesmore.clock = new util.Clock();
  
  Q17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q17',
    text: 'Question 17 of 93\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "ever_smoke"
  ever_smokeClock = new util.Clock();
  Q_ever_smoke = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_ever_smoke',
    text: '18.Have you ever smoked?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  ever_smoke_yes = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ever_smoke_yes',
    text: 'Yes',
    font: 'Arial',
    pos: [0, 0.2],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  ever_smoke_yes.clock = new util.Clock();
  
  ever_smoke_no = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ever_smoke_no',
    text: 'No',
    font: 'Arial',
    pos: [0, 0.0],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  ever_smoke_no.clock = new util.Clock();
  
  Q18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q18',
    text: 'Question 18 of 93\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "start_smoke_age"
  start_smoke_ageClock = new util.Clock();
  Q_start_smoke_age = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_start_smoke_age',
    text: '19.At approximately what age did you start smoking?(years old)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.44, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_start_smoke_age = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_start_smoke_age',
    text: '',
    placeholder: 'Please enter...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.6, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  Q19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q19',
    text: 'Question 19 of 93\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  hit_star_smoke_age = new visual.TextStim({
    win: psychoJS.window,
    name: 'hit_star_smoke_age',
    text: 'After answering, please press the "Enter" key to move to the next question.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.03,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  hint_star_smoke = new visual.TextStim({
    win: psychoJS.window,
    name: 'hint_star_smoke',
    text: '(Please fill in the number, for example, 21; if you do not smoke, please fill in 0)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.03,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "cigs_per_day"
  cigs_per_dayClock = new util.Clock();
  Q_cigs_per_day = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_cigs_per_day',
    text: '20.About how many cigarettes do you currently smoke per day?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.44, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_cigs_per_day = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_cigs_per_day',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.6, 0.07],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  Q20 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q20',
    text: 'Question 20 of 93\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  hit_cigs = new visual.TextStim({
    win: psychoJS.window,
    name: 'hit_cigs',
    text: 'After answering, please press the "Enter" key to move to the next question.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], draggable: false, height: 0.03,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  hint_cigs = new visual.TextStim({
    win: psychoJS.window,
    name: 'hint_cigs',
    text: '(Please fill in the number, for example, 10; if you do not smoke, please fill in 0)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.03,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "self_health_status"
  self_health_statusClock = new util.Clock();
  Q_self_health_status = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_self_health_status',
    text: '21.How would you rate your current health status?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.36], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  self_health_status_Verygood = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'self_health_status_Verygood',
    text: 'Very good',
    font: 'Arial',
    pos: [0, 0.25],
    size: [1, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  self_health_status_Verygood.clock = new util.Clock();
  
  self_health_status_Good = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'self_health_status_Good',
    text: 'Good',
    font: 'Arial',
    pos: [0, 0.1],
    size: [1, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  self_health_status_Good.clock = new util.Clock();
  
  self_health_status_Average = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'self_health_status_Average',
    text: 'Average',
    font: 'Arial',
    pos: [0, (- 0.05)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  self_health_status_Average.clock = new util.Clock();
  
  self_health_status_Poor = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'self_health_status_Poor',
    text: 'Poor',
    font: 'Arial',
    pos: [0, (- 0.2)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  self_health_status_Poor.clock = new util.Clock();
  
  self_health_status_Verypoor = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'self_health_status_Verypoor',
    text: 'Very poor',
    font: 'Arial',
    pos: [0, (- 0.35)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -5,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  self_health_status_Verypoor.clock = new util.Clock();
  
  Q21 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q21',
    text: 'Question 21 of 93\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "hearing_status"
  hearing_statusClock = new util.Clock();
  Q_hearing_status = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_hearing_status',
    text: '22.Hearing Status',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  hearing_NO = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'hearing_NO',
    text: 'None (no medically diagnosed hearing loss, no use of hearing aids, no persistent tinnitus)',
    font: 'Arial',
    pos: [0, 0.2],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.02,
    bold: true,
    italic: false,
  });
  hearing_NO.clock = new util.Clock();
  
  hearing_YRS = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'hearing_YRS',
    text: 'Yes (e.g., “mild hearing loss,” “wearing hearing aids,” “persistent tinnitus,” etc)',
    font: 'Arial',
    pos: [0, 0.05],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.02,
    bold: true,
    italic: false,
  });
  hearing_YRS.clock = new util.Clock();
  
  Q22 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q22',
    text: 'Question 22 of 93\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "music_training"
  music_trainingClock = new util.Clock();
  Q_music_taining = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_music_taining',
    text: '23.Have you received formal musical training?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  music_training_YES = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'music_training_YES',
    text: 'Yes',
    font: 'Arial',
    pos: [0, (- 0.15)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  music_training_YES.clock = new util.Clock();
  
  music_training_NO = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'music_training_NO',
    text: 'No',
    font: 'Arial',
    pos: [0, (- 0.3)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  music_training_NO.clock = new util.Clock();
  
  Q23 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q23',
    text: 'Question 23 of 93\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  textbox_hint = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_hint',
    text: '(For example:\n• Studying as a music major at a conservatory or art school;\n• Or learning from a certified teacher and taking recognized graded exams—such as ABRSM, Trinity, RCM, AMEB, etc.—and obtaining the corresponding certificate)',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.35), 0.15], 
    draggable: false,
    letterHeight: 0.025,
    lineSpacing: 1.0,
    size: [1.1, 1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'top-left',
    depth: -4.0 
  });
  
  // Initialize components for Routine "training_years"
  training_yearsClock = new util.Clock();
  Q_trainig_years = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_trainig_years',
    text: '24.If “Yes” to music training(Q23), please indicate the total number of years of such training (round down to the nearest whole year):',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.04,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_training_years = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_training_years',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.6, 0.06],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  hint_training_years = new visual.TextStim({
    win: psychoJS.window,
    name: 'hint_training_years',
    text: 'If “No” to music training(Q23), please fill in 0.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], draggable: false, height: 0.03,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  Q24 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q24',
    text: 'Question 24 of 93\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "current_practice"
  current_practiceClock = new util.Clock();
  Q_current_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_current_practice',
    text: '25.Do you currently practice an instrument or voice at least once per week, or work as a music teacher in an institution/school with regular lessons, or regularly participate in ensemble rehearsals or performances?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.04,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  current_practice_YES = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'current_practice_YES',
    text: 'YES',
    font: 'Arial',
    pos: [0, (- 0.1)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  current_practice_YES.clock = new util.Clock();
  
  current_practice_NO = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'current_practice_NO',
    text: 'NO',
    font: 'Arial',
    pos: [0, (- 0.25)],
    size: [1, 0.06],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  current_practice_NO.clock = new util.Clock();
  
  Q25 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q25',
    text: 'Question 25 of 93\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "PHQ9_intro"
  PHQ9_introClock = new util.Clock();
  PHQ9_intro_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'PHQ9_intro_image', units : undefined, 
    image : 'intro/PHQ9_intro_english.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.47, 0.65],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "PHQ_9"
  PHQ_9Clock = new util.Clock();
  PHQ_9QuestionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'PHQ_9QuestionText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  PHQ_9questionslide = new visual.Slider({
    win: psychoJS.window, name: 'PHQ_9questionslide',
    startValue: undefined,
    size: [1.1, 0.05], pos: [0, (- 0.2)], ori: 0, units: psychoJS.window.units,
    labels: ["Not at all", "Several days", "More than half the days", "Nearly every day"], fontSize: 0.02, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('red'), lineColor: new util.Color('black'), 
    opacity: 1, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  Q26toQ34 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q26toQ34',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "BPSQI_intro"
  BPSQI_introClock = new util.Clock();
  BPSQI_intro_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'BPSQI_intro_image', units : undefined, 
    image : 'intro/BPSQI_intro_english.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.5, 0.6],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "B_PSQI_Q1_BedTime"
  B_PSQI_Q1_BedTimeClock = new util.Clock();
  Q1_BedTime = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q1_BedTime',
    text: '35. When have you usually gone to bed at night?(e.g., 22:30)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_Q1Bedtime = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_Q1Bedtime',
    text: '',
    placeholder: 'Please enter the time',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  enter_hint = new visual.TextStim({
    win: psychoJS.window,
    name: 'enter_hint',
    text: 'Press Enter to continue after typing your answer.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.03,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  Q35 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q35',
    text: 'Question 35 of 93\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "B_PSQI_Q2_WakeTime"
  B_PSQI_Q2_WakeTimeClock = new util.Clock();
  Q2_WakeTime = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q2_WakeTime',
    text: '36. When have you usually gotten up in the morning? (e.g., 07:00)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_Q2WakeTime = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_Q2WakeTime',
    text: '',
    placeholder: 'Please enter the time.',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  enter_hint_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'enter_hint_2',
    text: 'Press Enter to continue after typing your answer.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.03,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  Q36 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q36',
    text: 'Question 36 of 93\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "B_PSQI_Q3_SleepLatency"
  B_PSQI_Q3_SleepLatencyClock = new util.Clock();
  Q3_SleepLatency = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q3_SleepLatency',
    text: '37. How long has it usually taken you to fall asleep each night?(minutes）\n (e.g., 15 minutes)\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_Q3SleepLatency = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_Q3SleepLatency',
    text: '',
    placeholder: 'Please enter the time.',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  enter_hint_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'enter_hint_3',
    text: 'Press Enter to continue after typing your answer.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.03,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  Q37 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q37',
    text: 'Question 37 of 93\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "B_PSQI_Q4_ActualSleep"
  B_PSQI_Q4_ActualSleepClock = new util.Clock();
  Q4_ActualSleep = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q4_ActualSleep',
    text: '38. How many hours of actual sleep did you get at night? (e.g., 6 hours)\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_Q4ActualSleep = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_Q4ActualSleep',
    text: '',
    placeholder: 'Please enter the time.',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  enter_hint_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'enter_hint_4',
    text: 'Press Enter to continue after typing your answer.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], draggable: false, height: 0.03,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  Q38 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q38',
    text: 'Question 38 of 93\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  hint_Q4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'hint_Q4',
    text: '※ Please estimate the number of hours you were actually asleep, not the total time you spent in bed.\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.03,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "B_PSQI5"
  B_PSQI5Clock = new util.Clock();
  B_PSQIquestionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'B_PSQIquestionText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  B_PSQIquestionslide = new visual.Slider({
    win: psychoJS.window, name: 'B_PSQIquestionslide',
    startValue: undefined,
    size: [1.1, 0.05], pos: [0, 0], ori: 0, units: psychoJS.window.units,
    labels: ["Not during the past month", "Less than once a week", "Once or twice a week", "Three or more times a week"], fontSize: 0.02, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('red'), lineColor: new util.Color('black'), 
    opacity: 1, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  Q39 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q39',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "B_PSQI6"
  B_PSQI6Clock = new util.Clock();
  B_PSQIquestionText6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'B_PSQIquestionText6',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  B_PSQIquestionslide6 = new visual.Slider({
    win: psychoJS.window, name: 'B_PSQIquestionslide6',
    startValue: undefined,
    size: [1.1, 0.05], pos: [0, 0], ori: 0, units: psychoJS.window.units,
    labels: ["Very bad", "Fairly bad", "Fairly good", "Very good"], fontSize: 0.02, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('red'), lineColor: new util.Color('black'), 
    opacity: 1, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  Q40 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q40',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Durel_intro"
  Durel_introClock = new util.Clock();
  DUREL_intro_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'DUREL_intro_image', units : undefined, 
    image : 'intro/DUREL_intro_english.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.4, 0.7],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "DUREL1"
  DUREL1Clock = new util.Clock();
  DUREL_questionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'DUREL_questionText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  DURELquestionslide = new visual.Slider({
    win: psychoJS.window, name: 'DURELquestionslide',
    startValue: undefined,
    size: [1.1, 0.05], pos: [0, 0], ori: 0, units: psychoJS.window.units,
    labels: ["Never", "Once a year or less", "A few times a year", "A few times a month", "Once a week", "More than once/week"], fontSize: 0.02, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('red'), lineColor: new util.Color('black'), 
    opacity: 1, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  Q41 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q41',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "DUREL2"
  DUREL2Clock = new util.Clock();
  DUREL_questionText2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'DUREL_questionText2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  DURELquestionslide2 = new visual.Slider({
    win: psychoJS.window, name: 'DURELquestionslide2',
    startValue: undefined,
    size: [1.1, 0.05], pos: [0, 0], ori: 0, units: psychoJS.window.units,
    labels: ["Rarely or never", "A few times a month", "Once a week", "2 or more times/week", "Daily", "More than once a day"], fontSize: 0.02, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('red'), lineColor: new util.Color('black'), 
    opacity: 1, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  Q42 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q42',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "DUREL345"
  DUREL345Clock = new util.Clock();
  DUREL_questionText345 = new visual.TextStim({
    win: psychoJS.window,
    name: 'DUREL_questionText345',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  DURELquestionslide345 = new visual.Slider({
    win: psychoJS.window, name: 'DURELquestionslide345',
    startValue: undefined,
    size: [1.1, 0.05], pos: [0, 0], ori: 0, units: psychoJS.window.units,
    labels: ["Definitely not true", "Tends not to be true", "Unsure", "Tends to be true", "Definitely true"], fontSize: 0.02, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('red'), lineColor: new util.Color('black'), 
    opacity: 1, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  Q43toQ45 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q43toQ45',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "BMRQ_intro"
  BMRQ_introClock = new util.Clock();
  BMRQ_intro_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'BMRQ_intro_image', units : undefined, 
    image : 'intro/BMRQ_intro_english.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.45, 0.68],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "BMRQ"
  BMRQClock = new util.Clock();
  BMRQ_questionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'BMRQ_questionText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  BMRQ_slider = new visual.Slider({
    win: psychoJS.window, name: 'BMRQ_slider',
    startValue: undefined,
    size: [1.1, 0.05], pos: [0, 0], ori: 0, units: psychoJS.window.units,
    labels: ["Strongly disagree", "disagree", "Neutral", "Agree", "Strongly agree"], fontSize: 0.02, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('red'), lineColor: new util.Color('black'), 
    opacity: 1, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  Q46toQ65 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q46toQ65',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "PAI_intro"
  PAI_introClock = new util.Clock();
  PAI_intro_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'PAI_intro_image', units : undefined, 
    image : 'intro/PAI_intro_english.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.48, 0.65],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "PAI"
  PAIClock = new util.Clock();
  PAI_questionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'PAI_questionText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  PAIquestionslide = new visual.Slider({
    win: psychoJS.window, name: 'PAIquestionslide',
    startValue: undefined,
    size: [1.1, 0.05], pos: [0, 0], ori: 0, units: psychoJS.window.units,
    labels: ["Strongly disagree", "Disagree", "Agree", "Strongly agree"], fontSize: 0.02, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('red'), lineColor: new util.Color('black'), 
    opacity: 1, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  Q66toQ69 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q66toQ69',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "SOI_intro"
  SOI_introClock = new util.Clock();
  SOI_intro_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'SOI_intro_image', units : undefined, 
    image : 'intro/SOI_intro_english.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.4, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_12 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Soi123"
  Soi123Clock = new util.Clock();
  Q_Soi123 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_Soi123',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  SOI123_slide = new visual.Slider({
    win: psychoJS.window, name: 'SOI123_slide',
    startValue: undefined,
    size: [1.1, 0.05], pos: [0, 0.1], ori: 0, units: psychoJS.window.units,
    labels: ["0", "1", "2", "3", "4", "5~6", "7~9", "10~19", "20 or more"], fontSize: 0.02, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('red'), lineColor: new util.Color('black'), 
    opacity: 1, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  Q70toQ72 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q70toQ72',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '※ Please note: This is a numerical question. The options below represent the number of people.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], draggable: false, height: 0.03,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Soi456"
  Soi456Clock = new util.Clock();
  Q_Soi456 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_Soi456',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  SOI456_Slide = new visual.Slider({
    win: psychoJS.window, name: 'SOI456_Slide',
    startValue: undefined,
    size: [1.1, 0.05], pos: [0, 0], ori: 0, units: psychoJS.window.units,
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"], fontSize: 0.02, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('red'), lineColor: new util.Color([-1.0000, -1.0000, -1.0000]), 
    opacity: 1, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  Q73toQ75 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q73toQ75',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '※ Please note: This is a degree-of-agreement question. Please respond based on how much you disagree or agree.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.03,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  SD = new visual.TextStim({
    win: psychoJS.window,
    name: 'SD',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.55), (- 0.1)], draggable: false, height: 0.02,  wrapWidth: 1.4, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  D = new visual.TextStim({
    win: psychoJS.window,
    name: 'D',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.55, (- 0.1)], draggable: false, height: 0.02,  wrapWidth: 1.4, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  // Initialize components for Routine "SOI7"
  SOI7Clock = new util.Clock();
  Q_SOI7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_SOI7',
    text: '76. How often do you have fantasies about having sex with someone you are not in a committed romantic relationship with?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.05,  wrapWidth: 1.46, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  SOI7_1_never = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'SOI7_1_never',
    text: '1 – never',
    font: 'Arial',
    pos: [(- 0.4), 0.2],
    size: [0.7, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  SOI7_1_never.clock = new util.Clock();
  
  SOI7_2_veryseldom = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'SOI7_2_veryseldom',
    text: '2– very seldom ',
    font: 'Arial',
    pos: [0.4, 0.2],
    size: [0.7, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  SOI7_2_veryseldom.clock = new util.Clock();
  
  SOI7_3_once_every_2or3_months = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'SOI7_3_once_every_2or3_months',
    text: '3 – about once every two or three months ',
    font: 'Arial',
    pos: [(- 0.4), 0.05],
    size: [0.7, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  SOI7_3_once_every_2or3_months.clock = new util.Clock();
  
  SOI7_4_onceamonth = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'SOI7_4_onceamonth',
    text: '4– about once a month',
    font: 'Arial',
    pos: [0.4, 0.05],
    size: [0.7, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  SOI7_4_onceamonth.clock = new util.Clock();
  
  SOI7_5_once_every_two_weeks = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'SOI7_5_once_every_two_weeks',
    text: '5– about once every two weeks ',
    font: 'Arial',
    pos: [(- 0.4), (- 0.1)],
    size: [0.7, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -5,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  SOI7_5_once_every_two_weeks.clock = new util.Clock();
  
  SOI7_6_onceaweek = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'SOI7_6_onceaweek',
    text: '6– about once a week ',
    font: 'Arial',
    pos: [0.4, (- 0.1)],
    size: [0.7, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -6,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  SOI7_6_onceaweek.clock = new util.Clock();
  
  SOI7_7_several_times_per_week = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'SOI7_7_several_times_per_week',
    text: '7– several times per week ',
    font: 'Arial',
    pos: [(- 0.4), (- 0.25)],
    size: [0.7, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -7,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  SOI7_7_several_times_per_week.clock = new util.Clock();
  
  SOI7_8_early_every_day = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'SOI7_8_early_every_day',
    text: '8 – nearly every day',
    font: 'Arial',
    pos: [0.4, (- 0.25)],
    size: [0.7, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -8,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  SOI7_8_early_every_day.clock = new util.Clock();
  
  SOI7_9_atleastonceaday = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'SOI7_9_atleastonceaday',
    text: '9 – at least once a day',
    font: 'Arial',
    pos: [0.0, (- 0.38)],
    size: [0.7, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -9,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  SOI7_9_atleastonceaday.clock = new util.Clock();
  
  Q76 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q76',
    text: 'Question 76 of 89\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -10.0 
  });
  
  // Initialize components for Routine "SOI8"
  SOI8Clock = new util.Clock();
  Q_SOI8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_SOI8',
    text: '77. How often do you experience sexual arousal when you are in contact with someone you are not in a committed romantic relationship with?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.38], draggable: false, height: 0.05,  wrapWidth: 1.48, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  SOI8_1_never = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'SOI8_1_never',
    text: '1 – never',
    font: 'Arial',
    pos: [(- 0.4), 0.23],
    size: [0.7, 0.045],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  SOI8_1_never.clock = new util.Clock();
  
  SOI8_2_veryseldom = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'SOI8_2_veryseldom',
    text: '2 – very seldom ',
    font: 'Arial',
    pos: [0.4, 0.23],
    size: [0.7, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  SOI8_2_veryseldom.clock = new util.Clock();
  
  SOI8_3_once_every_2or3_months = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'SOI8_3_once_every_2or3_months',
    text: '3– about once every two or three months ',
    font: 'Arial',
    pos: [(- 0.4), 0.1],
    size: [0.7, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  SOI8_3_once_every_2or3_months.clock = new util.Clock();
  
  SOI8_4_onceamonth = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'SOI8_4_onceamonth',
    text: '4– about once a month',
    font: 'Arial',
    pos: [0.4, 0.1],
    size: [0.7, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  SOI8_4_onceamonth.clock = new util.Clock();
  
  SOI8_5_once_every_two_weeks = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'SOI8_5_once_every_two_weeks',
    text: '5 – about once every two weeks ',
    font: 'Arial',
    pos: [(- 0.4), (- 0.05)],
    size: [0.7, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -5,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  SOI8_5_once_every_two_weeks.clock = new util.Clock();
  
  SOI8_6_onceaweek = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'SOI8_6_onceaweek',
    text: '6– about once a week ',
    font: 'Arial',
    pos: [0.4, (- 0.05)],
    size: [0.7, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -6,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  SOI8_6_onceaweek.clock = new util.Clock();
  
  SOI8_7_several_times_per_week = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'SOI8_7_several_times_per_week',
    text: '7 – several times per week ',
    font: 'Arial',
    pos: [(- 0.4), (- 0.2)],
    size: [0.7, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -7,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  SOI8_7_several_times_per_week.clock = new util.Clock();
  
  SOI8_8_early_every_day = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'SOI8_8_early_every_day',
    text: '8– nearly every day',
    font: 'Arial',
    pos: [0.4, (- 0.2)],
    size: [0.7, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -8,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  SOI8_8_early_every_day.clock = new util.Clock();
  
  SOI8_9_atleastonceaday = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'SOI8_9_atleastonceaday',
    text: '9– at least once a day',
    font: 'Arial',
    pos: [0.0, (- 0.35)],
    size: [0.7, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -9,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  SOI8_9_atleastonceaday.clock = new util.Clock();
  
  Q77 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q77',
    text: 'Question 77 of 93\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -10.0 
  });
  
  // Initialize components for Routine "SOI9"
  SOI9Clock = new util.Clock();
  Q_SOI9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q_SOI9',
    text: '78. In everyday life, how often do you have spontaneous fantasies about having sex with someone you have just met?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.38], draggable: false, height: 0.05,  wrapWidth: 1.45, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  SOI9_1_never = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'SOI9_1_never',
    text: '1 – never',
    font: 'Arial',
    pos: [(- 0.4), 0.25],
    size: [0.7, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  SOI9_1_never.clock = new util.Clock();
  
  SOI9_2_veryseldom = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'SOI9_2_veryseldom',
    text: '2 – very seldom ',
    font: 'Arial',
    pos: [0.4, 0.25],
    size: [0.7, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  SOI9_2_veryseldom.clock = new util.Clock();
  
  SOI9_3_once_every_2or3_months = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'SOI9_3_once_every_2or3_months',
    text: '3 – about once every 2 or 3 months ',
    font: 'Arial',
    pos: [(- 0.4), 0.1],
    size: [0.7, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  SOI9_3_once_every_2or3_months.clock = new util.Clock();
  
  SOI9_4_onceamonth = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'SOI9_4_onceamonth',
    text: '4 – about once a month',
    font: 'Arial',
    pos: [0.4, 0.1],
    size: [0.7, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  SOI9_4_onceamonth.clock = new util.Clock();
  
  SOI9_5_once_every_two_weeks = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'SOI9_5_once_every_two_weeks',
    text: '5 – about once every 2 weeks ',
    font: 'Arial',
    pos: [(- 0.4), (- 0.05)],
    size: [0.7, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -5,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  SOI9_5_once_every_two_weeks.clock = new util.Clock();
  
  SOI9_6_onceaweek = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'SOI9_6_onceaweek',
    text: '6 – about once a week ',
    font: 'Arial',
    pos: [0.4, (- 0.05)],
    size: [0.7, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -6,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  SOI9_6_onceaweek.clock = new util.Clock();
  
  SOI9_7_several_times_per_week = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'SOI9_7_several_times_per_week',
    text: '7 – several times per week ',
    font: 'Arial',
    pos: [(- 0.4), (- 0.2)],
    size: [0.7, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -7,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  SOI9_7_several_times_per_week.clock = new util.Clock();
  
  SOI9_8_early_every_day = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'SOI9_8_early_every_day',
    text: '8 – nearly every day',
    font: 'Arial',
    pos: [0.4, (- 0.2)],
    size: [0.7, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -8,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  SOI9_8_early_every_day.clock = new util.Clock();
  
  SOI9_9_atleastonceaday = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'SOI9_9_atleastonceaday',
    text: '9 – at least once a day',
    font: 'Arial',
    pos: [0.0, (- 0.35)],
    size: [0.7, 0.05],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -9,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  SOI9_9_atleastonceaday.clock = new util.Clock();
  
  Q78 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q78',
    text: 'Question 78of 93\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -10.0 
  });
  
  // Initialize components for Routine "ATAI_intro"
  ATAI_introClock = new util.Clock();
  ATAI_intro_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ATAI_intro_image', units : undefined, 
    image : 'intro/ATAI_intro_english.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.5, 0.65],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ATAI"
  ATAIClock = new util.Clock();
  ATAI_QuestionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'ATAI_QuestionText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  ATAIquestionslide = new visual.Slider({
    win: psychoJS.window, name: 'ATAIquestionslide',
    startValue: undefined,
    size: [1.1, 0.05], pos: [0, 0], ori: 0, units: psychoJS.window.units,
    labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], fontSize: 0.02, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('red'), lineColor: new util.Color([-1.0000, -1.0000, -1.0000]), 
    opacity: 1, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  Q79toQ83 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q79toQ83',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  Q79_SD = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q79_SD',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.55), (- 0.1)], draggable: false, height: 0.02,  wrapWidth: 1.4, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  Q79_SA = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q79_SA',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.55, (- 0.1)], draggable: false, height: 0.02,  wrapWidth: 1.4, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "BSSS4_intro"
  BSSS4_introClock = new util.Clock();
  BSSS4_intro_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'BSSS4_intro_image', units : undefined, 
    image : 'intro/BSSS4_intro_english.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.47, 0.65],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "BSSS"
  BSSSClock = new util.Clock();
  BSSS_questiontext = new visual.TextStim({
    win: psychoJS.window,
    name: 'BSSS_questiontext',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: 1.4, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  BSSS_questionslide = new visual.Slider({
    win: psychoJS.window, name: 'BSSS_questionslide',
    startValue: undefined,
    size: [1.1, 0.05], pos: [0, 0], ori: 0, units: psychoJS.window.units,
    labels: ["Strongly disagree", "Disagree", "Neither agree nor disagree", "Agree", "Strongly agree"], fontSize: 0.02, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('red'), lineColor: new util.Color('black'), 
    opacity: 1, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  Q84toQ91 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q84toQ91',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "BPAAT_intro"
  BPAAT_introClock = new util.Clock();
  BPAAT_intro_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'BPAAT_intro_image', units : undefined, 
    image : 'intro/BPAAT_intro_english.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.47, 0.7],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_11 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "BPAAT1"
  BPAAT1Clock = new util.Clock();
  BPAAT_questiontext1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'BPAAT_questiontext1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: 1.45, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  BPAATquestionslide1 = new visual.Slider({
    win: psychoJS.window, name: 'BPAATquestionslide1',
    startValue: undefined,
    size: [1.1, 0.05], pos: [0, 0], ori: 0, units: psychoJS.window.units,
    labels: ["none", "1\u20132 times/week", ">3 times/week"], fontSize: 0.02, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('red'), lineColor: new util.Color('black'), 
    opacity: 1, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  Q92 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q92',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "BPAAT2"
  BPAAT2Clock = new util.Clock();
  BPAAT_questiontext2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'BPAAT_questiontext2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: 1.47, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  BPAATquestionslide2 = new visual.Slider({
    win: psychoJS.window, name: 'BPAATquestionslide2',
    startValue: undefined,
    size: [1.1, 0.05], pos: [0, 0], ori: 0, units: psychoJS.window.units,
    labels: ["none", "1\u20132 times/week", "3\u20134 times/week", ">5 times/week"], fontSize: 0.02, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('red'), lineColor: new util.Color('black'), 
    opacity: 1, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  Q93 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Q93',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "finishQUESTION_intro"
  finishQUESTION_introClock = new util.Clock();
  finish_questions_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'finish_questions_image', units : undefined, 
    image : 'intro/finishquestions_intro_english.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.45, 0.7],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  background = new visual.ImageStim({
    win : psychoJS.window,
    name : 'background', units : undefined, 
    image : 'intro/bart_english.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.4, 0.9],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  pop_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: 1.0,
      });
  pop_sound.setVolume(0.0);
  pop_sound.isPlaying = false;
  pop_sound.isFinished = false;
  // Initialize components for Routine "reset_balloon"
  reset_balloonClock = new util.Clock();
  // Initialize components for Routine "practice_trial"
  practice_trialClock = new util.Clock();
  practice_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'practice_bg', units : undefined, 
    image : 'assets/background.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2.2, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  practice_bankButton = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from practice_updateEarnings
  bankedEarnings = 0.0;
  balloonEarnings = "";
  bankedText = "";
  lastBalloonEarnings = 0.0;
  thisBalloonEarnings = 0.0;
  
  practice_reminder = new visual.TextBox({
    win: psychoJS.window,
    name: 'practice_reminder',
    text: 'Press SPACE to pump the balloon\nPress RETURN to bank this sum\n',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.3)], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  practice_balloonValTxt = new visual.TextBox({
    win: psychoJS.window,
    name: 'practice_balloonValTxt',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.4], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  practice_bankedTxt = new visual.TextBox({
    win: psychoJS.window,
    name: 'practice_bankedTxt',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0.4, 0.4], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -5.0 
  });
  
  // Run 'Begin Experiment' code from practice_setBalloonSize
  balloonSize = 0.08;
  balloonMsgHeight = 0.01;
  
  practice_balloonBody = new visual.ImageStim({
    win : psychoJS.window,
    name : 'practice_balloonBody', units : 'height', 
    image : 'assets/redBalloon.png', mask : undefined,
    anchor : 'center',
    ori : (- 90), 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -7.0 
  });
  practice_trialcount = new visual.TextBox({
    win: psychoJS.window,
    name: 'practice_trialcount',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0.4, (- 0.3)], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -8.0 
  });
  
  // Initialize components for Routine "practice_feedback"
  practice_feedbackClock = new util.Clock();
  practice_background_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'practice_background_3', units : undefined, 
    image : 'assets/background.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2.2, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Run 'Begin Experiment' code from practice_checkPopped
  feedbackText = "";
  
  practice_feedbacktxt = new visual.TextBox({
    win: psychoJS.window,
    name: 'practice_feedbacktxt',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.4, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  practice_bankedTxt_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'practice_bankedTxt_2',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0.4, 0.4], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  practice_reminder_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'practice_reminder_2',
    text: 'Press SPACE to pump the balloon\nPress RETURN to bank this sum',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.3)], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  practice_trialcount_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'practice_trialcount_2',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0.4, (- 0.3)], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -5.0 
  });
  
  // Initialize components for Routine "practice_finalScore"
  practice_finalScoreClock = new util.Clock();
  practice_background_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'practice_background_4', units : undefined, 
    image : 'assets/background.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2.2, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  practice_scoremsg = new visual.TextBox({
    win: psychoJS.window,
    name: 'practice_scoremsg',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [1, 0.7],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Please press the "SPACE" key to continue..',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "resetmoneypractice"
  resetmoneypracticeClock = new util.Clock();
  // Initialize components for Routine "comprehension_check"
  comprehension_checkClock = new util.Clock();
  understand_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'understand_2',
    text: 'Do you understand the experimental rules?\n\nIf you have understood the experimental rules, please press the "Y" key to enter the formal experiment;\n\nIf you still don\'t quite understand the operation method, please press the "N" key. The system will arrange for you to go through the practice session again.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_comprehension = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Preparing_to_BART_formally"
  Preparing_to_BART_formallyClock = new util.Clock();
  understand3_formal_BART = new visual.TextStim({
    win: psychoJS.window,
    name: 'understand3_formal_BART',
    text: 'Are you ready? \nPlease press "Y" again to start the formal experiment.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_comprehension_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "resetmoney"
  resetmoneyClock = new util.Clock();
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  background_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'background_2', units : undefined, 
    image : 'assets/background.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2.2, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  bankButton = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from updateEarnings
  bankedEarnings = 0.0;
  balloonEarnings = "";
  bankedText = "";
  lastBalloonEarnings = 0.0;
  thisBalloonEarnings = 0.0;
  
  reminder = new visual.TextBox({
    win: psychoJS.window,
    name: 'reminder',
    text: 'Press SPACE to pump the balloon\nPress RETURN to bank this sum',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.3)], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  bankedTxt = new visual.TextBox({
    win: psychoJS.window,
    name: 'bankedTxt',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0.4, 0.4], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  // Run 'Begin Experiment' code from setBalloonSize
  balloonSize = 0.08;
  balloonMsgHeight = 0.01;
  
  balloonBody = new visual.ImageStim({
    win : psychoJS.window,
    name : 'balloonBody', units : 'height', 
    image : 'assets/redBalloon.png', mask : undefined,
    anchor : 'center',
    ori : (- 90), 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -6.0 
  });
  trialcount = new visual.TextBox({
    win: psychoJS.window,
    name: 'trialcount',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0.4, (- 0.3)], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -7.0 
  });
  
  balloonValTxt = new visual.TextBox({
    win: psychoJS.window,
    name: 'balloonValTxt',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.4], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -8.0 
  });
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  background_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'background_3', units : undefined, 
    image : 'assets/background.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2.2, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Run 'Begin Experiment' code from checkPopped
  feedbackText = "";
  
  feedbacktxt = new visual.TextBox({
    win: psychoJS.window,
    name: 'feedbacktxt',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.4, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  bankedTxt_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'bankedTxt_2',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0.4, 0.4], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  balloonValTxt_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'balloonValTxt_2',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), 0.4], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  reminder_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'reminder_2',
    text: 'Press SPACE to pump the balloon\nPress RETURN to bank this sum\n',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.4), (- 0.3)], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -5.0 
  });
  
  trialcount_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'trialcount_2',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0.4, (- 0.3)], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -6.0 
  });
  
  // Initialize components for Routine "finalScore"
  finalScoreClock = new util.Clock();
  background_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'background_4', units : undefined, 
    image : 'assets/background.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2.2, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  scoremsg = new visual.TextBox({
    win: psychoJS.window,
    name: 'scoremsg',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1, 0.7],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Please press the "Enter" key to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction_fish"
  instruction_fishClock = new util.Clock();
  background_fish = new visual.ImageStim({
    win : psychoJS.window,
    name : 'background_fish', units : 'norm', 
    image : 'images/lake5.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  instructions_txt_fish = new visual.TextBox({
    win: psychoJS.window,
    name: 'instructions_txt_fish',
    text: 'Welcome to our game!\n\nIn this game you will need to catch as many fish as possible. \n\nYou will be able to choose between three lakes from which to fish. \n\nClick the lake you want to fish from.\n\nTry to maximise the number of fish you catch!',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1.5, 0.8],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  start_button_fish = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'start_button_fish',
    text: 'START',
    font: 'Arvo',
    pos: [0, (- 0.4)],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  start_button_fish.clock = new util.Clock();
  
  // Initialize components for Routine "trial_fish"
  trial_fishClock = new util.Clock();
  instruct_fish = new visual.TextBox({
    win: psychoJS.window,
    name: 'instruct_fish',
    text: 'Click a lake to fish!',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0.4], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  lake1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'lake1', units : undefined, 
    image : 'images/lake1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.5), 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  lake2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'lake2', units : undefined, 
    image : 'images/lake2.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  lake3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'lake3', units : undefined, 
    image : 'images/lake3.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.5, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  rod = new visual.ImageStim({
    win : psychoJS.window,
    name : 'rod', units : undefined, 
    image : 'images/rod.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  // Run 'Begin Experiment' code from control_wins
  lake1_wins = [];
  lake2_wins = [];
  lake3_wins = [];
  nfish = 0;
  
  fishcountim = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fishcountim', units : undefined, 
    image : 'images/fish1.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.4), (- 0.4)], 
    draggable: false,
    size : [0.1, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  fishcount = new visual.TextBox({
    win: psychoJS.window,
    name: 'fishcount',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.15), (- 0.4)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -8.0 
  });
  
  // Run 'Begin Experiment' code from fishCounter
  fish_trial_index = 0;
  
  fishTrialDisplay = new visual.TextStim({
    win: psychoJS.window,
    name: 'fishTrialDisplay',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.45, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -10.0 
  });
  
  // Initialize components for Routine "feedback_fish"
  feedback_fishClock = new util.Clock();
  fb_txtbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'fb_txtbox',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0.3], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  fb_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fb_image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  fishcountim_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fishcountim_2', units : undefined, 
    image : 'images/fish1.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.4), (- 0.4)], 
    draggable: false,
    size : [0.1, 0.07],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  fishcount_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'fishcount_2',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.15), (- 0.4)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  // Initialize components for Routine "end_fish"
  end_fishClock = new util.Clock();
  background_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'background_5', units : 'norm', 
    image : 'images/lake5.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  end_txt = new visual.TextBox({
    win: psychoJS.window,
    name: 'end_txt',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1.5, 0.8],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.8,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  exit_button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exit_button',
    text: 'EXIT',
    font: 'Arvo',
    pos: [0, (- 0.4)],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  exit_button.clock = new util.Clock();
  
  // Initialize components for Routine "dataupload"
  datauploadClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var Welcome_to_experimentMaxDurationReached;
var _key_resp_13_allKeys;
var Welcome_to_experimentMaxDuration;
var Welcome_to_experimentComponents;
function Welcome_to_experimentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Welcome_to_experiment' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Welcome_to_experimentClock.reset();
    routineTimer.reset();
    Welcome_to_experimentMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_13.keys = undefined;
    key_resp_13.rt = undefined;
    _key_resp_13_allKeys = [];
    psychoJS.experiment.addData('Welcome_to_experiment.started', globalClock.getTime());
    Welcome_to_experimentMaxDuration = null
    // keep track of which components have finished
    Welcome_to_experimentComponents = [];
    Welcome_to_experimentComponents.push(Welcome_eng_image);
    Welcome_to_experimentComponents.push(key_resp_13);
    
    for (const thisComponent of Welcome_to_experimentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Welcome_to_experimentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Welcome_to_experiment' ---
    // get current time
    t = Welcome_to_experimentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Welcome_eng_image* updates
    if (t >= 0.0 && Welcome_eng_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Welcome_eng_image.tStart = t;  // (not accounting for frame time here)
      Welcome_eng_image.frameNStart = frameN;  // exact frame index
      
      Welcome_eng_image.setAutoDraw(true);
    }
    
    
    // if Welcome_eng_image is active this frame...
    if (Welcome_eng_image.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_13* updates
    if (t >= 0.0 && key_resp_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_13.tStart = t;  // (not accounting for frame time here)
      key_resp_13.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_13.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_13.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_13.clearEvents(); });
    }
    
    // if key_resp_13 is active this frame...
    if (key_resp_13.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_13.getKeys({keyList: 'space', waitRelease: false});
      _key_resp_13_allKeys = _key_resp_13_allKeys.concat(theseKeys);
      if (_key_resp_13_allKeys.length > 0) {
        key_resp_13.keys = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].name;  // just the last key pressed
        key_resp_13.rt = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].rt;
        key_resp_13.duration = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Welcome_to_experimentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Welcome_to_experimentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Welcome_to_experiment' ---
    for (const thisComponent of Welcome_to_experimentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Welcome_to_experiment.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_13.corr, level);
    }
    psychoJS.experiment.addData('key_resp_13.keys', key_resp_13.keys);
    if (typeof key_resp_13.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_13.rt', key_resp_13.rt);
        psychoJS.experiment.addData('key_resp_13.duration', key_resp_13.duration);
        routineTimer.reset();
        }
    
    key_resp_13.stop();
    // the Routine "Welcome_to_experiment" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var GenderMaxDurationReached;
var GenderMaxDuration;
var GenderComponents;
function GenderRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Gender' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    GenderClock.reset();
    routineTimer.reset();
    GenderMaxDurationReached = false;
    // update component parameters for each repeat
    // reset gender_female_button to account for continued clicks & clear times on/off
    gender_female_button.reset()
    // reset gender_male_button to account for continued clicks & clear times on/off
    gender_male_button.reset()
    // reset gender_nonbinary_button to account for continued clicks & clear times on/off
    gender_nonbinary_button.reset()
    // reset gender_prefernot_button to account for continued clicks & clear times on/off
    gender_prefernot_button.reset()
    psychoJS.experiment.addData('Gender.started', globalClock.getTime());
    GenderMaxDuration = null
    // keep track of which components have finished
    GenderComponents = [];
    GenderComponents.push(Q_gender_text);
    GenderComponents.push(gender_female_button);
    GenderComponents.push(gender_male_button);
    GenderComponents.push(gender_nonbinary_button);
    GenderComponents.push(gender_prefernot_button);
    GenderComponents.push(Q1);
    
    for (const thisComponent of GenderComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function GenderRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Gender' ---
    // get current time
    t = GenderClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_gender_text* updates
    if (t >= 0.0 && Q_gender_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_gender_text.tStart = t;  // (not accounting for frame time here)
      Q_gender_text.frameNStart = frameN;  // exact frame index
      
      Q_gender_text.setAutoDraw(true);
    }
    
    
    // if Q_gender_text is active this frame...
    if (Q_gender_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *gender_female_button* updates
    if (t >= 0 && gender_female_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gender_female_button.tStart = t;  // (not accounting for frame time here)
      gender_female_button.frameNStart = frameN;  // exact frame index
      
      gender_female_button.setAutoDraw(true);
    }
    
    
    // if gender_female_button is active this frame...
    if (gender_female_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (gender_female_button.status === PsychoJS.Status.STARTED) {
      // check whether gender_female_button has been pressed
      if (gender_female_button.isClicked) {
        if (!gender_female_button.wasClicked) {
          // store time of first click
          gender_female_button.timesOn.push(gender_female_button.clock.getTime());
          // store time clicked until
          gender_female_button.timesOff.push(gender_female_button.clock.getTime());
        } else {
          // update time clicked until;
          gender_female_button.timesOff[gender_female_button.timesOff.length - 1] = gender_female_button.clock.getTime();
        }
        if (!gender_female_button.wasClicked) {
          // end routine when gender_female_button is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("gender", "Female");
        }
        // if gender_female_button is still clicked next frame, it is not a new click
        gender_female_button.wasClicked = true;
      } else {
        // if gender_female_button is clicked next frame, it is a new click
        gender_female_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if gender_female_button hasn't started / has finished
      gender_female_button.clock.reset();
      // if gender_female_button is clicked next frame, it is a new click
      gender_female_button.wasClicked = false;
    }
    
    // *gender_male_button* updates
    if (t >= 0 && gender_male_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gender_male_button.tStart = t;  // (not accounting for frame time here)
      gender_male_button.frameNStart = frameN;  // exact frame index
      
      gender_male_button.setAutoDraw(true);
    }
    
    
    // if gender_male_button is active this frame...
    if (gender_male_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (gender_male_button.status === PsychoJS.Status.STARTED) {
      // check whether gender_male_button has been pressed
      if (gender_male_button.isClicked) {
        if (!gender_male_button.wasClicked) {
          // store time of first click
          gender_male_button.timesOn.push(gender_male_button.clock.getTime());
          // store time clicked until
          gender_male_button.timesOff.push(gender_male_button.clock.getTime());
        } else {
          // update time clicked until;
          gender_male_button.timesOff[gender_male_button.timesOff.length - 1] = gender_male_button.clock.getTime();
        }
        if (!gender_male_button.wasClicked) {
          // end routine when gender_male_button is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("gender", "Male");
        }
        // if gender_male_button is still clicked next frame, it is not a new click
        gender_male_button.wasClicked = true;
      } else {
        // if gender_male_button is clicked next frame, it is a new click
        gender_male_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if gender_male_button hasn't started / has finished
      gender_male_button.clock.reset();
      // if gender_male_button is clicked next frame, it is a new click
      gender_male_button.wasClicked = false;
    }
    
    // *gender_nonbinary_button* updates
    if (t >= 0 && gender_nonbinary_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gender_nonbinary_button.tStart = t;  // (not accounting for frame time here)
      gender_nonbinary_button.frameNStart = frameN;  // exact frame index
      
      gender_nonbinary_button.setAutoDraw(true);
    }
    
    
    // if gender_nonbinary_button is active this frame...
    if (gender_nonbinary_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (gender_nonbinary_button.status === PsychoJS.Status.STARTED) {
      // check whether gender_nonbinary_button has been pressed
      if (gender_nonbinary_button.isClicked) {
        if (!gender_nonbinary_button.wasClicked) {
          // store time of first click
          gender_nonbinary_button.timesOn.push(gender_nonbinary_button.clock.getTime());
          // store time clicked until
          gender_nonbinary_button.timesOff.push(gender_nonbinary_button.clock.getTime());
        } else {
          // update time clicked until;
          gender_nonbinary_button.timesOff[gender_nonbinary_button.timesOff.length - 1] = gender_nonbinary_button.clock.getTime();
        }
        if (!gender_nonbinary_button.wasClicked) {
          // end routine when gender_nonbinary_button is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("gender", "Transgender");
        }
        // if gender_nonbinary_button is still clicked next frame, it is not a new click
        gender_nonbinary_button.wasClicked = true;
      } else {
        // if gender_nonbinary_button is clicked next frame, it is a new click
        gender_nonbinary_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if gender_nonbinary_button hasn't started / has finished
      gender_nonbinary_button.clock.reset();
      // if gender_nonbinary_button is clicked next frame, it is a new click
      gender_nonbinary_button.wasClicked = false;
    }
    
    // *gender_prefernot_button* updates
    if (t >= 0 && gender_prefernot_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gender_prefernot_button.tStart = t;  // (not accounting for frame time here)
      gender_prefernot_button.frameNStart = frameN;  // exact frame index
      
      gender_prefernot_button.setAutoDraw(true);
    }
    
    
    // if gender_prefernot_button is active this frame...
    if (gender_prefernot_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (gender_prefernot_button.status === PsychoJS.Status.STARTED) {
      // check whether gender_prefernot_button has been pressed
      if (gender_prefernot_button.isClicked) {
        if (!gender_prefernot_button.wasClicked) {
          // store time of first click
          gender_prefernot_button.timesOn.push(gender_prefernot_button.clock.getTime());
          // store time clicked until
          gender_prefernot_button.timesOff.push(gender_prefernot_button.clock.getTime());
        } else {
          // update time clicked until;
          gender_prefernot_button.timesOff[gender_prefernot_button.timesOff.length - 1] = gender_prefernot_button.clock.getTime();
        }
        if (!gender_prefernot_button.wasClicked) {
          // end routine when gender_prefernot_button is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("gender", "99");
        }
        // if gender_prefernot_button is still clicked next frame, it is not a new click
        gender_prefernot_button.wasClicked = true;
      } else {
        // if gender_prefernot_button is clicked next frame, it is a new click
        gender_prefernot_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if gender_prefernot_button hasn't started / has finished
      gender_prefernot_button.clock.reset();
      // if gender_prefernot_button is clicked next frame, it is a new click
      gender_prefernot_button.wasClicked = false;
    }
    
    // *Q1* updates
    if (t >= 0.0 && Q1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q1.tStart = t;  // (not accounting for frame time here)
      Q1.frameNStart = frameN;  // exact frame index
      
      Q1.setAutoDraw(true);
    }
    
    
    // if Q1 is active this frame...
    if (Q1.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of GenderComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GenderRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Gender' ---
    for (const thisComponent of GenderComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Gender.stopped', globalClock.getTime());
    psychoJS.experiment.addData('gender_female_button.numClicks', gender_female_button.numClicks);
    psychoJS.experiment.addData('gender_female_button.timesOn', gender_female_button.timesOn);
    psychoJS.experiment.addData('gender_female_button.timesOff', gender_female_button.timesOff);
    psychoJS.experiment.addData('gender_male_button.numClicks', gender_male_button.numClicks);
    psychoJS.experiment.addData('gender_male_button.timesOn', gender_male_button.timesOn);
    psychoJS.experiment.addData('gender_male_button.timesOff', gender_male_button.timesOff);
    psychoJS.experiment.addData('gender_nonbinary_button.numClicks', gender_nonbinary_button.numClicks);
    psychoJS.experiment.addData('gender_nonbinary_button.timesOn', gender_nonbinary_button.timesOn);
    psychoJS.experiment.addData('gender_nonbinary_button.timesOff', gender_nonbinary_button.timesOff);
    psychoJS.experiment.addData('gender_prefernot_button.numClicks', gender_prefernot_button.numClicks);
    psychoJS.experiment.addData('gender_prefernot_button.timesOn', gender_prefernot_button.timesOn);
    psychoJS.experiment.addData('gender_prefernot_button.timesOff', gender_prefernot_button.timesOff);
    // the Routine "Gender" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var AgeMaxDurationReached;
var AgeMaxDuration;
var AgeComponents;
function AgeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Age' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    AgeClock.reset();
    routineTimer.reset();
    AgeMaxDurationReached = false;
    // update component parameters for each repeat
    textbox_age.setText('');
    textbox_age.refresh();
    psychoJS.experiment.addData('Age.started', globalClock.getTime());
    AgeMaxDuration = null
    // keep track of which components have finished
    AgeComponents = [];
    AgeComponents.push(Q_age_text);
    AgeComponents.push(textbox_age);
    AgeComponents.push(enter_hint_age);
    AgeComponents.push(Q2);
    AgeComponents.push(hint_age);
    
    for (const thisComponent of AgeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var _pj;
var keys;
var user_input;
function AgeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Age' ---
    // get current time
    t = AgeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_age_text* updates
    if (t >= 0.0 && Q_age_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_age_text.tStart = t;  // (not accounting for frame time here)
      Q_age_text.frameNStart = frameN;  // exact frame index
      
      Q_age_text.setAutoDraw(true);
    }
    
    
    // if Q_age_text is active this frame...
    if (Q_age_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textbox_age* updates
    if (t >= 0.0 && textbox_age.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_age.tStart = t;  // (not accounting for frame time here)
      textbox_age.frameNStart = frameN;  // exact frame index
      
      textbox_age.setAutoDraw(true);
    }
    
    
    // if textbox_age is active this frame...
    if (textbox_age.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from code_3
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! ("allow_advance_age" in psychoJS.experiment))) {
        psychoJS.experiment.allow_advance_age = false;
    }
    keys = psychoJS.eventManager.getKeys();
    if (_pj.in_es6("return", keys)) {
        user_input = textbox_age.text.trim();
        if ((user_input !== "")) {
            psychoJS.experiment.allow_advance_age = true;
        }
    }
    if (psychoJS.experiment.allow_advance_age) {
        continueRoutine = false;
    }
    
    
    // *enter_hint_age* updates
    if (t >= 0.0 && enter_hint_age.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enter_hint_age.tStart = t;  // (not accounting for frame time here)
      enter_hint_age.frameNStart = frameN;  // exact frame index
      
      enter_hint_age.setAutoDraw(true);
    }
    
    
    // if enter_hint_age is active this frame...
    if (enter_hint_age.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Q2* updates
    if (t >= 0.0 && Q2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q2.tStart = t;  // (not accounting for frame time here)
      Q2.frameNStart = frameN;  // exact frame index
      
      Q2.setAutoDraw(true);
    }
    
    
    // if Q2 is active this frame...
    if (Q2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *hint_age* updates
    if (t >= 0.0 && hint_age.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hint_age.tStart = t;  // (not accounting for frame time here)
      hint_age.frameNStart = frameN;  // exact frame index
      
      hint_age.setAutoDraw(true);
    }
    
    
    // if hint_age is active this frame...
    if (hint_age.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of AgeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function AgeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Age' ---
    for (const thisComponent of AgeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Age.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox_age.text',textbox_age.text)
    // Run 'End Routine' code from code_3
    psychoJS.experiment.addData("age", textbox_age.text);
    
    // the Routine "Age" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var relationship_statusMaxDurationReached;
var relationship_statusMaxDuration;
var relationship_statusComponents;
function relationship_statusRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'relationship_status' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    relationship_statusClock.reset();
    routineTimer.reset();
    relationship_statusMaxDurationReached = false;
    // update component parameters for each repeat
    // reset relationship_single to account for continued clicks & clear times on/off
    relationship_single.reset()
    // reset relationship_Inarelationship to account for continued clicks & clear times on/off
    relationship_Inarelationship.reset()
    // reset relationship_Married to account for continued clicks & clear times on/off
    relationship_Married.reset()
    // reset relationship_Divorced to account for continued clicks & clear times on/off
    relationship_Divorced.reset()
    psychoJS.experiment.addData('relationship_status.started', globalClock.getTime());
    relationship_statusMaxDuration = null
    // keep track of which components have finished
    relationship_statusComponents = [];
    relationship_statusComponents.push(Q_relationship_status);
    relationship_statusComponents.push(relationship_single);
    relationship_statusComponents.push(relationship_Inarelationship);
    relationship_statusComponents.push(relationship_Married);
    relationship_statusComponents.push(relationship_Divorced);
    relationship_statusComponents.push(Q3);
    
    for (const thisComponent of relationship_statusComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function relationship_statusRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'relationship_status' ---
    // get current time
    t = relationship_statusClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_relationship_status* updates
    if (t >= 0.0 && Q_relationship_status.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_relationship_status.tStart = t;  // (not accounting for frame time here)
      Q_relationship_status.frameNStart = frameN;  // exact frame index
      
      Q_relationship_status.setAutoDraw(true);
    }
    
    
    // if Q_relationship_status is active this frame...
    if (Q_relationship_status.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *relationship_single* updates
    if (t >= 0 && relationship_single.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      relationship_single.tStart = t;  // (not accounting for frame time here)
      relationship_single.frameNStart = frameN;  // exact frame index
      
      relationship_single.setAutoDraw(true);
    }
    
    
    // if relationship_single is active this frame...
    if (relationship_single.status === PsychoJS.Status.STARTED) {
    }
    
    if (relationship_single.status === PsychoJS.Status.STARTED) {
      // check whether relationship_single has been pressed
      if (relationship_single.isClicked) {
        if (!relationship_single.wasClicked) {
          // store time of first click
          relationship_single.timesOn.push(relationship_single.clock.getTime());
          // store time clicked until
          relationship_single.timesOff.push(relationship_single.clock.getTime());
        } else {
          // update time clicked until;
          relationship_single.timesOff[relationship_single.timesOff.length - 1] = relationship_single.clock.getTime();
        }
        if (!relationship_single.wasClicked) {
          // end routine when relationship_single is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("relationship_status", "Single");
        }
        // if relationship_single is still clicked next frame, it is not a new click
        relationship_single.wasClicked = true;
      } else {
        // if relationship_single is clicked next frame, it is a new click
        relationship_single.wasClicked = false;
      }
    } else {
      // keep clock at 0 if relationship_single hasn't started / has finished
      relationship_single.clock.reset();
      // if relationship_single is clicked next frame, it is a new click
      relationship_single.wasClicked = false;
    }
    
    // *relationship_Inarelationship* updates
    if (t >= 0 && relationship_Inarelationship.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      relationship_Inarelationship.tStart = t;  // (not accounting for frame time here)
      relationship_Inarelationship.frameNStart = frameN;  // exact frame index
      
      relationship_Inarelationship.setAutoDraw(true);
    }
    
    
    // if relationship_Inarelationship is active this frame...
    if (relationship_Inarelationship.status === PsychoJS.Status.STARTED) {
    }
    
    if (relationship_Inarelationship.status === PsychoJS.Status.STARTED) {
      // check whether relationship_Inarelationship has been pressed
      if (relationship_Inarelationship.isClicked) {
        if (!relationship_Inarelationship.wasClicked) {
          // store time of first click
          relationship_Inarelationship.timesOn.push(relationship_Inarelationship.clock.getTime());
          // store time clicked until
          relationship_Inarelationship.timesOff.push(relationship_Inarelationship.clock.getTime());
        } else {
          // update time clicked until;
          relationship_Inarelationship.timesOff[relationship_Inarelationship.timesOff.length - 1] = relationship_Inarelationship.clock.getTime();
        }
        if (!relationship_Inarelationship.wasClicked) {
          // end routine when relationship_Inarelationship is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("relationship_status", "In a relationship");
        }
        // if relationship_Inarelationship is still clicked next frame, it is not a new click
        relationship_Inarelationship.wasClicked = true;
      } else {
        // if relationship_Inarelationship is clicked next frame, it is a new click
        relationship_Inarelationship.wasClicked = false;
      }
    } else {
      // keep clock at 0 if relationship_Inarelationship hasn't started / has finished
      relationship_Inarelationship.clock.reset();
      // if relationship_Inarelationship is clicked next frame, it is a new click
      relationship_Inarelationship.wasClicked = false;
    }
    
    // *relationship_Married* updates
    if (t >= 0 && relationship_Married.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      relationship_Married.tStart = t;  // (not accounting for frame time here)
      relationship_Married.frameNStart = frameN;  // exact frame index
      
      relationship_Married.setAutoDraw(true);
    }
    
    
    // if relationship_Married is active this frame...
    if (relationship_Married.status === PsychoJS.Status.STARTED) {
    }
    
    if (relationship_Married.status === PsychoJS.Status.STARTED) {
      // check whether relationship_Married has been pressed
      if (relationship_Married.isClicked) {
        if (!relationship_Married.wasClicked) {
          // store time of first click
          relationship_Married.timesOn.push(relationship_Married.clock.getTime());
          // store time clicked until
          relationship_Married.timesOff.push(relationship_Married.clock.getTime());
        } else {
          // update time clicked until;
          relationship_Married.timesOff[relationship_Married.timesOff.length - 1] = relationship_Married.clock.getTime();
        }
        if (!relationship_Married.wasClicked) {
          // end routine when relationship_Married is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("relationship_status", "Married");
        }
        // if relationship_Married is still clicked next frame, it is not a new click
        relationship_Married.wasClicked = true;
      } else {
        // if relationship_Married is clicked next frame, it is a new click
        relationship_Married.wasClicked = false;
      }
    } else {
      // keep clock at 0 if relationship_Married hasn't started / has finished
      relationship_Married.clock.reset();
      // if relationship_Married is clicked next frame, it is a new click
      relationship_Married.wasClicked = false;
    }
    
    // *relationship_Divorced* updates
    if (t >= 0 && relationship_Divorced.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      relationship_Divorced.tStart = t;  // (not accounting for frame time here)
      relationship_Divorced.frameNStart = frameN;  // exact frame index
      
      relationship_Divorced.setAutoDraw(true);
    }
    
    
    // if relationship_Divorced is active this frame...
    if (relationship_Divorced.status === PsychoJS.Status.STARTED) {
    }
    
    if (relationship_Divorced.status === PsychoJS.Status.STARTED) {
      // check whether relationship_Divorced has been pressed
      if (relationship_Divorced.isClicked) {
        if (!relationship_Divorced.wasClicked) {
          // store time of first click
          relationship_Divorced.timesOn.push(relationship_Divorced.clock.getTime());
          // store time clicked until
          relationship_Divorced.timesOff.push(relationship_Divorced.clock.getTime());
        } else {
          // update time clicked until;
          relationship_Divorced.timesOff[relationship_Divorced.timesOff.length - 1] = relationship_Divorced.clock.getTime();
        }
        if (!relationship_Divorced.wasClicked) {
          // end routine when relationship_Divorced is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("relationship_status", "Divorced");
        }
        // if relationship_Divorced is still clicked next frame, it is not a new click
        relationship_Divorced.wasClicked = true;
      } else {
        // if relationship_Divorced is clicked next frame, it is a new click
        relationship_Divorced.wasClicked = false;
      }
    } else {
      // keep clock at 0 if relationship_Divorced hasn't started / has finished
      relationship_Divorced.clock.reset();
      // if relationship_Divorced is clicked next frame, it is a new click
      relationship_Divorced.wasClicked = false;
    }
    
    // *Q3* updates
    if (t >= 0.0 && Q3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q3.tStart = t;  // (not accounting for frame time here)
      Q3.frameNStart = frameN;  // exact frame index
      
      Q3.setAutoDraw(true);
    }
    
    
    // if Q3 is active this frame...
    if (Q3.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of relationship_statusComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function relationship_statusRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'relationship_status' ---
    for (const thisComponent of relationship_statusComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('relationship_status.stopped', globalClock.getTime());
    psychoJS.experiment.addData('relationship_single.numClicks', relationship_single.numClicks);
    psychoJS.experiment.addData('relationship_single.timesOn', relationship_single.timesOn);
    psychoJS.experiment.addData('relationship_single.timesOff', relationship_single.timesOff);
    psychoJS.experiment.addData('relationship_Inarelationship.numClicks', relationship_Inarelationship.numClicks);
    psychoJS.experiment.addData('relationship_Inarelationship.timesOn', relationship_Inarelationship.timesOn);
    psychoJS.experiment.addData('relationship_Inarelationship.timesOff', relationship_Inarelationship.timesOff);
    psychoJS.experiment.addData('relationship_Married.numClicks', relationship_Married.numClicks);
    psychoJS.experiment.addData('relationship_Married.timesOn', relationship_Married.timesOn);
    psychoJS.experiment.addData('relationship_Married.timesOff', relationship_Married.timesOff);
    psychoJS.experiment.addData('relationship_Divorced.numClicks', relationship_Divorced.numClicks);
    psychoJS.experiment.addData('relationship_Divorced.timesOn', relationship_Divorced.timesOn);
    psychoJS.experiment.addData('relationship_Divorced.timesOff', relationship_Divorced.timesOff);
    // the Routine "relationship_status" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var nationalityMaxDurationReached;
var nationalityMaxDuration;
var nationalityComponents;
function nationalityRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'nationality' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    nationalityClock.reset();
    routineTimer.reset();
    nationalityMaxDurationReached = false;
    // update component parameters for each repeat
    // reset nationality_china to account for continued clicks & clear times on/off
    nationality_china.reset()
    // reset nationality_malaysia to account for continued clicks & clear times on/off
    nationality_malaysia.reset()
    // reset nationality_other to account for continued clicks & clear times on/off
    nationality_other.reset()
    // reset nationality_prefernot to account for continued clicks & clear times on/off
    nationality_prefernot.reset()
    psychoJS.experiment.addData('nationality.started', globalClock.getTime());
    nationalityMaxDuration = null
    // keep track of which components have finished
    nationalityComponents = [];
    nationalityComponents.push(nationality_text);
    nationalityComponents.push(nationality_china);
    nationalityComponents.push(nationality_malaysia);
    nationalityComponents.push(nationality_other);
    nationalityComponents.push(nationality_prefernot);
    nationalityComponents.push(Q4);
    nationalityComponents.push(hint_nationality);
    
    for (const thisComponent of nationalityComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function nationalityRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'nationality' ---
    // get current time
    t = nationalityClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *nationality_text* updates
    if (t >= 0.0 && nationality_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nationality_text.tStart = t;  // (not accounting for frame time here)
      nationality_text.frameNStart = frameN;  // exact frame index
      
      nationality_text.setAutoDraw(true);
    }
    
    
    // if nationality_text is active this frame...
    if (nationality_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *nationality_china* updates
    if (t >= 0 && nationality_china.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nationality_china.tStart = t;  // (not accounting for frame time here)
      nationality_china.frameNStart = frameN;  // exact frame index
      
      nationality_china.setAutoDraw(true);
    }
    
    
    // if nationality_china is active this frame...
    if (nationality_china.status === PsychoJS.Status.STARTED) {
    }
    
    if (nationality_china.status === PsychoJS.Status.STARTED) {
      // check whether nationality_china has been pressed
      if (nationality_china.isClicked) {
        if (!nationality_china.wasClicked) {
          // store time of first click
          nationality_china.timesOn.push(nationality_china.clock.getTime());
          // store time clicked until
          nationality_china.timesOff.push(nationality_china.clock.getTime());
        } else {
          // update time clicked until;
          nationality_china.timesOff[nationality_china.timesOff.length - 1] = nationality_china.clock.getTime();
        }
        if (!nationality_china.wasClicked) {
          // end routine when nationality_china is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("nationality", "China");
        }
        // if nationality_china is still clicked next frame, it is not a new click
        nationality_china.wasClicked = true;
      } else {
        // if nationality_china is clicked next frame, it is a new click
        nationality_china.wasClicked = false;
      }
    } else {
      // keep clock at 0 if nationality_china hasn't started / has finished
      nationality_china.clock.reset();
      // if nationality_china is clicked next frame, it is a new click
      nationality_china.wasClicked = false;
    }
    
    // *nationality_malaysia* updates
    if (t >= 0 && nationality_malaysia.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nationality_malaysia.tStart = t;  // (not accounting for frame time here)
      nationality_malaysia.frameNStart = frameN;  // exact frame index
      
      nationality_malaysia.setAutoDraw(true);
    }
    
    
    // if nationality_malaysia is active this frame...
    if (nationality_malaysia.status === PsychoJS.Status.STARTED) {
    }
    
    if (nationality_malaysia.status === PsychoJS.Status.STARTED) {
      // check whether nationality_malaysia has been pressed
      if (nationality_malaysia.isClicked) {
        if (!nationality_malaysia.wasClicked) {
          // store time of first click
          nationality_malaysia.timesOn.push(nationality_malaysia.clock.getTime());
          // store time clicked until
          nationality_malaysia.timesOff.push(nationality_malaysia.clock.getTime());
        } else {
          // update time clicked until;
          nationality_malaysia.timesOff[nationality_malaysia.timesOff.length - 1] = nationality_malaysia.clock.getTime();
        }
        if (!nationality_malaysia.wasClicked) {
          // end routine when nationality_malaysia is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("nationality", "Malaysia");
        }
        // if nationality_malaysia is still clicked next frame, it is not a new click
        nationality_malaysia.wasClicked = true;
      } else {
        // if nationality_malaysia is clicked next frame, it is a new click
        nationality_malaysia.wasClicked = false;
      }
    } else {
      // keep clock at 0 if nationality_malaysia hasn't started / has finished
      nationality_malaysia.clock.reset();
      // if nationality_malaysia is clicked next frame, it is a new click
      nationality_malaysia.wasClicked = false;
    }
    
    // *nationality_other* updates
    if (t >= 0 && nationality_other.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nationality_other.tStart = t;  // (not accounting for frame time here)
      nationality_other.frameNStart = frameN;  // exact frame index
      
      nationality_other.setAutoDraw(true);
    }
    
    
    // if nationality_other is active this frame...
    if (nationality_other.status === PsychoJS.Status.STARTED) {
    }
    
    if (nationality_other.status === PsychoJS.Status.STARTED) {
      // check whether nationality_other has been pressed
      if (nationality_other.isClicked) {
        if (!nationality_other.wasClicked) {
          // store time of first click
          nationality_other.timesOn.push(nationality_other.clock.getTime());
          // store time clicked until
          nationality_other.timesOff.push(nationality_other.clock.getTime());
        } else {
          // update time clicked until;
          nationality_other.timesOff[nationality_other.timesOff.length - 1] = nationality_other.clock.getTime();
        }
        if (!nationality_other.wasClicked) {
          // end routine when nationality_other is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("nationality", "Other");
        }
        // if nationality_other is still clicked next frame, it is not a new click
        nationality_other.wasClicked = true;
      } else {
        // if nationality_other is clicked next frame, it is a new click
        nationality_other.wasClicked = false;
      }
    } else {
      // keep clock at 0 if nationality_other hasn't started / has finished
      nationality_other.clock.reset();
      // if nationality_other is clicked next frame, it is a new click
      nationality_other.wasClicked = false;
    }
    
    // *nationality_prefernot* updates
    if (t >= 0 && nationality_prefernot.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nationality_prefernot.tStart = t;  // (not accounting for frame time here)
      nationality_prefernot.frameNStart = frameN;  // exact frame index
      
      nationality_prefernot.setAutoDraw(true);
    }
    
    
    // if nationality_prefernot is active this frame...
    if (nationality_prefernot.status === PsychoJS.Status.STARTED) {
    }
    
    if (nationality_prefernot.status === PsychoJS.Status.STARTED) {
      // check whether nationality_prefernot has been pressed
      if (nationality_prefernot.isClicked) {
        if (!nationality_prefernot.wasClicked) {
          // store time of first click
          nationality_prefernot.timesOn.push(nationality_prefernot.clock.getTime());
          // store time clicked until
          nationality_prefernot.timesOff.push(nationality_prefernot.clock.getTime());
        } else {
          // update time clicked until;
          nationality_prefernot.timesOff[nationality_prefernot.timesOff.length - 1] = nationality_prefernot.clock.getTime();
        }
        if (!nationality_prefernot.wasClicked) {
          // end routine when nationality_prefernot is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("nationality", "99");
        }
        // if nationality_prefernot is still clicked next frame, it is not a new click
        nationality_prefernot.wasClicked = true;
      } else {
        // if nationality_prefernot is clicked next frame, it is a new click
        nationality_prefernot.wasClicked = false;
      }
    } else {
      // keep clock at 0 if nationality_prefernot hasn't started / has finished
      nationality_prefernot.clock.reset();
      // if nationality_prefernot is clicked next frame, it is a new click
      nationality_prefernot.wasClicked = false;
    }
    
    // *Q4* updates
    if (t >= 0.0 && Q4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q4.tStart = t;  // (not accounting for frame time here)
      Q4.frameNStart = frameN;  // exact frame index
      
      Q4.setAutoDraw(true);
    }
    
    
    // if Q4 is active this frame...
    if (Q4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *hint_nationality* updates
    if (t >= 0.0 && hint_nationality.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hint_nationality.tStart = t;  // (not accounting for frame time here)
      hint_nationality.frameNStart = frameN;  // exact frame index
      
      hint_nationality.setAutoDraw(true);
    }
    
    
    // if hint_nationality is active this frame...
    if (hint_nationality.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of nationalityComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function nationalityRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'nationality' ---
    for (const thisComponent of nationalityComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('nationality.stopped', globalClock.getTime());
    psychoJS.experiment.addData('nationality_china.numClicks', nationality_china.numClicks);
    psychoJS.experiment.addData('nationality_china.timesOn', nationality_china.timesOn);
    psychoJS.experiment.addData('nationality_china.timesOff', nationality_china.timesOff);
    psychoJS.experiment.addData('nationality_malaysia.numClicks', nationality_malaysia.numClicks);
    psychoJS.experiment.addData('nationality_malaysia.timesOn', nationality_malaysia.timesOn);
    psychoJS.experiment.addData('nationality_malaysia.timesOff', nationality_malaysia.timesOff);
    psychoJS.experiment.addData('nationality_other.numClicks', nationality_other.numClicks);
    psychoJS.experiment.addData('nationality_other.timesOn', nationality_other.timesOn);
    psychoJS.experiment.addData('nationality_other.timesOff', nationality_other.timesOff);
    psychoJS.experiment.addData('nationality_prefernot.numClicks', nationality_prefernot.numClicks);
    psychoJS.experiment.addData('nationality_prefernot.timesOn', nationality_prefernot.timesOn);
    psychoJS.experiment.addData('nationality_prefernot.timesOff', nationality_prefernot.timesOff);
    // the Routine "nationality" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var EducationMaxDurationReached;
var EducationMaxDuration;
var EducationComponents;
function EducationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Education' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    EducationClock.reset();
    routineTimer.reset();
    EducationMaxDurationReached = false;
    // update component parameters for each repeat
    // reset edu_btn_1 to account for continued clicks & clear times on/off
    edu_btn_1.reset()
    // reset edu_btn_2 to account for continued clicks & clear times on/off
    edu_btn_2.reset()
    // reset edu_btn_3 to account for continued clicks & clear times on/off
    edu_btn_3.reset()
    // reset edu_btn_4 to account for continued clicks & clear times on/off
    edu_btn_4.reset()
    // reset edu_btn_5 to account for continued clicks & clear times on/off
    edu_btn_5.reset()
    psychoJS.experiment.addData('Education.started', globalClock.getTime());
    EducationMaxDuration = null
    // keep track of which components have finished
    EducationComponents = [];
    EducationComponents.push(Q_edu_level_text);
    EducationComponents.push(edu_btn_1);
    EducationComponents.push(edu_btn_2);
    EducationComponents.push(edu_btn_3);
    EducationComponents.push(edu_btn_4);
    EducationComponents.push(edu_btn_5);
    EducationComponents.push(Q5);
    
    for (const thisComponent of EducationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function EducationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Education' ---
    // get current time
    t = EducationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_edu_level_text* updates
    if (t >= 0.0 && Q_edu_level_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_edu_level_text.tStart = t;  // (not accounting for frame time here)
      Q_edu_level_text.frameNStart = frameN;  // exact frame index
      
      Q_edu_level_text.setAutoDraw(true);
    }
    
    
    // if Q_edu_level_text is active this frame...
    if (Q_edu_level_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *edu_btn_1* updates
    if (t >= 0 && edu_btn_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      edu_btn_1.tStart = t;  // (not accounting for frame time here)
      edu_btn_1.frameNStart = frameN;  // exact frame index
      
      edu_btn_1.setAutoDraw(true);
    }
    
    
    // if edu_btn_1 is active this frame...
    if (edu_btn_1.status === PsychoJS.Status.STARTED) {
    }
    
    if (edu_btn_1.status === PsychoJS.Status.STARTED) {
      // check whether edu_btn_1 has been pressed
      if (edu_btn_1.isClicked) {
        if (!edu_btn_1.wasClicked) {
          // store time of first click
          edu_btn_1.timesOn.push(edu_btn_1.clock.getTime());
          // store time clicked until
          edu_btn_1.timesOff.push(edu_btn_1.clock.getTime());
        } else {
          // update time clicked until;
          edu_btn_1.timesOff[edu_btn_1.timesOff.length - 1] = edu_btn_1.clock.getTime();
        }
        if (!edu_btn_1.wasClicked) {
          // end routine when edu_btn_1 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("edu_level", "Primary");
        }
        // if edu_btn_1 is still clicked next frame, it is not a new click
        edu_btn_1.wasClicked = true;
      } else {
        // if edu_btn_1 is clicked next frame, it is a new click
        edu_btn_1.wasClicked = false;
      }
    } else {
      // keep clock at 0 if edu_btn_1 hasn't started / has finished
      edu_btn_1.clock.reset();
      // if edu_btn_1 is clicked next frame, it is a new click
      edu_btn_1.wasClicked = false;
    }
    
    // *edu_btn_2* updates
    if (t >= 0 && edu_btn_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      edu_btn_2.tStart = t;  // (not accounting for frame time here)
      edu_btn_2.frameNStart = frameN;  // exact frame index
      
      edu_btn_2.setAutoDraw(true);
    }
    
    
    // if edu_btn_2 is active this frame...
    if (edu_btn_2.status === PsychoJS.Status.STARTED) {
    }
    
    if (edu_btn_2.status === PsychoJS.Status.STARTED) {
      // check whether edu_btn_2 has been pressed
      if (edu_btn_2.isClicked) {
        if (!edu_btn_2.wasClicked) {
          // store time of first click
          edu_btn_2.timesOn.push(edu_btn_2.clock.getTime());
          // store time clicked until
          edu_btn_2.timesOff.push(edu_btn_2.clock.getTime());
        } else {
          // update time clicked until;
          edu_btn_2.timesOff[edu_btn_2.timesOff.length - 1] = edu_btn_2.clock.getTime();
        }
        if (!edu_btn_2.wasClicked) {
          // end routine when edu_btn_2 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("edu_level", "Secondary");
        }
        // if edu_btn_2 is still clicked next frame, it is not a new click
        edu_btn_2.wasClicked = true;
      } else {
        // if edu_btn_2 is clicked next frame, it is a new click
        edu_btn_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if edu_btn_2 hasn't started / has finished
      edu_btn_2.clock.reset();
      // if edu_btn_2 is clicked next frame, it is a new click
      edu_btn_2.wasClicked = false;
    }
    
    // *edu_btn_3* updates
    if (t >= 0 && edu_btn_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      edu_btn_3.tStart = t;  // (not accounting for frame time here)
      edu_btn_3.frameNStart = frameN;  // exact frame index
      
      edu_btn_3.setAutoDraw(true);
    }
    
    
    // if edu_btn_3 is active this frame...
    if (edu_btn_3.status === PsychoJS.Status.STARTED) {
    }
    
    if (edu_btn_3.status === PsychoJS.Status.STARTED) {
      // check whether edu_btn_3 has been pressed
      if (edu_btn_3.isClicked) {
        if (!edu_btn_3.wasClicked) {
          // store time of first click
          edu_btn_3.timesOn.push(edu_btn_3.clock.getTime());
          // store time clicked until
          edu_btn_3.timesOff.push(edu_btn_3.clock.getTime());
        } else {
          // update time clicked until;
          edu_btn_3.timesOff[edu_btn_3.timesOff.length - 1] = edu_btn_3.clock.getTime();
        }
        if (!edu_btn_3.wasClicked) {
          // end routine when edu_btn_3 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("edu_level", "STPM");
        }
        // if edu_btn_3 is still clicked next frame, it is not a new click
        edu_btn_3.wasClicked = true;
      } else {
        // if edu_btn_3 is clicked next frame, it is a new click
        edu_btn_3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if edu_btn_3 hasn't started / has finished
      edu_btn_3.clock.reset();
      // if edu_btn_3 is clicked next frame, it is a new click
      edu_btn_3.wasClicked = false;
    }
    
    // *edu_btn_4* updates
    if (t >= 0 && edu_btn_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      edu_btn_4.tStart = t;  // (not accounting for frame time here)
      edu_btn_4.frameNStart = frameN;  // exact frame index
      
      edu_btn_4.setAutoDraw(true);
    }
    
    
    // if edu_btn_4 is active this frame...
    if (edu_btn_4.status === PsychoJS.Status.STARTED) {
    }
    
    if (edu_btn_4.status === PsychoJS.Status.STARTED) {
      // check whether edu_btn_4 has been pressed
      if (edu_btn_4.isClicked) {
        if (!edu_btn_4.wasClicked) {
          // store time of first click
          edu_btn_4.timesOn.push(edu_btn_4.clock.getTime());
          // store time clicked until
          edu_btn_4.timesOff.push(edu_btn_4.clock.getTime());
        } else {
          // update time clicked until;
          edu_btn_4.timesOff[edu_btn_4.timesOff.length - 1] = edu_btn_4.clock.getTime();
        }
        if (!edu_btn_4.wasClicked) {
          // end routine when edu_btn_4 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("edu_level", "Degree");
        }
        // if edu_btn_4 is still clicked next frame, it is not a new click
        edu_btn_4.wasClicked = true;
      } else {
        // if edu_btn_4 is clicked next frame, it is a new click
        edu_btn_4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if edu_btn_4 hasn't started / has finished
      edu_btn_4.clock.reset();
      // if edu_btn_4 is clicked next frame, it is a new click
      edu_btn_4.wasClicked = false;
    }
    
    // *edu_btn_5* updates
    if (t >= 0 && edu_btn_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      edu_btn_5.tStart = t;  // (not accounting for frame time here)
      edu_btn_5.frameNStart = frameN;  // exact frame index
      
      edu_btn_5.setAutoDraw(true);
    }
    
    
    // if edu_btn_5 is active this frame...
    if (edu_btn_5.status === PsychoJS.Status.STARTED) {
    }
    
    if (edu_btn_5.status === PsychoJS.Status.STARTED) {
      // check whether edu_btn_5 has been pressed
      if (edu_btn_5.isClicked) {
        if (!edu_btn_5.wasClicked) {
          // store time of first click
          edu_btn_5.timesOn.push(edu_btn_5.clock.getTime());
          // store time clicked until
          edu_btn_5.timesOff.push(edu_btn_5.clock.getTime());
        } else {
          // update time clicked until;
          edu_btn_5.timesOff[edu_btn_5.timesOff.length - 1] = edu_btn_5.clock.getTime();
        }
        if (!edu_btn_5.wasClicked) {
          // end routine when edu_btn_5 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("edu_level", "Master");
        }
        // if edu_btn_5 is still clicked next frame, it is not a new click
        edu_btn_5.wasClicked = true;
      } else {
        // if edu_btn_5 is clicked next frame, it is a new click
        edu_btn_5.wasClicked = false;
      }
    } else {
      // keep clock at 0 if edu_btn_5 hasn't started / has finished
      edu_btn_5.clock.reset();
      // if edu_btn_5 is clicked next frame, it is a new click
      edu_btn_5.wasClicked = false;
    }
    
    // *Q5* updates
    if (t >= 0.0 && Q5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q5.tStart = t;  // (not accounting for frame time here)
      Q5.frameNStart = frameN;  // exact frame index
      
      Q5.setAutoDraw(true);
    }
    
    
    // if Q5 is active this frame...
    if (Q5.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of EducationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EducationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Education' ---
    for (const thisComponent of EducationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Education.stopped', globalClock.getTime());
    psychoJS.experiment.addData('edu_btn_1.numClicks', edu_btn_1.numClicks);
    psychoJS.experiment.addData('edu_btn_1.timesOn', edu_btn_1.timesOn);
    psychoJS.experiment.addData('edu_btn_1.timesOff', edu_btn_1.timesOff);
    psychoJS.experiment.addData('edu_btn_2.numClicks', edu_btn_2.numClicks);
    psychoJS.experiment.addData('edu_btn_2.timesOn', edu_btn_2.timesOn);
    psychoJS.experiment.addData('edu_btn_2.timesOff', edu_btn_2.timesOff);
    psychoJS.experiment.addData('edu_btn_3.numClicks', edu_btn_3.numClicks);
    psychoJS.experiment.addData('edu_btn_3.timesOn', edu_btn_3.timesOn);
    psychoJS.experiment.addData('edu_btn_3.timesOff', edu_btn_3.timesOff);
    psychoJS.experiment.addData('edu_btn_4.numClicks', edu_btn_4.numClicks);
    psychoJS.experiment.addData('edu_btn_4.timesOn', edu_btn_4.timesOn);
    psychoJS.experiment.addData('edu_btn_4.timesOff', edu_btn_4.timesOff);
    psychoJS.experiment.addData('edu_btn_5.numClicks', edu_btn_5.numClicks);
    psychoJS.experiment.addData('edu_btn_5.timesOn', edu_btn_5.timesOn);
    psychoJS.experiment.addData('edu_btn_5.timesOff', edu_btn_5.timesOff);
    // the Routine "Education" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var religionMaxDurationReached;
var religionMaxDuration;
var religionComponents;
function religionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'religion' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    religionClock.reset();
    routineTimer.reset();
    religionMaxDurationReached = false;
    // update component parameters for each repeat
    // reset religion_btn_1 to account for continued clicks & clear times on/off
    religion_btn_1.reset()
    // reset religion_btn_2 to account for continued clicks & clear times on/off
    religion_btn_2.reset()
    // reset religion_btn_3 to account for continued clicks & clear times on/off
    religion_btn_3.reset()
    // reset religion_btn_4 to account for continued clicks & clear times on/off
    religion_btn_4.reset()
    // reset religion_btn_5 to account for continued clicks & clear times on/off
    religion_btn_5.reset()
    // reset religion_btn_6 to account for continued clicks & clear times on/off
    religion_btn_6.reset()
    // reset religion_btn_7 to account for continued clicks & clear times on/off
    religion_btn_7.reset()
    psychoJS.experiment.addData('religion.started', globalClock.getTime());
    religionMaxDuration = null
    // keep track of which components have finished
    religionComponents = [];
    religionComponents.push(Q_religion_text);
    religionComponents.push(religion_btn_1);
    religionComponents.push(religion_btn_2);
    religionComponents.push(religion_btn_3);
    religionComponents.push(religion_btn_4);
    religionComponents.push(religion_btn_5);
    religionComponents.push(religion_btn_6);
    religionComponents.push(religion_btn_7);
    religionComponents.push(Q6);
    
    for (const thisComponent of religionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function religionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'religion' ---
    // get current time
    t = religionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_religion_text* updates
    if (t >= 0.0 && Q_religion_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_religion_text.tStart = t;  // (not accounting for frame time here)
      Q_religion_text.frameNStart = frameN;  // exact frame index
      
      Q_religion_text.setAutoDraw(true);
    }
    
    
    // if Q_religion_text is active this frame...
    if (Q_religion_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *religion_btn_1* updates
    if (t >= 0 && religion_btn_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      religion_btn_1.tStart = t;  // (not accounting for frame time here)
      religion_btn_1.frameNStart = frameN;  // exact frame index
      
      religion_btn_1.setAutoDraw(true);
    }
    
    
    // if religion_btn_1 is active this frame...
    if (religion_btn_1.status === PsychoJS.Status.STARTED) {
    }
    
    if (religion_btn_1.status === PsychoJS.Status.STARTED) {
      // check whether religion_btn_1 has been pressed
      if (religion_btn_1.isClicked) {
        if (!religion_btn_1.wasClicked) {
          // store time of first click
          religion_btn_1.timesOn.push(religion_btn_1.clock.getTime());
          // store time clicked until
          religion_btn_1.timesOff.push(religion_btn_1.clock.getTime());
        } else {
          // update time clicked until;
          religion_btn_1.timesOff[religion_btn_1.timesOff.length - 1] = religion_btn_1.clock.getTime();
        }
        if (!religion_btn_1.wasClicked) {
          // end routine when religion_btn_1 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("religion_type", "Buddhism");
        }
        // if religion_btn_1 is still clicked next frame, it is not a new click
        religion_btn_1.wasClicked = true;
      } else {
        // if religion_btn_1 is clicked next frame, it is a new click
        religion_btn_1.wasClicked = false;
      }
    } else {
      // keep clock at 0 if religion_btn_1 hasn't started / has finished
      religion_btn_1.clock.reset();
      // if religion_btn_1 is clicked next frame, it is a new click
      religion_btn_1.wasClicked = false;
    }
    
    // *religion_btn_2* updates
    if (t >= 0 && religion_btn_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      religion_btn_2.tStart = t;  // (not accounting for frame time here)
      religion_btn_2.frameNStart = frameN;  // exact frame index
      
      religion_btn_2.setAutoDraw(true);
    }
    
    
    // if religion_btn_2 is active this frame...
    if (religion_btn_2.status === PsychoJS.Status.STARTED) {
    }
    
    if (religion_btn_2.status === PsychoJS.Status.STARTED) {
      // check whether religion_btn_2 has been pressed
      if (religion_btn_2.isClicked) {
        if (!religion_btn_2.wasClicked) {
          // store time of first click
          religion_btn_2.timesOn.push(religion_btn_2.clock.getTime());
          // store time clicked until
          religion_btn_2.timesOff.push(religion_btn_2.clock.getTime());
        } else {
          // update time clicked until;
          religion_btn_2.timesOff[religion_btn_2.timesOff.length - 1] = religion_btn_2.clock.getTime();
        }
        if (!religion_btn_2.wasClicked) {
          // end routine when religion_btn_2 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("religion_type", "Christian");
        }
        // if religion_btn_2 is still clicked next frame, it is not a new click
        religion_btn_2.wasClicked = true;
      } else {
        // if religion_btn_2 is clicked next frame, it is a new click
        religion_btn_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if religion_btn_2 hasn't started / has finished
      religion_btn_2.clock.reset();
      // if religion_btn_2 is clicked next frame, it is a new click
      religion_btn_2.wasClicked = false;
    }
    
    // *religion_btn_3* updates
    if (t >= 0 && religion_btn_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      religion_btn_3.tStart = t;  // (not accounting for frame time here)
      religion_btn_3.frameNStart = frameN;  // exact frame index
      
      religion_btn_3.setAutoDraw(true);
    }
    
    
    // if religion_btn_3 is active this frame...
    if (religion_btn_3.status === PsychoJS.Status.STARTED) {
    }
    
    if (religion_btn_3.status === PsychoJS.Status.STARTED) {
      // check whether religion_btn_3 has been pressed
      if (religion_btn_3.isClicked) {
        if (!religion_btn_3.wasClicked) {
          // store time of first click
          religion_btn_3.timesOn.push(religion_btn_3.clock.getTime());
          // store time clicked until
          religion_btn_3.timesOff.push(religion_btn_3.clock.getTime());
        } else {
          // update time clicked until;
          religion_btn_3.timesOff[religion_btn_3.timesOff.length - 1] = religion_btn_3.clock.getTime();
        }
        if (!religion_btn_3.wasClicked) {
          // end routine when religion_btn_3 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("religion_type", "Islam");
        }
        // if religion_btn_3 is still clicked next frame, it is not a new click
        religion_btn_3.wasClicked = true;
      } else {
        // if religion_btn_3 is clicked next frame, it is a new click
        religion_btn_3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if religion_btn_3 hasn't started / has finished
      religion_btn_3.clock.reset();
      // if religion_btn_3 is clicked next frame, it is a new click
      religion_btn_3.wasClicked = false;
    }
    
    // *religion_btn_4* updates
    if (t >= 0 && religion_btn_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      religion_btn_4.tStart = t;  // (not accounting for frame time here)
      religion_btn_4.frameNStart = frameN;  // exact frame index
      
      religion_btn_4.setAutoDraw(true);
    }
    
    
    // if religion_btn_4 is active this frame...
    if (religion_btn_4.status === PsychoJS.Status.STARTED) {
    }
    
    if (religion_btn_4.status === PsychoJS.Status.STARTED) {
      // check whether religion_btn_4 has been pressed
      if (religion_btn_4.isClicked) {
        if (!religion_btn_4.wasClicked) {
          // store time of first click
          religion_btn_4.timesOn.push(religion_btn_4.clock.getTime());
          // store time clicked until
          religion_btn_4.timesOff.push(religion_btn_4.clock.getTime());
        } else {
          // update time clicked until;
          religion_btn_4.timesOff[religion_btn_4.timesOff.length - 1] = religion_btn_4.clock.getTime();
        }
        if (!religion_btn_4.wasClicked) {
          // end routine when religion_btn_4 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("religion_type", "Hinduism");
        }
        // if religion_btn_4 is still clicked next frame, it is not a new click
        religion_btn_4.wasClicked = true;
      } else {
        // if religion_btn_4 is clicked next frame, it is a new click
        religion_btn_4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if religion_btn_4 hasn't started / has finished
      religion_btn_4.clock.reset();
      // if religion_btn_4 is clicked next frame, it is a new click
      religion_btn_4.wasClicked = false;
    }
    
    // *religion_btn_5* updates
    if (t >= 0 && religion_btn_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      religion_btn_5.tStart = t;  // (not accounting for frame time here)
      religion_btn_5.frameNStart = frameN;  // exact frame index
      
      religion_btn_5.setAutoDraw(true);
    }
    
    
    // if religion_btn_5 is active this frame...
    if (religion_btn_5.status === PsychoJS.Status.STARTED) {
    }
    
    if (religion_btn_5.status === PsychoJS.Status.STARTED) {
      // check whether religion_btn_5 has been pressed
      if (religion_btn_5.isClicked) {
        if (!religion_btn_5.wasClicked) {
          // store time of first click
          religion_btn_5.timesOn.push(religion_btn_5.clock.getTime());
          // store time clicked until
          religion_btn_5.timesOff.push(religion_btn_5.clock.getTime());
        } else {
          // update time clicked until;
          religion_btn_5.timesOff[religion_btn_5.timesOff.length - 1] = religion_btn_5.clock.getTime();
        }
        if (!religion_btn_5.wasClicked) {
          // end routine when religion_btn_5 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("religion_type", "Folk religion");
        }
        // if religion_btn_5 is still clicked next frame, it is not a new click
        religion_btn_5.wasClicked = true;
      } else {
        // if religion_btn_5 is clicked next frame, it is a new click
        religion_btn_5.wasClicked = false;
      }
    } else {
      // keep clock at 0 if religion_btn_5 hasn't started / has finished
      religion_btn_5.clock.reset();
      // if religion_btn_5 is clicked next frame, it is a new click
      religion_btn_5.wasClicked = false;
    }
    
    // *religion_btn_6* updates
    if (t >= 0 && religion_btn_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      religion_btn_6.tStart = t;  // (not accounting for frame time here)
      religion_btn_6.frameNStart = frameN;  // exact frame index
      
      religion_btn_6.setAutoDraw(true);
    }
    
    
    // if religion_btn_6 is active this frame...
    if (religion_btn_6.status === PsychoJS.Status.STARTED) {
    }
    
    if (religion_btn_6.status === PsychoJS.Status.STARTED) {
      // check whether religion_btn_6 has been pressed
      if (religion_btn_6.isClicked) {
        if (!religion_btn_6.wasClicked) {
          // store time of first click
          religion_btn_6.timesOn.push(religion_btn_6.clock.getTime());
          // store time clicked until
          religion_btn_6.timesOff.push(religion_btn_6.clock.getTime());
        } else {
          // update time clicked until;
          religion_btn_6.timesOff[religion_btn_6.timesOff.length - 1] = religion_btn_6.clock.getTime();
        }
        if (!religion_btn_6.wasClicked) {
          // end routine when religion_btn_6 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("religion_type", "No religion");
        }
        // if religion_btn_6 is still clicked next frame, it is not a new click
        religion_btn_6.wasClicked = true;
      } else {
        // if religion_btn_6 is clicked next frame, it is a new click
        religion_btn_6.wasClicked = false;
      }
    } else {
      // keep clock at 0 if religion_btn_6 hasn't started / has finished
      religion_btn_6.clock.reset();
      // if religion_btn_6 is clicked next frame, it is a new click
      religion_btn_6.wasClicked = false;
    }
    
    // *religion_btn_7* updates
    if (t >= 0 && religion_btn_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      religion_btn_7.tStart = t;  // (not accounting for frame time here)
      religion_btn_7.frameNStart = frameN;  // exact frame index
      
      religion_btn_7.setAutoDraw(true);
    }
    
    
    // if religion_btn_7 is active this frame...
    if (religion_btn_7.status === PsychoJS.Status.STARTED) {
    }
    
    if (religion_btn_7.status === PsychoJS.Status.STARTED) {
      // check whether religion_btn_7 has been pressed
      if (religion_btn_7.isClicked) {
        if (!religion_btn_7.wasClicked) {
          // store time of first click
          religion_btn_7.timesOn.push(religion_btn_7.clock.getTime());
          // store time clicked until
          religion_btn_7.timesOff.push(religion_btn_7.clock.getTime());
        } else {
          // update time clicked until;
          religion_btn_7.timesOff[religion_btn_7.timesOff.length - 1] = religion_btn_7.clock.getTime();
        }
        if (!religion_btn_7.wasClicked) {
          // end routine when religion_btn_7 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("religion_type", "Others");
        }
        // if religion_btn_7 is still clicked next frame, it is not a new click
        religion_btn_7.wasClicked = true;
      } else {
        // if religion_btn_7 is clicked next frame, it is a new click
        religion_btn_7.wasClicked = false;
      }
    } else {
      // keep clock at 0 if religion_btn_7 hasn't started / has finished
      religion_btn_7.clock.reset();
      // if religion_btn_7 is clicked next frame, it is a new click
      religion_btn_7.wasClicked = false;
    }
    
    // *Q6* updates
    if (t >= 0.0 && Q6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q6.tStart = t;  // (not accounting for frame time here)
      Q6.frameNStart = frameN;  // exact frame index
      
      Q6.setAutoDraw(true);
    }
    
    
    // if Q6 is active this frame...
    if (Q6.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of religionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function religionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'religion' ---
    for (const thisComponent of religionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('religion.stopped', globalClock.getTime());
    psychoJS.experiment.addData('religion_btn_1.numClicks', religion_btn_1.numClicks);
    psychoJS.experiment.addData('religion_btn_1.timesOn', religion_btn_1.timesOn);
    psychoJS.experiment.addData('religion_btn_1.timesOff', religion_btn_1.timesOff);
    psychoJS.experiment.addData('religion_btn_2.numClicks', religion_btn_2.numClicks);
    psychoJS.experiment.addData('religion_btn_2.timesOn', religion_btn_2.timesOn);
    psychoJS.experiment.addData('religion_btn_2.timesOff', religion_btn_2.timesOff);
    psychoJS.experiment.addData('religion_btn_3.numClicks', religion_btn_3.numClicks);
    psychoJS.experiment.addData('religion_btn_3.timesOn', religion_btn_3.timesOn);
    psychoJS.experiment.addData('religion_btn_3.timesOff', religion_btn_3.timesOff);
    psychoJS.experiment.addData('religion_btn_4.numClicks', religion_btn_4.numClicks);
    psychoJS.experiment.addData('religion_btn_4.timesOn', religion_btn_4.timesOn);
    psychoJS.experiment.addData('religion_btn_4.timesOff', religion_btn_4.timesOff);
    psychoJS.experiment.addData('religion_btn_5.numClicks', religion_btn_5.numClicks);
    psychoJS.experiment.addData('religion_btn_5.timesOn', religion_btn_5.timesOn);
    psychoJS.experiment.addData('religion_btn_5.timesOff', religion_btn_5.timesOff);
    psychoJS.experiment.addData('religion_btn_6.numClicks', religion_btn_6.numClicks);
    psychoJS.experiment.addData('religion_btn_6.timesOn', religion_btn_6.timesOn);
    psychoJS.experiment.addData('religion_btn_6.timesOff', religion_btn_6.timesOff);
    psychoJS.experiment.addData('religion_btn_7.numClicks', religion_btn_7.numClicks);
    psychoJS.experiment.addData('religion_btn_7.timesOn', religion_btn_7.timesOn);
    psychoJS.experiment.addData('religion_btn_7.timesOff', religion_btn_7.timesOff);
    // the Routine "religion" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ethnicityMaxDurationReached;
var ethnicityMaxDuration;
var ethnicityComponents;
function ethnicityRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ethnicity' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    ethnicityClock.reset();
    routineTimer.reset();
    ethnicityMaxDurationReached = false;
    // update component parameters for each repeat
    // reset ethnicity_btn_1 to account for continued clicks & clear times on/off
    ethnicity_btn_1.reset()
    // reset ethnicity_btn_2 to account for continued clicks & clear times on/off
    ethnicity_btn_2.reset()
    // reset ethnicity_btn_3 to account for continued clicks & clear times on/off
    ethnicity_btn_3.reset()
    // reset ethnicity_btn_4 to account for continued clicks & clear times on/off
    ethnicity_btn_4.reset()
    psychoJS.experiment.addData('ethnicity.started', globalClock.getTime());
    ethnicityMaxDuration = null
    // keep track of which components have finished
    ethnicityComponents = [];
    ethnicityComponents.push(Q_ethnicity_text);
    ethnicityComponents.push(ethnicity_btn_1);
    ethnicityComponents.push(ethnicity_btn_2);
    ethnicityComponents.push(ethnicity_btn_3);
    ethnicityComponents.push(ethnicity_btn_4);
    ethnicityComponents.push(Q7);
    
    for (const thisComponent of ethnicityComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ethnicityRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ethnicity' ---
    // get current time
    t = ethnicityClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_ethnicity_text* updates
    if (t >= 0.0 && Q_ethnicity_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_ethnicity_text.tStart = t;  // (not accounting for frame time here)
      Q_ethnicity_text.frameNStart = frameN;  // exact frame index
      
      Q_ethnicity_text.setAutoDraw(true);
    }
    
    
    // if Q_ethnicity_text is active this frame...
    if (Q_ethnicity_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *ethnicity_btn_1* updates
    if (t >= 0 && ethnicity_btn_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ethnicity_btn_1.tStart = t;  // (not accounting for frame time here)
      ethnicity_btn_1.frameNStart = frameN;  // exact frame index
      
      ethnicity_btn_1.setAutoDraw(true);
    }
    
    
    // if ethnicity_btn_1 is active this frame...
    if (ethnicity_btn_1.status === PsychoJS.Status.STARTED) {
    }
    
    if (ethnicity_btn_1.status === PsychoJS.Status.STARTED) {
      // check whether ethnicity_btn_1 has been pressed
      if (ethnicity_btn_1.isClicked) {
        if (!ethnicity_btn_1.wasClicked) {
          // store time of first click
          ethnicity_btn_1.timesOn.push(ethnicity_btn_1.clock.getTime());
          // store time clicked until
          ethnicity_btn_1.timesOff.push(ethnicity_btn_1.clock.getTime());
        } else {
          // update time clicked until;
          ethnicity_btn_1.timesOff[ethnicity_btn_1.timesOff.length - 1] = ethnicity_btn_1.clock.getTime();
        }
        if (!ethnicity_btn_1.wasClicked) {
          // end routine when ethnicity_btn_1 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("religion_type", "Malay");
        }
        // if ethnicity_btn_1 is still clicked next frame, it is not a new click
        ethnicity_btn_1.wasClicked = true;
      } else {
        // if ethnicity_btn_1 is clicked next frame, it is a new click
        ethnicity_btn_1.wasClicked = false;
      }
    } else {
      // keep clock at 0 if ethnicity_btn_1 hasn't started / has finished
      ethnicity_btn_1.clock.reset();
      // if ethnicity_btn_1 is clicked next frame, it is a new click
      ethnicity_btn_1.wasClicked = false;
    }
    
    // *ethnicity_btn_2* updates
    if (t >= 0 && ethnicity_btn_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ethnicity_btn_2.tStart = t;  // (not accounting for frame time here)
      ethnicity_btn_2.frameNStart = frameN;  // exact frame index
      
      ethnicity_btn_2.setAutoDraw(true);
    }
    
    
    // if ethnicity_btn_2 is active this frame...
    if (ethnicity_btn_2.status === PsychoJS.Status.STARTED) {
    }
    
    if (ethnicity_btn_2.status === PsychoJS.Status.STARTED) {
      // check whether ethnicity_btn_2 has been pressed
      if (ethnicity_btn_2.isClicked) {
        if (!ethnicity_btn_2.wasClicked) {
          // store time of first click
          ethnicity_btn_2.timesOn.push(ethnicity_btn_2.clock.getTime());
          // store time clicked until
          ethnicity_btn_2.timesOff.push(ethnicity_btn_2.clock.getTime());
        } else {
          // update time clicked until;
          ethnicity_btn_2.timesOff[ethnicity_btn_2.timesOff.length - 1] = ethnicity_btn_2.clock.getTime();
        }
        if (!ethnicity_btn_2.wasClicked) {
          // end routine when ethnicity_btn_2 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("religion_type", "Malaysian Chinese");
        }
        // if ethnicity_btn_2 is still clicked next frame, it is not a new click
        ethnicity_btn_2.wasClicked = true;
      } else {
        // if ethnicity_btn_2 is clicked next frame, it is a new click
        ethnicity_btn_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if ethnicity_btn_2 hasn't started / has finished
      ethnicity_btn_2.clock.reset();
      // if ethnicity_btn_2 is clicked next frame, it is a new click
      ethnicity_btn_2.wasClicked = false;
    }
    
    // *ethnicity_btn_3* updates
    if (t >= 0 && ethnicity_btn_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ethnicity_btn_3.tStart = t;  // (not accounting for frame time here)
      ethnicity_btn_3.frameNStart = frameN;  // exact frame index
      
      ethnicity_btn_3.setAutoDraw(true);
    }
    
    
    // if ethnicity_btn_3 is active this frame...
    if (ethnicity_btn_3.status === PsychoJS.Status.STARTED) {
    }
    
    if (ethnicity_btn_3.status === PsychoJS.Status.STARTED) {
      // check whether ethnicity_btn_3 has been pressed
      if (ethnicity_btn_3.isClicked) {
        if (!ethnicity_btn_3.wasClicked) {
          // store time of first click
          ethnicity_btn_3.timesOn.push(ethnicity_btn_3.clock.getTime());
          // store time clicked until
          ethnicity_btn_3.timesOff.push(ethnicity_btn_3.clock.getTime());
        } else {
          // update time clicked until;
          ethnicity_btn_3.timesOff[ethnicity_btn_3.timesOff.length - 1] = ethnicity_btn_3.clock.getTime();
        }
        if (!ethnicity_btn_3.wasClicked) {
          // end routine when ethnicity_btn_3 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("religion_type", "Indian");
        }
        // if ethnicity_btn_3 is still clicked next frame, it is not a new click
        ethnicity_btn_3.wasClicked = true;
      } else {
        // if ethnicity_btn_3 is clicked next frame, it is a new click
        ethnicity_btn_3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if ethnicity_btn_3 hasn't started / has finished
      ethnicity_btn_3.clock.reset();
      // if ethnicity_btn_3 is clicked next frame, it is a new click
      ethnicity_btn_3.wasClicked = false;
    }
    
    // *ethnicity_btn_4* updates
    if (t >= 0 && ethnicity_btn_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ethnicity_btn_4.tStart = t;  // (not accounting for frame time here)
      ethnicity_btn_4.frameNStart = frameN;  // exact frame index
      
      ethnicity_btn_4.setAutoDraw(true);
    }
    
    
    // if ethnicity_btn_4 is active this frame...
    if (ethnicity_btn_4.status === PsychoJS.Status.STARTED) {
    }
    
    if (ethnicity_btn_4.status === PsychoJS.Status.STARTED) {
      // check whether ethnicity_btn_4 has been pressed
      if (ethnicity_btn_4.isClicked) {
        if (!ethnicity_btn_4.wasClicked) {
          // store time of first click
          ethnicity_btn_4.timesOn.push(ethnicity_btn_4.clock.getTime());
          // store time clicked until
          ethnicity_btn_4.timesOff.push(ethnicity_btn_4.clock.getTime());
        } else {
          // update time clicked until;
          ethnicity_btn_4.timesOff[ethnicity_btn_4.timesOff.length - 1] = ethnicity_btn_4.clock.getTime();
        }
        if (!ethnicity_btn_4.wasClicked) {
          // end routine when ethnicity_btn_4 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("religion_type", "Others");
        }
        // if ethnicity_btn_4 is still clicked next frame, it is not a new click
        ethnicity_btn_4.wasClicked = true;
      } else {
        // if ethnicity_btn_4 is clicked next frame, it is a new click
        ethnicity_btn_4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if ethnicity_btn_4 hasn't started / has finished
      ethnicity_btn_4.clock.reset();
      // if ethnicity_btn_4 is clicked next frame, it is a new click
      ethnicity_btn_4.wasClicked = false;
    }
    
    // *Q7* updates
    if (t >= 0.0 && Q7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q7.tStart = t;  // (not accounting for frame time here)
      Q7.frameNStart = frameN;  // exact frame index
      
      Q7.setAutoDraw(true);
    }
    
    
    // if Q7 is active this frame...
    if (Q7.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ethnicityComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ethnicityRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ethnicity' ---
    for (const thisComponent of ethnicityComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ethnicity.stopped', globalClock.getTime());
    psychoJS.experiment.addData('ethnicity_btn_1.numClicks', ethnicity_btn_1.numClicks);
    psychoJS.experiment.addData('ethnicity_btn_1.timesOn', ethnicity_btn_1.timesOn);
    psychoJS.experiment.addData('ethnicity_btn_1.timesOff', ethnicity_btn_1.timesOff);
    psychoJS.experiment.addData('ethnicity_btn_2.numClicks', ethnicity_btn_2.numClicks);
    psychoJS.experiment.addData('ethnicity_btn_2.timesOn', ethnicity_btn_2.timesOn);
    psychoJS.experiment.addData('ethnicity_btn_2.timesOff', ethnicity_btn_2.timesOff);
    psychoJS.experiment.addData('ethnicity_btn_3.numClicks', ethnicity_btn_3.numClicks);
    psychoJS.experiment.addData('ethnicity_btn_3.timesOn', ethnicity_btn_3.timesOn);
    psychoJS.experiment.addData('ethnicity_btn_3.timesOff', ethnicity_btn_3.timesOff);
    psychoJS.experiment.addData('ethnicity_btn_4.numClicks', ethnicity_btn_4.numClicks);
    psychoJS.experiment.addData('ethnicity_btn_4.timesOn', ethnicity_btn_4.timesOn);
    psychoJS.experiment.addData('ethnicity_btn_4.timesOff', ethnicity_btn_4.timesOff);
    // the Routine "ethnicity" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var HouseholdStructureMaxDurationReached;
var HouseholdStructureMaxDuration;
var HouseholdStructureComponents;
function HouseholdStructureRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'HouseholdStructure' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    HouseholdStructureClock.reset();
    routineTimer.reset();
    HouseholdStructureMaxDurationReached = false;
    // update component parameters for each repeat
    textbox_household.setText('');
    textbox_household.refresh();
    psychoJS.experiment.addData('HouseholdStructure.started', globalClock.getTime());
    HouseholdStructureMaxDuration = null
    // keep track of which components have finished
    HouseholdStructureComponents = [];
    HouseholdStructureComponents.push(householdstructure_question_text);
    HouseholdStructureComponents.push(textbox_household);
    HouseholdStructureComponents.push(textbox_ABCDE);
    HouseholdStructureComponents.push(textbox_FGHI);
    HouseholdStructureComponents.push(Q8);
    HouseholdStructureComponents.push(hint_household);
    HouseholdStructureComponents.push(hint_household2);
    
    for (const thisComponent of HouseholdStructureComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function HouseholdStructureRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'HouseholdStructure' ---
    // get current time
    t = HouseholdStructureClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *householdstructure_question_text* updates
    if (t >= 0.0 && householdstructure_question_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      householdstructure_question_text.tStart = t;  // (not accounting for frame time here)
      householdstructure_question_text.frameNStart = frameN;  // exact frame index
      
      householdstructure_question_text.setAutoDraw(true);
    }
    
    
    // if householdstructure_question_text is active this frame...
    if (householdstructure_question_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textbox_household* updates
    if (t >= 0.0 && textbox_household.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_household.tStart = t;  // (not accounting for frame time here)
      textbox_household.frameNStart = frameN;  // exact frame index
      
      textbox_household.setAutoDraw(true);
    }
    
    
    // if textbox_household is active this frame...
    if (textbox_household.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textbox_ABCDE* updates
    if (t >= 0.0 && textbox_ABCDE.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_ABCDE.tStart = t;  // (not accounting for frame time here)
      textbox_ABCDE.frameNStart = frameN;  // exact frame index
      
      textbox_ABCDE.setAutoDraw(true);
    }
    
    
    // if textbox_ABCDE is active this frame...
    if (textbox_ABCDE.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textbox_FGHI* updates
    if (t >= 0.0 && textbox_FGHI.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_FGHI.tStart = t;  // (not accounting for frame time here)
      textbox_FGHI.frameNStart = frameN;  // exact frame index
      
      textbox_FGHI.setAutoDraw(true);
    }
    
    
    // if textbox_FGHI is active this frame...
    if (textbox_FGHI.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from code_6
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! ("allow_advance_household" in psychoJS.experiment))) {
        psychoJS.experiment.allow_advance_household = false;
    }
    keys = psychoJS.eventManager.getKeys();
    if (_pj.in_es6("return", keys)) {
        user_input = textbox_household.text.trim();
        if ((user_input !== "")) {
            psychoJS.experiment.allow_advance_household = true;
        }
    }
    if (psychoJS.experiment.allow_advance_household) {
        continueRoutine = false;
    }
    
    
    // *Q8* updates
    if (t >= 0.0 && Q8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q8.tStart = t;  // (not accounting for frame time here)
      Q8.frameNStart = frameN;  // exact frame index
      
      Q8.setAutoDraw(true);
    }
    
    
    // if Q8 is active this frame...
    if (Q8.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *hint_household* updates
    if (t >= 0.0 && hint_household.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hint_household.tStart = t;  // (not accounting for frame time here)
      hint_household.frameNStart = frameN;  // exact frame index
      
      hint_household.setAutoDraw(true);
    }
    
    
    // if hint_household is active this frame...
    if (hint_household.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *hint_household2* updates
    if (t >= 0.0 && hint_household2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hint_household2.tStart = t;  // (not accounting for frame time here)
      hint_household2.frameNStart = frameN;  // exact frame index
      
      hint_household2.setAutoDraw(true);
    }
    
    
    // if hint_household2 is active this frame...
    if (hint_household2.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of HouseholdStructureComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function HouseholdStructureRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'HouseholdStructure' ---
    for (const thisComponent of HouseholdStructureComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('HouseholdStructure.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox_household.text',textbox_household.text)
    // Run 'End Routine' code from code_6
    psychoJS.experiment.addData("age", textbox_household.text);
    
    // the Routine "HouseholdStructure" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var occupation_typeMaxDurationReached;
var occupation_typeMaxDuration;
var occupation_typeComponents;
function occupation_typeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'occupation_type' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    occupation_typeClock.reset();
    routineTimer.reset();
    occupation_typeMaxDurationReached = false;
    // update component parameters for each repeat
    // reset occupation_Education to account for continued clicks & clear times on/off
    occupation_Education.reset()
    // reset occupation_Healthcare to account for continued clicks & clear times on/off
    occupation_Healthcare.reset()
    // reset occupation_Government to account for continued clicks & clear times on/off
    occupation_Government.reset()
    // reset occupation_Business to account for continued clicks & clear times on/off
    occupation_Business.reset()
    // reset occupation_Selfemployed to account for continued clicks & clear times on/off
    occupation_Selfemployed.reset()
    // reset occupation_Homemaker to account for continued clicks & clear times on/off
    occupation_Homemaker.reset()
    // reset occupation_Student to account for continued clicks & clear times on/off
    occupation_Student.reset()
    // reset occupation_Unemployed to account for continued clicks & clear times on/off
    occupation_Unemployed.reset()
    // reset occupation_Retired to account for continued clicks & clear times on/off
    occupation_Retired.reset()
    // reset occupation_Other to account for continued clicks & clear times on/off
    occupation_Other.reset()
    // reset occupation_Prefernottosay to account for continued clicks & clear times on/off
    occupation_Prefernottosay.reset()
    psychoJS.experiment.addData('occupation_type.started', globalClock.getTime());
    occupation_typeMaxDuration = null
    // keep track of which components have finished
    occupation_typeComponents = [];
    occupation_typeComponents.push(Q_occupation);
    occupation_typeComponents.push(occupation_Education);
    occupation_typeComponents.push(occupation_Healthcare);
    occupation_typeComponents.push(occupation_Government);
    occupation_typeComponents.push(occupation_Business);
    occupation_typeComponents.push(occupation_Selfemployed);
    occupation_typeComponents.push(occupation_Homemaker);
    occupation_typeComponents.push(occupation_Student);
    occupation_typeComponents.push(occupation_Unemployed);
    occupation_typeComponents.push(occupation_Retired);
    occupation_typeComponents.push(occupation_Other);
    occupation_typeComponents.push(occupation_Prefernottosay);
    occupation_typeComponents.push(Q9);
    
    for (const thisComponent of occupation_typeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function occupation_typeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'occupation_type' ---
    // get current time
    t = occupation_typeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_occupation* updates
    if (t >= 0.0 && Q_occupation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_occupation.tStart = t;  // (not accounting for frame time here)
      Q_occupation.frameNStart = frameN;  // exact frame index
      
      Q_occupation.setAutoDraw(true);
    }
    
    
    // if Q_occupation is active this frame...
    if (Q_occupation.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *occupation_Education* updates
    if (t >= 0 && occupation_Education.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      occupation_Education.tStart = t;  // (not accounting for frame time here)
      occupation_Education.frameNStart = frameN;  // exact frame index
      
      occupation_Education.setAutoDraw(true);
    }
    
    
    // if occupation_Education is active this frame...
    if (occupation_Education.status === PsychoJS.Status.STARTED) {
    }
    
    if (occupation_Education.status === PsychoJS.Status.STARTED) {
      // check whether occupation_Education has been pressed
      if (occupation_Education.isClicked) {
        if (!occupation_Education.wasClicked) {
          // store time of first click
          occupation_Education.timesOn.push(occupation_Education.clock.getTime());
          // store time clicked until
          occupation_Education.timesOff.push(occupation_Education.clock.getTime());
        } else {
          // update time clicked until;
          occupation_Education.timesOff[occupation_Education.timesOff.length - 1] = occupation_Education.clock.getTime();
        }
        if (!occupation_Education.wasClicked) {
          // end routine when occupation_Education is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("occupation_level", "Education");
        }
        // if occupation_Education is still clicked next frame, it is not a new click
        occupation_Education.wasClicked = true;
      } else {
        // if occupation_Education is clicked next frame, it is a new click
        occupation_Education.wasClicked = false;
      }
    } else {
      // keep clock at 0 if occupation_Education hasn't started / has finished
      occupation_Education.clock.reset();
      // if occupation_Education is clicked next frame, it is a new click
      occupation_Education.wasClicked = false;
    }
    
    // *occupation_Healthcare* updates
    if (t >= 0 && occupation_Healthcare.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      occupation_Healthcare.tStart = t;  // (not accounting for frame time here)
      occupation_Healthcare.frameNStart = frameN;  // exact frame index
      
      occupation_Healthcare.setAutoDraw(true);
    }
    
    
    // if occupation_Healthcare is active this frame...
    if (occupation_Healthcare.status === PsychoJS.Status.STARTED) {
    }
    
    if (occupation_Healthcare.status === PsychoJS.Status.STARTED) {
      // check whether occupation_Healthcare has been pressed
      if (occupation_Healthcare.isClicked) {
        if (!occupation_Healthcare.wasClicked) {
          // store time of first click
          occupation_Healthcare.timesOn.push(occupation_Healthcare.clock.getTime());
          // store time clicked until
          occupation_Healthcare.timesOff.push(occupation_Healthcare.clock.getTime());
        } else {
          // update time clicked until;
          occupation_Healthcare.timesOff[occupation_Healthcare.timesOff.length - 1] = occupation_Healthcare.clock.getTime();
        }
        if (!occupation_Healthcare.wasClicked) {
          // end routine when occupation_Healthcare is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("occupation_level", "Healthcare");
        }
        // if occupation_Healthcare is still clicked next frame, it is not a new click
        occupation_Healthcare.wasClicked = true;
      } else {
        // if occupation_Healthcare is clicked next frame, it is a new click
        occupation_Healthcare.wasClicked = false;
      }
    } else {
      // keep clock at 0 if occupation_Healthcare hasn't started / has finished
      occupation_Healthcare.clock.reset();
      // if occupation_Healthcare is clicked next frame, it is a new click
      occupation_Healthcare.wasClicked = false;
    }
    
    // *occupation_Government* updates
    if (t >= 0 && occupation_Government.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      occupation_Government.tStart = t;  // (not accounting for frame time here)
      occupation_Government.frameNStart = frameN;  // exact frame index
      
      occupation_Government.setAutoDraw(true);
    }
    
    
    // if occupation_Government is active this frame...
    if (occupation_Government.status === PsychoJS.Status.STARTED) {
    }
    
    if (occupation_Government.status === PsychoJS.Status.STARTED) {
      // check whether occupation_Government has been pressed
      if (occupation_Government.isClicked) {
        if (!occupation_Government.wasClicked) {
          // store time of first click
          occupation_Government.timesOn.push(occupation_Government.clock.getTime());
          // store time clicked until
          occupation_Government.timesOff.push(occupation_Government.clock.getTime());
        } else {
          // update time clicked until;
          occupation_Government.timesOff[occupation_Government.timesOff.length - 1] = occupation_Government.clock.getTime();
        }
        if (!occupation_Government.wasClicked) {
          // end routine when occupation_Government is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("occupation_level", "Government");
        }
        // if occupation_Government is still clicked next frame, it is not a new click
        occupation_Government.wasClicked = true;
      } else {
        // if occupation_Government is clicked next frame, it is a new click
        occupation_Government.wasClicked = false;
      }
    } else {
      // keep clock at 0 if occupation_Government hasn't started / has finished
      occupation_Government.clock.reset();
      // if occupation_Government is clicked next frame, it is a new click
      occupation_Government.wasClicked = false;
    }
    
    // *occupation_Business* updates
    if (t >= 0 && occupation_Business.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      occupation_Business.tStart = t;  // (not accounting for frame time here)
      occupation_Business.frameNStart = frameN;  // exact frame index
      
      occupation_Business.setAutoDraw(true);
    }
    
    
    // if occupation_Business is active this frame...
    if (occupation_Business.status === PsychoJS.Status.STARTED) {
    }
    
    if (occupation_Business.status === PsychoJS.Status.STARTED) {
      // check whether occupation_Business has been pressed
      if (occupation_Business.isClicked) {
        if (!occupation_Business.wasClicked) {
          // store time of first click
          occupation_Business.timesOn.push(occupation_Business.clock.getTime());
          // store time clicked until
          occupation_Business.timesOff.push(occupation_Business.clock.getTime());
        } else {
          // update time clicked until;
          occupation_Business.timesOff[occupation_Business.timesOff.length - 1] = occupation_Business.clock.getTime();
        }
        if (!occupation_Business.wasClicked) {
          // end routine when occupation_Business is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("occupation_level", "Business");
        }
        // if occupation_Business is still clicked next frame, it is not a new click
        occupation_Business.wasClicked = true;
      } else {
        // if occupation_Business is clicked next frame, it is a new click
        occupation_Business.wasClicked = false;
      }
    } else {
      // keep clock at 0 if occupation_Business hasn't started / has finished
      occupation_Business.clock.reset();
      // if occupation_Business is clicked next frame, it is a new click
      occupation_Business.wasClicked = false;
    }
    
    // *occupation_Selfemployed* updates
    if (t >= 0 && occupation_Selfemployed.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      occupation_Selfemployed.tStart = t;  // (not accounting for frame time here)
      occupation_Selfemployed.frameNStart = frameN;  // exact frame index
      
      occupation_Selfemployed.setAutoDraw(true);
    }
    
    
    // if occupation_Selfemployed is active this frame...
    if (occupation_Selfemployed.status === PsychoJS.Status.STARTED) {
    }
    
    if (occupation_Selfemployed.status === PsychoJS.Status.STARTED) {
      // check whether occupation_Selfemployed has been pressed
      if (occupation_Selfemployed.isClicked) {
        if (!occupation_Selfemployed.wasClicked) {
          // store time of first click
          occupation_Selfemployed.timesOn.push(occupation_Selfemployed.clock.getTime());
          // store time clicked until
          occupation_Selfemployed.timesOff.push(occupation_Selfemployed.clock.getTime());
        } else {
          // update time clicked until;
          occupation_Selfemployed.timesOff[occupation_Selfemployed.timesOff.length - 1] = occupation_Selfemployed.clock.getTime();
        }
        if (!occupation_Selfemployed.wasClicked) {
          // end routine when occupation_Selfemployed is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("occupation_level", "Freelancer");
        }
        // if occupation_Selfemployed is still clicked next frame, it is not a new click
        occupation_Selfemployed.wasClicked = true;
      } else {
        // if occupation_Selfemployed is clicked next frame, it is a new click
        occupation_Selfemployed.wasClicked = false;
      }
    } else {
      // keep clock at 0 if occupation_Selfemployed hasn't started / has finished
      occupation_Selfemployed.clock.reset();
      // if occupation_Selfemployed is clicked next frame, it is a new click
      occupation_Selfemployed.wasClicked = false;
    }
    
    // *occupation_Homemaker* updates
    if (t >= 0 && occupation_Homemaker.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      occupation_Homemaker.tStart = t;  // (not accounting for frame time here)
      occupation_Homemaker.frameNStart = frameN;  // exact frame index
      
      occupation_Homemaker.setAutoDraw(true);
    }
    
    
    // if occupation_Homemaker is active this frame...
    if (occupation_Homemaker.status === PsychoJS.Status.STARTED) {
    }
    
    if (occupation_Homemaker.status === PsychoJS.Status.STARTED) {
      // check whether occupation_Homemaker has been pressed
      if (occupation_Homemaker.isClicked) {
        if (!occupation_Homemaker.wasClicked) {
          // store time of first click
          occupation_Homemaker.timesOn.push(occupation_Homemaker.clock.getTime());
          // store time clicked until
          occupation_Homemaker.timesOff.push(occupation_Homemaker.clock.getTime());
        } else {
          // update time clicked until;
          occupation_Homemaker.timesOff[occupation_Homemaker.timesOff.length - 1] = occupation_Homemaker.clock.getTime();
        }
        if (!occupation_Homemaker.wasClicked) {
          // end routine when occupation_Homemaker is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("occupation_level", "Homemaker");
        }
        // if occupation_Homemaker is still clicked next frame, it is not a new click
        occupation_Homemaker.wasClicked = true;
      } else {
        // if occupation_Homemaker is clicked next frame, it is a new click
        occupation_Homemaker.wasClicked = false;
      }
    } else {
      // keep clock at 0 if occupation_Homemaker hasn't started / has finished
      occupation_Homemaker.clock.reset();
      // if occupation_Homemaker is clicked next frame, it is a new click
      occupation_Homemaker.wasClicked = false;
    }
    
    // *occupation_Student* updates
    if (t >= 0 && occupation_Student.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      occupation_Student.tStart = t;  // (not accounting for frame time here)
      occupation_Student.frameNStart = frameN;  // exact frame index
      
      occupation_Student.setAutoDraw(true);
    }
    
    
    // if occupation_Student is active this frame...
    if (occupation_Student.status === PsychoJS.Status.STARTED) {
    }
    
    if (occupation_Student.status === PsychoJS.Status.STARTED) {
      // check whether occupation_Student has been pressed
      if (occupation_Student.isClicked) {
        if (!occupation_Student.wasClicked) {
          // store time of first click
          occupation_Student.timesOn.push(occupation_Student.clock.getTime());
          // store time clicked until
          occupation_Student.timesOff.push(occupation_Student.clock.getTime());
        } else {
          // update time clicked until;
          occupation_Student.timesOff[occupation_Student.timesOff.length - 1] = occupation_Student.clock.getTime();
        }
        if (!occupation_Student.wasClicked) {
          // end routine when occupation_Student is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("occupation_level", "Student");
        }
        // if occupation_Student is still clicked next frame, it is not a new click
        occupation_Student.wasClicked = true;
      } else {
        // if occupation_Student is clicked next frame, it is a new click
        occupation_Student.wasClicked = false;
      }
    } else {
      // keep clock at 0 if occupation_Student hasn't started / has finished
      occupation_Student.clock.reset();
      // if occupation_Student is clicked next frame, it is a new click
      occupation_Student.wasClicked = false;
    }
    
    // *occupation_Unemployed* updates
    if (t >= 0 && occupation_Unemployed.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      occupation_Unemployed.tStart = t;  // (not accounting for frame time here)
      occupation_Unemployed.frameNStart = frameN;  // exact frame index
      
      occupation_Unemployed.setAutoDraw(true);
    }
    
    
    // if occupation_Unemployed is active this frame...
    if (occupation_Unemployed.status === PsychoJS.Status.STARTED) {
    }
    
    if (occupation_Unemployed.status === PsychoJS.Status.STARTED) {
      // check whether occupation_Unemployed has been pressed
      if (occupation_Unemployed.isClicked) {
        if (!occupation_Unemployed.wasClicked) {
          // store time of first click
          occupation_Unemployed.timesOn.push(occupation_Unemployed.clock.getTime());
          // store time clicked until
          occupation_Unemployed.timesOff.push(occupation_Unemployed.clock.getTime());
        } else {
          // update time clicked until;
          occupation_Unemployed.timesOff[occupation_Unemployed.timesOff.length - 1] = occupation_Unemployed.clock.getTime();
        }
        if (!occupation_Unemployed.wasClicked) {
          // end routine when occupation_Unemployed is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("occupation_level", "Unemployed");
        }
        // if occupation_Unemployed is still clicked next frame, it is not a new click
        occupation_Unemployed.wasClicked = true;
      } else {
        // if occupation_Unemployed is clicked next frame, it is a new click
        occupation_Unemployed.wasClicked = false;
      }
    } else {
      // keep clock at 0 if occupation_Unemployed hasn't started / has finished
      occupation_Unemployed.clock.reset();
      // if occupation_Unemployed is clicked next frame, it is a new click
      occupation_Unemployed.wasClicked = false;
    }
    
    // *occupation_Retired* updates
    if (t >= 0 && occupation_Retired.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      occupation_Retired.tStart = t;  // (not accounting for frame time here)
      occupation_Retired.frameNStart = frameN;  // exact frame index
      
      occupation_Retired.setAutoDraw(true);
    }
    
    
    // if occupation_Retired is active this frame...
    if (occupation_Retired.status === PsychoJS.Status.STARTED) {
    }
    
    if (occupation_Retired.status === PsychoJS.Status.STARTED) {
      // check whether occupation_Retired has been pressed
      if (occupation_Retired.isClicked) {
        if (!occupation_Retired.wasClicked) {
          // store time of first click
          occupation_Retired.timesOn.push(occupation_Retired.clock.getTime());
          // store time clicked until
          occupation_Retired.timesOff.push(occupation_Retired.clock.getTime());
        } else {
          // update time clicked until;
          occupation_Retired.timesOff[occupation_Retired.timesOff.length - 1] = occupation_Retired.clock.getTime();
        }
        if (!occupation_Retired.wasClicked) {
          // end routine when occupation_Retired is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("occupation_level", "Retired");
        }
        // if occupation_Retired is still clicked next frame, it is not a new click
        occupation_Retired.wasClicked = true;
      } else {
        // if occupation_Retired is clicked next frame, it is a new click
        occupation_Retired.wasClicked = false;
      }
    } else {
      // keep clock at 0 if occupation_Retired hasn't started / has finished
      occupation_Retired.clock.reset();
      // if occupation_Retired is clicked next frame, it is a new click
      occupation_Retired.wasClicked = false;
    }
    
    // *occupation_Other* updates
    if (t >= 0 && occupation_Other.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      occupation_Other.tStart = t;  // (not accounting for frame time here)
      occupation_Other.frameNStart = frameN;  // exact frame index
      
      occupation_Other.setAutoDraw(true);
    }
    
    
    // if occupation_Other is active this frame...
    if (occupation_Other.status === PsychoJS.Status.STARTED) {
    }
    
    if (occupation_Other.status === PsychoJS.Status.STARTED) {
      // check whether occupation_Other has been pressed
      if (occupation_Other.isClicked) {
        if (!occupation_Other.wasClicked) {
          // store time of first click
          occupation_Other.timesOn.push(occupation_Other.clock.getTime());
          // store time clicked until
          occupation_Other.timesOff.push(occupation_Other.clock.getTime());
        } else {
          // update time clicked until;
          occupation_Other.timesOff[occupation_Other.timesOff.length - 1] = occupation_Other.clock.getTime();
        }
        if (!occupation_Other.wasClicked) {
          // end routine when occupation_Other is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("occupation_level", "Other");
        }
        // if occupation_Other is still clicked next frame, it is not a new click
        occupation_Other.wasClicked = true;
      } else {
        // if occupation_Other is clicked next frame, it is a new click
        occupation_Other.wasClicked = false;
      }
    } else {
      // keep clock at 0 if occupation_Other hasn't started / has finished
      occupation_Other.clock.reset();
      // if occupation_Other is clicked next frame, it is a new click
      occupation_Other.wasClicked = false;
    }
    
    // *occupation_Prefernottosay* updates
    if (t >= 0 && occupation_Prefernottosay.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      occupation_Prefernottosay.tStart = t;  // (not accounting for frame time here)
      occupation_Prefernottosay.frameNStart = frameN;  // exact frame index
      
      occupation_Prefernottosay.setAutoDraw(true);
    }
    
    
    // if occupation_Prefernottosay is active this frame...
    if (occupation_Prefernottosay.status === PsychoJS.Status.STARTED) {
    }
    
    if (occupation_Prefernottosay.status === PsychoJS.Status.STARTED) {
      // check whether occupation_Prefernottosay has been pressed
      if (occupation_Prefernottosay.isClicked) {
        if (!occupation_Prefernottosay.wasClicked) {
          // store time of first click
          occupation_Prefernottosay.timesOn.push(occupation_Prefernottosay.clock.getTime());
          // store time clicked until
          occupation_Prefernottosay.timesOff.push(occupation_Prefernottosay.clock.getTime());
        } else {
          // update time clicked until;
          occupation_Prefernottosay.timesOff[occupation_Prefernottosay.timesOff.length - 1] = occupation_Prefernottosay.clock.getTime();
        }
        if (!occupation_Prefernottosay.wasClicked) {
          // end routine when occupation_Prefernottosay is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("occupation_level", "99");
        }
        // if occupation_Prefernottosay is still clicked next frame, it is not a new click
        occupation_Prefernottosay.wasClicked = true;
      } else {
        // if occupation_Prefernottosay is clicked next frame, it is a new click
        occupation_Prefernottosay.wasClicked = false;
      }
    } else {
      // keep clock at 0 if occupation_Prefernottosay hasn't started / has finished
      occupation_Prefernottosay.clock.reset();
      // if occupation_Prefernottosay is clicked next frame, it is a new click
      occupation_Prefernottosay.wasClicked = false;
    }
    
    // *Q9* updates
    if (t >= 0.0 && Q9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q9.tStart = t;  // (not accounting for frame time here)
      Q9.frameNStart = frameN;  // exact frame index
      
      Q9.setAutoDraw(true);
    }
    
    
    // if Q9 is active this frame...
    if (Q9.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of occupation_typeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function occupation_typeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'occupation_type' ---
    for (const thisComponent of occupation_typeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('occupation_type.stopped', globalClock.getTime());
    psychoJS.experiment.addData('occupation_Education.numClicks', occupation_Education.numClicks);
    psychoJS.experiment.addData('occupation_Education.timesOn', occupation_Education.timesOn);
    psychoJS.experiment.addData('occupation_Education.timesOff', occupation_Education.timesOff);
    psychoJS.experiment.addData('occupation_Healthcare.numClicks', occupation_Healthcare.numClicks);
    psychoJS.experiment.addData('occupation_Healthcare.timesOn', occupation_Healthcare.timesOn);
    psychoJS.experiment.addData('occupation_Healthcare.timesOff', occupation_Healthcare.timesOff);
    psychoJS.experiment.addData('occupation_Government.numClicks', occupation_Government.numClicks);
    psychoJS.experiment.addData('occupation_Government.timesOn', occupation_Government.timesOn);
    psychoJS.experiment.addData('occupation_Government.timesOff', occupation_Government.timesOff);
    psychoJS.experiment.addData('occupation_Business.numClicks', occupation_Business.numClicks);
    psychoJS.experiment.addData('occupation_Business.timesOn', occupation_Business.timesOn);
    psychoJS.experiment.addData('occupation_Business.timesOff', occupation_Business.timesOff);
    psychoJS.experiment.addData('occupation_Selfemployed.numClicks', occupation_Selfemployed.numClicks);
    psychoJS.experiment.addData('occupation_Selfemployed.timesOn', occupation_Selfemployed.timesOn);
    psychoJS.experiment.addData('occupation_Selfemployed.timesOff', occupation_Selfemployed.timesOff);
    psychoJS.experiment.addData('occupation_Homemaker.numClicks', occupation_Homemaker.numClicks);
    psychoJS.experiment.addData('occupation_Homemaker.timesOn', occupation_Homemaker.timesOn);
    psychoJS.experiment.addData('occupation_Homemaker.timesOff', occupation_Homemaker.timesOff);
    psychoJS.experiment.addData('occupation_Student.numClicks', occupation_Student.numClicks);
    psychoJS.experiment.addData('occupation_Student.timesOn', occupation_Student.timesOn);
    psychoJS.experiment.addData('occupation_Student.timesOff', occupation_Student.timesOff);
    psychoJS.experiment.addData('occupation_Unemployed.numClicks', occupation_Unemployed.numClicks);
    psychoJS.experiment.addData('occupation_Unemployed.timesOn', occupation_Unemployed.timesOn);
    psychoJS.experiment.addData('occupation_Unemployed.timesOff', occupation_Unemployed.timesOff);
    psychoJS.experiment.addData('occupation_Retired.numClicks', occupation_Retired.numClicks);
    psychoJS.experiment.addData('occupation_Retired.timesOn', occupation_Retired.timesOn);
    psychoJS.experiment.addData('occupation_Retired.timesOff', occupation_Retired.timesOff);
    psychoJS.experiment.addData('occupation_Other.numClicks', occupation_Other.numClicks);
    psychoJS.experiment.addData('occupation_Other.timesOn', occupation_Other.timesOn);
    psychoJS.experiment.addData('occupation_Other.timesOff', occupation_Other.timesOff);
    psychoJS.experiment.addData('occupation_Prefernottosay.numClicks', occupation_Prefernottosay.numClicks);
    psychoJS.experiment.addData('occupation_Prefernottosay.timesOn', occupation_Prefernottosay.timesOn);
    psychoJS.experiment.addData('occupation_Prefernottosay.timesOff', occupation_Prefernottosay.timesOff);
    // the Routine "occupation_type" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var family_incomeMaxDurationReached;
var family_incomeMaxDuration;
var family_incomeComponents;
function family_incomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'family_income' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    family_incomeClock.reset();
    routineTimer.reset();
    family_incomeMaxDurationReached = false;
    // update component parameters for each repeat
    // reset income_20000 to account for continued clicks & clear times on/off
    income_20000.reset()
    // reset income_20001to50000 to account for continued clicks & clear times on/off
    income_20001to50000.reset()
    // reset income_50001to100000 to account for continued clicks & clear times on/off
    income_50001to100000.reset()
    // reset income_100001to150000 to account for continued clicks & clear times on/off
    income_100001to150000.reset()
    // reset income_150001to200000 to account for continued clicks & clear times on/off
    income_150001to200000.reset()
    // reset income_Morethan200000 to account for continued clicks & clear times on/off
    income_Morethan200000.reset()
    // reset income_Prefernottosay to account for continued clicks & clear times on/off
    income_Prefernottosay.reset()
    psychoJS.experiment.addData('family_income.started', globalClock.getTime());
    family_incomeMaxDuration = null
    // keep track of which components have finished
    family_incomeComponents = [];
    family_incomeComponents.push(Q_family_income);
    family_incomeComponents.push(income_20000);
    family_incomeComponents.push(income_20001to50000);
    family_incomeComponents.push(income_50001to100000);
    family_incomeComponents.push(income_100001to150000);
    family_incomeComponents.push(income_150001to200000);
    family_incomeComponents.push(income_Morethan200000);
    family_incomeComponents.push(income_Prefernottosay);
    family_incomeComponents.push(Q10);
    family_incomeComponents.push(HINT_Q10);
    
    for (const thisComponent of family_incomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function family_incomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'family_income' ---
    // get current time
    t = family_incomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_family_income* updates
    if (t >= 0.0 && Q_family_income.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_family_income.tStart = t;  // (not accounting for frame time here)
      Q_family_income.frameNStart = frameN;  // exact frame index
      
      Q_family_income.setAutoDraw(true);
    }
    
    
    // if Q_family_income is active this frame...
    if (Q_family_income.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *income_20000* updates
    if (t >= 0 && income_20000.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      income_20000.tStart = t;  // (not accounting for frame time here)
      income_20000.frameNStart = frameN;  // exact frame index
      
      income_20000.setAutoDraw(true);
    }
    
    
    // if income_20000 is active this frame...
    if (income_20000.status === PsychoJS.Status.STARTED) {
    }
    
    if (income_20000.status === PsychoJS.Status.STARTED) {
      // check whether income_20000 has been pressed
      if (income_20000.isClicked) {
        if (!income_20000.wasClicked) {
          // store time of first click
          income_20000.timesOn.push(income_20000.clock.getTime());
          // store time clicked until
          income_20000.timesOff.push(income_20000.clock.getTime());
        } else {
          // update time clicked until;
          income_20000.timesOff[income_20000.timesOff.length - 1] = income_20000.clock.getTime();
        }
        if (!income_20000.wasClicked) {
          // end routine when income_20000 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("family_income_level", "20,000");
        }
        // if income_20000 is still clicked next frame, it is not a new click
        income_20000.wasClicked = true;
      } else {
        // if income_20000 is clicked next frame, it is a new click
        income_20000.wasClicked = false;
      }
    } else {
      // keep clock at 0 if income_20000 hasn't started / has finished
      income_20000.clock.reset();
      // if income_20000 is clicked next frame, it is a new click
      income_20000.wasClicked = false;
    }
    
    // *income_20001to50000* updates
    if (t >= 0 && income_20001to50000.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      income_20001to50000.tStart = t;  // (not accounting for frame time here)
      income_20001to50000.frameNStart = frameN;  // exact frame index
      
      income_20001to50000.setAutoDraw(true);
    }
    
    
    // if income_20001to50000 is active this frame...
    if (income_20001to50000.status === PsychoJS.Status.STARTED) {
    }
    
    if (income_20001to50000.status === PsychoJS.Status.STARTED) {
      // check whether income_20001to50000 has been pressed
      if (income_20001to50000.isClicked) {
        if (!income_20001to50000.wasClicked) {
          // store time of first click
          income_20001to50000.timesOn.push(income_20001to50000.clock.getTime());
          // store time clicked until
          income_20001to50000.timesOff.push(income_20001to50000.clock.getTime());
        } else {
          // update time clicked until;
          income_20001to50000.timesOff[income_20001to50000.timesOff.length - 1] = income_20001to50000.clock.getTime();
        }
        if (!income_20001to50000.wasClicked) {
          // end routine when income_20001to50000 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("family_income_level", "20,001 \u2013 50,000");
        }
        // if income_20001to50000 is still clicked next frame, it is not a new click
        income_20001to50000.wasClicked = true;
      } else {
        // if income_20001to50000 is clicked next frame, it is a new click
        income_20001to50000.wasClicked = false;
      }
    } else {
      // keep clock at 0 if income_20001to50000 hasn't started / has finished
      income_20001to50000.clock.reset();
      // if income_20001to50000 is clicked next frame, it is a new click
      income_20001to50000.wasClicked = false;
    }
    
    // *income_50001to100000* updates
    if (t >= 0 && income_50001to100000.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      income_50001to100000.tStart = t;  // (not accounting for frame time here)
      income_50001to100000.frameNStart = frameN;  // exact frame index
      
      income_50001to100000.setAutoDraw(true);
    }
    
    
    // if income_50001to100000 is active this frame...
    if (income_50001to100000.status === PsychoJS.Status.STARTED) {
    }
    
    if (income_50001to100000.status === PsychoJS.Status.STARTED) {
      // check whether income_50001to100000 has been pressed
      if (income_50001to100000.isClicked) {
        if (!income_50001to100000.wasClicked) {
          // store time of first click
          income_50001to100000.timesOn.push(income_50001to100000.clock.getTime());
          // store time clicked until
          income_50001to100000.timesOff.push(income_50001to100000.clock.getTime());
        } else {
          // update time clicked until;
          income_50001to100000.timesOff[income_50001to100000.timesOff.length - 1] = income_50001to100000.clock.getTime();
        }
        if (!income_50001to100000.wasClicked) {
          // end routine when income_50001to100000 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("family_income_level", "50,001 \u2013 100,000");
        }
        // if income_50001to100000 is still clicked next frame, it is not a new click
        income_50001to100000.wasClicked = true;
      } else {
        // if income_50001to100000 is clicked next frame, it is a new click
        income_50001to100000.wasClicked = false;
      }
    } else {
      // keep clock at 0 if income_50001to100000 hasn't started / has finished
      income_50001to100000.clock.reset();
      // if income_50001to100000 is clicked next frame, it is a new click
      income_50001to100000.wasClicked = false;
    }
    
    // *income_100001to150000* updates
    if (t >= 0 && income_100001to150000.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      income_100001to150000.tStart = t;  // (not accounting for frame time here)
      income_100001to150000.frameNStart = frameN;  // exact frame index
      
      income_100001to150000.setAutoDraw(true);
    }
    
    
    // if income_100001to150000 is active this frame...
    if (income_100001to150000.status === PsychoJS.Status.STARTED) {
    }
    
    if (income_100001to150000.status === PsychoJS.Status.STARTED) {
      // check whether income_100001to150000 has been pressed
      if (income_100001to150000.isClicked) {
        if (!income_100001to150000.wasClicked) {
          // store time of first click
          income_100001to150000.timesOn.push(income_100001to150000.clock.getTime());
          // store time clicked until
          income_100001to150000.timesOff.push(income_100001to150000.clock.getTime());
        } else {
          // update time clicked until;
          income_100001to150000.timesOff[income_100001to150000.timesOff.length - 1] = income_100001to150000.clock.getTime();
        }
        if (!income_100001to150000.wasClicked) {
          // end routine when income_100001to150000 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("family_income_level", "100,001 \u2013 150,000");
        }
        // if income_100001to150000 is still clicked next frame, it is not a new click
        income_100001to150000.wasClicked = true;
      } else {
        // if income_100001to150000 is clicked next frame, it is a new click
        income_100001to150000.wasClicked = false;
      }
    } else {
      // keep clock at 0 if income_100001to150000 hasn't started / has finished
      income_100001to150000.clock.reset();
      // if income_100001to150000 is clicked next frame, it is a new click
      income_100001to150000.wasClicked = false;
    }
    
    // *income_150001to200000* updates
    if (t >= 0 && income_150001to200000.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      income_150001to200000.tStart = t;  // (not accounting for frame time here)
      income_150001to200000.frameNStart = frameN;  // exact frame index
      
      income_150001to200000.setAutoDraw(true);
    }
    
    
    // if income_150001to200000 is active this frame...
    if (income_150001to200000.status === PsychoJS.Status.STARTED) {
    }
    
    if (income_150001to200000.status === PsychoJS.Status.STARTED) {
      // check whether income_150001to200000 has been pressed
      if (income_150001to200000.isClicked) {
        if (!income_150001to200000.wasClicked) {
          // store time of first click
          income_150001to200000.timesOn.push(income_150001to200000.clock.getTime());
          // store time clicked until
          income_150001to200000.timesOff.push(income_150001to200000.clock.getTime());
        } else {
          // update time clicked until;
          income_150001to200000.timesOff[income_150001to200000.timesOff.length - 1] = income_150001to200000.clock.getTime();
        }
        if (!income_150001to200000.wasClicked) {
          // end routine when income_150001to200000 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("family_income_level", "150,001 \u2013 200,000");
        }
        // if income_150001to200000 is still clicked next frame, it is not a new click
        income_150001to200000.wasClicked = true;
      } else {
        // if income_150001to200000 is clicked next frame, it is a new click
        income_150001to200000.wasClicked = false;
      }
    } else {
      // keep clock at 0 if income_150001to200000 hasn't started / has finished
      income_150001to200000.clock.reset();
      // if income_150001to200000 is clicked next frame, it is a new click
      income_150001to200000.wasClicked = false;
    }
    
    // *income_Morethan200000* updates
    if (t >= 0 && income_Morethan200000.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      income_Morethan200000.tStart = t;  // (not accounting for frame time here)
      income_Morethan200000.frameNStart = frameN;  // exact frame index
      
      income_Morethan200000.setAutoDraw(true);
    }
    
    
    // if income_Morethan200000 is active this frame...
    if (income_Morethan200000.status === PsychoJS.Status.STARTED) {
    }
    
    if (income_Morethan200000.status === PsychoJS.Status.STARTED) {
      // check whether income_Morethan200000 has been pressed
      if (income_Morethan200000.isClicked) {
        if (!income_Morethan200000.wasClicked) {
          // store time of first click
          income_Morethan200000.timesOn.push(income_Morethan200000.clock.getTime());
          // store time clicked until
          income_Morethan200000.timesOff.push(income_Morethan200000.clock.getTime());
        } else {
          // update time clicked until;
          income_Morethan200000.timesOff[income_Morethan200000.timesOff.length - 1] = income_Morethan200000.clock.getTime();
        }
        if (!income_Morethan200000.wasClicked) {
          // end routine when income_Morethan200000 is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("family_income_level", "More than 200,000");
        }
        // if income_Morethan200000 is still clicked next frame, it is not a new click
        income_Morethan200000.wasClicked = true;
      } else {
        // if income_Morethan200000 is clicked next frame, it is a new click
        income_Morethan200000.wasClicked = false;
      }
    } else {
      // keep clock at 0 if income_Morethan200000 hasn't started / has finished
      income_Morethan200000.clock.reset();
      // if income_Morethan200000 is clicked next frame, it is a new click
      income_Morethan200000.wasClicked = false;
    }
    
    // *income_Prefernottosay* updates
    if (t >= 0 && income_Prefernottosay.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      income_Prefernottosay.tStart = t;  // (not accounting for frame time here)
      income_Prefernottosay.frameNStart = frameN;  // exact frame index
      
      income_Prefernottosay.setAutoDraw(true);
    }
    
    
    // if income_Prefernottosay is active this frame...
    if (income_Prefernottosay.status === PsychoJS.Status.STARTED) {
    }
    
    if (income_Prefernottosay.status === PsychoJS.Status.STARTED) {
      // check whether income_Prefernottosay has been pressed
      if (income_Prefernottosay.isClicked) {
        if (!income_Prefernottosay.wasClicked) {
          // store time of first click
          income_Prefernottosay.timesOn.push(income_Prefernottosay.clock.getTime());
          // store time clicked until
          income_Prefernottosay.timesOff.push(income_Prefernottosay.clock.getTime());
        } else {
          // update time clicked until;
          income_Prefernottosay.timesOff[income_Prefernottosay.timesOff.length - 1] = income_Prefernottosay.clock.getTime();
        }
        if (!income_Prefernottosay.wasClicked) {
          // end routine when income_Prefernottosay is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("family_income_level", "99");
        }
        // if income_Prefernottosay is still clicked next frame, it is not a new click
        income_Prefernottosay.wasClicked = true;
      } else {
        // if income_Prefernottosay is clicked next frame, it is a new click
        income_Prefernottosay.wasClicked = false;
      }
    } else {
      // keep clock at 0 if income_Prefernottosay hasn't started / has finished
      income_Prefernottosay.clock.reset();
      // if income_Prefernottosay is clicked next frame, it is a new click
      income_Prefernottosay.wasClicked = false;
    }
    
    // *Q10* updates
    if (t >= 0.0 && Q10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q10.tStart = t;  // (not accounting for frame time here)
      Q10.frameNStart = frameN;  // exact frame index
      
      Q10.setAutoDraw(true);
    }
    
    
    // if Q10 is active this frame...
    if (Q10.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *HINT_Q10* updates
    if (t >= 0.0 && HINT_Q10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      HINT_Q10.tStart = t;  // (not accounting for frame time here)
      HINT_Q10.frameNStart = frameN;  // exact frame index
      
      HINT_Q10.setAutoDraw(true);
    }
    
    
    // if HINT_Q10 is active this frame...
    if (HINT_Q10.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of family_incomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function family_incomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'family_income' ---
    for (const thisComponent of family_incomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('family_income.stopped', globalClock.getTime());
    psychoJS.experiment.addData('income_20000.numClicks', income_20000.numClicks);
    psychoJS.experiment.addData('income_20000.timesOn', income_20000.timesOn);
    psychoJS.experiment.addData('income_20000.timesOff', income_20000.timesOff);
    psychoJS.experiment.addData('income_20001to50000.numClicks', income_20001to50000.numClicks);
    psychoJS.experiment.addData('income_20001to50000.timesOn', income_20001to50000.timesOn);
    psychoJS.experiment.addData('income_20001to50000.timesOff', income_20001to50000.timesOff);
    psychoJS.experiment.addData('income_50001to100000.numClicks', income_50001to100000.numClicks);
    psychoJS.experiment.addData('income_50001to100000.timesOn', income_50001to100000.timesOn);
    psychoJS.experiment.addData('income_50001to100000.timesOff', income_50001to100000.timesOff);
    psychoJS.experiment.addData('income_100001to150000.numClicks', income_100001to150000.numClicks);
    psychoJS.experiment.addData('income_100001to150000.timesOn', income_100001to150000.timesOn);
    psychoJS.experiment.addData('income_100001to150000.timesOff', income_100001to150000.timesOff);
    psychoJS.experiment.addData('income_150001to200000.numClicks', income_150001to200000.numClicks);
    psychoJS.experiment.addData('income_150001to200000.timesOn', income_150001to200000.timesOn);
    psychoJS.experiment.addData('income_150001to200000.timesOff', income_150001to200000.timesOff);
    psychoJS.experiment.addData('income_Morethan200000.numClicks', income_Morethan200000.numClicks);
    psychoJS.experiment.addData('income_Morethan200000.timesOn', income_Morethan200000.timesOn);
    psychoJS.experiment.addData('income_Morethan200000.timesOff', income_Morethan200000.timesOff);
    psychoJS.experiment.addData('income_Prefernottosay.numClicks', income_Prefernottosay.numClicks);
    psychoJS.experiment.addData('income_Prefernottosay.timesOn', income_Prefernottosay.timesOn);
    psychoJS.experiment.addData('income_Prefernottosay.timesOff', income_Prefernottosay.timesOff);
    // the Routine "family_income" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var heightMaxDurationReached;
var heightMaxDuration;
var heightComponents;
function heightRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'height' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    heightClock.reset();
    routineTimer.reset();
    heightMaxDurationReached = false;
    // update component parameters for each repeat
    textbox_height.setText('');
    textbox_height.refresh();
    psychoJS.experiment.addData('height.started', globalClock.getTime());
    heightMaxDuration = null
    // keep track of which components have finished
    heightComponents = [];
    heightComponents.push(Q_height_text);
    heightComponents.push(textbox_height);
    heightComponents.push(height_hint);
    heightComponents.push(Q11);
    
    for (const thisComponent of heightComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function heightRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'height' ---
    // get current time
    t = heightClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_height_text* updates
    if (t >= 0.0 && Q_height_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_height_text.tStart = t;  // (not accounting for frame time here)
      Q_height_text.frameNStart = frameN;  // exact frame index
      
      Q_height_text.setAutoDraw(true);
    }
    
    
    // if Q_height_text is active this frame...
    if (Q_height_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textbox_height* updates
    if (t >= 0.0 && textbox_height.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_height.tStart = t;  // (not accounting for frame time here)
      textbox_height.frameNStart = frameN;  // exact frame index
      
      textbox_height.setAutoDraw(true);
    }
    
    
    // if textbox_height is active this frame...
    if (textbox_height.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *height_hint* updates
    if (t >= 0.0 && height_hint.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      height_hint.tStart = t;  // (not accounting for frame time here)
      height_hint.frameNStart = frameN;  // exact frame index
      
      height_hint.setAutoDraw(true);
    }
    
    
    // if height_hint is active this frame...
    if (height_hint.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from code_height
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! ("allow_advance_height" in psychoJS.experiment))) {
        psychoJS.experiment.allow_advance_height = false;
    }
    keys = psychoJS.eventManager.getKeys();
    if (_pj.in_es6("return", keys)) {
        user_input = textbox_height.text.trim();
        if ((user_input !== "")) {
            psychoJS.experiment.allow_advance_height = true;
        }
    }
    if (psychoJS.experiment.allow_advance_height) {
        continueRoutine = false;
    }
    
    
    // *Q11* updates
    if (t >= 0.0 && Q11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q11.tStart = t;  // (not accounting for frame time here)
      Q11.frameNStart = frameN;  // exact frame index
      
      Q11.setAutoDraw(true);
    }
    
    
    // if Q11 is active this frame...
    if (Q11.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of heightComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function heightRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'height' ---
    for (const thisComponent of heightComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('height.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox_height.text',textbox_height.text)
    // Run 'End Routine' code from code_height
    psychoJS.experiment.addData("height", textbox_height.text);
    
    // the Routine "height" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var weightMaxDurationReached;
var weightMaxDuration;
var weightComponents;
function weightRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'weight' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    weightClock.reset();
    routineTimer.reset();
    weightMaxDurationReached = false;
    // update component parameters for each repeat
    textbox_weight.setText('');
    textbox_weight.refresh();
    psychoJS.experiment.addData('weight.started', globalClock.getTime());
    weightMaxDuration = null
    // keep track of which components have finished
    weightComponents = [];
    weightComponents.push(Q_weight_text);
    weightComponents.push(textbox_weight);
    weightComponents.push(weight_hint);
    weightComponents.push(Q12);
    
    for (const thisComponent of weightComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function weightRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'weight' ---
    // get current time
    t = weightClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_weight_text* updates
    if (t >= 0.0 && Q_weight_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_weight_text.tStart = t;  // (not accounting for frame time here)
      Q_weight_text.frameNStart = frameN;  // exact frame index
      
      Q_weight_text.setAutoDraw(true);
    }
    
    
    // if Q_weight_text is active this frame...
    if (Q_weight_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textbox_weight* updates
    if (t >= 0.0 && textbox_weight.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_weight.tStart = t;  // (not accounting for frame time here)
      textbox_weight.frameNStart = frameN;  // exact frame index
      
      textbox_weight.setAutoDraw(true);
    }
    
    
    // if textbox_weight is active this frame...
    if (textbox_weight.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *weight_hint* updates
    if (t >= 0.0 && weight_hint.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      weight_hint.tStart = t;  // (not accounting for frame time here)
      weight_hint.frameNStart = frameN;  // exact frame index
      
      weight_hint.setAutoDraw(true);
    }
    
    
    // if weight_hint is active this frame...
    if (weight_hint.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from code_weight
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! ("allow_advance_weight" in psychoJS.experiment))) {
        psychoJS.experiment.allow_advance_weight = false;
    }
    keys = psychoJS.eventManager.getKeys();
    if (_pj.in_es6("return", keys)) {
        user_input = textbox_weight.text.trim();
        if ((user_input !== "")) {
            psychoJS.experiment.allow_advance_weight = true;
        }
    }
    if (psychoJS.experiment.allow_advance_weight) {
        continueRoutine = false;
    }
    
    
    // *Q12* updates
    if (t >= 0.0 && Q12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q12.tStart = t;  // (not accounting for frame time here)
      Q12.frameNStart = frameN;  // exact frame index
      
      Q12.setAutoDraw(true);
    }
    
    
    // if Q12 is active this frame...
    if (Q12.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of weightComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function weightRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'weight' ---
    for (const thisComponent of weightComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('weight.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox_weight.text',textbox_weight.text)
    // Run 'End Routine' code from code_weight
    psychoJS.experiment.addData("weight", textbox_weight.text.trim());
    
    // the Routine "weight" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var waistlineMaxDurationReached;
var waistlineMaxDuration;
var waistlineComponents;
function waistlineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'waistline' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    waistlineClock.reset();
    routineTimer.reset();
    waistlineMaxDurationReached = false;
    // update component parameters for each repeat
    textbox_waistline.setText('');
    textbox_waistline.refresh();
    psychoJS.experiment.addData('waistline.started', globalClock.getTime());
    waistlineMaxDuration = null
    // keep track of which components have finished
    waistlineComponents = [];
    waistlineComponents.push(Q_waistline_text);
    waistlineComponents.push(textbox_waistline);
    waistlineComponents.push(waistline_hint);
    waistlineComponents.push(Q13);
    
    for (const thisComponent of waistlineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function waistlineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'waistline' ---
    // get current time
    t = waistlineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_waistline_text* updates
    if (t >= 0.0 && Q_waistline_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_waistline_text.tStart = t;  // (not accounting for frame time here)
      Q_waistline_text.frameNStart = frameN;  // exact frame index
      
      Q_waistline_text.setAutoDraw(true);
    }
    
    
    // if Q_waistline_text is active this frame...
    if (Q_waistline_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textbox_waistline* updates
    if (t >= 0.0 && textbox_waistline.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_waistline.tStart = t;  // (not accounting for frame time here)
      textbox_waistline.frameNStart = frameN;  // exact frame index
      
      textbox_waistline.setAutoDraw(true);
    }
    
    
    // if textbox_waistline is active this frame...
    if (textbox_waistline.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *waistline_hint* updates
    if (t >= 0.0 && waistline_hint.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      waistline_hint.tStart = t;  // (not accounting for frame time here)
      waistline_hint.frameNStart = frameN;  // exact frame index
      
      waistline_hint.setAutoDraw(true);
    }
    
    
    // if waistline_hint is active this frame...
    if (waistline_hint.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from code_waistline_2
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! ("allow_advance_waistline" in psychoJS.experiment))) {
        psychoJS.experiment.allow_advance_waistline = false;
    }
    keys = psychoJS.eventManager.getKeys();
    if (_pj.in_es6("return", keys)) {
        user_input = textbox_waistline.text.trim();
        if ((user_input !== "")) {
            psychoJS.experiment.allow_advance_waistline = true;
        }
    }
    if (psychoJS.experiment.allow_advance_waistline) {
        continueRoutine = false;
    }
    
    
    // *Q13* updates
    if (t >= 0.0 && Q13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q13.tStart = t;  // (not accounting for frame time here)
      Q13.frameNStart = frameN;  // exact frame index
      
      Q13.setAutoDraw(true);
    }
    
    
    // if Q13 is active this frame...
    if (Q13.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of waistlineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function waistlineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'waistline' ---
    for (const thisComponent of waistlineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('waistline.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox_waistline.text',textbox_waistline.text)
    // Run 'End Routine' code from code_waistline_2
    psychoJS.experiment.addData("waistline", textbox_waistline.text.trim());
    
    // the Routine "waistline" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ever_drink_alcoholMaxDurationReached;
var ever_drink_alcoholMaxDuration;
var ever_drink_alcoholComponents;
function ever_drink_alcoholRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ever_drink_alcohol' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    ever_drink_alcoholClock.reset();
    routineTimer.reset();
    ever_drink_alcoholMaxDurationReached = false;
    // update component parameters for each repeat
    // reset ever_drink_alcohol_yes to account for continued clicks & clear times on/off
    ever_drink_alcohol_yes.reset()
    // reset ever_drink_alcohol_no to account for continued clicks & clear times on/off
    ever_drink_alcohol_no.reset()
    psychoJS.experiment.addData('ever_drink_alcohol.started', globalClock.getTime());
    ever_drink_alcoholMaxDuration = null
    // keep track of which components have finished
    ever_drink_alcoholComponents = [];
    ever_drink_alcoholComponents.push(Q_ever_drink_alcohol);
    ever_drink_alcoholComponents.push(ever_drink_alcohol_yes);
    ever_drink_alcoholComponents.push(ever_drink_alcohol_no);
    ever_drink_alcoholComponents.push(Q14);
    
    for (const thisComponent of ever_drink_alcoholComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ever_drink_alcoholRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ever_drink_alcohol' ---
    // get current time
    t = ever_drink_alcoholClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_ever_drink_alcohol* updates
    if (t >= 0.0 && Q_ever_drink_alcohol.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_ever_drink_alcohol.tStart = t;  // (not accounting for frame time here)
      Q_ever_drink_alcohol.frameNStart = frameN;  // exact frame index
      
      Q_ever_drink_alcohol.setAutoDraw(true);
    }
    
    
    // if Q_ever_drink_alcohol is active this frame...
    if (Q_ever_drink_alcohol.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *ever_drink_alcohol_yes* updates
    if (t >= 0 && ever_drink_alcohol_yes.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ever_drink_alcohol_yes.tStart = t;  // (not accounting for frame time here)
      ever_drink_alcohol_yes.frameNStart = frameN;  // exact frame index
      
      ever_drink_alcohol_yes.setAutoDraw(true);
    }
    
    
    // if ever_drink_alcohol_yes is active this frame...
    if (ever_drink_alcohol_yes.status === PsychoJS.Status.STARTED) {
    }
    
    if (ever_drink_alcohol_yes.status === PsychoJS.Status.STARTED) {
      // check whether ever_drink_alcohol_yes has been pressed
      if (ever_drink_alcohol_yes.isClicked) {
        if (!ever_drink_alcohol_yes.wasClicked) {
          // store time of first click
          ever_drink_alcohol_yes.timesOn.push(ever_drink_alcohol_yes.clock.getTime());
          // store time clicked until
          ever_drink_alcohol_yes.timesOff.push(ever_drink_alcohol_yes.clock.getTime());
        } else {
          // update time clicked until;
          ever_drink_alcohol_yes.timesOff[ever_drink_alcohol_yes.timesOff.length - 1] = ever_drink_alcohol_yes.clock.getTime();
        }
        if (!ever_drink_alcohol_yes.wasClicked) {
          // end routine when ever_drink_alcohol_yes is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("ever_drink_alcohol", "Yes");
        }
        // if ever_drink_alcohol_yes is still clicked next frame, it is not a new click
        ever_drink_alcohol_yes.wasClicked = true;
      } else {
        // if ever_drink_alcohol_yes is clicked next frame, it is a new click
        ever_drink_alcohol_yes.wasClicked = false;
      }
    } else {
      // keep clock at 0 if ever_drink_alcohol_yes hasn't started / has finished
      ever_drink_alcohol_yes.clock.reset();
      // if ever_drink_alcohol_yes is clicked next frame, it is a new click
      ever_drink_alcohol_yes.wasClicked = false;
    }
    
    // *ever_drink_alcohol_no* updates
    if (t >= 0 && ever_drink_alcohol_no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ever_drink_alcohol_no.tStart = t;  // (not accounting for frame time here)
      ever_drink_alcohol_no.frameNStart = frameN;  // exact frame index
      
      ever_drink_alcohol_no.setAutoDraw(true);
    }
    
    
    // if ever_drink_alcohol_no is active this frame...
    if (ever_drink_alcohol_no.status === PsychoJS.Status.STARTED) {
    }
    
    if (ever_drink_alcohol_no.status === PsychoJS.Status.STARTED) {
      // check whether ever_drink_alcohol_no has been pressed
      if (ever_drink_alcohol_no.isClicked) {
        if (!ever_drink_alcohol_no.wasClicked) {
          // store time of first click
          ever_drink_alcohol_no.timesOn.push(ever_drink_alcohol_no.clock.getTime());
          // store time clicked until
          ever_drink_alcohol_no.timesOff.push(ever_drink_alcohol_no.clock.getTime());
        } else {
          // update time clicked until;
          ever_drink_alcohol_no.timesOff[ever_drink_alcohol_no.timesOff.length - 1] = ever_drink_alcohol_no.clock.getTime();
        }
        if (!ever_drink_alcohol_no.wasClicked) {
          // end routine when ever_drink_alcohol_no is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("ever_drink_alcohol", "No");
        }
        // if ever_drink_alcohol_no is still clicked next frame, it is not a new click
        ever_drink_alcohol_no.wasClicked = true;
      } else {
        // if ever_drink_alcohol_no is clicked next frame, it is a new click
        ever_drink_alcohol_no.wasClicked = false;
      }
    } else {
      // keep clock at 0 if ever_drink_alcohol_no hasn't started / has finished
      ever_drink_alcohol_no.clock.reset();
      // if ever_drink_alcohol_no is clicked next frame, it is a new click
      ever_drink_alcohol_no.wasClicked = false;
    }
    
    // *Q14* updates
    if (t >= 0.0 && Q14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q14.tStart = t;  // (not accounting for frame time here)
      Q14.frameNStart = frameN;  // exact frame index
      
      Q14.setAutoDraw(true);
    }
    
    
    // if Q14 is active this frame...
    if (Q14.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ever_drink_alcoholComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ever_drink_alcoholRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ever_drink_alcohol' ---
    for (const thisComponent of ever_drink_alcoholComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ever_drink_alcohol.stopped', globalClock.getTime());
    psychoJS.experiment.addData('ever_drink_alcohol_yes.numClicks', ever_drink_alcohol_yes.numClicks);
    psychoJS.experiment.addData('ever_drink_alcohol_yes.timesOn', ever_drink_alcohol_yes.timesOn);
    psychoJS.experiment.addData('ever_drink_alcohol_yes.timesOff', ever_drink_alcohol_yes.timesOff);
    psychoJS.experiment.addData('ever_drink_alcohol_no.numClicks', ever_drink_alcohol_no.numClicks);
    psychoJS.experiment.addData('ever_drink_alcohol_no.timesOn', ever_drink_alcohol_no.timesOn);
    psychoJS.experiment.addData('ever_drink_alcohol_no.timesOff', ever_drink_alcohol_no.timesOff);
    // the Routine "ever_drink_alcohol" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var last_drink_timeMaxDurationReached;
var last_drink_timeMaxDuration;
var last_drink_timeComponents;
function last_drink_timeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'last_drink_time' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    last_drink_timeClock.reset();
    routineTimer.reset();
    last_drink_timeMaxDurationReached = false;
    // update component parameters for each repeat
    // reset last_drink_time_30days to account for continued clicks & clear times on/off
    last_drink_time_30days.reset()
    // reset last_drink_time_in12mons to account for continued clicks & clear times on/off
    last_drink_time_in12mons.reset()
    // reset last_drink_time_over12mons to account for continued clicks & clear times on/off
    last_drink_time_over12mons.reset()
    // reset last_drink_time_never to account for continued clicks & clear times on/off
    last_drink_time_never.reset()
    psychoJS.experiment.addData('last_drink_time.started', globalClock.getTime());
    last_drink_timeMaxDuration = null
    // keep track of which components have finished
    last_drink_timeComponents = [];
    last_drink_timeComponents.push(Q_last_drink_time);
    last_drink_timeComponents.push(last_drink_time_30days);
    last_drink_timeComponents.push(last_drink_time_in12mons);
    last_drink_timeComponents.push(last_drink_time_over12mons);
    last_drink_timeComponents.push(last_drink_time_never);
    last_drink_timeComponents.push(Q15);
    
    for (const thisComponent of last_drink_timeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function last_drink_timeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'last_drink_time' ---
    // get current time
    t = last_drink_timeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_last_drink_time* updates
    if (t >= 0.0 && Q_last_drink_time.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_last_drink_time.tStart = t;  // (not accounting for frame time here)
      Q_last_drink_time.frameNStart = frameN;  // exact frame index
      
      Q_last_drink_time.setAutoDraw(true);
    }
    
    
    // if Q_last_drink_time is active this frame...
    if (Q_last_drink_time.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *last_drink_time_30days* updates
    if (t >= 0 && last_drink_time_30days.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      last_drink_time_30days.tStart = t;  // (not accounting for frame time here)
      last_drink_time_30days.frameNStart = frameN;  // exact frame index
      
      last_drink_time_30days.setAutoDraw(true);
    }
    
    
    // if last_drink_time_30days is active this frame...
    if (last_drink_time_30days.status === PsychoJS.Status.STARTED) {
    }
    
    if (last_drink_time_30days.status === PsychoJS.Status.STARTED) {
      // check whether last_drink_time_30days has been pressed
      if (last_drink_time_30days.isClicked) {
        if (!last_drink_time_30days.wasClicked) {
          // store time of first click
          last_drink_time_30days.timesOn.push(last_drink_time_30days.clock.getTime());
          // store time clicked until
          last_drink_time_30days.timesOff.push(last_drink_time_30days.clock.getTime());
        } else {
          // update time clicked until;
          last_drink_time_30days.timesOff[last_drink_time_30days.timesOff.length - 1] = last_drink_time_30days.clock.getTime();
        }
        if (!last_drink_time_30days.wasClicked) {
          // end routine when last_drink_time_30days is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("last_drink_time", "Within the past 30 days");
        }
        // if last_drink_time_30days is still clicked next frame, it is not a new click
        last_drink_time_30days.wasClicked = true;
      } else {
        // if last_drink_time_30days is clicked next frame, it is a new click
        last_drink_time_30days.wasClicked = false;
      }
    } else {
      // keep clock at 0 if last_drink_time_30days hasn't started / has finished
      last_drink_time_30days.clock.reset();
      // if last_drink_time_30days is clicked next frame, it is a new click
      last_drink_time_30days.wasClicked = false;
    }
    
    // *last_drink_time_in12mons* updates
    if (t >= 0 && last_drink_time_in12mons.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      last_drink_time_in12mons.tStart = t;  // (not accounting for frame time here)
      last_drink_time_in12mons.frameNStart = frameN;  // exact frame index
      
      last_drink_time_in12mons.setAutoDraw(true);
    }
    
    
    // if last_drink_time_in12mons is active this frame...
    if (last_drink_time_in12mons.status === PsychoJS.Status.STARTED) {
    }
    
    if (last_drink_time_in12mons.status === PsychoJS.Status.STARTED) {
      // check whether last_drink_time_in12mons has been pressed
      if (last_drink_time_in12mons.isClicked) {
        if (!last_drink_time_in12mons.wasClicked) {
          // store time of first click
          last_drink_time_in12mons.timesOn.push(last_drink_time_in12mons.clock.getTime());
          // store time clicked until
          last_drink_time_in12mons.timesOff.push(last_drink_time_in12mons.clock.getTime());
        } else {
          // update time clicked until;
          last_drink_time_in12mons.timesOff[last_drink_time_in12mons.timesOff.length - 1] = last_drink_time_in12mons.clock.getTime();
        }
        if (!last_drink_time_in12mons.wasClicked) {
          // end routine when last_drink_time_in12mons is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("last_drink_time", "Within the past 12 months");
        }
        // if last_drink_time_in12mons is still clicked next frame, it is not a new click
        last_drink_time_in12mons.wasClicked = true;
      } else {
        // if last_drink_time_in12mons is clicked next frame, it is a new click
        last_drink_time_in12mons.wasClicked = false;
      }
    } else {
      // keep clock at 0 if last_drink_time_in12mons hasn't started / has finished
      last_drink_time_in12mons.clock.reset();
      // if last_drink_time_in12mons is clicked next frame, it is a new click
      last_drink_time_in12mons.wasClicked = false;
    }
    
    // *last_drink_time_over12mons* updates
    if (t >= 0 && last_drink_time_over12mons.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      last_drink_time_over12mons.tStart = t;  // (not accounting for frame time here)
      last_drink_time_over12mons.frameNStart = frameN;  // exact frame index
      
      last_drink_time_over12mons.setAutoDraw(true);
    }
    
    
    // if last_drink_time_over12mons is active this frame...
    if (last_drink_time_over12mons.status === PsychoJS.Status.STARTED) {
    }
    
    if (last_drink_time_over12mons.status === PsychoJS.Status.STARTED) {
      // check whether last_drink_time_over12mons has been pressed
      if (last_drink_time_over12mons.isClicked) {
        if (!last_drink_time_over12mons.wasClicked) {
          // store time of first click
          last_drink_time_over12mons.timesOn.push(last_drink_time_over12mons.clock.getTime());
          // store time clicked until
          last_drink_time_over12mons.timesOff.push(last_drink_time_over12mons.clock.getTime());
        } else {
          // update time clicked until;
          last_drink_time_over12mons.timesOff[last_drink_time_over12mons.timesOff.length - 1] = last_drink_time_over12mons.clock.getTime();
        }
        if (!last_drink_time_over12mons.wasClicked) {
          // end routine when last_drink_time_over12mons is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("last_drink_time", "More than 12 months ago");
        }
        // if last_drink_time_over12mons is still clicked next frame, it is not a new click
        last_drink_time_over12mons.wasClicked = true;
      } else {
        // if last_drink_time_over12mons is clicked next frame, it is a new click
        last_drink_time_over12mons.wasClicked = false;
      }
    } else {
      // keep clock at 0 if last_drink_time_over12mons hasn't started / has finished
      last_drink_time_over12mons.clock.reset();
      // if last_drink_time_over12mons is clicked next frame, it is a new click
      last_drink_time_over12mons.wasClicked = false;
    }
    
    // *last_drink_time_never* updates
    if (t >= 0 && last_drink_time_never.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      last_drink_time_never.tStart = t;  // (not accounting for frame time here)
      last_drink_time_never.frameNStart = frameN;  // exact frame index
      
      last_drink_time_never.setAutoDraw(true);
    }
    
    
    // if last_drink_time_never is active this frame...
    if (last_drink_time_never.status === PsychoJS.Status.STARTED) {
    }
    
    if (last_drink_time_never.status === PsychoJS.Status.STARTED) {
      // check whether last_drink_time_never has been pressed
      if (last_drink_time_never.isClicked) {
        if (!last_drink_time_never.wasClicked) {
          // store time of first click
          last_drink_time_never.timesOn.push(last_drink_time_never.clock.getTime());
          // store time clicked until
          last_drink_time_never.timesOff.push(last_drink_time_never.clock.getTime());
        } else {
          // update time clicked until;
          last_drink_time_never.timesOff[last_drink_time_never.timesOff.length - 1] = last_drink_time_never.clock.getTime();
        }
        if (!last_drink_time_never.wasClicked) {
          // end routine when last_drink_time_never is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("last_drink_time", "Never drank alcohol");
        }
        // if last_drink_time_never is still clicked next frame, it is not a new click
        last_drink_time_never.wasClicked = true;
      } else {
        // if last_drink_time_never is clicked next frame, it is a new click
        last_drink_time_never.wasClicked = false;
      }
    } else {
      // keep clock at 0 if last_drink_time_never hasn't started / has finished
      last_drink_time_never.clock.reset();
      // if last_drink_time_never is clicked next frame, it is a new click
      last_drink_time_never.wasClicked = false;
    }
    
    // *Q15* updates
    if (t >= 0.0 && Q15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q15.tStart = t;  // (not accounting for frame time here)
      Q15.frameNStart = frameN;  // exact frame index
      
      Q15.setAutoDraw(true);
    }
    
    
    // if Q15 is active this frame...
    if (Q15.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of last_drink_timeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function last_drink_timeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'last_drink_time' ---
    for (const thisComponent of last_drink_timeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('last_drink_time.stopped', globalClock.getTime());
    psychoJS.experiment.addData('last_drink_time_30days.numClicks', last_drink_time_30days.numClicks);
    psychoJS.experiment.addData('last_drink_time_30days.timesOn', last_drink_time_30days.timesOn);
    psychoJS.experiment.addData('last_drink_time_30days.timesOff', last_drink_time_30days.timesOff);
    psychoJS.experiment.addData('last_drink_time_in12mons.numClicks', last_drink_time_in12mons.numClicks);
    psychoJS.experiment.addData('last_drink_time_in12mons.timesOn', last_drink_time_in12mons.timesOn);
    psychoJS.experiment.addData('last_drink_time_in12mons.timesOff', last_drink_time_in12mons.timesOff);
    psychoJS.experiment.addData('last_drink_time_over12mons.numClicks', last_drink_time_over12mons.numClicks);
    psychoJS.experiment.addData('last_drink_time_over12mons.timesOn', last_drink_time_over12mons.timesOn);
    psychoJS.experiment.addData('last_drink_time_over12mons.timesOff', last_drink_time_over12mons.timesOff);
    psychoJS.experiment.addData('last_drink_time_never.numClicks', last_drink_time_never.numClicks);
    psychoJS.experiment.addData('last_drink_time_never.timesOn', last_drink_time_never.timesOn);
    psychoJS.experiment.addData('last_drink_time_never.timesOff', last_drink_time_never.timesOff);
    // the Routine "last_drink_time" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var drink_freq_12mo_2MaxDurationReached;
var drink_freq_12mo_2MaxDuration;
var drink_freq_12mo_2Components;
function drink_freq_12mo_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'drink_freq_12mo_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    drink_freq_12mo_2Clock.reset();
    routineTimer.reset();
    drink_freq_12mo_2MaxDurationReached = false;
    // update component parameters for each repeat
    // reset drink_freq_12mo_Everyday to account for continued clicks & clear times on/off
    drink_freq_12mo_Everyday.reset()
    // reset drink_freq_12mo_Severaltimesaweek to account for continued clicks & clear times on/off
    drink_freq_12mo_Severaltimesaweek.reset()
    // reset drink_freq_12mo_Severaltimesamonth to account for continued clicks & clear times on/off
    drink_freq_12mo_Severaltimesamonth.reset()
    // reset drink_freq_12mo_Rarely to account for continued clicks & clear times on/off
    drink_freq_12mo_Rarely.reset()
    // reset drink_freq_12mo_Never to account for continued clicks & clear times on/off
    drink_freq_12mo_Never.reset()
    psychoJS.experiment.addData('drink_freq_12mo_2.started', globalClock.getTime());
    drink_freq_12mo_2MaxDuration = null
    // keep track of which components have finished
    drink_freq_12mo_2Components = [];
    drink_freq_12mo_2Components.push(Q_drink_freq_12mo);
    drink_freq_12mo_2Components.push(drink_freq_12mo_Everyday);
    drink_freq_12mo_2Components.push(drink_freq_12mo_Severaltimesaweek);
    drink_freq_12mo_2Components.push(drink_freq_12mo_Severaltimesamonth);
    drink_freq_12mo_2Components.push(drink_freq_12mo_Rarely);
    drink_freq_12mo_2Components.push(drink_freq_12mo_Never);
    drink_freq_12mo_2Components.push(Q16);
    
    for (const thisComponent of drink_freq_12mo_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function drink_freq_12mo_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'drink_freq_12mo_2' ---
    // get current time
    t = drink_freq_12mo_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_drink_freq_12mo* updates
    if (t >= 0.0 && Q_drink_freq_12mo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_drink_freq_12mo.tStart = t;  // (not accounting for frame time here)
      Q_drink_freq_12mo.frameNStart = frameN;  // exact frame index
      
      Q_drink_freq_12mo.setAutoDraw(true);
    }
    
    
    // if Q_drink_freq_12mo is active this frame...
    if (Q_drink_freq_12mo.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *drink_freq_12mo_Everyday* updates
    if (t >= 0 && drink_freq_12mo_Everyday.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      drink_freq_12mo_Everyday.tStart = t;  // (not accounting for frame time here)
      drink_freq_12mo_Everyday.frameNStart = frameN;  // exact frame index
      
      drink_freq_12mo_Everyday.setAutoDraw(true);
    }
    
    
    // if drink_freq_12mo_Everyday is active this frame...
    if (drink_freq_12mo_Everyday.status === PsychoJS.Status.STARTED) {
    }
    
    if (drink_freq_12mo_Everyday.status === PsychoJS.Status.STARTED) {
      // check whether drink_freq_12mo_Everyday has been pressed
      if (drink_freq_12mo_Everyday.isClicked) {
        if (!drink_freq_12mo_Everyday.wasClicked) {
          // store time of first click
          drink_freq_12mo_Everyday.timesOn.push(drink_freq_12mo_Everyday.clock.getTime());
          // store time clicked until
          drink_freq_12mo_Everyday.timesOff.push(drink_freq_12mo_Everyday.clock.getTime());
        } else {
          // update time clicked until;
          drink_freq_12mo_Everyday.timesOff[drink_freq_12mo_Everyday.timesOff.length - 1] = drink_freq_12mo_Everyday.clock.getTime();
        }
        if (!drink_freq_12mo_Everyday.wasClicked) {
          // end routine when drink_freq_12mo_Everyday is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("drink_freq_12mo", "Every day");
        }
        // if drink_freq_12mo_Everyday is still clicked next frame, it is not a new click
        drink_freq_12mo_Everyday.wasClicked = true;
      } else {
        // if drink_freq_12mo_Everyday is clicked next frame, it is a new click
        drink_freq_12mo_Everyday.wasClicked = false;
      }
    } else {
      // keep clock at 0 if drink_freq_12mo_Everyday hasn't started / has finished
      drink_freq_12mo_Everyday.clock.reset();
      // if drink_freq_12mo_Everyday is clicked next frame, it is a new click
      drink_freq_12mo_Everyday.wasClicked = false;
    }
    
    // *drink_freq_12mo_Severaltimesaweek* updates
    if (t >= 0 && drink_freq_12mo_Severaltimesaweek.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      drink_freq_12mo_Severaltimesaweek.tStart = t;  // (not accounting for frame time here)
      drink_freq_12mo_Severaltimesaweek.frameNStart = frameN;  // exact frame index
      
      drink_freq_12mo_Severaltimesaweek.setAutoDraw(true);
    }
    
    
    // if drink_freq_12mo_Severaltimesaweek is active this frame...
    if (drink_freq_12mo_Severaltimesaweek.status === PsychoJS.Status.STARTED) {
    }
    
    if (drink_freq_12mo_Severaltimesaweek.status === PsychoJS.Status.STARTED) {
      // check whether drink_freq_12mo_Severaltimesaweek has been pressed
      if (drink_freq_12mo_Severaltimesaweek.isClicked) {
        if (!drink_freq_12mo_Severaltimesaweek.wasClicked) {
          // store time of first click
          drink_freq_12mo_Severaltimesaweek.timesOn.push(drink_freq_12mo_Severaltimesaweek.clock.getTime());
          // store time clicked until
          drink_freq_12mo_Severaltimesaweek.timesOff.push(drink_freq_12mo_Severaltimesaweek.clock.getTime());
        } else {
          // update time clicked until;
          drink_freq_12mo_Severaltimesaweek.timesOff[drink_freq_12mo_Severaltimesaweek.timesOff.length - 1] = drink_freq_12mo_Severaltimesaweek.clock.getTime();
        }
        if (!drink_freq_12mo_Severaltimesaweek.wasClicked) {
          // end routine when drink_freq_12mo_Severaltimesaweek is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("drink_freq_12mo", "Several times a week");
        }
        // if drink_freq_12mo_Severaltimesaweek is still clicked next frame, it is not a new click
        drink_freq_12mo_Severaltimesaweek.wasClicked = true;
      } else {
        // if drink_freq_12mo_Severaltimesaweek is clicked next frame, it is a new click
        drink_freq_12mo_Severaltimesaweek.wasClicked = false;
      }
    } else {
      // keep clock at 0 if drink_freq_12mo_Severaltimesaweek hasn't started / has finished
      drink_freq_12mo_Severaltimesaweek.clock.reset();
      // if drink_freq_12mo_Severaltimesaweek is clicked next frame, it is a new click
      drink_freq_12mo_Severaltimesaweek.wasClicked = false;
    }
    
    // *drink_freq_12mo_Severaltimesamonth* updates
    if (t >= 0 && drink_freq_12mo_Severaltimesamonth.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      drink_freq_12mo_Severaltimesamonth.tStart = t;  // (not accounting for frame time here)
      drink_freq_12mo_Severaltimesamonth.frameNStart = frameN;  // exact frame index
      
      drink_freq_12mo_Severaltimesamonth.setAutoDraw(true);
    }
    
    
    // if drink_freq_12mo_Severaltimesamonth is active this frame...
    if (drink_freq_12mo_Severaltimesamonth.status === PsychoJS.Status.STARTED) {
    }
    
    if (drink_freq_12mo_Severaltimesamonth.status === PsychoJS.Status.STARTED) {
      // check whether drink_freq_12mo_Severaltimesamonth has been pressed
      if (drink_freq_12mo_Severaltimesamonth.isClicked) {
        if (!drink_freq_12mo_Severaltimesamonth.wasClicked) {
          // store time of first click
          drink_freq_12mo_Severaltimesamonth.timesOn.push(drink_freq_12mo_Severaltimesamonth.clock.getTime());
          // store time clicked until
          drink_freq_12mo_Severaltimesamonth.timesOff.push(drink_freq_12mo_Severaltimesamonth.clock.getTime());
        } else {
          // update time clicked until;
          drink_freq_12mo_Severaltimesamonth.timesOff[drink_freq_12mo_Severaltimesamonth.timesOff.length - 1] = drink_freq_12mo_Severaltimesamonth.clock.getTime();
        }
        if (!drink_freq_12mo_Severaltimesamonth.wasClicked) {
          // end routine when drink_freq_12mo_Severaltimesamonth is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("drink_freq_12mo", "Several times a month");
        }
        // if drink_freq_12mo_Severaltimesamonth is still clicked next frame, it is not a new click
        drink_freq_12mo_Severaltimesamonth.wasClicked = true;
      } else {
        // if drink_freq_12mo_Severaltimesamonth is clicked next frame, it is a new click
        drink_freq_12mo_Severaltimesamonth.wasClicked = false;
      }
    } else {
      // keep clock at 0 if drink_freq_12mo_Severaltimesamonth hasn't started / has finished
      drink_freq_12mo_Severaltimesamonth.clock.reset();
      // if drink_freq_12mo_Severaltimesamonth is clicked next frame, it is a new click
      drink_freq_12mo_Severaltimesamonth.wasClicked = false;
    }
    
    // *drink_freq_12mo_Rarely* updates
    if (t >= 0 && drink_freq_12mo_Rarely.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      drink_freq_12mo_Rarely.tStart = t;  // (not accounting for frame time here)
      drink_freq_12mo_Rarely.frameNStart = frameN;  // exact frame index
      
      drink_freq_12mo_Rarely.setAutoDraw(true);
    }
    
    
    // if drink_freq_12mo_Rarely is active this frame...
    if (drink_freq_12mo_Rarely.status === PsychoJS.Status.STARTED) {
    }
    
    if (drink_freq_12mo_Rarely.status === PsychoJS.Status.STARTED) {
      // check whether drink_freq_12mo_Rarely has been pressed
      if (drink_freq_12mo_Rarely.isClicked) {
        if (!drink_freq_12mo_Rarely.wasClicked) {
          // store time of first click
          drink_freq_12mo_Rarely.timesOn.push(drink_freq_12mo_Rarely.clock.getTime());
          // store time clicked until
          drink_freq_12mo_Rarely.timesOff.push(drink_freq_12mo_Rarely.clock.getTime());
        } else {
          // update time clicked until;
          drink_freq_12mo_Rarely.timesOff[drink_freq_12mo_Rarely.timesOff.length - 1] = drink_freq_12mo_Rarely.clock.getTime();
        }
        if (!drink_freq_12mo_Rarely.wasClicked) {
          // end routine when drink_freq_12mo_Rarely is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("drink_freq_12mo", "Rarely");
        }
        // if drink_freq_12mo_Rarely is still clicked next frame, it is not a new click
        drink_freq_12mo_Rarely.wasClicked = true;
      } else {
        // if drink_freq_12mo_Rarely is clicked next frame, it is a new click
        drink_freq_12mo_Rarely.wasClicked = false;
      }
    } else {
      // keep clock at 0 if drink_freq_12mo_Rarely hasn't started / has finished
      drink_freq_12mo_Rarely.clock.reset();
      // if drink_freq_12mo_Rarely is clicked next frame, it is a new click
      drink_freq_12mo_Rarely.wasClicked = false;
    }
    
    // *drink_freq_12mo_Never* updates
    if (t >= 0 && drink_freq_12mo_Never.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      drink_freq_12mo_Never.tStart = t;  // (not accounting for frame time here)
      drink_freq_12mo_Never.frameNStart = frameN;  // exact frame index
      
      drink_freq_12mo_Never.setAutoDraw(true);
    }
    
    
    // if drink_freq_12mo_Never is active this frame...
    if (drink_freq_12mo_Never.status === PsychoJS.Status.STARTED) {
    }
    
    if (drink_freq_12mo_Never.status === PsychoJS.Status.STARTED) {
      // check whether drink_freq_12mo_Never has been pressed
      if (drink_freq_12mo_Never.isClicked) {
        if (!drink_freq_12mo_Never.wasClicked) {
          // store time of first click
          drink_freq_12mo_Never.timesOn.push(drink_freq_12mo_Never.clock.getTime());
          // store time clicked until
          drink_freq_12mo_Never.timesOff.push(drink_freq_12mo_Never.clock.getTime());
        } else {
          // update time clicked until;
          drink_freq_12mo_Never.timesOff[drink_freq_12mo_Never.timesOff.length - 1] = drink_freq_12mo_Never.clock.getTime();
        }
        if (!drink_freq_12mo_Never.wasClicked) {
          // end routine when drink_freq_12mo_Never is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("drink_freq_12mo", "Never");
        }
        // if drink_freq_12mo_Never is still clicked next frame, it is not a new click
        drink_freq_12mo_Never.wasClicked = true;
      } else {
        // if drink_freq_12mo_Never is clicked next frame, it is a new click
        drink_freq_12mo_Never.wasClicked = false;
      }
    } else {
      // keep clock at 0 if drink_freq_12mo_Never hasn't started / has finished
      drink_freq_12mo_Never.clock.reset();
      // if drink_freq_12mo_Never is clicked next frame, it is a new click
      drink_freq_12mo_Never.wasClicked = false;
    }
    
    // *Q16* updates
    if (t >= 0.0 && Q16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q16.tStart = t;  // (not accounting for frame time here)
      Q16.frameNStart = frameN;  // exact frame index
      
      Q16.setAutoDraw(true);
    }
    
    
    // if Q16 is active this frame...
    if (Q16.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of drink_freq_12mo_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function drink_freq_12mo_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'drink_freq_12mo_2' ---
    for (const thisComponent of drink_freq_12mo_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('drink_freq_12mo_2.stopped', globalClock.getTime());
    psychoJS.experiment.addData('drink_freq_12mo_Everyday.numClicks', drink_freq_12mo_Everyday.numClicks);
    psychoJS.experiment.addData('drink_freq_12mo_Everyday.timesOn', drink_freq_12mo_Everyday.timesOn);
    psychoJS.experiment.addData('drink_freq_12mo_Everyday.timesOff', drink_freq_12mo_Everyday.timesOff);
    psychoJS.experiment.addData('drink_freq_12mo_Severaltimesaweek.numClicks', drink_freq_12mo_Severaltimesaweek.numClicks);
    psychoJS.experiment.addData('drink_freq_12mo_Severaltimesaweek.timesOn', drink_freq_12mo_Severaltimesaweek.timesOn);
    psychoJS.experiment.addData('drink_freq_12mo_Severaltimesaweek.timesOff', drink_freq_12mo_Severaltimesaweek.timesOff);
    psychoJS.experiment.addData('drink_freq_12mo_Severaltimesamonth.numClicks', drink_freq_12mo_Severaltimesamonth.numClicks);
    psychoJS.experiment.addData('drink_freq_12mo_Severaltimesamonth.timesOn', drink_freq_12mo_Severaltimesamonth.timesOn);
    psychoJS.experiment.addData('drink_freq_12mo_Severaltimesamonth.timesOff', drink_freq_12mo_Severaltimesamonth.timesOff);
    psychoJS.experiment.addData('drink_freq_12mo_Rarely.numClicks', drink_freq_12mo_Rarely.numClicks);
    psychoJS.experiment.addData('drink_freq_12mo_Rarely.timesOn', drink_freq_12mo_Rarely.timesOn);
    psychoJS.experiment.addData('drink_freq_12mo_Rarely.timesOff', drink_freq_12mo_Rarely.timesOff);
    psychoJS.experiment.addData('drink_freq_12mo_Never.numClicks', drink_freq_12mo_Never.numClicks);
    psychoJS.experiment.addData('drink_freq_12mo_Never.timesOn', drink_freq_12mo_Never.timesOn);
    psychoJS.experiment.addData('drink_freq_12mo_Never.timesOff', drink_freq_12mo_Never.timesOff);
    // the Routine "drink_freq_12mo_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var drink_amount_12moMaxDurationReached;
var drink_amount_12moMaxDuration;
var drink_amount_12moComponents;
function drink_amount_12moRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'drink_amount_12mo' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    drink_amount_12moClock.reset();
    routineTimer.reset();
    drink_amount_12moMaxDurationReached = false;
    // update component parameters for each repeat
    // reset drink_amount_12mo_0glass to account for continued clicks & clear times on/off
    drink_amount_12mo_0glass.reset()
    // reset drink_amount_12mo_1glass to account for continued clicks & clear times on/off
    drink_amount_12mo_1glass.reset()
    // reset drink_amount_12mo_2glass to account for continued clicks & clear times on/off
    drink_amount_12mo_2glass.reset()
    // reset drink_amount_12mo_3glasses to account for continued clicks & clear times on/off
    drink_amount_12mo_3glasses.reset()
    // reset drink_amount_12mo_4glasses to account for continued clicks & clear times on/off
    drink_amount_12mo_4glasses.reset()
    // reset drink_amount_12mo_5glassesmore to account for continued clicks & clear times on/off
    drink_amount_12mo_5glassesmore.reset()
    psychoJS.experiment.addData('drink_amount_12mo.started', globalClock.getTime());
    drink_amount_12moMaxDuration = null
    // keep track of which components have finished
    drink_amount_12moComponents = [];
    drink_amount_12moComponents.push(Q_drink_amount_12mo);
    drink_amount_12moComponents.push(drink_amount_12mo_0glass);
    drink_amount_12moComponents.push(drink_amount_12mo_1glass);
    drink_amount_12moComponents.push(drink_amount_12mo_2glass);
    drink_amount_12moComponents.push(drink_amount_12mo_3glasses);
    drink_amount_12moComponents.push(drink_amount_12mo_4glasses);
    drink_amount_12moComponents.push(drink_amount_12mo_5glassesmore);
    drink_amount_12moComponents.push(Q17);
    
    for (const thisComponent of drink_amount_12moComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function drink_amount_12moRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'drink_amount_12mo' ---
    // get current time
    t = drink_amount_12moClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_drink_amount_12mo* updates
    if (t >= 0.0 && Q_drink_amount_12mo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_drink_amount_12mo.tStart = t;  // (not accounting for frame time here)
      Q_drink_amount_12mo.frameNStart = frameN;  // exact frame index
      
      Q_drink_amount_12mo.setAutoDraw(true);
    }
    
    
    // if Q_drink_amount_12mo is active this frame...
    if (Q_drink_amount_12mo.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *drink_amount_12mo_0glass* updates
    if (t >= 0 && drink_amount_12mo_0glass.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      drink_amount_12mo_0glass.tStart = t;  // (not accounting for frame time here)
      drink_amount_12mo_0glass.frameNStart = frameN;  // exact frame index
      
      drink_amount_12mo_0glass.setAutoDraw(true);
    }
    
    
    // if drink_amount_12mo_0glass is active this frame...
    if (drink_amount_12mo_0glass.status === PsychoJS.Status.STARTED) {
    }
    
    if (drink_amount_12mo_0glass.status === PsychoJS.Status.STARTED) {
      // check whether drink_amount_12mo_0glass has been pressed
      if (drink_amount_12mo_0glass.isClicked) {
        if (!drink_amount_12mo_0glass.wasClicked) {
          // store time of first click
          drink_amount_12mo_0glass.timesOn.push(drink_amount_12mo_0glass.clock.getTime());
          // store time clicked until
          drink_amount_12mo_0glass.timesOff.push(drink_amount_12mo_0glass.clock.getTime());
        } else {
          // update time clicked until;
          drink_amount_12mo_0glass.timesOff[drink_amount_12mo_0glass.timesOff.length - 1] = drink_amount_12mo_0glass.clock.getTime();
        }
        if (!drink_amount_12mo_0glass.wasClicked) {
          // end routine when drink_amount_12mo_0glass is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("drink_amount_12mo", "0 drink");
        }
        // if drink_amount_12mo_0glass is still clicked next frame, it is not a new click
        drink_amount_12mo_0glass.wasClicked = true;
      } else {
        // if drink_amount_12mo_0glass is clicked next frame, it is a new click
        drink_amount_12mo_0glass.wasClicked = false;
      }
    } else {
      // keep clock at 0 if drink_amount_12mo_0glass hasn't started / has finished
      drink_amount_12mo_0glass.clock.reset();
      // if drink_amount_12mo_0glass is clicked next frame, it is a new click
      drink_amount_12mo_0glass.wasClicked = false;
    }
    
    // *drink_amount_12mo_1glass* updates
    if (t >= 0 && drink_amount_12mo_1glass.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      drink_amount_12mo_1glass.tStart = t;  // (not accounting for frame time here)
      drink_amount_12mo_1glass.frameNStart = frameN;  // exact frame index
      
      drink_amount_12mo_1glass.setAutoDraw(true);
    }
    
    
    // if drink_amount_12mo_1glass is active this frame...
    if (drink_amount_12mo_1glass.status === PsychoJS.Status.STARTED) {
    }
    
    if (drink_amount_12mo_1glass.status === PsychoJS.Status.STARTED) {
      // check whether drink_amount_12mo_1glass has been pressed
      if (drink_amount_12mo_1glass.isClicked) {
        if (!drink_amount_12mo_1glass.wasClicked) {
          // store time of first click
          drink_amount_12mo_1glass.timesOn.push(drink_amount_12mo_1glass.clock.getTime());
          // store time clicked until
          drink_amount_12mo_1glass.timesOff.push(drink_amount_12mo_1glass.clock.getTime());
        } else {
          // update time clicked until;
          drink_amount_12mo_1glass.timesOff[drink_amount_12mo_1glass.timesOff.length - 1] = drink_amount_12mo_1glass.clock.getTime();
        }
        if (!drink_amount_12mo_1glass.wasClicked) {
          // end routine when drink_amount_12mo_1glass is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("drink_amount_12mo", "1 drink");
        }
        // if drink_amount_12mo_1glass is still clicked next frame, it is not a new click
        drink_amount_12mo_1glass.wasClicked = true;
      } else {
        // if drink_amount_12mo_1glass is clicked next frame, it is a new click
        drink_amount_12mo_1glass.wasClicked = false;
      }
    } else {
      // keep clock at 0 if drink_amount_12mo_1glass hasn't started / has finished
      drink_amount_12mo_1glass.clock.reset();
      // if drink_amount_12mo_1glass is clicked next frame, it is a new click
      drink_amount_12mo_1glass.wasClicked = false;
    }
    
    // *drink_amount_12mo_2glass* updates
    if (t >= 0 && drink_amount_12mo_2glass.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      drink_amount_12mo_2glass.tStart = t;  // (not accounting for frame time here)
      drink_amount_12mo_2glass.frameNStart = frameN;  // exact frame index
      
      drink_amount_12mo_2glass.setAutoDraw(true);
    }
    
    
    // if drink_amount_12mo_2glass is active this frame...
    if (drink_amount_12mo_2glass.status === PsychoJS.Status.STARTED) {
    }
    
    if (drink_amount_12mo_2glass.status === PsychoJS.Status.STARTED) {
      // check whether drink_amount_12mo_2glass has been pressed
      if (drink_amount_12mo_2glass.isClicked) {
        if (!drink_amount_12mo_2glass.wasClicked) {
          // store time of first click
          drink_amount_12mo_2glass.timesOn.push(drink_amount_12mo_2glass.clock.getTime());
          // store time clicked until
          drink_amount_12mo_2glass.timesOff.push(drink_amount_12mo_2glass.clock.getTime());
        } else {
          // update time clicked until;
          drink_amount_12mo_2glass.timesOff[drink_amount_12mo_2glass.timesOff.length - 1] = drink_amount_12mo_2glass.clock.getTime();
        }
        if (!drink_amount_12mo_2glass.wasClicked) {
          // end routine when drink_amount_12mo_2glass is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("drink_amount_12mo", "2 drinks");
        }
        // if drink_amount_12mo_2glass is still clicked next frame, it is not a new click
        drink_amount_12mo_2glass.wasClicked = true;
      } else {
        // if drink_amount_12mo_2glass is clicked next frame, it is a new click
        drink_amount_12mo_2glass.wasClicked = false;
      }
    } else {
      // keep clock at 0 if drink_amount_12mo_2glass hasn't started / has finished
      drink_amount_12mo_2glass.clock.reset();
      // if drink_amount_12mo_2glass is clicked next frame, it is a new click
      drink_amount_12mo_2glass.wasClicked = false;
    }
    
    // *drink_amount_12mo_3glasses* updates
    if (t >= 0 && drink_amount_12mo_3glasses.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      drink_amount_12mo_3glasses.tStart = t;  // (not accounting for frame time here)
      drink_amount_12mo_3glasses.frameNStart = frameN;  // exact frame index
      
      drink_amount_12mo_3glasses.setAutoDraw(true);
    }
    
    
    // if drink_amount_12mo_3glasses is active this frame...
    if (drink_amount_12mo_3glasses.status === PsychoJS.Status.STARTED) {
    }
    
    if (drink_amount_12mo_3glasses.status === PsychoJS.Status.STARTED) {
      // check whether drink_amount_12mo_3glasses has been pressed
      if (drink_amount_12mo_3glasses.isClicked) {
        if (!drink_amount_12mo_3glasses.wasClicked) {
          // store time of first click
          drink_amount_12mo_3glasses.timesOn.push(drink_amount_12mo_3glasses.clock.getTime());
          // store time clicked until
          drink_amount_12mo_3glasses.timesOff.push(drink_amount_12mo_3glasses.clock.getTime());
        } else {
          // update time clicked until;
          drink_amount_12mo_3glasses.timesOff[drink_amount_12mo_3glasses.timesOff.length - 1] = drink_amount_12mo_3glasses.clock.getTime();
        }
        if (!drink_amount_12mo_3glasses.wasClicked) {
          // end routine when drink_amount_12mo_3glasses is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("drink_amount_12mo", "3 drinks");
        }
        // if drink_amount_12mo_3glasses is still clicked next frame, it is not a new click
        drink_amount_12mo_3glasses.wasClicked = true;
      } else {
        // if drink_amount_12mo_3glasses is clicked next frame, it is a new click
        drink_amount_12mo_3glasses.wasClicked = false;
      }
    } else {
      // keep clock at 0 if drink_amount_12mo_3glasses hasn't started / has finished
      drink_amount_12mo_3glasses.clock.reset();
      // if drink_amount_12mo_3glasses is clicked next frame, it is a new click
      drink_amount_12mo_3glasses.wasClicked = false;
    }
    
    // *drink_amount_12mo_4glasses* updates
    if (t >= 0 && drink_amount_12mo_4glasses.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      drink_amount_12mo_4glasses.tStart = t;  // (not accounting for frame time here)
      drink_amount_12mo_4glasses.frameNStart = frameN;  // exact frame index
      
      drink_amount_12mo_4glasses.setAutoDraw(true);
    }
    
    
    // if drink_amount_12mo_4glasses is active this frame...
    if (drink_amount_12mo_4glasses.status === PsychoJS.Status.STARTED) {
    }
    
    if (drink_amount_12mo_4glasses.status === PsychoJS.Status.STARTED) {
      // check whether drink_amount_12mo_4glasses has been pressed
      if (drink_amount_12mo_4glasses.isClicked) {
        if (!drink_amount_12mo_4glasses.wasClicked) {
          // store time of first click
          drink_amount_12mo_4glasses.timesOn.push(drink_amount_12mo_4glasses.clock.getTime());
          // store time clicked until
          drink_amount_12mo_4glasses.timesOff.push(drink_amount_12mo_4glasses.clock.getTime());
        } else {
          // update time clicked until;
          drink_amount_12mo_4glasses.timesOff[drink_amount_12mo_4glasses.timesOff.length - 1] = drink_amount_12mo_4glasses.clock.getTime();
        }
        if (!drink_amount_12mo_4glasses.wasClicked) {
          // end routine when drink_amount_12mo_4glasses is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("drink_amount_12mo", "4 drinks");
        }
        // if drink_amount_12mo_4glasses is still clicked next frame, it is not a new click
        drink_amount_12mo_4glasses.wasClicked = true;
      } else {
        // if drink_amount_12mo_4glasses is clicked next frame, it is a new click
        drink_amount_12mo_4glasses.wasClicked = false;
      }
    } else {
      // keep clock at 0 if drink_amount_12mo_4glasses hasn't started / has finished
      drink_amount_12mo_4glasses.clock.reset();
      // if drink_amount_12mo_4glasses is clicked next frame, it is a new click
      drink_amount_12mo_4glasses.wasClicked = false;
    }
    
    // *drink_amount_12mo_5glassesmore* updates
    if (t >= 0 && drink_amount_12mo_5glassesmore.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      drink_amount_12mo_5glassesmore.tStart = t;  // (not accounting for frame time here)
      drink_amount_12mo_5glassesmore.frameNStart = frameN;  // exact frame index
      
      drink_amount_12mo_5glassesmore.setAutoDraw(true);
    }
    
    
    // if drink_amount_12mo_5glassesmore is active this frame...
    if (drink_amount_12mo_5glassesmore.status === PsychoJS.Status.STARTED) {
    }
    
    if (drink_amount_12mo_5glassesmore.status === PsychoJS.Status.STARTED) {
      // check whether drink_amount_12mo_5glassesmore has been pressed
      if (drink_amount_12mo_5glassesmore.isClicked) {
        if (!drink_amount_12mo_5glassesmore.wasClicked) {
          // store time of first click
          drink_amount_12mo_5glassesmore.timesOn.push(drink_amount_12mo_5glassesmore.clock.getTime());
          // store time clicked until
          drink_amount_12mo_5glassesmore.timesOff.push(drink_amount_12mo_5glassesmore.clock.getTime());
        } else {
          // update time clicked until;
          drink_amount_12mo_5glassesmore.timesOff[drink_amount_12mo_5glassesmore.timesOff.length - 1] = drink_amount_12mo_5glassesmore.clock.getTime();
        }
        if (!drink_amount_12mo_5glassesmore.wasClicked) {
          // end routine when drink_amount_12mo_5glassesmore is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("drink_amount_12mo", "5 or more drinks");
        }
        // if drink_amount_12mo_5glassesmore is still clicked next frame, it is not a new click
        drink_amount_12mo_5glassesmore.wasClicked = true;
      } else {
        // if drink_amount_12mo_5glassesmore is clicked next frame, it is a new click
        drink_amount_12mo_5glassesmore.wasClicked = false;
      }
    } else {
      // keep clock at 0 if drink_amount_12mo_5glassesmore hasn't started / has finished
      drink_amount_12mo_5glassesmore.clock.reset();
      // if drink_amount_12mo_5glassesmore is clicked next frame, it is a new click
      drink_amount_12mo_5glassesmore.wasClicked = false;
    }
    
    // *Q17* updates
    if (t >= 0.0 && Q17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q17.tStart = t;  // (not accounting for frame time here)
      Q17.frameNStart = frameN;  // exact frame index
      
      Q17.setAutoDraw(true);
    }
    
    
    // if Q17 is active this frame...
    if (Q17.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of drink_amount_12moComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function drink_amount_12moRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'drink_amount_12mo' ---
    for (const thisComponent of drink_amount_12moComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('drink_amount_12mo.stopped', globalClock.getTime());
    psychoJS.experiment.addData('drink_amount_12mo_0glass.numClicks', drink_amount_12mo_0glass.numClicks);
    psychoJS.experiment.addData('drink_amount_12mo_0glass.timesOn', drink_amount_12mo_0glass.timesOn);
    psychoJS.experiment.addData('drink_amount_12mo_0glass.timesOff', drink_amount_12mo_0glass.timesOff);
    psychoJS.experiment.addData('drink_amount_12mo_1glass.numClicks', drink_amount_12mo_1glass.numClicks);
    psychoJS.experiment.addData('drink_amount_12mo_1glass.timesOn', drink_amount_12mo_1glass.timesOn);
    psychoJS.experiment.addData('drink_amount_12mo_1glass.timesOff', drink_amount_12mo_1glass.timesOff);
    psychoJS.experiment.addData('drink_amount_12mo_2glass.numClicks', drink_amount_12mo_2glass.numClicks);
    psychoJS.experiment.addData('drink_amount_12mo_2glass.timesOn', drink_amount_12mo_2glass.timesOn);
    psychoJS.experiment.addData('drink_amount_12mo_2glass.timesOff', drink_amount_12mo_2glass.timesOff);
    psychoJS.experiment.addData('drink_amount_12mo_3glasses.numClicks', drink_amount_12mo_3glasses.numClicks);
    psychoJS.experiment.addData('drink_amount_12mo_3glasses.timesOn', drink_amount_12mo_3glasses.timesOn);
    psychoJS.experiment.addData('drink_amount_12mo_3glasses.timesOff', drink_amount_12mo_3glasses.timesOff);
    psychoJS.experiment.addData('drink_amount_12mo_4glasses.numClicks', drink_amount_12mo_4glasses.numClicks);
    psychoJS.experiment.addData('drink_amount_12mo_4glasses.timesOn', drink_amount_12mo_4glasses.timesOn);
    psychoJS.experiment.addData('drink_amount_12mo_4glasses.timesOff', drink_amount_12mo_4glasses.timesOff);
    psychoJS.experiment.addData('drink_amount_12mo_5glassesmore.numClicks', drink_amount_12mo_5glassesmore.numClicks);
    psychoJS.experiment.addData('drink_amount_12mo_5glassesmore.timesOn', drink_amount_12mo_5glassesmore.timesOn);
    psychoJS.experiment.addData('drink_amount_12mo_5glassesmore.timesOff', drink_amount_12mo_5glassesmore.timesOff);
    // the Routine "drink_amount_12mo" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ever_smokeMaxDurationReached;
var ever_smokeMaxDuration;
var ever_smokeComponents;
function ever_smokeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ever_smoke' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    ever_smokeClock.reset();
    routineTimer.reset();
    ever_smokeMaxDurationReached = false;
    // update component parameters for each repeat
    // reset ever_smoke_yes to account for continued clicks & clear times on/off
    ever_smoke_yes.reset()
    // reset ever_smoke_no to account for continued clicks & clear times on/off
    ever_smoke_no.reset()
    psychoJS.experiment.addData('ever_smoke.started', globalClock.getTime());
    ever_smokeMaxDuration = null
    // keep track of which components have finished
    ever_smokeComponents = [];
    ever_smokeComponents.push(Q_ever_smoke);
    ever_smokeComponents.push(ever_smoke_yes);
    ever_smokeComponents.push(ever_smoke_no);
    ever_smokeComponents.push(Q18);
    
    for (const thisComponent of ever_smokeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ever_smokeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ever_smoke' ---
    // get current time
    t = ever_smokeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_ever_smoke* updates
    if (t >= 0.0 && Q_ever_smoke.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_ever_smoke.tStart = t;  // (not accounting for frame time here)
      Q_ever_smoke.frameNStart = frameN;  // exact frame index
      
      Q_ever_smoke.setAutoDraw(true);
    }
    
    
    // if Q_ever_smoke is active this frame...
    if (Q_ever_smoke.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *ever_smoke_yes* updates
    if (t >= 0 && ever_smoke_yes.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ever_smoke_yes.tStart = t;  // (not accounting for frame time here)
      ever_smoke_yes.frameNStart = frameN;  // exact frame index
      
      ever_smoke_yes.setAutoDraw(true);
    }
    
    
    // if ever_smoke_yes is active this frame...
    if (ever_smoke_yes.status === PsychoJS.Status.STARTED) {
    }
    
    if (ever_smoke_yes.status === PsychoJS.Status.STARTED) {
      // check whether ever_smoke_yes has been pressed
      if (ever_smoke_yes.isClicked) {
        if (!ever_smoke_yes.wasClicked) {
          // store time of first click
          ever_smoke_yes.timesOn.push(ever_smoke_yes.clock.getTime());
          // store time clicked until
          ever_smoke_yes.timesOff.push(ever_smoke_yes.clock.getTime());
        } else {
          // update time clicked until;
          ever_smoke_yes.timesOff[ever_smoke_yes.timesOff.length - 1] = ever_smoke_yes.clock.getTime();
        }
        if (!ever_smoke_yes.wasClicked) {
          // end routine when ever_smoke_yes is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("ever_smoke", "Yes");
        }
        // if ever_smoke_yes is still clicked next frame, it is not a new click
        ever_smoke_yes.wasClicked = true;
      } else {
        // if ever_smoke_yes is clicked next frame, it is a new click
        ever_smoke_yes.wasClicked = false;
      }
    } else {
      // keep clock at 0 if ever_smoke_yes hasn't started / has finished
      ever_smoke_yes.clock.reset();
      // if ever_smoke_yes is clicked next frame, it is a new click
      ever_smoke_yes.wasClicked = false;
    }
    
    // *ever_smoke_no* updates
    if (t >= 0 && ever_smoke_no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ever_smoke_no.tStart = t;  // (not accounting for frame time here)
      ever_smoke_no.frameNStart = frameN;  // exact frame index
      
      ever_smoke_no.setAutoDraw(true);
    }
    
    
    // if ever_smoke_no is active this frame...
    if (ever_smoke_no.status === PsychoJS.Status.STARTED) {
    }
    
    if (ever_smoke_no.status === PsychoJS.Status.STARTED) {
      // check whether ever_smoke_no has been pressed
      if (ever_smoke_no.isClicked) {
        if (!ever_smoke_no.wasClicked) {
          // store time of first click
          ever_smoke_no.timesOn.push(ever_smoke_no.clock.getTime());
          // store time clicked until
          ever_smoke_no.timesOff.push(ever_smoke_no.clock.getTime());
        } else {
          // update time clicked until;
          ever_smoke_no.timesOff[ever_smoke_no.timesOff.length - 1] = ever_smoke_no.clock.getTime();
        }
        if (!ever_smoke_no.wasClicked) {
          // end routine when ever_smoke_no is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("ever_smoke", "No");
        }
        // if ever_smoke_no is still clicked next frame, it is not a new click
        ever_smoke_no.wasClicked = true;
      } else {
        // if ever_smoke_no is clicked next frame, it is a new click
        ever_smoke_no.wasClicked = false;
      }
    } else {
      // keep clock at 0 if ever_smoke_no hasn't started / has finished
      ever_smoke_no.clock.reset();
      // if ever_smoke_no is clicked next frame, it is a new click
      ever_smoke_no.wasClicked = false;
    }
    
    // *Q18* updates
    if (t >= 0.0 && Q18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q18.tStart = t;  // (not accounting for frame time here)
      Q18.frameNStart = frameN;  // exact frame index
      
      Q18.setAutoDraw(true);
    }
    
    
    // if Q18 is active this frame...
    if (Q18.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ever_smokeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ever_smokeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ever_smoke' ---
    for (const thisComponent of ever_smokeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ever_smoke.stopped', globalClock.getTime());
    psychoJS.experiment.addData('ever_smoke_yes.numClicks', ever_smoke_yes.numClicks);
    psychoJS.experiment.addData('ever_smoke_yes.timesOn', ever_smoke_yes.timesOn);
    psychoJS.experiment.addData('ever_smoke_yes.timesOff', ever_smoke_yes.timesOff);
    psychoJS.experiment.addData('ever_smoke_no.numClicks', ever_smoke_no.numClicks);
    psychoJS.experiment.addData('ever_smoke_no.timesOn', ever_smoke_no.timesOn);
    psychoJS.experiment.addData('ever_smoke_no.timesOff', ever_smoke_no.timesOff);
    // the Routine "ever_smoke" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var start_smoke_ageMaxDurationReached;
var start_smoke_ageMaxDuration;
var start_smoke_ageComponents;
function start_smoke_ageRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'start_smoke_age' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    start_smoke_ageClock.reset();
    routineTimer.reset();
    start_smoke_ageMaxDurationReached = false;
    // update component parameters for each repeat
    textbox_start_smoke_age.setText('');
    textbox_start_smoke_age.refresh();
    psychoJS.experiment.addData('start_smoke_age.started', globalClock.getTime());
    start_smoke_ageMaxDuration = null
    // keep track of which components have finished
    start_smoke_ageComponents = [];
    start_smoke_ageComponents.push(Q_start_smoke_age);
    start_smoke_ageComponents.push(textbox_start_smoke_age);
    start_smoke_ageComponents.push(Q19);
    start_smoke_ageComponents.push(hit_star_smoke_age);
    start_smoke_ageComponents.push(hint_star_smoke);
    
    for (const thisComponent of start_smoke_ageComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function start_smoke_ageRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'start_smoke_age' ---
    // get current time
    t = start_smoke_ageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_start_smoke_age* updates
    if (t >= 0.0 && Q_start_smoke_age.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_start_smoke_age.tStart = t;  // (not accounting for frame time here)
      Q_start_smoke_age.frameNStart = frameN;  // exact frame index
      
      Q_start_smoke_age.setAutoDraw(true);
    }
    
    
    // if Q_start_smoke_age is active this frame...
    if (Q_start_smoke_age.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textbox_start_smoke_age* updates
    if (t >= 0.0 && textbox_start_smoke_age.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_start_smoke_age.tStart = t;  // (not accounting for frame time here)
      textbox_start_smoke_age.frameNStart = frameN;  // exact frame index
      
      textbox_start_smoke_age.setAutoDraw(true);
    }
    
    
    // if textbox_start_smoke_age is active this frame...
    if (textbox_start_smoke_age.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from code_7
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! ("allow_advance_start_smoke_age" in psychoJS.experiment))) {
        psychoJS.experiment.allow_advance_start_smoke_age = false;
    }
    keys = psychoJS.eventManager.getKeys();
    if (_pj.in_es6("return", keys)) {
        user_input = textbox_start_smoke_age.text.trim();
        if ((user_input !== "")) {
            psychoJS.experiment.allow_advance_start_smoke_age = true;
        }
    }
    if (psychoJS.experiment.allow_advance_start_smoke_age) {
        continueRoutine = false;
    }
    
    
    // *Q19* updates
    if (t >= 0.0 && Q19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q19.tStart = t;  // (not accounting for frame time here)
      Q19.frameNStart = frameN;  // exact frame index
      
      Q19.setAutoDraw(true);
    }
    
    
    // if Q19 is active this frame...
    if (Q19.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *hit_star_smoke_age* updates
    if (t >= 0.0 && hit_star_smoke_age.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hit_star_smoke_age.tStart = t;  // (not accounting for frame time here)
      hit_star_smoke_age.frameNStart = frameN;  // exact frame index
      
      hit_star_smoke_age.setAutoDraw(true);
    }
    
    
    // if hit_star_smoke_age is active this frame...
    if (hit_star_smoke_age.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *hint_star_smoke* updates
    if (t >= 0.0 && hint_star_smoke.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hint_star_smoke.tStart = t;  // (not accounting for frame time here)
      hint_star_smoke.frameNStart = frameN;  // exact frame index
      
      hint_star_smoke.setAutoDraw(true);
    }
    
    
    // if hint_star_smoke is active this frame...
    if (hint_star_smoke.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of start_smoke_ageComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function start_smoke_ageRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'start_smoke_age' ---
    for (const thisComponent of start_smoke_ageComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('start_smoke_age.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox_start_smoke_age.text',textbox_start_smoke_age.text)
    // Run 'End Routine' code from code_7
    psychoJS.experiment.addData("start_smoke_age", textbox_start_smoke_age.text);
    
    // the Routine "start_smoke_age" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var cigs_per_dayMaxDurationReached;
var cigs_per_dayMaxDuration;
var cigs_per_dayComponents;
function cigs_per_dayRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'cigs_per_day' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    cigs_per_dayClock.reset();
    routineTimer.reset();
    cigs_per_dayMaxDurationReached = false;
    // update component parameters for each repeat
    textbox_cigs_per_day.setText('');
    textbox_cigs_per_day.refresh();
    psychoJS.experiment.addData('cigs_per_day.started', globalClock.getTime());
    cigs_per_dayMaxDuration = null
    // keep track of which components have finished
    cigs_per_dayComponents = [];
    cigs_per_dayComponents.push(Q_cigs_per_day);
    cigs_per_dayComponents.push(textbox_cigs_per_day);
    cigs_per_dayComponents.push(Q20);
    cigs_per_dayComponents.push(hit_cigs);
    cigs_per_dayComponents.push(hint_cigs);
    
    for (const thisComponent of cigs_per_dayComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function cigs_per_dayRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'cigs_per_day' ---
    // get current time
    t = cigs_per_dayClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_cigs_per_day* updates
    if (t >= 0.0 && Q_cigs_per_day.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_cigs_per_day.tStart = t;  // (not accounting for frame time here)
      Q_cigs_per_day.frameNStart = frameN;  // exact frame index
      
      Q_cigs_per_day.setAutoDraw(true);
    }
    
    
    // if Q_cigs_per_day is active this frame...
    if (Q_cigs_per_day.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textbox_cigs_per_day* updates
    if (t >= 0.0 && textbox_cigs_per_day.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_cigs_per_day.tStart = t;  // (not accounting for frame time here)
      textbox_cigs_per_day.frameNStart = frameN;  // exact frame index
      
      textbox_cigs_per_day.setAutoDraw(true);
    }
    
    
    // if textbox_cigs_per_day is active this frame...
    if (textbox_cigs_per_day.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from code_8
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! ("allow_advance_cigs_per_day" in psychoJS.experiment))) {
        psychoJS.experiment.allow_advance_cigs_per_day = false;
    }
    keys = psychoJS.eventManager.getKeys();
    if (_pj.in_es6("return", keys)) {
        user_input = textbox_cigs_per_day.text.trim();
        if ((user_input !== "")) {
            psychoJS.experiment.allow_advance_cigs_per_day = true;
        }
    }
    if (psychoJS.experiment.allow_advance_cigs_per_day) {
        continueRoutine = false;
    }
    
    
    // *Q20* updates
    if (t >= 0.0 && Q20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q20.tStart = t;  // (not accounting for frame time here)
      Q20.frameNStart = frameN;  // exact frame index
      
      Q20.setAutoDraw(true);
    }
    
    
    // if Q20 is active this frame...
    if (Q20.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *hit_cigs* updates
    if (t >= 0.0 && hit_cigs.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hit_cigs.tStart = t;  // (not accounting for frame time here)
      hit_cigs.frameNStart = frameN;  // exact frame index
      
      hit_cigs.setAutoDraw(true);
    }
    
    
    // if hit_cigs is active this frame...
    if (hit_cigs.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *hint_cigs* updates
    if (t >= 0.0 && hint_cigs.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hint_cigs.tStart = t;  // (not accounting for frame time here)
      hint_cigs.frameNStart = frameN;  // exact frame index
      
      hint_cigs.setAutoDraw(true);
    }
    
    
    // if hint_cigs is active this frame...
    if (hint_cigs.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of cigs_per_dayComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function cigs_per_dayRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'cigs_per_day' ---
    for (const thisComponent of cigs_per_dayComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('cigs_per_day.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox_cigs_per_day.text',textbox_cigs_per_day.text)
    // Run 'End Routine' code from code_8
    psychoJS.experiment.addData("cigs_per_day", textbox_cigs_per_day.text);
    
    // the Routine "cigs_per_day" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var self_health_statusMaxDurationReached;
var self_health_statusMaxDuration;
var self_health_statusComponents;
function self_health_statusRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'self_health_status' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    self_health_statusClock.reset();
    routineTimer.reset();
    self_health_statusMaxDurationReached = false;
    // update component parameters for each repeat
    // reset self_health_status_Verygood to account for continued clicks & clear times on/off
    self_health_status_Verygood.reset()
    // reset self_health_status_Good to account for continued clicks & clear times on/off
    self_health_status_Good.reset()
    // reset self_health_status_Average to account for continued clicks & clear times on/off
    self_health_status_Average.reset()
    // reset self_health_status_Poor to account for continued clicks & clear times on/off
    self_health_status_Poor.reset()
    // reset self_health_status_Verypoor to account for continued clicks & clear times on/off
    self_health_status_Verypoor.reset()
    psychoJS.experiment.addData('self_health_status.started', globalClock.getTime());
    self_health_statusMaxDuration = null
    // keep track of which components have finished
    self_health_statusComponents = [];
    self_health_statusComponents.push(Q_self_health_status);
    self_health_statusComponents.push(self_health_status_Verygood);
    self_health_statusComponents.push(self_health_status_Good);
    self_health_statusComponents.push(self_health_status_Average);
    self_health_statusComponents.push(self_health_status_Poor);
    self_health_statusComponents.push(self_health_status_Verypoor);
    self_health_statusComponents.push(Q21);
    
    for (const thisComponent of self_health_statusComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function self_health_statusRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'self_health_status' ---
    // get current time
    t = self_health_statusClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_self_health_status* updates
    if (t >= 0.0 && Q_self_health_status.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_self_health_status.tStart = t;  // (not accounting for frame time here)
      Q_self_health_status.frameNStart = frameN;  // exact frame index
      
      Q_self_health_status.setAutoDraw(true);
    }
    
    
    // if Q_self_health_status is active this frame...
    if (Q_self_health_status.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *self_health_status_Verygood* updates
    if (t >= 0 && self_health_status_Verygood.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      self_health_status_Verygood.tStart = t;  // (not accounting for frame time here)
      self_health_status_Verygood.frameNStart = frameN;  // exact frame index
      
      self_health_status_Verygood.setAutoDraw(true);
    }
    
    
    // if self_health_status_Verygood is active this frame...
    if (self_health_status_Verygood.status === PsychoJS.Status.STARTED) {
    }
    
    if (self_health_status_Verygood.status === PsychoJS.Status.STARTED) {
      // check whether self_health_status_Verygood has been pressed
      if (self_health_status_Verygood.isClicked) {
        if (!self_health_status_Verygood.wasClicked) {
          // store time of first click
          self_health_status_Verygood.timesOn.push(self_health_status_Verygood.clock.getTime());
          // store time clicked until
          self_health_status_Verygood.timesOff.push(self_health_status_Verygood.clock.getTime());
        } else {
          // update time clicked until;
          self_health_status_Verygood.timesOff[self_health_status_Verygood.timesOff.length - 1] = self_health_status_Verygood.clock.getTime();
        }
        if (!self_health_status_Verygood.wasClicked) {
          // end routine when self_health_status_Verygood is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("self_health_status", "Very good");
        }
        // if self_health_status_Verygood is still clicked next frame, it is not a new click
        self_health_status_Verygood.wasClicked = true;
      } else {
        // if self_health_status_Verygood is clicked next frame, it is a new click
        self_health_status_Verygood.wasClicked = false;
      }
    } else {
      // keep clock at 0 if self_health_status_Verygood hasn't started / has finished
      self_health_status_Verygood.clock.reset();
      // if self_health_status_Verygood is clicked next frame, it is a new click
      self_health_status_Verygood.wasClicked = false;
    }
    
    // *self_health_status_Good* updates
    if (t >= 0 && self_health_status_Good.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      self_health_status_Good.tStart = t;  // (not accounting for frame time here)
      self_health_status_Good.frameNStart = frameN;  // exact frame index
      
      self_health_status_Good.setAutoDraw(true);
    }
    
    
    // if self_health_status_Good is active this frame...
    if (self_health_status_Good.status === PsychoJS.Status.STARTED) {
    }
    
    if (self_health_status_Good.status === PsychoJS.Status.STARTED) {
      // check whether self_health_status_Good has been pressed
      if (self_health_status_Good.isClicked) {
        if (!self_health_status_Good.wasClicked) {
          // store time of first click
          self_health_status_Good.timesOn.push(self_health_status_Good.clock.getTime());
          // store time clicked until
          self_health_status_Good.timesOff.push(self_health_status_Good.clock.getTime());
        } else {
          // update time clicked until;
          self_health_status_Good.timesOff[self_health_status_Good.timesOff.length - 1] = self_health_status_Good.clock.getTime();
        }
        if (!self_health_status_Good.wasClicked) {
          // end routine when self_health_status_Good is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("self_health_status", "Good");
        }
        // if self_health_status_Good is still clicked next frame, it is not a new click
        self_health_status_Good.wasClicked = true;
      } else {
        // if self_health_status_Good is clicked next frame, it is a new click
        self_health_status_Good.wasClicked = false;
      }
    } else {
      // keep clock at 0 if self_health_status_Good hasn't started / has finished
      self_health_status_Good.clock.reset();
      // if self_health_status_Good is clicked next frame, it is a new click
      self_health_status_Good.wasClicked = false;
    }
    
    // *self_health_status_Average* updates
    if (t >= 0 && self_health_status_Average.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      self_health_status_Average.tStart = t;  // (not accounting for frame time here)
      self_health_status_Average.frameNStart = frameN;  // exact frame index
      
      self_health_status_Average.setAutoDraw(true);
    }
    
    
    // if self_health_status_Average is active this frame...
    if (self_health_status_Average.status === PsychoJS.Status.STARTED) {
    }
    
    if (self_health_status_Average.status === PsychoJS.Status.STARTED) {
      // check whether self_health_status_Average has been pressed
      if (self_health_status_Average.isClicked) {
        if (!self_health_status_Average.wasClicked) {
          // store time of first click
          self_health_status_Average.timesOn.push(self_health_status_Average.clock.getTime());
          // store time clicked until
          self_health_status_Average.timesOff.push(self_health_status_Average.clock.getTime());
        } else {
          // update time clicked until;
          self_health_status_Average.timesOff[self_health_status_Average.timesOff.length - 1] = self_health_status_Average.clock.getTime();
        }
        if (!self_health_status_Average.wasClicked) {
          // end routine when self_health_status_Average is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("self_health_status", "Average");
        }
        // if self_health_status_Average is still clicked next frame, it is not a new click
        self_health_status_Average.wasClicked = true;
      } else {
        // if self_health_status_Average is clicked next frame, it is a new click
        self_health_status_Average.wasClicked = false;
      }
    } else {
      // keep clock at 0 if self_health_status_Average hasn't started / has finished
      self_health_status_Average.clock.reset();
      // if self_health_status_Average is clicked next frame, it is a new click
      self_health_status_Average.wasClicked = false;
    }
    
    // *self_health_status_Poor* updates
    if (t >= 0 && self_health_status_Poor.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      self_health_status_Poor.tStart = t;  // (not accounting for frame time here)
      self_health_status_Poor.frameNStart = frameN;  // exact frame index
      
      self_health_status_Poor.setAutoDraw(true);
    }
    
    
    // if self_health_status_Poor is active this frame...
    if (self_health_status_Poor.status === PsychoJS.Status.STARTED) {
    }
    
    if (self_health_status_Poor.status === PsychoJS.Status.STARTED) {
      // check whether self_health_status_Poor has been pressed
      if (self_health_status_Poor.isClicked) {
        if (!self_health_status_Poor.wasClicked) {
          // store time of first click
          self_health_status_Poor.timesOn.push(self_health_status_Poor.clock.getTime());
          // store time clicked until
          self_health_status_Poor.timesOff.push(self_health_status_Poor.clock.getTime());
        } else {
          // update time clicked until;
          self_health_status_Poor.timesOff[self_health_status_Poor.timesOff.length - 1] = self_health_status_Poor.clock.getTime();
        }
        if (!self_health_status_Poor.wasClicked) {
          // end routine when self_health_status_Poor is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("self_health_status", "Poor");
        }
        // if self_health_status_Poor is still clicked next frame, it is not a new click
        self_health_status_Poor.wasClicked = true;
      } else {
        // if self_health_status_Poor is clicked next frame, it is a new click
        self_health_status_Poor.wasClicked = false;
      }
    } else {
      // keep clock at 0 if self_health_status_Poor hasn't started / has finished
      self_health_status_Poor.clock.reset();
      // if self_health_status_Poor is clicked next frame, it is a new click
      self_health_status_Poor.wasClicked = false;
    }
    
    // *self_health_status_Verypoor* updates
    if (t >= 0 && self_health_status_Verypoor.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      self_health_status_Verypoor.tStart = t;  // (not accounting for frame time here)
      self_health_status_Verypoor.frameNStart = frameN;  // exact frame index
      
      self_health_status_Verypoor.setAutoDraw(true);
    }
    
    
    // if self_health_status_Verypoor is active this frame...
    if (self_health_status_Verypoor.status === PsychoJS.Status.STARTED) {
    }
    
    if (self_health_status_Verypoor.status === PsychoJS.Status.STARTED) {
      // check whether self_health_status_Verypoor has been pressed
      if (self_health_status_Verypoor.isClicked) {
        if (!self_health_status_Verypoor.wasClicked) {
          // store time of first click
          self_health_status_Verypoor.timesOn.push(self_health_status_Verypoor.clock.getTime());
          // store time clicked until
          self_health_status_Verypoor.timesOff.push(self_health_status_Verypoor.clock.getTime());
        } else {
          // update time clicked until;
          self_health_status_Verypoor.timesOff[self_health_status_Verypoor.timesOff.length - 1] = self_health_status_Verypoor.clock.getTime();
        }
        if (!self_health_status_Verypoor.wasClicked) {
          // end routine when self_health_status_Verypoor is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("self_health_status", "Very poor");
        }
        // if self_health_status_Verypoor is still clicked next frame, it is not a new click
        self_health_status_Verypoor.wasClicked = true;
      } else {
        // if self_health_status_Verypoor is clicked next frame, it is a new click
        self_health_status_Verypoor.wasClicked = false;
      }
    } else {
      // keep clock at 0 if self_health_status_Verypoor hasn't started / has finished
      self_health_status_Verypoor.clock.reset();
      // if self_health_status_Verypoor is clicked next frame, it is a new click
      self_health_status_Verypoor.wasClicked = false;
    }
    
    // *Q21* updates
    if (t >= 0.0 && Q21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q21.tStart = t;  // (not accounting for frame time here)
      Q21.frameNStart = frameN;  // exact frame index
      
      Q21.setAutoDraw(true);
    }
    
    
    // if Q21 is active this frame...
    if (Q21.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of self_health_statusComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function self_health_statusRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'self_health_status' ---
    for (const thisComponent of self_health_statusComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('self_health_status.stopped', globalClock.getTime());
    psychoJS.experiment.addData('self_health_status_Verygood.numClicks', self_health_status_Verygood.numClicks);
    psychoJS.experiment.addData('self_health_status_Verygood.timesOn', self_health_status_Verygood.timesOn);
    psychoJS.experiment.addData('self_health_status_Verygood.timesOff', self_health_status_Verygood.timesOff);
    psychoJS.experiment.addData('self_health_status_Good.numClicks', self_health_status_Good.numClicks);
    psychoJS.experiment.addData('self_health_status_Good.timesOn', self_health_status_Good.timesOn);
    psychoJS.experiment.addData('self_health_status_Good.timesOff', self_health_status_Good.timesOff);
    psychoJS.experiment.addData('self_health_status_Average.numClicks', self_health_status_Average.numClicks);
    psychoJS.experiment.addData('self_health_status_Average.timesOn', self_health_status_Average.timesOn);
    psychoJS.experiment.addData('self_health_status_Average.timesOff', self_health_status_Average.timesOff);
    psychoJS.experiment.addData('self_health_status_Poor.numClicks', self_health_status_Poor.numClicks);
    psychoJS.experiment.addData('self_health_status_Poor.timesOn', self_health_status_Poor.timesOn);
    psychoJS.experiment.addData('self_health_status_Poor.timesOff', self_health_status_Poor.timesOff);
    psychoJS.experiment.addData('self_health_status_Verypoor.numClicks', self_health_status_Verypoor.numClicks);
    psychoJS.experiment.addData('self_health_status_Verypoor.timesOn', self_health_status_Verypoor.timesOn);
    psychoJS.experiment.addData('self_health_status_Verypoor.timesOff', self_health_status_Verypoor.timesOff);
    // the Routine "self_health_status" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var hearing_statusMaxDurationReached;
var hearing_statusMaxDuration;
var hearing_statusComponents;
function hearing_statusRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'hearing_status' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    hearing_statusClock.reset();
    routineTimer.reset();
    hearing_statusMaxDurationReached = false;
    // update component parameters for each repeat
    // reset hearing_NO to account for continued clicks & clear times on/off
    hearing_NO.reset()
    // reset hearing_YRS to account for continued clicks & clear times on/off
    hearing_YRS.reset()
    psychoJS.experiment.addData('hearing_status.started', globalClock.getTime());
    hearing_statusMaxDuration = null
    // keep track of which components have finished
    hearing_statusComponents = [];
    hearing_statusComponents.push(Q_hearing_status);
    hearing_statusComponents.push(hearing_NO);
    hearing_statusComponents.push(hearing_YRS);
    hearing_statusComponents.push(Q22);
    
    for (const thisComponent of hearing_statusComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function hearing_statusRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'hearing_status' ---
    // get current time
    t = hearing_statusClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_hearing_status* updates
    if (t >= 0.0 && Q_hearing_status.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_hearing_status.tStart = t;  // (not accounting for frame time here)
      Q_hearing_status.frameNStart = frameN;  // exact frame index
      
      Q_hearing_status.setAutoDraw(true);
    }
    
    
    // if Q_hearing_status is active this frame...
    if (Q_hearing_status.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *hearing_NO* updates
    if (t >= 0 && hearing_NO.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hearing_NO.tStart = t;  // (not accounting for frame time here)
      hearing_NO.frameNStart = frameN;  // exact frame index
      
      hearing_NO.setAutoDraw(true);
    }
    
    
    // if hearing_NO is active this frame...
    if (hearing_NO.status === PsychoJS.Status.STARTED) {
    }
    
    if (hearing_NO.status === PsychoJS.Status.STARTED) {
      // check whether hearing_NO has been pressed
      if (hearing_NO.isClicked) {
        if (!hearing_NO.wasClicked) {
          // store time of first click
          hearing_NO.timesOn.push(hearing_NO.clock.getTime());
          // store time clicked until
          hearing_NO.timesOff.push(hearing_NO.clock.getTime());
        } else {
          // update time clicked until;
          hearing_NO.timesOff[hearing_NO.timesOff.length - 1] = hearing_NO.clock.getTime();
        }
        if (!hearing_NO.wasClicked) {
          // end routine when hearing_NO is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("hearing_status", "None");
        }
        // if hearing_NO is still clicked next frame, it is not a new click
        hearing_NO.wasClicked = true;
      } else {
        // if hearing_NO is clicked next frame, it is a new click
        hearing_NO.wasClicked = false;
      }
    } else {
      // keep clock at 0 if hearing_NO hasn't started / has finished
      hearing_NO.clock.reset();
      // if hearing_NO is clicked next frame, it is a new click
      hearing_NO.wasClicked = false;
    }
    
    // *hearing_YRS* updates
    if (t >= 0 && hearing_YRS.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hearing_YRS.tStart = t;  // (not accounting for frame time here)
      hearing_YRS.frameNStart = frameN;  // exact frame index
      
      hearing_YRS.setAutoDraw(true);
    }
    
    
    // if hearing_YRS is active this frame...
    if (hearing_YRS.status === PsychoJS.Status.STARTED) {
    }
    
    if (hearing_YRS.status === PsychoJS.Status.STARTED) {
      // check whether hearing_YRS has been pressed
      if (hearing_YRS.isClicked) {
        if (!hearing_YRS.wasClicked) {
          // store time of first click
          hearing_YRS.timesOn.push(hearing_YRS.clock.getTime());
          // store time clicked until
          hearing_YRS.timesOff.push(hearing_YRS.clock.getTime());
        } else {
          // update time clicked until;
          hearing_YRS.timesOff[hearing_YRS.timesOff.length - 1] = hearing_YRS.clock.getTime();
        }
        if (!hearing_YRS.wasClicked) {
          // end routine when hearing_YRS is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("hearing_status", "Yes");
        }
        // if hearing_YRS is still clicked next frame, it is not a new click
        hearing_YRS.wasClicked = true;
      } else {
        // if hearing_YRS is clicked next frame, it is a new click
        hearing_YRS.wasClicked = false;
      }
    } else {
      // keep clock at 0 if hearing_YRS hasn't started / has finished
      hearing_YRS.clock.reset();
      // if hearing_YRS is clicked next frame, it is a new click
      hearing_YRS.wasClicked = false;
    }
    
    // *Q22* updates
    if (t >= 0.0 && Q22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q22.tStart = t;  // (not accounting for frame time here)
      Q22.frameNStart = frameN;  // exact frame index
      
      Q22.setAutoDraw(true);
    }
    
    
    // if Q22 is active this frame...
    if (Q22.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of hearing_statusComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function hearing_statusRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'hearing_status' ---
    for (const thisComponent of hearing_statusComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('hearing_status.stopped', globalClock.getTime());
    psychoJS.experiment.addData('hearing_NO.numClicks', hearing_NO.numClicks);
    psychoJS.experiment.addData('hearing_NO.timesOn', hearing_NO.timesOn);
    psychoJS.experiment.addData('hearing_NO.timesOff', hearing_NO.timesOff);
    psychoJS.experiment.addData('hearing_YRS.numClicks', hearing_YRS.numClicks);
    psychoJS.experiment.addData('hearing_YRS.timesOn', hearing_YRS.timesOn);
    psychoJS.experiment.addData('hearing_YRS.timesOff', hearing_YRS.timesOff);
    // the Routine "hearing_status" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var music_trainingMaxDurationReached;
var music_trainingMaxDuration;
var music_trainingComponents;
function music_trainingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'music_training' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    music_trainingClock.reset();
    routineTimer.reset();
    music_trainingMaxDurationReached = false;
    // update component parameters for each repeat
    // reset music_training_YES to account for continued clicks & clear times on/off
    music_training_YES.reset()
    // reset music_training_NO to account for continued clicks & clear times on/off
    music_training_NO.reset()
    psychoJS.experiment.addData('music_training.started', globalClock.getTime());
    music_trainingMaxDuration = null
    // keep track of which components have finished
    music_trainingComponents = [];
    music_trainingComponents.push(Q_music_taining);
    music_trainingComponents.push(music_training_YES);
    music_trainingComponents.push(music_training_NO);
    music_trainingComponents.push(Q23);
    music_trainingComponents.push(textbox_hint);
    
    for (const thisComponent of music_trainingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function music_trainingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'music_training' ---
    // get current time
    t = music_trainingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_music_taining* updates
    if (t >= 0.0 && Q_music_taining.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_music_taining.tStart = t;  // (not accounting for frame time here)
      Q_music_taining.frameNStart = frameN;  // exact frame index
      
      Q_music_taining.setAutoDraw(true);
    }
    
    
    // if Q_music_taining is active this frame...
    if (Q_music_taining.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *music_training_YES* updates
    if (t >= 0 && music_training_YES.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      music_training_YES.tStart = t;  // (not accounting for frame time here)
      music_training_YES.frameNStart = frameN;  // exact frame index
      
      music_training_YES.setAutoDraw(true);
    }
    
    
    // if music_training_YES is active this frame...
    if (music_training_YES.status === PsychoJS.Status.STARTED) {
    }
    
    if (music_training_YES.status === PsychoJS.Status.STARTED) {
      // check whether music_training_YES has been pressed
      if (music_training_YES.isClicked) {
        if (!music_training_YES.wasClicked) {
          // store time of first click
          music_training_YES.timesOn.push(music_training_YES.clock.getTime());
          // store time clicked until
          music_training_YES.timesOff.push(music_training_YES.clock.getTime());
        } else {
          // update time clicked until;
          music_training_YES.timesOff[music_training_YES.timesOff.length - 1] = music_training_YES.clock.getTime();
        }
        if (!music_training_YES.wasClicked) {
          // end routine when music_training_YES is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("music_taining", "Yes");
        }
        // if music_training_YES is still clicked next frame, it is not a new click
        music_training_YES.wasClicked = true;
      } else {
        // if music_training_YES is clicked next frame, it is a new click
        music_training_YES.wasClicked = false;
      }
    } else {
      // keep clock at 0 if music_training_YES hasn't started / has finished
      music_training_YES.clock.reset();
      // if music_training_YES is clicked next frame, it is a new click
      music_training_YES.wasClicked = false;
    }
    
    // *music_training_NO* updates
    if (t >= 0 && music_training_NO.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      music_training_NO.tStart = t;  // (not accounting for frame time here)
      music_training_NO.frameNStart = frameN;  // exact frame index
      
      music_training_NO.setAutoDraw(true);
    }
    
    
    // if music_training_NO is active this frame...
    if (music_training_NO.status === PsychoJS.Status.STARTED) {
    }
    
    if (music_training_NO.status === PsychoJS.Status.STARTED) {
      // check whether music_training_NO has been pressed
      if (music_training_NO.isClicked) {
        if (!music_training_NO.wasClicked) {
          // store time of first click
          music_training_NO.timesOn.push(music_training_NO.clock.getTime());
          // store time clicked until
          music_training_NO.timesOff.push(music_training_NO.clock.getTime());
        } else {
          // update time clicked until;
          music_training_NO.timesOff[music_training_NO.timesOff.length - 1] = music_training_NO.clock.getTime();
        }
        if (!music_training_NO.wasClicked) {
          // end routine when music_training_NO is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("music_taining", "No");
        }
        // if music_training_NO is still clicked next frame, it is not a new click
        music_training_NO.wasClicked = true;
      } else {
        // if music_training_NO is clicked next frame, it is a new click
        music_training_NO.wasClicked = false;
      }
    } else {
      // keep clock at 0 if music_training_NO hasn't started / has finished
      music_training_NO.clock.reset();
      // if music_training_NO is clicked next frame, it is a new click
      music_training_NO.wasClicked = false;
    }
    
    // *Q23* updates
    if (t >= 0.0 && Q23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q23.tStart = t;  // (not accounting for frame time here)
      Q23.frameNStart = frameN;  // exact frame index
      
      Q23.setAutoDraw(true);
    }
    
    
    // if Q23 is active this frame...
    if (Q23.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textbox_hint* updates
    if (t >= 0.0 && textbox_hint.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_hint.tStart = t;  // (not accounting for frame time here)
      textbox_hint.frameNStart = frameN;  // exact frame index
      
      textbox_hint.setAutoDraw(true);
    }
    
    
    // if textbox_hint is active this frame...
    if (textbox_hint.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of music_trainingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function music_trainingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'music_training' ---
    for (const thisComponent of music_trainingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('music_training.stopped', globalClock.getTime());
    psychoJS.experiment.addData('music_training_YES.numClicks', music_training_YES.numClicks);
    psychoJS.experiment.addData('music_training_YES.timesOn', music_training_YES.timesOn);
    psychoJS.experiment.addData('music_training_YES.timesOff', music_training_YES.timesOff);
    psychoJS.experiment.addData('music_training_NO.numClicks', music_training_NO.numClicks);
    psychoJS.experiment.addData('music_training_NO.timesOn', music_training_NO.timesOn);
    psychoJS.experiment.addData('music_training_NO.timesOff', music_training_NO.timesOff);
    // the Routine "music_training" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var training_yearsMaxDurationReached;
var training_yearsMaxDuration;
var training_yearsComponents;
function training_yearsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'training_years' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    training_yearsClock.reset();
    routineTimer.reset();
    training_yearsMaxDurationReached = false;
    // update component parameters for each repeat
    textbox_training_years.setText('');
    textbox_training_years.refresh();
    psychoJS.experiment.addData('training_years.started', globalClock.getTime());
    training_yearsMaxDuration = null
    // keep track of which components have finished
    training_yearsComponents = [];
    training_yearsComponents.push(Q_trainig_years);
    training_yearsComponents.push(textbox_training_years);
    training_yearsComponents.push(hint_training_years);
    training_yearsComponents.push(Q24);
    
    for (const thisComponent of training_yearsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function training_yearsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'training_years' ---
    // get current time
    t = training_yearsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_trainig_years* updates
    if (t >= 0.0 && Q_trainig_years.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_trainig_years.tStart = t;  // (not accounting for frame time here)
      Q_trainig_years.frameNStart = frameN;  // exact frame index
      
      Q_trainig_years.setAutoDraw(true);
    }
    
    
    // if Q_trainig_years is active this frame...
    if (Q_trainig_years.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textbox_training_years* updates
    if (t >= 0.0 && textbox_training_years.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_training_years.tStart = t;  // (not accounting for frame time here)
      textbox_training_years.frameNStart = frameN;  // exact frame index
      
      textbox_training_years.setAutoDraw(true);
    }
    
    
    // if textbox_training_years is active this frame...
    if (textbox_training_years.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *hint_training_years* updates
    if (t >= 0.0 && hint_training_years.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hint_training_years.tStart = t;  // (not accounting for frame time here)
      hint_training_years.frameNStart = frameN;  // exact frame index
      
      hint_training_years.setAutoDraw(true);
    }
    
    
    // if hint_training_years is active this frame...
    if (hint_training_years.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Q24* updates
    if (t >= 0.0 && Q24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q24.tStart = t;  // (not accounting for frame time here)
      Q24.frameNStart = frameN;  // exact frame index
      
      Q24.setAutoDraw(true);
    }
    
    
    // if Q24 is active this frame...
    if (Q24.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from code_9
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! ("allow_training_years" in psychoJS.experiment))) {
        psychoJS.experiment.allow_advance_training_years = false;
    }
    keys = psychoJS.eventManager.getKeys();
    if (_pj.in_es6("return", keys)) {
        user_input = textbox_training_years.text.trim();
        if ((user_input !== "")) {
            psychoJS.experiment.allow_advance_training_years = true;
        }
    }
    if (psychoJS.experiment.allow_advance_training_years) {
        continueRoutine = false;
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of training_yearsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function training_yearsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'training_years' ---
    for (const thisComponent of training_yearsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('training_years.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox_training_years.text',textbox_training_years.text)
    // Run 'End Routine' code from code_9
    psychoJS.experiment.addData("training_years", textbox_training_years.text);
    
    // the Routine "training_years" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var current_practiceMaxDurationReached;
var current_practiceMaxDuration;
var current_practiceComponents;
function current_practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'current_practice' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    current_practiceClock.reset();
    routineTimer.reset();
    current_practiceMaxDurationReached = false;
    // update component parameters for each repeat
    // reset current_practice_YES to account for continued clicks & clear times on/off
    current_practice_YES.reset()
    // reset current_practice_NO to account for continued clicks & clear times on/off
    current_practice_NO.reset()
    psychoJS.experiment.addData('current_practice.started', globalClock.getTime());
    current_practiceMaxDuration = null
    // keep track of which components have finished
    current_practiceComponents = [];
    current_practiceComponents.push(Q_current_practice);
    current_practiceComponents.push(current_practice_YES);
    current_practiceComponents.push(current_practice_NO);
    current_practiceComponents.push(Q25);
    
    for (const thisComponent of current_practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function current_practiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'current_practice' ---
    // get current time
    t = current_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_current_practice* updates
    if (t >= 0.0 && Q_current_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_current_practice.tStart = t;  // (not accounting for frame time here)
      Q_current_practice.frameNStart = frameN;  // exact frame index
      
      Q_current_practice.setAutoDraw(true);
    }
    
    
    // if Q_current_practice is active this frame...
    if (Q_current_practice.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *current_practice_YES* updates
    if (t >= 0 && current_practice_YES.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      current_practice_YES.tStart = t;  // (not accounting for frame time here)
      current_practice_YES.frameNStart = frameN;  // exact frame index
      
      current_practice_YES.setAutoDraw(true);
    }
    
    
    // if current_practice_YES is active this frame...
    if (current_practice_YES.status === PsychoJS.Status.STARTED) {
    }
    
    if (current_practice_YES.status === PsychoJS.Status.STARTED) {
      // check whether current_practice_YES has been pressed
      if (current_practice_YES.isClicked) {
        if (!current_practice_YES.wasClicked) {
          // store time of first click
          current_practice_YES.timesOn.push(current_practice_YES.clock.getTime());
          // store time clicked until
          current_practice_YES.timesOff.push(current_practice_YES.clock.getTime());
        } else {
          // update time clicked until;
          current_practice_YES.timesOff[current_practice_YES.timesOff.length - 1] = current_practice_YES.clock.getTime();
        }
        if (!current_practice_YES.wasClicked) {
          // end routine when current_practice_YES is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("current_practice", "YES");
        }
        // if current_practice_YES is still clicked next frame, it is not a new click
        current_practice_YES.wasClicked = true;
      } else {
        // if current_practice_YES is clicked next frame, it is a new click
        current_practice_YES.wasClicked = false;
      }
    } else {
      // keep clock at 0 if current_practice_YES hasn't started / has finished
      current_practice_YES.clock.reset();
      // if current_practice_YES is clicked next frame, it is a new click
      current_practice_YES.wasClicked = false;
    }
    
    // *current_practice_NO* updates
    if (t >= 0 && current_practice_NO.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      current_practice_NO.tStart = t;  // (not accounting for frame time here)
      current_practice_NO.frameNStart = frameN;  // exact frame index
      
      current_practice_NO.setAutoDraw(true);
    }
    
    
    // if current_practice_NO is active this frame...
    if (current_practice_NO.status === PsychoJS.Status.STARTED) {
    }
    
    if (current_practice_NO.status === PsychoJS.Status.STARTED) {
      // check whether current_practice_NO has been pressed
      if (current_practice_NO.isClicked) {
        if (!current_practice_NO.wasClicked) {
          // store time of first click
          current_practice_NO.timesOn.push(current_practice_NO.clock.getTime());
          // store time clicked until
          current_practice_NO.timesOff.push(current_practice_NO.clock.getTime());
        } else {
          // update time clicked until;
          current_practice_NO.timesOff[current_practice_NO.timesOff.length - 1] = current_practice_NO.clock.getTime();
        }
        if (!current_practice_NO.wasClicked) {
          // end routine when current_practice_NO is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("current_practice", "NO");
        }
        // if current_practice_NO is still clicked next frame, it is not a new click
        current_practice_NO.wasClicked = true;
      } else {
        // if current_practice_NO is clicked next frame, it is a new click
        current_practice_NO.wasClicked = false;
      }
    } else {
      // keep clock at 0 if current_practice_NO hasn't started / has finished
      current_practice_NO.clock.reset();
      // if current_practice_NO is clicked next frame, it is a new click
      current_practice_NO.wasClicked = false;
    }
    
    // *Q25* updates
    if (t >= 0.0 && Q25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q25.tStart = t;  // (not accounting for frame time here)
      Q25.frameNStart = frameN;  // exact frame index
      
      Q25.setAutoDraw(true);
    }
    
    
    // if Q25 is active this frame...
    if (Q25.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of current_practiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function current_practiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'current_practice' ---
    for (const thisComponent of current_practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('current_practice.stopped', globalClock.getTime());
    psychoJS.experiment.addData('current_practice_YES.numClicks', current_practice_YES.numClicks);
    psychoJS.experiment.addData('current_practice_YES.timesOn', current_practice_YES.timesOn);
    psychoJS.experiment.addData('current_practice_YES.timesOff', current_practice_YES.timesOff);
    psychoJS.experiment.addData('current_practice_NO.numClicks', current_practice_NO.numClicks);
    psychoJS.experiment.addData('current_practice_NO.timesOn', current_practice_NO.timesOn);
    psychoJS.experiment.addData('current_practice_NO.timesOff', current_practice_NO.timesOff);
    // the Routine "current_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var PHQ9_introMaxDurationReached;
var _key_resp_4_allKeys;
var PHQ9_introMaxDuration;
var PHQ9_introComponents;
function PHQ9_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'PHQ9_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    PHQ9_introClock.reset();
    routineTimer.reset();
    PHQ9_introMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    psychoJS.experiment.addData('PHQ9_intro.started', globalClock.getTime());
    PHQ9_introMaxDuration = null
    // keep track of which components have finished
    PHQ9_introComponents = [];
    PHQ9_introComponents.push(PHQ9_intro_image);
    PHQ9_introComponents.push(key_resp_4);
    
    for (const thisComponent of PHQ9_introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function PHQ9_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'PHQ9_intro' ---
    // get current time
    t = PHQ9_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *PHQ9_intro_image* updates
    if (t >= 0.0 && PHQ9_intro_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      PHQ9_intro_image.tStart = t;  // (not accounting for frame time here)
      PHQ9_intro_image.frameNStart = frameN;  // exact frame index
      
      PHQ9_intro_image.setAutoDraw(true);
    }
    
    
    // if PHQ9_intro_image is active this frame...
    if (PHQ9_intro_image.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }
    
    // if key_resp_4 is active this frame...
    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: 'space', waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        key_resp_4.duration = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of PHQ9_introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PHQ9_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'PHQ9_intro' ---
    for (const thisComponent of PHQ9_introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('PHQ9_intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        psychoJS.experiment.addData('key_resp_4.duration', key_resp_4.duration);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "PHQ9_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials_PHQ9;
function trials_PHQ9LoopBegin(trials_PHQ9LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_PHQ9 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'PHQ9Qutext.xlsx',
      seed: undefined, name: 'trials_PHQ9'
    });
    psychoJS.experiment.addLoop(trials_PHQ9); // add the loop to the experiment
    currentLoop = trials_PHQ9;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_PHQ9 of trials_PHQ9) {
      snapshot = trials_PHQ9.getSnapshot();
      trials_PHQ9LoopScheduler.add(importConditions(snapshot));
      trials_PHQ9LoopScheduler.add(PHQ_9RoutineBegin(snapshot));
      trials_PHQ9LoopScheduler.add(PHQ_9RoutineEachFrame());
      trials_PHQ9LoopScheduler.add(PHQ_9RoutineEnd(snapshot));
      trials_PHQ9LoopScheduler.add(trials_PHQ9LoopEndIteration(trials_PHQ9LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_PHQ9LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_PHQ9);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_PHQ9LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_PSQI;
function trials_PSQILoopBegin(trials_PSQILoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_PSQI = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'B_PSQIQUESTIONTEXT5.xlsx',
      seed: undefined, name: 'trials_PSQI'
    });
    psychoJS.experiment.addLoop(trials_PSQI); // add the loop to the experiment
    currentLoop = trials_PSQI;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_PSQI of trials_PSQI) {
      snapshot = trials_PSQI.getSnapshot();
      trials_PSQILoopScheduler.add(importConditions(snapshot));
      trials_PSQILoopScheduler.add(B_PSQI5RoutineBegin(snapshot));
      trials_PSQILoopScheduler.add(B_PSQI5RoutineEachFrame());
      trials_PSQILoopScheduler.add(B_PSQI5RoutineEnd(snapshot));
      trials_PSQILoopScheduler.add(trials_PSQILoopEndIteration(trials_PSQILoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_PSQILoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_PSQI);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_PSQILoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_PSQI_6;
function trials_PSQI_6LoopBegin(trials_PSQI_6LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_PSQI_6 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'B_PSQIQUESTIONTEXT6.xlsx',
      seed: undefined, name: 'trials_PSQI_6'
    });
    psychoJS.experiment.addLoop(trials_PSQI_6); // add the loop to the experiment
    currentLoop = trials_PSQI_6;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_PSQI_6 of trials_PSQI_6) {
      snapshot = trials_PSQI_6.getSnapshot();
      trials_PSQI_6LoopScheduler.add(importConditions(snapshot));
      trials_PSQI_6LoopScheduler.add(B_PSQI6RoutineBegin(snapshot));
      trials_PSQI_6LoopScheduler.add(B_PSQI6RoutineEachFrame());
      trials_PSQI_6LoopScheduler.add(B_PSQI6RoutineEnd(snapshot));
      trials_PSQI_6LoopScheduler.add(trials_PSQI_6LoopEndIteration(trials_PSQI_6LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_PSQI_6LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_PSQI_6);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_PSQI_6LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_DUREL1;
function trials_DUREL1LoopBegin(trials_DUREL1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_DUREL1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'DURELquestion1.xlsx',
      seed: undefined, name: 'trials_DUREL1'
    });
    psychoJS.experiment.addLoop(trials_DUREL1); // add the loop to the experiment
    currentLoop = trials_DUREL1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_DUREL1 of trials_DUREL1) {
      snapshot = trials_DUREL1.getSnapshot();
      trials_DUREL1LoopScheduler.add(importConditions(snapshot));
      trials_DUREL1LoopScheduler.add(DUREL1RoutineBegin(snapshot));
      trials_DUREL1LoopScheduler.add(DUREL1RoutineEachFrame());
      trials_DUREL1LoopScheduler.add(DUREL1RoutineEnd(snapshot));
      trials_DUREL1LoopScheduler.add(trials_DUREL1LoopEndIteration(trials_DUREL1LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_DUREL1LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_DUREL1);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_DUREL1LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_DUREL2;
function trials_DUREL2LoopBegin(trials_DUREL2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_DUREL2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'DURELquestion2.xlsx',
      seed: undefined, name: 'trials_DUREL2'
    });
    psychoJS.experiment.addLoop(trials_DUREL2); // add the loop to the experiment
    currentLoop = trials_DUREL2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_DUREL2 of trials_DUREL2) {
      snapshot = trials_DUREL2.getSnapshot();
      trials_DUREL2LoopScheduler.add(importConditions(snapshot));
      trials_DUREL2LoopScheduler.add(DUREL2RoutineBegin(snapshot));
      trials_DUREL2LoopScheduler.add(DUREL2RoutineEachFrame());
      trials_DUREL2LoopScheduler.add(DUREL2RoutineEnd(snapshot));
      trials_DUREL2LoopScheduler.add(trials_DUREL2LoopEndIteration(trials_DUREL2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_DUREL2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_DUREL2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_DUREL2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_DUREL345;
function trials_DUREL345LoopBegin(trials_DUREL345LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_DUREL345 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'DURELquestion345.xlsx',
      seed: undefined, name: 'trials_DUREL345'
    });
    psychoJS.experiment.addLoop(trials_DUREL345); // add the loop to the experiment
    currentLoop = trials_DUREL345;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_DUREL345 of trials_DUREL345) {
      snapshot = trials_DUREL345.getSnapshot();
      trials_DUREL345LoopScheduler.add(importConditions(snapshot));
      trials_DUREL345LoopScheduler.add(DUREL345RoutineBegin(snapshot));
      trials_DUREL345LoopScheduler.add(DUREL345RoutineEachFrame());
      trials_DUREL345LoopScheduler.add(DUREL345RoutineEnd(snapshot));
      trials_DUREL345LoopScheduler.add(trials_DUREL345LoopEndIteration(trials_DUREL345LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_DUREL345LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_DUREL345);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_DUREL345LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_BMRQ;
function trials_BMRQLoopBegin(trials_BMRQLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_BMRQ = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'BMRQ.xlsx',
      seed: undefined, name: 'trials_BMRQ'
    });
    psychoJS.experiment.addLoop(trials_BMRQ); // add the loop to the experiment
    currentLoop = trials_BMRQ;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_BMRQ of trials_BMRQ) {
      snapshot = trials_BMRQ.getSnapshot();
      trials_BMRQLoopScheduler.add(importConditions(snapshot));
      trials_BMRQLoopScheduler.add(BMRQRoutineBegin(snapshot));
      trials_BMRQLoopScheduler.add(BMRQRoutineEachFrame());
      trials_BMRQLoopScheduler.add(BMRQRoutineEnd(snapshot));
      trials_BMRQLoopScheduler.add(trials_BMRQLoopEndIteration(trials_BMRQLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_BMRQLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_BMRQ);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_BMRQLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_PAI;
function trials_PAILoopBegin(trials_PAILoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_PAI = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'PAI.xlsx',
      seed: undefined, name: 'trials_PAI'
    });
    psychoJS.experiment.addLoop(trials_PAI); // add the loop to the experiment
    currentLoop = trials_PAI;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_PAI of trials_PAI) {
      snapshot = trials_PAI.getSnapshot();
      trials_PAILoopScheduler.add(importConditions(snapshot));
      trials_PAILoopScheduler.add(PAIRoutineBegin(snapshot));
      trials_PAILoopScheduler.add(PAIRoutineEachFrame());
      trials_PAILoopScheduler.add(PAIRoutineEnd(snapshot));
      trials_PAILoopScheduler.add(trials_PAILoopEndIteration(trials_PAILoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_PAILoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_PAI);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_PAILoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_SOI123;
function trials_SOI123LoopBegin(trials_SOI123LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_SOI123 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'SOI123.xlsx',
      seed: undefined, name: 'trials_SOI123'
    });
    psychoJS.experiment.addLoop(trials_SOI123); // add the loop to the experiment
    currentLoop = trials_SOI123;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_SOI123 of trials_SOI123) {
      snapshot = trials_SOI123.getSnapshot();
      trials_SOI123LoopScheduler.add(importConditions(snapshot));
      trials_SOI123LoopScheduler.add(Soi123RoutineBegin(snapshot));
      trials_SOI123LoopScheduler.add(Soi123RoutineEachFrame());
      trials_SOI123LoopScheduler.add(Soi123RoutineEnd(snapshot));
      trials_SOI123LoopScheduler.add(trials_SOI123LoopEndIteration(trials_SOI123LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_SOI123LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_SOI123);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_SOI123LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_SOI456;
function trials_SOI456LoopBegin(trials_SOI456LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_SOI456 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'SOI456.xlsx',
      seed: undefined, name: 'trials_SOI456'
    });
    psychoJS.experiment.addLoop(trials_SOI456); // add the loop to the experiment
    currentLoop = trials_SOI456;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_SOI456 of trials_SOI456) {
      snapshot = trials_SOI456.getSnapshot();
      trials_SOI456LoopScheduler.add(importConditions(snapshot));
      trials_SOI456LoopScheduler.add(Soi456RoutineBegin(snapshot));
      trials_SOI456LoopScheduler.add(Soi456RoutineEachFrame());
      trials_SOI456LoopScheduler.add(Soi456RoutineEnd(snapshot));
      trials_SOI456LoopScheduler.add(trials_SOI456LoopEndIteration(trials_SOI456LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_SOI456LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_SOI456);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_SOI456LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_ATAI;
function trials_ATAILoopBegin(trials_ATAILoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_ATAI = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'ATAIQUESTIONTEXT.xlsx',
      seed: undefined, name: 'trials_ATAI'
    });
    psychoJS.experiment.addLoop(trials_ATAI); // add the loop to the experiment
    currentLoop = trials_ATAI;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_ATAI of trials_ATAI) {
      snapshot = trials_ATAI.getSnapshot();
      trials_ATAILoopScheduler.add(importConditions(snapshot));
      trials_ATAILoopScheduler.add(ATAIRoutineBegin(snapshot));
      trials_ATAILoopScheduler.add(ATAIRoutineEachFrame());
      trials_ATAILoopScheduler.add(ATAIRoutineEnd(snapshot));
      trials_ATAILoopScheduler.add(trials_ATAILoopEndIteration(trials_ATAILoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_ATAILoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_ATAI);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_ATAILoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_BSSS;
function trials_BSSSLoopBegin(trials_BSSSLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_BSSS = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'BSSSQUESTIONTEXT.xlsx',
      seed: undefined, name: 'trials_BSSS'
    });
    psychoJS.experiment.addLoop(trials_BSSS); // add the loop to the experiment
    currentLoop = trials_BSSS;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_BSSS of trials_BSSS) {
      snapshot = trials_BSSS.getSnapshot();
      trials_BSSSLoopScheduler.add(importConditions(snapshot));
      trials_BSSSLoopScheduler.add(BSSSRoutineBegin(snapshot));
      trials_BSSSLoopScheduler.add(BSSSRoutineEachFrame());
      trials_BSSSLoopScheduler.add(BSSSRoutineEnd(snapshot));
      trials_BSSSLoopScheduler.add(trials_BSSSLoopEndIteration(trials_BSSSLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_BSSSLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_BSSS);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_BSSSLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_BPAAT1;
function trials_BPAAT1LoopBegin(trials_BPAAT1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_BPAAT1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'BPAATQT1.xlsx',
      seed: undefined, name: 'trials_BPAAT1'
    });
    psychoJS.experiment.addLoop(trials_BPAAT1); // add the loop to the experiment
    currentLoop = trials_BPAAT1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_BPAAT1 of trials_BPAAT1) {
      snapshot = trials_BPAAT1.getSnapshot();
      trials_BPAAT1LoopScheduler.add(importConditions(snapshot));
      trials_BPAAT1LoopScheduler.add(BPAAT1RoutineBegin(snapshot));
      trials_BPAAT1LoopScheduler.add(BPAAT1RoutineEachFrame());
      trials_BPAAT1LoopScheduler.add(BPAAT1RoutineEnd(snapshot));
      trials_BPAAT1LoopScheduler.add(trials_BPAAT1LoopEndIteration(trials_BPAAT1LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_BPAAT1LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_BPAAT1);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_BPAAT1LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_BPAAT2;
function trials_BPAAT2LoopBegin(trials_BPAAT2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_BPAAT2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'BPAATQT2.xlsx',
      seed: undefined, name: 'trials_BPAAT2'
    });
    psychoJS.experiment.addLoop(trials_BPAAT2); // add the loop to the experiment
    currentLoop = trials_BPAAT2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_BPAAT2 of trials_BPAAT2) {
      snapshot = trials_BPAAT2.getSnapshot();
      trials_BPAAT2LoopScheduler.add(importConditions(snapshot));
      trials_BPAAT2LoopScheduler.add(BPAAT2RoutineBegin(snapshot));
      trials_BPAAT2LoopScheduler.add(BPAAT2RoutineEachFrame());
      trials_BPAAT2LoopScheduler.add(BPAAT2RoutineEnd(snapshot));
      trials_BPAAT2LoopScheduler.add(trials_BPAAT2LoopEndIteration(trials_BPAAT2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_BPAAT2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_BPAAT2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_BPAAT2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var comprehension_loop;
function comprehension_loopLoopBegin(comprehension_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    comprehension_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1000, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'comprehension_loop'
    });
    psychoJS.experiment.addLoop(comprehension_loop); // add the loop to the experiment
    currentLoop = comprehension_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisComprehension_loop of comprehension_loop) {
      snapshot = comprehension_loop.getSnapshot();
      comprehension_loopLoopScheduler.add(importConditions(snapshot));
      const practice_trialsLoopScheduler = new Scheduler(psychoJS);
      comprehension_loopLoopScheduler.add(practice_trialsLoopBegin(practice_trialsLoopScheduler, snapshot));
      comprehension_loopLoopScheduler.add(practice_trialsLoopScheduler);
      comprehension_loopLoopScheduler.add(practice_trialsLoopEnd);
      comprehension_loopLoopScheduler.add(practice_finalScoreRoutineBegin(snapshot));
      comprehension_loopLoopScheduler.add(practice_finalScoreRoutineEachFrame());
      comprehension_loopLoopScheduler.add(practice_finalScoreRoutineEnd(snapshot));
      comprehension_loopLoopScheduler.add(resetmoneypracticeRoutineBegin(snapshot));
      comprehension_loopLoopScheduler.add(resetmoneypracticeRoutineEachFrame());
      comprehension_loopLoopScheduler.add(resetmoneypracticeRoutineEnd(snapshot));
      comprehension_loopLoopScheduler.add(comprehension_checkRoutineBegin(snapshot));
      comprehension_loopLoopScheduler.add(comprehension_checkRoutineEachFrame());
      comprehension_loopLoopScheduler.add(comprehension_checkRoutineEnd(snapshot));
      comprehension_loopLoopScheduler.add(comprehension_loopLoopEndIteration(comprehension_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var practice_trials;
function practice_trialsLoopBegin(practice_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.FULLRANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'spreadsheets/practice_conditions.xlsx',
      seed: undefined, name: 'practice_trials'
    });
    psychoJS.experiment.addLoop(practice_trials); // add the loop to the experiment
    currentLoop = practice_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice_trial of practice_trials) {
      snapshot = practice_trials.getSnapshot();
      practice_trialsLoopScheduler.add(importConditions(snapshot));
      practice_trialsLoopScheduler.add(reset_balloonRoutineBegin(snapshot));
      practice_trialsLoopScheduler.add(reset_balloonRoutineEachFrame());
      practice_trialsLoopScheduler.add(reset_balloonRoutineEnd(snapshot));
      const practice_pumpLoopScheduler = new Scheduler(psychoJS);
      practice_trialsLoopScheduler.add(practice_pumpLoopBegin(practice_pumpLoopScheduler, snapshot));
      practice_trialsLoopScheduler.add(practice_pumpLoopScheduler);
      practice_trialsLoopScheduler.add(practice_pumpLoopEnd);
      practice_trialsLoopScheduler.add(practice_feedbackRoutineBegin(snapshot));
      practice_trialsLoopScheduler.add(practice_feedbackRoutineEachFrame());
      practice_trialsLoopScheduler.add(practice_feedbackRoutineEnd(snapshot));
      practice_trialsLoopScheduler.add(practice_trialsLoopEndIteration(practice_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var practice_pump;
function practice_pumpLoopBegin(practice_pumpLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_pump = new TrialHandler({
      psychoJS: psychoJS,
      nReps: practice_maxPumps, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'practice_pump'
    });
    psychoJS.experiment.addLoop(practice_pump); // add the loop to the experiment
    currentLoop = practice_pump;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice_pump of practice_pump) {
      snapshot = practice_pump.getSnapshot();
      practice_pumpLoopScheduler.add(importConditions(snapshot));
      practice_pumpLoopScheduler.add(practice_trialRoutineBegin(snapshot));
      practice_pumpLoopScheduler.add(practice_trialRoutineEachFrame());
      practice_pumpLoopScheduler.add(practice_trialRoutineEnd(snapshot));
      practice_pumpLoopScheduler.add(practice_pumpLoopEndIteration(practice_pumpLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function practice_pumpLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practice_pump);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function practice_pumpLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function practice_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practice_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function practice_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function comprehension_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(comprehension_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function comprehension_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.FULLRANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'spreadsheets/conditions.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(reset_balloonRoutineBegin(snapshot));
      trialsLoopScheduler.add(reset_balloonRoutineEachFrame());
      trialsLoopScheduler.add(reset_balloonRoutineEnd(snapshot));
      const pumpLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(pumpLoopBegin(pumpLoopScheduler, snapshot));
      trialsLoopScheduler.add(pumpLoopScheduler);
      trialsLoopScheduler.add(pumpLoopEnd);
      trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(feedbackRoutineEachFrame());
      trialsLoopScheduler.add(feedbackRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var pump;
function pumpLoopBegin(pumpLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    pump = new TrialHandler({
      psychoJS: psychoJS,
      nReps: maxPumps, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'pump'
    });
    psychoJS.experiment.addLoop(pump); // add the loop to the experiment
    currentLoop = pump;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPump of pump) {
      snapshot = pump.getSnapshot();
      pumpLoopScheduler.add(importConditions(snapshot));
      pumpLoopScheduler.add(trialRoutineBegin(snapshot));
      pumpLoopScheduler.add(trialRoutineEachFrame());
      pumpLoopScheduler.add(trialRoutineEnd(snapshot));
      pumpLoopScheduler.add(pumpLoopEndIteration(pumpLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function pumpLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(pump);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function pumpLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_fish;
function trials_fishLoopBegin(trials_fishLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_fish = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 100, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_fish'
    });
    psychoJS.experiment.addLoop(trials_fish); // add the loop to the experiment
    currentLoop = trials_fish;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_fish of trials_fish) {
      snapshot = trials_fish.getSnapshot();
      trials_fishLoopScheduler.add(importConditions(snapshot));
      trials_fishLoopScheduler.add(trial_fishRoutineBegin(snapshot));
      trials_fishLoopScheduler.add(trial_fishRoutineEachFrame());
      trials_fishLoopScheduler.add(trial_fishRoutineEnd(snapshot));
      trials_fishLoopScheduler.add(feedback_fishRoutineBegin(snapshot));
      trials_fishLoopScheduler.add(feedback_fishRoutineEachFrame());
      trials_fishLoopScheduler.add(feedback_fishRoutineEnd(snapshot));
      trials_fishLoopScheduler.add(trials_fishLoopEndIteration(trials_fishLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_fishLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_fish);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_fishLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var PHQ_9MaxDurationReached;
var PHQ_9MaxDuration;
var PHQ_9Components;
function PHQ_9RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'PHQ_9' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    PHQ_9Clock.reset();
    routineTimer.reset();
    PHQ_9MaxDurationReached = false;
    // update component parameters for each repeat
    PHQ_9QuestionText.setText(PHQ9qText);
    PHQ_9questionslide.reset()
    Q26toQ34.setText(PHQ9qIndex);
    psychoJS.experiment.addData('PHQ_9.started', globalClock.getTime());
    PHQ_9MaxDuration = null
    // keep track of which components have finished
    PHQ_9Components = [];
    PHQ_9Components.push(PHQ_9QuestionText);
    PHQ_9Components.push(PHQ_9questionslide);
    PHQ_9Components.push(Q26toQ34);
    
    for (const thisComponent of PHQ_9Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function PHQ_9RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'PHQ_9' ---
    // get current time
    t = PHQ_9Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *PHQ_9QuestionText* updates
    if (t >= 0.0 && PHQ_9QuestionText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      PHQ_9QuestionText.tStart = t;  // (not accounting for frame time here)
      PHQ_9QuestionText.frameNStart = frameN;  // exact frame index
      
      PHQ_9QuestionText.setAutoDraw(true);
    }
    
    
    // if PHQ_9QuestionText is active this frame...
    if (PHQ_9QuestionText.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *PHQ_9questionslide* updates
    if (t >= 0.0 && PHQ_9questionslide.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      PHQ_9questionslide.tStart = t;  // (not accounting for frame time here)
      PHQ_9questionslide.frameNStart = frameN;  // exact frame index
      
      PHQ_9questionslide.setAutoDraw(true);
    }
    
    
    // if PHQ_9questionslide is active this frame...
    if (PHQ_9questionslide.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check PHQ_9questionslide for response to end Routine
    if (PHQ_9questionslide.getRating() !== undefined && PHQ_9questionslide.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *Q26toQ34* updates
    if (t >= 0.0 && Q26toQ34.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q26toQ34.tStart = t;  // (not accounting for frame time here)
      Q26toQ34.frameNStart = frameN;  // exact frame index
      
      Q26toQ34.setAutoDraw(true);
    }
    
    
    // if Q26toQ34 is active this frame...
    if (Q26toQ34.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of PHQ_9Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PHQ_9RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'PHQ_9' ---
    for (const thisComponent of PHQ_9Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('PHQ_9.stopped', globalClock.getTime());
    psychoJS.experiment.addData('PHQ_9questionslide.response', PHQ_9questionslide.getRating());
    psychoJS.experiment.addData('PHQ_9questionslide.rt', PHQ_9questionslide.getRT());
    // the Routine "PHQ_9" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var BPSQI_introMaxDurationReached;
var _key_resp_5_allKeys;
var BPSQI_introMaxDuration;
var BPSQI_introComponents;
function BPSQI_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'BPSQI_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    BPSQI_introClock.reset();
    routineTimer.reset();
    BPSQI_introMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    psychoJS.experiment.addData('BPSQI_intro.started', globalClock.getTime());
    BPSQI_introMaxDuration = null
    // keep track of which components have finished
    BPSQI_introComponents = [];
    BPSQI_introComponents.push(BPSQI_intro_image);
    BPSQI_introComponents.push(key_resp_5);
    
    for (const thisComponent of BPSQI_introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function BPSQI_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'BPSQI_intro' ---
    // get current time
    t = BPSQI_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *BPSQI_intro_image* updates
    if (t >= 0.0 && BPSQI_intro_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BPSQI_intro_image.tStart = t;  // (not accounting for frame time here)
      BPSQI_intro_image.frameNStart = frameN;  // exact frame index
      
      BPSQI_intro_image.setAutoDraw(true);
    }
    
    
    // if BPSQI_intro_image is active this frame...
    if (BPSQI_intro_image.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }
    
    // if key_resp_5 is active this frame...
    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: 'space', waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        key_resp_5.duration = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BPSQI_introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BPSQI_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'BPSQI_intro' ---
    for (const thisComponent of BPSQI_introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('BPSQI_intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_5.corr, level);
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        psychoJS.experiment.addData('key_resp_5.duration', key_resp_5.duration);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "BPSQI_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var B_PSQI_Q1_BedTimeMaxDurationReached;
var B_PSQI_Q1_BedTimeMaxDuration;
var B_PSQI_Q1_BedTimeComponents;
function B_PSQI_Q1_BedTimeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'B_PSQI_Q1_BedTime' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    B_PSQI_Q1_BedTimeClock.reset();
    routineTimer.reset();
    B_PSQI_Q1_BedTimeMaxDurationReached = false;
    // update component parameters for each repeat
    textbox_Q1Bedtime.setText('');
    textbox_Q1Bedtime.refresh();
    psychoJS.experiment.addData('B_PSQI_Q1_BedTime.started', globalClock.getTime());
    B_PSQI_Q1_BedTimeMaxDuration = null
    // keep track of which components have finished
    B_PSQI_Q1_BedTimeComponents = [];
    B_PSQI_Q1_BedTimeComponents.push(Q1_BedTime);
    B_PSQI_Q1_BedTimeComponents.push(textbox_Q1Bedtime);
    B_PSQI_Q1_BedTimeComponents.push(enter_hint);
    B_PSQI_Q1_BedTimeComponents.push(Q35);
    
    for (const thisComponent of B_PSQI_Q1_BedTimeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function B_PSQI_Q1_BedTimeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'B_PSQI_Q1_BedTime' ---
    // get current time
    t = B_PSQI_Q1_BedTimeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q1_BedTime* updates
    if (t >= 0.0 && Q1_BedTime.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q1_BedTime.tStart = t;  // (not accounting for frame time here)
      Q1_BedTime.frameNStart = frameN;  // exact frame index
      
      Q1_BedTime.setAutoDraw(true);
    }
    
    
    // if Q1_BedTime is active this frame...
    if (Q1_BedTime.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textbox_Q1Bedtime* updates
    if (t >= 0.0 && textbox_Q1Bedtime.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_Q1Bedtime.tStart = t;  // (not accounting for frame time here)
      textbox_Q1Bedtime.frameNStart = frameN;  // exact frame index
      
      textbox_Q1Bedtime.setAutoDraw(true);
    }
    
    
    // if textbox_Q1Bedtime is active this frame...
    if (textbox_Q1Bedtime.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from code_Q1Bedtime
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! ("allow_advance_Q1" in psychoJS.experiment))) {
        psychoJS.experiment.allow_advance_Q1 = false;
    }
    keys = psychoJS.eventManager.getKeys();
    if (_pj.in_es6("return", keys)) {
        user_input = textbox_Q1Bedtime.text.trim();
        if ((user_input !== "")) {
            psychoJS.experiment.allow_advance_Q1 = true;
        }
    }
    if (psychoJS.experiment.allow_advance_Q1) {
        continueRoutine = false;
    }
    
    
    // *enter_hint* updates
    if (t >= 0.0 && enter_hint.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enter_hint.tStart = t;  // (not accounting for frame time here)
      enter_hint.frameNStart = frameN;  // exact frame index
      
      enter_hint.setAutoDraw(true);
    }
    
    
    // if enter_hint is active this frame...
    if (enter_hint.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Q35* updates
    if (t >= 0.0 && Q35.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q35.tStart = t;  // (not accounting for frame time here)
      Q35.frameNStart = frameN;  // exact frame index
      
      Q35.setAutoDraw(true);
    }
    
    
    // if Q35 is active this frame...
    if (Q35.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of B_PSQI_Q1_BedTimeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function B_PSQI_Q1_BedTimeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'B_PSQI_Q1_BedTime' ---
    for (const thisComponent of B_PSQI_Q1_BedTimeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('B_PSQI_Q1_BedTime.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox_Q1Bedtime.text',textbox_Q1Bedtime.text)
    // Run 'End Routine' code from code_Q1Bedtime
    psychoJS.experiment.addData("Q1_bed_time", textbox_Q1Bedtime.text);
    
    // the Routine "B_PSQI_Q1_BedTime" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var B_PSQI_Q2_WakeTimeMaxDurationReached;
var B_PSQI_Q2_WakeTimeMaxDuration;
var B_PSQI_Q2_WakeTimeComponents;
function B_PSQI_Q2_WakeTimeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'B_PSQI_Q2_WakeTime' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    B_PSQI_Q2_WakeTimeClock.reset();
    routineTimer.reset();
    B_PSQI_Q2_WakeTimeMaxDurationReached = false;
    // update component parameters for each repeat
    textbox_Q2WakeTime.setText('');
    textbox_Q2WakeTime.refresh();
    psychoJS.experiment.addData('B_PSQI_Q2_WakeTime.started', globalClock.getTime());
    B_PSQI_Q2_WakeTimeMaxDuration = null
    // keep track of which components have finished
    B_PSQI_Q2_WakeTimeComponents = [];
    B_PSQI_Q2_WakeTimeComponents.push(Q2_WakeTime);
    B_PSQI_Q2_WakeTimeComponents.push(textbox_Q2WakeTime);
    B_PSQI_Q2_WakeTimeComponents.push(enter_hint_2);
    B_PSQI_Q2_WakeTimeComponents.push(Q36);
    
    for (const thisComponent of B_PSQI_Q2_WakeTimeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function B_PSQI_Q2_WakeTimeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'B_PSQI_Q2_WakeTime' ---
    // get current time
    t = B_PSQI_Q2_WakeTimeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q2_WakeTime* updates
    if (t >= 0.0 && Q2_WakeTime.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q2_WakeTime.tStart = t;  // (not accounting for frame time here)
      Q2_WakeTime.frameNStart = frameN;  // exact frame index
      
      Q2_WakeTime.setAutoDraw(true);
    }
    
    
    // if Q2_WakeTime is active this frame...
    if (Q2_WakeTime.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textbox_Q2WakeTime* updates
    if (t >= 0.0 && textbox_Q2WakeTime.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_Q2WakeTime.tStart = t;  // (not accounting for frame time here)
      textbox_Q2WakeTime.frameNStart = frameN;  // exact frame index
      
      textbox_Q2WakeTime.setAutoDraw(true);
    }
    
    
    // if textbox_Q2WakeTime is active this frame...
    if (textbox_Q2WakeTime.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from code_Q2WakeTime
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! ("allow_advance_Q2" in psychoJS.experiment))) {
        psychoJS.experiment.allow_advance_Q2 = false;
    }
    keys = psychoJS.eventManager.getKeys();
    if (_pj.in_es6("return", keys)) {
        user_input = textbox_Q2WakeTime.text.trim();
        if ((user_input !== "")) {
            psychoJS.experiment.allow_advance_Q2 = true;
        }
    }
    if (psychoJS.experiment.allow_advance_Q2) {
        continueRoutine = false;
    }
    
    
    // *enter_hint_2* updates
    if (t >= 0.0 && enter_hint_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enter_hint_2.tStart = t;  // (not accounting for frame time here)
      enter_hint_2.frameNStart = frameN;  // exact frame index
      
      enter_hint_2.setAutoDraw(true);
    }
    
    
    // if enter_hint_2 is active this frame...
    if (enter_hint_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Q36* updates
    if (t >= 0.0 && Q36.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q36.tStart = t;  // (not accounting for frame time here)
      Q36.frameNStart = frameN;  // exact frame index
      
      Q36.setAutoDraw(true);
    }
    
    
    // if Q36 is active this frame...
    if (Q36.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of B_PSQI_Q2_WakeTimeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function B_PSQI_Q2_WakeTimeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'B_PSQI_Q2_WakeTime' ---
    for (const thisComponent of B_PSQI_Q2_WakeTimeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('B_PSQI_Q2_WakeTime.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox_Q2WakeTime.text',textbox_Q2WakeTime.text)
    // Run 'End Routine' code from code_Q2WakeTime
    psychoJS.experiment.addData("Q2_wake_time", textbox_Q2WakeTime.text);
    
    // the Routine "B_PSQI_Q2_WakeTime" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var B_PSQI_Q3_SleepLatencyMaxDurationReached;
var B_PSQI_Q3_SleepLatencyMaxDuration;
var B_PSQI_Q3_SleepLatencyComponents;
function B_PSQI_Q3_SleepLatencyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'B_PSQI_Q3_SleepLatency' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    B_PSQI_Q3_SleepLatencyClock.reset();
    routineTimer.reset();
    B_PSQI_Q3_SleepLatencyMaxDurationReached = false;
    // update component parameters for each repeat
    textbox_Q3SleepLatency.setText('');
    textbox_Q3SleepLatency.refresh();
    psychoJS.experiment.addData('B_PSQI_Q3_SleepLatency.started', globalClock.getTime());
    B_PSQI_Q3_SleepLatencyMaxDuration = null
    // keep track of which components have finished
    B_PSQI_Q3_SleepLatencyComponents = [];
    B_PSQI_Q3_SleepLatencyComponents.push(Q3_SleepLatency);
    B_PSQI_Q3_SleepLatencyComponents.push(textbox_Q3SleepLatency);
    B_PSQI_Q3_SleepLatencyComponents.push(enter_hint_3);
    B_PSQI_Q3_SleepLatencyComponents.push(Q37);
    
    for (const thisComponent of B_PSQI_Q3_SleepLatencyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function B_PSQI_Q3_SleepLatencyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'B_PSQI_Q3_SleepLatency' ---
    // get current time
    t = B_PSQI_Q3_SleepLatencyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q3_SleepLatency* updates
    if (t >= 0.0 && Q3_SleepLatency.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q3_SleepLatency.tStart = t;  // (not accounting for frame time here)
      Q3_SleepLatency.frameNStart = frameN;  // exact frame index
      
      Q3_SleepLatency.setAutoDraw(true);
    }
    
    
    // if Q3_SleepLatency is active this frame...
    if (Q3_SleepLatency.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textbox_Q3SleepLatency* updates
    if (t >= 0.0 && textbox_Q3SleepLatency.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_Q3SleepLatency.tStart = t;  // (not accounting for frame time here)
      textbox_Q3SleepLatency.frameNStart = frameN;  // exact frame index
      
      textbox_Q3SleepLatency.setAutoDraw(true);
    }
    
    
    // if textbox_Q3SleepLatency is active this frame...
    if (textbox_Q3SleepLatency.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from code_Q3SleepLatency
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! ("allow_advance_Q3" in psychoJS.experiment))) {
        psychoJS.experiment.allow_advance_Q3 = false;
    }
    keys = psychoJS.eventManager.getKeys();
    if (_pj.in_es6("return", keys)) {
        user_input = textbox_Q3SleepLatency.text.trim();
        if ((user_input !== "")) {
            psychoJS.experiment.allow_advance_Q3 = true;
        }
    }
    if (psychoJS.experiment.allow_advance_Q3) {
        continueRoutine = false;
    }
    
    
    // *enter_hint_3* updates
    if (t >= 0.0 && enter_hint_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enter_hint_3.tStart = t;  // (not accounting for frame time here)
      enter_hint_3.frameNStart = frameN;  // exact frame index
      
      enter_hint_3.setAutoDraw(true);
    }
    
    
    // if enter_hint_3 is active this frame...
    if (enter_hint_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Q37* updates
    if (t >= 0.0 && Q37.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q37.tStart = t;  // (not accounting for frame time here)
      Q37.frameNStart = frameN;  // exact frame index
      
      Q37.setAutoDraw(true);
    }
    
    
    // if Q37 is active this frame...
    if (Q37.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of B_PSQI_Q3_SleepLatencyComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function B_PSQI_Q3_SleepLatencyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'B_PSQI_Q3_SleepLatency' ---
    for (const thisComponent of B_PSQI_Q3_SleepLatencyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('B_PSQI_Q3_SleepLatency.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox_Q3SleepLatency.text',textbox_Q3SleepLatency.text)
    // Run 'End Routine' code from code_Q3SleepLatency
    psychoJS.experiment.addData("Q3_sleep_latency", textbox_Q3SleepLatency.text);
    
    // the Routine "B_PSQI_Q3_SleepLatency" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var B_PSQI_Q4_ActualSleepMaxDurationReached;
var B_PSQI_Q4_ActualSleepMaxDuration;
var B_PSQI_Q4_ActualSleepComponents;
function B_PSQI_Q4_ActualSleepRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'B_PSQI_Q4_ActualSleep' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    B_PSQI_Q4_ActualSleepClock.reset();
    routineTimer.reset();
    B_PSQI_Q4_ActualSleepMaxDurationReached = false;
    // update component parameters for each repeat
    textbox_Q4ActualSleep.setText('');
    textbox_Q4ActualSleep.refresh();
    psychoJS.experiment.addData('B_PSQI_Q4_ActualSleep.started', globalClock.getTime());
    B_PSQI_Q4_ActualSleepMaxDuration = null
    // keep track of which components have finished
    B_PSQI_Q4_ActualSleepComponents = [];
    B_PSQI_Q4_ActualSleepComponents.push(Q4_ActualSleep);
    B_PSQI_Q4_ActualSleepComponents.push(textbox_Q4ActualSleep);
    B_PSQI_Q4_ActualSleepComponents.push(enter_hint_4);
    B_PSQI_Q4_ActualSleepComponents.push(Q38);
    B_PSQI_Q4_ActualSleepComponents.push(hint_Q4);
    
    for (const thisComponent of B_PSQI_Q4_ActualSleepComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function B_PSQI_Q4_ActualSleepRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'B_PSQI_Q4_ActualSleep' ---
    // get current time
    t = B_PSQI_Q4_ActualSleepClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q4_ActualSleep* updates
    if (t >= 0.0 && Q4_ActualSleep.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q4_ActualSleep.tStart = t;  // (not accounting for frame time here)
      Q4_ActualSleep.frameNStart = frameN;  // exact frame index
      
      Q4_ActualSleep.setAutoDraw(true);
    }
    
    
    // if Q4_ActualSleep is active this frame...
    if (Q4_ActualSleep.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textbox_Q4ActualSleep* updates
    if (t >= 0.0 && textbox_Q4ActualSleep.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_Q4ActualSleep.tStart = t;  // (not accounting for frame time here)
      textbox_Q4ActualSleep.frameNStart = frameN;  // exact frame index
      
      textbox_Q4ActualSleep.setAutoDraw(true);
    }
    
    
    // if textbox_Q4ActualSleep is active this frame...
    if (textbox_Q4ActualSleep.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from code_Q4ActualSleep
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! ("allow_advance_Q4" in psychoJS.experiment))) {
        psychoJS.experiment.allow_advance_Q4 = false;
    }
    keys = psychoJS.eventManager.getKeys();
    if (_pj.in_es6("return", keys)) {
        user_input = textbox_Q4ActualSleep.text.trim();
        if ((user_input !== "")) {
            psychoJS.experiment.allow_advance_Q4 = true;
        }
    }
    if (psychoJS.experiment.allow_advance_Q4) {
        continueRoutine = false;
    }
    
    
    // *enter_hint_4* updates
    if (t >= 0.0 && enter_hint_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enter_hint_4.tStart = t;  // (not accounting for frame time here)
      enter_hint_4.frameNStart = frameN;  // exact frame index
      
      enter_hint_4.setAutoDraw(true);
    }
    
    
    // if enter_hint_4 is active this frame...
    if (enter_hint_4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Q38* updates
    if (t >= 0.0 && Q38.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q38.tStart = t;  // (not accounting for frame time here)
      Q38.frameNStart = frameN;  // exact frame index
      
      Q38.setAutoDraw(true);
    }
    
    
    // if Q38 is active this frame...
    if (Q38.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *hint_Q4* updates
    if (t >= 0.0 && hint_Q4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hint_Q4.tStart = t;  // (not accounting for frame time here)
      hint_Q4.frameNStart = frameN;  // exact frame index
      
      hint_Q4.setAutoDraw(true);
    }
    
    
    // if hint_Q4 is active this frame...
    if (hint_Q4.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of B_PSQI_Q4_ActualSleepComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function B_PSQI_Q4_ActualSleepRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'B_PSQI_Q4_ActualSleep' ---
    for (const thisComponent of B_PSQI_Q4_ActualSleepComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('B_PSQI_Q4_ActualSleep.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox_Q4ActualSleep.text',textbox_Q4ActualSleep.text)
    // Run 'End Routine' code from code_Q4ActualSleep
    psychoJS.experiment.addData("Q4_actual_sleep_hour", textbox_Q4ActualSleep.text);
    
    // the Routine "B_PSQI_Q4_ActualSleep" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var B_PSQI5MaxDurationReached;
var B_PSQI5MaxDuration;
var B_PSQI5Components;
function B_PSQI5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'B_PSQI5' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    B_PSQI5Clock.reset();
    routineTimer.reset();
    B_PSQI5MaxDurationReached = false;
    // update component parameters for each repeat
    B_PSQIquestionText.setText(PSQI5qText);
    B_PSQIquestionslide.reset()
    Q39.setText('Question 39 of 93\n');
    psychoJS.experiment.addData('B_PSQI5.started', globalClock.getTime());
    B_PSQI5MaxDuration = null
    // keep track of which components have finished
    B_PSQI5Components = [];
    B_PSQI5Components.push(B_PSQIquestionText);
    B_PSQI5Components.push(B_PSQIquestionslide);
    B_PSQI5Components.push(Q39);
    
    for (const thisComponent of B_PSQI5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function B_PSQI5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'B_PSQI5' ---
    // get current time
    t = B_PSQI5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *B_PSQIquestionText* updates
    if (t >= 0.0 && B_PSQIquestionText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      B_PSQIquestionText.tStart = t;  // (not accounting for frame time here)
      B_PSQIquestionText.frameNStart = frameN;  // exact frame index
      
      B_PSQIquestionText.setAutoDraw(true);
    }
    
    
    // if B_PSQIquestionText is active this frame...
    if (B_PSQIquestionText.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *B_PSQIquestionslide* updates
    if (t >= 0.0 && B_PSQIquestionslide.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      B_PSQIquestionslide.tStart = t;  // (not accounting for frame time here)
      B_PSQIquestionslide.frameNStart = frameN;  // exact frame index
      
      B_PSQIquestionslide.setAutoDraw(true);
    }
    
    
    // if B_PSQIquestionslide is active this frame...
    if (B_PSQIquestionslide.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check B_PSQIquestionslide for response to end Routine
    if (B_PSQIquestionslide.getRating() !== undefined && B_PSQIquestionslide.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *Q39* updates
    if (t >= 0.0 && Q39.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q39.tStart = t;  // (not accounting for frame time here)
      Q39.frameNStart = frameN;  // exact frame index
      
      Q39.setAutoDraw(true);
    }
    
    
    // if Q39 is active this frame...
    if (Q39.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of B_PSQI5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function B_PSQI5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'B_PSQI5' ---
    for (const thisComponent of B_PSQI5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('B_PSQI5.stopped', globalClock.getTime());
    psychoJS.experiment.addData('B_PSQIquestionslide.response', B_PSQIquestionslide.getRating());
    psychoJS.experiment.addData('B_PSQIquestionslide.rt', B_PSQIquestionslide.getRT());
    // the Routine "B_PSQI5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var B_PSQI6MaxDurationReached;
var B_PSQI6MaxDuration;
var B_PSQI6Components;
function B_PSQI6RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'B_PSQI6' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    B_PSQI6Clock.reset();
    routineTimer.reset();
    B_PSQI6MaxDurationReached = false;
    // update component parameters for each repeat
    B_PSQIquestionText6.setText(PSQI6qText);
    B_PSQIquestionslide6.reset()
    Q40.setText('Question 40 of 93\n');
    psychoJS.experiment.addData('B_PSQI6.started', globalClock.getTime());
    B_PSQI6MaxDuration = null
    // keep track of which components have finished
    B_PSQI6Components = [];
    B_PSQI6Components.push(B_PSQIquestionText6);
    B_PSQI6Components.push(B_PSQIquestionslide6);
    B_PSQI6Components.push(Q40);
    
    for (const thisComponent of B_PSQI6Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function B_PSQI6RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'B_PSQI6' ---
    // get current time
    t = B_PSQI6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *B_PSQIquestionText6* updates
    if (t >= 0.0 && B_PSQIquestionText6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      B_PSQIquestionText6.tStart = t;  // (not accounting for frame time here)
      B_PSQIquestionText6.frameNStart = frameN;  // exact frame index
      
      B_PSQIquestionText6.setAutoDraw(true);
    }
    
    
    // if B_PSQIquestionText6 is active this frame...
    if (B_PSQIquestionText6.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *B_PSQIquestionslide6* updates
    if (t >= 0.0 && B_PSQIquestionslide6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      B_PSQIquestionslide6.tStart = t;  // (not accounting for frame time here)
      B_PSQIquestionslide6.frameNStart = frameN;  // exact frame index
      
      B_PSQIquestionslide6.setAutoDraw(true);
    }
    
    
    // if B_PSQIquestionslide6 is active this frame...
    if (B_PSQIquestionslide6.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check B_PSQIquestionslide6 for response to end Routine
    if (B_PSQIquestionslide6.getRating() !== undefined && B_PSQIquestionslide6.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *Q40* updates
    if (t >= 0.0 && Q40.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q40.tStart = t;  // (not accounting for frame time here)
      Q40.frameNStart = frameN;  // exact frame index
      
      Q40.setAutoDraw(true);
    }
    
    
    // if Q40 is active this frame...
    if (Q40.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of B_PSQI6Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function B_PSQI6RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'B_PSQI6' ---
    for (const thisComponent of B_PSQI6Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('B_PSQI6.stopped', globalClock.getTime());
    psychoJS.experiment.addData('B_PSQIquestionslide6.response', B_PSQIquestionslide6.getRating());
    psychoJS.experiment.addData('B_PSQIquestionslide6.rt', B_PSQIquestionslide6.getRT());
    // the Routine "B_PSQI6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Durel_introMaxDurationReached;
var _key_resp_6_allKeys;
var Durel_introMaxDuration;
var Durel_introComponents;
function Durel_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Durel_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Durel_introClock.reset();
    routineTimer.reset();
    Durel_introMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    psychoJS.experiment.addData('Durel_intro.started', globalClock.getTime());
    Durel_introMaxDuration = null
    // keep track of which components have finished
    Durel_introComponents = [];
    Durel_introComponents.push(DUREL_intro_image);
    Durel_introComponents.push(key_resp_6);
    
    for (const thisComponent of Durel_introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Durel_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Durel_intro' ---
    // get current time
    t = Durel_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *DUREL_intro_image* updates
    if (t >= 0.0 && DUREL_intro_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      DUREL_intro_image.tStart = t;  // (not accounting for frame time here)
      DUREL_intro_image.frameNStart = frameN;  // exact frame index
      
      DUREL_intro_image.setAutoDraw(true);
    }
    
    
    // if DUREL_intro_image is active this frame...
    if (DUREL_intro_image.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_6* updates
    if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }
    
    // if key_resp_6 is active this frame...
    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: 'space', waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        key_resp_6.duration = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Durel_introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Durel_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Durel_intro' ---
    for (const thisComponent of Durel_introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Durel_intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_6.corr, level);
    }
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        psychoJS.experiment.addData('key_resp_6.duration', key_resp_6.duration);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // the Routine "Durel_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var DUREL1MaxDurationReached;
var DUREL1MaxDuration;
var DUREL1Components;
function DUREL1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'DUREL1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    DUREL1Clock.reset();
    routineTimer.reset();
    DUREL1MaxDurationReached = false;
    // update component parameters for each repeat
    DUREL_questionText.setText(DUREL1qText);
    DURELquestionslide.reset()
    Q41.setText('Question 41 of 93\n');
    psychoJS.experiment.addData('DUREL1.started', globalClock.getTime());
    DUREL1MaxDuration = null
    // keep track of which components have finished
    DUREL1Components = [];
    DUREL1Components.push(DUREL_questionText);
    DUREL1Components.push(DURELquestionslide);
    DUREL1Components.push(Q41);
    
    for (const thisComponent of DUREL1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function DUREL1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'DUREL1' ---
    // get current time
    t = DUREL1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *DUREL_questionText* updates
    if (t >= 0.0 && DUREL_questionText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      DUREL_questionText.tStart = t;  // (not accounting for frame time here)
      DUREL_questionText.frameNStart = frameN;  // exact frame index
      
      DUREL_questionText.setAutoDraw(true);
    }
    
    
    // if DUREL_questionText is active this frame...
    if (DUREL_questionText.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *DURELquestionslide* updates
    if (t >= 0.0 && DURELquestionslide.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      DURELquestionslide.tStart = t;  // (not accounting for frame time here)
      DURELquestionslide.frameNStart = frameN;  // exact frame index
      
      DURELquestionslide.setAutoDraw(true);
    }
    
    
    // if DURELquestionslide is active this frame...
    if (DURELquestionslide.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check DURELquestionslide for response to end Routine
    if (DURELquestionslide.getRating() !== undefined && DURELquestionslide.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *Q41* updates
    if (t >= 0.0 && Q41.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q41.tStart = t;  // (not accounting for frame time here)
      Q41.frameNStart = frameN;  // exact frame index
      
      Q41.setAutoDraw(true);
    }
    
    
    // if Q41 is active this frame...
    if (Q41.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of DUREL1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function DUREL1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'DUREL1' ---
    for (const thisComponent of DUREL1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('DUREL1.stopped', globalClock.getTime());
    psychoJS.experiment.addData('DURELquestionslide.response', DURELquestionslide.getRating());
    psychoJS.experiment.addData('DURELquestionslide.rt', DURELquestionslide.getRT());
    // the Routine "DUREL1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var DUREL2MaxDurationReached;
var DUREL2MaxDuration;
var DUREL2Components;
function DUREL2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'DUREL2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    DUREL2Clock.reset();
    routineTimer.reset();
    DUREL2MaxDurationReached = false;
    // update component parameters for each repeat
    DUREL_questionText2.setText(DUREL2qText);
    DURELquestionslide2.reset()
    Q42.setText('Question 42 of 93\n');
    psychoJS.experiment.addData('DUREL2.started', globalClock.getTime());
    DUREL2MaxDuration = null
    // keep track of which components have finished
    DUREL2Components = [];
    DUREL2Components.push(DUREL_questionText2);
    DUREL2Components.push(DURELquestionslide2);
    DUREL2Components.push(Q42);
    
    for (const thisComponent of DUREL2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function DUREL2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'DUREL2' ---
    // get current time
    t = DUREL2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *DUREL_questionText2* updates
    if (t >= 0.0 && DUREL_questionText2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      DUREL_questionText2.tStart = t;  // (not accounting for frame time here)
      DUREL_questionText2.frameNStart = frameN;  // exact frame index
      
      DUREL_questionText2.setAutoDraw(true);
    }
    
    
    // if DUREL_questionText2 is active this frame...
    if (DUREL_questionText2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *DURELquestionslide2* updates
    if (t >= 0.0 && DURELquestionslide2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      DURELquestionslide2.tStart = t;  // (not accounting for frame time here)
      DURELquestionslide2.frameNStart = frameN;  // exact frame index
      
      DURELquestionslide2.setAutoDraw(true);
    }
    
    
    // if DURELquestionslide2 is active this frame...
    if (DURELquestionslide2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check DURELquestionslide2 for response to end Routine
    if (DURELquestionslide2.getRating() !== undefined && DURELquestionslide2.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *Q42* updates
    if (t >= 0.0 && Q42.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q42.tStart = t;  // (not accounting for frame time here)
      Q42.frameNStart = frameN;  // exact frame index
      
      Q42.setAutoDraw(true);
    }
    
    
    // if Q42 is active this frame...
    if (Q42.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of DUREL2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function DUREL2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'DUREL2' ---
    for (const thisComponent of DUREL2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('DUREL2.stopped', globalClock.getTime());
    psychoJS.experiment.addData('DURELquestionslide2.response', DURELquestionslide2.getRating());
    psychoJS.experiment.addData('DURELquestionslide2.rt', DURELquestionslide2.getRT());
    // the Routine "DUREL2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var DUREL345MaxDurationReached;
var DUREL345MaxDuration;
var DUREL345Components;
function DUREL345RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'DUREL345' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    DUREL345Clock.reset();
    routineTimer.reset();
    DUREL345MaxDurationReached = false;
    // update component parameters for each repeat
    DUREL_questionText345.setText(DUREL345qText);
    DURELquestionslide345.reset()
    Q43toQ45.setText(DUREL345qIndex);
    psychoJS.experiment.addData('DUREL345.started', globalClock.getTime());
    DUREL345MaxDuration = null
    // keep track of which components have finished
    DUREL345Components = [];
    DUREL345Components.push(DUREL_questionText345);
    DUREL345Components.push(DURELquestionslide345);
    DUREL345Components.push(Q43toQ45);
    
    for (const thisComponent of DUREL345Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function DUREL345RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'DUREL345' ---
    // get current time
    t = DUREL345Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *DUREL_questionText345* updates
    if (t >= 0.0 && DUREL_questionText345.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      DUREL_questionText345.tStart = t;  // (not accounting for frame time here)
      DUREL_questionText345.frameNStart = frameN;  // exact frame index
      
      DUREL_questionText345.setAutoDraw(true);
    }
    
    
    // if DUREL_questionText345 is active this frame...
    if (DUREL_questionText345.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *DURELquestionslide345* updates
    if (t >= 0.0 && DURELquestionslide345.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      DURELquestionslide345.tStart = t;  // (not accounting for frame time here)
      DURELquestionslide345.frameNStart = frameN;  // exact frame index
      
      DURELquestionslide345.setAutoDraw(true);
    }
    
    
    // if DURELquestionslide345 is active this frame...
    if (DURELquestionslide345.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check DURELquestionslide345 for response to end Routine
    if (DURELquestionslide345.getRating() !== undefined && DURELquestionslide345.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *Q43toQ45* updates
    if (t >= 0.0 && Q43toQ45.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q43toQ45.tStart = t;  // (not accounting for frame time here)
      Q43toQ45.frameNStart = frameN;  // exact frame index
      
      Q43toQ45.setAutoDraw(true);
    }
    
    
    // if Q43toQ45 is active this frame...
    if (Q43toQ45.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of DUREL345Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function DUREL345RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'DUREL345' ---
    for (const thisComponent of DUREL345Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('DUREL345.stopped', globalClock.getTime());
    psychoJS.experiment.addData('DURELquestionslide345.response', DURELquestionslide345.getRating());
    psychoJS.experiment.addData('DURELquestionslide345.rt', DURELquestionslide345.getRT());
    // the Routine "DUREL345" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var BMRQ_introMaxDurationReached;
var _key_resp_7_allKeys;
var BMRQ_introMaxDuration;
var BMRQ_introComponents;
function BMRQ_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'BMRQ_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    BMRQ_introClock.reset();
    routineTimer.reset();
    BMRQ_introMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    psychoJS.experiment.addData('BMRQ_intro.started', globalClock.getTime());
    BMRQ_introMaxDuration = null
    // keep track of which components have finished
    BMRQ_introComponents = [];
    BMRQ_introComponents.push(BMRQ_intro_image);
    BMRQ_introComponents.push(key_resp_7);
    
    for (const thisComponent of BMRQ_introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function BMRQ_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'BMRQ_intro' ---
    // get current time
    t = BMRQ_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *BMRQ_intro_image* updates
    if (t >= 0.0 && BMRQ_intro_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BMRQ_intro_image.tStart = t;  // (not accounting for frame time here)
      BMRQ_intro_image.frameNStart = frameN;  // exact frame index
      
      BMRQ_intro_image.setAutoDraw(true);
    }
    
    
    // if BMRQ_intro_image is active this frame...
    if (BMRQ_intro_image.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }
    
    // if key_resp_7 is active this frame...
    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: 'space', waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        key_resp_7.duration = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BMRQ_introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BMRQ_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'BMRQ_intro' ---
    for (const thisComponent of BMRQ_introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('BMRQ_intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_7.corr, level);
    }
    psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
    if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
        psychoJS.experiment.addData('key_resp_7.duration', key_resp_7.duration);
        routineTimer.reset();
        }
    
    key_resp_7.stop();
    // the Routine "BMRQ_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var BMRQMaxDurationReached;
var BMRQMaxDuration;
var BMRQComponents;
function BMRQRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'BMRQ' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    BMRQClock.reset();
    routineTimer.reset();
    BMRQMaxDurationReached = false;
    // update component parameters for each repeat
    BMRQ_questionText.setText(BMRQqText);
    BMRQ_slider.reset()
    Q46toQ65.setText(BMRQqIndex);
    psychoJS.experiment.addData('BMRQ.started', globalClock.getTime());
    BMRQMaxDuration = null
    // keep track of which components have finished
    BMRQComponents = [];
    BMRQComponents.push(BMRQ_questionText);
    BMRQComponents.push(BMRQ_slider);
    BMRQComponents.push(Q46toQ65);
    
    for (const thisComponent of BMRQComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function BMRQRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'BMRQ' ---
    // get current time
    t = BMRQClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *BMRQ_questionText* updates
    if (t >= 0.0 && BMRQ_questionText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BMRQ_questionText.tStart = t;  // (not accounting for frame time here)
      BMRQ_questionText.frameNStart = frameN;  // exact frame index
      
      BMRQ_questionText.setAutoDraw(true);
    }
    
    
    // if BMRQ_questionText is active this frame...
    if (BMRQ_questionText.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *BMRQ_slider* updates
    if (t >= 0.0 && BMRQ_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BMRQ_slider.tStart = t;  // (not accounting for frame time here)
      BMRQ_slider.frameNStart = frameN;  // exact frame index
      
      BMRQ_slider.setAutoDraw(true);
    }
    
    
    // if BMRQ_slider is active this frame...
    if (BMRQ_slider.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check BMRQ_slider for response to end Routine
    if (BMRQ_slider.getRating() !== undefined && BMRQ_slider.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *Q46toQ65* updates
    if (t >= 0.0 && Q46toQ65.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q46toQ65.tStart = t;  // (not accounting for frame time here)
      Q46toQ65.frameNStart = frameN;  // exact frame index
      
      Q46toQ65.setAutoDraw(true);
    }
    
    
    // if Q46toQ65 is active this frame...
    if (Q46toQ65.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BMRQComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BMRQRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'BMRQ' ---
    for (const thisComponent of BMRQComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('BMRQ.stopped', globalClock.getTime());
    psychoJS.experiment.addData('BMRQ_slider.response', BMRQ_slider.getRating());
    psychoJS.experiment.addData('BMRQ_slider.rt', BMRQ_slider.getRT());
    // the Routine "BMRQ" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var PAI_introMaxDurationReached;
var _key_resp_8_allKeys;
var PAI_introMaxDuration;
var PAI_introComponents;
function PAI_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'PAI_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    PAI_introClock.reset();
    routineTimer.reset();
    PAI_introMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    psychoJS.experiment.addData('PAI_intro.started', globalClock.getTime());
    PAI_introMaxDuration = null
    // keep track of which components have finished
    PAI_introComponents = [];
    PAI_introComponents.push(PAI_intro_image);
    PAI_introComponents.push(key_resp_8);
    
    for (const thisComponent of PAI_introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function PAI_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'PAI_intro' ---
    // get current time
    t = PAI_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *PAI_intro_image* updates
    if (t >= 0.0 && PAI_intro_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      PAI_intro_image.tStart = t;  // (not accounting for frame time here)
      PAI_intro_image.frameNStart = frameN;  // exact frame index
      
      PAI_intro_image.setAutoDraw(true);
    }
    
    
    // if PAI_intro_image is active this frame...
    if (PAI_intro_image.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_8* updates
    if (t >= 0.0 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
    }
    
    // if key_resp_8 is active this frame...
    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({keyList: 'space', waitRelease: false});
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
        key_resp_8.duration = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of PAI_introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PAI_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'PAI_intro' ---
    for (const thisComponent of PAI_introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('PAI_intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_8.corr, level);
    }
    psychoJS.experiment.addData('key_resp_8.keys', key_resp_8.keys);
    if (typeof key_resp_8.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_8.rt', key_resp_8.rt);
        psychoJS.experiment.addData('key_resp_8.duration', key_resp_8.duration);
        routineTimer.reset();
        }
    
    key_resp_8.stop();
    // the Routine "PAI_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var PAIMaxDurationReached;
var PAIMaxDuration;
var PAIComponents;
function PAIRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'PAI' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    PAIClock.reset();
    routineTimer.reset();
    PAIMaxDurationReached = false;
    // update component parameters for each repeat
    PAI_questionText.setText(PAIqText);
    PAIquestionslide.reset()
    Q66toQ69.setText(PAIqIndex);
    psychoJS.experiment.addData('PAI.started', globalClock.getTime());
    PAIMaxDuration = null
    // keep track of which components have finished
    PAIComponents = [];
    PAIComponents.push(PAI_questionText);
    PAIComponents.push(PAIquestionslide);
    PAIComponents.push(Q66toQ69);
    
    for (const thisComponent of PAIComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function PAIRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'PAI' ---
    // get current time
    t = PAIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *PAI_questionText* updates
    if (t >= 0.0 && PAI_questionText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      PAI_questionText.tStart = t;  // (not accounting for frame time here)
      PAI_questionText.frameNStart = frameN;  // exact frame index
      
      PAI_questionText.setAutoDraw(true);
    }
    
    
    // if PAI_questionText is active this frame...
    if (PAI_questionText.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *PAIquestionslide* updates
    if (t >= 0.0 && PAIquestionslide.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      PAIquestionslide.tStart = t;  // (not accounting for frame time here)
      PAIquestionslide.frameNStart = frameN;  // exact frame index
      
      PAIquestionslide.setAutoDraw(true);
    }
    
    
    // if PAIquestionslide is active this frame...
    if (PAIquestionslide.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check PAIquestionslide for response to end Routine
    if (PAIquestionslide.getRating() !== undefined && PAIquestionslide.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *Q66toQ69* updates
    if (t >= 0.0 && Q66toQ69.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q66toQ69.tStart = t;  // (not accounting for frame time here)
      Q66toQ69.frameNStart = frameN;  // exact frame index
      
      Q66toQ69.setAutoDraw(true);
    }
    
    
    // if Q66toQ69 is active this frame...
    if (Q66toQ69.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of PAIComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PAIRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'PAI' ---
    for (const thisComponent of PAIComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('PAI.stopped', globalClock.getTime());
    psychoJS.experiment.addData('PAIquestionslide.response', PAIquestionslide.getRating());
    psychoJS.experiment.addData('PAIquestionslide.rt', PAIquestionslide.getRT());
    // the Routine "PAI" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var SOI_introMaxDurationReached;
var _key_resp_12_allKeys;
var SOI_introMaxDuration;
var SOI_introComponents;
function SOI_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'SOI_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    SOI_introClock.reset();
    routineTimer.reset();
    SOI_introMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_12.keys = undefined;
    key_resp_12.rt = undefined;
    _key_resp_12_allKeys = [];
    psychoJS.experiment.addData('SOI_intro.started', globalClock.getTime());
    SOI_introMaxDuration = null
    // keep track of which components have finished
    SOI_introComponents = [];
    SOI_introComponents.push(SOI_intro_image);
    SOI_introComponents.push(key_resp_12);
    
    for (const thisComponent of SOI_introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function SOI_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'SOI_intro' ---
    // get current time
    t = SOI_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *SOI_intro_image* updates
    if (t >= 0.0 && SOI_intro_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SOI_intro_image.tStart = t;  // (not accounting for frame time here)
      SOI_intro_image.frameNStart = frameN;  // exact frame index
      
      SOI_intro_image.setAutoDraw(true);
    }
    
    
    // if SOI_intro_image is active this frame...
    if (SOI_intro_image.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_12* updates
    if (t >= 0.0 && key_resp_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_12.tStart = t;  // (not accounting for frame time here)
      key_resp_12.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_12.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_12.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_12.clearEvents(); });
    }
    
    // if key_resp_12 is active this frame...
    if (key_resp_12.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_12.getKeys({keyList: 'space', waitRelease: false});
      _key_resp_12_allKeys = _key_resp_12_allKeys.concat(theseKeys);
      if (_key_resp_12_allKeys.length > 0) {
        key_resp_12.keys = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].name;  // just the last key pressed
        key_resp_12.rt = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].rt;
        key_resp_12.duration = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SOI_introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SOI_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'SOI_intro' ---
    for (const thisComponent of SOI_introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('SOI_intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_12.corr, level);
    }
    psychoJS.experiment.addData('key_resp_12.keys', key_resp_12.keys);
    if (typeof key_resp_12.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_12.rt', key_resp_12.rt);
        psychoJS.experiment.addData('key_resp_12.duration', key_resp_12.duration);
        routineTimer.reset();
        }
    
    key_resp_12.stop();
    // the Routine "SOI_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Soi123MaxDurationReached;
var Soi123MaxDuration;
var Soi123Components;
function Soi123RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Soi123' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Soi123Clock.reset();
    routineTimer.reset();
    Soi123MaxDurationReached = false;
    // update component parameters for each repeat
    Q_Soi123.setText(SOI123qText);
    SOI123_slide.reset()
    Q70toQ72.setText(SOI123qIndex);
    psychoJS.experiment.addData('Soi123.started', globalClock.getTime());
    Soi123MaxDuration = null
    // keep track of which components have finished
    Soi123Components = [];
    Soi123Components.push(Q_Soi123);
    Soi123Components.push(SOI123_slide);
    Soi123Components.push(Q70toQ72);
    Soi123Components.push(text_3);
    
    for (const thisComponent of Soi123Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Soi123RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Soi123' ---
    // get current time
    t = Soi123Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_Soi123* updates
    if (t >= 0.0 && Q_Soi123.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_Soi123.tStart = t;  // (not accounting for frame time here)
      Q_Soi123.frameNStart = frameN;  // exact frame index
      
      Q_Soi123.setAutoDraw(true);
    }
    
    
    // if Q_Soi123 is active this frame...
    if (Q_Soi123.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *SOI123_slide* updates
    if (t >= 0.0 && SOI123_slide.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SOI123_slide.tStart = t;  // (not accounting for frame time here)
      SOI123_slide.frameNStart = frameN;  // exact frame index
      
      SOI123_slide.setAutoDraw(true);
    }
    
    
    // if SOI123_slide is active this frame...
    if (SOI123_slide.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check SOI123_slide for response to end Routine
    if (SOI123_slide.getRating() !== undefined && SOI123_slide.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *Q70toQ72* updates
    if (t >= 0.0 && Q70toQ72.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q70toQ72.tStart = t;  // (not accounting for frame time here)
      Q70toQ72.frameNStart = frameN;  // exact frame index
      
      Q70toQ72.setAutoDraw(true);
    }
    
    
    // if Q70toQ72 is active this frame...
    if (Q70toQ72.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    
    // if text_3 is active this frame...
    if (text_3.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Soi123Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Soi123RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Soi123' ---
    for (const thisComponent of Soi123Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Soi123.stopped', globalClock.getTime());
    psychoJS.experiment.addData('SOI123_slide.response', SOI123_slide.getRating());
    psychoJS.experiment.addData('SOI123_slide.rt', SOI123_slide.getRT());
    // the Routine "Soi123" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Soi456MaxDurationReached;
var Soi456MaxDuration;
var Soi456Components;
function Soi456RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Soi456' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Soi456Clock.reset();
    routineTimer.reset();
    Soi456MaxDurationReached = false;
    // update component parameters for each repeat
    Q_Soi456.setText(SOI456qText);
    SOI456_Slide.reset()
    Q73toQ75.setText(SOI456qIndex);
    SD.setText('Strongly disagree');
    D.setText('Strongly agree');
    psychoJS.experiment.addData('Soi456.started', globalClock.getTime());
    Soi456MaxDuration = null
    // keep track of which components have finished
    Soi456Components = [];
    Soi456Components.push(Q_Soi456);
    Soi456Components.push(SOI456_Slide);
    Soi456Components.push(Q73toQ75);
    Soi456Components.push(text_4);
    Soi456Components.push(SD);
    Soi456Components.push(D);
    
    for (const thisComponent of Soi456Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Soi456RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Soi456' ---
    // get current time
    t = Soi456Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_Soi456* updates
    if (t >= 0.0 && Q_Soi456.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_Soi456.tStart = t;  // (not accounting for frame time here)
      Q_Soi456.frameNStart = frameN;  // exact frame index
      
      Q_Soi456.setAutoDraw(true);
    }
    
    
    // if Q_Soi456 is active this frame...
    if (Q_Soi456.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *SOI456_Slide* updates
    if (t >= 0.0 && SOI456_Slide.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SOI456_Slide.tStart = t;  // (not accounting for frame time here)
      SOI456_Slide.frameNStart = frameN;  // exact frame index
      
      SOI456_Slide.setAutoDraw(true);
    }
    
    
    // if SOI456_Slide is active this frame...
    if (SOI456_Slide.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check SOI456_Slide for response to end Routine
    if (SOI456_Slide.getRating() !== undefined && SOI456_Slide.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *Q73toQ75* updates
    if (t >= 0.0 && Q73toQ75.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q73toQ75.tStart = t;  // (not accounting for frame time here)
      Q73toQ75.frameNStart = frameN;  // exact frame index
      
      Q73toQ75.setAutoDraw(true);
    }
    
    
    // if Q73toQ75 is active this frame...
    if (Q73toQ75.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    
    // if text_4 is active this frame...
    if (text_4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *SD* updates
    if (t >= 0.0 && SD.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SD.tStart = t;  // (not accounting for frame time here)
      SD.frameNStart = frameN;  // exact frame index
      
      SD.setAutoDraw(true);
    }
    
    
    // if SD is active this frame...
    if (SD.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *D* updates
    if (t >= 0.0 && D.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      D.tStart = t;  // (not accounting for frame time here)
      D.frameNStart = frameN;  // exact frame index
      
      D.setAutoDraw(true);
    }
    
    
    // if D is active this frame...
    if (D.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Soi456Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Soi456RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Soi456' ---
    for (const thisComponent of Soi456Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Soi456.stopped', globalClock.getTime());
    psychoJS.experiment.addData('SOI456_Slide.response', SOI456_Slide.getRating());
    psychoJS.experiment.addData('SOI456_Slide.rt', SOI456_Slide.getRT());
    // the Routine "Soi456" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var SOI7MaxDurationReached;
var SOI7MaxDuration;
var SOI7Components;
function SOI7RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'SOI7' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    SOI7Clock.reset();
    routineTimer.reset();
    SOI7MaxDurationReached = false;
    // update component parameters for each repeat
    // reset SOI7_1_never to account for continued clicks & clear times on/off
    SOI7_1_never.reset()
    // reset SOI7_2_veryseldom to account for continued clicks & clear times on/off
    SOI7_2_veryseldom.reset()
    // reset SOI7_3_once_every_2or3_months to account for continued clicks & clear times on/off
    SOI7_3_once_every_2or3_months.reset()
    // reset SOI7_4_onceamonth to account for continued clicks & clear times on/off
    SOI7_4_onceamonth.reset()
    // reset SOI7_5_once_every_two_weeks to account for continued clicks & clear times on/off
    SOI7_5_once_every_two_weeks.reset()
    // reset SOI7_6_onceaweek to account for continued clicks & clear times on/off
    SOI7_6_onceaweek.reset()
    // reset SOI7_7_several_times_per_week to account for continued clicks & clear times on/off
    SOI7_7_several_times_per_week.reset()
    // reset SOI7_8_early_every_day to account for continued clicks & clear times on/off
    SOI7_8_early_every_day.reset()
    // reset SOI7_9_atleastonceaday to account for continued clicks & clear times on/off
    SOI7_9_atleastonceaday.reset()
    psychoJS.experiment.addData('SOI7.started', globalClock.getTime());
    SOI7MaxDuration = null
    // keep track of which components have finished
    SOI7Components = [];
    SOI7Components.push(Q_SOI7);
    SOI7Components.push(SOI7_1_never);
    SOI7Components.push(SOI7_2_veryseldom);
    SOI7Components.push(SOI7_3_once_every_2or3_months);
    SOI7Components.push(SOI7_4_onceamonth);
    SOI7Components.push(SOI7_5_once_every_two_weeks);
    SOI7Components.push(SOI7_6_onceaweek);
    SOI7Components.push(SOI7_7_several_times_per_week);
    SOI7Components.push(SOI7_8_early_every_day);
    SOI7Components.push(SOI7_9_atleastonceaday);
    SOI7Components.push(Q76);
    
    for (const thisComponent of SOI7Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function SOI7RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'SOI7' ---
    // get current time
    t = SOI7Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_SOI7* updates
    if (t >= 0.0 && Q_SOI7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_SOI7.tStart = t;  // (not accounting for frame time here)
      Q_SOI7.frameNStart = frameN;  // exact frame index
      
      Q_SOI7.setAutoDraw(true);
    }
    
    
    // if Q_SOI7 is active this frame...
    if (Q_SOI7.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *SOI7_1_never* updates
    if (t >= 0 && SOI7_1_never.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SOI7_1_never.tStart = t;  // (not accounting for frame time here)
      SOI7_1_never.frameNStart = frameN;  // exact frame index
      
      SOI7_1_never.setAutoDraw(true);
    }
    
    
    // if SOI7_1_never is active this frame...
    if (SOI7_1_never.status === PsychoJS.Status.STARTED) {
    }
    
    if (SOI7_1_never.status === PsychoJS.Status.STARTED) {
      // check whether SOI7_1_never has been pressed
      if (SOI7_1_never.isClicked) {
        if (!SOI7_1_never.wasClicked) {
          // store time of first click
          SOI7_1_never.timesOn.push(SOI7_1_never.clock.getTime());
          // store time clicked until
          SOI7_1_never.timesOff.push(SOI7_1_never.clock.getTime());
        } else {
          // update time clicked until;
          SOI7_1_never.timesOff[SOI7_1_never.timesOff.length - 1] = SOI7_1_never.clock.getTime();
        }
        if (!SOI7_1_never.wasClicked) {
          // end routine when SOI7_1_never is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("SOI7", "1");
        }
        // if SOI7_1_never is still clicked next frame, it is not a new click
        SOI7_1_never.wasClicked = true;
      } else {
        // if SOI7_1_never is clicked next frame, it is a new click
        SOI7_1_never.wasClicked = false;
      }
    } else {
      // keep clock at 0 if SOI7_1_never hasn't started / has finished
      SOI7_1_never.clock.reset();
      // if SOI7_1_never is clicked next frame, it is a new click
      SOI7_1_never.wasClicked = false;
    }
    
    // *SOI7_2_veryseldom* updates
    if (t >= 0 && SOI7_2_veryseldom.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SOI7_2_veryseldom.tStart = t;  // (not accounting for frame time here)
      SOI7_2_veryseldom.frameNStart = frameN;  // exact frame index
      
      SOI7_2_veryseldom.setAutoDraw(true);
    }
    
    
    // if SOI7_2_veryseldom is active this frame...
    if (SOI7_2_veryseldom.status === PsychoJS.Status.STARTED) {
    }
    
    if (SOI7_2_veryseldom.status === PsychoJS.Status.STARTED) {
      // check whether SOI7_2_veryseldom has been pressed
      if (SOI7_2_veryseldom.isClicked) {
        if (!SOI7_2_veryseldom.wasClicked) {
          // store time of first click
          SOI7_2_veryseldom.timesOn.push(SOI7_2_veryseldom.clock.getTime());
          // store time clicked until
          SOI7_2_veryseldom.timesOff.push(SOI7_2_veryseldom.clock.getTime());
        } else {
          // update time clicked until;
          SOI7_2_veryseldom.timesOff[SOI7_2_veryseldom.timesOff.length - 1] = SOI7_2_veryseldom.clock.getTime();
        }
        if (!SOI7_2_veryseldom.wasClicked) {
          // end routine when SOI7_2_veryseldom is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("SOI7", "2");
        }
        // if SOI7_2_veryseldom is still clicked next frame, it is not a new click
        SOI7_2_veryseldom.wasClicked = true;
      } else {
        // if SOI7_2_veryseldom is clicked next frame, it is a new click
        SOI7_2_veryseldom.wasClicked = false;
      }
    } else {
      // keep clock at 0 if SOI7_2_veryseldom hasn't started / has finished
      SOI7_2_veryseldom.clock.reset();
      // if SOI7_2_veryseldom is clicked next frame, it is a new click
      SOI7_2_veryseldom.wasClicked = false;
    }
    
    // *SOI7_3_once_every_2or3_months* updates
    if (t >= 0 && SOI7_3_once_every_2or3_months.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SOI7_3_once_every_2or3_months.tStart = t;  // (not accounting for frame time here)
      SOI7_3_once_every_2or3_months.frameNStart = frameN;  // exact frame index
      
      SOI7_3_once_every_2or3_months.setAutoDraw(true);
    }
    
    
    // if SOI7_3_once_every_2or3_months is active this frame...
    if (SOI7_3_once_every_2or3_months.status === PsychoJS.Status.STARTED) {
    }
    
    if (SOI7_3_once_every_2or3_months.status === PsychoJS.Status.STARTED) {
      // check whether SOI7_3_once_every_2or3_months has been pressed
      if (SOI7_3_once_every_2or3_months.isClicked) {
        if (!SOI7_3_once_every_2or3_months.wasClicked) {
          // store time of first click
          SOI7_3_once_every_2or3_months.timesOn.push(SOI7_3_once_every_2or3_months.clock.getTime());
          // store time clicked until
          SOI7_3_once_every_2or3_months.timesOff.push(SOI7_3_once_every_2or3_months.clock.getTime());
        } else {
          // update time clicked until;
          SOI7_3_once_every_2or3_months.timesOff[SOI7_3_once_every_2or3_months.timesOff.length - 1] = SOI7_3_once_every_2or3_months.clock.getTime();
        }
        if (!SOI7_3_once_every_2or3_months.wasClicked) {
          // end routine when SOI7_3_once_every_2or3_months is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("SOI7", "3");
        }
        // if SOI7_3_once_every_2or3_months is still clicked next frame, it is not a new click
        SOI7_3_once_every_2or3_months.wasClicked = true;
      } else {
        // if SOI7_3_once_every_2or3_months is clicked next frame, it is a new click
        SOI7_3_once_every_2or3_months.wasClicked = false;
      }
    } else {
      // keep clock at 0 if SOI7_3_once_every_2or3_months hasn't started / has finished
      SOI7_3_once_every_2or3_months.clock.reset();
      // if SOI7_3_once_every_2or3_months is clicked next frame, it is a new click
      SOI7_3_once_every_2or3_months.wasClicked = false;
    }
    
    // *SOI7_4_onceamonth* updates
    if (t >= 0 && SOI7_4_onceamonth.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SOI7_4_onceamonth.tStart = t;  // (not accounting for frame time here)
      SOI7_4_onceamonth.frameNStart = frameN;  // exact frame index
      
      SOI7_4_onceamonth.setAutoDraw(true);
    }
    
    
    // if SOI7_4_onceamonth is active this frame...
    if (SOI7_4_onceamonth.status === PsychoJS.Status.STARTED) {
    }
    
    if (SOI7_4_onceamonth.status === PsychoJS.Status.STARTED) {
      // check whether SOI7_4_onceamonth has been pressed
      if (SOI7_4_onceamonth.isClicked) {
        if (!SOI7_4_onceamonth.wasClicked) {
          // store time of first click
          SOI7_4_onceamonth.timesOn.push(SOI7_4_onceamonth.clock.getTime());
          // store time clicked until
          SOI7_4_onceamonth.timesOff.push(SOI7_4_onceamonth.clock.getTime());
        } else {
          // update time clicked until;
          SOI7_4_onceamonth.timesOff[SOI7_4_onceamonth.timesOff.length - 1] = SOI7_4_onceamonth.clock.getTime();
        }
        if (!SOI7_4_onceamonth.wasClicked) {
          // end routine when SOI7_4_onceamonth is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("SOI7", "4");
        }
        // if SOI7_4_onceamonth is still clicked next frame, it is not a new click
        SOI7_4_onceamonth.wasClicked = true;
      } else {
        // if SOI7_4_onceamonth is clicked next frame, it is a new click
        SOI7_4_onceamonth.wasClicked = false;
      }
    } else {
      // keep clock at 0 if SOI7_4_onceamonth hasn't started / has finished
      SOI7_4_onceamonth.clock.reset();
      // if SOI7_4_onceamonth is clicked next frame, it is a new click
      SOI7_4_onceamonth.wasClicked = false;
    }
    
    // *SOI7_5_once_every_two_weeks* updates
    if (t >= 0 && SOI7_5_once_every_two_weeks.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SOI7_5_once_every_two_weeks.tStart = t;  // (not accounting for frame time here)
      SOI7_5_once_every_two_weeks.frameNStart = frameN;  // exact frame index
      
      SOI7_5_once_every_two_weeks.setAutoDraw(true);
    }
    
    
    // if SOI7_5_once_every_two_weeks is active this frame...
    if (SOI7_5_once_every_two_weeks.status === PsychoJS.Status.STARTED) {
    }
    
    if (SOI7_5_once_every_two_weeks.status === PsychoJS.Status.STARTED) {
      // check whether SOI7_5_once_every_two_weeks has been pressed
      if (SOI7_5_once_every_two_weeks.isClicked) {
        if (!SOI7_5_once_every_two_weeks.wasClicked) {
          // store time of first click
          SOI7_5_once_every_two_weeks.timesOn.push(SOI7_5_once_every_two_weeks.clock.getTime());
          // store time clicked until
          SOI7_5_once_every_two_weeks.timesOff.push(SOI7_5_once_every_two_weeks.clock.getTime());
        } else {
          // update time clicked until;
          SOI7_5_once_every_two_weeks.timesOff[SOI7_5_once_every_two_weeks.timesOff.length - 1] = SOI7_5_once_every_two_weeks.clock.getTime();
        }
        if (!SOI7_5_once_every_two_weeks.wasClicked) {
          // end routine when SOI7_5_once_every_two_weeks is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("SOI7", "5");
        }
        // if SOI7_5_once_every_two_weeks is still clicked next frame, it is not a new click
        SOI7_5_once_every_two_weeks.wasClicked = true;
      } else {
        // if SOI7_5_once_every_two_weeks is clicked next frame, it is a new click
        SOI7_5_once_every_two_weeks.wasClicked = false;
      }
    } else {
      // keep clock at 0 if SOI7_5_once_every_two_weeks hasn't started / has finished
      SOI7_5_once_every_two_weeks.clock.reset();
      // if SOI7_5_once_every_two_weeks is clicked next frame, it is a new click
      SOI7_5_once_every_two_weeks.wasClicked = false;
    }
    
    // *SOI7_6_onceaweek* updates
    if (t >= 0 && SOI7_6_onceaweek.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SOI7_6_onceaweek.tStart = t;  // (not accounting for frame time here)
      SOI7_6_onceaweek.frameNStart = frameN;  // exact frame index
      
      SOI7_6_onceaweek.setAutoDraw(true);
    }
    
    
    // if SOI7_6_onceaweek is active this frame...
    if (SOI7_6_onceaweek.status === PsychoJS.Status.STARTED) {
    }
    
    if (SOI7_6_onceaweek.status === PsychoJS.Status.STARTED) {
      // check whether SOI7_6_onceaweek has been pressed
      if (SOI7_6_onceaweek.isClicked) {
        if (!SOI7_6_onceaweek.wasClicked) {
          // store time of first click
          SOI7_6_onceaweek.timesOn.push(SOI7_6_onceaweek.clock.getTime());
          // store time clicked until
          SOI7_6_onceaweek.timesOff.push(SOI7_6_onceaweek.clock.getTime());
        } else {
          // update time clicked until;
          SOI7_6_onceaweek.timesOff[SOI7_6_onceaweek.timesOff.length - 1] = SOI7_6_onceaweek.clock.getTime();
        }
        if (!SOI7_6_onceaweek.wasClicked) {
          // end routine when SOI7_6_onceaweek is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("SOI7", "6");
        }
        // if SOI7_6_onceaweek is still clicked next frame, it is not a new click
        SOI7_6_onceaweek.wasClicked = true;
      } else {
        // if SOI7_6_onceaweek is clicked next frame, it is a new click
        SOI7_6_onceaweek.wasClicked = false;
      }
    } else {
      // keep clock at 0 if SOI7_6_onceaweek hasn't started / has finished
      SOI7_6_onceaweek.clock.reset();
      // if SOI7_6_onceaweek is clicked next frame, it is a new click
      SOI7_6_onceaweek.wasClicked = false;
    }
    
    // *SOI7_7_several_times_per_week* updates
    if (t >= 0 && SOI7_7_several_times_per_week.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SOI7_7_several_times_per_week.tStart = t;  // (not accounting for frame time here)
      SOI7_7_several_times_per_week.frameNStart = frameN;  // exact frame index
      
      SOI7_7_several_times_per_week.setAutoDraw(true);
    }
    
    
    // if SOI7_7_several_times_per_week is active this frame...
    if (SOI7_7_several_times_per_week.status === PsychoJS.Status.STARTED) {
    }
    
    if (SOI7_7_several_times_per_week.status === PsychoJS.Status.STARTED) {
      // check whether SOI7_7_several_times_per_week has been pressed
      if (SOI7_7_several_times_per_week.isClicked) {
        if (!SOI7_7_several_times_per_week.wasClicked) {
          // store time of first click
          SOI7_7_several_times_per_week.timesOn.push(SOI7_7_several_times_per_week.clock.getTime());
          // store time clicked until
          SOI7_7_several_times_per_week.timesOff.push(SOI7_7_several_times_per_week.clock.getTime());
        } else {
          // update time clicked until;
          SOI7_7_several_times_per_week.timesOff[SOI7_7_several_times_per_week.timesOff.length - 1] = SOI7_7_several_times_per_week.clock.getTime();
        }
        if (!SOI7_7_several_times_per_week.wasClicked) {
          // end routine when SOI7_7_several_times_per_week is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("SOI7", "7");
        }
        // if SOI7_7_several_times_per_week is still clicked next frame, it is not a new click
        SOI7_7_several_times_per_week.wasClicked = true;
      } else {
        // if SOI7_7_several_times_per_week is clicked next frame, it is a new click
        SOI7_7_several_times_per_week.wasClicked = false;
      }
    } else {
      // keep clock at 0 if SOI7_7_several_times_per_week hasn't started / has finished
      SOI7_7_several_times_per_week.clock.reset();
      // if SOI7_7_several_times_per_week is clicked next frame, it is a new click
      SOI7_7_several_times_per_week.wasClicked = false;
    }
    
    // *SOI7_8_early_every_day* updates
    if (t >= 0 && SOI7_8_early_every_day.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SOI7_8_early_every_day.tStart = t;  // (not accounting for frame time here)
      SOI7_8_early_every_day.frameNStart = frameN;  // exact frame index
      
      SOI7_8_early_every_day.setAutoDraw(true);
    }
    
    
    // if SOI7_8_early_every_day is active this frame...
    if (SOI7_8_early_every_day.status === PsychoJS.Status.STARTED) {
    }
    
    if (SOI7_8_early_every_day.status === PsychoJS.Status.STARTED) {
      // check whether SOI7_8_early_every_day has been pressed
      if (SOI7_8_early_every_day.isClicked) {
        if (!SOI7_8_early_every_day.wasClicked) {
          // store time of first click
          SOI7_8_early_every_day.timesOn.push(SOI7_8_early_every_day.clock.getTime());
          // store time clicked until
          SOI7_8_early_every_day.timesOff.push(SOI7_8_early_every_day.clock.getTime());
        } else {
          // update time clicked until;
          SOI7_8_early_every_day.timesOff[SOI7_8_early_every_day.timesOff.length - 1] = SOI7_8_early_every_day.clock.getTime();
        }
        if (!SOI7_8_early_every_day.wasClicked) {
          // end routine when SOI7_8_early_every_day is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("SOI7", "8");
        }
        // if SOI7_8_early_every_day is still clicked next frame, it is not a new click
        SOI7_8_early_every_day.wasClicked = true;
      } else {
        // if SOI7_8_early_every_day is clicked next frame, it is a new click
        SOI7_8_early_every_day.wasClicked = false;
      }
    } else {
      // keep clock at 0 if SOI7_8_early_every_day hasn't started / has finished
      SOI7_8_early_every_day.clock.reset();
      // if SOI7_8_early_every_day is clicked next frame, it is a new click
      SOI7_8_early_every_day.wasClicked = false;
    }
    
    // *SOI7_9_atleastonceaday* updates
    if (t >= 0 && SOI7_9_atleastonceaday.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SOI7_9_atleastonceaday.tStart = t;  // (not accounting for frame time here)
      SOI7_9_atleastonceaday.frameNStart = frameN;  // exact frame index
      
      SOI7_9_atleastonceaday.setAutoDraw(true);
    }
    
    
    // if SOI7_9_atleastonceaday is active this frame...
    if (SOI7_9_atleastonceaday.status === PsychoJS.Status.STARTED) {
    }
    
    if (SOI7_9_atleastonceaday.status === PsychoJS.Status.STARTED) {
      // check whether SOI7_9_atleastonceaday has been pressed
      if (SOI7_9_atleastonceaday.isClicked) {
        if (!SOI7_9_atleastonceaday.wasClicked) {
          // store time of first click
          SOI7_9_atleastonceaday.timesOn.push(SOI7_9_atleastonceaday.clock.getTime());
          // store time clicked until
          SOI7_9_atleastonceaday.timesOff.push(SOI7_9_atleastonceaday.clock.getTime());
        } else {
          // update time clicked until;
          SOI7_9_atleastonceaday.timesOff[SOI7_9_atleastonceaday.timesOff.length - 1] = SOI7_9_atleastonceaday.clock.getTime();
        }
        if (!SOI7_9_atleastonceaday.wasClicked) {
          // end routine when SOI7_9_atleastonceaday is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("SOI7", "99");
        }
        // if SOI7_9_atleastonceaday is still clicked next frame, it is not a new click
        SOI7_9_atleastonceaday.wasClicked = true;
      } else {
        // if SOI7_9_atleastonceaday is clicked next frame, it is a new click
        SOI7_9_atleastonceaday.wasClicked = false;
      }
    } else {
      // keep clock at 0 if SOI7_9_atleastonceaday hasn't started / has finished
      SOI7_9_atleastonceaday.clock.reset();
      // if SOI7_9_atleastonceaday is clicked next frame, it is a new click
      SOI7_9_atleastonceaday.wasClicked = false;
    }
    
    // *Q76* updates
    if (t >= 0.0 && Q76.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q76.tStart = t;  // (not accounting for frame time here)
      Q76.frameNStart = frameN;  // exact frame index
      
      Q76.setAutoDraw(true);
    }
    
    
    // if Q76 is active this frame...
    if (Q76.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SOI7Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SOI7RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'SOI7' ---
    for (const thisComponent of SOI7Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('SOI7.stopped', globalClock.getTime());
    psychoJS.experiment.addData('SOI7_1_never.numClicks', SOI7_1_never.numClicks);
    psychoJS.experiment.addData('SOI7_1_never.timesOn', SOI7_1_never.timesOn);
    psychoJS.experiment.addData('SOI7_1_never.timesOff', SOI7_1_never.timesOff);
    psychoJS.experiment.addData('SOI7_2_veryseldom.numClicks', SOI7_2_veryseldom.numClicks);
    psychoJS.experiment.addData('SOI7_2_veryseldom.timesOn', SOI7_2_veryseldom.timesOn);
    psychoJS.experiment.addData('SOI7_2_veryseldom.timesOff', SOI7_2_veryseldom.timesOff);
    psychoJS.experiment.addData('SOI7_3_once_every_2or3_months.numClicks', SOI7_3_once_every_2or3_months.numClicks);
    psychoJS.experiment.addData('SOI7_3_once_every_2or3_months.timesOn', SOI7_3_once_every_2or3_months.timesOn);
    psychoJS.experiment.addData('SOI7_3_once_every_2or3_months.timesOff', SOI7_3_once_every_2or3_months.timesOff);
    psychoJS.experiment.addData('SOI7_4_onceamonth.numClicks', SOI7_4_onceamonth.numClicks);
    psychoJS.experiment.addData('SOI7_4_onceamonth.timesOn', SOI7_4_onceamonth.timesOn);
    psychoJS.experiment.addData('SOI7_4_onceamonth.timesOff', SOI7_4_onceamonth.timesOff);
    psychoJS.experiment.addData('SOI7_5_once_every_two_weeks.numClicks', SOI7_5_once_every_two_weeks.numClicks);
    psychoJS.experiment.addData('SOI7_5_once_every_two_weeks.timesOn', SOI7_5_once_every_two_weeks.timesOn);
    psychoJS.experiment.addData('SOI7_5_once_every_two_weeks.timesOff', SOI7_5_once_every_two_weeks.timesOff);
    psychoJS.experiment.addData('SOI7_6_onceaweek.numClicks', SOI7_6_onceaweek.numClicks);
    psychoJS.experiment.addData('SOI7_6_onceaweek.timesOn', SOI7_6_onceaweek.timesOn);
    psychoJS.experiment.addData('SOI7_6_onceaweek.timesOff', SOI7_6_onceaweek.timesOff);
    psychoJS.experiment.addData('SOI7_7_several_times_per_week.numClicks', SOI7_7_several_times_per_week.numClicks);
    psychoJS.experiment.addData('SOI7_7_several_times_per_week.timesOn', SOI7_7_several_times_per_week.timesOn);
    psychoJS.experiment.addData('SOI7_7_several_times_per_week.timesOff', SOI7_7_several_times_per_week.timesOff);
    psychoJS.experiment.addData('SOI7_8_early_every_day.numClicks', SOI7_8_early_every_day.numClicks);
    psychoJS.experiment.addData('SOI7_8_early_every_day.timesOn', SOI7_8_early_every_day.timesOn);
    psychoJS.experiment.addData('SOI7_8_early_every_day.timesOff', SOI7_8_early_every_day.timesOff);
    psychoJS.experiment.addData('SOI7_9_atleastonceaday.numClicks', SOI7_9_atleastonceaday.numClicks);
    psychoJS.experiment.addData('SOI7_9_atleastonceaday.timesOn', SOI7_9_atleastonceaday.timesOn);
    psychoJS.experiment.addData('SOI7_9_atleastonceaday.timesOff', SOI7_9_atleastonceaday.timesOff);
    // the Routine "SOI7" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var SOI8MaxDurationReached;
var SOI8MaxDuration;
var SOI8Components;
function SOI8RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'SOI8' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    SOI8Clock.reset();
    routineTimer.reset();
    SOI8MaxDurationReached = false;
    // update component parameters for each repeat
    // reset SOI8_1_never to account for continued clicks & clear times on/off
    SOI8_1_never.reset()
    // reset SOI8_2_veryseldom to account for continued clicks & clear times on/off
    SOI8_2_veryseldom.reset()
    // reset SOI8_3_once_every_2or3_months to account for continued clicks & clear times on/off
    SOI8_3_once_every_2or3_months.reset()
    // reset SOI8_4_onceamonth to account for continued clicks & clear times on/off
    SOI8_4_onceamonth.reset()
    // reset SOI8_5_once_every_two_weeks to account for continued clicks & clear times on/off
    SOI8_5_once_every_two_weeks.reset()
    // reset SOI8_6_onceaweek to account for continued clicks & clear times on/off
    SOI8_6_onceaweek.reset()
    // reset SOI8_7_several_times_per_week to account for continued clicks & clear times on/off
    SOI8_7_several_times_per_week.reset()
    // reset SOI8_8_early_every_day to account for continued clicks & clear times on/off
    SOI8_8_early_every_day.reset()
    // reset SOI8_9_atleastonceaday to account for continued clicks & clear times on/off
    SOI8_9_atleastonceaday.reset()
    psychoJS.experiment.addData('SOI8.started', globalClock.getTime());
    SOI8MaxDuration = null
    // keep track of which components have finished
    SOI8Components = [];
    SOI8Components.push(Q_SOI8);
    SOI8Components.push(SOI8_1_never);
    SOI8Components.push(SOI8_2_veryseldom);
    SOI8Components.push(SOI8_3_once_every_2or3_months);
    SOI8Components.push(SOI8_4_onceamonth);
    SOI8Components.push(SOI8_5_once_every_two_weeks);
    SOI8Components.push(SOI8_6_onceaweek);
    SOI8Components.push(SOI8_7_several_times_per_week);
    SOI8Components.push(SOI8_8_early_every_day);
    SOI8Components.push(SOI8_9_atleastonceaday);
    SOI8Components.push(Q77);
    
    for (const thisComponent of SOI8Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function SOI8RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'SOI8' ---
    // get current time
    t = SOI8Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_SOI8* updates
    if (t >= 0.0 && Q_SOI8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_SOI8.tStart = t;  // (not accounting for frame time here)
      Q_SOI8.frameNStart = frameN;  // exact frame index
      
      Q_SOI8.setAutoDraw(true);
    }
    
    
    // if Q_SOI8 is active this frame...
    if (Q_SOI8.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *SOI8_1_never* updates
    if (t >= 0 && SOI8_1_never.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SOI8_1_never.tStart = t;  // (not accounting for frame time here)
      SOI8_1_never.frameNStart = frameN;  // exact frame index
      
      SOI8_1_never.setAutoDraw(true);
    }
    
    
    // if SOI8_1_never is active this frame...
    if (SOI8_1_never.status === PsychoJS.Status.STARTED) {
    }
    
    if (SOI8_1_never.status === PsychoJS.Status.STARTED) {
      // check whether SOI8_1_never has been pressed
      if (SOI8_1_never.isClicked) {
        if (!SOI8_1_never.wasClicked) {
          // store time of first click
          SOI8_1_never.timesOn.push(SOI8_1_never.clock.getTime());
          // store time clicked until
          SOI8_1_never.timesOff.push(SOI8_1_never.clock.getTime());
        } else {
          // update time clicked until;
          SOI8_1_never.timesOff[SOI8_1_never.timesOff.length - 1] = SOI8_1_never.clock.getTime();
        }
        if (!SOI8_1_never.wasClicked) {
          // end routine when SOI8_1_never is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("SOI8", "1");
        }
        // if SOI8_1_never is still clicked next frame, it is not a new click
        SOI8_1_never.wasClicked = true;
      } else {
        // if SOI8_1_never is clicked next frame, it is a new click
        SOI8_1_never.wasClicked = false;
      }
    } else {
      // keep clock at 0 if SOI8_1_never hasn't started / has finished
      SOI8_1_never.clock.reset();
      // if SOI8_1_never is clicked next frame, it is a new click
      SOI8_1_never.wasClicked = false;
    }
    
    // *SOI8_2_veryseldom* updates
    if (t >= 0 && SOI8_2_veryseldom.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SOI8_2_veryseldom.tStart = t;  // (not accounting for frame time here)
      SOI8_2_veryseldom.frameNStart = frameN;  // exact frame index
      
      SOI8_2_veryseldom.setAutoDraw(true);
    }
    
    
    // if SOI8_2_veryseldom is active this frame...
    if (SOI8_2_veryseldom.status === PsychoJS.Status.STARTED) {
    }
    
    if (SOI8_2_veryseldom.status === PsychoJS.Status.STARTED) {
      // check whether SOI8_2_veryseldom has been pressed
      if (SOI8_2_veryseldom.isClicked) {
        if (!SOI8_2_veryseldom.wasClicked) {
          // store time of first click
          SOI8_2_veryseldom.timesOn.push(SOI8_2_veryseldom.clock.getTime());
          // store time clicked until
          SOI8_2_veryseldom.timesOff.push(SOI8_2_veryseldom.clock.getTime());
        } else {
          // update time clicked until;
          SOI8_2_veryseldom.timesOff[SOI8_2_veryseldom.timesOff.length - 1] = SOI8_2_veryseldom.clock.getTime();
        }
        if (!SOI8_2_veryseldom.wasClicked) {
          // end routine when SOI8_2_veryseldom is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("SOI8", "2");
        }
        // if SOI8_2_veryseldom is still clicked next frame, it is not a new click
        SOI8_2_veryseldom.wasClicked = true;
      } else {
        // if SOI8_2_veryseldom is clicked next frame, it is a new click
        SOI8_2_veryseldom.wasClicked = false;
      }
    } else {
      // keep clock at 0 if SOI8_2_veryseldom hasn't started / has finished
      SOI8_2_veryseldom.clock.reset();
      // if SOI8_2_veryseldom is clicked next frame, it is a new click
      SOI8_2_veryseldom.wasClicked = false;
    }
    
    // *SOI8_3_once_every_2or3_months* updates
    if (t >= 0 && SOI8_3_once_every_2or3_months.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SOI8_3_once_every_2or3_months.tStart = t;  // (not accounting for frame time here)
      SOI8_3_once_every_2or3_months.frameNStart = frameN;  // exact frame index
      
      SOI8_3_once_every_2or3_months.setAutoDraw(true);
    }
    
    
    // if SOI8_3_once_every_2or3_months is active this frame...
    if (SOI8_3_once_every_2or3_months.status === PsychoJS.Status.STARTED) {
    }
    
    if (SOI8_3_once_every_2or3_months.status === PsychoJS.Status.STARTED) {
      // check whether SOI8_3_once_every_2or3_months has been pressed
      if (SOI8_3_once_every_2or3_months.isClicked) {
        if (!SOI8_3_once_every_2or3_months.wasClicked) {
          // store time of first click
          SOI8_3_once_every_2or3_months.timesOn.push(SOI8_3_once_every_2or3_months.clock.getTime());
          // store time clicked until
          SOI8_3_once_every_2or3_months.timesOff.push(SOI8_3_once_every_2or3_months.clock.getTime());
        } else {
          // update time clicked until;
          SOI8_3_once_every_2or3_months.timesOff[SOI8_3_once_every_2or3_months.timesOff.length - 1] = SOI8_3_once_every_2or3_months.clock.getTime();
        }
        if (!SOI8_3_once_every_2or3_months.wasClicked) {
          // end routine when SOI8_3_once_every_2or3_months is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("SOI8", "3");
        }
        // if SOI8_3_once_every_2or3_months is still clicked next frame, it is not a new click
        SOI8_3_once_every_2or3_months.wasClicked = true;
      } else {
        // if SOI8_3_once_every_2or3_months is clicked next frame, it is a new click
        SOI8_3_once_every_2or3_months.wasClicked = false;
      }
    } else {
      // keep clock at 0 if SOI8_3_once_every_2or3_months hasn't started / has finished
      SOI8_3_once_every_2or3_months.clock.reset();
      // if SOI8_3_once_every_2or3_months is clicked next frame, it is a new click
      SOI8_3_once_every_2or3_months.wasClicked = false;
    }
    
    // *SOI8_4_onceamonth* updates
    if (t >= 0 && SOI8_4_onceamonth.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SOI8_4_onceamonth.tStart = t;  // (not accounting for frame time here)
      SOI8_4_onceamonth.frameNStart = frameN;  // exact frame index
      
      SOI8_4_onceamonth.setAutoDraw(true);
    }
    
    
    // if SOI8_4_onceamonth is active this frame...
    if (SOI8_4_onceamonth.status === PsychoJS.Status.STARTED) {
    }
    
    if (SOI8_4_onceamonth.status === PsychoJS.Status.STARTED) {
      // check whether SOI8_4_onceamonth has been pressed
      if (SOI8_4_onceamonth.isClicked) {
        if (!SOI8_4_onceamonth.wasClicked) {
          // store time of first click
          SOI8_4_onceamonth.timesOn.push(SOI8_4_onceamonth.clock.getTime());
          // store time clicked until
          SOI8_4_onceamonth.timesOff.push(SOI8_4_onceamonth.clock.getTime());
        } else {
          // update time clicked until;
          SOI8_4_onceamonth.timesOff[SOI8_4_onceamonth.timesOff.length - 1] = SOI8_4_onceamonth.clock.getTime();
        }
        if (!SOI8_4_onceamonth.wasClicked) {
          // end routine when SOI8_4_onceamonth is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("SOI8", "4");
        }
        // if SOI8_4_onceamonth is still clicked next frame, it is not a new click
        SOI8_4_onceamonth.wasClicked = true;
      } else {
        // if SOI8_4_onceamonth is clicked next frame, it is a new click
        SOI8_4_onceamonth.wasClicked = false;
      }
    } else {
      // keep clock at 0 if SOI8_4_onceamonth hasn't started / has finished
      SOI8_4_onceamonth.clock.reset();
      // if SOI8_4_onceamonth is clicked next frame, it is a new click
      SOI8_4_onceamonth.wasClicked = false;
    }
    
    // *SOI8_5_once_every_two_weeks* updates
    if (t >= 0 && SOI8_5_once_every_two_weeks.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SOI8_5_once_every_two_weeks.tStart = t;  // (not accounting for frame time here)
      SOI8_5_once_every_two_weeks.frameNStart = frameN;  // exact frame index
      
      SOI8_5_once_every_two_weeks.setAutoDraw(true);
    }
    
    
    // if SOI8_5_once_every_two_weeks is active this frame...
    if (SOI8_5_once_every_two_weeks.status === PsychoJS.Status.STARTED) {
    }
    
    if (SOI8_5_once_every_two_weeks.status === PsychoJS.Status.STARTED) {
      // check whether SOI8_5_once_every_two_weeks has been pressed
      if (SOI8_5_once_every_two_weeks.isClicked) {
        if (!SOI8_5_once_every_two_weeks.wasClicked) {
          // store time of first click
          SOI8_5_once_every_two_weeks.timesOn.push(SOI8_5_once_every_two_weeks.clock.getTime());
          // store time clicked until
          SOI8_5_once_every_two_weeks.timesOff.push(SOI8_5_once_every_two_weeks.clock.getTime());
        } else {
          // update time clicked until;
          SOI8_5_once_every_two_weeks.timesOff[SOI8_5_once_every_two_weeks.timesOff.length - 1] = SOI8_5_once_every_two_weeks.clock.getTime();
        }
        if (!SOI8_5_once_every_two_weeks.wasClicked) {
          // end routine when SOI8_5_once_every_two_weeks is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("SOI8", "5");
        }
        // if SOI8_5_once_every_two_weeks is still clicked next frame, it is not a new click
        SOI8_5_once_every_two_weeks.wasClicked = true;
      } else {
        // if SOI8_5_once_every_two_weeks is clicked next frame, it is a new click
        SOI8_5_once_every_two_weeks.wasClicked = false;
      }
    } else {
      // keep clock at 0 if SOI8_5_once_every_two_weeks hasn't started / has finished
      SOI8_5_once_every_two_weeks.clock.reset();
      // if SOI8_5_once_every_two_weeks is clicked next frame, it is a new click
      SOI8_5_once_every_two_weeks.wasClicked = false;
    }
    
    // *SOI8_6_onceaweek* updates
    if (t >= 0 && SOI8_6_onceaweek.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SOI8_6_onceaweek.tStart = t;  // (not accounting for frame time here)
      SOI8_6_onceaweek.frameNStart = frameN;  // exact frame index
      
      SOI8_6_onceaweek.setAutoDraw(true);
    }
    
    
    // if SOI8_6_onceaweek is active this frame...
    if (SOI8_6_onceaweek.status === PsychoJS.Status.STARTED) {
    }
    
    if (SOI8_6_onceaweek.status === PsychoJS.Status.STARTED) {
      // check whether SOI8_6_onceaweek has been pressed
      if (SOI8_6_onceaweek.isClicked) {
        if (!SOI8_6_onceaweek.wasClicked) {
          // store time of first click
          SOI8_6_onceaweek.timesOn.push(SOI8_6_onceaweek.clock.getTime());
          // store time clicked until
          SOI8_6_onceaweek.timesOff.push(SOI8_6_onceaweek.clock.getTime());
        } else {
          // update time clicked until;
          SOI8_6_onceaweek.timesOff[SOI8_6_onceaweek.timesOff.length - 1] = SOI8_6_onceaweek.clock.getTime();
        }
        if (!SOI8_6_onceaweek.wasClicked) {
          // end routine when SOI8_6_onceaweek is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("SOI8", "6");
        }
        // if SOI8_6_onceaweek is still clicked next frame, it is not a new click
        SOI8_6_onceaweek.wasClicked = true;
      } else {
        // if SOI8_6_onceaweek is clicked next frame, it is a new click
        SOI8_6_onceaweek.wasClicked = false;
      }
    } else {
      // keep clock at 0 if SOI8_6_onceaweek hasn't started / has finished
      SOI8_6_onceaweek.clock.reset();
      // if SOI8_6_onceaweek is clicked next frame, it is a new click
      SOI8_6_onceaweek.wasClicked = false;
    }
    
    // *SOI8_7_several_times_per_week* updates
    if (t >= 0 && SOI8_7_several_times_per_week.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SOI8_7_several_times_per_week.tStart = t;  // (not accounting for frame time here)
      SOI8_7_several_times_per_week.frameNStart = frameN;  // exact frame index
      
      SOI8_7_several_times_per_week.setAutoDraw(true);
    }
    
    
    // if SOI8_7_several_times_per_week is active this frame...
    if (SOI8_7_several_times_per_week.status === PsychoJS.Status.STARTED) {
    }
    
    if (SOI8_7_several_times_per_week.status === PsychoJS.Status.STARTED) {
      // check whether SOI8_7_several_times_per_week has been pressed
      if (SOI8_7_several_times_per_week.isClicked) {
        if (!SOI8_7_several_times_per_week.wasClicked) {
          // store time of first click
          SOI8_7_several_times_per_week.timesOn.push(SOI8_7_several_times_per_week.clock.getTime());
          // store time clicked until
          SOI8_7_several_times_per_week.timesOff.push(SOI8_7_several_times_per_week.clock.getTime());
        } else {
          // update time clicked until;
          SOI8_7_several_times_per_week.timesOff[SOI8_7_several_times_per_week.timesOff.length - 1] = SOI8_7_several_times_per_week.clock.getTime();
        }
        if (!SOI8_7_several_times_per_week.wasClicked) {
          // end routine when SOI8_7_several_times_per_week is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("SOI8", "7");
        }
        // if SOI8_7_several_times_per_week is still clicked next frame, it is not a new click
        SOI8_7_several_times_per_week.wasClicked = true;
      } else {
        // if SOI8_7_several_times_per_week is clicked next frame, it is a new click
        SOI8_7_several_times_per_week.wasClicked = false;
      }
    } else {
      // keep clock at 0 if SOI8_7_several_times_per_week hasn't started / has finished
      SOI8_7_several_times_per_week.clock.reset();
      // if SOI8_7_several_times_per_week is clicked next frame, it is a new click
      SOI8_7_several_times_per_week.wasClicked = false;
    }
    
    // *SOI8_8_early_every_day* updates
    if (t >= 0 && SOI8_8_early_every_day.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SOI8_8_early_every_day.tStart = t;  // (not accounting for frame time here)
      SOI8_8_early_every_day.frameNStart = frameN;  // exact frame index
      
      SOI8_8_early_every_day.setAutoDraw(true);
    }
    
    
    // if SOI8_8_early_every_day is active this frame...
    if (SOI8_8_early_every_day.status === PsychoJS.Status.STARTED) {
    }
    
    if (SOI8_8_early_every_day.status === PsychoJS.Status.STARTED) {
      // check whether SOI8_8_early_every_day has been pressed
      if (SOI8_8_early_every_day.isClicked) {
        if (!SOI8_8_early_every_day.wasClicked) {
          // store time of first click
          SOI8_8_early_every_day.timesOn.push(SOI8_8_early_every_day.clock.getTime());
          // store time clicked until
          SOI8_8_early_every_day.timesOff.push(SOI8_8_early_every_day.clock.getTime());
        } else {
          // update time clicked until;
          SOI8_8_early_every_day.timesOff[SOI8_8_early_every_day.timesOff.length - 1] = SOI8_8_early_every_day.clock.getTime();
        }
        if (!SOI8_8_early_every_day.wasClicked) {
          // end routine when SOI8_8_early_every_day is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("SOI8", "8");
        }
        // if SOI8_8_early_every_day is still clicked next frame, it is not a new click
        SOI8_8_early_every_day.wasClicked = true;
      } else {
        // if SOI8_8_early_every_day is clicked next frame, it is a new click
        SOI8_8_early_every_day.wasClicked = false;
      }
    } else {
      // keep clock at 0 if SOI8_8_early_every_day hasn't started / has finished
      SOI8_8_early_every_day.clock.reset();
      // if SOI8_8_early_every_day is clicked next frame, it is a new click
      SOI8_8_early_every_day.wasClicked = false;
    }
    
    // *SOI8_9_atleastonceaday* updates
    if (t >= 0 && SOI8_9_atleastonceaday.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SOI8_9_atleastonceaday.tStart = t;  // (not accounting for frame time here)
      SOI8_9_atleastonceaday.frameNStart = frameN;  // exact frame index
      
      SOI8_9_atleastonceaday.setAutoDraw(true);
    }
    
    
    // if SOI8_9_atleastonceaday is active this frame...
    if (SOI8_9_atleastonceaday.status === PsychoJS.Status.STARTED) {
    }
    
    if (SOI8_9_atleastonceaday.status === PsychoJS.Status.STARTED) {
      // check whether SOI8_9_atleastonceaday has been pressed
      if (SOI8_9_atleastonceaday.isClicked) {
        if (!SOI8_9_atleastonceaday.wasClicked) {
          // store time of first click
          SOI8_9_atleastonceaday.timesOn.push(SOI8_9_atleastonceaday.clock.getTime());
          // store time clicked until
          SOI8_9_atleastonceaday.timesOff.push(SOI8_9_atleastonceaday.clock.getTime());
        } else {
          // update time clicked until;
          SOI8_9_atleastonceaday.timesOff[SOI8_9_atleastonceaday.timesOff.length - 1] = SOI8_9_atleastonceaday.clock.getTime();
        }
        if (!SOI8_9_atleastonceaday.wasClicked) {
          // end routine when SOI8_9_atleastonceaday is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("SOI8", "9");
        }
        // if SOI8_9_atleastonceaday is still clicked next frame, it is not a new click
        SOI8_9_atleastonceaday.wasClicked = true;
      } else {
        // if SOI8_9_atleastonceaday is clicked next frame, it is a new click
        SOI8_9_atleastonceaday.wasClicked = false;
      }
    } else {
      // keep clock at 0 if SOI8_9_atleastonceaday hasn't started / has finished
      SOI8_9_atleastonceaday.clock.reset();
      // if SOI8_9_atleastonceaday is clicked next frame, it is a new click
      SOI8_9_atleastonceaday.wasClicked = false;
    }
    
    // *Q77* updates
    if (t >= 0.0 && Q77.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q77.tStart = t;  // (not accounting for frame time here)
      Q77.frameNStart = frameN;  // exact frame index
      
      Q77.setAutoDraw(true);
    }
    
    
    // if Q77 is active this frame...
    if (Q77.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SOI8Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SOI8RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'SOI8' ---
    for (const thisComponent of SOI8Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('SOI8.stopped', globalClock.getTime());
    psychoJS.experiment.addData('SOI8_1_never.numClicks', SOI8_1_never.numClicks);
    psychoJS.experiment.addData('SOI8_1_never.timesOn', SOI8_1_never.timesOn);
    psychoJS.experiment.addData('SOI8_1_never.timesOff', SOI8_1_never.timesOff);
    psychoJS.experiment.addData('SOI8_2_veryseldom.numClicks', SOI8_2_veryseldom.numClicks);
    psychoJS.experiment.addData('SOI8_2_veryseldom.timesOn', SOI8_2_veryseldom.timesOn);
    psychoJS.experiment.addData('SOI8_2_veryseldom.timesOff', SOI8_2_veryseldom.timesOff);
    psychoJS.experiment.addData('SOI8_3_once_every_2or3_months.numClicks', SOI8_3_once_every_2or3_months.numClicks);
    psychoJS.experiment.addData('SOI8_3_once_every_2or3_months.timesOn', SOI8_3_once_every_2or3_months.timesOn);
    psychoJS.experiment.addData('SOI8_3_once_every_2or3_months.timesOff', SOI8_3_once_every_2or3_months.timesOff);
    psychoJS.experiment.addData('SOI8_4_onceamonth.numClicks', SOI8_4_onceamonth.numClicks);
    psychoJS.experiment.addData('SOI8_4_onceamonth.timesOn', SOI8_4_onceamonth.timesOn);
    psychoJS.experiment.addData('SOI8_4_onceamonth.timesOff', SOI8_4_onceamonth.timesOff);
    psychoJS.experiment.addData('SOI8_5_once_every_two_weeks.numClicks', SOI8_5_once_every_two_weeks.numClicks);
    psychoJS.experiment.addData('SOI8_5_once_every_two_weeks.timesOn', SOI8_5_once_every_two_weeks.timesOn);
    psychoJS.experiment.addData('SOI8_5_once_every_two_weeks.timesOff', SOI8_5_once_every_two_weeks.timesOff);
    psychoJS.experiment.addData('SOI8_6_onceaweek.numClicks', SOI8_6_onceaweek.numClicks);
    psychoJS.experiment.addData('SOI8_6_onceaweek.timesOn', SOI8_6_onceaweek.timesOn);
    psychoJS.experiment.addData('SOI8_6_onceaweek.timesOff', SOI8_6_onceaweek.timesOff);
    psychoJS.experiment.addData('SOI8_7_several_times_per_week.numClicks', SOI8_7_several_times_per_week.numClicks);
    psychoJS.experiment.addData('SOI8_7_several_times_per_week.timesOn', SOI8_7_several_times_per_week.timesOn);
    psychoJS.experiment.addData('SOI8_7_several_times_per_week.timesOff', SOI8_7_several_times_per_week.timesOff);
    psychoJS.experiment.addData('SOI8_8_early_every_day.numClicks', SOI8_8_early_every_day.numClicks);
    psychoJS.experiment.addData('SOI8_8_early_every_day.timesOn', SOI8_8_early_every_day.timesOn);
    psychoJS.experiment.addData('SOI8_8_early_every_day.timesOff', SOI8_8_early_every_day.timesOff);
    psychoJS.experiment.addData('SOI8_9_atleastonceaday.numClicks', SOI8_9_atleastonceaday.numClicks);
    psychoJS.experiment.addData('SOI8_9_atleastonceaday.timesOn', SOI8_9_atleastonceaday.timesOn);
    psychoJS.experiment.addData('SOI8_9_atleastonceaday.timesOff', SOI8_9_atleastonceaday.timesOff);
    // the Routine "SOI8" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var SOI9MaxDurationReached;
var SOI9MaxDuration;
var SOI9Components;
function SOI9RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'SOI9' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    SOI9Clock.reset();
    routineTimer.reset();
    SOI9MaxDurationReached = false;
    // update component parameters for each repeat
    // reset SOI9_1_never to account for continued clicks & clear times on/off
    SOI9_1_never.reset()
    // reset SOI9_2_veryseldom to account for continued clicks & clear times on/off
    SOI9_2_veryseldom.reset()
    // reset SOI9_3_once_every_2or3_months to account for continued clicks & clear times on/off
    SOI9_3_once_every_2or3_months.reset()
    // reset SOI9_4_onceamonth to account for continued clicks & clear times on/off
    SOI9_4_onceamonth.reset()
    // reset SOI9_5_once_every_two_weeks to account for continued clicks & clear times on/off
    SOI9_5_once_every_two_weeks.reset()
    // reset SOI9_6_onceaweek to account for continued clicks & clear times on/off
    SOI9_6_onceaweek.reset()
    // reset SOI9_7_several_times_per_week to account for continued clicks & clear times on/off
    SOI9_7_several_times_per_week.reset()
    // reset SOI9_8_early_every_day to account for continued clicks & clear times on/off
    SOI9_8_early_every_day.reset()
    // reset SOI9_9_atleastonceaday to account for continued clicks & clear times on/off
    SOI9_9_atleastonceaday.reset()
    psychoJS.experiment.addData('SOI9.started', globalClock.getTime());
    SOI9MaxDuration = null
    // keep track of which components have finished
    SOI9Components = [];
    SOI9Components.push(Q_SOI9);
    SOI9Components.push(SOI9_1_never);
    SOI9Components.push(SOI9_2_veryseldom);
    SOI9Components.push(SOI9_3_once_every_2or3_months);
    SOI9Components.push(SOI9_4_onceamonth);
    SOI9Components.push(SOI9_5_once_every_two_weeks);
    SOI9Components.push(SOI9_6_onceaweek);
    SOI9Components.push(SOI9_7_several_times_per_week);
    SOI9Components.push(SOI9_8_early_every_day);
    SOI9Components.push(SOI9_9_atleastonceaday);
    SOI9Components.push(Q78);
    
    for (const thisComponent of SOI9Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function SOI9RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'SOI9' ---
    // get current time
    t = SOI9Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Q_SOI9* updates
    if (t >= 0.0 && Q_SOI9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q_SOI9.tStart = t;  // (not accounting for frame time here)
      Q_SOI9.frameNStart = frameN;  // exact frame index
      
      Q_SOI9.setAutoDraw(true);
    }
    
    
    // if Q_SOI9 is active this frame...
    if (Q_SOI9.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *SOI9_1_never* updates
    if (t >= 0 && SOI9_1_never.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SOI9_1_never.tStart = t;  // (not accounting for frame time here)
      SOI9_1_never.frameNStart = frameN;  // exact frame index
      
      SOI9_1_never.setAutoDraw(true);
    }
    
    
    // if SOI9_1_never is active this frame...
    if (SOI9_1_never.status === PsychoJS.Status.STARTED) {
    }
    
    if (SOI9_1_never.status === PsychoJS.Status.STARTED) {
      // check whether SOI9_1_never has been pressed
      if (SOI9_1_never.isClicked) {
        if (!SOI9_1_never.wasClicked) {
          // store time of first click
          SOI9_1_never.timesOn.push(SOI9_1_never.clock.getTime());
          // store time clicked until
          SOI9_1_never.timesOff.push(SOI9_1_never.clock.getTime());
        } else {
          // update time clicked until;
          SOI9_1_never.timesOff[SOI9_1_never.timesOff.length - 1] = SOI9_1_never.clock.getTime();
        }
        if (!SOI9_1_never.wasClicked) {
          // end routine when SOI9_1_never is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("SOI9", "1");
        }
        // if SOI9_1_never is still clicked next frame, it is not a new click
        SOI9_1_never.wasClicked = true;
      } else {
        // if SOI9_1_never is clicked next frame, it is a new click
        SOI9_1_never.wasClicked = false;
      }
    } else {
      // keep clock at 0 if SOI9_1_never hasn't started / has finished
      SOI9_1_never.clock.reset();
      // if SOI9_1_never is clicked next frame, it is a new click
      SOI9_1_never.wasClicked = false;
    }
    
    // *SOI9_2_veryseldom* updates
    if (t >= 0 && SOI9_2_veryseldom.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SOI9_2_veryseldom.tStart = t;  // (not accounting for frame time here)
      SOI9_2_veryseldom.frameNStart = frameN;  // exact frame index
      
      SOI9_2_veryseldom.setAutoDraw(true);
    }
    
    
    // if SOI9_2_veryseldom is active this frame...
    if (SOI9_2_veryseldom.status === PsychoJS.Status.STARTED) {
    }
    
    if (SOI9_2_veryseldom.status === PsychoJS.Status.STARTED) {
      // check whether SOI9_2_veryseldom has been pressed
      if (SOI9_2_veryseldom.isClicked) {
        if (!SOI9_2_veryseldom.wasClicked) {
          // store time of first click
          SOI9_2_veryseldom.timesOn.push(SOI9_2_veryseldom.clock.getTime());
          // store time clicked until
          SOI9_2_veryseldom.timesOff.push(SOI9_2_veryseldom.clock.getTime());
        } else {
          // update time clicked until;
          SOI9_2_veryseldom.timesOff[SOI9_2_veryseldom.timesOff.length - 1] = SOI9_2_veryseldom.clock.getTime();
        }
        if (!SOI9_2_veryseldom.wasClicked) {
          // end routine when SOI9_2_veryseldom is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("SOI9", "2");
        }
        // if SOI9_2_veryseldom is still clicked next frame, it is not a new click
        SOI9_2_veryseldom.wasClicked = true;
      } else {
        // if SOI9_2_veryseldom is clicked next frame, it is a new click
        SOI9_2_veryseldom.wasClicked = false;
      }
    } else {
      // keep clock at 0 if SOI9_2_veryseldom hasn't started / has finished
      SOI9_2_veryseldom.clock.reset();
      // if SOI9_2_veryseldom is clicked next frame, it is a new click
      SOI9_2_veryseldom.wasClicked = false;
    }
    
    // *SOI9_3_once_every_2or3_months* updates
    if (t >= 0 && SOI9_3_once_every_2or3_months.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SOI9_3_once_every_2or3_months.tStart = t;  // (not accounting for frame time here)
      SOI9_3_once_every_2or3_months.frameNStart = frameN;  // exact frame index
      
      SOI9_3_once_every_2or3_months.setAutoDraw(true);
    }
    
    
    // if SOI9_3_once_every_2or3_months is active this frame...
    if (SOI9_3_once_every_2or3_months.status === PsychoJS.Status.STARTED) {
    }
    
    if (SOI9_3_once_every_2or3_months.status === PsychoJS.Status.STARTED) {
      // check whether SOI9_3_once_every_2or3_months has been pressed
      if (SOI9_3_once_every_2or3_months.isClicked) {
        if (!SOI9_3_once_every_2or3_months.wasClicked) {
          // store time of first click
          SOI9_3_once_every_2or3_months.timesOn.push(SOI9_3_once_every_2or3_months.clock.getTime());
          // store time clicked until
          SOI9_3_once_every_2or3_months.timesOff.push(SOI9_3_once_every_2or3_months.clock.getTime());
        } else {
          // update time clicked until;
          SOI9_3_once_every_2or3_months.timesOff[SOI9_3_once_every_2or3_months.timesOff.length - 1] = SOI9_3_once_every_2or3_months.clock.getTime();
        }
        if (!SOI9_3_once_every_2or3_months.wasClicked) {
          // end routine when SOI9_3_once_every_2or3_months is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("SOI9", "3");
        }
        // if SOI9_3_once_every_2or3_months is still clicked next frame, it is not a new click
        SOI9_3_once_every_2or3_months.wasClicked = true;
      } else {
        // if SOI9_3_once_every_2or3_months is clicked next frame, it is a new click
        SOI9_3_once_every_2or3_months.wasClicked = false;
      }
    } else {
      // keep clock at 0 if SOI9_3_once_every_2or3_months hasn't started / has finished
      SOI9_3_once_every_2or3_months.clock.reset();
      // if SOI9_3_once_every_2or3_months is clicked next frame, it is a new click
      SOI9_3_once_every_2or3_months.wasClicked = false;
    }
    
    // *SOI9_4_onceamonth* updates
    if (t >= 0 && SOI9_4_onceamonth.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SOI9_4_onceamonth.tStart = t;  // (not accounting for frame time here)
      SOI9_4_onceamonth.frameNStart = frameN;  // exact frame index
      
      SOI9_4_onceamonth.setAutoDraw(true);
    }
    
    
    // if SOI9_4_onceamonth is active this frame...
    if (SOI9_4_onceamonth.status === PsychoJS.Status.STARTED) {
    }
    
    if (SOI9_4_onceamonth.status === PsychoJS.Status.STARTED) {
      // check whether SOI9_4_onceamonth has been pressed
      if (SOI9_4_onceamonth.isClicked) {
        if (!SOI9_4_onceamonth.wasClicked) {
          // store time of first click
          SOI9_4_onceamonth.timesOn.push(SOI9_4_onceamonth.clock.getTime());
          // store time clicked until
          SOI9_4_onceamonth.timesOff.push(SOI9_4_onceamonth.clock.getTime());
        } else {
          // update time clicked until;
          SOI9_4_onceamonth.timesOff[SOI9_4_onceamonth.timesOff.length - 1] = SOI9_4_onceamonth.clock.getTime();
        }
        if (!SOI9_4_onceamonth.wasClicked) {
          // end routine when SOI9_4_onceamonth is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("SOI9", "4");
        }
        // if SOI9_4_onceamonth is still clicked next frame, it is not a new click
        SOI9_4_onceamonth.wasClicked = true;
      } else {
        // if SOI9_4_onceamonth is clicked next frame, it is a new click
        SOI9_4_onceamonth.wasClicked = false;
      }
    } else {
      // keep clock at 0 if SOI9_4_onceamonth hasn't started / has finished
      SOI9_4_onceamonth.clock.reset();
      // if SOI9_4_onceamonth is clicked next frame, it is a new click
      SOI9_4_onceamonth.wasClicked = false;
    }
    
    // *SOI9_5_once_every_two_weeks* updates
    if (t >= 0 && SOI9_5_once_every_two_weeks.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SOI9_5_once_every_two_weeks.tStart = t;  // (not accounting for frame time here)
      SOI9_5_once_every_two_weeks.frameNStart = frameN;  // exact frame index
      
      SOI9_5_once_every_two_weeks.setAutoDraw(true);
    }
    
    
    // if SOI9_5_once_every_two_weeks is active this frame...
    if (SOI9_5_once_every_two_weeks.status === PsychoJS.Status.STARTED) {
    }
    
    if (SOI9_5_once_every_two_weeks.status === PsychoJS.Status.STARTED) {
      // check whether SOI9_5_once_every_two_weeks has been pressed
      if (SOI9_5_once_every_two_weeks.isClicked) {
        if (!SOI9_5_once_every_two_weeks.wasClicked) {
          // store time of first click
          SOI9_5_once_every_two_weeks.timesOn.push(SOI9_5_once_every_two_weeks.clock.getTime());
          // store time clicked until
          SOI9_5_once_every_two_weeks.timesOff.push(SOI9_5_once_every_two_weeks.clock.getTime());
        } else {
          // update time clicked until;
          SOI9_5_once_every_two_weeks.timesOff[SOI9_5_once_every_two_weeks.timesOff.length - 1] = SOI9_5_once_every_two_weeks.clock.getTime();
        }
        if (!SOI9_5_once_every_two_weeks.wasClicked) {
          // end routine when SOI9_5_once_every_two_weeks is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("SOI9", "5");
        }
        // if SOI9_5_once_every_two_weeks is still clicked next frame, it is not a new click
        SOI9_5_once_every_two_weeks.wasClicked = true;
      } else {
        // if SOI9_5_once_every_two_weeks is clicked next frame, it is a new click
        SOI9_5_once_every_two_weeks.wasClicked = false;
      }
    } else {
      // keep clock at 0 if SOI9_5_once_every_two_weeks hasn't started / has finished
      SOI9_5_once_every_two_weeks.clock.reset();
      // if SOI9_5_once_every_two_weeks is clicked next frame, it is a new click
      SOI9_5_once_every_two_weeks.wasClicked = false;
    }
    
    // *SOI9_6_onceaweek* updates
    if (t >= 0 && SOI9_6_onceaweek.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SOI9_6_onceaweek.tStart = t;  // (not accounting for frame time here)
      SOI9_6_onceaweek.frameNStart = frameN;  // exact frame index
      
      SOI9_6_onceaweek.setAutoDraw(true);
    }
    
    
    // if SOI9_6_onceaweek is active this frame...
    if (SOI9_6_onceaweek.status === PsychoJS.Status.STARTED) {
    }
    
    if (SOI9_6_onceaweek.status === PsychoJS.Status.STARTED) {
      // check whether SOI9_6_onceaweek has been pressed
      if (SOI9_6_onceaweek.isClicked) {
        if (!SOI9_6_onceaweek.wasClicked) {
          // store time of first click
          SOI9_6_onceaweek.timesOn.push(SOI9_6_onceaweek.clock.getTime());
          // store time clicked until
          SOI9_6_onceaweek.timesOff.push(SOI9_6_onceaweek.clock.getTime());
        } else {
          // update time clicked until;
          SOI9_6_onceaweek.timesOff[SOI9_6_onceaweek.timesOff.length - 1] = SOI9_6_onceaweek.clock.getTime();
        }
        if (!SOI9_6_onceaweek.wasClicked) {
          // end routine when SOI9_6_onceaweek is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("SOI9", "6");
        }
        // if SOI9_6_onceaweek is still clicked next frame, it is not a new click
        SOI9_6_onceaweek.wasClicked = true;
      } else {
        // if SOI9_6_onceaweek is clicked next frame, it is a new click
        SOI9_6_onceaweek.wasClicked = false;
      }
    } else {
      // keep clock at 0 if SOI9_6_onceaweek hasn't started / has finished
      SOI9_6_onceaweek.clock.reset();
      // if SOI9_6_onceaweek is clicked next frame, it is a new click
      SOI9_6_onceaweek.wasClicked = false;
    }
    
    // *SOI9_7_several_times_per_week* updates
    if (t >= 0 && SOI9_7_several_times_per_week.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SOI9_7_several_times_per_week.tStart = t;  // (not accounting for frame time here)
      SOI9_7_several_times_per_week.frameNStart = frameN;  // exact frame index
      
      SOI9_7_several_times_per_week.setAutoDraw(true);
    }
    
    
    // if SOI9_7_several_times_per_week is active this frame...
    if (SOI9_7_several_times_per_week.status === PsychoJS.Status.STARTED) {
    }
    
    if (SOI9_7_several_times_per_week.status === PsychoJS.Status.STARTED) {
      // check whether SOI9_7_several_times_per_week has been pressed
      if (SOI9_7_several_times_per_week.isClicked) {
        if (!SOI9_7_several_times_per_week.wasClicked) {
          // store time of first click
          SOI9_7_several_times_per_week.timesOn.push(SOI9_7_several_times_per_week.clock.getTime());
          // store time clicked until
          SOI9_7_several_times_per_week.timesOff.push(SOI9_7_several_times_per_week.clock.getTime());
        } else {
          // update time clicked until;
          SOI9_7_several_times_per_week.timesOff[SOI9_7_several_times_per_week.timesOff.length - 1] = SOI9_7_several_times_per_week.clock.getTime();
        }
        if (!SOI9_7_several_times_per_week.wasClicked) {
          // end routine when SOI9_7_several_times_per_week is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("SOI9", "7");
        }
        // if SOI9_7_several_times_per_week is still clicked next frame, it is not a new click
        SOI9_7_several_times_per_week.wasClicked = true;
      } else {
        // if SOI9_7_several_times_per_week is clicked next frame, it is a new click
        SOI9_7_several_times_per_week.wasClicked = false;
      }
    } else {
      // keep clock at 0 if SOI9_7_several_times_per_week hasn't started / has finished
      SOI9_7_several_times_per_week.clock.reset();
      // if SOI9_7_several_times_per_week is clicked next frame, it is a new click
      SOI9_7_several_times_per_week.wasClicked = false;
    }
    
    // *SOI9_8_early_every_day* updates
    if (t >= 0 && SOI9_8_early_every_day.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SOI9_8_early_every_day.tStart = t;  // (not accounting for frame time here)
      SOI9_8_early_every_day.frameNStart = frameN;  // exact frame index
      
      SOI9_8_early_every_day.setAutoDraw(true);
    }
    
    
    // if SOI9_8_early_every_day is active this frame...
    if (SOI9_8_early_every_day.status === PsychoJS.Status.STARTED) {
    }
    
    if (SOI9_8_early_every_day.status === PsychoJS.Status.STARTED) {
      // check whether SOI9_8_early_every_day has been pressed
      if (SOI9_8_early_every_day.isClicked) {
        if (!SOI9_8_early_every_day.wasClicked) {
          // store time of first click
          SOI9_8_early_every_day.timesOn.push(SOI9_8_early_every_day.clock.getTime());
          // store time clicked until
          SOI9_8_early_every_day.timesOff.push(SOI9_8_early_every_day.clock.getTime());
        } else {
          // update time clicked until;
          SOI9_8_early_every_day.timesOff[SOI9_8_early_every_day.timesOff.length - 1] = SOI9_8_early_every_day.clock.getTime();
        }
        if (!SOI9_8_early_every_day.wasClicked) {
          // end routine when SOI9_8_early_every_day is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("SOI9", "8");
        }
        // if SOI9_8_early_every_day is still clicked next frame, it is not a new click
        SOI9_8_early_every_day.wasClicked = true;
      } else {
        // if SOI9_8_early_every_day is clicked next frame, it is a new click
        SOI9_8_early_every_day.wasClicked = false;
      }
    } else {
      // keep clock at 0 if SOI9_8_early_every_day hasn't started / has finished
      SOI9_8_early_every_day.clock.reset();
      // if SOI9_8_early_every_day is clicked next frame, it is a new click
      SOI9_8_early_every_day.wasClicked = false;
    }
    
    // *SOI9_9_atleastonceaday* updates
    if (t >= 0 && SOI9_9_atleastonceaday.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SOI9_9_atleastonceaday.tStart = t;  // (not accounting for frame time here)
      SOI9_9_atleastonceaday.frameNStart = frameN;  // exact frame index
      
      SOI9_9_atleastonceaday.setAutoDraw(true);
    }
    
    
    // if SOI9_9_atleastonceaday is active this frame...
    if (SOI9_9_atleastonceaday.status === PsychoJS.Status.STARTED) {
    }
    
    if (SOI9_9_atleastonceaday.status === PsychoJS.Status.STARTED) {
      // check whether SOI9_9_atleastonceaday has been pressed
      if (SOI9_9_atleastonceaday.isClicked) {
        if (!SOI9_9_atleastonceaday.wasClicked) {
          // store time of first click
          SOI9_9_atleastonceaday.timesOn.push(SOI9_9_atleastonceaday.clock.getTime());
          // store time clicked until
          SOI9_9_atleastonceaday.timesOff.push(SOI9_9_atleastonceaday.clock.getTime());
        } else {
          // update time clicked until;
          SOI9_9_atleastonceaday.timesOff[SOI9_9_atleastonceaday.timesOff.length - 1] = SOI9_9_atleastonceaday.clock.getTime();
        }
        if (!SOI9_9_atleastonceaday.wasClicked) {
          // end routine when SOI9_9_atleastonceaday is clicked
          continueRoutine = false;
          psychoJS.experiment.addData("SOI9", "9");
        }
        // if SOI9_9_atleastonceaday is still clicked next frame, it is not a new click
        SOI9_9_atleastonceaday.wasClicked = true;
      } else {
        // if SOI9_9_atleastonceaday is clicked next frame, it is a new click
        SOI9_9_atleastonceaday.wasClicked = false;
      }
    } else {
      // keep clock at 0 if SOI9_9_atleastonceaday hasn't started / has finished
      SOI9_9_atleastonceaday.clock.reset();
      // if SOI9_9_atleastonceaday is clicked next frame, it is a new click
      SOI9_9_atleastonceaday.wasClicked = false;
    }
    
    // *Q78* updates
    if (t >= 0.0 && Q78.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q78.tStart = t;  // (not accounting for frame time here)
      Q78.frameNStart = frameN;  // exact frame index
      
      Q78.setAutoDraw(true);
    }
    
    
    // if Q78 is active this frame...
    if (Q78.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SOI9Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SOI9RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'SOI9' ---
    for (const thisComponent of SOI9Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('SOI9.stopped', globalClock.getTime());
    psychoJS.experiment.addData('SOI9_1_never.numClicks', SOI9_1_never.numClicks);
    psychoJS.experiment.addData('SOI9_1_never.timesOn', SOI9_1_never.timesOn);
    psychoJS.experiment.addData('SOI9_1_never.timesOff', SOI9_1_never.timesOff);
    psychoJS.experiment.addData('SOI9_2_veryseldom.numClicks', SOI9_2_veryseldom.numClicks);
    psychoJS.experiment.addData('SOI9_2_veryseldom.timesOn', SOI9_2_veryseldom.timesOn);
    psychoJS.experiment.addData('SOI9_2_veryseldom.timesOff', SOI9_2_veryseldom.timesOff);
    psychoJS.experiment.addData('SOI9_3_once_every_2or3_months.numClicks', SOI9_3_once_every_2or3_months.numClicks);
    psychoJS.experiment.addData('SOI9_3_once_every_2or3_months.timesOn', SOI9_3_once_every_2or3_months.timesOn);
    psychoJS.experiment.addData('SOI9_3_once_every_2or3_months.timesOff', SOI9_3_once_every_2or3_months.timesOff);
    psychoJS.experiment.addData('SOI9_4_onceamonth.numClicks', SOI9_4_onceamonth.numClicks);
    psychoJS.experiment.addData('SOI9_4_onceamonth.timesOn', SOI9_4_onceamonth.timesOn);
    psychoJS.experiment.addData('SOI9_4_onceamonth.timesOff', SOI9_4_onceamonth.timesOff);
    psychoJS.experiment.addData('SOI9_5_once_every_two_weeks.numClicks', SOI9_5_once_every_two_weeks.numClicks);
    psychoJS.experiment.addData('SOI9_5_once_every_two_weeks.timesOn', SOI9_5_once_every_two_weeks.timesOn);
    psychoJS.experiment.addData('SOI9_5_once_every_two_weeks.timesOff', SOI9_5_once_every_two_weeks.timesOff);
    psychoJS.experiment.addData('SOI9_6_onceaweek.numClicks', SOI9_6_onceaweek.numClicks);
    psychoJS.experiment.addData('SOI9_6_onceaweek.timesOn', SOI9_6_onceaweek.timesOn);
    psychoJS.experiment.addData('SOI9_6_onceaweek.timesOff', SOI9_6_onceaweek.timesOff);
    psychoJS.experiment.addData('SOI9_7_several_times_per_week.numClicks', SOI9_7_several_times_per_week.numClicks);
    psychoJS.experiment.addData('SOI9_7_several_times_per_week.timesOn', SOI9_7_several_times_per_week.timesOn);
    psychoJS.experiment.addData('SOI9_7_several_times_per_week.timesOff', SOI9_7_several_times_per_week.timesOff);
    psychoJS.experiment.addData('SOI9_8_early_every_day.numClicks', SOI9_8_early_every_day.numClicks);
    psychoJS.experiment.addData('SOI9_8_early_every_day.timesOn', SOI9_8_early_every_day.timesOn);
    psychoJS.experiment.addData('SOI9_8_early_every_day.timesOff', SOI9_8_early_every_day.timesOff);
    psychoJS.experiment.addData('SOI9_9_atleastonceaday.numClicks', SOI9_9_atleastonceaday.numClicks);
    psychoJS.experiment.addData('SOI9_9_atleastonceaday.timesOn', SOI9_9_atleastonceaday.timesOn);
    psychoJS.experiment.addData('SOI9_9_atleastonceaday.timesOff', SOI9_9_atleastonceaday.timesOff);
    // the Routine "SOI9" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ATAI_introMaxDurationReached;
var _key_resp_9_allKeys;
var ATAI_introMaxDuration;
var ATAI_introComponents;
function ATAI_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ATAI_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    ATAI_introClock.reset();
    routineTimer.reset();
    ATAI_introMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    psychoJS.experiment.addData('ATAI_intro.started', globalClock.getTime());
    ATAI_introMaxDuration = null
    // keep track of which components have finished
    ATAI_introComponents = [];
    ATAI_introComponents.push(ATAI_intro_image);
    ATAI_introComponents.push(key_resp_9);
    
    for (const thisComponent of ATAI_introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ATAI_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ATAI_intro' ---
    // get current time
    t = ATAI_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ATAI_intro_image* updates
    if (t >= 0.0 && ATAI_intro_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ATAI_intro_image.tStart = t;  // (not accounting for frame time here)
      ATAI_intro_image.frameNStart = frameN;  // exact frame index
      
      ATAI_intro_image.setAutoDraw(true);
    }
    
    
    // if ATAI_intro_image is active this frame...
    if (ATAI_intro_image.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_9* updates
    if (t >= 0.0 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_9.tStart = t;  // (not accounting for frame time here)
      key_resp_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
    }
    
    // if key_resp_9 is active this frame...
    if (key_resp_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_9.getKeys({keyList: 'space', waitRelease: false});
      _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
      if (_key_resp_9_allKeys.length > 0) {
        key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
        key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
        key_resp_9.duration = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ATAI_introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ATAI_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ATAI_intro' ---
    for (const thisComponent of ATAI_introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ATAI_intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_9.corr, level);
    }
    psychoJS.experiment.addData('key_resp_9.keys', key_resp_9.keys);
    if (typeof key_resp_9.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_9.rt', key_resp_9.rt);
        psychoJS.experiment.addData('key_resp_9.duration', key_resp_9.duration);
        routineTimer.reset();
        }
    
    key_resp_9.stop();
    // the Routine "ATAI_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ATAIMaxDurationReached;
var ATAIMaxDuration;
var ATAIComponents;
function ATAIRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ATAI' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    ATAIClock.reset();
    routineTimer.reset();
    ATAIMaxDurationReached = false;
    // update component parameters for each repeat
    ATAI_QuestionText.setText(ATAIqText);
    ATAIquestionslide.reset()
    Q79toQ83.setText(ATAIqIndex);
    Q79_SD.setText('Strongly disagree');
    Q79_SA.setText('Strongly agree');
    psychoJS.experiment.addData('ATAI.started', globalClock.getTime());
    ATAIMaxDuration = null
    // keep track of which components have finished
    ATAIComponents = [];
    ATAIComponents.push(ATAI_QuestionText);
    ATAIComponents.push(ATAIquestionslide);
    ATAIComponents.push(Q79toQ83);
    ATAIComponents.push(Q79_SD);
    ATAIComponents.push(Q79_SA);
    
    for (const thisComponent of ATAIComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ATAIRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ATAI' ---
    // get current time
    t = ATAIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ATAI_QuestionText* updates
    if (t >= 0.0 && ATAI_QuestionText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ATAI_QuestionText.tStart = t;  // (not accounting for frame time here)
      ATAI_QuestionText.frameNStart = frameN;  // exact frame index
      
      ATAI_QuestionText.setAutoDraw(true);
    }
    
    
    // if ATAI_QuestionText is active this frame...
    if (ATAI_QuestionText.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *ATAIquestionslide* updates
    if (t >= 0.0 && ATAIquestionslide.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ATAIquestionslide.tStart = t;  // (not accounting for frame time here)
      ATAIquestionslide.frameNStart = frameN;  // exact frame index
      
      ATAIquestionslide.setAutoDraw(true);
    }
    
    
    // if ATAIquestionslide is active this frame...
    if (ATAIquestionslide.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check ATAIquestionslide for response to end Routine
    if (ATAIquestionslide.getRating() !== undefined && ATAIquestionslide.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *Q79toQ83* updates
    if (t >= 0.0 && Q79toQ83.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q79toQ83.tStart = t;  // (not accounting for frame time here)
      Q79toQ83.frameNStart = frameN;  // exact frame index
      
      Q79toQ83.setAutoDraw(true);
    }
    
    
    // if Q79toQ83 is active this frame...
    if (Q79toQ83.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Q79_SD* updates
    if (t >= 0.0 && Q79_SD.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q79_SD.tStart = t;  // (not accounting for frame time here)
      Q79_SD.frameNStart = frameN;  // exact frame index
      
      Q79_SD.setAutoDraw(true);
    }
    
    
    // if Q79_SD is active this frame...
    if (Q79_SD.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *Q79_SA* updates
    if (t >= 0.0 && Q79_SA.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q79_SA.tStart = t;  // (not accounting for frame time here)
      Q79_SA.frameNStart = frameN;  // exact frame index
      
      Q79_SA.setAutoDraw(true);
    }
    
    
    // if Q79_SA is active this frame...
    if (Q79_SA.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ATAIComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ATAIRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ATAI' ---
    for (const thisComponent of ATAIComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ATAI.stopped', globalClock.getTime());
    psychoJS.experiment.addData('ATAIquestionslide.response', ATAIquestionslide.getRating());
    psychoJS.experiment.addData('ATAIquestionslide.rt', ATAIquestionslide.getRT());
    // the Routine "ATAI" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var BSSS4_introMaxDurationReached;
var _key_resp_10_allKeys;
var BSSS4_introMaxDuration;
var BSSS4_introComponents;
function BSSS4_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'BSSS4_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    BSSS4_introClock.reset();
    routineTimer.reset();
    BSSS4_introMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_10.keys = undefined;
    key_resp_10.rt = undefined;
    _key_resp_10_allKeys = [];
    psychoJS.experiment.addData('BSSS4_intro.started', globalClock.getTime());
    BSSS4_introMaxDuration = null
    // keep track of which components have finished
    BSSS4_introComponents = [];
    BSSS4_introComponents.push(BSSS4_intro_image);
    BSSS4_introComponents.push(key_resp_10);
    
    for (const thisComponent of BSSS4_introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function BSSS4_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'BSSS4_intro' ---
    // get current time
    t = BSSS4_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *BSSS4_intro_image* updates
    if (t >= 0.0 && BSSS4_intro_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BSSS4_intro_image.tStart = t;  // (not accounting for frame time here)
      BSSS4_intro_image.frameNStart = frameN;  // exact frame index
      
      BSSS4_intro_image.setAutoDraw(true);
    }
    
    
    // if BSSS4_intro_image is active this frame...
    if (BSSS4_intro_image.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_10* updates
    if (t >= 0.0 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_10.tStart = t;  // (not accounting for frame time here)
      key_resp_10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.clearEvents(); });
    }
    
    // if key_resp_10 is active this frame...
    if (key_resp_10.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_10.getKeys({keyList: 'space', waitRelease: false});
      _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
      if (_key_resp_10_allKeys.length > 0) {
        key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
        key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
        key_resp_10.duration = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BSSS4_introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BSSS4_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'BSSS4_intro' ---
    for (const thisComponent of BSSS4_introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('BSSS4_intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_10.corr, level);
    }
    psychoJS.experiment.addData('key_resp_10.keys', key_resp_10.keys);
    if (typeof key_resp_10.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_10.rt', key_resp_10.rt);
        psychoJS.experiment.addData('key_resp_10.duration', key_resp_10.duration);
        routineTimer.reset();
        }
    
    key_resp_10.stop();
    // the Routine "BSSS4_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var BSSSMaxDurationReached;
var BSSSMaxDuration;
var BSSSComponents;
function BSSSRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'BSSS' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    BSSSClock.reset();
    routineTimer.reset();
    BSSSMaxDurationReached = false;
    // update component parameters for each repeat
    BSSS_questiontext.setText(BSSSqText);
    BSSS_questionslide.reset()
    Q84toQ91.setText(BSSSqIndex);
    psychoJS.experiment.addData('BSSS.started', globalClock.getTime());
    BSSSMaxDuration = null
    // keep track of which components have finished
    BSSSComponents = [];
    BSSSComponents.push(BSSS_questiontext);
    BSSSComponents.push(BSSS_questionslide);
    BSSSComponents.push(Q84toQ91);
    
    for (const thisComponent of BSSSComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function BSSSRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'BSSS' ---
    // get current time
    t = BSSSClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *BSSS_questiontext* updates
    if (t >= 0.0 && BSSS_questiontext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BSSS_questiontext.tStart = t;  // (not accounting for frame time here)
      BSSS_questiontext.frameNStart = frameN;  // exact frame index
      
      BSSS_questiontext.setAutoDraw(true);
    }
    
    
    // if BSSS_questiontext is active this frame...
    if (BSSS_questiontext.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *BSSS_questionslide* updates
    if (t >= 0.0 && BSSS_questionslide.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BSSS_questionslide.tStart = t;  // (not accounting for frame time here)
      BSSS_questionslide.frameNStart = frameN;  // exact frame index
      
      BSSS_questionslide.setAutoDraw(true);
    }
    
    
    // if BSSS_questionslide is active this frame...
    if (BSSS_questionslide.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check BSSS_questionslide for response to end Routine
    if (BSSS_questionslide.getRating() !== undefined && BSSS_questionslide.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *Q84toQ91* updates
    if (t >= 0.0 && Q84toQ91.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q84toQ91.tStart = t;  // (not accounting for frame time here)
      Q84toQ91.frameNStart = frameN;  // exact frame index
      
      Q84toQ91.setAutoDraw(true);
    }
    
    
    // if Q84toQ91 is active this frame...
    if (Q84toQ91.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BSSSComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BSSSRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'BSSS' ---
    for (const thisComponent of BSSSComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('BSSS.stopped', globalClock.getTime());
    psychoJS.experiment.addData('BSSS_questionslide.response', BSSS_questionslide.getRating());
    psychoJS.experiment.addData('BSSS_questionslide.rt', BSSS_questionslide.getRT());
    // the Routine "BSSS" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var BPAAT_introMaxDurationReached;
var _key_resp_11_allKeys;
var BPAAT_introMaxDuration;
var BPAAT_introComponents;
function BPAAT_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'BPAAT_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    BPAAT_introClock.reset();
    routineTimer.reset();
    BPAAT_introMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_11.keys = undefined;
    key_resp_11.rt = undefined;
    _key_resp_11_allKeys = [];
    psychoJS.experiment.addData('BPAAT_intro.started', globalClock.getTime());
    BPAAT_introMaxDuration = null
    // keep track of which components have finished
    BPAAT_introComponents = [];
    BPAAT_introComponents.push(BPAAT_intro_image);
    BPAAT_introComponents.push(key_resp_11);
    
    for (const thisComponent of BPAAT_introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function BPAAT_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'BPAAT_intro' ---
    // get current time
    t = BPAAT_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *BPAAT_intro_image* updates
    if (t >= 0.0 && BPAAT_intro_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BPAAT_intro_image.tStart = t;  // (not accounting for frame time here)
      BPAAT_intro_image.frameNStart = frameN;  // exact frame index
      
      BPAAT_intro_image.setAutoDraw(true);
    }
    
    
    // if BPAAT_intro_image is active this frame...
    if (BPAAT_intro_image.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_11* updates
    if (t >= 0.0 && key_resp_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_11.tStart = t;  // (not accounting for frame time here)
      key_resp_11.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_11.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.clearEvents(); });
    }
    
    // if key_resp_11 is active this frame...
    if (key_resp_11.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_11.getKeys({keyList: 'space', waitRelease: false});
      _key_resp_11_allKeys = _key_resp_11_allKeys.concat(theseKeys);
      if (_key_resp_11_allKeys.length > 0) {
        key_resp_11.keys = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].name;  // just the last key pressed
        key_resp_11.rt = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].rt;
        key_resp_11.duration = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BPAAT_introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BPAAT_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'BPAAT_intro' ---
    for (const thisComponent of BPAAT_introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('BPAAT_intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_11.corr, level);
    }
    psychoJS.experiment.addData('key_resp_11.keys', key_resp_11.keys);
    if (typeof key_resp_11.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_11.rt', key_resp_11.rt);
        psychoJS.experiment.addData('key_resp_11.duration', key_resp_11.duration);
        routineTimer.reset();
        }
    
    key_resp_11.stop();
    // the Routine "BPAAT_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var BPAAT1MaxDurationReached;
var BPAAT1MaxDuration;
var BPAAT1Components;
function BPAAT1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'BPAAT1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    BPAAT1Clock.reset();
    routineTimer.reset();
    BPAAT1MaxDurationReached = false;
    // update component parameters for each repeat
    BPAAT_questiontext1.setText(BPAAT1qText);
    BPAATquestionslide1.reset()
    Q92.setText('Question 92 of 93\n');
    psychoJS.experiment.addData('BPAAT1.started', globalClock.getTime());
    BPAAT1MaxDuration = null
    // keep track of which components have finished
    BPAAT1Components = [];
    BPAAT1Components.push(BPAAT_questiontext1);
    BPAAT1Components.push(BPAATquestionslide1);
    BPAAT1Components.push(Q92);
    
    for (const thisComponent of BPAAT1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function BPAAT1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'BPAAT1' ---
    // get current time
    t = BPAAT1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *BPAAT_questiontext1* updates
    if (t >= 0.0 && BPAAT_questiontext1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BPAAT_questiontext1.tStart = t;  // (not accounting for frame time here)
      BPAAT_questiontext1.frameNStart = frameN;  // exact frame index
      
      BPAAT_questiontext1.setAutoDraw(true);
    }
    
    
    // if BPAAT_questiontext1 is active this frame...
    if (BPAAT_questiontext1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *BPAATquestionslide1* updates
    if (t >= 0.0 && BPAATquestionslide1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BPAATquestionslide1.tStart = t;  // (not accounting for frame time here)
      BPAATquestionslide1.frameNStart = frameN;  // exact frame index
      
      BPAATquestionslide1.setAutoDraw(true);
    }
    
    
    // if BPAATquestionslide1 is active this frame...
    if (BPAATquestionslide1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check BPAATquestionslide1 for response to end Routine
    if (BPAATquestionslide1.getRating() !== undefined && BPAATquestionslide1.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *Q92* updates
    if (t >= 0.0 && Q92.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q92.tStart = t;  // (not accounting for frame time here)
      Q92.frameNStart = frameN;  // exact frame index
      
      Q92.setAutoDraw(true);
    }
    
    
    // if Q92 is active this frame...
    if (Q92.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BPAAT1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BPAAT1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'BPAAT1' ---
    for (const thisComponent of BPAAT1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('BPAAT1.stopped', globalClock.getTime());
    psychoJS.experiment.addData('BPAATquestionslide1.response', BPAATquestionslide1.getRating());
    psychoJS.experiment.addData('BPAATquestionslide1.rt', BPAATquestionslide1.getRT());
    // the Routine "BPAAT1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var BPAAT2MaxDurationReached;
var BPAAT2MaxDuration;
var BPAAT2Components;
function BPAAT2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'BPAAT2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    BPAAT2Clock.reset();
    routineTimer.reset();
    BPAAT2MaxDurationReached = false;
    // update component parameters for each repeat
    BPAAT_questiontext2.setText(BPAAT2qText);
    BPAATquestionslide2.reset()
    Q93.setText('Question 93 of 93\n');
    psychoJS.experiment.addData('BPAAT2.started', globalClock.getTime());
    BPAAT2MaxDuration = null
    // keep track of which components have finished
    BPAAT2Components = [];
    BPAAT2Components.push(BPAAT_questiontext2);
    BPAAT2Components.push(BPAATquestionslide2);
    BPAAT2Components.push(Q93);
    
    for (const thisComponent of BPAAT2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function BPAAT2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'BPAAT2' ---
    // get current time
    t = BPAAT2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *BPAAT_questiontext2* updates
    if (t >= 0.0 && BPAAT_questiontext2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BPAAT_questiontext2.tStart = t;  // (not accounting for frame time here)
      BPAAT_questiontext2.frameNStart = frameN;  // exact frame index
      
      BPAAT_questiontext2.setAutoDraw(true);
    }
    
    
    // if BPAAT_questiontext2 is active this frame...
    if (BPAAT_questiontext2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *BPAATquestionslide2* updates
    if (t >= 0.0 && BPAATquestionslide2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BPAATquestionslide2.tStart = t;  // (not accounting for frame time here)
      BPAATquestionslide2.frameNStart = frameN;  // exact frame index
      
      BPAATquestionslide2.setAutoDraw(true);
    }
    
    
    // if BPAATquestionslide2 is active this frame...
    if (BPAATquestionslide2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check BPAATquestionslide2 for response to end Routine
    if (BPAATquestionslide2.getRating() !== undefined && BPAATquestionslide2.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *Q93* updates
    if (t >= 0.0 && Q93.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Q93.tStart = t;  // (not accounting for frame time here)
      Q93.frameNStart = frameN;  // exact frame index
      
      Q93.setAutoDraw(true);
    }
    
    
    // if Q93 is active this frame...
    if (Q93.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BPAAT2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BPAAT2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'BPAAT2' ---
    for (const thisComponent of BPAAT2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('BPAAT2.stopped', globalClock.getTime());
    psychoJS.experiment.addData('BPAATquestionslide2.response', BPAATquestionslide2.getRating());
    psychoJS.experiment.addData('BPAATquestionslide2.rt', BPAATquestionslide2.getRT());
    // the Routine "BPAAT2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var finishQUESTION_introMaxDurationReached;
var _resp_2_allKeys;
var finishQUESTION_introMaxDuration;
var finishQUESTION_introComponents;
function finishQUESTION_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'finishQUESTION_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    finishQUESTION_introClock.reset();
    routineTimer.reset();
    finishQUESTION_introMaxDurationReached = false;
    // update component parameters for each repeat
    resp_2.keys = undefined;
    resp_2.rt = undefined;
    _resp_2_allKeys = [];
    psychoJS.experiment.addData('finishQUESTION_intro.started', globalClock.getTime());
    finishQUESTION_introMaxDuration = null
    // keep track of which components have finished
    finishQUESTION_introComponents = [];
    finishQUESTION_introComponents.push(finish_questions_image);
    finishQUESTION_introComponents.push(resp_2);
    
    for (const thisComponent of finishQUESTION_introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function finishQUESTION_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'finishQUESTION_intro' ---
    // get current time
    t = finishQUESTION_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *finish_questions_image* updates
    if (t >= 0.0 && finish_questions_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      finish_questions_image.tStart = t;  // (not accounting for frame time here)
      finish_questions_image.frameNStart = frameN;  // exact frame index
      
      finish_questions_image.setAutoDraw(true);
    }
    
    
    // if finish_questions_image is active this frame...
    if (finish_questions_image.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *resp_2* updates
    if (t >= 0.0 && resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_2.tStart = t;  // (not accounting for frame time here)
      resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { resp_2.clearEvents(); });
    }
    
    // if resp_2 is active this frame...
    if (resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp_2.getKeys({keyList: 'space', waitRelease: false});
      _resp_2_allKeys = _resp_2_allKeys.concat(theseKeys);
      if (_resp_2_allKeys.length > 0) {
        resp_2.keys = _resp_2_allKeys[_resp_2_allKeys.length - 1].name;  // just the last key pressed
        resp_2.rt = _resp_2_allKeys[_resp_2_allKeys.length - 1].rt;
        resp_2.duration = _resp_2_allKeys[_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of finishQUESTION_introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function finishQUESTION_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'finishQUESTION_intro' ---
    for (const thisComponent of finishQUESTION_introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('finishQUESTION_intro.stopped', globalClock.getTime());
    resp_2.stop();
    // the Routine "finishQUESTION_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructionsMaxDurationReached;
var _resp_allKeys;
var instructionsMaxDuration;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instructionsClock.reset();
    routineTimer.reset();
    instructionsMaxDurationReached = false;
    // update component parameters for each repeat
    resp.keys = undefined;
    resp.rt = undefined;
    _resp_allKeys = [];
    pop_sound.isFinished = false;
    pop_sound.setValue('assets/bang.wav');
    pop_sound.secs=1.0;
    pop_sound.setVolume(0.0);
    psychoJS.experiment.addData('instructions.started', globalClock.getTime());
    instructionsMaxDuration = null
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(background);
    instructionsComponents.push(resp);
    instructionsComponents.push(pop_sound);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions' ---
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *background* updates
    if (t >= 0.0 && background.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background.tStart = t;  // (not accounting for frame time here)
      background.frameNStart = frameN;  // exact frame index
      
      background.setAutoDraw(true);
    }
    
    
    // if background is active this frame...
    if (background.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *resp* updates
    if (t >= 0.0 && resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp.tStart = t;  // (not accounting for frame time here)
      resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { resp.clearEvents(); });
    }
    
    // if resp is active this frame...
    if (resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp.getKeys({keyList: 'space', waitRelease: false});
      _resp_allKeys = _resp_allKeys.concat(theseKeys);
      if (_resp_allKeys.length > 0) {
        resp.keys = _resp_allKeys[_resp_allKeys.length - 1].name;  // just the last key pressed
        resp.rt = _resp_allKeys[_resp_allKeys.length - 1].rt;
        resp.duration = _resp_allKeys[_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    if (pop_sound.status === STARTED) {
        pop_sound.isPlaying = true;
        if (t >= (pop_sound.getDuration() + pop_sound.tStart)) {
            pop_sound.isFinished = true;
        }
    }
    // start/stop pop_sound
    if (t >= 0.0 && pop_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pop_sound.tStart = t;  // (not accounting for frame time here)
      pop_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ pop_sound.play(); });  // screen flip
      pop_sound.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (pop_sound.status === PsychoJS.Status.STARTED && t >= frameRemains || pop_sound.isFinished) {
      // keep track of stop time/frame for later
      pop_sound.tStop = t;  // not accounting for scr refresh
      pop_sound.frameNStop = frameN;  // exact frame index
      // update status
      pop_sound.status = PsychoJS.Status.FINISHED;
      // stop playback
      pop_sound.stop();
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions' ---
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instructions.stopped', globalClock.getTime());
    resp.stop();
    pop_sound.stop();  // ensure sound has stopped at end of Routine
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var reset_balloonMaxDurationReached;
var popped;
var nPumps;
var reset_balloonMaxDuration;
var reset_balloonComponents;
function reset_balloonRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'reset_balloon' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    reset_balloonClock.reset();
    routineTimer.reset();
    reset_balloonMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    balloonSize = 0.08;
    popped = false;
    nPumps = 0;
    
    psychoJS.experiment.addData('reset_balloon.started', globalClock.getTime());
    reset_balloonMaxDuration = null
    // keep track of which components have finished
    reset_balloonComponents = [];
    
    for (const thisComponent of reset_balloonComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function reset_balloonRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'reset_balloon' ---
    // get current time
    t = reset_balloonClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of reset_balloonComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function reset_balloonRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'reset_balloon' ---
    for (const thisComponent of reset_balloonComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('reset_balloon.stopped', globalClock.getTime());
    // the Routine "reset_balloon" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_trialMaxDurationReached;
var _practice_bankButton_allKeys;
var practice_trialMaxDuration;
var practice_trialComponents;
function practice_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    practice_trialClock.reset();
    routineTimer.reset();
    practice_trialMaxDurationReached = false;
    // update component parameters for each repeat
    practice_bankButton.keys = undefined;
    practice_bankButton.rt = undefined;
    _practice_bankButton_allKeys = [];
    // Run 'Begin Routine' code from practice_updateEarnings
    thisBalloonEarnings = ((practice_pump.thisN + 1) * 0.05);
    balloonEarnings = ("This balloon value:\n$" + util.round(thisBalloonEarnings, 2).toString());
    bankedText = ("You have banked:\n$" + util.round(bankedEarnings, 2).toString());
    
    // Run 'Begin Routine' code from practice_setBalloonSize
    balloonBody.setPos([0, ((balloonSize / 2) - 0.5)]);
    balloonBody.setSize(balloonSize);
    
    practice_trialcount.setText(((("Ballon number\uff1a " + (practice_trials.thisN + 1).toString()) + "/") + practice_trials.nTotal.toString()));
    psychoJS.experiment.addData('practice_trial.started', globalClock.getTime());
    practice_trialMaxDuration = null
    // keep track of which components have finished
    practice_trialComponents = [];
    practice_trialComponents.push(practice_bg);
    practice_trialComponents.push(practice_bankButton);
    practice_trialComponents.push(practice_reminder);
    practice_trialComponents.push(practice_balloonValTxt);
    practice_trialComponents.push(practice_bankedTxt);
    practice_trialComponents.push(practice_balloonBody);
    practice_trialComponents.push(practice_trialcount);
    
    for (const thisComponent of practice_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_trial' ---
    // get current time
    t = practice_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practice_bg* updates
    if (t >= 0.0 && practice_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_bg.tStart = t;  // (not accounting for frame time here)
      practice_bg.frameNStart = frameN;  // exact frame index
      
      practice_bg.setAutoDraw(true);
    }
    
    
    // if practice_bg is active this frame...
    if (practice_bg.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *practice_bankButton* updates
    if (t >= 0.0 && practice_bankButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_bankButton.tStart = t;  // (not accounting for frame time here)
      practice_bankButton.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { practice_bankButton.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { practice_bankButton.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { practice_bankButton.clearEvents(); });
    }
    
    // if practice_bankButton is active this frame...
    if (practice_bankButton.status === PsychoJS.Status.STARTED) {
      let theseKeys = practice_bankButton.getKeys({keyList: ['return','space'], waitRelease: false});
      _practice_bankButton_allKeys = _practice_bankButton_allKeys.concat(theseKeys);
      if (_practice_bankButton_allKeys.length > 0) {
        practice_bankButton.keys = _practice_bankButton_allKeys[_practice_bankButton_allKeys.length - 1].name;  // just the last key pressed
        practice_bankButton.rt = _practice_bankButton_allKeys[_practice_bankButton_allKeys.length - 1].rt;
        practice_bankButton.duration = _practice_bankButton_allKeys[_practice_bankButton_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *practice_reminder* updates
    if (t >= 0.0 && practice_reminder.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_reminder.tStart = t;  // (not accounting for frame time here)
      practice_reminder.frameNStart = frameN;  // exact frame index
      
      practice_reminder.setAutoDraw(true);
    }
    
    
    // if practice_reminder is active this frame...
    if (practice_reminder.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *practice_balloonValTxt* updates
    if (t >= 0.0 && practice_balloonValTxt.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      practice_balloonValTxt.setText(balloonEarnings, false);
      // keep track of start time/frame for later
      practice_balloonValTxt.tStart = t;  // (not accounting for frame time here)
      practice_balloonValTxt.frameNStart = frameN;  // exact frame index
      
      practice_balloonValTxt.setAutoDraw(true);
    }
    
    
    // if practice_balloonValTxt is active this frame...
    if (practice_balloonValTxt.status === PsychoJS.Status.STARTED) {
      // update params
      practice_balloonValTxt.setText(balloonEarnings, false);
    }
    
    
    // *practice_bankedTxt* updates
    if (t >= 0.0 && practice_bankedTxt.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      practice_bankedTxt.setText(bankedText, false);
      // keep track of start time/frame for later
      practice_bankedTxt.tStart = t;  // (not accounting for frame time here)
      practice_bankedTxt.frameNStart = frameN;  // exact frame index
      
      practice_bankedTxt.setAutoDraw(true);
    }
    
    
    // if practice_bankedTxt is active this frame...
    if (practice_bankedTxt.status === PsychoJS.Status.STARTED) {
      // update params
      practice_bankedTxt.setText(bankedText, false);
    }
    
    // Run 'Each Frame' code from practice_setBalloonSize
    balloonSize = (0.1 + ((practice_pump.thisN + 1) * 0.015));
    
    
    // *practice_balloonBody* updates
    if (t >= 0.0 && practice_balloonBody.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      practice_balloonBody.setPos([0, ((balloonSize / 2) - 0.5)], false);
      practice_balloonBody.setSize(balloonSize, false);
      // keep track of start time/frame for later
      practice_balloonBody.tStart = t;  // (not accounting for frame time here)
      practice_balloonBody.frameNStart = frameN;  // exact frame index
      
      practice_balloonBody.setAutoDraw(true);
    }
    
    
    // if practice_balloonBody is active this frame...
    if (practice_balloonBody.status === PsychoJS.Status.STARTED) {
      // update params
      practice_balloonBody.setPos([0, ((balloonSize / 2) - 0.5)], false);
      practice_balloonBody.setSize(balloonSize, false);
    }
    
    
    // *practice_trialcount* updates
    if (t >= 0.0 && practice_trialcount.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_trialcount.tStart = t;  // (not accounting for frame time here)
      practice_trialcount.frameNStart = frameN;  // exact frame index
      
      practice_trialcount.setAutoDraw(true);
    }
    
    
    // if practice_trialcount is active this frame...
    if (practice_trialcount.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_trial' ---
    for (const thisComponent of practice_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('practice_trial.stopped', globalClock.getTime());
    practice_bankButton.stop();
    // Run 'End Routine' code from practice_updateEarnings
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if (_pj.in_es6("return", practice_bankButton.keys)) {
        practice_pump.finished = true;
        popped = false;
    } else {
        if (((practice_pump.thisN + 1) === practice_maxPumps)) {
            popped = true;
        } else {
            popped = false;
        }
        if (popped) {
            thisBalloonEarnings = 0.0;
            lastBalloonEarnings = 0.0;
        } else {
            lastBalloonEarnings = thisBalloonEarnings;
        }
    }
    
    // Run 'End Routine' code from practice_setBalloonSize
    practice_trials.addData("practice_nPumps", (practice_pump.thisN + 1));
    practice_trials.addData("practice_size", balloonSize);
    practice_trials.addData("practice_earnings", thisBalloonEarnings);
    practice_trials.addData("practice_popped", popped);
    
    // the Routine "practice_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_feedbackMaxDurationReached;
var practice_feedbackMaxDuration;
var practice_feedbackComponents;
function practice_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    practice_feedbackClock.reset(routineTimer.getTime());
    routineTimer.add(1.500000);
    practice_feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from practice_checkPopped
    lastBalloonEarnings = thisBalloonEarnings;
    bankedEarnings += thisBalloonEarnings;
    balloonEarnings = ("This balloon value:\n$" + util.round(thisBalloonEarnings, 2).toString());
    bankedText = ("You have banked:\n$" + util.round(bankedEarnings, 2).toString());
    pop_sound.setVolume(1);
    if ((popped === true)) {
        feedbackText = "Oops!Lost that one!";
        pop_sound.play();
    } else {
        feedbackText = ("You banked $" + util.round(lastBalloonEarnings, 2).toString());
    }
    
    practice_feedbacktxt.setText(feedbackText);
    practice_trialcount_2.setText(((("Ballon number\uff1a " + (practice_trials.thisN + 1).toString()) + "/") + practice_trials.nTotal.toString()));
    psychoJS.experiment.addData('practice_feedback.started', globalClock.getTime());
    practice_feedbackMaxDuration = null
    // keep track of which components have finished
    practice_feedbackComponents = [];
    practice_feedbackComponents.push(practice_background_3);
    practice_feedbackComponents.push(practice_feedbacktxt);
    practice_feedbackComponents.push(practice_bankedTxt_2);
    practice_feedbackComponents.push(practice_reminder_2);
    practice_feedbackComponents.push(practice_trialcount_2);
    
    for (const thisComponent of practice_feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_feedback' ---
    // get current time
    t = practice_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practice_background_3* updates
    if (t >= 0.0 && practice_background_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_background_3.tStart = t;  // (not accounting for frame time here)
      practice_background_3.frameNStart = frameN;  // exact frame index
      
      practice_background_3.setAutoDraw(true);
    }
    
    
    // if practice_background_3 is active this frame...
    if (practice_background_3.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (practice_background_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      practice_background_3.tStop = t;  // not accounting for scr refresh
      practice_background_3.frameNStop = frameN;  // exact frame index
      // update status
      practice_background_3.status = PsychoJS.Status.FINISHED;
      practice_background_3.setAutoDraw(false);
    }
    
    
    // *practice_feedbacktxt* updates
    if (t >= 0.0 && practice_feedbacktxt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_feedbacktxt.tStart = t;  // (not accounting for frame time here)
      practice_feedbacktxt.frameNStart = frameN;  // exact frame index
      
      practice_feedbacktxt.setAutoDraw(true);
    }
    
    
    // if practice_feedbacktxt is active this frame...
    if (practice_feedbacktxt.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (practice_feedbacktxt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      practice_feedbacktxt.tStop = t;  // not accounting for scr refresh
      practice_feedbacktxt.frameNStop = frameN;  // exact frame index
      // update status
      practice_feedbacktxt.status = PsychoJS.Status.FINISHED;
      practice_feedbacktxt.setAutoDraw(false);
    }
    
    
    // *practice_bankedTxt_2* updates
    if (t >= 0.0 && practice_bankedTxt_2.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      practice_bankedTxt_2.setText(bankedText, false);
      // keep track of start time/frame for later
      practice_bankedTxt_2.tStart = t;  // (not accounting for frame time here)
      practice_bankedTxt_2.frameNStart = frameN;  // exact frame index
      
      practice_bankedTxt_2.setAutoDraw(true);
    }
    
    
    // if practice_bankedTxt_2 is active this frame...
    if (practice_bankedTxt_2.status === PsychoJS.Status.STARTED) {
      // update params
      practice_bankedTxt_2.setText(bankedText, false);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (practice_bankedTxt_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      practice_bankedTxt_2.tStop = t;  // not accounting for scr refresh
      practice_bankedTxt_2.frameNStop = frameN;  // exact frame index
      // update status
      practice_bankedTxt_2.status = PsychoJS.Status.FINISHED;
      practice_bankedTxt_2.setAutoDraw(false);
    }
    
    
    // *practice_reminder_2* updates
    if (t >= 0.0 && practice_reminder_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_reminder_2.tStart = t;  // (not accounting for frame time here)
      practice_reminder_2.frameNStart = frameN;  // exact frame index
      
      practice_reminder_2.setAutoDraw(true);
    }
    
    
    // if practice_reminder_2 is active this frame...
    if (practice_reminder_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (practice_reminder_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      practice_reminder_2.tStop = t;  // not accounting for scr refresh
      practice_reminder_2.frameNStop = frameN;  // exact frame index
      // update status
      practice_reminder_2.status = PsychoJS.Status.FINISHED;
      practice_reminder_2.setAutoDraw(false);
    }
    
    
    // *practice_trialcount_2* updates
    if (t >= 0.0 && practice_trialcount_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_trialcount_2.tStart = t;  // (not accounting for frame time here)
      practice_trialcount_2.frameNStart = frameN;  // exact frame index
      
      practice_trialcount_2.setAutoDraw(true);
    }
    
    
    // if practice_trialcount_2 is active this frame...
    if (practice_trialcount_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (practice_trialcount_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      practice_trialcount_2.tStop = t;  // not accounting for scr refresh
      practice_trialcount_2.frameNStop = frameN;  // exact frame index
      // update status
      practice_trialcount_2.status = PsychoJS.Status.FINISHED;
      practice_trialcount_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_feedback' ---
    for (const thisComponent of practice_feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('practice_feedback.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (practice_feedbackMaxDurationReached) {
        practice_feedbackClock.add(practice_feedbackMaxDuration);
    } else {
        practice_feedbackClock.add(1.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_finalScoreMaxDurationReached;
var scoreText;
var _key_resp_allKeys;
var practice_finalScoreMaxDuration;
var practice_finalScoreComponents;
function practice_finalScoreRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_finalScore' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    practice_finalScoreClock.reset();
    routineTimer.reset();
    practice_finalScoreMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from practice_finalScoreCode
    scoreText = `Well done! You banked a total of
    $${bankedEarnings}`
    ;
    
    practice_scoremsg.setText(scoreText);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('practice_finalScore.started', globalClock.getTime());
    practice_finalScoreMaxDuration = null
    // keep track of which components have finished
    practice_finalScoreComponents = [];
    practice_finalScoreComponents.push(practice_background_4);
    practice_finalScoreComponents.push(practice_scoremsg);
    practice_finalScoreComponents.push(text);
    practice_finalScoreComponents.push(key_resp);
    
    for (const thisComponent of practice_finalScoreComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_finalScoreRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_finalScore' ---
    // get current time
    t = practice_finalScoreClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practice_background_4* updates
    if (t >= 0.0 && practice_background_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_background_4.tStart = t;  // (not accounting for frame time here)
      practice_background_4.frameNStart = frameN;  // exact frame index
      
      practice_background_4.setAutoDraw(true);
    }
    
    
    // if practice_background_4 is active this frame...
    if (practice_background_4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *practice_scoremsg* updates
    if (t >= 0.0 && practice_scoremsg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_scoremsg.tStart = t;  // (not accounting for frame time here)
      practice_scoremsg.frameNStart = frameN;  // exact frame index
      
      practice_scoremsg.setAutoDraw(true);
    }
    
    
    // if practice_scoremsg is active this frame...
    if (practice_scoremsg.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: 'space', waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_finalScoreComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_finalScoreRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_finalScore' ---
    for (const thisComponent of practice_finalScoreComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('practice_finalScore.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "practice_finalScore" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var resetmoneypracticeMaxDurationReached;
var resetmoneypracticeMaxDuration;
var resetmoneypracticeComponents;
function resetmoneypracticeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'resetmoneypractice' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    resetmoneypracticeClock.reset();
    routineTimer.reset();
    resetmoneypracticeMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_4
    bankedEarnings = 0;
    
    psychoJS.experiment.addData('resetmoneypractice.started', globalClock.getTime());
    resetmoneypracticeMaxDuration = null
    // keep track of which components have finished
    resetmoneypracticeComponents = [];
    
    for (const thisComponent of resetmoneypracticeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function resetmoneypracticeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'resetmoneypractice' ---
    // get current time
    t = resetmoneypracticeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of resetmoneypracticeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function resetmoneypracticeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'resetmoneypractice' ---
    for (const thisComponent of resetmoneypracticeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('resetmoneypractice.stopped', globalClock.getTime());
    // the Routine "resetmoneypractice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var comprehension_checkMaxDurationReached;
var _key_resp_comprehension_allKeys;
var comprehension_checkMaxDuration;
var comprehension_checkComponents;
function comprehension_checkRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'comprehension_check' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    comprehension_checkClock.reset();
    routineTimer.reset();
    comprehension_checkMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_comprehension.keys = undefined;
    key_resp_comprehension.rt = undefined;
    _key_resp_comprehension_allKeys = [];
    psychoJS.experiment.addData('comprehension_check.started', globalClock.getTime());
    comprehension_checkMaxDuration = null
    // keep track of which components have finished
    comprehension_checkComponents = [];
    comprehension_checkComponents.push(understand_2);
    comprehension_checkComponents.push(key_resp_comprehension);
    
    for (const thisComponent of comprehension_checkComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function comprehension_checkRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'comprehension_check' ---
    // get current time
    t = comprehension_checkClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *understand_2* updates
    if (t >= 0.0 && understand_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      understand_2.tStart = t;  // (not accounting for frame time here)
      understand_2.frameNStart = frameN;  // exact frame index
      
      understand_2.setAutoDraw(true);
    }
    
    
    // if understand_2 is active this frame...
    if (understand_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_comprehension* updates
    if (t >= 0.0 && key_resp_comprehension.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_comprehension.tStart = t;  // (not accounting for frame time here)
      key_resp_comprehension.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_comprehension.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_comprehension.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_comprehension.clearEvents(); });
    }
    
    // if key_resp_comprehension is active this frame...
    if (key_resp_comprehension.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_comprehension.getKeys({keyList: ['y','n'], waitRelease: false});
      _key_resp_comprehension_allKeys = _key_resp_comprehension_allKeys.concat(theseKeys);
      if (_key_resp_comprehension_allKeys.length > 0) {
        key_resp_comprehension.keys = _key_resp_comprehension_allKeys[_key_resp_comprehension_allKeys.length - 1].name;  // just the last key pressed
        key_resp_comprehension.rt = _key_resp_comprehension_allKeys[_key_resp_comprehension_allKeys.length - 1].rt;
        key_resp_comprehension.duration = _key_resp_comprehension_allKeys[_key_resp_comprehension_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of comprehension_checkComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function comprehension_checkRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'comprehension_check' ---
    for (const thisComponent of comprehension_checkComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('comprehension_check.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_comprehension.corr, level);
    }
    psychoJS.experiment.addData('key_resp_comprehension.keys', key_resp_comprehension.keys);
    if (typeof key_resp_comprehension.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_comprehension.rt', key_resp_comprehension.rt);
        psychoJS.experiment.addData('key_resp_comprehension.duration', key_resp_comprehension.duration);
        routineTimer.reset();
        }
    
    key_resp_comprehension.stop();
    // Run 'End Routine' code from comprehension_code
    if ((key_resp_comprehension.keys === "y")) {
        comprehension_loop.finished = true;
    }
    
    // the Routine "comprehension_check" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Preparing_to_BART_formallyMaxDurationReached;
var _key_resp_comprehension_2_allKeys;
var Preparing_to_BART_formallyMaxDuration;
var Preparing_to_BART_formallyComponents;
function Preparing_to_BART_formallyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Preparing_to_BART_formally' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Preparing_to_BART_formallyClock.reset();
    routineTimer.reset();
    Preparing_to_BART_formallyMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_comprehension_2.keys = undefined;
    key_resp_comprehension_2.rt = undefined;
    _key_resp_comprehension_2_allKeys = [];
    psychoJS.experiment.addData('Preparing_to_BART_formally.started', globalClock.getTime());
    Preparing_to_BART_formallyMaxDuration = null
    // keep track of which components have finished
    Preparing_to_BART_formallyComponents = [];
    Preparing_to_BART_formallyComponents.push(understand3_formal_BART);
    Preparing_to_BART_formallyComponents.push(key_resp_comprehension_2);
    
    for (const thisComponent of Preparing_to_BART_formallyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Preparing_to_BART_formallyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Preparing_to_BART_formally' ---
    // get current time
    t = Preparing_to_BART_formallyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *understand3_formal_BART* updates
    if (t >= 0.0 && understand3_formal_BART.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      understand3_formal_BART.tStart = t;  // (not accounting for frame time here)
      understand3_formal_BART.frameNStart = frameN;  // exact frame index
      
      understand3_formal_BART.setAutoDraw(true);
    }
    
    
    // if understand3_formal_BART is active this frame...
    if (understand3_formal_BART.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_comprehension_2* updates
    if (t >= 0.0 && key_resp_comprehension_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_comprehension_2.tStart = t;  // (not accounting for frame time here)
      key_resp_comprehension_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_comprehension_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_comprehension_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_comprehension_2.clearEvents(); });
    }
    
    // if key_resp_comprehension_2 is active this frame...
    if (key_resp_comprehension_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_comprehension_2.getKeys({keyList: 'y', waitRelease: false});
      _key_resp_comprehension_2_allKeys = _key_resp_comprehension_2_allKeys.concat(theseKeys);
      if (_key_resp_comprehension_2_allKeys.length > 0) {
        key_resp_comprehension_2.keys = _key_resp_comprehension_2_allKeys[_key_resp_comprehension_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_comprehension_2.rt = _key_resp_comprehension_2_allKeys[_key_resp_comprehension_2_allKeys.length - 1].rt;
        key_resp_comprehension_2.duration = _key_resp_comprehension_2_allKeys[_key_resp_comprehension_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Preparing_to_BART_formallyComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Preparing_to_BART_formallyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Preparing_to_BART_formally' ---
    for (const thisComponent of Preparing_to_BART_formallyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Preparing_to_BART_formally.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_comprehension_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_comprehension_2.keys', key_resp_comprehension_2.keys);
    if (typeof key_resp_comprehension_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_comprehension_2.rt', key_resp_comprehension_2.rt);
        psychoJS.experiment.addData('key_resp_comprehension_2.duration', key_resp_comprehension_2.duration);
        routineTimer.reset();
        }
    
    key_resp_comprehension_2.stop();
    // the Routine "Preparing_to_BART_formally" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var resetmoneyMaxDurationReached;
var resetmoneyMaxDuration;
var resetmoneyComponents;
function resetmoneyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'resetmoney' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    resetmoneyClock.reset();
    routineTimer.reset();
    resetmoneyMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    bankedEarnings = 0;
    
    psychoJS.experiment.addData('resetmoney.started', globalClock.getTime());
    resetmoneyMaxDuration = null
    // keep track of which components have finished
    resetmoneyComponents = [];
    
    for (const thisComponent of resetmoneyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function resetmoneyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'resetmoney' ---
    // get current time
    t = resetmoneyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of resetmoneyComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function resetmoneyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'resetmoney' ---
    for (const thisComponent of resetmoneyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('resetmoney.stopped', globalClock.getTime());
    // the Routine "resetmoney" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trialMaxDurationReached;
var _bankButton_allKeys;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trialClock.reset();
    routineTimer.reset();
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    bankButton.keys = undefined;
    bankButton.rt = undefined;
    _bankButton_allKeys = [];
    // Run 'Begin Routine' code from updateEarnings
    thisBalloonEarnings = ((pump.thisN + 1) * 0.05);
    balloonEarnings = ("This balloon value:\n$" + util.round(thisBalloonEarnings, 2).toString());
    bankedText = ("You have banked:\n$" + util.round(bankedEarnings, 2).toString());
    
    // Run 'Begin Routine' code from setBalloonSize
    balloonBody.setPos([0, ((balloonSize / 2) - 0.5)]);
    balloonBody.setSize(balloonSize);
    
    trialcount.setText(((("Ballon number\uff1a " + (trials.thisN + 1).toString()) + "/") + trials.nTotal.toString()));
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(background_2);
    trialComponents.push(bankButton);
    trialComponents.push(reminder);
    trialComponents.push(bankedTxt);
    trialComponents.push(balloonBody);
    trialComponents.push(trialcount);
    trialComponents.push(balloonValTxt);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *background_2* updates
    if (t >= 0.0 && background_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_2.tStart = t;  // (not accounting for frame time here)
      background_2.frameNStart = frameN;  // exact frame index
      
      background_2.setAutoDraw(true);
    }
    
    
    // if background_2 is active this frame...
    if (background_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *bankButton* updates
    if (t >= 0.0 && bankButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bankButton.tStart = t;  // (not accounting for frame time here)
      bankButton.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { bankButton.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { bankButton.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { bankButton.clearEvents(); });
    }
    
    // if bankButton is active this frame...
    if (bankButton.status === PsychoJS.Status.STARTED) {
      let theseKeys = bankButton.getKeys({keyList: ['return','space'], waitRelease: false});
      _bankButton_allKeys = _bankButton_allKeys.concat(theseKeys);
      if (_bankButton_allKeys.length > 0) {
        bankButton.keys = _bankButton_allKeys[_bankButton_allKeys.length - 1].name;  // just the last key pressed
        bankButton.rt = _bankButton_allKeys[_bankButton_allKeys.length - 1].rt;
        bankButton.duration = _bankButton_allKeys[_bankButton_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *reminder* updates
    if (t >= 0.0 && reminder.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reminder.tStart = t;  // (not accounting for frame time here)
      reminder.frameNStart = frameN;  // exact frame index
      
      reminder.setAutoDraw(true);
    }
    
    
    // if reminder is active this frame...
    if (reminder.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *bankedTxt* updates
    if (t >= 0.0 && bankedTxt.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      bankedTxt.setText(bankedText, false);
      // keep track of start time/frame for later
      bankedTxt.tStart = t;  // (not accounting for frame time here)
      bankedTxt.frameNStart = frameN;  // exact frame index
      
      bankedTxt.setAutoDraw(true);
    }
    
    
    // if bankedTxt is active this frame...
    if (bankedTxt.status === PsychoJS.Status.STARTED) {
      // update params
      bankedTxt.setText(bankedText, false);
    }
    
    // Run 'Each Frame' code from setBalloonSize
    balloonSize = (0.1 + ((pump.thisN + 1) * 0.015));
    
    
    // *balloonBody* updates
    if (t >= 0.0 && balloonBody.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      balloonBody.setPos([0, ((balloonSize / 2) - 0.5)], false);
      balloonBody.setSize(balloonSize, false);
      // keep track of start time/frame for later
      balloonBody.tStart = t;  // (not accounting for frame time here)
      balloonBody.frameNStart = frameN;  // exact frame index
      
      balloonBody.setAutoDraw(true);
    }
    
    
    // if balloonBody is active this frame...
    if (balloonBody.status === PsychoJS.Status.STARTED) {
      // update params
      balloonBody.setPos([0, ((balloonSize / 2) - 0.5)], false);
      balloonBody.setSize(balloonSize, false);
    }
    
    
    // *trialcount* updates
    if (t >= 0.0 && trialcount.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialcount.tStart = t;  // (not accounting for frame time here)
      trialcount.frameNStart = frameN;  // exact frame index
      
      trialcount.setAutoDraw(true);
    }
    
    
    // if trialcount is active this frame...
    if (trialcount.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *balloonValTxt* updates
    if (t >= 0.0 && balloonValTxt.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      balloonValTxt.setText(balloonEarnings, false);
      // keep track of start time/frame for later
      balloonValTxt.tStart = t;  // (not accounting for frame time here)
      balloonValTxt.frameNStart = frameN;  // exact frame index
      
      balloonValTxt.setAutoDraw(true);
    }
    
    
    // if balloonValTxt is active this frame...
    if (balloonValTxt.status === PsychoJS.Status.STARTED) {
      // update params
      balloonValTxt.setText(balloonEarnings, false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    bankButton.stop();
    // Run 'End Routine' code from updateEarnings
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if (_pj.in_es6("return", bankButton.keys)) {
        pump.finished = true;
        popped = false;
    } else {
        if (((pump.thisN + 1) === maxPumps)) {
            popped = true;
        } else {
            popped = false;
        }
        if (popped) {
            thisBalloonEarnings = 0.0;
            lastBalloonEarnings = 0.0;
        } else {
            lastBalloonEarnings = thisBalloonEarnings;
        }
    }
    
    // Run 'End Routine' code from setBalloonSize
    trials.addData("nPumps", (pump.thisN + 1));
    trials.addData("size", balloonSize);
    trials.addData("earnings", thisBalloonEarnings);
    trials.addData("popped", popped);
    trials.addData("maxPumps", maxPumps);
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedbackMaxDurationReached;
var feedbackMaxDuration;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    feedbackClock.reset(routineTimer.getTime());
    routineTimer.add(1.500000);
    feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from checkPopped
    lastBalloonEarnings = thisBalloonEarnings;
    bankedEarnings += thisBalloonEarnings;
    balloonEarnings = ("This balloon value:\n$" + util.round(thisBalloonEarnings, 2).toString());
    bankedText = ("You have banked:\n$" + util.round(bankedEarnings, 2).toString());
    pop_sound.setVolume(1);
    if ((popped === true)) {
        feedbackText = "Oops!Lost that one!";
        pop_sound.play();
    } else {
        feedbackText = ("You banked $" + util.round(lastBalloonEarnings, 2).toString());
    }
    
    feedbacktxt.setText(feedbackText);
    trialcount_2.setText(((("Ballon number\uff1a " + (trials.thisN + 1).toString()) + "/") + trials.nTotal.toString()));
    psychoJS.experiment.addData('feedback.started', globalClock.getTime());
    feedbackMaxDuration = null
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(background_3);
    feedbackComponents.push(feedbacktxt);
    feedbackComponents.push(bankedTxt_2);
    feedbackComponents.push(balloonValTxt_2);
    feedbackComponents.push(reminder_2);
    feedbackComponents.push(trialcount_2);
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback' ---
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *background_3* updates
    if (t >= 0.0 && background_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_3.tStart = t;  // (not accounting for frame time here)
      background_3.frameNStart = frameN;  // exact frame index
      
      background_3.setAutoDraw(true);
    }
    
    
    // if background_3 is active this frame...
    if (background_3.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (background_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      background_3.tStop = t;  // not accounting for scr refresh
      background_3.frameNStop = frameN;  // exact frame index
      // update status
      background_3.status = PsychoJS.Status.FINISHED;
      background_3.setAutoDraw(false);
    }
    
    
    // *feedbacktxt* updates
    if (t >= 0.0 && feedbacktxt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedbacktxt.tStart = t;  // (not accounting for frame time here)
      feedbacktxt.frameNStart = frameN;  // exact frame index
      
      feedbacktxt.setAutoDraw(true);
    }
    
    
    // if feedbacktxt is active this frame...
    if (feedbacktxt.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (feedbacktxt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      feedbacktxt.tStop = t;  // not accounting for scr refresh
      feedbacktxt.frameNStop = frameN;  // exact frame index
      // update status
      feedbacktxt.status = PsychoJS.Status.FINISHED;
      feedbacktxt.setAutoDraw(false);
    }
    
    
    // *bankedTxt_2* updates
    if (t >= 0.0 && bankedTxt_2.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      bankedTxt_2.setText(bankedText, false);
      // keep track of start time/frame for later
      bankedTxt_2.tStart = t;  // (not accounting for frame time here)
      bankedTxt_2.frameNStart = frameN;  // exact frame index
      
      bankedTxt_2.setAutoDraw(true);
    }
    
    
    // if bankedTxt_2 is active this frame...
    if (bankedTxt_2.status === PsychoJS.Status.STARTED) {
      // update params
      bankedTxt_2.setText(bankedText, false);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (bankedTxt_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      bankedTxt_2.tStop = t;  // not accounting for scr refresh
      bankedTxt_2.frameNStop = frameN;  // exact frame index
      // update status
      bankedTxt_2.status = PsychoJS.Status.FINISHED;
      bankedTxt_2.setAutoDraw(false);
    }
    
    
    // *balloonValTxt_2* updates
    if (t >= 0.0 && balloonValTxt_2.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      balloonValTxt_2.setText(balloonEarnings, false);
      // keep track of start time/frame for later
      balloonValTxt_2.tStart = t;  // (not accounting for frame time here)
      balloonValTxt_2.frameNStart = frameN;  // exact frame index
      
      balloonValTxt_2.setAutoDraw(true);
    }
    
    
    // if balloonValTxt_2 is active this frame...
    if (balloonValTxt_2.status === PsychoJS.Status.STARTED) {
      // update params
      balloonValTxt_2.setText(balloonEarnings, false);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (balloonValTxt_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      balloonValTxt_2.tStop = t;  // not accounting for scr refresh
      balloonValTxt_2.frameNStop = frameN;  // exact frame index
      // update status
      balloonValTxt_2.status = PsychoJS.Status.FINISHED;
      balloonValTxt_2.setAutoDraw(false);
    }
    
    
    // *reminder_2* updates
    if (t >= 0.0 && reminder_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reminder_2.tStart = t;  // (not accounting for frame time here)
      reminder_2.frameNStart = frameN;  // exact frame index
      
      reminder_2.setAutoDraw(true);
    }
    
    
    // if reminder_2 is active this frame...
    if (reminder_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (reminder_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      reminder_2.tStop = t;  // not accounting for scr refresh
      reminder_2.frameNStop = frameN;  // exact frame index
      // update status
      reminder_2.status = PsychoJS.Status.FINISHED;
      reminder_2.setAutoDraw(false);
    }
    
    
    // *trialcount_2* updates
    if (t >= 0.0 && trialcount_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialcount_2.tStart = t;  // (not accounting for frame time here)
      trialcount_2.frameNStart = frameN;  // exact frame index
      
      trialcount_2.setAutoDraw(true);
    }
    
    
    // if trialcount_2 is active this frame...
    if (trialcount_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (trialcount_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      trialcount_2.tStop = t;  // not accounting for scr refresh
      trialcount_2.frameNStop = frameN;  // exact frame index
      // update status
      trialcount_2.status = PsychoJS.Status.FINISHED;
      trialcount_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback' ---
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('feedback.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (feedbackMaxDurationReached) {
        feedbackClock.add(feedbackMaxDuration);
    } else {
        feedbackClock.add(1.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var finalScoreMaxDurationReached;
var _key_resp_2_allKeys;
var finalScoreMaxDuration;
var finalScoreComponents;
function finalScoreRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'finalScore' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    finalScoreClock.reset();
    routineTimer.reset();
    finalScoreMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from finalScoreCode
    scoreText = `Well done! You banked a total of
    $${bankedEarnings}`
    ;
    
    scoremsg.setText(scoreText);
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS.experiment.addData('finalScore.started', globalClock.getTime());
    finalScoreMaxDuration = null
    // keep track of which components have finished
    finalScoreComponents = [];
    finalScoreComponents.push(background_4);
    finalScoreComponents.push(scoremsg);
    finalScoreComponents.push(text_2);
    finalScoreComponents.push(key_resp_2);
    
    for (const thisComponent of finalScoreComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function finalScoreRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'finalScore' ---
    // get current time
    t = finalScoreClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *background_4* updates
    if (t >= 0.0 && background_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_4.tStart = t;  // (not accounting for frame time here)
      background_4.frameNStart = frameN;  // exact frame index
      
      background_4.setAutoDraw(true);
    }
    
    
    // if background_4 is active this frame...
    if (background_4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *scoremsg* updates
    if (t >= 0.0 && scoremsg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      scoremsg.tStart = t;  // (not accounting for frame time here)
      scoremsg.frameNStart = frameN;  // exact frame index
      
      scoremsg.setAutoDraw(true);
    }
    
    
    // if scoremsg is active this frame...
    if (scoremsg.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // if text_2 is active this frame...
    if (text_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    // if key_resp_2 is active this frame...
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: 'return', waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of finalScoreComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function finalScoreRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'finalScore' ---
    for (const thisComponent of finalScoreComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('finalScore.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "finalScore" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction_fishMaxDurationReached;
var instruction_fishMaxDuration;
var instruction_fishComponents;
function instruction_fishRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_fish' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instruction_fishClock.reset();
    routineTimer.reset();
    instruction_fishMaxDurationReached = false;
    // update component parameters for each repeat
    // reset start_button_fish to account for continued clicks & clear times on/off
    start_button_fish.reset()
    psychoJS.experiment.addData('instruction_fish.started', globalClock.getTime());
    instruction_fishMaxDuration = null
    // keep track of which components have finished
    instruction_fishComponents = [];
    instruction_fishComponents.push(background_fish);
    instruction_fishComponents.push(instructions_txt_fish);
    instruction_fishComponents.push(start_button_fish);
    
    for (const thisComponent of instruction_fishComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction_fishRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_fish' ---
    // get current time
    t = instruction_fishClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *background_fish* updates
    if (t >= 0.0 && background_fish.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_fish.tStart = t;  // (not accounting for frame time here)
      background_fish.frameNStart = frameN;  // exact frame index
      
      background_fish.setAutoDraw(true);
    }
    
    
    // if background_fish is active this frame...
    if (background_fish.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *instructions_txt_fish* updates
    if (t >= 0.0 && instructions_txt_fish.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_txt_fish.tStart = t;  // (not accounting for frame time here)
      instructions_txt_fish.frameNStart = frameN;  // exact frame index
      
      instructions_txt_fish.setAutoDraw(true);
    }
    
    
    // if instructions_txt_fish is active this frame...
    if (instructions_txt_fish.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *start_button_fish* updates
    if (t >= 0 && start_button_fish.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_button_fish.tStart = t;  // (not accounting for frame time here)
      start_button_fish.frameNStart = frameN;  // exact frame index
      
      start_button_fish.setAutoDraw(true);
    }
    
    
    // if start_button_fish is active this frame...
    if (start_button_fish.status === PsychoJS.Status.STARTED) {
    }
    
    if (start_button_fish.status === PsychoJS.Status.STARTED) {
      // check whether start_button_fish has been pressed
      if (start_button_fish.isClicked) {
        if (!start_button_fish.wasClicked) {
          // store time of first click
          start_button_fish.timesOn.push(start_button_fish.clock.getTime());
          // store time clicked until
          start_button_fish.timesOff.push(start_button_fish.clock.getTime());
        } else {
          // update time clicked until;
          start_button_fish.timesOff[start_button_fish.timesOff.length - 1] = start_button_fish.clock.getTime();
        }
        if (!start_button_fish.wasClicked) {
          // end routine when start_button_fish is clicked
          continueRoutine = false;
          
        }
        // if start_button_fish is still clicked next frame, it is not a new click
        start_button_fish.wasClicked = true;
      } else {
        // if start_button_fish is clicked next frame, it is a new click
        start_button_fish.wasClicked = false;
      }
    } else {
      // keep clock at 0 if start_button_fish hasn't started / has finished
      start_button_fish.clock.reset();
      // if start_button_fish is clicked next frame, it is a new click
      start_button_fish.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction_fishComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_fishRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_fish' ---
    for (const thisComponent of instruction_fishComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction_fish.stopped', globalClock.getTime());
    psychoJS.experiment.addData('start_button_fish.numClicks', start_button_fish.numClicks);
    psychoJS.experiment.addData('start_button_fish.timesOn', start_button_fish.timesOn);
    psychoJS.experiment.addData('start_button_fish.timesOff', start_button_fish.timesOff);
    // the Routine "instruction_fish" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_fishMaxDurationReached;
var gotValidClick;
var fish_remaining;
var fish_trial_text;
var trial_fishMaxDuration;
var trial_fishComponents;
function trial_fishRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_fish' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trial_fishClock.reset();
    routineTimer.reset();
    trial_fishMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // Run 'Begin Routine' code from control_wins
    if ((lake1_wins.length === 0)) {
        lake1_wins = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1];
    }
    if ((lake2_wins.length === 0)) {
        lake2_wins = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1];
    }
    if ((lake3_wins.length === 0)) {
        lake3_wins = [0, 0, 1, 1, 1, 1, 1, 1, 1, 1];
    }
    util.shuffle(lake1_wins);
    util.shuffle(lake2_wins);
    util.shuffle(lake3_wins);
    rod.setPos([(- 500), (- 500)]);
    
    fishcount.setText(("Fish caught: " + nfish.toString()));
    // Run 'Begin Routine' code from fishCounter
    fish_trial_index += 1;
    fish_remaining = (100 - fish_trial_index);
    fish_trial_text = ((("Fishing trial " + fish_trial_index.toString()) + " of 100\nRemaining chances: ") + fish_remaining.toString());
    
    fishTrialDisplay.setText(fish_trial_text);
    psychoJS.experiment.addData('trial_fish.started', globalClock.getTime());
    trial_fishMaxDuration = null
    // keep track of which components have finished
    trial_fishComponents = [];
    trial_fishComponents.push(instruct_fish);
    trial_fishComponents.push(lake1);
    trial_fishComponents.push(lake2);
    trial_fishComponents.push(lake3);
    trial_fishComponents.push(mouse);
    trial_fishComponents.push(rod);
    trial_fishComponents.push(fishcountim);
    trial_fishComponents.push(fishcount);
    trial_fishComponents.push(fishTrialDisplay);
    
    for (const thisComponent of trial_fishComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function trial_fishRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_fish' ---
    // get current time
    t = trial_fishClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruct_fish* updates
    if (t >= 0.0 && instruct_fish.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruct_fish.tStart = t;  // (not accounting for frame time here)
      instruct_fish.frameNStart = frameN;  // exact frame index
      
      instruct_fish.setAutoDraw(true);
    }
    
    
    // if instruct_fish is active this frame...
    if (instruct_fish.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *lake1* updates
    if (t >= 0.0 && lake1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lake1.tStart = t;  // (not accounting for frame time here)
      lake1.frameNStart = frameN;  // exact frame index
      
      lake1.setAutoDraw(true);
    }
    
    
    // if lake1 is active this frame...
    if (lake1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *lake2* updates
    if (t >= 0.0 && lake2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lake2.tStart = t;  // (not accounting for frame time here)
      lake2.frameNStart = frameN;  // exact frame index
      
      lake2.setAutoDraw(true);
    }
    
    
    // if lake2 is active this frame...
    if (lake2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *lake3* updates
    if (t >= 0.0 && lake3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lake3.tStart = t;  // (not accounting for frame time here)
      lake3.frameNStart = frameN;  // exact frame index
      
      lake3.setAutoDraw(true);
    }
    
    
    // if lake3 is active this frame...
    if (lake3.status === PsychoJS.Status.STARTED) {
    }
    
    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if mouse is active this frame...
    if (mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse.clickableObjects = eval([lake1, lake2, lake3])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse.clickableObjects)) {
              mouse.clickableObjects = [mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse.clickableObjects) {
              if (obj.contains(mouse)) {
                  gotValidClick = true;
                  mouse.clicked_name.push(obj.name);
              }
          }
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse.clickableObjects = eval([lake1, lake2, lake3])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse.clickableObjects)) {
              mouse.clickableObjects = [mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse.clickableObjects) {
              if (obj.contains(mouse)) {
                  gotValidClick = true;
                  mouse.clicked_name.push(obj.name);
              }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mouse.getPos();
            mouse.x.push(_mouseXYs[0]);
            mouse.y.push(_mouseXYs[1]);
            mouse.leftButton.push(_mouseButtons[0]);
            mouse.midButton.push(_mouseButtons[1]);
            mouse.rightButton.push(_mouseButtons[2]);
            mouse.time.push(mouse.mouseClock.getTime());
          }
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *rod* updates
    if (t >= 0.0 && rod.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      rod.setPos(mouse.getPos(), false);
      // keep track of start time/frame for later
      rod.tStart = t;  // (not accounting for frame time here)
      rod.frameNStart = frameN;  // exact frame index
      
      rod.setAutoDraw(true);
    }
    
    
    // if rod is active this frame...
    if (rod.status === PsychoJS.Status.STARTED) {
      // update params
      rod.setPos(mouse.getPos(), false);
    }
    
    
    // *fishcountim* updates
    if (t >= 0.0 && fishcountim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fishcountim.tStart = t;  // (not accounting for frame time here)
      fishcountim.frameNStart = frameN;  // exact frame index
      
      fishcountim.setAutoDraw(true);
    }
    
    
    // if fishcountim is active this frame...
    if (fishcountim.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *fishcount* updates
    if (t >= 0.0 && fishcount.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fishcount.tStart = t;  // (not accounting for frame time here)
      fishcount.frameNStart = frameN;  // exact frame index
      
      fishcount.setAutoDraw(true);
    }
    
    
    // if fishcount is active this frame...
    if (fishcount.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *fishTrialDisplay* updates
    if (t >= 0.0 && fishTrialDisplay.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fishTrialDisplay.tStart = t;  // (not accounting for frame time here)
      fishTrialDisplay.frameNStart = frameN;  // exact frame index
      
      fishTrialDisplay.setAutoDraw(true);
    }
    
    
    // if fishTrialDisplay is active this frame...
    if (fishTrialDisplay.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_fishComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var outcome;
var fb_txt;
function trial_fishRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_fish' ---
    for (const thisComponent of trial_fishComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_fish.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse.x', mouse.x);
    psychoJS.experiment.addData('mouse.y', mouse.y);
    psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton);
    psychoJS.experiment.addData('mouse.midButton', mouse.midButton);
    psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton);
    psychoJS.experiment.addData('mouse.time', mouse.time);
    psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name);
    
    // Run 'End Routine' code from control_wins
    if ((mouse.clicked_name.slice((- 1))[0] === "lake1")) {
        outcome = lake1_wins.slice((- 1))[0];
        lake1_wins.splice((lake1_wins.length - 1), 1);
    }
    if ((mouse.clicked_name.slice((- 1))[0] === "lake2")) {
        outcome = lake2_wins.slice((- 1))[0];
        lake2_wins.splice((lake2_wins.length - 1), 1);
    }
    if ((mouse.clicked_name.slice((- 1))[0] === "lake3")) {
        outcome = lake3_wins.slice((- 1))[0];
        lake3_wins.splice((lake3_wins.length - 1), 1);
    }
    if ((outcome === 1)) {
        fb_txt = "You caught a fish!";
    } else {
        fb_txt = "You did not catch a fish.";
    }
    psychoJS.experiment.addData("outcome", outcome);
    nfish += outcome;
    psychoJS.experiment.addData("nfish", nfish);
    
    // the Routine "trial_fish" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedback_fishMaxDurationReached;
var fish_images;
var fish_im;
var feedback_fishMaxDuration;
var feedback_fishComponents;
function feedback_fishRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback_fish' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    feedback_fishClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    feedback_fishMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_fish
    if ((outcome === 1)) {
        fish_images = ["images/fish2.png", "images/fish3.png", "images/fish4.png"];
        util.shuffle(fish_images);
        fish_im = fish_images.slice((- 1))[0];
    } else {
        fish_im = "images/nofish.png";
    }
    psychoJS.experiment.addData("fish_im", fish_im);
    
    fb_txtbox.setText(fb_txt);
    fb_image.setImage(fish_im);
    fishcount_2.setText(("Fish caught: " + nfish.toString()));
    psychoJS.experiment.addData('feedback_fish.started', globalClock.getTime());
    feedback_fishMaxDuration = null
    // keep track of which components have finished
    feedback_fishComponents = [];
    feedback_fishComponents.push(fb_txtbox);
    feedback_fishComponents.push(fb_image);
    feedback_fishComponents.push(fishcountim_2);
    feedback_fishComponents.push(fishcount_2);
    
    for (const thisComponent of feedback_fishComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedback_fishRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback_fish' ---
    // get current time
    t = feedback_fishClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fb_txtbox* updates
    if (t >= 0.0 && fb_txtbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fb_txtbox.tStart = t;  // (not accounting for frame time here)
      fb_txtbox.frameNStart = frameN;  // exact frame index
      
      fb_txtbox.setAutoDraw(true);
    }
    
    
    // if fb_txtbox is active this frame...
    if (fb_txtbox.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fb_txtbox.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fb_txtbox.tStop = t;  // not accounting for scr refresh
      fb_txtbox.frameNStop = frameN;  // exact frame index
      // update status
      fb_txtbox.status = PsychoJS.Status.FINISHED;
      fb_txtbox.setAutoDraw(false);
    }
    
    
    // *fb_image* updates
    if (t >= 0.0 && fb_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fb_image.tStart = t;  // (not accounting for frame time here)
      fb_image.frameNStart = frameN;  // exact frame index
      
      fb_image.setAutoDraw(true);
    }
    
    
    // if fb_image is active this frame...
    if (fb_image.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fb_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fb_image.tStop = t;  // not accounting for scr refresh
      fb_image.frameNStop = frameN;  // exact frame index
      // update status
      fb_image.status = PsychoJS.Status.FINISHED;
      fb_image.setAutoDraw(false);
    }
    
    
    // *fishcountim_2* updates
    if (t >= 0.0 && fishcountim_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fishcountim_2.tStart = t;  // (not accounting for frame time here)
      fishcountim_2.frameNStart = frameN;  // exact frame index
      
      fishcountim_2.setAutoDraw(true);
    }
    
    
    // if fishcountim_2 is active this frame...
    if (fishcountim_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fishcountim_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fishcountim_2.tStop = t;  // not accounting for scr refresh
      fishcountim_2.frameNStop = frameN;  // exact frame index
      // update status
      fishcountim_2.status = PsychoJS.Status.FINISHED;
      fishcountim_2.setAutoDraw(false);
    }
    
    
    // *fishcount_2* updates
    if (t >= 0.0 && fishcount_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fishcount_2.tStart = t;  // (not accounting for frame time here)
      fishcount_2.frameNStart = frameN;  // exact frame index
      
      fishcount_2.setAutoDraw(true);
    }
    
    
    // if fishcount_2 is active this frame...
    if (fishcount_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fishcount_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fishcount_2.tStop = t;  // not accounting for scr refresh
      fishcount_2.frameNStop = frameN;  // exact frame index
      // update status
      fishcount_2.status = PsychoJS.Status.FINISHED;
      fishcount_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedback_fishComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback_fishRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback_fish' ---
    for (const thisComponent of feedback_fishComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('feedback_fish.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (feedback_fishMaxDurationReached) {
        feedback_fishClock.add(feedback_fishMaxDuration);
    } else {
        feedback_fishClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var end_fishMaxDurationReached;
var end_fishMaxDuration;
var end_fishComponents;
function end_fishRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end_fish' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    end_fishClock.reset();
    routineTimer.reset();
    end_fishMaxDurationReached = false;
    // update component parameters for each repeat
    end_txt.setText((("That is the end! \nYou caught " + nfish.toString()) + " fish!\nThank you for your participation!\nPlease press the \"Exit\" button to finish the experiment and save your data.\nIf you close the window or exit manually, your data may not be saved properly."));
    // reset exit_button to account for continued clicks & clear times on/off
    exit_button.reset()
    psychoJS.experiment.addData('end_fish.started', globalClock.getTime());
    end_fishMaxDuration = null
    // keep track of which components have finished
    end_fishComponents = [];
    end_fishComponents.push(background_5);
    end_fishComponents.push(end_txt);
    end_fishComponents.push(exit_button);
    
    for (const thisComponent of end_fishComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function end_fishRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end_fish' ---
    // get current time
    t = end_fishClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *background_5* updates
    if (t >= 0.0 && background_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      background_5.tStart = t;  // (not accounting for frame time here)
      background_5.frameNStart = frameN;  // exact frame index
      
      background_5.setAutoDraw(true);
    }
    
    
    // if background_5 is active this frame...
    if (background_5.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *end_txt* updates
    if (t >= 0.0 && end_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_txt.tStart = t;  // (not accounting for frame time here)
      end_txt.frameNStart = frameN;  // exact frame index
      
      end_txt.setAutoDraw(true);
    }
    
    
    // if end_txt is active this frame...
    if (end_txt.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *exit_button* updates
    if (t >= 0 && exit_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exit_button.tStart = t;  // (not accounting for frame time here)
      exit_button.frameNStart = frameN;  // exact frame index
      
      exit_button.setAutoDraw(true);
    }
    
    
    // if exit_button is active this frame...
    if (exit_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (exit_button.status === PsychoJS.Status.STARTED) {
      // check whether exit_button has been pressed
      if (exit_button.isClicked) {
        if (!exit_button.wasClicked) {
          // store time of first click
          exit_button.timesOn.push(exit_button.clock.getTime());
          // store time clicked until
          exit_button.timesOff.push(exit_button.clock.getTime());
        } else {
          // update time clicked until;
          exit_button.timesOff[exit_button.timesOff.length - 1] = exit_button.clock.getTime();
        }
        if (!exit_button.wasClicked) {
          // end routine when exit_button is clicked
          continueRoutine = false;
          
        }
        // if exit_button is still clicked next frame, it is not a new click
        exit_button.wasClicked = true;
      } else {
        // if exit_button is clicked next frame, it is a new click
        exit_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exit_button hasn't started / has finished
      exit_button.clock.reset();
      // if exit_button is clicked next frame, it is a new click
      exit_button.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of end_fishComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_fishRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end_fish' ---
    for (const thisComponent of end_fishComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('end_fish.stopped', globalClock.getTime());
    psychoJS.experiment.addData('exit_button.numClicks', exit_button.numClicks);
    psychoJS.experiment.addData('exit_button.timesOn', exit_button.timesOn);
    psychoJS.experiment.addData('exit_button.timesOff', exit_button.timesOff);
    // the Routine "end_fish" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var datauploadMaxDurationReached;
var datauploadMaxDuration;
var datauploadComponents;
function datauploadRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'dataupload' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    datauploadClock.reset();
    routineTimer.reset();
    datauploadMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('dataupload.started', globalClock.getTime());
    datauploadMaxDuration = null
    // keep track of which components have finished
    datauploadComponents = [];
    
    for (const thisComponent of datauploadComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function datauploadRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'dataupload' ---
    // get current time
    t = datauploadClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of datauploadComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function datauploadRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'dataupload' ---
    for (const thisComponent of datauploadComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('dataupload.stopped', globalClock.getTime());
    // the Routine "dataupload" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  // ------------------------------------------------------
  // Disable downloading results to browser
  // ------------------------------------------------------
  psychoJS._saveResults = 0;
  
  
  // ------------------------------------------------------
  // Generate filename for results
  // ------------------------------------------------------
  let filename = psychoJS._experiment.experimentName + '_' + psychoJS._experiment._datetime + '.csv';
  
  
  // ------------------------------------------------------
  // Extract data object from experiment
  // ------------------------------------------------------
  let dataObj = psychoJS._experiment._trialsData;
  
  
  // ------------------------------------------------------
  // Convert data object to CSV
  // ------------------------------------------------------
  let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
      return Object.values(it).toString()
  }).join('\n')
  
  
  // ------------------------------------------------------
  // Send data to OSF via DataPipe
  // ------------------------------------------------------
  console.log('Saving data...');
  fetch('https://pipe.jspsych.org/api/data', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
      },
      body: JSON.stringify({
          experimentID: "jxesP2yFi9EA",  // 请在此处填写你自己的 DataPipe Experiment ID
          filename:filename,
          data: data,
      }),
  }).then(response => response.json()).then(data => {
      //log response and force experiment end
      console.log(data);
      quitPsychoJS();
  })
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
