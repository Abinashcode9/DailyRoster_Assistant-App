'use strict';

// Import the Dialogflow module from the Actions on Google client library.
const {
    dialogflow,
    Permission,
    Suggestions,
    Confirmation
} = require('actions-on-google');

// Import the firebase-functions package for deployment.
const functions = require('firebase-functions');

// Instantiate the Dialogflow client.
const app = dialogflow({
    debug: true
});

const timeTable = [

    {
        "dayId": "1",
        "classes": [
            {
                "subject": "Advanced Computer Architecture Lab",
                "time": new Date('Jan 1, 2018 08:00:00'),
                "teacher": "Mr. Tarini Mishra",
                "room": 366
	},
            {
                "subject": "Advanced Computer Architecture LAB",
                "time": new Date('Jan 1, 2018 08:55:00'),
                "teacher": "Mr. Tarini Mishra",
                "room": 366
	},
            {
                "subject": "Computer Graphics",
                "time": new Date('Jan 1, 2018 09:50:00'),
                "teacher": "Mr. Nihar Ranjan Nayak",
                "room": 467
	},
            {
                "subject": "Lunch",
                "time": new Date('Jan 1, 2018 10:45:00'),
                "teacher": "Mr. Chef",
                "room": "Cafe"
	},
            {
                "subject": "IOT",
                "time": new Date('Jan 1, 2018 11:40:00'),
                "teacher": "Mr. Asif Udin Khan",
                "room": 467
	},
            {
                "subject": "DMDW/Cloud Computing",
                "time": new Date('Jan 1, 2018 12:35:00'),
                "teacher": "Mrs Pamela Choudhary or Mrs Kasturi Dhal",
                "room": "467/456"
	},
            {
                "subject": "PPT",
                "time": new Date('Jan 1, 2018 13:30:00'),
                "teacher": "Confidence Factory",
                "room": "Conference Hall"
	},
            {
                "subject": "PPT",
                "time": new Date('Jan 1, 2018 14:25:00'),
                "teacher": "Confidence Factory",
                "room": "Conference Hall"
	},
            {
                "subject": "Real Time Systems",
                "time": new Date('Jan 1, 2018 15:20:00'),
                "teacher": "Mr. Bikram Keshari Mishra",
                "room": 467
	}]
    },

    {
        //##########################################
        //Time Table of TUESDAY

        "dayId": "2",
        "classes": [
            {
                "subject": "Advanced Computer Architecture",
                "time": new Date('Jan 1, 2018 08:00:00'),
                "teacher": "Mr. Tarini Mishra",
                "room": 458
	},
            {
                "subject": "Computer Graphics",
                "time": new Date('Jan 1, 2018 08:55:00'),
                "teacher": "Mr. Nihar Ranjan Nayak",
                "room": 458
	},
            {
                "subject": "Advanced LAB",
                "time": new Date('Jan 1, 2018 09:50:00'),
                "teacher": "Mr. Amarjeet Mohanty",
                "room": 361
	},
            {
                "subject": "Advanced LAB",
                "time": new Date('Jan 1, 2018 10:45:00'),
                "teacher": "Mr. Amarjeet Mohanty",
                "room": 361
	},
            {
                "subject": "Lunch",
                "time": new Date('Jan 1, 2018 11:40:00'),
                "teacher": "Mr. Chef",
                "room": "Cafe"
	},
            {
                "subject": "OS",
                "time": new Date('Jan 1, 2018 12:35:00'),
                "teacher": "Mr Jasaswi Prasad",
                "room": 452
	},
            {
                "subject": "IOT",
                "time": new Date('Jan 1, 2018 13:30:00'),
                "teacher": "Mr Asif Udin Khan",
                "room": 458
	},
            {
                "subject": "DMDW/Cloud Computing",
                "time": new Date('Jan 1, 2018 14:25:00'),
                "teacher": "Mrs Pamela",
                "room": "458/452"
	},
            {
                "subject": "Real Time Systems",
                "time": new Date('Jan 1, 2018 15:20:00'),
                "teacher": "Mr. Bikram Keshari Mishra",
                "room": 452
	}]
    },

    {
        //###########################################
        //Time Table of WEDNESDAY

        "dayId": "3",
        "classes": [
            {
                "subject": "PPT",
                "time": new Date('Jan 1, 2018 08:00:00'),
                "teacher": "Confidence Factory",
                "room": "Conference Hall"
	},
            {
                "subject": "PPT",
                "time": new Date('Jan 1, 2018 08:55:00'),
                "teacher": "Confidence Factory",
                "room": "Conference Hall"
	},
            {
                "subject": "DMDW/Cloud Computing",
                "time": new Date('Jan 1, 2018 09:50:00'),
                "teacher": "Mrs. Pamela",
                "room": "456A/467"
	},
            {
                "subject": "OS",
                "time": new Date('Jan 1, 2018 10:45:00'),
                "teacher": "Mr. Jasaswi Prasad",
                "room": 467
	},
            {
                "subject": "Lunch",
                "time": new Date('Jan 1, 2018 11:40:00'),
                "teacher": "Mr. Chef",
                "room": "Cafe"
	},
            {
                "subject": "Consultancy",
                "time": new Date('Jan 1, 2018 12:35:00'),
	},
            {
                "subject": "Computer Graphics LAB",
                "time": new Date('Jan 1, 2018 13:30:00'),
                "teacher": "Mr Nihar Ranjan Nayak",
                "room": 366
	},
            {
                "subject": "Computer Graphics LAB",
                "time": new Date('Jan 1, 2018 14:25:00'),
                "teacher": "Mr Nihar Ranjan Nayak",
                "room": 366
	},
            {
                "subject": "Consultancy",
                "time": new Date('Jan 1, 2018 15:20:00'),
                "teacher": "None",
                "room": "Home"
	}]
    },

    {
        //#######################################
        //Time Table of THURSDAY

        "dayId": "4",
        "classes": [
            {
                "subject": "NO CLASS",
                "time": new Date('Jan 1, 2018 08:00:00'),
	},
            {
                "subject": "IOT",
                "time": new Date('Jan 1, 2018 08:55:00'),
                "teacher": "Mr. Asif Udin Khan",
                "room": 456
	},
            {
                "subject": "PPT",
                "time": new Date('Jan 1, 2018 09:50:00'),
                "teacher": "Confidence Factory",
                "room": "Conference Hall"
	},
            {
                "subject": "PPT",
                "time": new Date('Jan 1, 2018 10:45:00'),
                "teacher": "Confidence Factory",
                "room": "Conference Hall"
	},
            {
                "subject": "Lunch",
                "time": new Date('Jan 1, 2018 11:40:00'),
                "teacher": "Mr. Chef",
                "room": "Cafe"
	},
            {
                "subject": "DMDW/Cloud Computing",
                "time": new Date('Jan 1, 2018 12:35:00'),
                "teacher": "Mrs Pamela",
                "room": "467/452"
	},
            {
                "subject": "Advanced Computer Architecture",
                "time": new Date('Jan 1, 2018 13:30:00'),
                "teacher": "Mr Tarini Mishra",
                "room": 452
	},
            {
                "subject": "Computer Graphics",
                "time": new Date('Jan 1, 2018 14:25:00'),
                "teacher": "Mr Nihar Ranjan Nayak",
                "room": 452
	},
            {
                "subject": "Real Time Systems",
                "time": new Date('Jan 1, 2018 15:20:00'),
                "teacher": "Mr. Bikram Keshari Mishra",
                "room": 452
	}]
    },

    {
        //#######################################
        //Time Table of FRIDAY

        "dayId": "5",
        "classes": [
            {
                "subject": "Advanced LAB",
                "time": new Date('Jan 1, 2018 08:00:00'),
                "teacher": "Mr. Amarjeet Mohanty",
                "room": 361
	},
            {
                "subject": "Advanced LAB",
                "time": new Date('Jan 1, 2018 08:55:00'),
                "teacher": "Mr. Amarjeet Mohanty",
                "room": 361
	},
            {
                "subject": "Advanced Computer Architecture",
                "time": new Date('Jan 1, 2018 09:50:00'),
                "teacher": "Mr. Tarini Mishra",
                "room": 335
	},
            {
                "subject": "Lunch",
                "time": new Date('Jan 1, 2018 10:45:00'),
                "teacher": "Mr. Chef",
                "room": "Cafe"
	},
            {
                "subject": "OS LAB",
                "time": new Date('Jan 1, 2018 11:40:00'),
                "teacher": "Mr. Jasaswi Prasad",
                "room": 357
	},
            {
                "subject": "OS LAB",
                "time": new Date('Jan 1, 2018 12:35:00'),
                "teacher": "Mr Jasaswi Prasad",
                "room": 357
	},
            {
                "subject": "OS",
                "time": new Date('Jan 1, 2018 13:30:00'),
                "teacher": "Mr Jasaswi Prasad",
                "room": 452
	},
            {
                "subject": "IOT",
                "time": new Date('Jan 1, 2018 14:25:00'),
                "teacher": "Mr Asif Udin Khan",
                "room": "331"
	},
            {
                "subject": "Real Time Systems",
                "time": new Date('Jan 1, 2018 15:20:00'),
                "teacher": "Mr. Bikram Keshari Mishra",
                "room": 452
	}]
        }];
