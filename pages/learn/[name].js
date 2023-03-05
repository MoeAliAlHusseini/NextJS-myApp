import { useRouter } from "next/router";



const topicsMapper = [
    {
        id: 'react',
        value: 'This is a ReactJS course!'
    },
    {
        id: 'next',
        value: 'This is a NextJS course!'
    },
    {
        id: 'vue',
        value: 'This is a VueJS course!'
    },
    {
        id: 'angular',
        value: 'This is an AngularJS course!'
    }
]



const Learn = () => {
    const router = useRouter();
    const { name } = router.query;

    const topicName = topicsMapper.find(topic => topic.id === name);

    return (
        <h1>
        {`Learn ${name} JS Page!`}
        </h1>
    )
}

export default Learn;