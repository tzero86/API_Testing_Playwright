Feature: As an API I can update posts

    
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



    @smoke
    @regression
    Scenario: As an API I cannot update a post that does not exist
        Given I update the 200th "posts" with an "updated post"
        And the response was unsuccessful
        Then the response status code is 500
        And the response text contains the attributes:
            | Cannot read properties of undefined (reading 'id') |