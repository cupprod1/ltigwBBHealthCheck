module.exports = {


    "prod": {
        "loginUrl": "https://blackboard.cambridgeone.org/",
        "teacher": {

        },
        "student": {
            "email": "cqabbprodlearner1",
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