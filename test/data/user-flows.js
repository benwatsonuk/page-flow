module.exports.userflowv1 = {
  "sprintDetails": {
    "highLevelFeedback": {
      "positive": [
        "Positive feedback 1",
        "Positive feedback 2"
      ],
      "negative": [
        "Negative feedback 1",
        "Negative feedback 2"
      ]
    },
    "urDetails": [
      {
        "where": "User testing lab, London",
        "who": "2 users"
      }
    ]
  },
  "journeys": [
    {
      "name": "Example journey 1",
      "userType": "individual",
      "id": "example1",
      "sheetsId": "123",
      "urCsv": "lab-notes.csv",
      "description": "Example journey 1",
      "changeLog": [
        "Change 1",
        "Change 2",
        "Change 3"
      ],
      "userQuotes": [
        "Quote 1",
        "Quote 2",
        "Quote 3"
      ],
      "flow": [
        {
          "stage": "example1",
          "version": 0,
          "pageId": "1",
          "location": "example1"
        },
        {
          "stage": "example2",
          "version": 0,
          "pageId": "1",
          "location": "example1"
        },
        {
          "stage": "example1",
          "version": 0,
          "pageId": "2",
          "location": "example2"
        },
        {
          "stage": "example1",
          "version": 0,
          "pageId": "2",
          "location": "example2?query=foo&query2=bar"
        }
      ]
    }
  ]
}

module.exports.userflowv2 = {
  "sprintDetails": {
    "highLevelFeedback": {
      "positive": [
        "Positive feedback 1",
        "Positive feedback 2"
      ],
      "negative": [
        "Negative feedback 1",
        "Negative feedback 2"
      ]
    },
    "urDetails": [
      {
        "where": "User testing lab, London",
        "who": "2 users"
      }
    ]
  },
  "journeys": [
    {
      "name": "Example journey 1",
      "userType": "individual",
      "id": "example1",
      "sheetsId": "123",
      "urCsv": "lab-notes.csv",
      "description": "Example journey 1",
      "changeLog": [
        "Change 1",
        "Change 2",
        "Change 3"
      ],
      "userQuotes": [
        "Quote 1",
        "Quote 2",
        "Quote 3"
      ],
      "flow": [
        {
          "stage": "example1",
          "version": 0,
          "pageId": "1",
          "location": "example1"
        },
        {
          "stage": "example2",
          "version": 1,
          "pageId": "1",
          "location": "example1"
        },
        {
          "stage": "example1",
          "version": 0,
          "pageId": "2",
          "location": "example2"
        },
        {
          "stage": "example1",
          "version": 0,
          "pageId": "2",
          "location": "example2?query=foo&query2=bar"
        }
      ]
    }
  ]
}
