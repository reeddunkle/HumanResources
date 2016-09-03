
add id and date to ADD_TIME
fix VisibleItems connect vs JobBox/TimeBox...
actions load all data from single end point

look at where and how you're passing the store into the App component to begin with. In the tutorial it's {...state.getItems().displayItems} or something.

That might be what <Provider> does I'm not sure.