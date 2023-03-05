import {useRouter} from "next/router";

const Contact = () => {
    const router = useRouter();
    const {name} = router.query;

    return (
        <h1>
            Name: {name}
        </h1>
    )
}

export default Contact;