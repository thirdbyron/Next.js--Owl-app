import Image from 'next/image';
import { Button, Htag } from '../components';
import { Paragraph } from '../components/Paragraph/Paragraph';

export default function Home() {
    return (
        <>
            <Htag tag='h1'>Text</Htag>
            <Button appearance='primary' className='h' arrow='right'>
                Кнопка
            </Button>
            <Button appearance='ghost'>Кнопка</Button>
            <Button appearance='ghost' arrow='right'>
                Кнопка
            </Button>
            <Paragraph size='l'>
                Будьте вежливы и соблюдайте наши принципы сообщества.
                Пожалуйста, не оставляйте решения и подсказки в комментариях,
                для этого есть отдельный форум.
            </Paragraph>
        </>
    );
}
