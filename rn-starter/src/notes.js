/*
Props - System to pass data from a parent to a child
State - System to track a piece of data that will change over time. If that data changes, our app will 'rerender'

useState is a Hook


WHERE TO CREATE STATE VARIABLES
-Generally, we create state variables in the Most Parent Component
that needs to Read or Change a state value

-If a Child needs to READ a state value, we can pass it in props
-If a Chile needs to CHANGE a va state value,  the parent can pass down a 
calledback function to change the state value as a prop.

When a parent rerends, so will it's children

When to use a Reducer? (FunctionThatManagesChangeToAnObject)
-We have mutiple state variables that are closely related
-Precise and well-known ways to update these values
- react hook library for reducer is { useReducer }

-Usually, by convention a reducer has two parameters
type: String that describes the exact change operation we want to make
payload: Some data that is critical to the change operation

{ type:'change_red', payload:15 }

Layout
1. Box Object Model - Use this to affect the positioning of a single element
2. Flex Box - Use this to position multiple elements with a common parent
3. Position - Use this override Box Object Model + Flex Box

Parent styling: (change how children elements are displayed)
alignItems
justifyContent
flexDirection (column (default), row)

Child styling:
flex
justifySelf

position (relative, absolute)

top, bottom, left, right will ignore for children elements

fetch vs axios
Fetch - 
* Built in function for making network requests
* Error handling is a bit weird
* Requires us to write a lot of wrapper code to make it work 'sensibly'

Axios - 
* Separate library for making requests
* Easy to use, sensible defaults
* Increases our app size (very, very slightly)


useEffect
useEffect(() => {}) // Run the arrow function EVERY TIME the component is rendered
useEffect(() => {}, []) // Run the arrow function ONLY when the component is FIRST rendered
useEffect(() => {}, [value]) // Run the arrow function ONLY when the component is FIRST rendered,
                             // AND when the 'value' changes

.

FOOD APP
Client ID
nWz4civNGCWbAQRto-iJ4g

API Key
JPBvjorxJAjonpzP9SirKdtcfyH-zDi0g3jQrNYe-AGL2LWYtfuAeWjsCX_ksnwPuUlcYoGSYkRxOI-1nGRjb2Kbb9NME7LAdg1fSwQk-sALcRcm9XpXc0AzOZLfYXYx


Redux - used for global state management


Context
- Moves information from a parent to some nested child
- Complicated to setup, lots of special terms
- Easy to communicate data from a parent to a super nested child


*/