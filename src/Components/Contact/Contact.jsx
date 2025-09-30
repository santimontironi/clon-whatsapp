import './Contact.css'

const Contact = ({photoProfile, name}) => {
  return (
    <div className="contact">
        <img src={photoProfile} alt={name} />
        <h3>{name}</h3>
    </div>
  )
}

export default Contact