import { Button, Htag, Paragraph, Tag } from '../components';

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
            <Tag color='green'>Hallo</Tag>
            <Tag size='s' color='primary'>
                Hallgho
            </Tag>
            <Tag color='ghost'>Hallo</Tag>
            <Tag color='red'>Hallo</Tag>
        </>
    );
}
