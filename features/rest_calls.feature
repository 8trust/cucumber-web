Feature: Example feature
  As a user
  I want to call a fake blog webservice
  So that I can prove that unirest is playing well with cucumber

  Scenario: Adding a fake post
    Given I have the payload {title: 'foo', body: 'bar',userId: 1}
    And I make "POST" rest call to "https://jsonplaceholder.typicode.com/posts"
    When I make "GET" rest call to "https://jsonplaceholder.typicode.com/posts?userId=1"
    Then I can see that response contains "qui est esse"