let formatAMPM = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = ('0' + minutes).slice(-2);
    let strTime = `${hours}:${minutes} ${ampm}`;
    return strTime;
}
//let roundTime = (time) => {
//    let roundedTime = Math.round(time.getHours());
//    let minutes = time.getMinutes() > 30 ? 1 : 0;
//    roundedTime = minutes === 1 ? roundedTime + 1 : roundedTime;
//
//    return roundedTime;
//
//}
//let roundTimeNow = (time) => {
//    let roundedTime = Math.round(time.getHours());
//    let minutes = time.getMinutes() > 0 ? 1 : 0;
//    roundedTime = minutes === 1 ? roundedTime + 1 : roundedTime;
//
//    return roundedTime;
//
//}
let compareTime = (time1, time2) => {
    if (time1.getHours() === time2.getHours()) {
        let diff = time1.getMinutes() - time2.getMinutes();
        return diff;
    } else {
        let diff = ((time1.getHours() * 60) + time1.getMinutes()) - ((time2.getHours() * 60) + time2.getMinutes());
        return diff;
    }
}

let presentDate = () => {
    let gmtDate = new Date();
    let istDate = new Date(gmtDate.getTime() + 330 * 60000); // Uncomment this line in production
    //let istDate = new Date(`Aug 21, 2018 08:20:00`); //For Testing only, comment this line in production
    return istDate;
}


