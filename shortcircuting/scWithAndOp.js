
// short circuting with AND operator (&&):
// In JavaScript, the AND operator (&&) is a logical operator that returns true if both operands are true. 
// It also has a short-circuiting behavior, which means that if the first operand is false, 
// the second operand will not be evaluated and the expression will short-circuit and vice versa.


const user = {
    userName: 'Tom',
    // role: 'admin',
}

user.role === 'admin' && greetAdmin()
user.role === 'admin' && console.log('Dashboard Displayed')

function greetAdmin(){
    console.log('Hi Admin!')
}