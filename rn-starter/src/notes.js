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
*/