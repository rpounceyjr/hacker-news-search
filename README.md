# Hacker News Search

### **by Roger Pouncey** 

Email: rpounceyjr@gmail.com


A simple React app that searches the Hacker News Algolia API and displays a list of results.  The useState hook is used to store the current search term and search results while Redux is used to store previous search terms.  Clicking on any of the search results routes the user to the corresponding article page.  Clicking on a previous search term will again search the API with that search term, this time without storing the term again in the previous search terms store.

