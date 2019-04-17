module.exports.getPageInfoForUserFlow = {
  "hasHistory": [
    {
      "location": "/v0/example1/example2",
      "sprint": undefined,
      "version": 0
    }
  ],
  "journeyId": "example1",
  "location": "0/example1/example2",
  "navigation": {
    "next": {
      "link": "/0/user-flow/example1/example1/example2",
      "pageInfo": {
        "description": "Page 2",
        "id": "2",
        "location": "example2",
        "stageInfo": {
          "location": "example1",
          "name": "Example 1"
        },
        "title": "Page 2",
        "type": "text-input",
        "userNeeds": []
      }
    },
    "prev": {
      "link": "/0/user-flow/example1/example2/example1",
      "pageInfo": {
        "description": "Page 1",
        "id": "1",
        "location": "example1",
        "stageInfo": {
          "location": "example2",
          "name": "Example2"
        },
        "title": "Page 1",
        "type": "text-input",
        "userNeeds": []
      }
    }
  },
  "pageFlow": {
    "stages": [
      {
        "description": "",
        "id": "example1",
        "location": "example1",
        "name": "Example 1",
        "versions": [
          {
            "design-notes": "",
            "location": "example1",
            "pages": [
              {
                "description": "Page 1",
                "id": "1",
                "location": "example1",
                "title": "Page 1",
                "type": "checkbox-input",
                "userNeeds": []
              },
              {
                "description": "Page 2",
                "id": "2",
                "location": "example2",
                "stageInfo": {
                  "location": "example1",
                  "name": "Example 1"
                },
                "title": "Page 2",
                "type": "text-input",
                "userNeeds": []
              },
              {
                "description": "Page 3",
                "id": "3",
                "location": "example3",
                "title": "Page 3",
                "type": "confirmation",
                "userNeeds": []
              }
            ],
            "versionDirectory": "v0",
            "users": [
              "individual"
            ],
            "version": 0
          }
        ]
      },
      {
        "description": "Example 2",
        "id": "example2",
        "location": "example2",
        "name": "Example2",
        "versions": [
          {
            "design-notes": "",
            "location": "example2",
            "pages": [
              {
                "description": "Page 1",
                "id": "1",
                "location": "example1",
                "stageInfo": {
                  "location": "example2",
                  "name": "Example2"
                },
                "title": "Page 1",
                "type": "text-input",
                "userNeeds": []
              }
            ],
            "versionDirectory": "v0",
            "users": [
              "individual"
            ],
            "version": 0
          }
        ]
      }
    ]
  },
  "thisPage": {
    "description": "Page 2",
    "id": "2",
    "location": "example2",
    "stageInfo": {
      "location": "example1",
      "name": "Example 1"
    },
    "title": "Page 2",
    "type": "text-input",
    "userNeeds": []
  },
  "thisStage": {
    "description": "",
    "id": "example1",
    "location": "example1",
    "name": "Example 1",
    "versions": [
      {
        "design-notes": "",
        "location": "example1",
        "pages": [
          {
            "description": "Page 1",
            "id": "1",
            "location": "example1",
            "title": "Page 1",
            "type": "checkbox-input",
            "userNeeds": []
          },
          {
            "description": "Page 2",
            "id": "2",
            "location": "example2",
            "stageInfo": {
              "location": "example1",
              "name": "Example 1"
            },
            "title": "Page 2",
            "type": "text-input",
            "userNeeds": []
          },
          {
            "description": "Page 3",
            "id": "3",
            "location": "example3",
            "title": "Page 3",
            "type": "confirmation",
            "userNeeds": []
          }
        ],
        "versionDirectory": "v0",
        "users": [
          "individual"
        ],
        "version": 0
      }
    ]
  },
  "version": 0
}
