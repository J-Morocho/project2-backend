# Project Overview


## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline `backend` and `frontend`| Incomplete
|Day 2| Working RestAPI | Incomplete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 4| MVP & Bug Fixes | Incomplete
|Day 5| Final Touches and Present | Incomplete

## Project Description

This is an API that will display events in NYC. A user will be able to query for events taking place in a specific borough. Once the user finds an event they can choose to add it to their event list.  A user model as well as an events model will be needed. Within the user model we will have The backend portion of this application will be focused on CRUD operations for events, as well as adding a selected events to a user's profile. 

## User story

- User is able to query for events in the database based on the Borough and/or event type
- User can choose to add an event to an event list
- The user can look at the event list for any particular person that is registered in the database
- The user can remove an event from the event list

## Google Sheet

- [Google Sheet](https://docs.google.com/spreadsheets/d/1DRhpnHYU-LVnRYKSALXm_xbMCZ3FsTs6Zl-VJ1MU49E/edit#gid=0)


## Wireframes

- [Mobile](https://res.cloudinary.com/jcloud3zf/image/upload/v1596216790/project2-api/p2-mobile_ih9xem.png)
- [Desktop](https://res.cloudinary.com/jcloud3zf/image/upload/v1596221033/project2-api/p2-desktop_vwoklx.png)

## Time/Priority Matrix

- [Time Matrix Backend](https://res.cloudinary.com/jcloud3zf/image/upload/v1596222842/project2-api/matrix_vgwmkj.png)

#### Pre-MVP Setup
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Project structure setup| H| 2hr| 1hr| 1hr|
| Brainstorm API idea |H| 1hr| 1.5hr| 1.5hr|
| API Research| H| 1hr| 0.6hr| 0.6hr|
| Wireframe| H| 4hr| 3hr| 3hr|
| Priority Matrix| H| 1hr| 2hr| 2hr|
| Deployment| H| 2hr| 2hr| 2hr|
| Total | H | 11hrs| 10.1hrs | 10.1hrs |


#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Controller functions | H | 2hr | -hr | -hr|
| Getting query data from inputs | M | 1.5hr| -hr | -hr |
| Create model schema| M | 4hr | 0.4hr | -hr|
| Working with API | H | 3hrs| -hr | -hr |
| Establish routers | H | 3hr | -hr | -hr|
| Get event data by borough| H | 1hr| -hr| -hr|
| Get event data by event type | H | 1hr | -hr| -hr|
| Add event to user events list | H | 3 hr| -hr | -hr|
| delete event from user events list | H | 3hr| -hr| -hr|
| Create user | H | 2hr| -hr| -hr|
| Total | H | 23.5hrs| -hrs | -hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Page redirect | L | 3hr | -hr | -hr|
| Grab data from API endpoint | L | 5hr | -hr | -hr|
| Remove event once event date expires | M | 4hr| -hr| -hr|
| Total | H | 12hrs| -hrs | -hrs |

## Additional Libraries
## Code Snippet

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object

**ERROR**: Data would not display when /eventTypes was called
**Resolution** Parameter capturing routes need to be placed or named appropriately
When /eventTypes is passed through it will be viewed assinged to the borough variable once we reach that route 
```js
router.get('/:borough', getEventsByBorough)

router.get('/getEventTypes', getEventTypes)
// get event by Id
router.get('/id/:id', getEventById)
```
To resolve this issue you can add an extra path to the router so that /eventTypes passes through without being captured
```js
router.get('/borough/:borough', getEventsByBorough)

router.get('/getEventTypes', getEventTypes)
// get event by Id
router.get('/id/:id', getEventById)
```