// Handle the Dialogflow intent named 'Default Welcome Intent'.
app.intent('Default Welcome Intent', (conv) => {

    if (!conv.user.storage.count) {
        conv.ask(new Confirmation('Can I get your academic details to serve you better?'));
//        conv.ask(`In which Semester are you in ?`);
//        conv.ask(new Suggestions(['5th', '7th', 'quit']));
        conv.ask(new Suggestions(['Yes', 'No']));
    } else {
        conv.ask(`Hello, How can I help you?`);
        conv.ask(new Suggestions(['next class', 'last class', 'about this app', 'Reset App']));
    }
});
app.intent('actions_intent_CONFIRMATION', (conv, params, confirmationGranted) => {
    if (confirmationGranted) {
        conv.ask(`In which Semester are you in ?`);
        conv.ask(new Suggestions(['5th', '7th', 'quit']));
    }
    else
        conv.close(`Sorry ! Without Academic Details this app can't work.`);
});

app.intent('semester_flag', (conv, {sem}) => {

    if (!conv.user.storage.count) {

        conv.user.storage.count = 1;
        conv.user.storage.sem = sem;
    }
    conv.ask(`Semester : ${conv.user.storage.sem}`);
    conv.ask(`How can I Help You?`);
    conv.ask(new Suggestions(['next class', 'last class', 'about this app']));
});

app.intent('reset data', (conv) => {
    conv.user.storage.count = 0;
    conv.user.storage.sem = 0;
    conv.close(`All User Data Erased Successfully !`);
});

app.intent('about me', (conv) => {
    conv.ask(`I am Daily Roster. Mr. Soumya and Dan Cruze are my developers.\nI keep track of the daily schedule of Siliconites. Currently, I am available for Siliconites only.`);
    conv.ask(`Daily Roster at your service.`);
    conv.ask(new Suggestions(['next class', 'last class', 'about this app']));
});

