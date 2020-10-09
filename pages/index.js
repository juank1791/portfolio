import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Ya tu sabe maifren</title>
            </Head>
            <h1>Portfolio</h1>
            <p>Coming soon baby..... La crema loco</p>
            <style jsx global>
                {`
                    h1 {
                        color: orange;
                    }
                `}
            </style>
        </>
    );
}
