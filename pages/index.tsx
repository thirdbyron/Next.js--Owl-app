import { useState } from 'react';
import { Button, Htag, Paragraph, Rating, Tag } from '../components';
import { LayoutMain } from '../layout/LayoutMain/LayoutMain';
import { withLayout } from '../layout/WithLayout';

function Home() {
    const rating = 4;
    const [userRating, setUserRating] = useState<number>(0);

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
            <Rating
                userRating={userRating} setRating={setUserRating}
            />
            <Rating rating={rating} />
        </>
    );
}

export default withLayout(Home, LayoutMain);
