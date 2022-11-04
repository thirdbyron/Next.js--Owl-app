import { RatingProps, SumRatingProps, UserRatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from '../../public/icons/star.svg';
import { useEffect, useState, KeyboardEvent } from 'react';

export const Rating = ({
    userRating,
    rating,
    setRating,
    ...props
}: RatingProps & (SumRatingProps | UserRatingProps)): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
        new Array(5).fill(<></>)
    );

    useEffect(() => {
        if (userRating !== undefined) {
            constructRating(userRating);
        } else if (rating !== undefined) {
            constructRating(rating);
        }
    }, [userRating, rating]);

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <StarIcon
                    key={i}
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating,
                    })}
                />
            );
        });
        setRatingArray(updatedArray);
    };

    const onRatingClick = (i: number) => {
        if (userRating !== undefined) {
            setRating(i + 1);
        }
    };

    const onChangeDisplay = (i: number) => {
        if (userRating !== undefined) {
            constructRating(i);
        }
    };

    const handleSpace = (i: number, e: KeyboardEvent<HTMLLIElement>) => {
        if (e.code === 'Space' && userRating !== undefined) {
            setRating(i + 1);
        }
    };

    return (
        <ul className={cn(styles.list)} {...props}>
            {ratingArray.map((r, i) => (
                <li
                    onClick={() => {
                        onRatingClick(i);
                    }}
                    onKeyDown={(e: KeyboardEvent<HTMLLIElement>) =>
                        userRating !== undefined && handleSpace(i, e)
                    }
                    onMouseEnter={() => onChangeDisplay(i + 1)}
                    onMouseLeave={() =>
                        userRating !== undefined && onChangeDisplay(userRating)
                    }
                    className={cn(styles.item, {
                        [styles.editable]: userRating !== undefined,
                    })}
                    tabIndex={userRating !== undefined ? 0 : -1}
                    key={i}
                >
                    {r}
                </li>
            ))}
        </ul>
    );
};
