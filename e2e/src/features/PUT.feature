Feature: As an API I can update posts

    @dev
    @smoke
    @regression
    Scenario: As an API I can update a specific post
        Given I update the 1st "posts" with an "updated post"
        And the response was successful
        Then the response status code is 200
        And the response json contains the attributes:
            | title  | Replacement post                  |
            | body   | This is a completely updated post |
            | userId | 1                                 |
            | id     | 1                                 |