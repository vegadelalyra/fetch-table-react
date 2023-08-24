import Button from './Button'

const Form = ({ reqType, setReqType }) => {
  return (
    <form onSubmit={event => event.preventDefault()}>
        <Button 
            buttonText="users"
            reqType={reqType}
            setReqType={setReqType}
        />
        <Button 
            buttonText="posts"
            reqType={reqType}
            setReqType={setReqType}
        />
        <Button 
            buttonText="comments"
            reqType={reqType}
            setReqType={setReqType}
        />
    </form>
  )
}

export default Form