module.exports = {


    "prod": {
        "loginUrl": "https://bb-dev.cambridgeone.org/",
        "teacher": {

        },
        "student": {
            "email": "cqalearnerprod",
            "password": "Compro11"
        },
        // Page Completion Timeout
        "timeout": 60000
    },

    "dev": {
        "loginUrl": "https://bb-dev.comprodls.com/",
        "student": {
            "email": "lavishbblearner",
            "password": "Compro11"
        },
        // Page Completion Timeout
        "timeout": 60000
    },
    // Overall Time out for Test Completion
    "overallTimeout": 300000
}