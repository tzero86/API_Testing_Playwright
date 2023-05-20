Feature: As an API I can create posts


    @smoke
    @regression
    Scenario: As an API I can create a new post
        Given I create a new "posts" with "new post"
        And the response is successful
        Then the response status code is 201
        And the response json contains the attributes:
            | id     | 101                     |
            | title  | This is a new title     |
            | userId | 1                       |
            | body   | This is a new post body |