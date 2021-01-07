# AirBnb Clone React

# App Architecture:

- Home :
  - Header
  - Banner
    - Search
  - Cards
  - Footer
- Search Page
  - Header

## Home

### Header

Header container have 3 child & display Flex to pop its children to a Row and align-center to align everything to center:

- first container have the Airbnb Logo (container takes only the size of logo)
- middle container with `flex 1` to get all the space available & it have two child :
  - search box and search icon
- 3rd container have 4 child (a text and 3 icons)
