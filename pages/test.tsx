import 'twin.macro'
import tw from 'twin.macro';

const Container = tw.div`max-w-4xl m-auto mt-5 text-center bg-green-100`;
const Heading = tw.h1`text-blue-600 text-2xl p-2`
const Input = () => <input tw="border hover:border-black" />

const test = () => {
    return (
        <Container>
            <Heading>Test</Heading>
            <Input />
        </Container>
    )
}

export default test