app.intent('next class', (conv) => {
    //let gmtDate = new Date();
    //let istDate = new Date(gmtDate.getTime() + 330 * 60000);
    let istDate = presentDate();
    let day = istDate.getDay();
    //let istAMPM = formatAMPM(istDate);
    if (day === 0 || day === 6) {
        conv.close(`It's Weekend ! No Classes. Enjoy !!!`);
    } else {

        let nextPeriod = timeTable.filter(dayMatch => dayMatch.dayId == day).map(upcomingClasses => upcomingClasses.classes);
        for (let items of nextPeriod) {
            let isMatched = 0;
            for (let item of items) {
                let timeDiff = compareTime(istDate, item.time);
                if (timeDiff >= 0 && timeDiff <= 5) {
                    conv.ask(`Your can attend ${item.subject} which is already going on Room No: ${item.room} by ${item.teacher}.`);
                    isMatched = 1;
                }
                if (timeDiff < 0) {
                    conv.ask(`Next Class is ${item.subject} at Room Number ${item.room} on ${formatAMPM(item.time)}. ${Math.abs(timeDiff)} mins to go.`);
                    conv.ask(`${item.teacher} will take the class.`);
                    isMatched = 1;
                    break;
                } else {
                    if (istDate.getHours() < 8) {
                        conv.ask(`Next class is ${items[0].subject} at Room Number ${items[0].room} on ${formatAMPM(items[0].time)}`);
                        conv.ask(`${items[0].teacher} will take the class.`);
                        isMatched = 1;
                        break;
                    }
                }

            }
            if (!isMatched)
                conv.close(`You have No Classes Left Today.`);
            else
                break;
        }
    }

    conv.ask(new Suggestions(['last class', 'about this app']));
});

app.intent('last class', (conv) => {
    let istDate = presentDate();
    let day = istDate.getDay();
    //let istAMPM = formatAMPM(istDate);
    if (day === 0 || day === 6) {
        conv.close(`It's Weekend ! No Classes. Enjoy !!!`);
    } else {

        let lastPeriod = timeTable.filter(dayMatch => dayMatch.dayId == day).map(lastClasses => lastClasses.classes);
        for (let items of lastPeriod) {
            let isMatched = 0;
            for (let item of items) {
                let timeDiff = compareTime(istDate, item.time);
                if (timeDiff >= 0 && timeDiff <= 10) {
                    conv.ask(`Your can attend ${item.subject} which is already going on Room No: ${item.room} by ${item.teacher}.`);
                    isMatched = 1;
                }
                if (timeDiff > 55 && timeDiff <= 110) {
                    conv.ask(`Your Last Class was ${item.subject} at Room Number ${item.room} which was on ${formatAMPM(item.time)} and was ended ${timeDiff - 55} mins ago.`);
                    conv.ask(`${item.teacher} has taken the class.`);
                    isMatched = 1;
                    break;
                } else {
                    if (istDate.getHours() < 8) {
                        conv.ask(`Your first class of the day is ${items[0].subject} at Room Number ${items[0].room} on ${formatAMPM(items[0].time)}`);
                        conv.ask(`${items[0].teacher} will take the class.`);
                        isMatched = 1;
                        break;
                    } else if (timeDiff < 0) {
                        conv.ask(`Your First Class is going on.`);
                        isMatched = 1;
                        break;
                    } else if ((item.time === items.slice(-1)[0].time) && !isMatched) {
                        let endedTime = (timeDiff - 55) < 60 ? `${timeDiff-55} mins` : `${parseFloat((timeDiff-55)/60).toFixed(2)} hours`;
                        conv.ask(`Your Last Class was ${item.subject} at Room Number ${item.room} which was on ${formatAMPM(item.time)} and was ended ${endedTime} ago.`);
                        conv.ask(`${item.teacher} has taken the class.`);
                        isMatched = 1;
                        break;
                    }
                }

            }
            if (!isMatched)
                conv.close(`You have No Classes Left Today.`);
            else
                break;
        }
    }
    conv.ask(new Suggestions(['next class', 'about this app']));
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
// Set the DialogflowApp object to handle the HTTPS POST request.
