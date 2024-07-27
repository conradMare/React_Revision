// props = read-only properties that are shared between components.
//         A parent component can send data to a child component,.
//         <Component key=value />

import Student from "./Student"

function App() {

  return (
    <>
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Sandy" age={25} isStudent={true}/>
      <Student name="Squidward" age={70} isStudent={false} />
    </>

  )
}

export default App
