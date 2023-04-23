import Link from 'next/link';

const contactList = [
    {
        name: 'Moe',
        Age: 28
    },
    {
        name: 'Joe',
        Age: 29
    },
    {
        name: 'Jack',
        Age: 29
    },
    {
        name: 'Sarah',
        Age: 30
    }
]


const Contacts = () => {
   return (
    <>
        <Link href={'/'}>
            Back
        </Link>

    <div style={{marginTop: 10}}>
    {
        contactList.map((contact, index) => {
            return (
                <Link key={index} href={`/contacts/${contact.name}`}>
                    <ul >
                        <li>{index+1 + '-' + contact.name}</li>
                    </ul> 
                </Link>
            )
        })}
    </div>

   
    </>  
   )
}


export default Contacts;