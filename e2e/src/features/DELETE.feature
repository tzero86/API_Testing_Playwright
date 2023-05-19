Feature: As an API I can delete users


    @dev
    @smoke
    @regression
    Scenario: As an API I can delete specific posts
        Given I delete the 1st "posts"
        And the response was successful
        Then the response status code is 200
        And the response json contains the attributes:
            | {} |

